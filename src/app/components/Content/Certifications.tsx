"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../constants";
import Section from "../Custom/Section";

export default function Certifications() {
  return (
    <Section className="text-white py-12 md:py-20 px-4 sm:px-6" tag="section">
      <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-blue-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2 md:mb-4">
        <FaCertificate className="text-2xl sm:text-4xl md:text-5xl animate-pulse" />
        Certifications
      </h1>

      <p className="text-gray-400 mb-10 md:mb-16 text-center text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-2">
        A collection of certifications in web development, programming, and
        software fundamentals, with additional certifications currently in
        progress to further strengthen my skills and stay updated with modern
        technologies.
      </p>

      <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

        <div className="space-y-8 md:space-y-16">
          {certifications.map((cert, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x:
                    typeof window !== "undefined" && window.innerWidth < 768
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
                    {cert.title}
                  </h3>

                  <p className="text-neutral-300 mt-1 text-xs sm:text-sm">
                    {cert.issuingOrganization}
                  </p>

                  <p className="text-neutral-500 text-xs sm:text-sm mt-2">
                    Issued: {cert.date}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 text-xs sm:text-sm mt-3"
                  >
                    View Certificate <FaExternalLinkAlt />
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