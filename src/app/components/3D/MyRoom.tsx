"use client";
import React, { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { MdFlashlightOff, MdFlashlightOn } from "react-icons/md";
interface MyRoomProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
  light: boolean;
}

const MyRoom: React.FC<MyRoomProps> = ({
  scale,
  position,
  rotation,
  light,
}) => {
  const { scene } = useGLTF("./models/MyRoom.glb");
  const raycaster = new THREE.Raycaster();
  const { gl, camera } = useThree();
  const [hoveredObjectPosition, setHoveredObjectPosition] = useState<
    THREE.Vector3 | undefined
  >(new THREE.Vector3(0, 0, 0));

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

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
    } else if (isDesktop) {
      window.addEventListener("mousemove", onPointerMove);
    }
    return () => {
      window.removeEventListener("touchmove", onPointerMove);

      window.removeEventListener("mousemove", onPointerMove);
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
