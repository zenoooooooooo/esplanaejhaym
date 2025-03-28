import { FaBriefcase } from "react-icons/fa";
import { experience } from "../../constants";
import Section from "../Custom/Section";

const Experience = () => {
  return (
    <Section className="text-center py-16 min-h-[80vh]" tag="section">
      <h1 className="text-5xl font-bold text-blue-400 flex items-center justify-center gap-3">
        <FaBriefcase className="text-blue-400 text-7xl" /> Experience
      </h1>
      <div className="mt-12 px-6 tablet:px-12 desktop:px-24">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg 
              transition-all duration-150 transform hover:shadow-[0px_0px_40px_8px_rgba(59,130,246,0.7)] 
              hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800 m-6"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              {exp.company}
            </h2>
            <p className="text-gray-400 text-lg mb-3">{exp.role}</p>
            <p className="text-gray-500 text-md mb-5">{exp.duration}</p>
            <p className="text-gray-300 text-lg leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
