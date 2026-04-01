import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaJava,
  FaWindows,
  FaCogs,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiVuedotjs,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiPhp,
  SiPython,
  SiApache,
  SiLinux,
  SiDotnet,
  SiSharp,
  SiC,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import Section from "../Custom/Section";

const stacks = [
  {
    title: "MERN Stack",
    description: "Full JavaScript stack for scalable web applications",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    title: "MEVN Stack",
    description: "Vue-based full-stack web development",
    icon: <FaLaptopCode className="text-green-400 text-3xl" />,
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    title: "PERN Stack",
    description: "PostgreSQL-powered modern web apps",
    icon: <FaDatabase className="text-blue-400 text-3xl" />,
    tech: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    title: "LAMP Stack",
    description: "Classic web development stack (Linux, Apache, MySQL, PHP)",
    icon: <SiLinux className="text-white text-3xl" />,
    tech: [
      { name: "Linux", icon: <SiLinux className="text-white" /> },
      { name: "Apache", icon: <SiApache className="text-red-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
    ],
  },
  {
    title: "Next.js Fullstack",
    description: "Modern SSR/SSG React-based production apps",
    icon: <SiNextdotjs className="text-white text-3xl" />,
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Databases", icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
  {
    title: "Django / DRF Stack",
    description: "Python backend with REST API development",
    icon: <SiDjango className="text-green-500 text-3xl" />,
    tech: [
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
      { name: "DRF", icon: <SiDjango className="text-green-400" /> },
      { name: "SQLite", icon: <FaDatabase className="text-blue-500" /> },
    ],
  },
  {
    title: "React Native + Firebase",
    description: "Cross-platform mobile apps with backend support",
    icon: <FaMobileAlt className="text-green-400 text-3xl" />,
    tech: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js API", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    title: "MERN Stack Mobile",
    description: "Full JavaScript stack for scalable mobile applications",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    title: "Android Native",
    description: "Native Android development",
    icon: <FaMobileAlt className="text-green-500 text-3xl" />,
    tech: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "Android SDK", icon: <FaMobileAlt className="text-green-500" /> },
      { name: "Gradle", icon: <FaTools className="text-green-400" /> },
    ],
  },
  {
    title: "Java Desktop Apps",
    description: "Cross-platform desktop applications using Java",
    icon: <FaLaptopCode className="text-gray-400 text-3xl" />,
    tech: [
      { name: "Java", icon: <DiJava className="text-orange-500" /> },
      { name: "JavaFX", icon: <DiJava className="text-red-500" /> },
      { name: "Java Swing", icon: <DiJava className="text-yellow-500" /> },
      { name: "SceneBuilder", icon: <FaCogs className="text-gray-500" /> },
      { name: "Ant", icon: <FaTools className="text-red-400" /> },
      { name: "Maven", icon: <FaTools className="text-orange-400" /> },
      { name: "Gradle", icon: <FaTools className="text-green-400" /> },
    ],
  },
  {
    title: "Core Engineering & Systems",
    description:
      "Low-level tools, operating systems, and development fundamentals",
    icon: <FaTools className="text-yellow-400 text-3xl" />,
    tech: [
      { name: "Java", icon: <DiJava className="text-orange-500" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C", icon: <SiC className="text-gray-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "C#", icon: <SiSharp className="text-purple-400" /> },
      {
        name: "Linux Administration",
        icon: <SiLinux className="text-yellow-400" />,
      },
      { name: "Bash / Shell", icon: <FaTerminal className="text-green-300" /> },
      { name: "Git", icon: <FaGithub className="text-white" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Networking Basics", icon: <FaCogs className="text-gray-400" /> },
    ],
  },
  {
    title: "C# Windows Forms",
    description: "Windows desktop application development",
    icon: <FaWindows className="text-blue-400 text-3xl" />,
    tech: [
      { name: "C#", icon: <SiSharp className="text-purple-400" /> },
      { name: ".NET", icon: <SiDotnet className="text-blue-500" /> },
      { name: "Windows Forms", icon: <FaWindows className="text-blue-400" /> },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="text-center text-white py-20 px-6" tag="section">
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold text-blue-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <FaTools className="text-3xl sm:text-4xl md:text-5xl animate-pulse" />
        Multi-Stack Technical Portfolio
      </h1>

      <p className="text-gray-400 text-center mb-16 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
        I have experience across multiple ecosystems from web, mobile, to
        desktop, using real-world industry stacks.
      </p>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
        variants={container}
        initial="hidden"
        animate={isInView && "show"}
      >
        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            variants={card}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/40 transition"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-2 flex justify-center items-center gap-2">
              {stack.icon}
              {stack.title}
            </h2>

            <p className="text-gray-400 text-sm mb-6">{stack.description}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {stack.tech.map((item, j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <span className="text-xl text-blue-400">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
