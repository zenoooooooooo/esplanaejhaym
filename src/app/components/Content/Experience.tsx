import Section from "../Custom/Section";
import { experience } from "../../constants";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <Section className="text-center py-10 min-h-[80vh]" tag="section">
    <h1 className="text-5xl font-bold text-blue-400 flex items-center justify-center gap-3">
        <FaBriefcase className="text-blue-400 text-6xl" /> Experience
      </h1>
      <div className=" mt-10 px-4 tablet:px-10 desktop:px-20">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl shadow-md 
              transition-all duration-150 transform hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] 
              hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800 m-4"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {exp.company}
            </h2>
            <p className="text-gray-400 text-md mb-2">{exp.role}</p>
            <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
            <p className="text-gray-400 text-md">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
