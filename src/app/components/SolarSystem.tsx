import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import StarField from "./Starfield";
import CanvasLoader from "./CanvasLoader";
import { Vector3 } from "three";
import Sun from "./Sun";
import MyFace from "./MyFace";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const SolarSystem = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={<CanvasLoader />}>
        <StarField count={8000} />
        <Sun position={new Vector3(0, 0, 0)} scale={0.1} />
        <MyFace
          scale={isDesktop ? 2 : isTablet ? 1.3 : isMobile ? 1 : 0.5}
          position={isDesktop ? [-0.5, -0.3, -0.5] : isTablet ? [0,-0.2,0] : isMobile ? [0,-0.1,0] : [0,0,0]}
          rotation={isDesktop ? [0, 0.7, 0] : [0, 0, 0]}
        />
        <PerspectiveCamera position={[0, 0, 1]} makeDefault />
        {(isTablet || isDesktop) && <OrbitControls />}
      </Suspense>
    </Canvas>
  );
};

export default SolarSystem;
