"use client";
import React from "react";
import {
  Nav,
  Section,
  Header,
  Skills,
  Education,
  Certifications,
  Experience,
} from "../components";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";

const Resume = () => {
  return (
    <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
      <Nav />
      <Header />
      <Education />
      <Certifications />
      <Skills />
      <Experience />
      <Section className="flex flex-col justify-center items-center gap-4 min-h-[20vh]">
        <a
          href="/documents/Esplana-Resume.pdf"
          download="Esplana-Resume.pdf"
          className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg 
              transition-all duration-150 transform hover:shadow-[0px_0px_40px_8px_rgba(59,130,246,0.7)] 
              hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800  text-white px-8 py-4 flex items-center gap-3 text-lg font-semibold"
        >
          <FaDownload className="text-xl animate-bounce" />
          Download PDF Version
        </a>
        <Link
          href="/projects"
          className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg 
              transition-all duration-150 transform hover:shadow-[0px_0px_40px_8px_rgba(59,130,246,0.7)] 
              hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800  text-white px-8 py-4 flex items-center gap-3 text-lg font-semibold"
        >
          <FaProjectDiagram className="text-xl" />
          See Projects
        </Link>
      </Section>
    </Section>
  );
};

export default Resume;
