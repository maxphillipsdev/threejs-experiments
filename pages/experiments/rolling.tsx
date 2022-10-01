import { Debug, Physics, usePlane, useSphere } from "@react-three/cannon";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";
import UtilitiesPanel from "../../components/UtilitiesPanel";

const Ground = () => {
  const [ref, api] = usePlane(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
    }),
    useRef<Mesh>(null!)
  );

  useEffect(() => {
    const handleGyroscope = (event: DeviceOrientationEvent) => {
      // Convert alpha, beta, gamma to x, y, z with a Y up coordinate system
      const { alpha, beta, gamma } = event;
      const x = (alpha || 0) * (Math.PI / 180);
      const y = (beta || 0) * (Math.PI / 180);
      const z = (gamma || 0) * (Math.PI / 180);

      // Apply the rotation to the plane
      api.rotation.set(x, y, z);
    };

    // Listen for changes in device orientation
    window.addEventListener("deviceorientation", handleGyroscope);

    // Stop listening for changes in device orientation
    return () => {
      window.removeEventListener("deviceorientation", handleGyroscope);
    };
  }, [api.rotation]);

  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </mesh>
  );
};

function Cube() {
  const [ref] = useSphere(
    () => ({
      mass: 100,
      position: [0, 5, 0],
    }),
    useRef<Mesh>(null!)
  );
  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

const Rolling = () => {
  return (
    <Canvas camera={{ position: [0, 10, 0] }}>
      <Physics>
        <Debug color="black" scale={1.1}>
          <ambientLight />
          <OrbitControls />
          <UtilitiesPanel />
          <TransformControls mode="rotate">
            <Ground />
          </TransformControls>
          <Cube />
        </Debug>
      </Physics>
    </Canvas>
  );
};

export default Rolling;
