"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import BadgeContainer from "./ui/badge";

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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
    }

    const element = document.getElementById("skills");
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }

    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element);
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  // Memoize the background elements
  const backgroundElements = useMemo(
    () => (
      <div className="absolute inset-0 overflow-visible -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl right-0 bottom-0 animate-pulse duration-[15000ms]" />
        <div
          className="absolute w-80 h-80 rounded-full bg-cyan-400/10 filter blur-3xl left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuOHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
    ),
    []
  );

  const skillCategories: SkillCategory[] = [
    {
      id: "technical",
      title: "Technical Skills",
      icon: "code",
      skills: [
        { name: "Cloud Computing (AWS, Azure)", proficiency: 90 },
        { name: "AI/ML Development (Sagemaker)", proficiency: 85 },
        { name: "Python Programming", proficiency: 90 },
        { name: "SQL & Data Warehousing", proficiency: 90 },
        { name: "ETL & Pipeline Automation", proficiency: 95 },
      ],
    },
    {
      id: "analytical",
      title: "Analytical Skills",
      icon: "strategy",
      skills: [
        { name: "Product & Business Analytics", proficiency: 90 },
        { name: "Data Visualization (Power BI)", proficiency: 95 },
        { name: "MLOps", proficiency: 85 },
        { name: "A/B Testing", proficiency: 85 },
        { name: "Recommendation Systems", proficiency: 90 },
      ],
    },
    {
      id: "leadership",
      title: "Collaboration & Leadership",
      icon: "team",
      skills: [
        { name: "Cross-functional Communication", proficiency: 90 },
        { name: "Stakeholder Alignment", proficiency: 85 },
        { name: "Mentorship & Knowledge Sharing", proficiency: 80 },
        { name: "Problem Solving & Root Cause Analysis", proficiency: 90 },
        { name: "Data Storytelling", proficiency: 95 },
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
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 2xl:px-32 mx-auto relative overflow-hidden py-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute min-h-screen inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      {backgroundElements}

      <div className="w-full max-w-7xl z-10">
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
          <p className="text-xl text-white mb-16 leading-relaxed text-center max-w-4xl mx-auto">
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

        <div className="flex-1 items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className=" text-white">
              Domain <span className="text-cyan-500">Expertise</span>
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <BadgeContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
