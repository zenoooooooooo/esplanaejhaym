"use client";
import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
interface MyRoomProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
}

const MyRoom: React.FC<MyRoomProps> = ({ scale, position, rotation }) => {
  const { scene } = useGLTF("./models/MyRoom.glb");
  const raycaster = new THREE.Raycaster();
  const { gl, camera } = useThree();
  const [hoveredObjectPosition, setHoveredObjectPosition] = useState<
    THREE.Vector3 | undefined
  >(undefined);

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [light, setLight] = useState(false);
  useEffect(() => {
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;

      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e instanceof TouchEvent) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        return;
      }

      const mouse = new THREE.Vector2(
        (clientX / gl.domElement.clientWidth) * 2 - 1,
        -(clientY / gl.domElement.clientHeight) * 2 + 1
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

    if (isSmall && isMobile && isTablet) {
      window.addEventListener("touchmove", onPointerMove);
      window.addEventListener("touchstart", toggleLight);
    } else if (isDesktop) {
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("click", toggleLight);
      return () => {
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("click", toggleLight);
      };
    }
  }, [gl, camera, scene]);

  function toggleLight(e: MouseEvent | TouchEvent) {
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
