"use client";
import React from "react";
import { Nav, Section, Header, Skills, Education } from "../components";


const Resume = () => {
  return (
    <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
      <Nav />
      <Header />
      <Education />
      <Skills />

    </Section>
  );
};

export default Resume;
