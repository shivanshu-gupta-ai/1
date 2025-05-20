"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import dynamic from "next/dynamic";
import { Linkedin, FileText, Youtube, Instagram, Mail } from "lucide-react";

// Dynamically import the globe component with no SSR
const Globe = dynamic(() => import("./Globe"), { ssr: false });

const ContactSection = () => {
  // Animation visibility state
  const [isVisible, setIsVisible] = useState(false);

  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shivanshu-gupta-09a4ab75/",
    },
    {
      name: "Medium",
      icon: <FileText size={20} />,
      href: "https://medium.com/@shivanshug55",
    },
    {
      name: "YouTube",
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/channel/UCakiZI89M23X5GeBzgfgAlg",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ai_brooo/",
    },
    {
      name: "E-mail",
      icon: <Mail size={20} />,
      href: "mailto:shivanshu@gmail.com",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Initialize the 3D globe
  useEffect(() => {
    if (!globeContainerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    // Renderer setup with transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(500, 500);
    renderer.setClearColor(0x000000, 0);

    // Clear any existing canvas
    if (globeContainerRef.current && globeContainerRef.current.firstChild) {
      globeContainerRef.current.removeChild(
        globeContainerRef.current.firstChild
      );
    }

    if (globeContainerRef.current) {
      globeContainerRef.current.appendChild(renderer.domElement);
    }

    // Create the globe
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // Create the texture with grid lines
    const material = new THREE.MeshBasicMaterial({
      color: 0x1a90ff,
      opacity: 0.8,
      transparent: true,
      wireframe: true,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add glow effect
    const glowGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      opacity: 0.1,
      transparent: true,
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);

    // Add outer particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create particles in a spherical distribution
      const radius = 1.2 + Math.random() * 0.5; // Between 1.2 and 1.7
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.7,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.002;
      glowSphere.rotation.y += 0.0018;
      particlesMesh.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!globeContainerRef.current) return;
      const width = globeContainerRef.current.clientWidth;
      const height = globeContainerRef.current.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [isVisible]);

  return (
    <section
      id="contact"
      className="w-full h-auto flex flex-col items-center justify-center relative overflow-hidden pt-8 pb-8 px-6 md:px-12 lg:px-24 2xl:px-32 3xl:px-48"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 -z-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-visible -z-10">
        {/* Main large glow in bottom right */}
        <div
          className="absolute w-96 h-96 3xl:w-[32rem] 3xl:h-[32rem] rounded-full bg-blue-500/10 filter blur-3xl right-0 bottom-0 
                      animate-pulse duration-[15000ms]"
        />

        {/* Smaller glow in top left */}
        <div
          className="absolute w-80 h-80 3xl:w-[28rem] 3xl:h-[28rem] rounded-full bg-cyan-400/10 filter blur-3xl 
                     left-0 top-0 animate-pulse duration-[20000ms]"
          style={{ animationDelay: "2s" }}
        />

        {/* Very subtle overall tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent"></div>
      </div>

      {/* Header Section - Centered */}
      <div className="w-full max-w-4xl 3xl:max-w-6xl text-center mb-16 3xl:mb-24">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl 3xl:text-6xl font-bold mb-6 3xl:mb-8">
            <span className="text-white">
              Connect <span className="text-cyan-500">With Me</span>
            </span>
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg 3xl:text-xl text-gray-300">
            I&apos;m always open to new opportunities and collaborations.
            Whether you have a project idea or just want to connect, feel free
            to reach out.
          </p>
        </div>
      </div>

      {/* Main Content - Socials and Globe */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 3xl:gap-24">
        {/* Social Links - Left side */}
        <div className="w-full md:w-1/2 max-w-md 3xl:max-w-lg">
          <div className="max-w-md 3xl:max-w-lg mx-auto p-6 3xl:p-8 rounded-xl bg-white/10 backdrop-blur-md bg-opacity-10 border border-white/50 text-white shadow-lg">
            <h2 className="text-2xl 3xl:text-3xl font-bold mb-4 3xl:mb-6">
              Contact
            </h2>
            <p className="text-gray-300 3xl:text-lg mb-2 3xl:mb-4">
              Feel free to connect with me on these platforms:
            </p>

            <div className="space-y-3 3xl:space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 3xl:gap-4 p-3 3xl:p-4 rounded-md transition-all duration-200 hover:bg-white/10"
                  onMouseEnter={() => setHovered(social.name)}
                  onMouseLeave={() => setHovered(null)}
                  target="_blank"
                >
                  <span
                    className={`transition-all duration-200 ${
                      hovered === social.name ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {social.icon}
                  </span>
                  <span
                    className={`font-medium transition-all duration-200 ${
                      hovered === social.name ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Globe - Right side */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] 3xl:h-[600px]">
          <div
            className={`w-full h-full transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
