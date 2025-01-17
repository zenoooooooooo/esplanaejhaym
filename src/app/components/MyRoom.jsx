import React from "react";
import { useGLTF } from "@react-three/drei";

const MyRoom = () => {
  const { scene } = useGLTF("/models/MyRoom.glb");
  return <primitive object={scene} />;
};

export default MyRoom;
