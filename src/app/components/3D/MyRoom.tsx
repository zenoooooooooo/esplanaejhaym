"use client";
import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";

interface MyRoomProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
}

const MyRoom: React.FC<MyRoomProps> = ({
  scale,
  position,
  rotation,
}) => {
  const { scene } = useGLTF("./models/MyRoom.glb");
  const raycaster = new THREE.Raycaster();
  const { gl, camera } = useThree();
  const [hoveredObjectPosition, setHoveredObjectPosition] = useState<
    THREE.Vector3 | undefined
  >(undefined);

  const [light, setLight] = useState(false);
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
    window.addEventListener("click", toggleLight);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", toggleLight);
    };
  }, [gl, camera, scene]);

  function toggleLight(e: MouseEvent) {
    e.preventDefault();
    setLight((prev) => !prev);
  }

  return (
    <>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
      <spotLight
        position={hoveredObjectPosition}
        intensity={150}
        color="white"
        angle={Math.PI / 25}
        decay={1.5}
        penumbra={2}
        visible={light}
        castShadow
      />
    </>
  );
};

export default MyRoom;
