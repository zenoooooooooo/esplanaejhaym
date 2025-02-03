"use client";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";

interface MyFaceProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
}

const MyFace: React.FC<MyFaceProps> = ({ scale, position, rotation }) => {
  const { scene } = useGLTF("./models/MyFace.glb");
  return (
    <>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </>
  );
};

export default MyFace;
