import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollaborationCard from "@/components/CollaborationCard";
import WorkGallery from "@/components/WorkGallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fcfcfc] selection:bg-gold-primary selection:text-white" suppressHydrationWarning>
      {/* Background Decorative Blob Effects (Luxury Gold) */}
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0" suppressHydrationWarning>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-gold-primary/8 to-transparent blur-[150px] animate-pulse duration-10000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-gold-primary/8 to-transparent blur-[150px] animate-pulse duration-7000" />
      </div>

      {/* Main Layout wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Content sections */}
        <main className="flex-grow">
          {/* Intro/Hero Section */}
          <Hero />

          {/* Collaboration Section */}
          <CollaborationCard />

          {/* Work Section */}
          <WorkGallery />

          {/* Contact Section */}
          <ContactForm />
        </main>
      </div>
    </div>
  );
}
