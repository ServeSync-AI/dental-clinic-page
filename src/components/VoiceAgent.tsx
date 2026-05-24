"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff, Sparkles, Volume2, ShieldCheck, Play, Pause, RotateCcw, AlertTriangle, ChevronRight, HelpCircle } from "lucide-react";

interface DialogueLine {
  speaker: "agent" | "patient";
  text: string;
  timestamp: string;
}

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  lines: DialogueLine[];
}

export default function VoiceAgent() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIdx, setCurrentLineIdx] = useState(-1);
  const [speakerState, setSpeakerState] = useState<"idle" | "listening" | "speaking" | "analyzing">("idle");
  const [transcript, setTranscript] = useState<DialogueLine[]>([]);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const scenarios: Scenario[] = [
    {
      id: "booking",
      title: "Concierge Booking Flow",
      subtitle: "Smart Scheduling Simulation",
      description: "Witness how our clinical AI answers questions, cross-references availability, and books an elite veneer consultation in seconds.",
      lines: [
        { speaker: "agent", text: "Welcome to Aura Clinical. This is Aura AI, your concierge assistant. How may I refine your smile today?", timestamp: "10:00:01" },
        { speaker: "patient", text: "Hi, I'd like to book a cosmetic consultation for Porcelain Veneers this week.", timestamp: "10:00:04" },
        { speaker: "agent", text: "I would be delighted to assist. Porcelain veneers are handcrafted for absolute facial harmony. I have a priority slot with Dr. Aditya Sharma this Thursday at 10:00 AM, or Friday at 2:00 PM. Which aligns better with you?", timestamp: "10:00:10" },
        { speaker: "patient", text: "Thursday at 10:00 AM works perfectly.", timestamp: "10:00:14" },
        { speaker: "agent", text: "Splendid. I have provisionally reserved Thursday at 10:00 AM for your custom 3D diagnostic scan. I am sending a secure digital confirmation link to your mobile number now. Is there any prior clinical history I should register?", timestamp: "10:00:20" },
        { speaker: "patient", text: "No, that is all. Thank you so much!", timestamp: "10:00:23" },
        { speaker: "agent", text: "Our pleasure. We look forward to welcoming you into the Aura Suite this Thursday. Have an excellent day.", timestamp: "10:00:26" }
      ]
    },
    {
      id: "faq",
      title: "Clinical FAQ & Safety",
      subtitle: "Laser Whitening Details",
      description: "Simulate a patient asking clinical questions about laser teeth whitening, post-care sensitivity, and safety certifications.",
      lines: [
        { speaker: "agent", text: "Hello, this is Aura AI. I am ready to answer any questions regarding laser whitening, clinical safety, or our micro-thin restorations. What can I clarify?", timestamp: "10:02:01" },
        { speaker: "patient", text: "Is the teeth whitening procedure painful? And how long do the results actually last?", timestamp: "10:02:05" },
        { speaker: "agent", text: "Aura's teeth whitening leverages cool-light activation combined with targeted desensitizers, ensuring a virtually sensitivity-free experience. The results typically last 12 to 24 months depending on dietary habits. Would you like to view our post-care mineral treatments?", timestamp: "10:02:12" },
        { speaker: "patient", text: "That is helpful. What makes your clinic certified?", timestamp: "10:02:16" },
        { speaker: "agent", text: "Every surgeon at Aura is Board Certified in Cosmetic Reconstruction, and our sterilization suites exceed ISO Class 5 cleanroom standards. Your health and clinical precision are our highest priorities.", timestamp: "10:02:22" }
      ]
    },
    {
      id: "emergency",
      title: "Immediate Emergency Routing",
      subtitle: "Acute Pain / Chipped Tooth",
      description: "See how the AI immediately detects emergency triggers (discomfort, dental trauma) and secures a priority slot within 10 minutes.",
      lines: [
        { speaker: "agent", text: "Aura emergency line active. If you are experiencing acute discomfort, structural trauma, or a chipped tooth, please speak, and I will route you immediately.", timestamp: "10:05:01" },
        { speaker: "patient", text: "I chipped my front tooth playing tennis, and I have a massive corporate presentation tomorrow!", timestamp: "10:05:05" },
        { speaker: "agent", text: "I understand completely, and we will restore your smile immediately. I have flagged this as an elite emergency repair. Dr. Aditya Sharma's room has been reserved for you today at 4:30 PM. I am holding this slot for exactly 10 minutes. Shall I confirm?", timestamp: "10:05:12" },
        { speaker: "patient", text: "Yes, please confirm that immediately! I will be there.", timestamp: "10:05:15" },
        { speaker: "agent", text: "Confirmed. Emergency Suite 3 is ready for you today at 4:30 PM. Digital parking passes and clinical instructions have been messaged. Drive safely.", timestamp: "10:05:21" }
      ]
    },
    {
      id: "procedures",
      title: "Bespoke Recommendations",
      subtitle: "Smile Makeover Analysis",
      description: "The AI conducts a clinical intake regarding minor gaps and discolouration, matching them with restorative procedures.",
      lines: [
        { speaker: "agent", text: "Welcome back. Based on your Digital Smile Design interest, I can suggest optimal clinical pathways. What is your primary restorative objective?", timestamp: "10:08:01" },
        { speaker: "patient", text: "I have some minor alignment gaps and slight discolouration that I want to fix permanently.", timestamp: "10:08:06" },
        { speaker: "agent", text: "Understood. For a permanent, natural-looking correction, handcrafted Porcelain Veneers offer stain-resistant brilliance. If structural alignment is your primary concern, our custom Invisalign program is highly optimal. I suggest a 3D digital scan to preview your outcomes. Shall I query Dr. Aditya Sharma's consultation calendar?", timestamp: "10:08:15" },
        { speaker: "patient", text: "Yes, let's look at available slots next Tuesday.", timestamp: "10:08:19" },
        { speaker: "agent", text: "Searching... I have two concierge appointments open next Tuesday: 9:00 AM or 11:30 AM. Would you like to secure one of these slots?", timestamp: "10:08:24" }
      ]
    }
  ];

  // Auto scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startSimulation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(true);
    setCurrentLineIdx(0);
    const scenario = scenarios[activeScenarioIdx];
    const firstLine = scenario.lines[0];
    
    setTranscript([firstLine]);
    setSpeakerState(firstLine.speaker === "agent" ? "speaking" : "listening");

    let lineIdx = 0;
    timerRef.current = setInterval(() => {
      lineIdx++;
      if (lineIdx < scenario.lines.length) {
        setCurrentLineIdx(lineIdx);
        const currentLine = scenario.lines[lineIdx];
        
        // Show analyzer briefly on transition
        setSpeakerState("analyzing");
        
        setTimeout(() => {
          setTranscript((prev) => [...prev, currentLine]);
          setSpeakerState(currentLine.speaker === "agent" ? "speaking" : "listening");
        }, 800);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsPlaying(false);
        setSpeakerState("idle");
      }
    }, 4000);
  };

  const pauseSimulation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setSpeakerState("idle");
  };

  const resetSimulation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setCurrentLineIdx(-1);
    setTranscript([]);
    setSpeakerState("idle");
  };

  const selectScenario = (idx: number) => {
    setActiveScenarioIdx(idx);
    resetSimulation();
  };

  return (
    <section id="voice-agent" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative calm background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold-light/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-medical-blue/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-3 bg-[#1E3A8A]/10 px-3.5 py-1.5 rounded-full inline-block">
            Voice Agent Simulation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1F26] tracking-tight mt-4">
            Meet the Aura AI Clinical Receptionist
          </h2>
          <p className="text-base text-medical-slate mt-4 font-medium">
            Experience our intelligent voice-answering demo. Select a care scenario below to see how the clinical assistant maintains a calm, medical-grade dialogue.
          </p>
        </div>

        {/* Simulation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Script selector */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#1A1F26] uppercase tracking-wider mb-2 flex items-center gap-2">
              <HelpCircle className="w-4.5 h-4.5 text-brand-gold" />
              Choose Care Scenario
            </h3>
            
            {scenarios.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => selectScenario(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  activeScenarioIdx === idx
                    ? "bg-white border-brand-gold shadow-md"
                    : "bg-white/40 border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white/70"
                }`}
              >
                {activeScenarioIdx === idx && (
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#1E3A8A]" />
                )}
                <div className="flex flex-col gap-1 pl-1">
                  <span className="text-[10px] font-bold text-brand-gold-dark uppercase tracking-widest">
                    {sc.subtitle}
                  </span>
                  <h4 className="text-sm font-bold text-[#1A1F26]">{sc.title}</h4>
                  <p className="text-xs text-medical-slate mt-1 line-clamp-2 leading-relaxed font-medium">
                    {sc.description}
                  </p>
                </div>
              </button>
            ))}

            {/* Reassurance text */}
            <div className="p-4 rounded-xl bg-white/50 border border-brand-gold/10 mt-2 flex items-start gap-2.5">
              <ShieldCheck className="w-4.5 h-4.5 text-[#1E3A8A] shrink-0 mt-0.5" />
              <p className="text-[10px] md:text-xs text-medical-slate leading-relaxed font-medium">
                <strong>HIPAA-Compliant Design:</strong> In production, this assistant routes securely into your clinic CRM, handles rescheduling, and answers clinical preparation guidelines.
              </p>
            </div>
          </div>

          {/* Right Column: Simulated AI Console */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* The Console container */}
            <div className="w-full flex-1 rounded-3xl glass-panel text-[#1A1F26] flex flex-col shadow-xl border border-white/60 overflow-hidden">
              
              {/* Console Header */}
              <div className="px-6 py-4 bg-white/40 border-b border-brand-gold/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-wide text-[#1A1F26]">Aura AI Answering Service</span>
                    <span className="text-[9px] text-zinc-500 font-semibold tracking-wider uppercase">Active Session • Simulation Only</span>
                  </div>
                </div>
                
                {/* Simulated Waveform Visualizer or Status Tag */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1E3A8A] px-2 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/15">
                    Status: {speakerState.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Console Body: Visual Orb + Waveform and Transcript */}
              <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row gap-8 items-center md:items-stretch min-h-[350px]">
                
                {/* Left Side: Orb Visualizer */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-6 border-b md:border-b-0 md:border-r border-brand-gold/10 pb-6 md:pb-0 md:pr-8 shrink-0">
                  
                  {/* The Clinical Orb (Frosted luxury glass feel) */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* Pulsing Backlight glow based on state */}
                    <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 ${
                      speakerState === "speaking" ? "bg-[#3B82F6]/20 scale-110 animate-pulse-slow" :
                      speakerState === "listening" ? "bg-amber-400/15 scale-105 animate-pulse" :
                      speakerState === "analyzing" ? "bg-emerald-400/15 scale-100" : "bg-[#C5A880]/10 scale-95"
                    }`} />
                    
                    {/* The main orb container */}
                    <div className={`w-24 h-24 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center relative transition-all duration-500 ${
                      speakerState === "speaking" ? "border-sky-500/40 shadow-sm" :
                      speakerState === "listening" ? "border-amber-400/40 shadow-sm" :
                      speakerState === "analyzing" ? "border-emerald-400/45" : "border-brand-gold/20"
                    }`}>
                      <Volume2 className={`w-8 h-8 transition-transform duration-300 ${
                        speakerState === "speaking" ? "text-sky-500 scale-110" :
                        speakerState === "listening" ? "text-amber-500 scale-105 animate-bounce" :
                        speakerState === "analyzing" ? "text-emerald-500 rotate-45" : "text-brand-gold-dark"
                      }`} />
                    </div>
                  </div>

                  {/* Waveform Visualizer (Clean, Medical-Grade Waves) */}
                  <div className="flex items-center gap-1.5 h-8">
                    {[1.2, 1.8, 1.0, 1.5, 2.2, 1.3, 1.7, 0.9, 1.4, 2.0].map((h, i) => (
                      <span
                        key={i}
                        className={`w-0.5 rounded-full transition-all duration-300 ${
                          speakerState === "speaking" ? "bg-sky-500 h-6" :
                          speakerState === "listening" ? "bg-amber-500 h-4" :
                          speakerState === "analyzing" ? "bg-emerald-500 h-2" : "bg-brand-gold/30 h-1"
                        }`}
                        style={{
                          animation: speakerState === "speaking" || speakerState === "listening" 
                            ? `wave 1s ease-in-out infinite alternate` 
                            : 'none',
                          animationDelay: `${i * 0.1}s`,
                          transform: `scaleY(${h})`
                        }}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-medical-slate text-center">
                    {speakerState === "speaking" ? "Aura AI Answering" :
                     speakerState === "listening" ? "Patient Speaking" :
                     speakerState === "analyzing" ? "Analyzing Intention..." : "Simulation Standby"}
                  </span>
                </div>

                {/* Right Side: The Transcript Area */}
                <div className="flex-1 w-full flex flex-col justify-between">
                  <div className="max-h-[220px] overflow-y-auto space-y-4 pr-2 scrollbar-thin">
                    {transcript.length === 0 ? (
                      <div className="h-[180px] flex flex-col items-center justify-center text-center text-zinc-400 gap-2">
                        <Sparkles className="w-8 h-8 text-brand-gold/40" />
                        <p className="text-xs font-semibold max-w-[240px] text-medical-slate">
                          Click &quot;Simulate Call&quot; below to launch the simulated conversational interaction.
                        </p>
                      </div>
                    ) : (
                      transcript.map((line, lIdx) => (
                        <div
                          key={lIdx}
                          className={`flex flex-col gap-1 animate-in fade-in duration-300 ${
                            line.speaker === "agent" ? "items-start" : "items-end"
                          }`}
                        >
                          <span className="text-[8px] font-bold uppercase text-zinc-400 tracking-wider">
                            {line.speaker === "agent" ? "AURA AI" : "PATIENT CLIENT"} • {line.timestamp}
                          </span>
                          <div className={`p-3 rounded-2xl max-w-[90%] text-xs font-semibold leading-relaxed ${
                            line.speaker === "agent"
                              ? "bg-white border border-brand-gold/15 text-zinc-800 rounded-tl-none shadow-sm"
                              : "bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] rounded-tr-none"
                          }`}>
                            {line.text}
                          </div>
                        </div>
                      ))
                    )}
                    <div ref={transcriptEndRef} />
                  </div>

                  {/* Playback Controls */}
                  <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      {!isPlaying ? (
                        <button
                          onClick={startSimulation}
                          className="px-5 py-2.5 rounded-full bg-[#1A1F26] text-white hover:bg-[#2A313C] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md border border-brand-gold/25"
                        >
                          <Play className="w-3.5 h-3.5 fill-current text-brand-gold" />
                          Simulate Call
                        </button>
                      ) : (
                        <button
                          onClick={pauseSimulation}
                          className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                        >
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          Pause Demo
                        </button>
                      )}
                      
                      <button
                        onClick={resetSimulation}
                        className="p-2.5 rounded-full bg-white hover:bg-brand-beige text-medical-slate transition-colors border border-brand-gold/20 cursor-pointer shadow-sm"
                        title="Reset Call"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[10px] text-zinc-500 font-bold">
                      <span>Scenario {activeScenarioIdx + 1} of {scenarios.length}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
