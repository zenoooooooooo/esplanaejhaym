"use client";
import { Suspense, useEffect, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { CanvasLoader, MyRoom } from "../components";
import { useMediaQuery } from "react-responsive";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdFlashlightOff, MdFlashlightOn } from "react-icons/md";

export default function AboutMe() {
  const [light, setLight] = useState(false);
  const [camPos, setCamPos] = useState(0);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  function toggleLight(e: MouseEvent | TouchEvent | any) {
    e.preventDefault();
    setLight((prev) => !prev);
  }

  useEffect(() => {
    const eventType = isSmall && isMobile && isTablet ? "touchstart" : "click";
    const handleEvent = (e: MouseEvent | TouchEvent) => {
      toggleLight(e);
    };

    if ((isSmall && isMobile && isTablet) || isDesktop) {
      window.addEventListener(eventType, handleEvent);
    }

    return () => {
      window.removeEventListener(eventType, handleEvent);
    };
  }, [isSmall, isMobile, isTablet, isDesktop, toggleLight]);

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
            light={light}
          />
        </Suspense>
        <PerspectiveCamera
          makeDefault
          fov={isDesktop ? 100 : isTablet ? 90 : 80}
          position={[camPos, 0, 1]}
        />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
      <div className="desktop:hidden text-4xl text-gray-700 x-[9999]">
        <span className="absolute top-20 right-10 ">
          <button
            onClick={() => setCamPos(camPos - 0.01)}
            disabled={camPos <= -0.2}
          >
            <FaArrowAltCircleRight />
          </button>
        </span>
        <span className="absolute top-20 left-10">
          <button
            onClick={() => setCamPos(camPos + 0.01)}
            disabled={camPos >= 0.2}
          >
            <FaArrowAltCircleLeft />
          </button>
        </span>
        <span className="absolute top-10 right-10 text-2xl text-white">
          {light ? (
            <MdFlashlightOn onClick={toggleLight} />
          ) : (
            <MdFlashlightOff onClick={toggleLight} />
          )}
        </span>
      </div>
    </>
  );
}
