import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
function StarField({ count = 8000 }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 350;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 350;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 350;

      colorArray[i * 3] = Math.random();
      colorArray[i * 3 + 1] = Math.random();
      colorArray[i * 3 + 2] = Math.random();
    }
    return { posArray, colorArray };
  }, [count]);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0005;
  });

  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

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
        <pointsMaterial
          vertexColors
          size={0.2}
          map={starTexture} 
          transparent={true}
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </points>
    </>
  );
}

export default StarField;
