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
      className={`transition-all duration-1000 hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div className="bg-cyan-400/20 p-4 rounded-full mb-4 w-fit">{icon}</div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 text-sm">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">{metrics.label1}</p>
            <p className="text-purple-400 font-bold">{metrics.value1}</p>
          </div>
          <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">{metrics.label2}</p>
            <p className="text-purple-400 font-bold">{metrics.value2}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
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
