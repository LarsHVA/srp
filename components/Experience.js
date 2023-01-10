// -------------
import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { button, useControls } from "leva";
import { useRef } from "react";
import { Perf } from "r3f-perf";
// -------------

export default function Experience() {
  const { position, color, visible } = useControls("Text", {
    position: {
      value: { x: -2, y: 0 },
      min: -4,
      max: 4,
      step: 0.01,
      joystick: "invertY",
    },
    color: { value: "#ff00ff", hue: true },
    visible: true,
    clickMeConsoleLog: button(() => {
      console.log("ok");
    }),
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });
  const { perfVisible } = useControls({
    perfVisible: true,
  });
  const cube = useRef();
  const sphere = useRef();
  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={50}
        fixed={true}
      >
        <mesh ref={sphere} position-x={-2} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphere, cube]}
          >
            SRP
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cube} mode="rotate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.8}
          color="green"
        />
      </mesh>

      <Sky />

      <Float
        speed={5}
        floatIntensity={2}
        position={[position.x, position.y, 0]}
        visible={visible}
        visible={visible}
      >
        <Text fontSize={1} color={color} position-y={2}>
          Hello there
        </Text>
      </Float>
    </>
  );
}
