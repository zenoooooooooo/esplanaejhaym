import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../constants";
import Section from "../Custom/Section";

const Certifications = () => {
  return (
    <Section className="text-center py-10 min-h-[80vh]" tag="section">
  <h1 className="text-5xl font-bold text-blue-400 flex items-center justify-center gap-3">
        <FaCertificate className="text-blue-400 text-6xl" /> Certifications
      </h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 mt-10 px-4 tablet:px-10 desktop:px-20">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl shadow-md 
            transition-all duration-150 transform hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] 
            hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-3 flex items-center justify-center gap-2">
              {cert.title}
            </h2>
            <p className="text-gray-400 text-sm mb-2">
              {cert.issuingOrganization}
            </p>
            <p className="text-gray-500 text-xs mb-4">Issued: {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-all duration-150"
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
