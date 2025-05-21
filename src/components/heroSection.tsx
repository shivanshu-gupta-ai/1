"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MetricsDisplay from "./ui/heroBadge";

const HeroSection = () => {
  // Animation visibility state
  const [visible, setVisible] = useState(false);

  // Set visible on component mount
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 2xl:px-32 3xl:px-48 mx-auto relative overflow-hidden pt-24 md:pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements with animations */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in top right - with floating animation */}
        <div
          className="absolute w-96 h-96 3xl:w-[32rem] 3xl:h-[32rem] rounded-full bg-cyan-500/10 filter blur-3xl right-0 top-0 
                      animate-pulse duration-[15000ms]"
        />

        {/* Small bright spot near center-right - with slow pulse */}
        <div
          className="absolute w-64 h-64 3xl:w-[24rem] 3xl:h-[24rem] rounded-full bg-cyan-300/15 filter blur-3xl 
                     right-1/3 bottom-1/3 animate-pulse duration-[10000ms]"
          style={{ animationDelay: "1s" }}
        />

        {/* Very subtle overall tint */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent"></div> */}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-[1920px] 3xl:max-w-[2560px]">
        {/* Left section - Text content with fade-in animations */}
        <div className="md:w-1/2 mb-12 md:mb-0 max-w-2xl 3xl:max-w-3xl">
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-4xl 3xl:text-6xl mt-2 md:mt-16 leading-normal flex flex-col">
              <p className="rounded-full bg-neutral-800 px-3 py-1 mb-4 md:mb-6 3xl:mb-8 text-xs md:text-sm 3xl:text-base text-white inline-block self-start">
                <span className="inline-block">AI Engineer</span>
                <span className="inline-block mx-4">•</span>
                <span className="inline-block">Educator</span>
                <span className="inline-block mx-4">•</span>
                <span className="inline-block">Data Storyteller</span>
              </p>
              <span className="text-4xl md:text-5xl 3xl:text-7xl mt-2 font font-semibold text-white flex flex-col gap-1">
                <p>
                  Delivering{" "}
                  <span className="text-cyan-500">
                    <strong>Business </strong>
                  </span>
                </p>
                <p>
                  <span className="text-cyan-500">
                    <strong>Value </strong>
                  </span>
                  with{" "}
                  <span className="text-cyan-500">
                    <strong>AI-Powered </strong>
                  </span>
                </p>
                automation
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl 3xl:text-3xl text-gray-200 mt-8 mb-8 max-w-full">
              I&apos;m a data scientist specializing in data analytics, and AI
              Automations that solve real-world problems
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 3xl:gap-6 mt-12 mb-10">
              <button
                className="bg-cyan-600 hover:bg-cyan-950 cursor-pointer text-white text-base md:text-lg 3xl:text-xl py-2.5 md:py-3 3xl:py-4 px-6 md:px-8 3xl:px-10 rounded-xl transition duration-300"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#projects";
                  }
                }}
              >
                View My Work
              </button>
              <button
                className="cursor-pointer text-white border border-white hover:bg-white/5 font-medium text-base md:text-lg 3xl:text-xl py-2.5 md:py-3 3xl:py-4 px-6 md:px-8 3xl:px-10 rounded-xl transition duration-300"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
              >
                Get in Touch
              </button>
            </div>
            <MetricsDisplay />
          </div>
        </div>

        {/* Right section - Image with cyan border effect and fade-in */}
        <div
          className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 delay-900 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg 3xl:max-w-2xl h-[350px] md:h-[600px] lg:h-[680px] 3xl:h-[850px]">
            <Image
              src="/1/shivanshu_portfolio.jpg"
              alt="Profile"
              width={500}
              height={300}
              className="relative z-10 rounded-lg w-full h-full object-cover object-top shadow-xl"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
