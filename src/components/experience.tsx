"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, Briefcase, Code } from "lucide-react";
import Tag from "./ui/tag";

type ExperienceColor = "purple" | "cyan" | "blue" | "teal";

interface Experience {
  company: string;
  link: string;
  role: string;
  type: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  color: ExperienceColor;
  tags: string[];
}

const ExperienceSection = () => {
  // Animation visibility state
  const [visible, setVisible] = useState(false);

  // Set visible on component mount with a slight delay to ensure proper rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations - with debugging
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Make sure the element becomes visible when intersecting
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Small delay to ensure DOM elements are ready
    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      console.log("Found animate-on-scroll elements:", elements.length);
      elements.forEach((el) => observer.observe(el));
    }, 200);

    return () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Experience data
  const experiences: Experience[] = [
    {
      company: "HRS Group",
      link: "https://datasense.com",
      role: "Data Scientist",
      type: "Full-time",
      duration: "HRS Group - Oct 2023 - present",
      description:
        "Developed AI-powered systems for intelligent ticket recommendations and automated email responses, complemented by data engineering pipelines for customer insights derived from conversational AI interactions",
      icon: <Code className="text-purple-500" size={28} />,
      color: "purple",
      tags: ["AWS", "Claude", "Rest API", "Sagemake", "Power bi"],
    },
    {
      company: "Pacifist Digi Creative Solutions Pvt Ltd.",
      link: "https://techinnovate.io",
      role: "Business Analyst",
      type: "Full-time",
      duration: "May 2020 - July 2022",
      description:
        "Developed a sales performance dashboard for an Upwork client, providing actionable sales insights. Collaborated with cross-functional teams to streamline data collection, resulting in a 25% reduction in report development time.",
      icon: <Briefcase className="text-cyan-500" size={28} />,
      color: "cyan",
      tags: [
        "MS Excel",
        "Power BI",
        "Data Cleaning",
        "Data Processing",
        "MS Powerpoint",
      ],
    },
    {
      company: "Piramal Education",
      link: "https://quantumresearch.org",
      role: "Research Fellow",
      type: "Part-time",
      duration: "July 2018 - May 2020",
      description:
        "Consulted with the Government of Gujarat to drive a 20% improvement in student learning outcomes by leveraging skill-wise data analysis across 5 rural schools and delivering targeted capacity-building programs for teachers and school leaders.",
      icon: <BookOpen className="text-blue-500" size={28} />,
      color: "blue",
      tags: [
        "MS Excel",
        "Communication",
        "Data Processing",
        "MS Powerpoint",
        "Stakeholder Management",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-start justify-start px-6 md:px-12 lg:px-24 2xl:px-32 3xl:px-48 mx-auto py-24 3xl:py-32 relative overflow-hidden"
    >
      {/* Subtle background gradient - ensure z-index doesn't hide content */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in bottom right */}
        <div
          className="absolute w-96 h-96 3xl:w-[32rem] 3xl:h-[32rem] rounded-full bg-purple-500/10 filter blur-3xl right-0 bottom-0 
                      animate-pulse duration-[15000ms]"
        />

        {/* Smaller glow in top left */}
        <div
          className="absolute w-80 h-80 3xl:w-[28rem] 3xl:h-[28rem] rounded-full bg-cyan-400/10 filter blur-3xl 
                     left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />

        {/* Small bright spot near center-left */}
        <div
          className="absolute w-64 h-64 3xl:w-[24rem] 3xl:h-[24rem] rounded-full bg-blue-300/15 filter blur-3xl 
                     left-1/3 top-1/3 animate-pulse duration-[10000ms]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Section title with visibility transition */}
      <div
        className={`w-full transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ zIndex: 1 }}
      >
        <h2 className="text-4xl 3xl:text-6xl font-bold mb-2 3xl:mb-4">
          Work <span className="text-cyan-500">Experience</span>
        </h2>
        <p className="text-xl 3xl:text-2xl text-gray-300 mb-16 3xl:mb-24">
          I&apos;ve worked on...
        </p>
      </div>

      {/* Timeline container - ensure it's visible */}
      <div
        className="w-full max-w-7xl 3xl:max-w-[1920px] relative"
        style={{ zIndex: 1 }}
      >
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 3xl:left-12 top-0 bottom-0 w-0.5 3xl:w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500 opacity-70"></div>

        {/* Experience items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="animate-on-scroll mb-20 3xl:mb-32 relative pl-20 md:pl-24 3xl:pl-32"
            style={{
              opacity: 0,
              transform: "translateY(8px)",
              transition: "all 1000ms ease-out",
              transitionDelay: `${index * 200}ms`,
            }}
          >
            {/* Timeline dot with icon */}
            <div
              className={`absolute left-0 p-4 3xl:p-6 rounded-full bg-gray-900 ${
                exp.color === "purple"
                  ? "border-2 3xl:border-4 border-purple-500"
                  : exp.color === "cyan"
                  ? "border-2 3xl:border-4 border-cyan-500"
                  : exp.color === "blue"
                  ? "border-2 3xl:border-4 border-blue-500"
                  : "border-2 3xl:border-4 border-teal-500"
              } z-10`}
            >
              <div className="3xl:scale-125">{exp.icon}</div>
            </div>

            {/* Content card */}
            <div
              className={`bg-gray-900/50 backdrop-blur-sm border ${
                exp.color === "purple"
                  ? "border-purple-500/30 hover:border-purple-500 hover:shadow-purple-500/20"
                  : exp.color === "cyan"
                  ? "border-cyan-500/30 hover:border-cyan-500 hover:shadow-cyan-500/20"
                  : exp.color === "blue"
                  ? "border-blue-500/30 hover:border-blue-500 hover:shadow-blue-500/20"
                  : "border-teal-500/30 hover:border-teal-500 hover:shadow-teal-500/20"
              } rounded-xl p-6 3xl:p-8 transition-all duration-300 shadow-lg`}
            >
              <div className="flex flex-wrap justify-between items-start mb-3 3xl:mb-4">
                <h3 className="text-2xl 3xl:text-3xl font-bold flex items-center">
                  {exp.company}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-2 ${
                      exp.color === "purple"
                        ? "text-purple-400 hover:text-purple-300"
                        : exp.color === "cyan"
                        ? "text-cyan-400 hover:text-cyan-300"
                        : exp.color === "blue"
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-teal-400 hover:text-teal-300"
                    } transition-colors`}
                  ></a>
                </h3>
                <div
                  className={`${
                    exp.color === "purple"
                      ? "text-purple-400"
                      : exp.color === "cyan"
                      ? "text-cyan-400"
                      : exp.color === "blue"
                      ? "text-blue-400"
                      : "text-teal-400"
                  } font-medium 3xl:text-lg`}
                >
                  {exp.duration}
                </div>
              </div>

              <div className="mb-4 3xl:mb-6">
                <div className="flex items-center">
                  <span
                    className={`text-xl 3xl:text-2xl font-medium ${
                      exp.color === "purple"
                        ? "text-purple-300"
                        : exp.color === "cyan"
                        ? "text-cyan-300"
                        : exp.color === "blue"
                        ? "text-blue-300"
                        : "text-teal-300"
                    }`}
                  >
                    {exp.role}
                  </span>
                  <span className="mx-2 3xl:mx-3 text-gray-500">•</span>
                  <span className="text-gray-400 3xl:text-lg">{exp.type}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed 3xl:text-lg 3xl:leading-relaxed">
                {exp.description}
              </p>

              {/* Skills tags */}
              <div className="mt-4 3xl:mt-6 flex flex-wrap gap-2 3xl:gap-3">
                {exp.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} text={tag} color={exp.color} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div
        className={`w-full flex justify-center mt-8 3xl:mt-12 transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </section>
  );
};

export default ExperienceSection;
