"use client";
import React, { useState, useEffect } from "react";

// Define types for our data
interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

// Define props for Icon component
interface IconProps {
  name: string;
}

const Skills = () => {
  // Animation visibility state
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Active skill category for potential interactivity
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Static particles data
  const particles = [
    {
      id: 1,
      top: "10%",
      left: "20%",
      duration: "8s",
      delay: "0s",
      opacity: 0.3,
    },
    {
      id: 2,
      top: "30%",
      left: "80%",
      duration: "12s",
      delay: "1s",
      opacity: 0.4,
    },
    {
      id: 3,
      top: "50%",
      left: "40%",
      duration: "10s",
      delay: "2s",
      opacity: 0.3,
    },
    {
      id: 4,
      top: "70%",
      left: "60%",
      duration: "9s",
      delay: "0.5s",
      opacity: 0.4,
    },
    {
      id: 5,
      top: "20%",
      left: "70%",
      duration: "11s",
      delay: "1.5s",
      opacity: 0.3,
    },
    {
      id: 6,
      top: "80%",
      left: "30%",
      duration: "13s",
      delay: "2.5s",
      opacity: 0.4,
    },
    {
      id: 7,
      top: "40%",
      left: "90%",
      duration: "7s",
      delay: "0.2s",
      opacity: 0.3,
    },
    {
      id: 8,
      top: "60%",
      left: "10%",
      duration: "14s",
      delay: "1.2s",
      opacity: 0.4,
    },
    {
      id: 9,
      top: "90%",
      left: "50%",
      duration: "9s",
      delay: "2.2s",
      opacity: 0.3,
    },
    {
      id: 10,
      top: "25%",
      left: "85%",
      duration: "11s",
      delay: "0.7s",
      opacity: 0.4,
    },
  ];

  // Skills data structured by category
  const skillCategories: SkillCategory[] = [
    {
      id: "product",
      title: "Product Strategy",
      icon: "strategy",
      skills: [
        { name: "Go-to-Market Strategy", proficiency: 95 },
        { name: "Product Roadmapping", proficiency: 90 },
        { name: "User Research", proficiency: 85 },
        { name: "Competitive Analysis", proficiency: 90 },
        { name: "Product Analytics", proficiency: 95 },
      ],
    },
    {
      id: "technical",
      title: "Technical Skills",
      icon: "code",
      skills: [
        { name: "Artificial Intelligence", proficiency: 85 },
        { name: "AI/ML Product Development", proficiency: 80 },
        { name: "SQL", proficiency: 90 },
        { name: "Python", proficiency: 90 },
        { name: "Data Visualization", proficiency: 95 },
      ],
    },
    {
      id: "leadership",
      title: "Leadership",
      icon: "team",
      skills: [
        { name: "Cross-functional Collaboration", proficiency: 95 },
        { name: "Stakeholder Management", proficiency: 90 },
        { name: "Team Leadership", proficiency: 85 },
        { name: "Product Vision", proficiency: 95 },
        { name: "Communication", proficiency: 90 },
      ],
    },
  ];

  // Icons component based on icon name
  const IconComponent: React.FC<IconProps> = ({ name }) => {
    switch (name) {
      case "strategy":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "code":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "team":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
    }
  };

  // Handle clicking on a category
  const handleCategoryClick = (categoryId: string) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null); // Close if already open
    } else {
      setActiveCategory(categoryId); // Open selected category
    }
  };

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 mx-auto relative overflow-hidden py-12"
    >
      {/* Background elements - same style as in Projects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in bottom right */}
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl right-0 bottom-0 animate-pulse duration-[15000ms]" />

        {/* Smaller glow in top left */}
        <div
          className="absolute w-80 h-80 rounded-full bg-cyan-400/10 filter blur-3xl left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuOHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="w-full max-w-6xl z-10">
        {/* Section header with fade-in animation */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-white">
              Core <span className="text-cyan-500">Competencies</span>
            </span>
          </h2>
          <p className="text-xl text-white mb-16 leading-relaxed text-center max-w-3xl mx-auto">
            A blend of product, technical, and leadership skills that drive
            results.
          </p>
        </div>

        {/* Skills categories with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div
                className={`bg-gray-900/80 rounded-xl p-6 border transition-all duration-300 
                              ${
                                activeCategory === category.id
                                  ? "border-cyan-500"
                                  : "border-gray-800"
                              } 
                              ${
                                activeCategory === category.id
                                  ? "shadow-lg shadow-cyan-500/20"
                                  : ""
                              }
                              overflow-hidden relative group hover:border-blue-500/50`}
              >
                {/* Subtle hover effect - gradient line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-400/20 p-3 rounded-full mr-4">
                    <IconComponent name={category.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${
                          800 + index * 100 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-medium">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.proficiency}%` : "0%",
                            transitionDelay: `${
                              1000 + index * 100 + skillIndex * 150
                            }ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating badges section - extra enhancement */}
        <div
          className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            "Product-Market Fit",
            "A/B Testing",
            "UX Design",
            "Data-Driven",
            "Agile",
            "Machine Learning",
            "NLP",
            "Performance Optimization",
            "Strategic Thinking",
            "Growth Mindset",
          ].map((badge, index) => (
            <span
              key={index}
              className={`
    px-4 py-2
    text-sm text-gray-300
    rounded-full border border-gray-700
    bg-white/20
    bg-[length:200%_200%] bg-position-100
    transition-transform duration-150 ease-out
    transform-origin-center
    will-change-transform

    hover:border-2 hover:border-cyan-400
    hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20
    hover:bg-position-0
  `}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Animated subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-cyan-500/30"
            style={{
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity,
              animation: `floatParticle ${particle.duration} linear infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* CSS keyframes for particle animation - using global style tag */}
      <style jsx global>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
