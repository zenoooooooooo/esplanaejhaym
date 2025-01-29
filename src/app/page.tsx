"use client";

import Link from "next/link";
import { navLinks } from "./constants";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CanvasLoader, MyFace } from "./components";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <>
      <main className="bg-[#002b36] text-white">
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Canvas style={{ height: "100vh" }}>
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
