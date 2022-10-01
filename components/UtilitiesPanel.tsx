import { GizmoHelper, GizmoViewport } from "@react-three/drei";

const UtilitiesPanel = () => (
  <GizmoHelper alignment="bottom-right">
    <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
  </GizmoHelper>
);

export default UtilitiesPanel;
