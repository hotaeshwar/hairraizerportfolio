"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { Sparkles, CheckCircle2, TrendingUp, Star } from "lucide-react";

export default function Hero() {
  const serviceBadges = [
    "Hair Styling",
    "Hair Color",
    "Bridal Makeup",
    "Grooming",
    "Skin Care",
    "Nail Art",
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const progressBars = [
    { label: "Premium Hair Styling", value: 98, color: "from-gold-primary to-gold-secondary" },
    { label: "Bridal Makeover", value: 95, color: "from-gold-secondary to-gold-primary" },
    { label: "Hair Color Transformation", value: 99, color: "from-gold-primary to-gold-secondary" },
    { label: "Skin & Nail Care", value: 96, color: "from-gold-secondary to-gold-primary" },
  ];

  return (
    <section
      id="intro"
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#fcfcfc]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-primary/8 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold-accent/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        {/* Left Side Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col text-left space-y-8"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-secondary bg-gold-primary/10 border border-gold-primary/20 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(197,168,128,0.1)]">
              <Sparkles className="w-3 h-3 text-gold-secondary animate-pulse" />
              Luxury Unisex Salon
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight"
            >
              Hair Raiserz <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-primary drop-shadow-sm text-glow-gold">
                Unisex Salon 66 A Mohali
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-lg md:text-2xl font-medium text-zinc-700 italic tracking-wide"
            >
              “Where Style, Beauty & Confidence Come Together”
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl"
          >
            Hair Raiserz Unisex Salon 66 A Mohali is a premium beauty destination crafted for modern men and women. From stylish haircuts and luxury hair color to bridal makeovers, grooming, skin care, and nail artistry, we create transformations that make every client look confident, fresh, and unforgettable.
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2.5 max-w-xl"
          >
            {serviceBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 hover:border-gold-primary hover:text-gold-secondary rounded-md transition-all duration-300 cursor-default"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo("work")}
              className="px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary hover:from-gold-secondary hover:to-gold-primary text-white font-semibold rounded-lg shadow-[0_4px_20px_rgba(197,168,128,0.2)] hover:shadow-[0_4px_30px_rgba(197,168,128,0.35)] transition-all duration-300 text-center cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View Work
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-4 bg-transparent hover:bg-zinc-50 border border-gold-primary/50 hover:border-gold-primary text-gold-secondary font-semibold rounded-lg transition-all duration-300 text-center cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-zinc-100 max-w-xl"
          >
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-gold-primary text-glow-gold">
                <AnimatedCounter value="500" suffix="+" />
              </span>
              <span className="text-xs text-zinc-550 mt-1 uppercase tracking-wider">Happy Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-gold-primary text-glow-gold">
                <AnimatedCounter value="98" suffix="%" />
              </span>
              <span className="text-xs text-zinc-550 mt-1 uppercase tracking-wider">Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-gold-primary text-glow-gold">
                <AnimatedCounter value="200" suffix="+" />
              </span>
              <span className="text-xs text-zinc-550 mt-1 uppercase tracking-wider">Transformations</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Card (Salon Experience Dashboard) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md bg-white/95 backdrop-blur-xl border border-gold-primary/15 p-6 rounded-2xl shadow-xl shadow-zinc-200/50 hover:border-gold-primary/45 transition-all duration-500 group">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-zinc-550 uppercase">Experience Dashboard</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Live Satisfaction Metrics</p>
              </div>
              <div className="p-2.5 bg-gold-primary/10 border border-gold-primary/20 rounded-lg group-hover:border-gold-primary/40 transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-gold-secondary" />
              </div>
            </div>

            {/* Ratings Grid */}
            <div className="grid grid-cols-3 gap-2.5 py-6">
              <div className="bg-zinc-50/80 border border-zinc-100 rounded-xl p-3 text-center hover:border-gold-primary/20 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-gold-secondary mx-auto mb-1.5" />
                <span className="block text-sm font-extrabold text-zinc-950">4.9/5</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tight block mt-0.5">Luxe Appeal</span>
              </div>
              <div className="bg-zinc-50/80 border border-zinc-100 rounded-xl p-3 text-center hover:border-gold-primary/20 transition-all duration-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1.5" />
                <span className="block text-sm font-extrabold text-zinc-950">4.9/5</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tight block mt-0.5">Client Rating</span>
              </div>
              <div className="bg-zinc-50/80 border border-zinc-100 rounded-xl p-3 text-center hover:border-gold-primary/20 transition-all duration-300">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 mx-auto mb-1.5" />
                <span className="block text-sm font-extrabold text-zinc-950">4.9/5</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-tight block mt-0.5">Google Rating</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-5">
              {progressBars.map((bar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-zinc-700">{bar.label}</span>
                    <span className="text-gold-secondary font-bold">{bar.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gold-accent/40 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Subtitle footer of Dashboard */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Sector 66 A, Mohali</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
