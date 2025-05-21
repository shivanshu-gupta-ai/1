"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";

const About = () => {
  // Animation visibility state
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

    const element = document.getElementById("about");
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

  // Memoize the background elements to prevent unnecessary re-renders
  const backgroundElements = useMemo(
    () => (
      <div className="absolute inset-0 overflow-visible -z-10">
        <div
          className="absolute w-96 h-96 3xl:w-[32rem] 3xl:h-[32rem] rounded-full bg-blue-500/10 filter blur-3xl right-0 bottom-0 
                    animate-pulse duration-[15000ms]"
        />
        <div
          className="absolute w-80 h-80 3xl:w-[28rem] 3xl:h-[28rem] rounded-full bg-cyan-400/10 filter blur-3xl 
                   left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent"></div>
      </div>
    ),
    []
  );

  // Memoize the value cards to prevent unnecessary re-renders
  const valueCards = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 3xl:gap-12">
        {/* Impact-Oriented Card */}
        <div className="bg-gray-900/80 rounded-xl p-6 3xl:p-8 flex flex-col items-center text-center border border-gray-800 hover:border-blue-500/50 transition-all">
          <div className="bg-cyan-400/30 p-4 3xl:p-6 rounded-full mb-4 3xl:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 3xl:h-8 3xl:w-8 text-cyan-400"
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
          </div>
          <h3 className="text-xl 3xl:text-2xl font-bold text-white mb-2 3xl:mb-4">
            Impact-Oriented
          </h3>
          <p className="text-gray-300 text-sm 3xl:text-base">
            Delivering business impact through scalable AI, automation, and data
            insights.
          </p>
        </div>

        {/* Collaborative Card */}
        <div className="bg-gray-900/80 rounded-xl p-6 3xl:p-8 flex flex-col items-center text-center border border-gray-800 hover:border-blue-500/50 transition-all">
          <div className="bg-white/5 p-4 3xl:p-6 rounded-full mb-4 3xl:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 3xl:h-8 3xl:w-8 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl 3xl:text-2xl font-bold text-white mb-2 3xl:mb-4">
            Collaborative
          </h3>
          <p className="text-gray-300 text-sm 3xl:text-base">
            Aligning data science, engineering, and stakeholders with trust and
            transparency.
          </p>
        </div>

        {/* Data-Driven Card */}
        <div className="bg-gray-900/80 rounded-xl p-6 3xl:p-8 flex flex-col items-center text-center border border-gray-800 hover:border-blue-500/50 transition-all">
          <div className="bg-cyan-400/30 p-4 3xl:p-6 rounded-full mb-4 3xl:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 3xl:h-8 3xl:w-8 text-cyan-400"
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
          <h3 className="text-xl 3xl:text-2xl font-bold text-white mb-2 3xl:mb-4">
            Data-Driven
          </h3>
          <p className="text-gray-300 text-sm 3xl:text-base">
            Embedding data thinking end-to-end to drive smart, real-time
            decisions.
          </p>
        </div>

        {/* Innovative Card */}
        <div className="bg-gray-900/80 rounded-xl p-6 3xl:p-8 flex flex-col items-center text-center border border-gray-800 hover:border-blue-500/50 transition-all">
          <div className="bg-cyan-400/30 p-4 3xl:p-6 rounded-full mb-4 3xl:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 3xl:h-8 3xl:w-8 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h3 className="text-xl 3xl:text-2xl font-bold text-white mb-2 3xl:mb-4">
            Innovative
          </h3>
          <p className="text-gray-300 text-sm 3xl:text-base">
            Owning AI and automations—from spotting opportunities to production.
          </p>
        </div>
      </div>
    ),
    []
  );

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 2xl:px-32 3xl:px-48 mx-auto relative overflow-hidden py-20 3xl:py-32"
    >
      {/* Subtle background gradient */}
      <div className="absolute min-h-screen inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      {backgroundElements}

      <div className="w-full max-w-7xl 3xl:max-w-[1920px]">
        {/* Section header with fade-in animation */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl 3xl:text-6xl font-bold text-center mb-16 3xl:mb-24">
            <span className=" text-white">
              About <span className="text-cyan-500">Me</span>
            </span>
          </h2>
        </div>

        {/* Main intro text - centered */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl 3xl:text-2xl text-white mb-16 3xl:mb-24 leading-relaxed text-center max-w-4xl 3xl:max-w-6xl mx-auto">
            With deep expertise in analytics, intelligent automation, and
            strategic product thinking, I specialize in transforming complex
            data into actionable insights and scalable strategies that drive
            measurable impact.
          </p>
        </div>

        {/* Quote box */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/10 border border-white/70 rounded-xl p-8 3xl:p-12 mb-16 3xl:mb-24 max-w-4xl 3xl:max-w-6xl mx-auto">
            <blockquote className="text-xl 3xl:text-2xl text-gray-100 italic mb-4 3xl:mb-6">
              &quot;The best Data Scientists go beyond models—they translate
              complexity into clarity, and insights into impact. Real value
              comes when curiosity meets business context.&quot;
            </blockquote>
            <p className="text-right text-gray-200 3xl:text-xl">
              — My Engineering Philosophy
            </p>
          </div>
        </div>
      </div>

      {/* Value cards grid - with staggered fade-in animation */}
      <div
        className={`transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {valueCards}
      </div>
    </section>
  );
};

export default React.memo(About);
