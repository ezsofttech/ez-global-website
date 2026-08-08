import React from "react";

interface Button2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export default function Button2({ children, className = "", ...props }: Button2Props) {
  const letters = children.split("");
  return (
    <button className={`btn-uiverse-mother ${className}`} {...props}>
      <span className="span-mother">
        {letters.map((char, index) => (
          <span key={index} style={{ transition: `${0.2 + index * 0.05}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="span-mother2">
        {letters.map((char, index) => (
          <span key={index} style={{ transition: `${0.2 + index * 0.05}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </button>
  );
}
