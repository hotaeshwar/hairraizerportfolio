"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Camera, Award, ShoppingBag, CalendarDays, Sparkles } from "lucide-react";

const collaborations = [
  {
    icon: Crown,
    title: "Bridal Artists",
    text: "Co-creating stunning luxury bridal makeovers and signature updos in alliance with elite makeup artists.",
  },
  {
    icon: Camera,
    title: "Fashion Shoots",
    text: "Providing runway hair design and makeup styling for top-tier apparel brands and editorial portfolios.",
  },
  {
    icon: Award,
    title: "Beauty Influencers",
    text: "Partnering with digital beauty creators to showcase contemporary trends and makeover tutorials.",
  },
  {
    icon: ShoppingBag,
    title: "Product Brands",
    text: "Exclusive regional partner with premium global hair styling, care, and aesthetic product brands.",
  },
  {
    icon: CalendarDays,
    title: "Wedding Planners",
    text: "Preferred beauty partner offering integrated styling packages with leading luxury wedding agencies.",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Creators",
    text: "Crafting customized styling experiences for content creators capturing the modern salon lifestyle.",
  },
];

export default function CollaborationCard() {
  const scrollRef = useRef(null);

  // Auto Scroll Hook
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = () => {
      const card = container.firstChild;
      if (!card) return;
      
      const cardWidth = card.offsetWidth + 24; // Card width + gap
      const maxScroll = container.scrollWidth - container.clientWidth;

      // If near the end, reset smooth scroll back to 0
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(autoScroll, 3200); // Auto-scroll interval of 3.2 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="collaboration" className="relative py-28 px-6 bg-zinc-50/50 overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-gold-secondary"
          >
            Partnerships & Ventures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-primary text-glow-gold">Collaboration</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-gold-primary to-gold-secondary mx-auto rounded-full mt-2"
          />
        </div>

        {/* Auto-Running Carousel Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collaborations.map((collab, index) => {
            const IconComponent = collab.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start relative bg-white border border-zinc-200/80 rounded-2xl p-8 transition-all duration-300 hover:border-gold-primary/45 hover:shadow-[0_0_30px_rgba(236,171,0,0.12)] group overflow-hidden shadow-sm"
              >
                {/* Border glow animation effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/0 via-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/[0.03] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                {/* Icon Container */}
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-150/80 rounded-xl flex items-center justify-center text-gold-primary group-hover:bg-gold-primary/10 group-hover:border-gold-primary/20 transition-all duration-300 mb-6 shadow-sm">
                  <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-gold-secondary transition-colors duration-300 mb-3">
                  {collab.title}
                </h3>

                {/* Short text */}
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-650 transition-colors duration-300">
                  {collab.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
