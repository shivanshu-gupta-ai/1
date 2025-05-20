import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  tags: string[];
  isVisible: boolean;
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  metrics,
  tags,
  isVisible,
  delay = "0ms",
}) => {
  return (
    <div
      className={`transition-all duration-1000 hover:scale-[1.02] h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="bg-gray-900/80 rounded-xl p-6 3xl:p-8 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group h-full flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div className="bg-cyan-400/20 p-4 3xl:p-6 rounded-full mb-4 3xl:mb-6 w-fit">
          {icon}
        </div>

        <h3 className="text-xl 3xl:text-2xl font-bold text-white mb-3 3xl:mb-4">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 3xl:mb-8 text-sm 3xl:text-base">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 3xl:gap-6 mb-6 3xl:mb-8">
          <div className="bg-black/30 p-4 3xl:p-6 rounded-lg">
            <p className="text-gray-400 text-xs 3xl:text-sm mb-1 3xl:mb-2">
              {metrics.label1}
            </p>
            <p className="text-purple-400 font-bold 3xl:text-lg">
              {metrics.value1}
            </p>
          </div>
          <div className="bg-black/30 p-4 3xl:p-6 rounded-lg">
            <p className="text-gray-400 text-xs 3xl:text-sm mb-1 3xl:mb-2">
              {metrics.label2}
            </p>
            <p className="text-purple-400 font-bold 3xl:text-lg">
              {metrics.value2}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 3xl:gap-3 mt-2 3xl:mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs 3xl:text-sm bg-gray-800 text-gray-300 px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
