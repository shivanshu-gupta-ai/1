"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, Briefcase, Code } from "lucide-react";

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
  const experiences = [
    {
      company: "DataSense Analytics",
      link: "https://datasense.com",
      role: "Senior AI Consultant",
      type: "Full-time",
      duration: "Jan 2023 — Present",
      description:
        "Leading AI strategy for enterprise clients, developing predictive analytics systems that increased client revenue by 32% on average. Architected an AI-driven customer behavior analysis platform using Python, TensorFlow, and AWS.",
      icon: <Code className="text-purple-500" size={28} />,
      color: "purple",
    },
    {
      company: "TechInnovate Solutions",
      link: "https://techinnovate.io",
      role: "Data Science Lead",
      type: "Full-time",
      duration: "Mar 2021 — Dec 2022",
      description:
        "Directed a team of 5 data scientists in developing ML models for product recommendation engines. Created automated data pipelines that improved processing efficiency by 65% and reduced operational costs by 28%.",
      icon: <Briefcase className="text-cyan-500" size={28} />,
      color: "cyan",
    },
    {
      company: "Quantum Research Labs",
      link: "https://quantumresearch.org",
      role: "ML Research Associate",
      type: "Part-time",
      duration: "Jun 2020 — Feb 2021",
      description:
        "Conducted research on novel deep learning architectures for natural language processing applications. Published two papers on transformer architecture optimizations in leading industry journals.",
      icon: <BookOpen className="text-blue-500" size={28} />,
      color: "blue",
    },
    {
      company: "IntelliProcess",
      link: "https://intelliprocess.ai",
      role: "Data Analyst Intern",
      type: "Internship",
      duration: "Jan 2020 — May 2020",
      description:
        "Analyzed customer interaction data to identify key engagement patterns. Built interactive dashboards using Python and Tableau that visualized customer journey touchpoints, leading to a 15% improvement in conversion rates.",
      icon: <Code className="text-teal-500" size={28} />,
      color: "teal",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-start justify-start px-6 md:px-12 lg:px-24 mx-auto py-24 relative overflow-hidden"
    >
      {/* Subtle background gradient - ensure z-index doesn't hide content */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in bottom right */}
        <div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl right-0 bottom-0 
                      animate-pulse duration-[15000ms]"
        />

        {/* Smaller glow in top left */}
        <div
          className="absolute w-80 h-80 rounded-full bg-cyan-400/10 filter blur-3xl 
                     left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />

        {/* Small bright spot near center-left */}
        <div
          className="absolute w-64 h-64 rounded-full bg-blue-300/15 filter blur-3xl 
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
        {" "}
        {/* Ensure z-index is set */}
        <h2 className="text-4xl font-bold mb-2">
          Work <span className="text-cyan-500">Experience</span>
        </h2>
        <p className="text-xl text-gray-300 mb-16">I&apos;ve worked on...</p>
      </div>

      {/* Timeline container - ensure it's visible */}
      <div className="w-full relative" style={{ zIndex: 1 }}>
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500 opacity-70"></div>

        {/* Experience items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="animate-on-scroll mb-20 relative pl-20 md:pl-24"
            style={{
              opacity: 0,
              transform: "translateY(8px)",
              transition: "all 1000ms ease-out",
              transitionDelay: `${index * 200}ms`,
            }}
          >
            {/* Timeline dot with icon */}
            <div
              className={`absolute left-0 p-4 rounded-full bg-gray-900 ${
                exp.color === "purple"
                  ? "border-2 border-purple-500"
                  : exp.color === "cyan"
                  ? "border-2 border-cyan-500"
                  : exp.color === "blue"
                  ? "border-2 border-blue-500"
                  : "border-2 border-teal-500"
              } z-10`}
            >
              {exp.icon}
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
              } rounded-xl p-6 transition-all duration-300 shadow-lg`}
            >
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-2xl font-bold flex items-center">
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
                  } font-medium`}
                >
                  {exp.duration}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center">
                  <span
                    className={`text-xl font-medium ${
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
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400">{exp.type}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">{exp.description}</p>

              {/* Skills tags - optional */}
              <div className="mt-4 flex flex-wrap gap-2">
                {index === 0 && (
                  <>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      TensorFlow
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      AWS
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Python
                    </span>
                  </>
                )}
                {index === 1 && (
                  <>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      ML Models
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Data Pipelines
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Team Leadership
                    </span>
                  </>
                )}
                {index === 2 && (
                  <>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      NLP
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Research
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Publications
                    </span>
                  </>
                )}
                {index === 3 && (
                  <>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Data Analysis
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Tableau
                    </span>
                    <span
                      className={`${
                        exp.color === "purple"
                          ? "bg-purple-500/20 text-purple-300"
                          : exp.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-300"
                          : exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-teal-500/20 text-teal-300"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      Python
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div
        className={`w-full flex justify-center mt-8 transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </section>
  );
};

export default ExperienceSection;
