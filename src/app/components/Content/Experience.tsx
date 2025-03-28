import { FaBriefcase } from "react-icons/fa";
import { experience } from "../../constants";
import Section from "../Custom/Section";

const Experience = () => {
  return (
    <Section className="text-center py-16 min-h-[80vh]" tag="section">
      <h1 className="text-5xl font-bold text-blue-400 flex items-center justify-center gap-3">
        <FaBriefcase className="text-6xl text-blue-400 animate-pulse" />{" "}
        Experience
      </h1>
      <div className="mt-12 px-6 tablet:px-12 desktop:px-24">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col items-center 
            transition-all duration-150 transform hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] 
            bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 m-6"
          >
            <h2 className="text-3xl font-semibold text-blue-300 transition-all duration-150 hover:text-blue-400 mb-4">
              {exp.company}
            </h2>
            <p className="text-lg text-gray-300 transition-all duration-150 hover:text-white">
              {exp.role}
            </p>
            <p className="text-gray-400 transition-all duration-150 hover:text-gray-200 mt-1">
              {exp.duration}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4 transition-all duration-150 hover:text-white">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
