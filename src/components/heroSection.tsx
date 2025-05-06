"use client";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Animation visibility state
  const [visible, setVisible] = useState(false);

  // Set visible on component mount
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 mx-auto relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements with animations */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in top right - with floating animation */}
        <div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/10 filter blur-3xl right-0 top-0 
                      animate-pulse duration-[15000ms]"
        />

        {/* Smaller glow in bottom left - with reverse floating animation
        <div
          className="absolute w-80 h-80 rounded-full bg-blue-400/10 filter blur-3xl 
                     left-0 bottom-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        /> */}

        {/* Small bright spot near center-right - with slow pulse */}
        <div
          className="absolute w-64 h-64 rounded-full bg-cyan-300/15 filter blur-3xl 
                     right-1/3 bottom-1/3 animate-pulse duration-[10000ms]"
          style={{ animationDelay: "1s" }}
        />

        {/* Very subtle overall tint */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent"></div> */}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left section - Text content with fade-in animations */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-4xl lg:text-4xl mt-16 leading-normal">
              <p className="inline-block rounded-full bg-neutral-800 px-4 py-1 mb-6 text-sm text-white">
                AI Product Manager<span>{"  "} • {"  "}</span>   Keynote Speaker   •   Data Storyteller
              </p>
              <span className="text-5xl font-poppins font-semibold text-white">
                Delivering {" "}
                <span className="text-cyan-500">
                  <strong>Business Value{" "}</strong>
                </span>
               
                with{" "}
                <span className="text-cyan-500">
                  <strong>AI-Powered </strong>
                </span>
                automation
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-2xl text-gray-200 mt-6 mb-8 max-w-full">
              I'm a data scientist specializing in product analytics, and AI
              driven intelligent tools that solve real-world problems.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-4 mb-20">
              <button className="bg-cyan-600 hover:bg-cyan-950 cursor-pointer text-white text-lg   py-3 px-8 rounded-xl transition duration-300">
                View My Work
              </button>
              <button className="cursor-pointer text-white border border-white hover:bg-white/5 font-medium py-3 px-8 rounded-xl transition duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right section - Image with cyan border effect and fade-in */}
        <div
          className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 delay-900 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-md">
            <img
              src="/portfolio.jpeg"
              alt="Profile"
              className="relative z-10 rounded-lg w-full h-120 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
