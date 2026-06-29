"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    video: "/videos/haircut.mp4",
    title: "Precision Haircut & Grooming",
    category: "Haircuts & Styling",
    desc: "Sharp fades, structural contours, and custom styles crafted by expert barbers.",
  },
  {
    id: 2,
    video: "/videos/makeover.mp4",
    title: "Bridal Makeover & Bridal Glow",
    category: "Bridal Makeovers",
    desc: "Flawless HD bridal styling and elegant draping for the big day.",
  },
  {
    id: 3,
    video: "/videos/rajsthani.mp4",
    title: "Royal Rajasthani Makeover",
    category: "Bridal Makeovers",
    desc: "Traditional heavy bridal makeup, premium cosmetics, and majestic styling.",
  },
  {
    id: 4,
    video: "/videos/happy.mp4",
    title: "Balayage & Premium Hair Color",
    category: "Hair Color",
    desc: "Dimensional gold-accented hair color and post-color silk restoration.",
  },
  {
    id: 5,
    video: "/videos/invest.mp4",
    title: "Keratin & Smoothening Transformation",
    category: "Keratin & Smoothening",
    desc: "Deep protein re-bonding therapy resulting in seamless, shiny, and straight locks.",
  },
  {
    id: 6,
    video: "/videos/fever.mp4",
    title: "Premium Skin Treatment & Facial",
    category: "Skin Treatments",
    desc: "Revitalizing oxygen facial to deeply nourish and restore youthful skin radiance.",
  },
];

export default function WorkGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="work" className="relative py-28 px-6 bg-[#fcfcfc]">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-gold-secondary"
          >
            Showcase Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-primary text-glow-gold">Work</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-gold-primary to-gold-secondary mx-auto rounded-full mt-2"
          />
        </div>

        {/* Gallery Grid - Pure Visual Looping Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="group relative h-96 w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 transition-all duration-500 hover:border-gold-primary hover:shadow-[0_0_25px_rgba(236,171,0,0.25)] cursor-pointer shadow-sm"
            >
              {/* Loop Video Inline (Muted) */}
              <video
                src={item.video}
                muted
                loop
                playsInline
                autoPlay
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Vignette Overlay on Hover */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-all duration-300 z-10" />

              {/* Corner gold glow highlight element on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
            </motion.div>
          ))}
        </div>

        {/* Social Handles Block */}
        <div className="mt-20 text-center space-y-4 border-t border-zinc-100 pt-12">
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            For more details of our work, visit our social handles:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61566087710273"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-secondary hover:from-gold-secondary hover:to-gold-primary text-white font-bold rounded-full text-xs md:text-sm shadow-md hover:shadow-[0_0_20px_rgba(236,171,0,0.25)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Inline SVG Facebook Icon */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hairraiserzluxe66/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent border border-gold-primary/40 hover:border-gold-primary text-gold-secondary hover:bg-gold-primary/10 font-bold rounded-full text-xs md:text-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Inline SVG Instagram Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Full-Screen Video Modal (Retains Dark Backdrop for high contrast viewing) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0c0e] border border-gold-primary/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button / Cancel Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 border border-gold-primary/30 text-gold-primary hover:text-white rounded-full hover:bg-gold-primary/20 transition-all cursor-pointer shadow-lg"
                title="Go Back"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Fullscreen Video Tag */}
              <div className="relative flex-grow bg-black flex items-center justify-center">
                <video
                  src={activeVideo.video}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Action Bar under Video (Taglines removed) */}
              <div className="p-6 bg-zinc-950 border-t border-zinc-900/60 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-6 py-2.5 bg-transparent border border-gold-primary/40 text-gold-primary hover:bg-gold-primary hover:text-black font-semibold rounded-lg text-sm transition-all duration-300 cursor-pointer"
                >
                  Cancel & Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
