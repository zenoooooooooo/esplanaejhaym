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
  const radius = 50;
  let angle = 0;

  useFrame(() => {
    if (sunRef.current) {
      angle += 0.007;
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
          intensity={0.5}
          color={"#ffcc00"}
          position={position}
          castShadow
        />
        {/* <EffectComposer>
          <Bloom
            intensity={5}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
    
          />
        </EffectComposer> */}
      </group>
    </>
  );
};

export default Sun;
