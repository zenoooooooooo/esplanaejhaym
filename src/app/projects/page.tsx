"use client";
import React from "react";
import { Nav, Section, SideBar } from "../components";


const Projects = () => {
  return (
    <>
      <div className="bg-black text-white font-jetBrains">
        <Nav />
        <Section className="p-12 h-[100vh]" tag="main">
          <h1 className="text-4xl">Projects</h1>
          <hr className="text-white my-6"/>
        </Section>
      </div>
    </>
  );
};

export default Projects;
