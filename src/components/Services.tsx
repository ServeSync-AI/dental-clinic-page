"use client";

import React from "react";
import { Sparkles, Smile, Layers, Crown, ShieldAlert, Heart, Gem, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  description: string;
  benefits: string[];
}

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  
  const dentalServices: ServiceItem[] = [
    {
      icon: Crown,
      title: "Cosmetic Dentistry",
      category: "Aesthetics",
      description: "Artistic adjustments designed to bring balanced symmetry, perfect contour, and brilliant clarity to your custom smile.",
      benefits: ["Bespoke design", "Minimal intervention", "Elite porcelain veneers"]
    },
    {
      icon: Smile,
      title: "Teeth Whitening",
      category: "Enhancement",
      description: "State-of-the-art laser whitening combined with custom medical-grade take-home kits for safe, long-lasting brilliance.",
      benefits: ["Up to 8 shades lighter", "Sensitive-safe lasers", "Permanent seal technology"]
    },
    {
      icon: Layers,
      title: "Dental Implants",
      category: "Reconstruction",
      description: "Premium titanium and ceramic tooth replacements. Fully planned in 3D using computer-guided precision templates.",
      benefits: ["Lifetime longevity", "Biocompatible ceramics", "Natural bite integration"]
    },
    {
      icon: Sparkles,
      title: "Smile Makeovers",
      category: "Transformation",
      description: "A comprehensive digital design marrying dental veneers, contouring, and alignment to craft the ultimate elite smile.",
      benefits: ["Virtual 3D mockups", "Digital Smile Design", "Artistic facial harmony"]
    },
    {
      icon: Activity,
      title: "Invisalign",
      category: "Orthodontics",
      description: "Discreet orthodontic alignment using medical-grade clear aligners, engineered with SmartTrack material for faster tracking.",
      benefits: ["Virtually invisible", "Easily removable", "Weekly progress insights"]
    },
    {
      icon: ShieldAlert,
      title: "Root Canal Treatment",
      category: "Endodontics",
      description: "Painless microscopic root therapy. Safely eradicates infection while preserving your natural tooth structure under local numbing.",
      benefits: ["Advanced micro-endodontics", "Completely painless", "Same-day therapeutic crown"]
    },
    {
      icon: Heart,
      title: "Pediatric Dentistry",
      category: "Family Care",
      description: "Extremely gentle, welcoming dental experiences for children. Creating positive, stress-free clinical impressions.",
      benefits: ["Calm clinical playrooms", "Fluoride seal treatments", "Anxiety-free pediatric staff"]
    },
    {
      icon: Gem,
      title: "Porcelain Veneers",
      category: "Restoration",
      description: "Micro-thin, custom-handcrafted ceramic restorations that bond securely to teeth, resolving chips, gaps, or deep stains.",
      benefits: ["Bespoke laboratory artisans", "Natural light reflection", "Highly stain-resistant"]
    },
    {
      icon: ShieldCheck,
      title: "Preventive Care",
      category: "Maintenance",
      description: "Advanced ultrasonic hygiene cleaning, personalized saliva testing, oral cancer screenings, and deep remineralization therapies.",
      benefits: ["Ultrasonic scaling", "Pre-emptive diagnostics", "Gum health maintenance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-gold-light/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-3 bg-brand-gold/10 px-3.5 py-1.5 rounded-full inline-block">
            Elite Clinical Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1F26] tracking-tight mt-4">
            Bespoke Treatments, Precision Medicine
          </h2>
          <p className="text-base text-medical-slate mt-4 font-medium">
            Explore our curated suite of dental treatments, combining warm concierge hospitality, world-class dental expertise, and digital diagnostic modeling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dentalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-brand-cream/40 border border-brand-gold/10 hover:border-brand-gold/40 hover:bg-white transition-all duration-500 hover:shadow-xl soft-shadow group"
              >
                {/* Background soft glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold-dark/80 bg-brand-gold/5 px-2.5 py-1 rounded">
                      {service.category}
                    </span>
                    <div className="p-3 rounded-xl bg-white border border-brand-gold/15 text-[#1E3A8A] group-hover:text-brand-gold transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#1A1F26] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-medical-slate leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Benefits */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-[#1A1F26]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onBookClick}
                  className="w-full inline-flex items-center justify-between pt-4 border-t border-brand-gold/10 text-xs font-bold text-medical-slate group-hover:text-[#1E3A8A] group-hover:border-[#1E3A8A]/20 transition-all duration-300 cursor-pointer"
                >
                  Request Consultation Details
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-brand-gold group-hover:text-[#1E3A8A]" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
