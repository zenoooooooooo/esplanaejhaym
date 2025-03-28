"use client";
import { SolarSystem, Nav, Landing, Section } from "./components";

export default function Home() {


  return (
    <>
      <Section className="bg-black text-white font-jetBrains">
        <Nav absolute/>
        <Landing />
        <SolarSystem />
      </Section>
    </>
  );
}
