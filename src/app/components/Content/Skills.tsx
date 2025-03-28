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
  FaCogs,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaCubes,
  FaSass,
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
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SASS", icon: <FaSass className="text-pink-500" /> },
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
    category: "Desktop App Development Tools",
    icon: <FaLaptopCode className="text-gray-400 text-3xl" />,
    items: [
      { name: "JavaFX", icon: <DiJava className="text-orange-500" /> },
      { name: "Java Swing", icon: <DiJava className="text-red-500" /> },
      { name: "Scene Builder", icon: <FaCogs className="text-gray-500" /> },
      { name: "Gradle", icon: <SiGradle className="text-green-500" /> },
      { name: "Maven", icon: <FaCogs className="text-orange-500" /> },
      { name: "Apache Ant", icon: <FaCogs className="text-red-500" /> },
    ],
  },
  {
    category: "Mobile App Development Tools",
    icon: <FaMobileAlt className="text-green-400 text-3xl" />,
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
    category: "Languages",
    icon: <FaCode className="text-red-400 text-3xl" />,
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
    category: "Databases",
    icon: <FaServer className="text-yellow-400 text-3xl" />,
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
    category: "Others",
    icon: <FaCubes className="text-purple-400 text-3xl" />,
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
    <Section className="text-center py-10 min-h-[80vh]" tag="section">
      <h1 className="text-4xl font-bold text-blue-400">My Skills</h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 mt-10 px-4 tablet:px-10 desktop:px-20">
        {skills.map((group, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl shadow-md 
            transition-all duration-150 transform hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] 
            hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-5 flex items-center justify-center gap-2 transition-all duration-150 hover:text-blue-300">
              {group.icon} {group.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 text-lg text-gray-300 transition-all duration-150 
                  hover:text-white transform hover:scale-110"
                >
                  <span className="text-3xl text-blue-400 transition-all duration-150 hover:rotate-6 hover:scale-125">
                    {skill.icon}
                  </span>
                  <span className="transition-all duration-150 hover:text-blue-400">
                    {skill.name}
                  </span>
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
