"use client";
import { Suspense, useEffect, useState } from "react";

import {
  FlyControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import CanvasLoader from "./components/CanvasLoader";
import { Vector3 } from "three";
import * as THREE from "three";
export default function Home() {
  const [lightPosition, setLightPosition] = useState<Vector3 | undefined>(
    undefined
  );
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = -(event.clientY / window.innerHeight);
      const z = event.clientY / window.innerHeight;
      setLightPosition(new THREE.Vector3(x, y, z));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <spotLight
          intensity={50}
          position={lightPosition}
          angle={Math.PI / 5}
          castShadow
        />
        <axesHelper args={[5]} />
        <Suspense fallback={<CanvasLoader />}>
          <Model
            scale={4}
            position={[-3, -3, -3]}
            rotation={[0, 0, 0]}
            glb="/models/MyRoom.glb"
          />
        </Suspense>
        <OrbitControls position={[2, 2, 2]} />
      </Canvas>
    </>
  );
}
