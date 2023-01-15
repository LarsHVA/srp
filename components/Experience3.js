import {
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience3() {
  // const [torusGeometry, setTorusGeometry] = useState();
  // const [material, setMaterial] = useState();

  const donutsGroup = useRef();

  useFrame((state, delta) => {
    for (let i = 0; i < donutsGroup.current.children.length; i++) {
      const donut = donutsGroup.current.children[i];
      i % 2 !== 0 ? (donut.rotation.y += delta * 0.2) : null;
    }
  });

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} /> */}
      {/* <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}

      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          General kenobi
        </Text3D>
      </Center>

      <group ref={donutsGroup}>
        {[...Array(100)].map((value, index) => (
          <mesh
            key={index}
            geometry={torusGeometry}
            material={material}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          />
        ))}
      </group>
    </>
  );
}
