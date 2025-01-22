import { Vector3 } from "three";

interface LightSphereProps {
  position: Vector3 | undefined;
}

const LightSphere: React.FC<LightSphereProps> = ({ position }) => {
  return (
    <>
      <mesh visible={false}>
        <sphereGeometry args={[32 , 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <spotLight position={position} angle={Math.PI / 25} intensity={150} decay={2} penumbra={2} color="white" castShadow/>
    </>
  );
};

export default LightSphere;
