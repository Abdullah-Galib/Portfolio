import React from 'react';
import { Terminal, Cpu, Code, ShieldCheck, Database, Layout } from 'lucide-react';

export const skillsData = [
  {
    id: "c-lang",
    title: "C Programming & Data Structures",
    category: "Core Foundation",
    secureScore: "94.50%",
    status: "Healthy • Highly Proficient",
    activeProjectsCount: 4,
    icon: <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    healthBar: {
      healthy: 75,
      attention: 20,
      critical: 5
    },
    metrics: [
      { label: "Memory Management & Pointers", value: "92%" },
      { label: "Linked List Deletion Operations", value: "98%" },
      { label: "Algorithm Efficiency", value: "90%" }
    ],
    summary: "Strong command over C programming, manual memory management, pointer manipulation, and foundational algorithm optimization.",
    projects: [
      {
        title: "Dynamic Linked List Deletion Engine",
        desc: "Designed an optimized C program focusing strictly on targeted node deletion operations, memory deallocation, and pointer redirection.",
        tag: "Data Structures"
      },
      {
        title: "Thevenin's & KVL Circuit Simulation Logic",
        desc: "Implemented algorithmic verification of electrical engineering laws (Thevenin's Theorem & KVL in AC series RLC circuits) using structured C logic.",
        tag: "Engineering Math"
      }
    ]
  },
  {
    id: "java-lang",
    title: "Java & Object-Oriented Development",
    category: "Software Engineering",
    secureScore: "91.80%",
    status: "Healthy • Production Ready",
    activeProjectsCount: 3,
    icon: <Cpu className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    healthBar: {
      healthy: 70,
      attention: 25,
      critical: 5
    },
    metrics: [
      { label: "Object-Oriented Programming (OOP)", value: "94%" },
      { label: "Method Overloading & Polymorphism", value: "91%" },
      { label: "Academic Lab Execution Accuracy", value: "96%" }
    ],
    summary: "Expertise in Java OOP paradigms, method overloading, encapsulation, and developing modular software architectures for academic and research problems.",
    projects: [
      {
        title: "Modular OOP Task Overloading Architecture",
        desc: "Developed structured Java applications demonstrating compile-time polymorphism, clean class hierarchies, and robust exception handling without prefix clutter.",
        tag: "OOP Design"
      },
      {
        title: "Academic Lab Assignment Automation",
        desc: "Structured automated test suites and computational solvers for advanced CSE university laboratory assignments at Green University.",
        tag: "Academic Dev"
      }
    ]
  },
  {
    id: "python-lang",
    title: "Python Automation & Web Scraping",
    category: "Automation & Research",
    secureScore: "96.20%",
    status: "Healthy • Automated",
    activeProjectsCount: 4,
    icon: <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />,
    healthBar: {
      healthy: 85,
      attention: 12,
      critical: 3
    },
    metrics: [
      { label: "Selenium Web Scraping & WebDriver", value: "96%" },
      { label: "Data Extraction & Parsing", value: "94%" },
      { label: "Script Automation & Scheduling", value: "95%" }
    ],
    summary: "Specialized in Python scripting for browser automation, targeted web scraping using Selenium WebDriver, and data pipeline processing.",
    projects: [
      {
        title: "Selenium Dynamic Web Scraper",
        desc: "Engineered a robust Selenium WebDriver scraping tool to extract structured data from JavaScript-heavy web pages with automated retry and scrolling logic.",
        tag: "Automation"
      },
      {
        title: "SustainaBite Harvest Data Parser",
        desc: "Built data aggregation scripts to support the SustainaBite platform, empowering local farmers by organizing harvest metrics for distribution.",
        tag: "Social Impact"
      }
    ]
  }
];