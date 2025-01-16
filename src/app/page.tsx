"use client";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RotatingCube from "./components/RotatingCube";
import MySetup from "./components/MySetup";
import CanvasLoader from "./components/CanvasLoader";
export default function Home() {
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
          <MySetup />
        </Suspense>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
      </Canvas>
    </>
  );
}
