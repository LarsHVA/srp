// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Experience2 from "../components/Experience2";

export default function Home() {
  return (
    <>
      <Canvas
        shadows={false}
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [-4, 3, 6],
        }}
      >
        <Experience2 />
      </Canvas>
    </>
  );
}
