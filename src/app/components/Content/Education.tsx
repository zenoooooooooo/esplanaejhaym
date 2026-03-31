import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";
import Section from "../Custom/Section";

const education = [
  {
    level: "College",
    school: "STI College - Ortigas-Cainta",
    degree: "Bachelor of Science in Information Technology",
    year: "2024 - Present",
    icon: <FaUniversity className="text-blue-400 text-4xl" />,
  },
  {
    level: "Senior High School",
    school: "Cainta Senior High School",
    degree: "TVL - Information and Communications Technology",
    year: "2022 - 2024",
    icon: <FaGraduationCap className="text-blue-400 text-4xl" />,
  },
  {
    level: "Junior High School",
    school: "Francisco P. Felix Memorial National High School",
    year: "2018 - 2022",
    icon: <FaSchool className="text-blue-400 text-4xl" />,
  },
  {
    level: "Elementary",
    school: "San Isidro Elementary School",
    year: "2011 - 2018",
    icon: <FaBook className="text-blue-400 text-4xl" />,
  },
];
export default function Education() {
  return (
    <Section className="bg-black text-white px-6 py-16 min-h-[80vh]">
      
      <h1 className="text-4xl font-semibold text-blue-400 text-center mb-16">
        Education
      </h1>

      <div className="relative max-w-3xl mx-auto">

        <div className="absolute left-4 top-0 h-full w-[2px] bg-neutral-800" />

        <div className="space-y-12">

          {education.map((edu, index) => (
            <div key={index} className="relative pl-12">

              <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-blue-400 shadow-md shadow-blue-500/30" />

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/40 transition-all">
                
                <h3 className="text-xl font-semibold text-white">
                  {edu.level}
                </h3>

                <p className="text-neutral-300 mt-1">
                  {edu.school}
                </p>

                {edu.degree && (
                  <p className="text-neutral-400 italic text-sm mt-1">
                    {edu.degree}
                  </p>
                )}

                <p className="text-neutral-500 text-sm mt-2">
                  {edu.year}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </Section>
  );
}