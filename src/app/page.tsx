"use client";
import { SolarSystem, Nav, Landing } from "./components";

export default function Home() {


  return (
    <>
      <div className="bg-black text-white font-jetBrains">
        <Nav absolute/>
        <Landing />
        <SolarSystem />
      </div>
    </>
  );
}
