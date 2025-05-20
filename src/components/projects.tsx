"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import ProjectCard from "./ui/project-card";

interface Project {
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
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects: Project[] = [
    {
      title: "AI-Powered Jira Assistant",
      description:
        "End-to-end intelligent system integrated with Jira to both recommend relevant historical tickets and auto-generate summaries for new ones.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      metrics: {
        label1: "Resolution Time Reduction",
        value1: "35%",
        label2: "Avg. Time Saved per Ticket",
        value2: "20-60 mins",
      },
      tags: ["AI", "Rest API", "Jira Automation", "Ticket Intelligence"],
    },
    {
      title: "AI Voicebot and Chatbot",
      description:
        "Designed and deployed conversational AI agents to automate customer interactions across voice and text.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
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
      ),
      metrics: {
        label1: "Avg Handling time Reduction",
        value1: "70%",
        label2: "Annual Cost Saved",
        value2: "$250k",
      },
      tags: ["Claude AI", "NLU", "AWS", "Cognigy"],
    },
    {
      title: "AI-Powered Auto-Reply Emails",
      description:
        "Deployed AI solution to auto-generate email responses based on email intent based on different use cases.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      metrics: {
        label1: "Volume Processed Yearly",
        value1: "500k",
        label2: "Annual Cost Saved",
        value2: "$1.2M",
      },
      tags: ["Claude AI", "Lambda", "Email Intelligence", "AWS"],
    },
    {
      title: "Customer Intelligence Dashboard",
      description:
        "Built end-to-end data pipeline and dashboard to track insights from conversational AI and ticketing tools.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
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
      ),
      metrics: {
        label1: "Pipeline Refresh",
        value1: "Everyday",
        label2: "Annual Volume Processed",
        value2: "500k",
      },
      tags: ["AWS Glue", "ETL", "Powerbi", "Sagemaker"],
    },
  ];

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

    const element = document.getElementById("projects");
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
        <div className="absolute w-96 h-96 3xl:w-[32rem] 3xl:h-[32rem] rounded-full bg-purple-500/10 filter blur-3xl right-0 top-0 animate-pulse duration-[15000ms]" />
        <div
          className="absolute w-80 h-80 3xl:w-[28rem] 3xl:h-[28rem] rounded-full bg-cyan-400/10 filter blur-3xl left-0 bottom-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent"></div>
      </div>
    ),
    []
  );

  // Memoize the header section
  const headerSection = useMemo(
    () => (
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl 3xl:text-6xl font-bold text-center mb-8 3xl:mb-12">
          <span className="text-white">
            Key <span className="text-cyan-500">Projects</span>
          </span>
        </h2>
        <p className="text-xl 3xl:text-2xl text-white mb-16 3xl:mb-24 leading-relaxed text-center max-w-4xl 3xl:max-w-6xl mx-auto">
          A showcase of products I&apos;ve built and the measurable impact
          they&apos;ve had on users and businesses.
        </p>
      </div>
    ),
    [isVisible]
  );

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 2xl:px-32 3xl:px-48 mx-auto relative overflow-hidden py-20 3xl:py-32"
    >
      {/* Subtle background gradient */}
      <div className="absolute min-h-screen inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      {backgroundElements}

      <div className="w-full max-w-7xl 3xl:max-w-[1920px]">
        {/* Section header */}
        {headerSection}

        {/* Projects grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-12 auto-rows-fr">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              {...project}
              isVisible={isVisible}
              delay={`${index * 200}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
