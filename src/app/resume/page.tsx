"use client";
import React from "react";
import { Nav, Section, Header, Skills, Education } from "../components";

import { useTypewriter } from "react-simple-typewriter";

const Resume = () => {
  return (
    <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
      <Nav />
      <Header />
      <Skills />
      <Education />
    </Section>
  );
};

export default Resume;
