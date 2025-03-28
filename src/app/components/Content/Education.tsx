import { FaUniversity, FaSchool, FaGraduationCap, FaBook } from "react-icons/fa";
import Section from "../Custom/Section";

const education = [
  {
    level: "College",
    school: "STI College - Ortigas-Cainta",
    degree: "Bachelor of Science in Information Technology",
    year: "2024 - Present",
    icon: <FaUniversity className="text-blue-400 text-5xl" />,
  },
  {
    level: "Senior High School",
    school: "Cainta Senior High School",
    degree: "TVL - Information and Communications Technology",
    year: "2022 - 2024",
    icon: <FaGraduationCap className="text-green-400 text-5xl" />,
  },
  {
    level: "Junior High School",
    school: "Francisco P. Felix Memorial National High School",
    year: "2018 - 2022",
    icon: <FaSchool className="text-purple-400 text-5xl" />,
  },
  {
    level: "Elementary",
    school: "San Isidro Elementary School",
    year: "2011 - 2018",
    icon: <FaBook className="text-yellow-400 text-5xl" />,
  },
];

export default function Education() {
  return (
    <Section className="px-6 py-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-300">Education</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 gap-8 px-4 desktop:px-20">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300 transform hover:shadow-[0px_0px_20px_4px_rgba(59,130,246,0.5)] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700"
          >
            <div className="mb-4">{edu.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-300">{edu.level}</h3>
            <p className="text-lg text-gray-300 mt-2">{edu.school}</p>
            {edu.degree && <p className="text-gray-400 italic">{edu.degree}</p>}
            <p className="text-gray-400 mt-1">{edu.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
