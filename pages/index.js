// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { Leva } from "leva";
import { StrictMode } from "react";

export default function Home() {
  return (
    <>
      <StrictMode>
        <Leva />
        <Canvas>
          <Experience />
        </Canvas>
      </StrictMode>
    </>
  );
}
