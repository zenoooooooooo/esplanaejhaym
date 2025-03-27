"use client";
import React from "react";
import { Nav, Section, Card } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white font-jetBrains">
        <Nav />
        <Section
          className="desktop:p-12 tablet:p-4 mobile:p-2 h-[100%]"
          tag="main"
        >
          <div className="flex items-center m-0 justify-between">
            <h1 className="small:text-[20px] mobile:text-2xl tablet:text-[30px] desktop:text-4xl  m-4">
              Timeline of my Projects
            </h1>
            <h1 className="m-4">Sort</h1>
          </div>

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
