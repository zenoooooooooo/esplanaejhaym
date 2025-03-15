"use client";
import { SolarSystem, Nav, Landing } from "./components";

export default function Home() {


  return (
    <>
      <main className="bg-black text-white font-jetBrains">
        <Nav absolute/>
        <Landing />
        <SolarSystem />
      </main>
    </>
  );
}
