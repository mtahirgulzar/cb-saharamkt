import React from "react";

export default function ArrowLeft(props) {
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
      className="bi bi-chevron-left"
      viewBox="1 0 16 14"
      ariaLabelledBy="ArrowLeft"
      ariaLabel="ArrowLeft"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
}
