"use client";

import Link from "next/link";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CanvasLoader, MyFace } from "./components";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <>
      <main className="bg-[#002b36] text-white">
        <nav>
          <Link href="/aboutMe">About Me</Link>
          <Link href="/aboutMe">Projects</Link>
          <Link href="/aboutMe">Contact Me</Link>
        </nav>
        <Canvas className="">
          <Suspense fallback={<CanvasLoader />}>
            <MyFace
              scale={1}
              position={[0, -0.15, -0.5]}
              rotation={[0, 0.7, 0]}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 0]} />
            <OrbitControls position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
