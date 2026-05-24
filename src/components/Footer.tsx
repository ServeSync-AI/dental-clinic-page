"use client";

import React from "react";
import { ShieldCheck, Mail, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1F26] text-white border-t border-brand-gold/15 pt-20 pb-10 relative overflow-hidden">
      {/* Soft ambient background radial */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Clinical profile */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white font-bold text-sm tracking-widest">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  AURA <span className="text-[9px] bg-brand-gold/20 text-brand-gold-light px-1.5 py-0.5 rounded font-semibold tracking-normal">AI CLINICAL</span>
                </span>
                <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-medium">Cosmetic Surgery Suites</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Aura represents the pinnacle of medical-grade restorative artistry and intelligent concierge dental health, combining continuous diagnostic modeling with absolute patient comfort.
            </p>

            <div className="flex items-center gap-2 text-brand-gold">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">Certified HIPAA-Compliant Platform</span>
            </div>
          </div>

          {/* Useful Navigation Parameters */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">Suites & Care</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Cosmetic Veneers</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Invisalign Aligners</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Guided Implants</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Laser Whitening</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Schedule Diagnostics</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">Credentials</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-medium">
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Specialists Profiles</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Sterilization Standards</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Scientific Journals</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Clinical Advisory Board</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Trust Indicators</a></li>
            </ul>
          </div>

          {/* Coordinates & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">Imperial Coordinates</h4>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>Penthouse Suite, Imperial Towers, Jubilee Hills, Hyderabad, 500033, India</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>+91 1800-AURA-SMILE (287-2764)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>concierge@auraclinical.ai</span>
                </li>
              </ul>
            </div>

            {/* Newsletter input */}
            <div className="space-y-2 pt-2">
              <span className="block text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Imperial Care Digest</span>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-brand-gold transition-colors">
                <input
                  type="email"
                  placeholder="Verify your email..."
                  className="bg-transparent border-none text-xs text-white placeholder-zinc-500 flex-1 px-2 focus:outline-none"
                />
                <button className="p-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-colors cursor-pointer">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 font-medium gap-4">
          <span>&copy; {new Date().getFullYear()} AURA AI Clinical Platform. All Rights Reserved. Private & Confidential.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">HIPAA Compliance Charter</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Shield Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Care</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
