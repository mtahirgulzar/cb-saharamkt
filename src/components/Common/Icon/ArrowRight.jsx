import React from "react";

export default function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      strokeWidth={2}
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bi bi-chevron-right"
      viewBox="1 0 16 14"
      aria-labelledby="ArrowRight"
      aria-label="ArrowRight"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}
