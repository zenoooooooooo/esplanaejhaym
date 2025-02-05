import React, { ElementType, ReactNode } from "react";

interface SectionProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  tag?: ElementType;
}

const Section: React.FC<SectionProps> = ({
  text,
  children,
  className = "",
  tag: Tag = "div",
}) => {
  return (
    <Tag className={className}>
      {text && <p>{text}</p>}
      {children}
    </Tag>
  );
};

export default Section;
