import React from "react";
import { useGLTF } from "@react-three/drei";

interface ModelProps {
  scale?: number;
  position?: number[];
  rotation?: number[];
  glb: string;
}

const Model: React.FC<ModelProps> = ({ scale, position, rotation, glb }) => {
  const { scene } = useGLTF(glb);
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
