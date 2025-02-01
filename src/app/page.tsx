"use client";
import Link from "next/link";
import { navLinks } from "./constants";
import { PerspectiveCamera } from "@react-three/drei";
import {
  CanvasLoader,
  MyFace,
  SolarSystem,
  StarField,
  Sun,
} from "./components";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
export default function Home() {
  return (
    <>
      <main className="bg-black text-white font-primary">
        <nav className="p-12">
          <ul className="flex items-center">
            <span>
              <li className="text-[20px] typing">THIS IS MY PORTFOLIO</li>
            </span>
            <div className="ml-auto flex items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:underline text-[20px] border-2 p-2 border-t-0 border-b-0"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
        <SolarSystem />
      </main>
    </>
  );
}
