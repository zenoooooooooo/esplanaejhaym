"use client";
import React from "react";
import {
  Section,
  Header,
  Skills,
  Education,
  Certifications,
  Experience,
} from ".";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";

const Resume = () => {
  return (
    <>
      <Section className="absolute z-10 w-full h-screen overflow-y-auto px-6">
        <div>
          <Header />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Section className="text-white py-20 px-6" tag="section">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/documents/Esplana-Resume.pdf"
                download="Esplana-Resume.pdf"
                className="
            group bg-neutral-900 border border-neutral-800
            rounded-xl p-6
            flex items-center gap-4
            transition-all duration-300
            hover:border-blue-500/50
            hover:shadow-lg hover:shadow-blue-500/10
          "
              >
                <div className="p-3 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition">
                  <FaDownload className="text-xl text-blue-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Download Resume
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Get a PDF version of my CV
                  </p>
                </div>
              </a>

              <Link
                href="/projects"
                className="
            group bg-neutral-900 border border-neutral-800
            rounded-xl p-6
            flex items-center gap-4
            transition-all duration-300
            hover:border-blue-500/50
            hover:shadow-lg hover:shadow-blue-500/10
          "
              >
                <div className="p-3 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition">
                  <FaProjectDiagram className="text-xl text-blue-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    View Projects
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Explore my development work
                  </p>
                </div>
              </Link>
            </div>
          </Section>
        </div>
      </Section>
    </>
  );
};

export default Resume;
