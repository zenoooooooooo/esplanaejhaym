"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

interface ModelProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
  glb: string;
}

const Model: React.FC<ModelProps> = ({ scale, position, rotation, glb }) => {
  const { scene } = useGLTF(glb);
  const raycaster = new THREE.Raycaster();
  const { gl, camera } = useThree();

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const coords = new THREE.Vector2(
        (event.clientX / gl.domElement.clientWidth) * 2 - 1,
        -(event.clientY / gl.domElement.clientHeight) * 2 - 1
      );
      raycaster.setFromCamera(coords, camera);

      const intersections = raycaster.intersectObjects(scene.children, true);
      if (intersections.length > 0) {
        console.log(intersections[0]);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [gl]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

export default Model;
