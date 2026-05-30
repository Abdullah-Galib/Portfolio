import React, { useState, useEffect, useRef } from 'react';
import { 
  Megaphone, Users, CalendarDays, Award, 
  ChevronRight, Sun, Moon,
  Globe, Briefcase, Zap, HeartHandshake, MapPin, 
  GraduationCap, Eye, EyeOff, ShieldCheck,
  Mail, X, CheckCircle, Image as ImageIcon
} from 'lucide-react';

// --- SEO Optimization Component ---
const SEO = () => {
  useEffect(() => {
    document.title = "Abdullah Md. Galib | Supply Chain & Logistics Professional";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Portfolio of Abdullah Md. Galib, an impact-driven Supply Chain and Logistics professional with a strong background in event execution, campus leadership, and community building.";
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio of Abdullah Md. Galib, an impact-driven Supply Chain and Logistics professional.";
      document.head.appendChild(meta);
    }
  }, []);
  return null;
};

// --- Smooth Scroll Reveal Animation Component ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Verify Modal State
  const [selectedItem, setSelectedItem] = useState(null);

  // Audio Auto-play setup
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2; // 20% volume for cinematic background ambiance

      // Attempt to play automatically
      const tryPlay = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay blocked by browser. Waiting for interaction.");
          });
        }
      };

      // Try playing immediately
      tryPlay();

      // Fallback: Play on first user interaction (scroll, click, keydown)
      const playOnInteraction = () => {
        tryPlay();
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
      };

      document.addEventListener('click', playOnInteraction);
      document.addEventListener('scroll', playOnInteraction);
      document.addEventListener('keydown', playOnInteraction);

      return () => {
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
        document.removeEventListener('keydown', playOnInteraction);
      };
    }
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle Navbar Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when Modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  // --- DATA ARRAYS ---
  const academicsData = [
    {
      title: "BSc in Computer Science & Engineering",
      org: "Green University of Bangladesh",
      date: "Jan 2025 - Jan 2029",
      desc: "Currently in 5th Semester • CGPA: 3.77",
      details: "Pursuing Bachelor's degree in CSE. Actively volunteering in clubs, participating in various tech and logistics operations.",
      image: "/certificates/gub-academic.jpg"
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      org: "Govt. Tolaram University College",
      date: "2020 - 2024",
      desc: "Science Group • GPA: 5.00/5.00",
      details: "Completed Higher Secondary Certificate with excellent academic records in the Science group.",
      image: "/certificates/hsc-certificate.jpg"
    }
  ];

  const experienceData = [
    {
      title: "Reviewer",
      org: "Millennium Campus Network (MCN)",
      date: "May 2026 - Present",
      desc: "Serving as a remote reviewer, hitting 15 reviews weekly.",
      details: "Conducting weekly reviews remotely, consistently completing evaluations and ensuring high quality standards.",
      image: "/certificates/mcn-reviewer.jpg"
    },
    {
      title: "Content Research Executive (Remote)",
      org: "Science Bee",
      date: "Apr 2025 - Oct 2025",
      desc: "Developed educational content for a community of 586k+ members.",
      details: "Wrote scientific content in an engaging tone. Maintained regular tasks and schedules, ensuring strict deadlines were met for content delivery.",
      image: "src/Images/ScienceBee.png"
    },
    {
      title: "Sales Associate",
      org: "BYSL Global Technology Group (ILLIYEEN)",
      date: "Mar 2024 - Apr 2024",
      desc: "Ensured high-end customer service and maintained inventory. Served 300+ happy customers in 560+ hours",
      details: "Participated in office training sessions. Managed stock and inventory at the display center. Focused on maximizing customer satisfaction and maintaining a customer-friendly environment.",
      image: "/certificates/bysl.jpg"
    },
    {
      title: "Assistant Site Manager",
      org: "Saad Interior & Decoration Co.",
      date: "Mar 2023 - Aug 2023",
      desc: "Managed site operations and logistical flow in Narayanganj.",
      details: "Assisted in managing site coordination, material logistics, and operational workflows to ensure timely completion of interior projects.",
      image: "/certificates/saad-interior.jpg"
    }
  ];

  const leadershipData = [
    {
      title: "Joint Information Secretary",
      org: "Green University Computer Club (GUCC)",
      date: "Apr 2026 - Present",
      icon: <Megaphone className="w-8 h-8 text-blue-500 mb-4" />,
      items: ["Serve as a central hub for organizational communication.", "Draft professional captions for social media.", "Coordinate and lead Class Representatives (CRs)."],
      details: "Supported the Information Secretary in strategic planning and operational execution. Handled departmental orientation for nearly 200 participants with a core team of 33 members.",
      image: "/certificates/gucc.jpg"
    },
    {
      title: "Associate of Logistics",
      org: "Hult Prize at GUB",
      date: "Nov 2025 - Present",
      icon: <Zap className="w-8 h-8 text-rose-500 mb-4" />,
      items: ["Support execution of venue setup and registration.", "Handle logistics data and technical operations.", "Managed 110 participants in the grand finale."],
      details: "Maintaining an organized approach to meet logistics deadlines. Handled 110 participants directly during the Grand Finale operations.",
      image: "/certificates/hult.jpg"
    },
    {
      title: "Volunteer",
      org: "IEEE Student Branch GUB",
      date: "Jun 2025 - Present",
      icon: <Users className="w-8 h-8 text-cyan-500 mb-4" />,
      items: ["Website Development & Public Relations Team.", "Logistic Support & Event Management.", "Report writing based on tasks."],
      details: "Managed event participants ranging from 60-82. Contributed to logistics distribution, membership development, and website development teams.",
      image: "/certificates/ieee-gub.jpg"
    },
    {
      title: "Campus Ambassador",
      org: "IEEE IUBAT Student Branch",
      date: "Dec 2025",
      icon: <MapPin className="w-8 h-8 text-orange-500 mb-4" />,
      items: ["Promoted symposium across campus.", "Acted as communication bridge for organizing committee.", "Recognized with a Certificate of Appreciation."],
      details: "Represented IEEE IUBAT for SympSIST 2025. Encouraged student participation by explaining event objectives and registration procedures.",
      image: "/certificates/ieee-iubat.jpg"
    },
    {
      title: "Campus Coordinator",
      org: "Dawn of Bioinformatics",
      date: "Jul 2025 - Dec 2025",
      icon: <Globe className="w-8 h-8 text-green-500 mb-4" />,
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
      image: "src\Images\BUBT_AI_COMMUNITY.png"
    }
  ];

  const projectsData = [
    {
      title: "Millennium Fellow (Class of 2025)",
      org: "MCN (UNAI)",
      date: "Aug 2025 - 2026",
      desc: "Founded project SustainaBite focused on food distribution & sustainability.",
      details: "Led the SustainaBite project, engaging 100+ individuals through social betterment initiatives. Built a digital platform empowering farmers to upload harvest details, preventing food waste.",
      image: "/certificates/millennium.jpg"
    },
    {
      title: "Volunteer",
      org: "UNFPA Palestine Virtual Marathon",
      date: "Mar 2026 - Apr 2026",
      desc: "Supported global outreach reaching 100+ individuals.",
      details: "Supported outreach and engagement activities, successfully connecting with over 100 individuals worldwide to raise awareness and participation.",
      image: "/certificates/unfpa.jpg"
    },
    {
      title: "Campus Team Member",
      org: "Excellence Bangladesh",
      date: "Mar 2026 - Present",
      desc: "Contributing to professional growth and network expansion on campus.",
      details: "Engaging in various skill development and networking events to build a strong professional community among university students.",
      image: "/certificates/excellence.jpg"
    }
  ];

  const awardsData = [
    { 
      title: "Science Olympiad Winner", 
      org: "District Commissioner's Office", 
      color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
      details: "Secured top position in the District Science Olympiad, showcasing strong analytical and problem-solving skills.",
      image: "/certificates/science-olympiad.jpg"
    },
    { 
      title: "Vice Chancellor's Award", 
      org: "Green University of Bangladesh", 
      color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-500/10", border: "border-yellow-200 dark:border-yellow-500/20",
      details: "Awarded by the Vice Chancellor for exceptional academic performance and maintaining a top-tier CGPA.",
      image: "/certificates/vc-award.jpg"
    },
    { 
      title: "Best Performer", 
      org: "Hult Prize, Green University", 
      color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10", border: "border-rose-200 dark:border-rose-500/20",
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-800 dark:text-gray-100 font-sans selection:bg-rose-500/30 selection:text-rose-900 dark:selection:text-rose-200 transition-colors duration-500 overflow-x-hidden relative">
      <SEO />
      
      {/* Background Audio Element (Hidden & Autoplay Enabled) */}
      <audio ref={audioRef} src="src\BGM\BGM_2.mp3" autoPlay loop preload="auto" />

      {/* Modern Floating Navbar */}
      <nav 
        role="navigation" 
        aria-label="Main Navigation"
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4 w-[95%] max-w-6xl bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-slate-200/50 dark:border-gray-800/50 rounded-full py-3 shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'top-0 w-full bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className={`mx-auto flex justify-between items-center ${isScrolled ? 'px-6' : 'max-w-7xl px-8'}`}>
          
          {/* Custom Image Hyperlink */}
          <a href="https://www.galib.com" target="_blank" rel="noopener noreferrer" className="flex items-center transition-transform hover:scale-105 group">
            <div className="w-12 h-12 rounded-full border-2 border-slate-300 dark:border-gray-700 overflow-hidden group-hover:border-rose-500 transition-colors shadow-sm">
              <img 
                src="/src/Images/Galib.png" 
                alt="Abdullah Md Galib" 
                className="w-full h-full object-cover"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }} 
              />
              <div className="hidden w-full h-full bg-rose-600 text-white items-center justify-center font-bold text-sm">
                AG
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600 dark:text-gray-400">
            <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
            <a href="#academics" className="hover:text-rose-500 transition-colors">Academics</a>
            <a href="#experience" className="hover:text-rose-500 transition-colors">Experience</a>
            <a href="#leadership" className="hover:text-rose-500 transition-colors">Leadership</a>
            <a href="#awards" className="hover:text-rose-500 transition-colors">Awards</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark/Light Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-200/50 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-slate-300/50 dark:hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-md hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 dark:bg-rose-600/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span>Aspiring Supply Chain & Logistics Professional</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Abdullah Md. <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Galib</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              An impact-driven undergraduate skilled in coordinating teams, streamlining operations, and managing supply chain logistics. Passionate about creating measurable impact through strategic execution and community engagement.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#leadership" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-[0_4px_20px_rgba(225,29,72,0.3)] hover:shadow-[0_4px_30px_rgba(225,29,72,0.5)]">
                Explore My Journey <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <div className="flex items-center justify-center space-x-4 px-4">
                <a href="https://www.facebook.com/contact.muhammad/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://linkedin.com/in/abdullahmdgalib" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm font-bold text-slate-500 dark:text-gray-500 uppercase tracking-wider">
              <MapPin className="w-4 h-4 mr-2" /> Narayanganj Sadar, Bangladesh
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Academic Journey */}
      <section id="academics" className="py-20 bg-slate-100 dark:bg-gray-900/50 border-y border-slate-200 dark:border-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/10 flex items-center justify-center rounded-xl mr-4">
                <GraduationCap className="w-6 h-6 text-rose-600 dark:text-rose-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Academic <span className="text-rose-600 dark:text-rose-500">Journey</span></h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {academicsData.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="p-8 bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl relative overflow-hidden group hover:border-rose-400 dark:hover:border-rose-500/50 transition-all shadow-sm hover:shadow-md flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 dark:bg-rose-500/5 rounded-bl-[100px] -z-10 group-hover:bg-rose-100 dark:group-hover:bg-rose-500/10 transition-colors"></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-rose-600 dark:text-green-400 font-bold block mb-5">{item.org} • <span className="text-slate-500 dark:text-gray-400">{item.date}</span></p>
                  <div className="inline-block px-4 py-1.5 bg-slate-50 dark:bg-gray-900 rounded-full text-sm text-slate-700 dark:text-gray-300 font-bold border border-slate-200 dark:border-gray-800 mb-6 w-fit">
                    {item.desc}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit"
                  >
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12">Professional <span className="text-rose-600 dark:text-rose-500">Experience</span></h2>
          </FadeIn>
          
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-3xl hover:border-rose-400 dark:hover:border-rose-500/30 transition-all shadow-sm hover:shadow-md group">
                  <div className="md:w-1/4">
                    <span className="text-sm font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-4 py-1.5 rounded-full inline-block">{exp.date}</span>
                  </div>
                  <div className="md:w-3/4 flex flex-col items-start">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{exp.title}</h3>
                    <p className="text-slate-700 dark:text-gray-300 font-semibold mb-3">{exp.org}</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                    
                    <button 
                      onClick={() => setSelectedItem(exp)}
                      className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit"
                    >
                      <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Campus Engagement */}
      <section id="leadership" className="py-24 bg-slate-100 dark:bg-gray-900 border-y border-slate-200 dark:border-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Leadership & <span className="text-rose-600 dark:text-rose-500">Campus Engagement</span></h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg font-medium">A track record of taking initiative, managing supply chain logistics for events, and executing large-scale operations.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipData.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 hover:border-rose-400 dark:hover:border-rose-500/50 hover:shadow-lg transition-all h-full flex flex-col group">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">{card.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-rose-600 dark:text-rose-400 text-xs font-bold mb-5">{card.org} • {card.date}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400 font-medium mb-6">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start"><span className="mr-2 text-rose-500">▹</span>{item}</li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setSelectedItem(card)}
                    className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit"
                  >
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering & Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12">Projects & <span className="text-rose-600 dark:text-rose-500">Volunteering</span></h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectsData.map((item, idx) => (
              <FadeIn key={idx} delay={(idx % 2) * 100}>
                <div className="p-6 bg-white dark:bg-gray-900/40 border border-slate-200 dark:border-gray-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-gray-900 hover:border-rose-400 dark:hover:border-rose-500/30 transition-all flex flex-col h-full shadow-sm">
                  <div className="flex items-start mb-4">
                    <HeartHandshake className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{item.title}</h4>
                      <span className="text-slate-500 dark:text-gray-500 font-semibold text-sm">@ {item.org} • {item.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-gray-400 font-medium mb-5">{item.desc}</p>
                  
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit"
                  >
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Honors, Awards & Certificates */}
      <section id="awards" className="py-24 bg-slate-100 dark:bg-gray-900/50 border-t border-slate-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Honors, Awards & <span className="text-rose-600 dark:text-rose-500">Certificates</span></h2>
              <p className="text-slate-600 dark:text-gray-400 font-medium text-lg">Recognitions received for leadership, academic excellence, and event coordination.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {awardsData.map((award, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-3xl hover:border-slate-400 dark:hover:border-gray-600 transition-all shadow-sm hover:shadow-md h-full group">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm ${award.bg} ${award.border} border group-hover:scale-110 transition-transform`}>
                    <Award className={`w-8 h-8 ${award.color}`} />
                  </div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold text-lg mb-2">{award.title}</h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-6">{award.org}</p>
                  
                  <button 
                    onClick={() => setSelectedItem(award)}
                    className="mt-auto flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit"
                  >
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Verify Details
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Verify Popup Modal (Global) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedItem(null)}>
          <div 
            className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)} 
              className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-gray-900 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 text-slate-500 hover:text-rose-600 transition-colors"
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
              {selectedItem.image ? (
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
              <div className={`text-slate-400 dark:text-gray-600 flex-col items-center justify-center text-center p-4 ${selectedItem.image ? 'hidden group-hover:flex absolute inset-0 bg-black/70 text-white backdrop-blur-sm' : 'flex'}`}>
                  <ImageIcon className="w-10 h-10 mb-3"/>
                  <span className="font-bold text-sm">Image / Document not found!</span>
                  <span className="text-xs mt-1 text-slate-500 dark:text-gray-400 max-w-xs">Please upload <code className="bg-slate-800 text-rose-400 px-1 py-0.5 rounded">{selectedItem.image}</code> to your public folder to display it here.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Contact Section (No Phone Numbers) */}
      <section id="contact" className="py-24 border-t border-slate-200 dark:border-gray-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Ready to <span className="text-rose-600 dark:text-rose-500">optimize operations?</span></h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto mb-12 text-lg font-medium">
              I am currently seeking opportunities to apply my supply chain and logistics expertise. Let's discuss how my management skills can drive efficiency for your team.
            </p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="bg-white dark:bg-gray-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] max-w-xl mx-auto mb-12 transition-colors duration-500">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rose-50 dark:bg-rose-500/10 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <svg className="w-8 h-8 text-rose-600 dark:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Let's Connect</h3>
                <p className="text-base text-slate-500 dark:text-gray-400 mb-8 font-medium">Reach out via email for collaborations and opportunities.</p>
                
                <a href="mailto:mail.mdgalib@gmail.com" className="flex items-center justify-between w-full p-5 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-2xl hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-md transition-all group">
                  <div className="flex items-center text-slate-900 dark:text-white overflow-hidden">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:bg-rose-50 dark:group-hover:bg-rose-500/10 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-rose-600 dark:text-rose-500" />
                    </div>
                    <span className="font-bold text-md sm:text-lg tracking-tight truncate">mail.mdgalib@gmail.com</span>
                  </div>
                  <span className="hidden sm:inline-block text-sm font-bold text-slate-400 dark:text-gray-500 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors shrink-0 ml-2">Send Email &rarr;</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://linkedin.com/in/abdullahmdgalib" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center px-6 py-3.5 bg-[#0A66C2] hover:bg-[#004182] shadow-md rounded-full text-white font-bold transition-all hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                LinkedIn
              </a>
              <a href="https://www.facebook.com/contact.muhammad/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex items-center px-6 py-3.5 bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-700 shadow-sm rounded-full text-slate-700 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-600 dark:hover:border-blue-500 transition-all hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                Facebook
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 py-8 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-slate-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Abdullah Md. Galib. All rights reserved.</p>
          <p className="mt-3 md:mt-0 flex items-center bg-slate-50 dark:bg-gray-900 px-4 py-2 rounded-full border border-slate-200 dark:border-gray-800">
            <GraduationCap className="w-4 h-4 mr-2 text-green-500" /> Green University of Bangladesh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;