"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call or WhatsApp",
      value: "+91 99159 42299",
      href: "tel:+919915942299",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "hairraiserzsec66@gmail.com",
      href: "mailto:hairraiserzsec66@gmail.com",
    },
    {
      icon: MapPin,
      label: "Our Location",
      value: "Hair Raiserz, Sector 66 A, Mohali, Punjab",
      href: "https://maps.google.com/?q=Hair+Raiserz+Sector+66+A+Mohali",
    },
    {
      icon: Clock,
      label: "Salon Hours",
      value: "10:00 AM - 8:30 PM (Open Daily)",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 bg-zinc-50/50">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />

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
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950"
          >
            Book An <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-primary text-glow-gold">Appointment</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-gold-primary to-gold-secondary mx-auto rounded-full mt-2"
          />
        </div>

        {/* Info & Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white border border-zinc-200/80 p-8 rounded-2xl space-y-8 shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Connect With Us</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Have questions about our bridal makeovers or want to reserve a slot with our expert stylists? Drop us a line or call us directly. We look forward to transforming your look!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-3 bg-zinc-50 border border-zinc-150/80 rounded-xl text-gold-primary shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider block">
                          {info.label}
                        </span>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base font-bold text-zinc-800 hover:text-gold-secondary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm md:text-base font-bold text-zinc-800">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-zinc-150/80 p-8 md:p-10 rounded-2xl shadow-lg shadow-zinc-200/30 hover:border-gold-primary/20 transition-all duration-500">
              <form
                action="https://formsubmit.co/hairraiserzsec66@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Hidden Fields */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Enquiry - Hair Raiserz"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-550 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-3.5 text-sm text-zinc-900 focus:bg-white focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-zinc-550 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter phone number"
                      className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-3.5 text-sm text-zinc-900 focus:bg-white focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-550 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter email address"
                      className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-3.5 text-sm text-zinc-900 focus:bg-white focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-550 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Describe your styling/grooming request..."
                    className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-3.5 text-sm text-zinc-900 focus:bg-white focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-gold-primary to-gold-secondary hover:from-gold-secondary hover:to-gold-primary text-white font-bold rounded-lg shadow-[0_4px_20px_rgba(197,168,128,0.2)] hover:shadow-[0_4px_30px_rgba(197,168,128,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
