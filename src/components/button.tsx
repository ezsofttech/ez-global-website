import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export default function Button({ children, className = "", href, ...props }: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </div>
    </>
  );

  const fullClassName = `cssbuttons-io-button ${className}`;

  if (href) {
    const { type, ...linkProps } = props as any;
    return (
      <Link href={href} className={fullClassName} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {content}
    </button>
  );
}
