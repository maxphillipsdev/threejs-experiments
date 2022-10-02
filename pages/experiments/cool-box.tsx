import { Float, OrbitControls, RoundedBox, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import UtilitiesPanel from "../../components/UtilitiesPanel";

const CoolBox = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        {/* Add more light */}
        <pointLight position={[10, 10, 10]} />
        <UtilitiesPanel />
        <Float floatIntensity={5} speed={2}>
          <group>
            <RoundedBox args={[1, 0.5, 1]}>
              <meshPhongMaterial color="hotpink" />
            </RoundedBox>
            {/* Text lying on top of the box */}
            <Text
              color="white"
              fontSize={0.4}
              position={[0, 0.3, 0]}
              // Place the text face up
              rotation={[-Math.PI / 2, 0, 0]}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
            >
              AWS
            </Text>
          </group>
        </Float>
      </Canvas>
    </Suspense>
  );
};

export default CoolBox;
