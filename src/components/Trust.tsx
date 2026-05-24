"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  treatment: string;
  quote: string;
  rating: number;
}

export default function Trust() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Ananya Iyer",
      role: "Managing Partner, Iyer & Co. Holdings",
      treatment: "Porcelain Veneers & Smile Makeover",
      quote: "The digital preview allowed me to see my veneers before anything was placed. Dr. Aditya Sharma and the clinical AI coordinate perfectly. The experience felt like a private club, and the outcome is flawless.",
      rating: 5,
    },
    {
      name: "Rohan Malhotra",
      role: "Managing Director, Peak Ventures India",
      treatment: "Computer-Guided Dental Implants",
      quote: "Absolute precision dentistry. The micro-surgical implant procedure was entirely pain-free, completed in a single afternoon. Aura has completely redefined medical comfort and high-tech safety.",
      rating: 5,
    },
    {
      name: "Prof. Priya Patel",
      role: "Biomedical Professor, IIT Bombay",
      treatment: "Laser Whitening & Preventive Care",
      quote: "As a health scientist, I was blown away by Aura's ISO Class 5 sterilization standard and active diagnostic tracking. This is clinical excellence backed by a warm, hospitable concierge experience.",
      rating: 5,
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold-light/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-medical-blue/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image in beautiful luxury clinical framing */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Soft decorative shadow rings */}
            <div className="absolute inset-0 bg-brand-gold/5 rounded-3xl rotate-3 transform scale-[1.01] pointer-events-none" />
            <div className="absolute -inset-1.5 rounded-3xl border border-brand-gold/10 pointer-events-none animate-pulse-slow" />
            
            {/* The Image Container */}
            <div className="relative w-full aspect-[3/4] max-w-sm md:max-w-md rounded-2xl overflow-hidden gold-shadow border-2 border-brand-gold/20 group">
              <Image
                src="/images/patient-dentist.jpg"
                alt="Elite patient care at Aura Clinical Suites"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-w-7xl) 100vw, 40vw"
              />

              {/* Frosted Glass Overlay with trust stats */}
              <div className="absolute inset-x-4 bottom-4 glass-panel rounded-2xl p-4 border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-extrabold text-[#1A1F26] uppercase tracking-wide">Elite Patient Satisfaction</h4>
                    <p className="text-[10px] text-medical-slate font-semibold mt-0.5">Verified 99.8% recovery rating under certified local anesthesia.</p>
                  </div>
                </div>
              </div>

              {/* Small top-left absolute seal */}
              <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-gold/20 py-1.5 px-3 rounded-full text-[9px] font-extrabold tracking-widest text-brand-gold-dark uppercase shadow-sm">
                Clinical Trust
              </div>
            </div>
          </div>

          {/* Right Column: Content & Testimonial Carousel */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-[#1E3A8A]/10 px-3.5 py-1.5 rounded-full inline-block w-max">
                Consensus of Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1F26] tracking-tight mt-3">
                Experience Craftsmanship
              </h2>
              <p className="text-xs md:text-sm text-medical-slate mt-2 font-medium leading-relaxed max-w-xl">
                Aura Clinical caters to executives, researchers, and families demanding absolute precision. Read how our integration of warm hospitality and AI clinical planning crafts flawless outcomes.
              </p>
            </div>

            {/* Carousel Card */}
            <div className="w-full bg-white border border-brand-gold/15 rounded-3xl p-6 md:p-8 soft-shadow relative min-h-[220px] flex flex-col justify-between">
              
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-brand-gold-light/20 flex items-center justify-center text-brand-gold border border-brand-gold/10">
                <Quote className="w-4 h-4 fill-current" />
              </div>

              {/* Review Text */}
              <div className="flex flex-col gap-4">
                <div className="flex text-amber-500">
                  {Array.from({ length: testimonials[activeIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs md:text-sm italic font-medium leading-relaxed text-medical-slate">
                  &ldquo;{testimonials[activeIdx].quote}&rdquo;
                </p>
              </div>

              {/* Review Author & Metadata */}
              <div className="flex items-center justify-between pt-6 border-t border-brand-gold/10 mt-6 gap-4">
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#1A1F26]">
                    {testimonials[activeIdx].name}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-bold tracking-wide mt-0.5 uppercase">
                    {testimonials[activeIdx].role}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-[#1E3A8A] bg-[#1E3A8A]/10 border border-[#1E3A8A]/15 py-1 px-2.5 rounded-full shrink-0">
                  {testimonials[activeIdx].treatment}
                </span>
              </div>

            </div>

            {/* Testimonial Controls */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-brand-gold/20 bg-white hover:bg-brand-beige flex items-center justify-center text-medical-slate transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-brand-gold/20 bg-white hover:bg-brand-beige flex items-center justify-center text-medical-slate transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIdx === idx ? "w-6 bg-brand-gold-dark" : "bg-brand-gold/30 hover:bg-brand-gold"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
