"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VoiceAgent from "@/components/VoiceAgent";
import Booking from "@/components/Booking";
import Trust from "@/components/Trust";
import WhyChooseUs from "@/components/WhyChooseUs";
import FloatingAI from "@/components/FloatingAI";
import Footer from "@/components/Footer";

export default function Home() {
  
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream relative selection:bg-brand-gold-light selection:text-brand-gold-dark">
      {/* Absolute background visual accent overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      
      {/* Header and announcement */}
      <Navbar 
        onBookClick={() => handleScrollToSection("booking")} 
        onVoiceAgentClick={() => handleScrollToSection("voice-agent")} 
      />
      
      <main className="flex-grow flex flex-col">
        {/* Premium Hero section with clinical interior showcase */}
        <Hero 
          onBookClick={() => handleScrollToSection("booking")} 
          onVoiceAgentClick={() => handleScrollToSection("voice-agent")} 
        />
        
        {/* Core Services Section detailing 9 clinical paths */}
        <Services onBookClick={() => handleScrollToSection("booking")} />
        
        {/* Interactive Simulated Voice Answering Console */}
        <VoiceAgent />
        
        {/* Multi-step diagnostic Scheduler experience */}
        <Booking />
        
        {/* Trust Indicators and Testimonials Carousel */}
        <Trust />
        
        {/* Clinical Technology Showcase and Outcomes */}
        <WhyChooseUs />
      </main>

      {/* Luxury coordinates footer */}
      <Footer />

      {/* Persistent floating AI chat trigger assistant */}
      <FloatingAI />
    </div>
  );
}
