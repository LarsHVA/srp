// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Experience3 from "../components/Experience3";
import { Leva } from "leva";
import { StrictMode } from "react";

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
        <Experience3 />
      </Canvas>
    </>
  );
}
