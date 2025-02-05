import React from "react";

interface SectionProps {
  text: string;
  children: React.ReactNode;
  className: string;
}

const Section: React.FC<SectionProps> = ({ text, children, className }) => {
  return <section>Section</section>;
};

export default Section;
