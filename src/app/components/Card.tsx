import React from "react";
import Section from "./Custom/Section";

const technologyStyles: Record<string, { textColor: string; bgColor: string }> =
  {
    HTML: { textColor: "#FFFFFF", bgColor: "#E34F26" },
    CSS: { textColor: "#FFFFFF", bgColor: "#1572B6" },

    JavaScript: { textColor: "#000000", bgColor: "#F7DF1E" },
    TypeScript: { textColor: "#FFFFFF", bgColor: "#3178C6" },
    PHP: { textColor: "#FFFFFF", bgColor: "#777BB4" },
    Java: { textColor: "#FFFFFF", bgColor: "#D91E18" },
    Python: { textColor: "#FFFFFF", bgColor: "#3776AB" },

    "Node.js": { textColor: "#FFFFFF", bgColor: "#339933" },
    "React.js": { textColor: "#000000", bgColor: "#61DAFB" },
    "Next.js": { textColor: "#FFFFFF", bgColor: "#000000" },
    "Vue.js": { textColor: "#FFFFFF", bgColor: "#4FC08D" },
    "Express.js": { textColor: "#FFFFFF", bgColor: "#404040" },
    "React Native": { textColor: "#000000", bgColor: "#61DAFB" },
    TailwindCSS: { textColor: "#FFFFFF", bgColor: "#38B2AC" },
    Firebase: { textColor: "#000000", bgColor: "#FFCA28" },

    MongoDB: { textColor: "#FFFFFF", bgColor: "#47A248" },
    MySQL: { textColor: "#FFFFFF", bgColor: "#00758F" },
    MariaDB: { textColor: "#FFFFFF", bgColor: "#003545" },
  };

const defaultStyle = { textColor: "#FFFFFF", bgColor: "#4A5568" };

const getTechnologyStyle = (tech: string) => {
  return technologyStyles[tech] || defaultStyle;
};

const Card: React.FC<IProjects> = ({
  title,
  description,
  year,
  technologies,
  category,
  completed,
  company,
  link,
}) => {
  return (
    <Section
      className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:shadow-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 m-4 "
      tag="section"
    >
      <h1 className="text-2xl font-bold text-blue-400 mb-2 transition-colors duration-300 hover:text-blue-300">
        {title}
      </h1>
      <p className="text-gray-300 mb-2 transition-colors duration-300 hover:text-gray-200">
        {description}
      </p>
      <div className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-500">Year:</span> {year}
      </div>
      <div className="mb-2">
        <span className="font-semibold text-gray-500">Technologies:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech) => {
            const { textColor, bgColor } = getTechnologyStyle(tech);

            return (
              <span
                key={tech}
                style={{
                  color: textColor,
                  backgroundColor: bgColor,
                  padding: "4px 8px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
                className="transition-all duration-300 hover:brightness-110"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="text-gray-400 mb-2 transition-colors duration-300 hover:text-gray-200">
        <span className="font-semibold text-gray-500">Category: </span>
        {category}
      </div>
      <div className="text-gray-400 mb-2 transition-colors duration-300 hover:text-gray-200">
        <span className="font-semibold text-gray-500">Completed: </span>
        {completed ? "Yes" : "No"}
      </div>
      {company && (
        <div className="text-gray-400 mb-2 transition-colors duration-300 hover:text-gray-200">
          <span className="font-semibold text-gray-500">Company: </span>
          {company}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
        >
          View Project →
        </a>
      )}
    </Section>
  );
};

export default Card;
