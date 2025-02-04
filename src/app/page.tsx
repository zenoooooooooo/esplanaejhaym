"use client";
import { useState, useEffect, MouseEventHandler } from "react";
import { SolarSystem, Nav, Landing } from "./components";

export default function Home() {


  return (
    <>
      <main className="bg-black text-white font-jetBrains">
        <Nav />
        <Landing />
        <SolarSystem />
      </main>
    </>
  );
}
