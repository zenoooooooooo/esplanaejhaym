import React from "react";

interface ButtonProps {
  onClick: (e: any) => void;
  text: any;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
