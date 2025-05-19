export default function BadgeContainer() {
  const isVisible = true;

  const badges = [
    "Customer Support Intelligence",
    "Rec Engine",
    "AI Automations",
    "Cloud Solutions",
    "Data Engineering",
    "Product Analytics",
    "Agentic AI",
  ];

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 3xl:gap-8 transition-all duration-1000 delay-2000 ${
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

function BadgeContent({
  text,
  gradientType,
}: {
  text: string;
  gradientType: "cyan" | "purple";
}) {
  const gradientClass =
    gradientType === "cyan"
      ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400"
      : "bg-gradient-to-r from-purple-500 via-violet-500 to-purple-400";

  return (
    <span
      className={`
        px-4 py-2 3xl:px-8 3xl:py-4
        text-sm 3xl:text-xl
        text-white
        rounded-full
        ${gradientClass}
      `}
    >
      {text}
    </span>
  );
}
