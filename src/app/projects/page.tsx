"use client";
import React, { useState } from "react";
import { Nav, Section, Card } from "../components";
import { projects } from "../constants";
import { FaFilter } from "react-icons/fa";

const companies = [
  "Personal Project",
  "School Project",
  "Infoshift Inc.",
  "ALPHA",
];

const Projects = () => {
  const [company, setCompany] = useState<string>("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-black text-white font-jetBrains">
        <Nav />
        <Section
          className="desktop:p-12 tablet:p-4 mobile:p-2 h-[100%]"
          tag="main"
        >
          <div className="flex items-center m-0 justify-between">
            <h1 className="small:text-[20px] mobile:text-2xl tablet:text-[30px] desktop:text-4xl m-4">
              Timeline of my Projects
            </h1>

            <div className="relative m-4">
              <h1
                className="hover:cursor-pointer"
                onClick={() => setVisible((prev) => !prev)}
              >
                <FaFilter />
              </h1>

              {visible && (
                <div className="absolute right-0 mt-2 bg-black shadow-lg rounded-lg p-4 w-auto">
                  {companies.map((company, index) => (
                    <h1 className="group p-2 rounded" key={index}>
                      {company}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </h1>
                  ))}
                </div>
              )}
            </div>
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
