"use client";
import React, { useState } from "react";
import { Nav, Section, Card } from "../components";
import { projects } from "../constants";
import { FaFilter, FaProjectDiagram } from "react-icons/fa";

const companies = [
  { title: "Personal Projects", subtitle: "Personal Project" },
  { title: "School Projects", subtitle: "School Project" },
  { title: "Infoshift Inc.", subtitle: "Infoshift Inc." },
  {
    title: "ALPHA",
    subtitle:
      "ALPHA : Alliance of Leading Programmers through Heuristic Adaptation",
  },
];

const Projects = () => {
  const [company, setCompany] = useState<string>("All Projects");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
        <Nav />
        <Section
          className="desktop:p-12 tablet:p-4 mobile:p-2 h-[100%]"
          tag="main"
        >
          <div className="flex items-center m-0 justify-between">
            <h1 className="text-5xl font-bold text-blue-400 small:text-[20px] flex items-center justify-center gap-3 mobile:text-2xl tablet:text-[30px] desktop:text-4xl m-4">
              <FaProjectDiagram className="text-6xl text-blue-400 animate-pulse" />
              Timeline - {company}
            </h1>

            <div className="relative m-4">
              <h1
                className="hover:cursor-pointer"
                onClick={() => setVisible((prev) => !prev)}
              >
                <FaFilter />
              </h1>

              <div
                className={`z-[999] absolute right-0 mt-2 bg-black shadow-xl border border-gray-600 rounded-lg p-4 w-56 transition-all duration-300 ease-in-out ${
                  visible ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <h1
                  className="group px-4 py-2 rounded-lg hover:bg-gray-700 text-white text-lg font-medium cursor-pointer transition-all duration-300 active:opacity-70"
                  onClick={() => setCompany("All Projects")}
                >
                  All Projects
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out h-[2px] bg-white"></span>
                </h1>
                {companies.map((company) => (
                  <h1
                    className="group px-4 py-2 rounded-lg hover:bg-gray-700 text-white text-lg font-medium cursor-pointer transition-all duration-300 active:opacity-70"
                    key={company.title}
                    onClick={() => setCompany(company.subtitle)}
                  >
                    {company.title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out h-[2px] bg-white"></span>
                  </h1>
                ))}
              </div>
            </div>
          </div>

          <hr className="text-white m-4" />
          {projects
            .filter(
              (project) =>
                company === "All Projects" || project.company === company
            )
            .map((project, index) => (
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
      </Section>
    </>
  );
};

export default Projects;
