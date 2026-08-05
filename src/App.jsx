import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, Sun, Moon, CalendarDays, X, CheckCircle, 
  Image as ImageIcon, MapPin, Mail, Menu, 
  Clock, Volume2, VolumeX, Volume1, GraduationCap, Search, FileText
} from 'lucide-react'; 

import GalibPhoto from './Images/Galib.png';
import { FadeIn, useTypewriter } from './Shared';
import Academics from './components/Academics';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import TechnicalSkills from './components/TechnicalSkills';
import ProjectsVolunteering from './components/ProjectsVolunteering';
import Awards from './components/Awards';
import GalibAIChatbot from './components/GalibAIChatbot';

import { 
  academicsData, 
  experienceData, 
  leadershipData, 
  projectsData, 
  volunteeringData, 
  awardsData 
} from './data';
import { skillsData } from './data/skillsData';

// --- CONFIGURABLE LINKS ---
const GOOGLE_CALENDAR_APPOINTMENT_URL = "https://calendar.google.com/calendar/u/0/r/appointmentschedule";
// Google Drive Preview Link (যেখানে Download সেটিংস বন্ধ করা আছে):
const CV_FILE_URL = "https://drive.google.com/file/d/1yIwDHC9zXmXy6tjN1UShwC2Vds6OMeOQ/preview"; 

const SEO = () => {
  useEffect(() => {
    document.title = "Abdullah Md. Galib | Supply Chain & Logistics Professional | Campus Ambassador | CSE Undergraduate | Green University of Bangladesh";
    document.documentElement.lang = 'en';
    
    const setMetaTag = (name, content, isProperty = false) => {
      let element = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) element.setAttribute('property', name);
        else element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', "Portfolio of Abdullah Md. Galib, an impact-driven Supply Chain and Logistics professional specialized in event execution, campus leadership, and community building.");
    setMetaTag('keywords', "Abdullah Md Galib, Supply Chain, Logistics, Event Management, Portfolio, CSE Undergraduate, Green University of Bangladesh, Hult Prize, Millennium Fellow");
    setMetaTag('robots', "index, follow");
    setMetaTag('author', "Abdullah Md. Galib");
    
    setMetaTag('og:title', "Abdullah Md. Galib | Professional Portfolio", true);
    setMetaTag('og:description', "Impact-driven Supply Chain and Logistics professional.", true);
    setMetaTag('og:type', "website", true);
    setMetaTag('og:url', "https://galib.vercel.app", true);
  }, []);
  return null;
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [previousVolume, setPreviousVolume] = useState(0.4);
  const audioRef = useRef(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // --- 1. Anti-Copy & Anti-Image Download Protection ---
  useEffect(() => {
    const preventContextMenu = (e) => e.preventDefault();
    const preventCopy = (e) => e.preventDefault();
    const preventDragStart = (e) => {
      if (e.target && e.target.nodeName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('dragstart', preventDragStart);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('dragstart', preventDragStart);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Reliable BGM Autoplay Logic ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;

    const startMusic = () => {
      if (audio.paused && volume > 0) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsAudioPlaying(true);
            window.removeEventListener('click', startMusic);
            window.removeEventListener('touchstart', startMusic);
            window.removeEventListener('scroll', startMusic);
          }).catch(() => console.log("Waiting for user interaction to autoplay..."));
        }
      }
    };

    window.addEventListener('click', startMusic);
    window.addEventListener('touchstart', startMusic);
    window.addEventListener('scroll', startMusic, { passive: true });
    
    startMusic();

    return () => {
      window.removeEventListener('click', startMusic);
      window.removeEventListener('touchstart', startMusic);
      window.removeEventListener('scroll', startMusic);
    };
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
      audio.volume = 0;
      audio.pause();
      setIsAudioPlaying(false);
    } else {
      const restoredVol = previousVolume > 0 ? previousVolume : 0.4;
      setVolume(restoredVol);
      audio.volume = restoredVol;
      audio.play().then(() => setIsAudioPlaying(true)).catch(() => {});
    }
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else if (!isAudioPlaying && audioRef.current.paused) {
        audioRef.current.play().then(() => setIsAudioPlaying(true)).catch(() => {});
      }
    }
  };

  // Theme Toggle
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (selectedItem || isSidebarOpen || isSearchOpen) ? 'hidden' : 'unset';
  }, [selectedItem, isSidebarOpen, isSearchOpen]);

  const dynamicRole = useTypewriter([
    "Aspiring Supply Chain Professional.",
    "Campus Ambassador.",
    "CSE Undergraduate.",
    "Millennium Fellow."
  ]);

  const allSearchableItems = [
    ...academicsData.map(item => ({ ...item, category: 'Academics' })),
    ...experienceData.map(item => ({ ...item, category: 'Experience' })),
    ...skillsData.map(item => ({ ...item, category: 'Technical Skills' })),
    ...leadershipData.map(item => ({ ...item, category: 'Leadership' })),
    ...projectsData.map(item => ({ ...item, category: 'Projects' })),
    ...volunteeringData.map(item => ({ ...item, category: 'Volunteering' })),
    ...awardsData.map(item => ({ ...item, category: 'Awards' }))
  ];

  const filteredSearchResults = searchQuery.trim() === '' ? [] : allSearchableItems.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.org && item.org.toLowerCase().includes(query)) ||
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.details && item.details.toLowerCase().includes(query)) ||
      (item.summary && item.summary.toLowerCase().includes(query))
    );
  });

  const renderCalendar = () => {
    const daysInMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), 1).getDay();
    const currentDay = currentTime.getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} className="p-2"></div>);
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === currentDay;
      days.push(
        <a 
          key={i} 
          href={GOOGLE_CALENDAR_APPOINTMENT_URL}
          target="_blank"
          rel="noreferrer"
          title="Click to Book Appointment on Google Calendar"
          className={`p-2 text-center text-sm font-semibold rounded-lg block transition-all ${
            isToday 
              ? 'bg-rose-600 text-white shadow-md hover:bg-rose-700 scale-105' 
              : 'text-slate-700 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-800'
          }`}
        >
          {i}
        </a>
      );
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B19] text-slate-800 dark:text-gray-100 font-sans selection:bg-rose-500/30 selection:text-rose-900 dark:selection:text-rose-200 transition-colors duration-500 overflow-x-hidden relative select-none">
      <SEO />

      <style>{`
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { background-size: 200% auto; animation: gradientShift 4s ease infinite; }
        
        .peer-container:hover .peer-card:not(:hover) { 
          filter: blur(1.5px); 
          opacity: 0.75; 
          transition-delay: 75ms;
        }
        .peer-card { 
          position: relative;
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease; 
        }
        .peer-card:hover { 
          transform: translateY(-6px); 
          z-index: 10; 
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); 
        }
        
        .peer-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, rgba(244,63,94,0.85), rgba(16,185,129,0.85), rgba(59,130,246,0.85), rgba(244,63,94,0.85));
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 20;
        }
        
        .peer-card:hover::after,
        .peer-card:active::after {
          opacity: 1;
          animation: smooth-border-flow 4s ease infinite;
        }
        
        @keyframes smooth-border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      {/* Background Glows - Tuned down opacity for Crisp Light Mode */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-purple-600/5 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-rose-600/5 dark:bg-rose-600/20 rounded-full blur-[150px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-emerald-600/5 dark:bg-emerald-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10 dark:opacity-30 mix-blend-screen"></div>
      </div>
      
      <audio ref={audioRef} src="/BGM/BGM_3.mp3" loop preload="auto" />

      {/* Glassmorphic Audio Bar */}
      <div className="fixed bottom-6 right-6 z-[80] flex items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-full shadow-[0_4px_25px_rgba(225,29,72,0.2)] px-3 py-2 transition-all duration-300 group hover:scale-105">
        <button 
          onClick={toggleMute}
          className="p-2 rounded-full text-slate-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-500 focus:outline-none transition-transform active:scale-95 shrink-0"
          title={volume > 0 ? "Click to Mute" : "Click to Unmute"}
        >
          {volume === 0 ? (
            <VolumeX className="w-5 h-5 text-slate-400 dark:text-gray-500" />
          ) : volume > 0.5 ? (
            <Volume2 className="w-5 h-5 animate-pulse text-rose-500" />
          ) : (
            <Volume1 className="w-5 h-5 animate-pulse text-rose-500" />
          )}
        </button>
        
        <div className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-in-out flex items-center">
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 mx-2 accent-rose-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-gray-700 rounded-lg"
            title={`Volume: ${Math.round(volume * 100)}%`}
          />
        </div>
      </div>

      {/* Azure AI Chatbot Component */}
      <GalibAIChatbot />

      {/* Sidebar Schedule */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-950/90 backdrop-blur-xl border-r border-slate-200 dark:border-gray-800 shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-slate-900 dark:text-white flex items-center"><CalendarDays className="w-5 h-5 mr-2 text-rose-500"/> Schedule</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"><X className="w-5 h-5"/></button>
          </div>
          
          <div className="bg-slate-100/70 dark:bg-gray-900/50 p-6 rounded-2xl mb-6 text-center border border-slate-200 dark:border-gray-800 shadow-inner">
            <Clock className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-slate-800 dark:text-gray-100 tracking-tight">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 mt-1">{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-slate-100/70 dark:bg-gray-900/50 p-4 rounded-2xl border border-slate-200 dark:border-gray-800">
            <h4 className="text-center font-bold text-slate-800 dark:text-gray-300 mb-4">{currentTime.toLocaleString('default', { month: 'long' })} {currentTime.getFullYear()}</h4>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-center text-xs font-bold text-slate-400">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
            <p className="text-[10px] text-center text-rose-600 dark:text-rose-500 font-bold mt-3">Click any date to book an appointment</p>
          </div>

          <div className="mt-auto pt-6 text-center">
             <p className="text-xs text-slate-400 font-medium">Available for meetings & collaborations.</p>
          </div>
        </div>
      </aside>

      {/* Navbar with Added 'Skills' option */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-4 w-[95%] max-w-6xl bg-white/90 dark:bg-gray-950/80 backdrop-blur-md border border-slate-200/80 dark:border-gray-800/50 rounded-full py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'top-0 w-full bg-transparent py-6 border-b border-transparent'}`}>
        <div className={`mx-auto flex justify-between items-center ${isScrolled ? 'px-6' : 'max-w-7xl px-8'}`}>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none"><Menu className="w-6 h-6 text-slate-700 dark:text-gray-200"/></button>
            <a href="https://galib.vercel.app" className="flex items-center transition-transform hover:scale-105 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-300 dark:border-gray-700 overflow-hidden group-hover:border-rose-500 transition-colors shadow-sm bg-white">
                <img src={GalibPhoto} alt="Galib" className="w-full h-full object-cover pointer-events-none" />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-sm font-bold text-slate-700 dark:text-gray-400">
            {['About', 'Academics', 'Skills', 'Experience', 'Leadership', 'Projects', 'Volunteering'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => { setIsSearchOpen(true); setSearchQuery(''); }} 
              className="p-2.5 rounded-full bg-slate-200/60 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-slate-300/60 dark:hover:bg-gray-700/50 transition-colors focus:outline-none flex items-center gap-2"
              title="Search Portfolio"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs font-bold hidden sm:inline">Search</span>
            </button>

            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-200/60 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-slate-300/60 dark:hover:bg-gray-700/50 transition-colors focus:outline-none">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-md">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <section id="about" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span></span>
                <span>Ready for new challenges</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-rose-500 animate-gradient">ABDULLAH MD GALIB</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-gray-300 mb-8 h-8 flex items-center justify-center">
                I am a <span className="text-rose-600 dark:text-rose-400 ml-2">{dynamicRole}</span><span className="animate-[pulse_1s_ease-in-out_infinite] ml-1 text-rose-600 dark:text-rose-400">|</span>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                An impact-driven undergraduate skilled in coordinating teams, streamlining operations, and managing supply chain logistics. Passionate about creating measurable impact through strategic execution and community engagement.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="#leadership" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:shadow-[0_4px_30px_rgba(225,29,72,0.5)]">
                  Explore My Journey <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="flex items-center justify-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider bg-white/80 dark:bg-gray-900/50 w-fit mx-auto px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200/80 dark:border-gray-800/50 shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-rose-500" /> Narayanganj-1400, Dhaka, Bangladesh
              </div>
            </FadeIn>
          </div>
        </section>

        <Academics setSelectedItem={setSelectedItem} />
        <TechnicalSkills />
        <Experience setSelectedItem={setSelectedItem} />
        <Leadership setSelectedItem={setSelectedItem} />
        <ProjectsVolunteering setSelectedItem={setSelectedItem} />
        <Awards setSelectedItem={setSelectedItem} />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-t border-slate-200/60 dark:border-gray-800/50 transition-colors duration-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Ready to <span className="text-rose-600 dark:text-rose-500">optimize operations?</span></h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto mb-12 text-lg font-medium">Let's discuss how my management skills can drive efficiency for your team.</p>
            </FadeIn>
            
            <FadeIn delay={100}>
              <div className="bg-white dark:bg-gray-950/90 p-8 md:p-12 rounded-3xl border border-slate-200/80 dark:border-gray-800 shadow-[0_10px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] max-w-xl mx-auto mb-12 transition-colors duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Secure Contact</h3>
                  <p className="text-base text-slate-600 dark:text-gray-400 mb-8 font-medium">Reach out via email for collaborations and opportunities.</p>
                  
                  <a href="mailto:mail.mdgalib@gmail.com" className="group relative flex items-center justify-center w-24 h-24 bg-rose-50 dark:bg-rose-500/10 rounded-full border border-rose-200 dark:border-rose-500/30 hover:border-rose-500 hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] focus:outline-none">
                    <Mail className="w-10 h-10 text-rose-600 dark:text-rose-500 group-hover:text-white transition-colors" />
                    <span className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold text-slate-800 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-md pointer-events-none whitespace-nowrap">mail.mdgalib@gmail.com</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/Abdullah-Galib" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center px-6 py-3.5 bg-white dark:bg-white border border-slate-200 dark:border-gray-200 shadow-md rounded-full text-slate-900 font-extrabold transition-all hover:scale-105 active:scale-95">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/abdullahmdgalib" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center px-6 py-3.5 bg-[#0A66C2] shadow-md rounded-full text-white font-extrabold transition-all hover:scale-105 active:scale-95">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/contact.muhammad/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex items-center px-6 py-3.5 bg-[#1877F2] shadow-md rounded-full text-white font-extrabold transition-all hover:scale-105 active:scale-95">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  Facebook
                </a>

                {/* CV Download Button (Google Drive Preview Link) */}
                <a 
                  href={CV_FILE_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="View CV" 
                  className="flex items-center px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md rounded-full text-white font-extrabold transition-all hover:scale-105 active:scale-95"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  CV
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Spotlight Live Search Bar Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center pt-24 p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 max-w-xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
            
            <div className="flex items-center border-b border-slate-200 dark:border-gray-800 pb-4 mb-4">
              <Search className="w-5 h-5 text-rose-500 mr-3 shrink-0" />
              <input 
                type="text"
                placeholder="Search projects, leadership, skills, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-slate-800 dark:text-gray-100 font-bold text-base focus:outline-none placeholder:text-slate-400"
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-3 pr-1">
              {searchQuery.trim() === '' ? (
                <p className="text-center text-sm font-semibold text-slate-400 py-8">Type to search across all portfolio records...</p>
              ) : filteredSearchResults.length === 0 ? (
                <p className="text-center text-sm font-semibold text-slate-400 py-8">No matching records found for "{searchQuery}".</p>
              ) : (
                filteredSearchResults.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => { setSelectedItem(item); setIsSearchOpen(false); }}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-800/50 hover:bg-rose-50 dark:hover:bg-rose-500/10 border border-slate-200/60 dark:border-gray-700/60 cursor-pointer transition-all flex justify-between items-center group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mr-2">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white mt-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-semibold">{item.org} {item.date && `• ${item.date}`}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-1 shrink-0" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Verification Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedItem(null)}>
          <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedItem(null)} className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-gray-900 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 text-slate-500 hover:text-rose-600 transition-colors focus:outline-none"><X className="w-5 h-5"/></button>
            <div className="flex items-center mb-4 pr-10"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /><h3 className="text-2xl font-black text-slate-900 dark:text-white">Verified Info</h3></div>
            <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-1">{selectedItem.title}</h4>
            <p className="text-rose-600 dark:text-rose-400 font-bold mb-6 text-md">{selectedItem.org} {selectedItem.date ? `• ${selectedItem.date}` : ''}</p>
            <div className="mb-8 bg-slate-50 dark:bg-gray-900/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
              <h4 className="text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-2">Description / Details</h4>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-medium text-sm whitespace-pre-line">{selectedItem.details || selectedItem.summary}</p>
            </div>
            <h4 className="text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-3">Verification Document</h4>
            <div className="w-full aspect-[4/3] sm:aspect-video bg-slate-100 dark:bg-gray-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden relative group">
              {selectedItem.image && selectedItem.image !== "Contact for verification" ? (
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 pointer-events-none" />
              ) : null}
              <div className={`text-slate-400 dark:text-gray-600 flex-col items-center justify-center text-center p-4 ${(selectedItem.image && selectedItem.image !== "Contact for verification") ? 'hidden group-hover:flex absolute inset-0 bg-black/70 text-white backdrop-blur-sm' : 'flex'}`}>
                  <ImageIcon className="w-10 h-10 mb-3"/>
                  <span className="font-bold text-sm">Image / Document not available.</span>
                  <span className="text-xs mt-1 text-slate-500 dark:text-gray-400 max-w-xs">Contact me directly to verify this document.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 py-8 transition-colors duration-500 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-slate-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Abdullah Md. Galib. All rights reserved.</p>
          <p className="mt-3 md:mt-0 flex items-center bg-slate-50 dark:bg-gray-900 px-4 py-2 rounded-full border border-slate-200 dark:border-gray-800">
            <a href="https://green.edu.bd" target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-500 inline-flex items-center hover:underline">
              <GraduationCap className="w-4 h-4 mr-2" /> Green University of Bangladesh
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;