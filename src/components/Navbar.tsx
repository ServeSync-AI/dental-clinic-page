"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
  onVoiceAgentClick: () => void;
}

export default function Navbar({ onBookClick, onVoiceAgentClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner with subtle medical announcement */}
      <div className="w-full bg-[#1A1F26] text-white text-[11px] md:text-xs py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-brand-gold/15">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
        <span className="text-zinc-200">Simulating Next-Gen Patient Care: Try the new </span>
        <button 
          onClick={onVoiceAgentClick}
          className="text-brand-gold underline hover:text-brand-gold-light transition-colors font-semibold"
        >
          Aura AI Answering Receptionist
        </button>
        <span className="hidden sm:inline text-zinc-400">| Concierge Appointments Open for Summer 2026</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/45 backdrop-blur-lg border-b border-brand-gold/10 soft-shadow"
            : "py-5 bg-white/25 backdrop-blur-md border-b border-white/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white shadow-md">
              <span className="font-semibold text-base tracking-wider">A</span>
              <div className="absolute inset-0 rounded-xl border border-white/20 transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#1A1F26] group-hover:text-brand-gold transition-colors flex items-center gap-1.5">
                AURA <span className="text-[10px] bg-brand-gold/10 text-brand-gold-dark px-1.5 py-0.5 rounded font-semibold tracking-normal">CLINICAL AI</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-medical-slate font-medium">Cosmetic Dentistry</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="relative group text-sm font-semibold text-medical-slate hover:text-[#1E3A8A] transition-colors py-1.5">
              Services
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded" />
            </a>
            <a href="#voice-agent" className="relative group text-sm font-semibold text-medical-slate hover:text-[#1E3A8A] transition-colors py-1.5 flex items-center gap-1.5">
              AI Answering Demo 
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded" />
            </a>
            <a href="#booking" className="relative group text-sm font-semibold text-medical-slate hover:text-[#1E3A8A] transition-colors py-1.5">
              Smart Calendar
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded" />
            </a>
            <a href="#testimonials" className="relative group text-sm font-semibold text-medical-slate hover:text-[#1E3A8A] transition-colors py-1.5">
              Patient Stories
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded" />
            </a>
            <a href="#why-choose-us" className="relative group text-sm font-semibold text-medical-slate hover:text-[#1E3A8A] transition-colors py-1.5">
              The Technology
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded" />
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onVoiceAgentClick}
              className="text-xs font-semibold text-[#1A1F26] hover:text-brand-gold transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-brand-gold/5"
            >
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              Enterprise Security
            </button>
            <button
              onClick={onBookClick}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full overflow-hidden group font-semibold text-xs text-white bg-[#1A1F26] hover:bg-[#2A313C] transition-all duration-300 soft-shadow border border-brand-gold/25"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-brand-gold" />
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-medical-slate hover:bg-brand-beige transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-panel border-b border-brand-gold/10 py-6 px-6 shadow-xl flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#1A1F26] hover:text-brand-gold py-1 transition-colors"
            >
              Dental Services
            </a>
            <a 
              href="#voice-agent" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#1A1F26] hover:text-brand-gold py-1 flex items-center gap-2 transition-colors"
            >
              AI Answering Demo <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </a>
            <a 
              href="#booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#1A1F26] hover:text-brand-gold py-1 transition-colors"
            >
              Smart Calendar
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#1A1F26] hover:text-brand-gold py-1 transition-colors"
            >
              Patient Testimonials
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#1A1F26] hover:text-brand-gold py-1 transition-colors"
            >
              Clinical Tech
            </a>
            <div className="h-px bg-brand-gold/10 my-1" />
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onVoiceAgentClick();
                }}
                className="w-full text-center py-3 rounded-full text-sm font-semibold text-[#1A1F26] border border-brand-gold/30 hover:bg-brand-gold/5 transition-colors"
              >
                Simulate AI Receptionist
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center py-3 rounded-full text-sm font-semibold text-white bg-[#1A1F26] hover:bg-[#2A313C] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-brand-gold" />
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
