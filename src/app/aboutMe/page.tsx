"use client";
import { Suspense, useEffect, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader, MyRoom } from "../components";

export default function Personal() {
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
          <MyRoom
            scale={4}
            position={[1, -1, -13]}
            rotation={[0.5, -0.8, 0]}
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
