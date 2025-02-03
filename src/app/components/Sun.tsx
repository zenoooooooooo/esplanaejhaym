import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

interface SunProps {
  scale?: number;
  position?: THREE.Vector3 | undefined;
  rotation?: number[];
}

const Sun: React.FC<SunProps> = ({
  scale = 1,
  position = new THREE.Vector3(0, 0, 0),
  rotation,
}) => {
  const { scene } = useGLTF("./models/Sun.glb");
  const sunRef = useRef<THREE.Group>(null);
  const radius = 100;
  let angle = 0;

  useFrame(() => {
    if (sunRef.current) {
      angle += 0.005;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      sunRef.current.position.set(x, 0, z);
    }
  });

  return (
    <>
      <group ref={sunRef}>
        <primitive
          object={scene}
          scale={scale}
          position={position}
          rotation={rotation}
        />
        <directionalLight
          intensity={0.2}
          color={"yellow"}
          position={position}
          castShadow
        />
        <mesh scale={scale * 2} position={position}>
          <sphereGeometry args={[10, 32, 32]} />
          <meshBasicMaterial
            color="yellow"
            transparent={true}
            opacity={0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
          <mesh scale={scale * 1.5} position={position}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial
              color="orange"
              transparent={true}
              opacity={0.3}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </mesh>
        <EffectComposer>
          <Bloom
            intensity={1000}
            luminanceThreshold={0}
            luminanceSmoothing={10}
            height={300}
          />
        </EffectComposer>
      </group>
    </>
  );
};

export default Sun;
