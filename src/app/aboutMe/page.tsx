"use client";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader, MyRoom, AboutMeContent } from "../components";
import { useMediaQuery } from "react-responsive";

export default function AboutMe() {

  const [light, setLight] = useState(false);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  function toggleLight(e: MouseEvent | TouchEvent | any) {
    e.preventDefault();
    setLight((prev) => !prev);
  }

  useEffect(() => {
    const handleEvent = (e: MouseEvent) => {
      toggleLight(e);
    };

    window.addEventListener("click", handleEvent);

    return () => {
      window.removeEventListener("click", handleEvent);
    };
  }, [isSmall, isMobile, isTablet, isDesktop, toggleLight]);



  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: isDesktop ? "flex" : "none",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <MyRoom
            scale={4}
            position={[1, -1, -13]}
            rotation={[0.5, -0.8, 0]}
            light={light}
          />
        </Suspense>
        <PerspectiveCamera
          makeDefault
          fov={isDesktop ? 100 : isTablet ? 90 : 80}
          position={[0, 0, 1]}
        />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>

      <AboutMeContent />
    </>
  );
}
