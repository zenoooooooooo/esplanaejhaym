"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../constants";
import Section from "../Custom/Section";

export default function Certifications() {
  return (
    <Section className="text-center py-20 min-h-[80vh]" tag="section">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 flex items-center justify-center gap-3">
        <FaCertificate className="text-5xl text-blue-400 animate-pulse" />
        Certifications
      </h1>

      <div className="relative max-w-5xl mx-auto mt-20 px-6 md:px-0">
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

        <div className="space-y-12 md:space-y-16">
          {certifications.map((cert, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`
                  relative flex flex-col md:flex-row
                  items-start md:items-center
                  ${isLeft ? "md:justify-start" : "md:justify-end"}

                  /* mobile spacing from timeline */
                  pl-16 md:pl-0
                `}
              >
                <div
                  className="
                    absolute w-3.5 h-3.5 rounded-full bg-blue-400 shadow-blue-500/30 shadow-md
                    left-6 md:left-1/2 md:-translate-x-1/2 top-6
                  "
                />

                <div
                  className="
                    w-full md:w-[45%]
                    bg-neutral-900 border border-neutral-800
                    rounded-xl p-6 shadow-sm
                    hover:border-neutral-600
                    transition-all duration-300
                  "
                >
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h2>

                  <p className="text-neutral-300 text-sm md:text-base">
                    {cert.issuingOrganization}
                  </p>

                  <p className="text-neutral-500 text-xs md:text-sm mt-1">
                    Issued: {cert.date}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm mt-4
                      hover:text-white transition-all duration-200"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
