"use client";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyRoom from "./components/MyRoom";
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
        {" "}
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <Suspense fallback={<CanvasLoader />}>
          <MyRoom />
        </Suspense>
        <OrbitControls makeDefault position={[0, 0, 30]} />
      </Canvas>
    </>
  );
}
