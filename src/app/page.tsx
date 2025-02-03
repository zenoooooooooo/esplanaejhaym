"use client";
import { SolarSystem, Nav } from "./components";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white font-jetBrains">
        <Nav />
        <SolarSystem />
      </main>
    </>
  );
}
