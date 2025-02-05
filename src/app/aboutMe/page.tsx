"use client";
import { Suspense, useEffect, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { CanvasLoader, MyRoom } from "../components";
import { useMediaQuery } from "react-responsive";

export default function AboutMe() {
  const [camPos, setCamPos] = useState(0);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
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
          <MyRoom scale={4} position={[1, -1, -13]} rotation={[0.5, -0.8, 0]} />
        </Suspense>
        <PerspectiveCamera makeDefault fov={isDesktop ? 100 : isTablet ? 100 : 120} position={[camPos, 0, 1]} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>

      <div className="absolute top-20 right-10 text-2xl text-white x-[9999]">
        <button onClick={() => setCamPos(camPos - 0.01)}>&gt;</button>
      </div>
      <div className="absolute top-20 left-10 text-2xl text-white x-[9999]">
        <button onClick={() => setCamPos(camPos + 0.01)}>&lt;</button>
      </div>
    </>
  );
}
