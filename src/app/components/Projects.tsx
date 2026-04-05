"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "../components";
import { projects } from "../constants";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  const groupedByYear = useMemo(() => {
    return projects.reduce((acc, project) => {
      const year = project.year || "Unknown";
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    }, {} as Record<string, typeof projects>);
  }, [projects]);

  const sortedYears = Object.keys(groupedByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (  
    <Section className="absolute z-10 w-full h-screen overflow-y-auto px-6">
      <Section className="text-white py-12 md:py-20 px-4 sm:px-6">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-blue-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2 md:mb-4">
          <FaProjectDiagram className="text-2xl sm:text-4xl md:text-5xl animate-pulse" />
          Projects Timeline
        </h1>

        <p className="text-gray-400 mb-10 md:mb-16 text-center text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-2">
          A chronological showcase of my software engineering journey by year.
        </p>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

          <div className="space-y-8 md:space-y-16">
            {sortedYears.map((year) => (
              <div key={year} className="relative">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 bg-neutral-900 inline-block px-4 py-2 rounded-xl border border-neutral-800">
                    {year}
                  </h2>
                </div>

                <div className="space-y-8 md:space-y-16">
                  {groupedByYear[year].map((project, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={project.title}
                        initial={{
                          opacity: 0,
                          x:
                            typeof window !== "undefined" &&
                            window.innerWidth < 768
                              ? -60
                              : isLeft
                                ? -60
                                : 60,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`
                          relative flex flex-col md:flex-row
                          md:items-center
                          ${isLeft ? "md:justify-start" : "md:justify-end"}
                          pl-8 md:pl-0
                        `}
                      >
                        <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-400 shadow-lg shadow-blue-500/30 left-2 md:left-1/2 md:-translate-x-1/2 top-6" />

                        <div
                          className="
                            w-full md:w-[45%]
                            bg-neutral-900 border border-neutral-800
                            rounded-xl p-4 md:p-6
                            hover:border-blue-500/40
                            transition-all duration-300
                          "
                        >
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                            {project.title}
                          </h3>

                          <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                            {project.category}
                          </p>

                          <p className="text-neutral-300 mt-3 text-xs sm:text-sm leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies?.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] sm:text-xs px-2 py-1 bg-neutral-800 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              className="text-blue-400 text-xs sm:text-sm mt-4 inline-block hover:underline"
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