import React from "react";

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
    <section className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg border border-gray-700 m-4">
      <h1 className="text-2xl font-bold text-blue-400 mb-2">{title}</h1>
      <p className="text-gray-300 mb-2">{description}</p>
      <div className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-500">Year:</span> {year}
      </div>
      <div className="mb-2">
        <span className="font-semibold text-gray-500">Technologies:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-500">Category:</span>
        {category}
      </div>
      <div className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-500">Completed:</span>
        {completed ? "Yes" : "No"}
      </div>
      {company && (
        <div className="text-gray-400 mb-2">
          <span className="font-semibold text-gray-500">Company:</span>
          {company}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-500 transition"
        >
          View Project →
        </a>
      )}
    </section>
  );
};

export default Card;
