import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import Section from "../Custom/Section";
import { experience } from "../../constants";

const Experience = () => {
  return (
    <Section className=" text-white py-20 px-6" tag="section">
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold text-blue-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <FaBriefcase className="text-3xl sm:text-4xl md:text-5xl animate-pulse" />
        Experience
      </h1>

      <p className="text-gray-400 mb-16 text-center text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
        Professional experience across full-stack development, backend systems,
        and engineering roles.
      </p>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-neutral-800" />

        <div className="space-y-16 md:space-y-24">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 md:mb-10"
                >
                  <div className="bg-neutral-900 border text-center border-neutral-800 rounded-xl p-5 hover:border-blue-500/40 transition max-w-2xl mx-auto md:mx-0">
                    <h2 className="text-2xl font-semibold text-blue-400">
                      {exp.company}
                    </h2>
                    <p className="text-neutral-400 text-sm mt-1">
                      {exp.location}
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                  {exp.roles.map((role, i) => (
                    <motion.div
                      key={i}
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

                      <div
                        className={`w-full md:w-[48%] ${
                          isLeft
                            ? "md:mr-auto md:text-left"
                            : "md:ml-auto md:text-left"
                        }`}
                      >
                        <div className="bg-neutral-900 border border-neutral-800 m rounded-xl p-5 hover:border-blue-500/40 transition">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-white">
                              {role.role}
                            </h3>
                            <span className="text-xs text-neutral-500">
                              {role.duration}
                            </span>
                          </div>

                          <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                            {role.responsibilities}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
