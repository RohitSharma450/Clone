import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <div>
      {" "}
      <button
        className="cursor-pointer rounded-lg relative group overflow-hidden border-2 px-6 py-2 border-yellow-500 bg-black text-black transition-all duration-500"
        onClick={onClick}
        type={type}
      >
        <span className="font-bold px-10 relative z-10 group-hover:text-yellow-500 duration-500">
          {text}
        </span>
        <span className="absolute top-0 left-0 w-full bg-yellow-500 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-yellow-500 duration-500 group-hover:translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-yellow-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-yellow-500 duration-500 group-hover:translate-y-full h-full"></span>
      </button>
    </div>
  );
};

export default Button;
