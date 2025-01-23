"use client";
import { Suspense, useEffect, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import CanvasLoader from "../components/CanvasLoader";

export default function AboutMe() {
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
        <Suspense fallback={<CanvasLoader />}>
          <Model
            scale={4}
            position={[1, -1, -13]}
            rotation={[0.5, -0.8, 0]}
            glb="/models/MyRoom.glb"
          />
        </Suspense>
        <PerspectiveCamera makeDefault fov={100} position={[0, 0, 1]} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </>
  );
}
