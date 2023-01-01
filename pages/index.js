// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}
