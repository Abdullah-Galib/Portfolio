import React, { useState, useEffect, useRef } from 'react';
import { 
  Megaphone, Users, CalendarDays, Award, 
  ChevronRight, Sun, Moon,
  Globe, Briefcase, Zap, HeartHandshake, MapPin, 
  GraduationCap, Eye, EyeOff, ShieldCheck,
  Mail, X, CheckCircle, Image as ImageIcon,
  Menu, Clock, Volume2, VolumeX, Code
} from 'lucide-react'; 

// --- Custom Typewriter Hook for Dynamic Name/Title ---
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// --- 100% SEO Optimization Component ---
const SEO = () => {
  useEffect(() => {
    document.title = "Abdullah Md. Galib | Supply Chain & Logistics Professional | Campus Ambassador | CSE Undergraduate  | Green University of Bangladesh";
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
    
    setMetaTag('twitter:card', "summary_large_image");
    setMetaTag('twitter:title', "Abdullah Md. Galib | Professional Portfolio");
    setMetaTag('twitter:description', "Impact-driven Supply Chain and Logistics professional.");
  }, []);
  return null;
};

// --- Upgraded Smooth Scroll Reveal Animation ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.15 }); 
    
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-12 scale-95 blur-[4px]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Interactive Water Fill Heading Component ---
const InteractiveHeading = ({ icon: Icon, title, highlight, color = "rose" }) => {
  const [isFilling, setIsFilling] = useState(false);
  
  const iconColor = color === "green" ? "text-green-600 dark:text-green-500" : "text-rose-600 dark:text-rose-500";
  const iconBg = color === "green" ? "bg-green-100 dark:bg-green-500/10" : "bg-rose-100 dark:bg-rose-500/10";
  const gradient = color === "green" 
    ? "from-green-600 via-green-500 to-slate-900 dark:to-white" 
    : "from-rose-600 via-rose-500 to-slate-900 dark:to-white";

  return (
    <FadeIn>
      <div 
        className="flex items-center mb-12 w-fit cursor-pointer select-none"
        onMouseDown={() => setIsFilling(true)}
        onMouseUp={() => setIsFilling(false)}
        onMouseLeave={() => setIsFilling(false)}
        onTouchStart={() => setIsFilling(true)}
        onTouchEnd={() => setIsFilling(false)}
      >
        <div className={`w-12 h-12 ${iconBg} flex items-center justify-center rounded-xl mr-4 transition-transform duration-300 ${isFilling ? 'scale-90' : 'scale-100'}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          {title}{" "}
          <span 
            className={`text-transparent bg-clip-text bg-gradient-to-t ${gradient} bg-[length:100%_200%] transition-all duration-[1500ms] ease-in-out ${isFilling ? 'bg-bottom' : 'bg-top'}`}
          >
            {highlight}
          </span>
        </h2>
      </div>
    </FadeIn>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Navigation & States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Audio States
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Live Clock Updater
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Dynamic Typewriter Roles ---
  const roles = [
    "CSE Undergraduate.",
    "Campus Ambassador.",
    "Millennium Fellow.",
    "Community Volunteer"
  ];
  const dynamicRole = useTypewriter(roles);

  // --- Fixed & Reliable BGM Autoplay Logic ---
  useEffect(() => {
    const audio = document.getElementById('bgMusic');
    if (!audio) return;
    audio.volume = 0.4;

    const startMusic = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsAudioPlaying(true);
          ['click', 'scroll', 'touchstart', 'keydown'].forEach(e => document.removeEventListener(e, startMusic));
        }).catch(err => console.log("Waiting for interaction to play audio."));
      }
    };

    ['click', 'scroll', 'touchstart', 'keydown'].forEach(e => document.addEventListener(e, startMusic));
    startMusic();

    return () => {
      ['click', 'scroll', 'touchstart', 'keydown'].forEach(e => document.removeEventListener(e, startMusic));
    };
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    const audio = document.getElementById('bgMusic');
    if (audio) {
      if (isAudioPlaying) {
        audio.pause();
        setIsAudioPlaying(false);
      } else {
        audio.play();
        setIsAudioPlaying(true);
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

  // Navbar Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when modals open
  useEffect(() => {
    document.body.style.overflow = (selectedItem || isSidebarOpen) ? 'hidden' : 'unset';
  }, [selectedItem, isSidebarOpen]);

  // --- DATA ARRAYS ---
  const academicsData = [
    {
      title: "BSc in Computer Science & Engineering",
      org: "Green University of Bangladesh",
      date: "Jan 2025 - Jan 2029",
      desc: "Currently in 5th Semester • CGPA: 3.77",
      details: "Pursuing Bachelor's degree in CSE. Actively volunteering in clubs, participating in various tech and logistics operations.",
      image: "/certificates/gub-academic.jpg",
      isGUB: true
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      org: "Govt. Tolaram University College",
      date: "2020 - 2024",
      desc: "Science Group • GPA: 5.00/5.00",
      details: "Completed Higher Secondary Certificate with excellent academic records in the Science group.",
      image: "Contact for verification",
      isGUB: false
    }
  ];

  const experienceData = [
    {
      title: "Reviewer",
      org: "Millennium Campus Network (MCN)",
      date: "May 2026 - Present",
      desc: "Serving as a remote reviewer, hitting 15 reviews weekly.",
      details: "Conducting weekly reviews remotely, consistently completing evaluations and ensuring high quality standards.",
      impact: "Global Impact",
      url: "https://www.millenniumfellows.org/fellow/2025/green/abdullah-md-galib",
      image: "/certificates/mcn-reviewer.jpg",
      customSVG: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-cyan-600 dark:text-cyan-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Content Research Executive (Remote)",
      org: "Science Bee",
      date: "Apr 2025 - Oct 2025",
      desc: "Developed educational content for a community of 586k+ members.",
      details: "Wrote scientific content in an engaging tone. Maintained regular tasks and schedules, ensuring strict deadlines were met for content delivery.",
      impact: "586k+ Reach",
      url: "https://www.facebook.com/ScienceBee.com.bd/",
      image: "/certificates/science-bee.jpg",
      customSVG: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-yellow-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6L12 2z" />
          <path d="M12 2v9.2M20 6.6l-8 4.6M4 6.6l8 4.6" />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Intern (Hybrid)",
      org: "Center for Research Innovation Technology (CRITS)",
      date: "Jan 2026 - Present",
      desc: "Worked on CMS-based organizational website development and data management.",
      details: "Engaging in continuous learning and applying web technologies.",
      impact: "CMS Dev",
      url: "https://crits.green.edu.bd/",
      image: "/certificates/crits.jpg",
      customSVG: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-green-600 dark:text-green-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      title: "Sales Associate",
      org: "BYSL Global Technology Group (ILLIYEEN)",
      date: "Mar 2024 - Apr 2024",
      desc: "Ensured high-end customer service and maintained inventory. Served 300+ happy customers.",
      details: "Participated in office training sessions. Managed stock and inventory at the display center. Focused on maximizing customer satisfaction.",
      impact: "Customer Satisfaction",
      url: "https://illiyeen.com/",
      image: "Contact for verification",
      customSVG: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-slate-800 dark:text-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="2 15.5 12 8.5 22 15.5" />
          <line x1="12" y1="2" x2="12" y2="8.5" />
        </svg>
      )
    }
  ];

  const leadershipData = [
    {
      title: "Joint Information Secretary",
      org: "Green University Computer Club (GUCC)",
      date: "Apr 2026 - Present",
      icon: <Megaphone className="w-8 h-8 text-green-600 dark:text-green-500 mb-4" />,
      url: "https://gucc.green.edu.bd/",
      items: ["Serve as a central hub for organizational communication.", "Draft professional captions for social media.", "Coordinate and lead Class Representatives."],
      details: "Supported the Information Secretary in strategic planning and operational execution. Handled departmental orientation for nearly 200 participants.",
      image: "/certificates/gucc.jpg"
    },
    {
      title: "Associate of Logistics",
      org: "Hult Prize at GUB",
      date: "Nov 2025 - Present",
      icon: <Zap className="w-8 h-8 text-green-600 dark:text-green-500 mb-4" />,
      items: ["Support execution of venue setup and registration.", "Handle logistics data and technical operations.", "Managed 110 participants in the grand finale."],
      details: "Maintaining an organized approach to meet logistics deadlines. Handled 110 participants directly during the Grand Finale operations.",
      image: "/certificates/hult.jpg"
    },
    {
      title: "Volunteer",
      org: "IEEE Student Branch GUB",
      date: "Jun 2025 - Present",
      icon: <Users className="w-8 h-8 text-green-600 dark:text-green-500 mb-4" />,
      items: ["Website Development & Public Relations Team.", "Logistic Support & Event Management.", "Report writing based on tasks."],
      details: "Managed event participants ranging from 60-82. Contributed to logistics distribution, membership development, and website development teams.",
      image: "/certificates/ieee-gub.jpg"
    },
    {
      title: "Campus Ambassador",
      org: "IEEE IUBAT Student Branch",
      date: "Dec 2025",
      icon: <MapPin className="w-8 h-8 text-orange-500 mb-4" />,
      items: ["Promoted symposium across campus.", "Acted as communication bridge for organizing committee."],
      details: "Represented IEEE IUBAT for SympSIST 2025. Encouraged student participation by explaining event objectives and registration procedures.",
      image: "/certificates/ieee-iubat.jpg"
    },
    {
      title: "Campus Coordinator",
      org: "Dawn of Bioinformatics",
      date: "Jul 2025 - Dec 2025",
      icon: <Globe className="w-8 h-8 text-blue-500 mb-4" />,
      items: ["Responsible for campus outreach.", "Organized seminars and workshops.", "Bridged communication gaps."],
      details: "Directed campus-focused promotional efforts, reaching 60 students and raising awareness of bioinformatics on campus.",
      image: "/certificates/dawn.jpg"
    },
    {
      title: "Campus Ambassador",
      org: "AI Community BUBT",
      date: "Oct 2025 - Nov 2025",
      icon: <Briefcase className="w-8 h-8 text-purple-500 mb-4" />,
      items: ["Promoted AI initiatives on campus.", "Assisted in community growth."],
      details: "Acted as an ambassador for the AI Community at BUBT, spreading awareness about AI technologies and community programs.",
      image: "/certificates/bubt.jpg"
    }
  ];

  const projectsData = [
    {
      title: "Millennium Fellow (Class of 2025)",
      org: "MCN (UNAI)",
      date: "Aug 2025 - 2026",
      desc: "Founded project SustainaBite focused on food distribution & sustainability.",
      impact: "100+ Reached",
      details: "Led the SustainaBite project, engaging 100+ individuals through social betterment initiatives. Built a digital platform empowering farmers to upload harvest details.",
      image: "/certificates/millennium.jpg"
    }
  ];

  const volunteeringData = [
    {
      title: "Volunteer",
      org: "UNFPA Palestine Virtual Marathon",
      date: "Mar 2026 - Apr 2026",
      desc: "Supported global outreach reaching 100+ individuals.",
      impact: "Global Outreach",
      details: "Supported outreach and engagement activities, successfully connecting with over 100 individuals worldwide to raise awareness and participation.",
      image: "/certificates/unfpa.jpg"
    },
    {
      title: "Campus Team Member",
      org: "Excellence Bangladesh",
      date: "Mar 2026 - Present",
      desc: "Contributing to professional growth and network expansion on campus.",
      impact: "Networking",
      details: "Engaging in various skill development and networking events to build a strong professional community among university students.",
      image: "/certificates/excellence.jpg"
    }
  ];

  const awardsData = [
    { 
      title: "Science Olympiad Winner", 
      org: "District Commissioner's Office", 
      color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10", border: "border-emerald-200 dark:border-emerald-500/20",
      details: "Secured top position in the District Science Olympiad, showcasing strong analytical and problem-solving skills.",
      image: "/certificates/science-olympiad.jpg"
    },
    { 
      title: "Vice Chancellor's Award", 
      org: "Green University of Bangladesh", 
      color: "text-green-700 dark:text-green-600", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
      details: "Awarded by the Vice Chancellor for exceptional academic performance and maintaining a top-tier CGPA.",
      image: "/certificates/vc-award.jpg"
    },
    { 
      title: "Best Performer", 
      org: "Hult Prize, Green University", 
      color: "text-green-700 dark:text-green-600", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
      details: "Recognized as the Best Performer for outstanding logistics management and operational execution during the Hult Prize events.",
      image: "/certificates/hult-best.jpg"
    },
    { 
      title: "National Science Debate", 
      org: "National Competition", 
      color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10", border: "border-blue-200 dark:border-blue-500/20",
      details: "Participated and excelled in the National Science Debate Competition, demonstrating logical reasoning and public speaking abilities.",
      image: "/certificates/debate.jpg"
    }
  ];

  const renderCalendar = () => {
    const daysInMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), 1).getDay();
    const currentDay = currentTime.getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} className="p-2"></div>);
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === currentDay;
      days.push(
        <div key={i} className={`p-2 text-center text-sm font-semibold rounded-lg ${isToday ? 'bg-rose-600 text-white shadow-md' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-800'}`}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B19] text-slate-800 dark:text-gray-100 font-sans selection:bg-rose-500/30 selection:text-rose-900 dark:selection:text-rose-200 transition-colors duration-500 overflow-x-hidden relative">
      <SEO />

      {/* --- Global Styles for Animations --- */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientShift 4s ease infinite;
        }
        
        /* Magic Sibling Blur Effect */
        .peer-container:hover .peer-card:not(:hover) {
          filter: blur(5px);
          opacity: 0.5;
          transform: scale(0.96);
        }
        .peer-card {
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        }
        .peer-card:hover {
          transform: translateY(-8px) scale(1.03);
          z-index: 10;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
        }
      `}</style>
      
      {/* --- Interactive Galaxy Background --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-rose-600/10 dark:bg-rose-600/20 rounded-full blur-[150px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-emerald-600/5 dark:bg-emerald-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10 dark:opacity-30 mix-blend-screen"></div>
      </div>
      
      {/* Background Audio Element */}
      <audio id="bgMusic" src="/BGM_2.mp3" loop preload="auto" />

      {/* --- Floating Audio Toggle Button --- */}
      <button 
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[80] p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:scale-110 transition-all text-slate-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-500 group focus:outline-none"
        aria-label="Toggle Music"
      >
        {isAudioPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse text-rose-500" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>

      {/* --- Sidebar Overlay & Panel --- */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-r border-slate-200 dark:border-gray-800 shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-slate-900 dark:text-white flex items-center"><CalendarDays className="w-5 h-5 mr-2 text-rose-500"/> Schedule</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"><X className="w-5 h-5"/></button>
          </div>
          
          <div className="bg-slate-100/50 dark:bg-gray-900/50 p-6 rounded-2xl mb-6 text-center border border-slate-200 dark:border-gray-800 shadow-inner">
            <Clock className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h3 className="text-3xl font-black text-slate-800 dark:text-gray-100 tracking-tight">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 mt-1">{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-slate-100/50 dark:bg-gray-900/50 p-4 rounded-2xl border border-slate-200 dark:border-gray-800">
            <h4 className="text-center font-bold text-slate-700 dark:text-gray-300 mb-4">{currentTime.toLocaleString('default', { month: 'long' })} {currentTime.getFullYear()}</h4>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-center text-xs font-bold text-slate-400">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>

          <div className="mt-auto pt-6 text-center">
             <p className="text-xs text-slate-400 font-medium">Available for meetings & collaborations.</p>
          </div>
        </div>
      </aside>

      {/* --- Modern Floating Navbar --- */}
      <nav 
        role="navigation" 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4 w-[95%] max-w-6xl bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-slate-200/50 dark:border-gray-800/50 rounded-full py-3 shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'top-0 w-full bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className={`mx-auto flex justify-between items-center ${isScrolled ? 'px-6' : 'max-w-7xl px-8'}`}>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none">
              <Menu className="w-6 h-6 text-slate-700 dark:text-gray-200"/>
            </button>
            <a href="https://galib.vercel.app" className="flex items-center transition-transform hover:scale-105 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-300 dark:border-gray-700 overflow-hidden group-hover:border-rose-500 transition-colors shadow-sm bg-white">
                <img src="/Galib.png" alt="Galib" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="hidden w-full h-full bg-rose-600 text-white items-center justify-center font-bold text-sm">AG</div>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-bold text-slate-600 dark:text-gray-400">
            {['About', 'Academics', 'Experience', 'Leadership', 'Projects', 'Volunteering'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-rose-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-200/50 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-slate-300/50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-md hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* --- Main Content Starts --- */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id="about" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span>Ready for new challenges</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-rose-500 animate-gradient">ABDULLAH MD GALIB</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              {/* Typewriter Dynamic Title */}
              <div className="text-xl md:text-2xl font-bold text-slate-700 dark:text-gray-300 mb-8 h-8 flex items-center justify-center">
                I am a <span className="text-rose-600 dark:text-rose-400 ml-2">{dynamicRole}</span>
                <span className="animate-[pulse_1s_ease-in-out_infinite] ml-1 text-rose-600 dark:text-rose-400">|</span>
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
                
                <div className="flex items-center justify-center space-x-4 px-4">
                  <a href="https://github.com/Abdullah-Galib" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 transition-all shadow-sm">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://linkedin.com/in/abdullahmdgalib" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.facebook.com/contact.muhammad/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="flex items-center justify-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider bg-white/50 dark:bg-gray-900/50 w-fit mx-auto px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-rose-500" /> Narayanganj-1400, Dhaka, Bangladesh
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Academics Section --- */}
        <section id="academics" className="py-20 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-y border-slate-200/50 dark:border-gray-800/50 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <InteractiveHeading icon={GraduationCap} title="Academic" highlight="Journey" color="green" />
            
            <div className="grid md:grid-cols-2 gap-8 peer-container">
              {academicsData.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <div className={`peer-card p-8 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border ${item.isGUB ? 'border-green-200 dark:border-green-800/50 hover:border-green-400 dark:hover:border-green-500/50' : 'border-slate-200 dark:border-gray-800 hover:border-slate-400 dark:hover:border-gray-600'} rounded-3xl relative overflow-hidden flex flex-col h-full`}>
                    {item.isGUB && <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 dark:bg-green-500/5 rounded-bl-[100px] -z-10"></div>}
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className={`${item.isGUB ? 'text-green-700 dark:text-green-600' : 'text-slate-700 dark:text-slate-300'} font-bold flex items-center mb-5`}>
                      {item.isGUB ? (
                        <a href="https://green.edu.bd" target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center z-20 relative">
                           <GraduationCap className="w-4 h-4 mr-1"/> {item.org}
                        </a>
                      ) : item.org} 
                      <span className="text-slate-500 dark:text-gray-400 ml-1">• {item.date}</span>
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-slate-50/80 dark:bg-gray-900/80 rounded-full text-sm text-slate-700 dark:text-gray-300 font-bold border border-slate-200 dark:border-gray-800 mb-6 w-fit backdrop-blur-sm">
                      {item.desc}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 w-fit focus:outline-none uppercase tracking-wide relative z-20"
                    >
                      <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <InteractiveHeading icon={Briefcase} title="Professional" highlight="Experience" />
            
            <div className="space-y-6 peer-container">
              {experienceData.map((exp, idx) => {
                const isOngoing = exp.date.includes("Present");
                return (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div className="peer-card flex flex-col md:flex-row gap-6 p-8 bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 rounded-3xl">
                      
                      <div className="md:w-[20%] flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-200 dark:border-gray-800 pb-6 md:pb-0 md:pr-6 shrink-0">
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="block mb-5 group/logo relative z-20">
                          <div className="w-20 h-20 bg-slate-50 dark:bg-gray-900 rounded-2xl p-4 border-2 border-slate-200 dark:border-gray-700 flex items-center justify-center overflow-hidden group-hover/logo:border-rose-500 transition-colors shadow-sm">
                            {exp.customSVG}
                          </div>
                        </a>
                        {isOngoing ? (
                          <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-100/80 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>Ongoing</span>
                          </div>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-3 py-1 rounded-full uppercase tracking-wider">{exp.date}</span>
                        )}
                      </div>

                      <div className="md:w-[80%] flex flex-col items-start pt-2">
                        <div className="flex justify-between w-full items-start">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                            <a href={exp.url} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-gray-300 font-semibold mb-3 hover:underline relative z-20">
                              {exp.org.includes('Green University') || exp.org.includes('CRITS') ? (
                                <span className="text-emerald-700 dark:text-emerald-500 inline-flex items-center"><GraduationCap className="w-4 h-4 mr-1"/>{exp.org}</span>
                              ) : exp.org}
                            </a>
                          </div>
                          {exp.impact && (
                            <span className="bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-200 dark:border-blue-800/50 shadow-sm shrink-0 whitespace-nowrap hidden sm:block uppercase tracking-wider">
                              ⚡ {exp.impact}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-5 mt-2">{exp.desc}</p>
                        
                        <button 
                          onClick={() => setSelectedItem(exp)}
                          className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20"
                        >
                          <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Leadership Section --- */}
        <section id="leadership" className="py-24 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-y border-slate-200/50 dark:border-gray-800/50 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Leadership & <span className="text-rose-600 dark:text-rose-500">Campus Engagement</span></h2>
                <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg font-medium">A track record of taking initiative, managing supply chain logistics for events, and executing large-scale operations.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 peer-container">
              {leadershipData.map((card, idx) => {
                 const isGUB = card.org.includes('Green University') || card.org.includes('GUB');
                 return (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <div className="peer-card bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-3xl p-8 h-full flex flex-col group">
                    <div className="transform transition-transform duration-300 origin-left">{card.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                    
                    {isGUB ? (
                      <a href="https://green.edu.bd" target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-500 text-xs font-bold mb-5 inline-flex items-center hover:underline relative z-20">
                        <GraduationCap className="w-3.5 h-3.5 mr-1"/> {card.org} <span className="text-slate-500 dark:text-gray-500 ml-1">• {card.date}</span>
                      </a>
                    ) : (
                      <p className="text-rose-600 dark:text-rose-400 text-xs font-bold mb-5">{card.org} • {card.date}</p>
                    )}

                    <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400 font-medium mb-6">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 ${isGUB ? 'text-emerald-500' : 'text-rose-500'}`}>▹</span>{item}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => setSelectedItem(card)}
                      className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20"
                    >
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
                    </button>
                  </div>
                </FadeIn>
              )})}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12">Core <span className="text-rose-600 dark:text-rose-500">Projects</span></h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 peer-container">
              {projectsData.map((item, idx) => {
                const isOngoing = item.date.includes("Present") || item.date.includes("2026");
                return (
                  <FadeIn key={idx} delay={(idx % 2) * 100} className="h-full">
                    <div className="peer-card p-6 bg-white/90 dark:bg-gray-900/40 backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 rounded-3xl transition-all flex flex-col h-full shadow-sm relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start">
                          <Code className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                          <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{item.title}</h4>
                            <span className="text-slate-500 dark:text-gray-500 font-semibold text-sm">@ {item.org}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        {isOngoing && (
                           <span className="bg-emerald-100/80 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/50">Ongoing</span>
                        )}
                        <span className="bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800/50">⚡ {item.impact}</span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-gray-400 font-medium mb-5">{item.desc}</p>
                      
                      <button onClick={() => setSelectedItem(item)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors w-fit focus:outline-none uppercase tracking-wide relative z-20">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
                      </button>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Volunteering Section --- */}
        <section id="volunteering" className="py-24 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-y border-slate-200/50 dark:border-gray-800/50 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12">Social <span className="text-rose-600 dark:text-rose-500">Volunteering</span></h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 peer-container">
              {volunteeringData.map((item, idx) => {
                const isOngoing = item.date.includes("Present") || item.date.includes("2026");
                return (
                  <FadeIn key={idx} delay={(idx % 2) * 100} className="h-full">
                    <div className="peer-card p-6 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-3xl transition-all flex flex-col h-full shadow-sm relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start">
                          <HeartHandshake className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                          <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{item.title}</h4>
                            <span className="text-slate-500 dark:text-gray-500 font-semibold text-sm">@ {item.org}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        {isOngoing && (
                           <span className="bg-emerald-100/80 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/50">Ongoing</span>
                        )}
                        <span className="bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/50">🌍 {item.impact}</span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-gray-400 font-medium mb-5">{item.desc}</p>
                      
                      <button onClick={() => setSelectedItem(item)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors w-fit focus:outline-none uppercase tracking-wide relative z-20">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
                      </button>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Honors & Awards Section --- */}
        <section id="awards" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Honors, Awards & <span className="text-rose-600 dark:text-rose-500">Certificates</span></h2>
                <p className="text-slate-600 dark:text-gray-400 font-medium text-lg">Recognitions received for leadership, academic excellence, and event coordination.</p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 peer-container">
              {awardsData.map((award, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                  <div className="peer-card flex flex-col items-center text-center p-8 bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 rounded-3xl transition-all shadow-sm h-full group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm ${award.bg} ${award.border} border group-hover:scale-110 transition-transform`}>
                      <Award className={`w-8 h-8 ${award.color}`} />
                    </div>
                    <h4 className="text-slate-900 dark:text-white font-extrabold text-lg mb-2">{award.title}</h4>
                    <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-6">{award.org}</p>
                    
                    <button 
                      onClick={() => setSelectedItem(award)}
                      className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20"
                    >
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Verify Popup Modal (Global) --- */}
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedItem(null)}>
            <div 
              className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-gray-900 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 text-slate-500 hover:text-rose-600 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5"/>
              </button>
              
              <div className="flex items-center mb-4 pr-10">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Verified Info</h3>
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-1">{selectedItem.title}</h4>
              <p className="text-rose-600 dark:text-rose-400 font-bold mb-6 text-md">{selectedItem.org} {selectedItem.date ? `• ${selectedItem.date}` : ''}</p>
              
              <div className="mb-8 bg-slate-50 dark:bg-gray-900/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
                <h4 className="text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-2">Description / Details</h4>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-medium text-sm whitespace-pre-line">
                  {selectedItem.details}
                </p>
              </div>

              <h4 className="text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-3">Verification Document</h4>
              <div className="w-full aspect-[4/3] sm:aspect-video bg-slate-100 dark:bg-gray-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden relative group">
                {selectedItem.image && selectedItem.image !== "Contact for verification" ? (
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'flex'; 
                      }}
                    />
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

        {/* --- Direct Contact Section --- */}
        <section id="contact" className="py-24 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-t border-slate-200/50 dark:border-gray-800/50 transition-colors duration-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Ready to <span className="text-rose-600 dark:text-rose-500">optimize operations?</span></h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto mb-12 text-lg font-medium">
                Let's discuss how my management skills can drive efficiency for your team.
              </p>
            </FadeIn>
            
            <FadeIn delay={100}>
              <div className="bg-white/90 dark:bg-gray-950/90 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] max-w-xl mx-auto mb-12 transition-colors duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Secure Contact</h3>
                  <p className="text-base text-slate-500 dark:text-gray-400 mb-8 font-medium">Reach out via email for collaborations and opportunities.</p>
                  
                  {/* Direct Mail Hyperlink Icon inside a big circular button */}
                  <a 
                    href="mailto:mail.mdgalib@gmail.com" 
                    className="group relative flex items-center justify-center w-24 h-24 bg-rose-50 dark:bg-rose-500/10 rounded-full border border-rose-200 dark:border-rose-500/30 hover:border-rose-500 hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] focus:outline-none"
                    aria-label="Send Email"
                  >
                    <Mail className="w-10 h-10 text-rose-600 dark:text-rose-500 group-hover:text-white transition-colors" />
                    <span className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-md pointer-events-none whitespace-nowrap">
                      mail.mdgalib@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/Abdullah-Galib" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center px-6 py-3.5 bg-slate-900 dark:bg-white shadow-md rounded-full text-white dark:text-slate-900 font-bold transition-all hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/abdullahmdgalib" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center px-6 py-3.5 bg-[#0A66C2] hover:bg-[#004182] shadow-md rounded-full text-white font-bold transition-all hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/contact.muhammad/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex items-center px-6 py-3.5 bg-[#1877F2] hover:bg-[#0c59c4] shadow-md rounded-full text-white font-bold transition-all hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  Facebook
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

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