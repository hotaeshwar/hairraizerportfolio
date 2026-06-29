"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "collaboration", label: "Collaboration" },
  { id: "work", label: "Work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add shadow/opacity to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection of sections to highlight active tab
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect when section is in middle of screen
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-zinc-900 shadow-lg shadow-black/10"
          : "bg-black/90 border-b border-zinc-900/20"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-12" : "h-16"}`}>
        {/* Brand Logo Image (Rendered directly on black navbar) */}
        <button
          onClick={() => scrollToSection("intro")}
          className={`relative overflow-hidden flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-all duration-300 ${
            isScrolled ? "h-8 w-44" : "h-12 w-60"
          }`}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "scale(1.4)" }}
          >
            <Image
              src="/logo.png"
              alt="HAIR RAISERZ Logo"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </button>

        {/* Desktop Navigation (Tab Slide Type - Dark Mode styled) */}
        <nav className="hidden md:flex items-center space-x-1 bg-zinc-950/60 p-1.5 rounded-full border border-zinc-900">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2 text-xs uppercase font-bold tracking-wider transition-colors duration-300 cursor-pointer z-10 rounded-full select-none ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gold-primary rounded-full -z-10 shadow-[0_3px_12px_rgba(197,168,128,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6 text-gold-primary" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-900 bg-black/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-2 text-lg font-medium uppercase tracking-widest text-left cursor-pointer border-l-2 pl-4 transition-all duration-300 ${
                      isActive
                        ? "border-gold-primary text-white bg-gold-primary/10"
                        : "border-transparent text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
