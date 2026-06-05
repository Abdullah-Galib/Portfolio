import React, { useState, useEffect, useRef } from 'react';

// --- Smooth Scroll Reveal Animation ---
export const FadeIn = ({ children, delay = 0, className = "" }) => {
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
export const InteractiveHeading = ({ icon: Icon, title, highlight, color = "rose" }) => {
  const [isFilling, setIsFilling] = useState(false);
  
  const iconColor = color === "green" ? "text-emerald-600 dark:text-emerald-500" : "text-rose-600 dark:text-rose-500";
  const iconBg = color === "green" ? "bg-emerald-100 dark:bg-emerald-500/10" : "bg-rose-100 dark:bg-rose-500/10";
  const gradient = color === "green" 
    ? "from-emerald-500 via-emerald-400 to-slate-900 dark:to-white" 
    : "from-rose-500 via-rose-400 to-slate-900 dark:to-white";

  return (
    <FadeIn>
      <div 
        className="group flex items-center mb-12 w-fit cursor-pointer select-none"
        onMouseDown={() => setIsFilling(true)}
        onMouseUp={() => setIsFilling(false)}
        onMouseLeave={() => setIsFilling(false)}
        onTouchStart={() => setIsFilling(true)}
        onTouchEnd={() => setIsFilling(false)}
      >
        <div className={`w-12 h-12 ${iconBg} flex items-center justify-center rounded-xl mr-4 transition-transform duration-500 group-hover:scale-110 group-active:scale-95`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          {title}{" "}
          <span className={`text-transparent bg-clip-text bg-gradient-to-t ${gradient} bg-[length:100%_200%] transition-all duration-1000 ease-out ${isFilling ? 'bg-bottom' : 'bg-top'} group-hover:bg-bottom`}>
            {highlight}
          </span>
        </h2>
      </div>
    </FadeIn>
  );
};

// --- Custom Typewriter Hook ---
export const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
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

// === Image Helper Function ===
// Vite er ei function ti 'Images' folder er vetor thaka shob chobi eksathe import kore nebe
const images = import.meta.glob('./Images/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' });

export const getImage = (imageName) => {
  const path = `./Images/${imageName}`;
  return images[path] || null; 
};
