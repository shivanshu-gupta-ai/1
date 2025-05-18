import React from "react";

interface TagProps {
  text: string;
  color: "purple" | "cyan" | "blue" | "teal";
}

const Tag: React.FC<TagProps> = ({ text, color }) => {
  return (
    <span
      className={`${
        color === "purple"
          ? "bg-purple-500/20 text-purple-300"
          : color === "cyan"
          ? "bg-cyan-500/20 text-cyan-300"
          : color === "blue"
          ? "bg-blue-500/20 text-blue-300"
          : "bg-teal-500/20 text-teal-300"
      } px-3 py-1 rounded-full text-sm`}
    >
      {text}
    </span>
  );
};

export default Tag;
