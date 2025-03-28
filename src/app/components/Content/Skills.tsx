import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLinux,
  FaGithub,
  FaTerminal,
  FaAndroid,
  FaCogs, // Added as a substitute for Maven
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiPhp,
  SiC,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiApache,
  SiFirebase,
  SiGradle,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import Section from "../Custom/Section";

const skills = [
  {
    category: "Web Development Tools",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MariaDB", icon: <FaDatabase className="text-gray-400" /> },
      { name: "Apache Derby", icon: <SiApache className="text-orange-500" /> },
      { name: "SQLite", icon: <FaDatabase className="text-gray-500" /> },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "C#", icon: <FaDatabase className="text-purple-400" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "C", icon: <SiC className="text-gray-400" /> },
    ],
  },
  {
    category: "Desktop App Development Tools",
    items: [
      { name: "Gradle", icon: <SiGradle className="text-green-500" /> },
      { name: "Maven", icon: <FaCogs className="text-orange-500" /> }, // Using gear icon
      { name: "Apache Ant", icon: <FaCogs className="text-red-500" /> }, // Alternative icon
    ],
  },
  {
    category: "Mobile App Development Tools",
    items: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      {
        name: "Android Development",
        icon: <FaAndroid className="text-green-500" />,
      },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Git", icon: <FaGithub className="text-white" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "BASH", icon: <FaTerminal className="text-green-300" /> },
      {
        name: "Linux Administration",
        icon: <FaLinux className="text-yellow-500" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <Section className="text-center py-10 min-h-screen" tag="section">
      <h1 className="text-4xl font-bold text-blue-400">My Skills</h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 mt-10 px-4 tablet:px-10 desktop:px-20">
        {skills.map((group, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl shadow-md transition-all duration-300 transform hover:shadow-[0px_0px_20px_4px_rgba(59,130,246,0.5)]"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-5 text-center">
              {group.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 text-lg text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-3xl text-blue-400">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
