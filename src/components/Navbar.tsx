"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Custom media query implementation
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Check initially
    checkIfMobile()
    
    // Add event listener
    window.addEventListener("resize", checkIfMobile)
    
    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
];

// Reduced padding in non-scrolled state
const navbarHeight = {
    initial: "py-1", // reduced from py-2
    scrolled: "py-2"
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-lg bg-gray-400/20 mt-2 border border-gray-800 mx-60 rounded-full shadow-lg shadow-cyan-900/20" : "py-4 bg-transparent border-transparent"
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? "max-w-3xl" : "max-w-6xl"}`}>
        <div className="flex items-center justify-between">
          <a href="/" className={`font-bold transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
            <span className="font-extrabold text-white">Shivanshu</span>
            <p className="text-cyan-500 text-xs font-medium">Data Scientist</p>
          </a>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 backdrop-blur-md bg-black/30 py-4 px-4 mt-2 rounded-lg">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-white hover:text-blue-400 transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-white hover:text-blue-400 transition-colors ${scrolled ? "text-sm" : "text-base"}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar