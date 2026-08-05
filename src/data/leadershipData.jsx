import React from 'react';
import { Megaphone, Zap, Users, MapPin, Globe, Briefcase } from 'lucide-react';
import { getImage } from '../Shared'; 

export const leadershipData = [
  {
    title: "Joint Information Secretary",
    org: "Green University Computer Club (GUCC)",
    date: "Apr 2026 - Present",
    icon: <Megaphone className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />,
    url: "https://gucc.green.edu.bd/executives/251002029", // <--- ১. GUCC এর লিংক
    items: ["Serve as a central hub for organizational communication.", "Draft professional captions for social media.", "Coordinate and lead Class Representatives."],
    details: "Supported the Information Secretary in strategic planning and operational execution. Handled departmental orientation for nearly 200 participants.",
    image: getImage('gucc.jpg') 
  },
  {
    title: "Campus Icon",
    org: "Lotto Sports Bangladesh",
    date: "August 2026 - Present",
    icon: <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />,
    url: " ", // <--- ৩. IEEE এর ফেসবুক লিংক (আপনার আসল লিংকটি এখানে বসান)
    items: ["Supply Chain", "Workshop.", "Mentorship"],
    details: "Will be available later.",
    image: getImage("N/A"),
  },
  {
    title: "Associate of Logistics",
    org: "Hult Prize at GUB",
    date: "Nov 2025 - Present",
    icon: <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />,
    url: "https://www.facebook.com/hultprizegub", // <--- ২. Hult Prize এর ফেসবুক লিংক (আপনার আসল লিংকটি এখানে বসান)
    items: ["Support execution of venue setup and registration.", "Handle logistics data and technical operations.", "Managed 110 participants in the grand finale."],
    details: "Maintaining an organized approach to meet logistics deadlines. Handled 110 participants directly during the Grand Finale operations.",
    image: getImage("Hult_Certificate.png"),
  },
  {
    title: "Volunteer",
    org: "IEEE Student Branch GUB",
    date: "Jun 2025 - Present",
    icon: <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />,
    url: "https://www.facebook.com/ieeesbgub", // <--- ৩. IEEE এর ফেসবুক লিংক (আপনার আসল লিংকটি এখানে বসান)
    items: ["Website Development & Public Relations Team.", "Logistic Support & Event Management.", "Report writing based on tasks."],
    details: "Managed event participants ranging from 60-82. Contributed to logistics distribution, membership development, and website development teams.",
    image: getImage("Abdullah_Galib_IEEE.png"),
  },

  {
    title: "Campus Coordinator",
    org: "Dawn of Bioinformatics",
    date: "Jul 2025 - Dec 2025",
    icon: <Globe className="w-8 h-8 text-blue-500 mb-4" />,
    url: "", // <--- লিংক না থাকলে ফাঁকা রাখবেন অথবা এই লাইনটি মুছে দেবেন
    items: ["Responsible for campus outreach.", "Organized seminars and workshops.", "Bridged communication gaps."],
    details: "Directed campus-focused promotional efforts, reaching 60 students and raising awareness of bioinformatics on campus.",
    image: getImage("DoB_Certificate.jpeg"),
  },

  {
    title: "Campus Leader",
    org: "Cybernauts 2026",
    date: "May 2026 - June 2026",
    icon: <Briefcase className="w-8 h-8 text-purple-500 mb-4" />,
    url: "https://cybernauts.nsucec.com/",
    items: ["Promoted all the events on campus.", "Stablished partnership with three clubs", "Registered 30+ participants."],
    details: "Acted as an ambassador for the AI Community at BUBT, spreading awareness about AI technologies and community programs.",
    image: getImage("Campus_Leader.jpg"),
  },

  {
    title: "Campus Ambassador",
    org: "IEEE IUBAT Student Branch",
    date: "Dec 2025",
    icon: <MapPin className="w-8 h-8 text-orange-500 mb-4" />,
    url: "https://www.facebook.com/ieeeiubat", // <--- (ভবিষ্যতের জন্য: এখানে চাইলে লিংক দিতে পারেন)
    items: ["Promoted symposium across campus.", "Acted as communication bridge for organizing committee."],
    details: "Represented IEEE IUBAT for SympSIST 2025. Encouraged student participation by explaining event objectives and registration procedures.",
    image: getImage("IEEE_IUBAT_CA.jpeg")
  },
  
  {
    title: "Campus Ambassador",
    org: "AI Community BUBT",
    date: "Oct 2025 - Nov 2025",
    icon: <Briefcase className="w-8 h-8 text-purple-500 mb-4" />,
    url: "", // <--- লিংক না থাকলে ফাঁকা রাখবেন অথবা এই লাইনটি মুছে দেবেন
    items: ["Promoted AI initiatives on campus.", "Assisted in community growth."],
    details: "Acted as an ambassador for the AI Community at BUBT, spreading awareness about AI technologies and community programs.",
    image: getImage("BUBT_AI_COMMUNITY.png")
  }
];