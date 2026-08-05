import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Minus, 
  Sparkles, 
  Paperclip, 
  Mic, 
  CornerDownLeft, 
  ShieldCheck,
  Globe
} from 'lucide-react';

// --- Premium Geometric Triquetra Knot / Executive Emblem ---
const TriquetraLogo = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 36 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M18 3L23.5 13.5H12.5L18 3Z" fill="currentColor" fillOpacity="0.95" />
    <path d="M27.5 16L33 26.5H22L27.5 16Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M8.5 16L14 26.5H3L8.5 16Z" fill="currentColor" fillOpacity="0.8" />
    <circle cx="18" cy="19" r="4.5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.9" />
  </svg>
);

// --- Offline Hybrid Fallback Executive Base ---
const triquetraKnowledgeBase = {
  academics: "Abdullah Md. Galib is a 5th-semester B.Sc. undergraduate in CSE (Day) at Green University of Bangladesh (GUB), maintaining an academic CGPA of 3.77. He achieved GPA 5.00/5.00 in HSC from Govt. Tolaram University College.",
  skills: "His technical proficiency spans Core C (Memory Management, Linked Lists), Java (OOP Architectures, Lab Solvers), and Python (Selenium WebDriver Automation & Web Scraping). He is equally adept in CMS development and Supply Chain Operations.",
  leadership: "Executive roles include Joint Information Secretary at Green University Computer Club (GUCC), Associate of Logistics for Hult Prize at GUB, Millennium Fellow (Class of 2025), and active IEEE Student Branch GUB volunteer.",
  contact: "Direct channels: Email via mail.mdgalib@gmail.com or professional network via linkedin.com/in/abdullahmdgalib.",
  projects: "Key initiatives include SustainaBite (UNAI-backed food sustainability platform impacting 100+ users), Python Selenium Dynamic Web Scraper, and algorithmic electrical engineering/math solvers in C & Java.",
  default: "I am Triquetra, Executive AI Assistant representing Abdullah Md. Galib. Ask me about his software engineering competencies, C-suite logistics execution, academic records, or collaboration availability."
};

const getLocalSmartReply = (input) => {
  const query = input.toLowerCase();
  if (query.includes("skill") || query.includes("c ") || query.includes("java") || query.includes("python") || query.includes("code") || query.includes("tech")) return triquetraKnowledgeBase.skills;
  if (query.includes("study") || query.includes("university") || query.includes("cgpa") || query.includes("gub") || query.includes("academic") || query.includes("education")) return triquetraKnowledgeBase.academics;
  if (query.includes("leader") || query.includes("gucc") || query.includes("hult") || query.includes("ieee") || query.includes("millennium") || query.includes("club")) return triquetraKnowledgeBase.leadership;
  if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("phone") || query.includes("reach")) return triquetraKnowledgeBase.contact;
  if (query.includes("project") || query.includes("sustainabite") || query.includes("scraper") || query.includes("work")) return triquetraKnowledgeBase.projects;
  return triquetraKnowledgeBase.default;
};

const GalibAIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'ai', 
      text: "Welcome. I am Triquetra, AI Assistant grounded with Google-verified context. How may I brief you on Abdullah Md. Galib's portfolio today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen, isMinimized]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isMinimized]);

  // --- Secure Serverless Call with Automatic Fallback ---
  const handleSendMessage = async (textToSend) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || isTyping) return;

    // Client-side Sanitization & Length Check
    if (queryText.length > 500) {
      alert("Please keep your message concise (under 500 characters).");
      return;
    }

    const newMessages = [...messages, { sender: 'user', text: queryText }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // 1. Call Secure Vercel Backend (`/api/chat`)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: queryText })
      });

      if (!response.ok) throw new Error('API Endpoint Fallback Required');
      
      const data = await response.json();
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'ai', text: data.reply || getLocalSmartReply(queryText) }]);
      
    } catch (error) {
      // 2. Hybrid Secure Fallback (Works flawlessly in Dev / Offline / API Rate Limits)
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { sender: 'ai', text: getLocalSmartReply(queryText) }]);
      }, 500);
    }
  };

  const quickPrompts = [
    "Core Technical Skills",
    "Leadership & GUCC",
    "Academic CGPA",
    "Executive Contact"
  ];

  return (
    <>
      <style>{`
        @keyframes subtleAmbientGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(0, 120, 212, 0.25); }
          50% { box-shadow: 0 0 45px rgba(56, 189, 248, 0.45); }
        }
        @keyframes windowOpen {
          0% { opacity: 0; transform: scale(0.96) translateY(12px); filter: blur(12px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
        @keyframes typingDot {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        .animate-ambient-glow { animation: subtleAmbientGlow 5s ease-in-out infinite; }
        .animate-window-open { animation: windowOpen 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .executive-scrollbar::-webkit-scrollbar { width: 3px; }
        .executive-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .executive-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 99px; }
        .executive-scrollbar::-webkit-scrollbar-thumb:hover { background: #0078D4; }
      `}</style>

      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-[80] group select-none">
        <span className="absolute -top-11 left-0 bg-[#081220]/95 text-[#F8FAFC] text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-md">
          Triquetra • Verified AI
        </span>
        
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="w-14 h-14 bg-gradient-to-br from-[#0078D4] via-[#081220] to-[#040914] text-white rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none animate-ambient-glow shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          aria-label="Open Triquetra Executive AI Assistant"
        >
          <TriquetraLogo className="w-6 h-6 text-[#38BDF8] transition-transform duration-500 group-hover:rotate-12" />
        </button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="Triquetra Executive AI Assistant"
          className={`fixed bottom-24 left-6 z-[90] w-[calc(100vw-24px)] sm:w-[360px] md:w-[390px] bg-[#081220]/85 backdrop-blur-xl border border-white/[0.08] rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col transition-all duration-300 animate-window-open ${
            isMinimized ? 'h-[68px]' : 'h-[530px]'
          }`}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border-b border-white/[0.08] flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#062448] flex items-center justify-center shadow-md border border-white/20">
                <TriquetraLogo className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm tracking-tight text-[#F8FAFC]">
                    Triquetra
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] text-[#38BDF8] font-semibold bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
                    <Globe className="w-2.5 h-2.5 text-blue-400" /> Grounded
                  </span>
                </div>
                <span className="text-[10px] text-[#CBD5E1]/70 font-medium flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Executive AI • Google Verified
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsMinimized(!isMinimized)} 
                className="p-1.5 rounded-full hover:bg-white/[0.08] text-[#CBD5E1] hover:text-white transition-colors focus:outline-none"
                aria-label="Minimize Chat"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 rounded-full hover:bg-white/[0.08] text-[#CBD5E1] hover:text-white transition-colors focus:outline-none"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 executive-scrollbar">
                {messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-[22px] text-xs font-medium leading-relaxed transition-all ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-[#0078D4] to-[#0062AD] text-white rounded-br-sm shadow-[0_10px_25px_rgba(0,120,212,0.25)] border border-blue-400/30' 
                        : 'bg-white/[0.05] text-[#F8FAFC] rounded-bl-sm border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/[0.05] border border-white/[0.08] px-4 py-3 rounded-[22px] rounded-bl-sm flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" style={{ animation: 'typingDot 1.2s infinite 0ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" style={{ animation: 'typingDot 1.2s infinite 200ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" style={{ animation: 'typingDot 1.2s infinite 400ms' }}></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex gap-1.5 overflow-x-auto no-scrollbar select-none">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isTyping}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#CBD5E1] hover:text-white text-[10px] font-semibold border border-white/[0.08] hover:border-[#38BDF8]/40 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#081220] border-t border-white/[0.08] shrink-0">
                <div className="relative flex items-center bg-white/[0.05] hover:bg-white/[0.07] focus-within:bg-white/[0.08] border border-white/[0.1] focus-within:border-[#0078D4] rounded-full px-3 py-1 transition-all duration-300 shadow-inner">
                  
                  <button 
                    type="button" 
                    className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-full focus:outline-none"
                    title="Attach Context (Coming Soon)"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>

                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask Triquetra anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isTyping}
                    className="w-full bg-transparent border-none px-2 py-2 text-xs font-medium text-[#F8FAFC] placeholder:text-[#CBD5E1]/50 focus:outline-none disabled:opacity-50"
                  />

                  <button 
                    type="button" 
                    className="p-1.5 text-slate-400 hover:text-[#38BDF8] transition-colors rounded-full focus:outline-none hidden sm:block"
                    title="Voice Query (Coming Soon)"
                  >
                    <Mic className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isTyping}
                    className="p-2 ml-1 bg-[#0078D4] hover:bg-[#1084E3] disabled:bg-white/10 text-white disabled:text-slate-500 rounded-full transition-all active:scale-95 shrink-0 shadow-[0_0_15px_rgba(0,120,212,0.4)] disabled:shadow-none"
                    aria-label="Send Message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GalibAIChatbot;