"use client";
import React from "react";
import { Nav, Section, Card } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white font-jetBrains">
        <Nav />
        <Section className="p-12 h-[100%]" tag="main">
          <h1 className="text-4xl m-4">Projects</h1>
          <hr className="text-white m-4" />
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              technologies={project.technologies}
              category={project.category}
              completed={project.completed}
              company={project.company}
              link={project.link}
            />
          ))}
        </Section>
      </div>
    </>
  );
};

export default Projects;
