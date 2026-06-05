import React from 'react';
import { getImage } from '../Shared';

export const experienceData = [
  {
    title: "Reviewer",
    org: "Millennium Campus Network (MCN)",
    date: "May 2026 - Present",
    desc: "Serving as a remote reviewer, hitting 15 reviews weekly.",
    details: "Conducting weekly reviews remotely, consistently completing evaluations and ensuring high quality standards.",
    impact: "Global Impact",
    url: "https://www.millenniumfellows.org/fellow/2025/green/abdullah-md-galib",
    image: "Contact for verification",
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
    image: "src/Images/ScienceBee.png",
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-green-700 dark:text-green-600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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