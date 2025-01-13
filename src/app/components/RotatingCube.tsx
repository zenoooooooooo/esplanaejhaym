"use client";
import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

const RotatingCube = () => {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 32]} />   
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles
        count={100}
        scale={1}
        size={6}
        speed={0.002}
        noise={0.2}
        color="orange"
      />
    </mesh>
  );
};

export default RotatingCube;
