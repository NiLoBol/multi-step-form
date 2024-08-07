import React from "react";

export default function Checkmark(props: { clicked: boolean }) {
  return (
    <div
      className={
        props.clicked
          ? "bg-Purplishblue  rounded-md w-5 h-5 cursor-pointer "
          : "bg-white  border-[1px] rounded-md w-5 h-5 border-Coolgray cursor-pointer"
      }
    >
      <svg
        className="p-1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 12 9"
      >
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="m1 4 3.433 3.433L10.866 1"
        />
      </svg>
    </div>
  );
}
