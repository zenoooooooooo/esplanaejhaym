"use client";

import { motion } from "framer-motion";

const education = [
  {
    level: "College",
    school: "STI College - Ortigas-Cainta",
    degree: "Bachelor of Science in Information Technology",
    year: "2024 - Present",
  },
  {
    level: "Senior High School",
    school: "Cainta Senior High School",
    degree: "TVL/ICT - Computer Programming",
    year: "2022 - 2024",
  },
  {
    level: "Junior High School",
    school: "Francisco P. Felix Memorial National High School",
    degree: "",
    year: "2018 - 2022",
  },
   {
    level: "Elementary",
    school: "San Isidro Elementary School",
    degree: "",
    year: "2018 - 2022",
  },
];

export default function Education() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h1 className="text-4xl font-semibold text-blue-400 text-center mb-20">
        Education
      </h1>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-neutral-800" />

        <div className="space-y-16">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-lg shadow-blue-500/30" />

                <div className="w-[45%] bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/40 transition-all">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.level}
                  </h3>

                  <p className="text-neutral-300 mt-1">{edu.school}</p>

                  {edu.degree && (
                    <p className="text-neutral-400 text-sm italic mt-1">
                      {edu.degree}
                    </p>
                  )}

                  <p className="text-neutral-500 text-sm mt-2">{edu.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
