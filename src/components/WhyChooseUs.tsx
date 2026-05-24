"use client";

import React from "react";
import { Cpu, ShieldCheck, Microscope, UserCheck, HeartHandshake, CalendarCheck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Cpu,
      title: "Active Clinical AI Scheduling",
      description: "Our AI systems coordinate bookings in real-time, matching clinical urgencies and optimizing treatment times for maximum convenience."
    },
    {
      icon: Microscope,
      title: "Elite Precision Diagnostics",
      description: "Leveraging 3D digital scanners and laser-guided imaging to preview and simulate all restorations with micrometric precision before treatment begins."
    },
    {
      icon: ShieldCheck,
      title: "ISO 5 Sterilization Protocols",
      description: "Exceeding hospital sterilization standards, our clinical suites feature absolute HEPA air filtration and fully validated micro-hygiene seals."
    },
    {
      icon: UserCheck,
      title: "Board-Certified Specialists",
      description: "Every cosmetic surgeon, endodontist, and implant specialist at Aura has completed board certification and extensive academic research."
    },
    {
      icon: HeartHandshake,
      title: "Bespoke Concierge Care",
      description: "Relax in zero-gravity ergonomic treatment suites equipped with soundproof noise cancellation, aromatherapy, and private parking access."
    },
    {
      icon: CalendarCheck,
      title: "Seamless Insurance & Financing",
      description: "Effortless verification. Our billing coordinators handle all insurance details, offering structured, zero-interest clinical options."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-gold-light/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-medical-blue/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-[#1E3A8A]/10 px-3.5 py-1.5 rounded-full inline-block">
            Clinical Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1F26] tracking-tight mt-4">
            Bespoke Safety, Uncompromising Technology
          </h2>
          <p className="text-base text-medical-slate mt-4 font-medium">
            Explore the advanced technological ecosystem and clinical principles that differentiate Aura Clinical Suites as an elite dental landing platform.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-brand-cream/35 border border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-gold/15 flex items-center justify-center text-brand-gold group-hover:text-[#1E3A8A] group-hover:border-[#1E3A8A]/30 transition-colors shadow-sm mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1A1F26] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-medical-slate leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Before/After Showcase Highlight Section (Highly Conversion-Focused) */}
        <div className="mt-20 p-8 md:p-12 bg-brand-cream border border-brand-gold/20 rounded-3xl soft-shadow flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest bg-[#1E3A8A]/10 px-2.5 py-1 rounded">
              Clinical Outcomes
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A1F26]">
              Real Results, Restorative Craftsmanship
            </h3>
            <p className="text-xs md:text-sm text-medical-slate leading-relaxed font-medium">
              We leverage digital mockups and precise custom ceramic veneers to resolve chips, discoloration, and structural misalignment, achieving perfect cosmetic harmony.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-brand-gold/10 rounded-xl">
                <span className="block text-2xl font-bold text-brand-gold-dark">99.2%</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Color Harmony Match</span>
              </div>
              <div className="p-4 bg-white border border-brand-gold/10 rounded-xl">
                <span className="block text-2xl font-bold text-brand-gold-dark">15 Years+</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Average Longevity</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            <div className="relative w-1/2 aspect-square rounded-2xl overflow-hidden border border-brand-gold/15 bg-white flex flex-col justify-end p-4">
              <div className="absolute inset-0 bg-[#A98C63]/5" />
              <div className="relative z-10 text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold w-max">
                Pre-Restoration (Typical Case)
              </div>
              <p className="text-[10px] font-semibold text-zinc-200 mt-2 z-10">Uneven gaps, minor surface discolouration.</p>
            </div>
            
            <div className="relative w-1/2 aspect-square rounded-2xl overflow-hidden border-2 border-brand-gold/30 bg-white flex flex-col justify-end p-4 shadow-md">
              <div className="absolute inset-0 bg-[#3B82F6]/5" />
              <div className="relative z-10 text-white bg-[#1E3A8A] px-2.5 py-1 rounded text-[10px] font-bold w-max">
                Post-Aura Restorations
              </div>
              <p className="text-[10px] font-semibold text-zinc-800 mt-2 z-10">Flawless structural alignment, high stain resistance.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
