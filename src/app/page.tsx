"use client";
import { Suspense, useEffect, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "./components/Model";
import CanvasLoader from "./components/CanvasLoader";
import { Vector3 } from "three";
import * as THREE from "three";

export default function Home() {
  const [lightPosition, setLightPosition] = useState<Vector3 | undefined>(
    undefined
  );

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
          position={lightPosition}
          intensity={100}
          angle={Math.PI / 25}
          penumbra={0.1}
          decay={2}
          castShadow
        />
        <directionalLight
          intensity={0.05}
          position={[1, 1, 1]}
          color="yellow"
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
        <PerspectiveCamera makeDefault fov={50} position={[7.3, 5, 7.3]} />
        {/* <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} /> */}
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </>
  );
}
