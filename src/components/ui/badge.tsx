import { useState } from "react";

export default function BadgeContainer() {
  const isVisible = true;

  const badges = [
    "Customer Support Intelligence",
    "Rec Engine",
    "AI Automations",
    "Cloud Solutions",
    "Data Engineering",
    "Product Analytics",
  ];

  return (
    <div
      className={`flex flex-wrap justify-items-center gap-4 font-bold transition-all duration-1000 delay-2000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {badges.map((text, index) => (
        <BadgeContent
          key={index}
          text={text}
          gradientType={index % 2 === 0 ? "cyan" : "purple"}
        />
      ))}
    </div>
  );
}

// This component uses a fixed-size container to prevent layout shifts
// function BadgeWithFixedContainer({ text }: { text: string }) {
//   return (
//     <div className="flex items-center justify-center">
//       {/* This container has fixed dimensions and doesn't change on hover */}
//       <div className="w-full h-12 flex items-center justify-center">
//         <BadgeContent text={text} />
//       </div>
//     </div>
//   );
// }

function BadgeContent({
  text,
  gradientType,
}: {
  text: string;
  gradientType: "cyan" | "purple";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const gradientClass =
    gradientType === "cyan"
      ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400"
      : "bg-gradient-to-r from-purple-500 via-violet-500 to-purple-400";

  return (
    <span
      className={`
        inline-block
        px-4 py-2
        text-md 
        text-white
        rounded-full
        ${gradientClass}
      `}
    >
      {text}
    </span>
  );
}
