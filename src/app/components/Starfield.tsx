import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import Sun from "./Sun";

function StarField({ count = 8000 }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 700;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 700;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 700;

      colorArray[i * 3] = Math.random();
      colorArray[i * 3 + 1] = Math.random();
      colorArray[i * 3 + 2] = Math.random();
    }
    return { posArray, colorArray };
  }, [count]);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0005;
  });

  return (
    <>
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
    </>
  );
}

export default StarField;
