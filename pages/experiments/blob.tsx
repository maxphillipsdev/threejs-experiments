import {
  Box,
  Cloud,
  Effects,
  GizmoHelper,
  GizmoViewport,
  Html,
  MeshDistortMaterial,
  OrbitControls,
  Plane,
  Stars,
  TransformControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";

const Ball = () => {
  const [text, setText] = useState("Hello World");

  const handleOrientation = (event: DeviceOrientationEvent) => {
    const { alpha, beta, gamma } = event;
    setText(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshNormalMaterial />
      <meshNormalMaterial />
      <MeshDistortMaterial distort={2} speed={2} />
    </mesh>
  );
};

const Blob: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <ambientLight />
        <OrbitControls makeDefault />
        <GizmoHelper alignment="bottom-right">
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>
        <Suspense
          fallback={
            <Html>
              <p>Loading...</p>
            </Html>
          }
        >
          <Ball />
        </Suspense>
        {/* <mesh>
          <planeBufferGeometry args={[100, 100]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
      </Canvas>
    </Suspense>
  );
};

export default Blob;
