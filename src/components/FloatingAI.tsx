"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, ShieldCheck, HelpCircle, Loader2 } from "lucide-react";

interface ChatMessage {
  sender: "ai" | "user";
  text: string;
  time: string;
}

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Welcome to Aura Clinical. I am your clinical assistant. I can coordinate consultation availability, explain recovery paths, or address sterilization certifications. What can I verify for you?",
      time: "Just now",
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presetFaqs = [
    { q: "Schedule Veneer consultation", r: "I would be delighted to schedule your custom Veneer design. I have concierge appointments open this Thursday at 10:00 AM or Friday at 2:00 PM. Which is more convenient?" },
    { q: "Laser Whitening sensitivity?", r: "Aura's teeth whitening leverages cool-light activation combined with targeted desensitizers, ensuring a virtually sensitivity-free experience." },
    { q: "Sterilization standards?", r: "Every Aura surgical suite exceeds ISO Class 5 cleanroom standards, featuring continuous HEPA filtration and digital sterilization tracking." },
    { q: "Payment & Financing plans?", r: "We verify and process all premium insurances. We also offer elegant zero-interest clinical financing plans for cosmetic smile makeovers." }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // AI thinking delay
    setTimeout(() => {
      // Find matching response or give default
      const matched = presetFaqs.find(f => f.q.toLowerCase().includes(text.toLowerCase()) || text.toLowerCase().includes(f.q.toLowerCase()));
      const aiReplyText = matched 
        ? matched.r 
        : "I have registered your clinical request. To coordinate this specific detail, I am alerting our concierge care coordinator. They will message you directly, or you can secure a booking using our Smart Calendar. Shall I query open slots?";
      
      const aiMsg: ChatMessage = {
        sender: "ai",
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 1500);
  };

  const handlePresetClick = (q: string, r: string) => {
    const userMsg: ChatMessage = {
      sender: "user",
      text: q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        sender: "ai",
        text: r,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
  };

  return (
    <>
      {/* Persistant bottom-right pulsing bot CTA button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 glass-panel hover:bg-white text-[#1A1F26] px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-brand-gold/30 hover:border-brand-gold hover:scale-105 transition-all duration-300 group cursor-pointer gold-ring-pulse"
        >
          {/* Waveform indicator */}
          <div className="flex items-center gap-0.5 h-4 shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-brand-gold group-hover:bg-[#1E3A8A] transition-colors"
                style={{
                  height: i === 1 || i === 4 ? "8px" : "14px",
                  animation: "wave 1.2s ease-in-out infinite alternate",
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          <MessageSquare className="w-5 h-5 text-brand-gold-dark group-hover:text-[#1E3A8A] transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider text-medical-slate group-hover:text-black">
            Try AI Receptionist
          </span>
        </button>
      )}

      {/* Expanded Luxury Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[380px] bg-brand-cream border border-brand-gold/25 rounded-3xl soft-shadow flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-[#1A1F26] text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide">Aura AI Answering Service</span>
                <span className="text-[9px] text-zinc-400 font-semibold tracking-widest uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-brand-gold" /> HIPAA Secured
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[300px] min-h-[250px] scrollbar-thin bg-brand-cream/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-1 ${
                  msg.sender === "ai" ? "items-start" : "items-end"
                }`}
              >
                <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-400">
                  {msg.sender === "ai" ? "AURA ASSISTANT" : "PATIENT CLIENT"}
                </span>
                <div className={`p-3 rounded-2xl max-w-[85%] text-xs font-medium leading-relaxed ${
                  msg.sender === "ai"
                    ? "bg-white border border-brand-gold/10 text-zinc-800 rounded-tl-none"
                    : "bg-[#1E3A8A] text-white rounded-tr-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-400">
                  AURA ASSISTANT
                </span>
                <div className="p-3 rounded-2xl bg-white border border-brand-gold/10 text-zinc-500 rounded-tl-none flex items-center gap-1.5 text-xs font-semibold">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-gold" />
                  Analyzing query...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Suggestion Chips */}
          <div className="px-4 py-2 border-t border-brand-gold/10 bg-white/40 flex flex-wrap gap-1.5">
            <span className="w-full text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-brand-gold" /> Suggested Inquiry Presets
            </span>
            {presetFaqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handlePresetClick(faq.q, faq.r)}
                className="text-[10px] font-bold text-medical-slate hover:text-[#1E3A8A] bg-white border border-brand-gold/15 hover:border-[#1E3A8A]/30 px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm"
              >
                {faq.q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-brand-gold/10 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend(inputVal);
              }}
              placeholder="Ask Aura AI a medical or scheduling question..."
              className="flex-1 px-3.5 py-2.5 border border-brand-gold/15 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#1E3A8A] placeholder-zinc-400"
            />
            <button
              onClick={() => handleSend(inputVal)}
              className="p-2.5 rounded-xl bg-[#1A1F26] text-white hover:bg-[#2A313C] transition-colors cursor-pointer shrink-0 border border-brand-gold/20"
            >
              <Send className="w-4 h-4 text-brand-gold" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
