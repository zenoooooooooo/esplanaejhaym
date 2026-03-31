"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Nav, Section } from "../components";
import { projects } from "../constants";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  const groupedByYear = useMemo(() => {
    return projects.reduce(
      (acc, project) => {
        const year = project.year || "Unknown";
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
      },
      {} as Record<string, typeof projects>,
    );
  }, [projects]);

  const sortedYears = Object.keys(groupedByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
      <Nav />
      <Section className="bg-black text-white px-6" tag="section">
        <h1 className="text-4xl font-semibold text-blue-400 flex items-center justify-center gap-3 mb-4">
          <FaProjectDiagram className="text-5xl animate-pulse" />
          Projects Timeline
        </h1>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          A chronological showcase of my software engineering journey by year.
        </p>

        <div className="relative max-w-5xl mx-auto mt-4 px-4">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

          <div className="space-y-16 md:space-y-24">
            {sortedYears.map((year) => (
              <div key={year} className="relative">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-blue-400 bg-neutral-900 inline-block px-4 py-2 rounded-xl border border-neutral-800">
                    {year}
                  </h2>
                </div>
                <div className="space-y-14">
                  {groupedByYear[year].map((project, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={project.title}
                        initial={{
                          opacity: 0,
                          x: window.innerWidth < 768 ? -60 : isLeft ? -60 : 60,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`
                  relative flex flex-col md:flex-row
                  md:items-center
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                  pl-12 md:pl-0
                `}
                      >
                        <div
                          className="
                  absolute w-4 h-4 rounded-full bg-blue-400
                  shadow-lg shadow-blue-500/30
                  left-6 md:left-1/2 md:-translate-x-1/2 top-6
                "
                        />

                        <div className="w-full md:w-[45%] bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/40 transition">
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>

                          <p className="text-neutral-400 text-sm">
                            {project.category}
                          </p>

                          <p className="text-neutral-300 mt-3 text-sm">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies?.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-neutral-800 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              className="text-blue-400 text-sm mt-4 inline-block hover:underline"
                            >
                              View Project →
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Projects;
