import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../constants";
import Section from "../Custom/Section";
const Certifications = () => {
  return (
    <Section className="text-center py-16 min-h-[80vh]" tag="section">
      <h1 className="text-6xl font-bold text-blue-400 flex items-center justify-center gap-4">
        <FaCertificate className="text-blue-400 text-7xl" /> Certifications
      </h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 mt-12 px-6 tablet:px-12 desktop:px-24">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg 
              transition-all duration-150 transform hover:shadow-[0px_0px_40px_8px_rgba(59,130,246,0.7)] 
              hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-800"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4 flex items-center justify-center gap-2">
              {cert.title}
            </h2>
            <p className="text-gray-400 text-lg mb-3">
              {cert.issuingOrganization}
            </p>
            <p className="text-gray-500 text-md mb-5">Issued: {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white text-lg transition-all duration-150"
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
