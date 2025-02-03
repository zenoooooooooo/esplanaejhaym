import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import StarField from "./Starfield";
import CanvasLoader from "./CanvasLoader";
import { Vector3 } from "three";
import Sun from "./Sun";
import MyFace from "./MyFace";
import { PerspectiveCamera } from "@react-three/drei";

const SolarSystem = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={<CanvasLoader />}>
        <StarField count={8000} />
        <Sun position={new Vector3(0, 0, 0)} scale={0.1} />
        <MyFace
          scale={2}
          position={[-0.5, -0.3, -0.5]}
          rotation={[0, 0.7, 0]}
        />
        <PerspectiveCamera position={[0, 0, 1]} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default SolarSystem;
