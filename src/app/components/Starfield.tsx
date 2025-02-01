import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react"

function StarField({ count = 5000 }) {
    const points = useRef<THREE.Points>(null);
  
    const positions = useMemo(() => {
      const posArray = new Float32Array(count * 3);
      const colorArray = new Float32Array(count * 3);
  
      for (let i = 0; i < count; i++) {
        // Random position
        posArray[i * 3] = (Math.random() - 0.5) * 500;
        posArray[i * 3 + 1] = (Math.random() - 0.5) * 500;
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 500;
  
        // Random color
        colorArray[i * 3] = Math.random(); // R
        colorArray[i * 3 + 1] = Math.random(); // G
        colorArray[i * 3 + 2] = Math.random(); // B
      }
      return { posArray, colorArray };
    }, [count]);
  
    useFrame(() => {
      if (points.current) points.current.rotation.y += 0.0002;
    });
  
    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions.posArray}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={positions.colorArray}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial vertexColors size={0.2} />
      </points>
    );
  }
  
  export default StarField