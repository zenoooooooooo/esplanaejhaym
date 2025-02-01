"use client";

import Link from "next/link";
import { navLinks } from "./constants";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CanvasLoader, MyFace, StarField } from "./components";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <>
      <main className="bg-black text-white">
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Canvas style={{ height: "100vh", width: "100vw" }}>
          <Suspense fallback={<CanvasLoader />}>
            <StarField count={8000} />
            <Sun />
            <MyFace
              scale={1}
              position={[0, -0.15, -0.5]}
              rotation={[0, 0.7, 0]}
            />

            {/* <PerspectiveCamera makeDefault  /> */}
            <OrbitControls enableRotate enablePan />
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}

function Sun() {
  return (
    <mesh position={[2, 0, -1]}>
      <sphereGeometry args={[10, 5, 5]} /> {/* Bigger sphere for the sun */}
      <meshStandardMaterial
        emissive={"#ffaa00"} // Glowing effect
        emissiveIntensity={3}
        color={"#ffcc00"}
      />
      <pointLight intensity={5} color={"#ffcc00"} castShadow />
    </mesh>
  );
}
