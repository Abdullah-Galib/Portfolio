import { getImage } from '../Shared';

export const awardsData = [
  { 
    title: "Vice Chancellor's Award", 
    org: "Green University of Bangladesh", 
    url: "", 
    color: "text-green-700 dark:text-green-600", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
    details: "Awarded by the Vice Chancellor for exceptional academic performance and maintaining a top-tier CGPA.",
    image: getImage('vc-award.jpg')
  },

  { 
    title: "IEE Olympiad GUB Champion", 
    org: "IEEE GUB Student Branch", 
    url: "", 
    color: "text-green-700 dark:text-green-600", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
    details: "Awarded the certificate for securing the 2nd position in junior level during IEEE Day 2025@GUB celebration.",
    image: getImage('IEEE_Day_Olympiad.png'),
  },

  { 
    title: "Science Olympiad Winner", 
    org: "District Commissioner's Office", 
    url: "", 
    color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10", border: "border-emerald-200 dark:border-emerald-500/20",
    details: "Secured top position in the District Science Olympiad, showcasing strong analytical and problem-solving skills.",
    image: getImage('science-olympiad.jpg')
  },

  { 
    title: "Best Performer", 
    org: "Hult Prize, Green University", 
    url: "", 
    color: "text-green-700 dark:text-green-600", bg: "bg-green-50 dark:bg-green-500/10", border: "border-green-200 dark:border-green-500/20",
    details: "Recognized as the Best Performer for outstanding logistics management and operational execution during the Hult Prize events.",
    image: getImage('hult-best.jpg')
  },
  { 
    title: "National Science Debate", 
    org: "National Competition", 
    url: "", 
    color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10", border: "border-blue-200 dark:border-blue-500/20",
    details: "Participated and excelled in the National Science Debate Competition, demonstrating logical reasoning and public speaking abilities.",
    image: getImage('debate.jpg')
  }
];