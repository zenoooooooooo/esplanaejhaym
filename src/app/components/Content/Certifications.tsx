import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../constants";
import Section from "../Custom/Section";
const Certifications = () => {
  return (
    <Section className="text-center py-16 min-h-[80vh]" tag="section">
   <h1 className="desktop:text-5xl tablet:text-5xl  mobile:text-4xl small:text-2xl font-bold text-blue-400 flex items-center justify-center gap-3">
      <FaCertificate className="text-6xl text-blue-400 animate-pulse" /> Certifications
    </h1>
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 mt-12 px-6 tablet:px-12 desktop:px-24">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col items-center 
            transition-all duration-150 transform hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] 
            bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700"
        >
          <h2 className="text-3xl font-semibold text-blue-300 transition-all duration-150 hover:text-blue-400 mb-4 flex items-center justify-center gap-2">
            {cert.title}
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-all duration-150 hover:text-white">
            {cert.issuingOrganization}
          </p>
          <p className="text-gray-400 mt-1 transition-all duration-150 hover:text-gray-200">
            Issued: {cert.date}
          </p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 text-lg 
              transition-all duration-150 hover:text-white hover:scale-105 mt-4"
          >
            View Certificate <FaExternalLinkAlt className="transition-transform duration-150 hover:scale-110" />
          </a>
        </div>
      ))}
    </div>
  </Section>
  
  );
};

export default Certifications;
