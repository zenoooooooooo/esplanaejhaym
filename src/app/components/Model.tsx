"use client";
import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import LightSphere from "./LightSphere";

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
  const [hoveredObjectPosition, setHoveredObjectPosition] =
    useState<THREE.Vector3 | null>(null);
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const mouse = new THREE.Vector2(
        (event.clientX / gl.domElement.clientWidth) * 2 - 1,
        -(event.clientY / gl.domElement.clientHeight) * 2 + 1
      );

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0];
        const x = -intersectedObject.point.x;
        const y = -intersectedObject.point.y;
        const z = -intersectedObject.point.z;
        setHoveredObjectPosition(new THREE.Vector3(x, y, z));
        console.log(intersects[0].point);
      } else {
        setHoveredObjectPosition(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [gl, camera, scene]);

  return (
    <>
      <LightSphere position={hoveredObjectPosition} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </>
  );
};

export default Model;
