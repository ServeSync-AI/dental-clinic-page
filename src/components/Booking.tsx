"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, User, Phone, Mail, Sparkles, Clipboard, ArrowLeft, Loader2 } from "lucide-react";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: "",
    sensitivity: "",
    urgency: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });
  
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const treatments = [
    "Cosmetic Smile Makeover",
    "Porcelain Veneers",
    "Laser Teeth Whitening",
    "Precision Dental Implants",
    "Invisalign Clear Aligners",
    "General Clinical Checkup"
  ];

  const dates = [
    { day: "Mon", date: "May 25", label: "25" },
    { day: "Tue", date: "May 26", label: "26" },
    { day: "Wed", date: "May 27", label: "27" },
    { day: "Thu", date: "May 28", label: "28" },
    { day: "Fri", date: "May 29", label: "29" },
    { day: "Sat", date: "May 30", label: "30" }
  ];

  const times = [
    "09:00 AM",
    "10:30 AM",
    "11:45 AM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM"
  ];

  const selectTreatment = (t: string) => {
    setFormData((prev) => ({ ...prev, treatment: t }));
    setStep(2);
  };

  const handleSensitivity = (val: string) => {
    setFormData((prev) => ({ ...prev, sensitivity: val }));
    setStep(3);
  };

  const selectDate = (d: string) => {
    setFormData((prev) => ({ ...prev, date: d }));
  };

  const selectTime = (t: string) => {
    setFormData((prev) => ({ ...prev, time: t }));
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setBookingLoading(true);
    
    // Simulate AI slot allocation and validation
    setTimeout(() => {
      setBookingLoading(false);
      setBookingSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      treatment: "",
      sensitivity: "",
      urgency: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
    });
    setStep(1);
    setBookingSuccess(false);
  };

  return (
    <section id="booking" className="py-24 bg-white relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold-light/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-medical-blue/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Conversion Text */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark bg-brand-gold/10 px-3.5 py-1.5 rounded-full">
              Concierge Scheduling
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1F26] tracking-tight leading-tight">
              Secure Your Priority Aura Consultation
            </h2>
            <p className="text-base text-medical-slate font-medium leading-relaxed">
              Step into an effortless booking experience. Aura&apos;s smart calendar system schedules your custom treatment suite diagnostics while allocating the ideal specialists for your dental profile.
            </p>
            
            <div className="flex flex-col gap-4 mt-2 w-full">
              <div className="flex items-start gap-3 p-4 bg-brand-cream/40 border border-brand-gold/10 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1F26]">Custom Diagnostic Scans Included</h4>
                  <p className="text-[11px] text-medical-slate font-medium mt-0.5">Every veneer or implant consultation includes complete 3D facial imaging.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-brand-cream/40 border border-brand-gold/10 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1F26]">Flexible Concierge Rescheduling</h4>
                  <p className="text-[11px] text-medical-slate font-medium mt-0.5">Cancel or reschedule anytime through our active 24/7 Voice AI Receptionist.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="w-full bg-brand-cream border border-brand-gold/20 rounded-3xl p-6 md:p-8 soft-shadow relative overflow-hidden">
              
              {/* Top Progress bar */}
              {!bookingSuccess && (
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-gold/10">
                  <div className="flex items-center gap-1.5">
                    <Clipboard className="w-4 h-4 text-brand-gold" />
                    <span className="text-[10px] font-extrabold text-medical-slate uppercase tracking-wider">
                      Consultation Request Portal
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-gold-dark bg-brand-gold/10 px-2 py-0.5 rounded">
                    Step {step} of 4
                  </span>
                </div>
              )}

              {/* SUCCESS STATE */}
              {bookingSuccess && (
                <div className="text-center py-10 flex flex-col items-center justify-center gap-6 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-[#1A1F26]">Aura Consultation Provisionally Secured!</h3>
                    <p className="text-xs text-medical-slate max-w-sm mx-auto font-medium leading-relaxed">
                      Thank you, <strong className="text-[#1A1F26]">{formData.name}</strong>. Aura&apos;s scheduling engine has allocated premium suite time for your <strong className="text-[#1E3A8A]">{formData.treatment}</strong> diagnostics on <strong className="text-[#1A1F26]">{formData.date} at {formData.time}</strong>.
                    </p>
                  </div>
                  
                  {/* Summary ticket */}
                  <div className="w-full max-w-md bg-white border border-brand-gold/15 rounded-2xl p-4 flex flex-col gap-3 text-left shadow-sm">
                    <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider pb-2 border-b border-brand-gold/10">
                      <span>Clinical Reservation Ticket</span>
                      <span className="text-[#1E3A8A]">Aura AI Validated</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-semibold text-medical-slate">
                      <div>
                        <span className="block text-[8px] text-zinc-400 uppercase font-bold tracking-wider">TREATMENT</span>
                        <span className="text-[#1A1F26]">{formData.treatment}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-zinc-400 uppercase font-bold tracking-wider">SUITE ARRIVAL</span>
                        <span className="text-[#1A1F26]">{formData.date} @ {formData.time}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-zinc-400 uppercase font-bold tracking-wider">PATIENT CLIENT</span>
                        <span className="text-[#1A1F26]">{formData.name}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-zinc-400 uppercase font-bold tracking-wider">SECURE PASSCODE</span>
                        <span className="text-[#1E3A8A] uppercase">AUR-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-zinc-400 font-medium max-w-xs leading-relaxed">
                    A clinical confirmation token, parking codes, and preparing guidelines have been transmitted to your mobile number: <strong className="text-zinc-600">{formData.phone}</strong>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#1A1F26] text-white font-semibold text-xs hover:bg-[#2A313C] transition-colors cursor-pointer"
                  >
                    Reset & Schedule New Slot
                  </button>
                </div>
              )}

              {/* STEP 1: Select Treatment */}
              {!bookingSuccess && step === 1 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-base font-bold text-[#1A1F26]">Select Your Primary Treatment Focus</h3>
                    <p className="text-xs text-medical-slate mt-1 font-medium">Which elite cosmetic or clinical service are you interested in?</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {treatments.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectTreatment(t)}
                        className="text-left px-4 py-3.5 rounded-xl border border-brand-gold/15 bg-white text-xs font-semibold text-medical-slate hover:bg-[#1E3A8A]/5 hover:border-[#1E3A8A]/35 hover:text-[#1E3A8A] transition-all duration-200 cursor-pointer shadow-sm"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Diagnostic Questions */}
              {!bookingSuccess && step === 2 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-gold transition-colors cursor-pointer w-max"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <div>
                    <h3 className="text-base font-bold text-[#1A1F26]">Aura Smart Diagnostic Intake</h3>
                    <p className="text-xs text-medical-slate mt-1 font-medium">Do you currently experience mild or regular sensitivity to hot, cold, or sweet stimuli?</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-2">
                    {[
                      { val: "none", label: "No sensitivity, healthy enamel" },
                      { val: "mild", label: "Mild occasional sensitivity under pressure" },
                      { val: "regular", label: "Regular sensitivity when exposed to hot/cold" }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleSensitivity(opt.label)}
                        className="text-left px-5 py-4 rounded-xl border border-brand-gold/15 bg-white text-xs font-semibold text-medical-slate hover:bg-[#1E3A8A]/5 hover:border-[#1E3A8A]/35 hover:text-[#1E3A8A] transition-all duration-200 cursor-pointer shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Select Date & Time (Mini Calendar Grid) */}
              {!bookingSuccess && step === 3 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-gold transition-colors cursor-pointer w-max"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <div>
                    <h3 className="text-base font-bold text-[#1A1F26]">Select Suit Appointment Slot</h3>
                    <p className="text-xs text-medical-slate mt-1 font-medium">Pick a convenient day and arrival time for your clinical assessment.</p>
                  </div>

                  {/* Calendar Dates Grid */}
                  <div className="flex flex-col gap-3 mt-2">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-brand-gold" />
                      Select Date (Upcoming Week)
                    </span>
                    <div className="grid grid-cols-6 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.label}
                          onClick={() => selectDate(`${d.day}, ${d.date}`)}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all duration-200 cursor-pointer shadow-sm ${
                            formData.date.includes(d.date)
                              ? "bg-[#1E3A8A] border-[#1E3A8A] text-white"
                              : "bg-white border-brand-gold/15 text-medical-slate hover:border-brand-gold hover:bg-zinc-50"
                          }`}
                        >
                          <span className="text-[9px] uppercase font-bold opacity-80">{d.day}</span>
                          <span className="text-sm font-extrabold mt-0.5">{d.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times Grid */}
                  <div className="flex flex-col gap-3 mt-2">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      Available Arrival Hours
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => selectTime(t)}
                          className={`py-2 px-3 rounded-lg border text-[11px] font-semibold transition-all duration-200 cursor-pointer shadow-sm text-center ${
                            formData.time === t
                              ? "bg-[#1E3A8A] border-[#1E3A8A] text-white"
                              : "bg-white border-brand-gold/15 text-medical-slate hover:border-brand-gold hover:bg-zinc-50"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    disabled={!formData.date || !formData.time}
                    onClick={() => setStep(4)}
                    className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-[#1A1F26] hover:bg-[#2A313C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2 cursor-pointer"
                  >
                    Proceed to Verification
                  </button>
                </div>
              )}

              {/* STEP 4: Personal Verification */}
              {!bookingSuccess && step === 4 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-gold transition-colors cursor-pointer w-max"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <div>
                    <h3 className="text-base font-bold text-[#1A1F26]">Secure Reservation Verification</h3>
                    <p className="text-xs text-medical-slate mt-1 font-medium">Verify your contact details to lock in your priority medical appointment.</p>
                  </div>

                  <form onSubmit={handlePersonalSubmit} className="flex flex-col gap-4 mt-2">
                    
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wide mb-1.5">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Ananya Sharma"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-brand-gold/20 rounded-xl text-xs text-[#1A1F26] font-semibold focus:outline-none focus:border-[#1E3A8A] placeholder-zinc-400 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wide mb-1.5">Mobile Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="e.g. +1 (555) 902-1200"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-brand-gold/20 rounded-xl text-xs text-[#1A1F26] font-semibold focus:outline-none focus:border-[#1E3A8A] placeholder-zinc-400 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wide mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. ananya@sharmaholdings.com"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-brand-gold/20 rounded-xl text-xs text-[#1A1F26] font-semibold focus:outline-none focus:border-[#1E3A8A] placeholder-zinc-400 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={bookingLoading}
                      className="w-full py-4 rounded-full font-bold text-xs text-white bg-[#1A1F26] hover:bg-[#2A313C] transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-80"
                    >
                      {bookingLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                          Allocating AI Consultation Suite...
                        </>
                      ) : (
                        <>
                          Confirm & Validate Reservation
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
