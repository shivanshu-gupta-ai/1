"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl right-0 top-0 animate-pulse duration-[15000ms]" />
        <div
          className="absolute w-80 h-80 rounded-full bg-cyan-400/10 filter blur-3xl left-0 bottom-0 animate-pulse duration-[20000ms]"
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
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-white">
            Key <span className="text-cyan-500">Projects</span>
          </span>
        </h2>
        <p className="text-xl text-white mb-16 leading-relaxed text-center max-w-3xl mx-auto">
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
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 mx-auto relative overflow-hidden py-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute min-h-screen inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      {backgroundElements}

      <div className="w-full max-w-6xl">
        {/* Section header */}
        {headerSection}

        {/* Projects grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div
            className={`transition-all duration-1000 hover:scale-[1.02] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="bg-cyan-400/20 p-4 rounded-full mb-4 w-fit">
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
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Intelligent Hotel Recommendation Engine
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Redesigned recommendation algorithm to prioritize most relevant
                hotels, improving user experience and conversion rates.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">Rank Improvement</p>
                  <p className="text-purple-400 font-bold">31 → 8</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">
                    Search Time Reduction
                  </p>
                  <p className="text-purple-400 font-bold">50%</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Data Science
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  UX Research
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  A/B Testing
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className={`transition-all duration-1000 hover:scale-[1.02] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="bg-cyan-400/20 p-4 rounded-full mb-4 w-fit">
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
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Copilot – Industry-first AI Tool
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Built an AI assistant integrated with internal tools, providing
                faster access to insights and supporting data-driven decisions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">
                    Projected Yearly Savings
                  </p>
                  <p className="text-purple-400 font-bold">€3.5B</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">Adoption Rate</p>
                  <p className="text-purple-400 font-bold">85%</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  AI
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Internal Tools
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Product Strategy
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className={`transition-all duration-1000 hover:scale-[1.02] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="bg-cyan-400/20 p-4 rounded-full mb-4 w-fit">
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
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Payment Aggregator License
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Led the RBI-approved payment aggregator (PA) license to a
                revenue-generating business for Udaan.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">Savings per year</p>
                  <p className="text-purple-400 font-bold">2.4Mn</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">
                    Transactions processed per year
                  </p>
                  <p className="text-purple-400 font-bold">6Mn+</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Fintech
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Payment Systems
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Compliance
                </span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div
            className={`transition-all duration-1000 hover:scale-[1.02] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="bg-cyan-400/20 p-4 rounded-full mb-4 w-fit">
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
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Business Loan
              </h3>
              <p className="text-gray-300 mb-6 text-sm">
                Responsible for GTM, Product Marketing Strategy, Product
                Analytics and feature improvements for new fintech product: term
                loan.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">
                    AUM jump within 3 months
                  </p>
                  <p className="text-purple-400 font-bold">200Mn</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs mb-1">Client Adoption</p>
                  <p className="text-purple-400 font-bold">20%</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Fintech
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Product Marketing
                </span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
