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
  const raycaster = new THREE.Raycaster();
  const { gl, camera } = useThree();
  const [hoveredObjectPosition, setHoveredObjectPosition] = useState<
    THREE.Vector3 | undefined
  >(undefined);

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
        setHoveredObjectPosition(undefined);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [gl, camera, scene]);

  return (
    <>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
      <pointLight position={hoveredObjectPosition} color={"lightblue"} intensity={1} castShadow />
    </>
  );
};

export default MyFace;
