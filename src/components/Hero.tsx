"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star, Users, PhoneCall, Sparkles, AlertCircle } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onVoiceAgentClick: () => void;
}

export default function Hero({ onBookClick, onVoiceAgentClick }: HeroProps) {
  const [tipsIndex, setTipsIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const aiTips = [
    { text: "Simulated Call: Patient saved $450 in whitening by booking mid-week.", tag: "Smart Saving" },
    { text: "Clinical Tip: Cosmetic implants are 100% simulated in 3D prior to placement.", tag: "Tech First" },
    { text: "AI Receptionist: Active 24/7/365 to handle emergencies or schedule changes.", tag: "Immediate Response" },
    { text: "Elite Care: 99.8% customer trust rating backed by medical certification.", tag: "Trust Layer" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTipsIndex((prev) => (prev + 1) % aiTips.length);
        setFade(true);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-brand-cream">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[600px] bg-gradient-to-b from-brand-gold-light/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[40%] h-[400px] bg-gradient-to-tr from-medical-blue/25 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text and Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            
            {/* Medical-Grade Premium Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-gold/20 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wide text-medical-slate uppercase">
                Concierge Medical Dentistry • ISO 9001
              </span>
            </div>

            {/* Title / Main Proposition */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#1A1F26] leading-[1.1]">
                Where Clinical <br />
                <span className="text-gold-gradient font-serif italic font-normal">Artistry</span> Meets <br />
                Intelligent <span className="text-[#1E3A8A]">Care</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-medical-slate font-medium max-w-2xl leading-relaxed mt-2">
                Experience elite cosmetic and surgical dentistry. Guided by world-renowned clinical specialists and streamlined by a warm, HIPAA-compliant patient-care AI.
              </p>
            </div>

            {/* AI Assistant Live-Tips Widget */}
            <div className="w-full max-w-xl glass-panel rounded-2xl p-4 soft-shadow border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#1E3A8A] tracking-wider uppercase">Active Patient Assistance AI</span>
                    <span className="text-[9px] font-semibold bg-brand-gold/10 text-brand-gold-dark px-1.5 py-0.5 rounded-md">
                      {aiTips[tipsIndex].tag}
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm text-[#1A1F26] font-medium transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
                    {aiTips[tipsIndex].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm text-white bg-[#1A1F26] hover:bg-[#2A313C] transition-all duration-300 shadow-md group cursor-pointer border border-brand-gold/25"
              >
                Schedule Concierge Visit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onVoiceAgentClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm text-[#1A1F26] bg-white hover:bg-brand-beige border border-brand-gold/30 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-brand-gold" />
                Simulate AI Answering
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 pt-2 border-t border-brand-gold/10 w-full">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1F26]">99.8%</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-medical-slate">Trust Rating</span>
              </div>
              <div className="h-8 w-px bg-brand-gold/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1F26]">15,000+</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-medical-slate">Smiles Crafted</span>
              </div>
              <div className="h-8 w-px bg-brand-gold/20" />
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-brand-gold-light border border-white flex items-center justify-center text-[8px] font-extrabold text-[#1A1F26]">
                      {i === 3 ? "+" : i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-medical-slate uppercase tracking-wide">4.9 Google score</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Centerpiece with the luxury clinic interior image */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Decorative Gold Frames & Background shadows */}
            <div className="absolute inset-0 bg-brand-gold/5 rounded-3xl -rotate-2 transform scale-[1.01] pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl border border-brand-gold/15 pointer-events-none" />
            
            {/* The Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden gold-shadow border-2 border-brand-gold/20 group">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Aura AI Luxury Clinical Treatment Suite"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 100vw, 50vw"
              />
              
              {/* Premium Gradient Glass Overlay bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-light mb-1">Clinic Showcase</p>
                <h3 className="text-base md:text-lg font-bold tracking-tight">The Imperial Care Suite</h3>
                <p className="text-xs text-zinc-200 mt-1 line-clamp-1 font-medium">Equipped with zero-gravity ergonomics, calm ambient soundscapes, and digital dental scanners.</p>
              </div>

              {/* Top-Right Floating Trust Badge on the Image */}
              <div className="absolute top-4 right-4 glass-panel rounded-xl py-2 px-3 flex items-center gap-2 border border-white/30 shadow-md">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-[#1A1F26] uppercase tracking-wider">Aura AI Answering Active</span>
              </div>
            </div>

            {/* Urgency/Consultation message box floating near bottom-left of the image */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 glass-panel rounded-xl border border-white/50 soft-shadow max-w-[260px]">
              <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 animate-bounce" />
              <div className="flex flex-col">
                <span className="text-[11px] font-extrabold text-[#1A1F26] uppercase tracking-wider">Appointment Alert</span>
                <span className="text-[10px] font-medium text-medical-slate">Only 3 priority consultation openings remain for this week.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
