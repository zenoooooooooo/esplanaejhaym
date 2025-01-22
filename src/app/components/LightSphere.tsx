import { Object3DEventMap, Vector3 } from "three";
import React, { RefObject, useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface LightSphereProps {
  position: Vector3 | undefined;
}

const LightSphere: React.FC<LightSphereProps> = ({ position }) => {
  const targetRef = useRef<THREE.Mesh | null>(null);
  const spotlightRef = useRef<THREE.SpotLight | null>(null);

  const targetPosition = new Vector3(0, 0, 0);
  useFrame(() => {
    if (targetRef.current && spotlightRef.current) {
      targetRef.current.position.lerp(targetPosition, 0.1); 
      targetRef.current.updateMatrixWorld();
    }
  });
  return (
    <>
      <mesh ref={targetRef} position={[0, 0, 11]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <spotLight
        position={position}
        intensity={150}
        color="white"
        angle={Math.PI / 25}
        decay={1.5}
        penumbra={2}
        castShadow
      />
    </>
  );
};

export default LightSphere;
