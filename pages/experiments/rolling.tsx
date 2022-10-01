import { Canvas } from "@react-three/fiber";
import UtilitiesPanel from "../../components/UtilitiesPanel";

const Ground = () => (
  <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshStandardMaterial attach="material" color="red" />
  </mesh>
);

const Rolling = () => {
  return (
    <Canvas
      onCreated={(state) => state.camera.up.set(0, 0, 1)}
      camera={{ position: [0, 100, 0], fov: 50 }}
    >
      <ambientLight />
      <UtilitiesPanel />
      <Ground />
    </Canvas>
  );
};

export default Rolling;
