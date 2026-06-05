import React from 'react';
import { CheckCircle, GraduationCap } from 'lucide-react';
import { FadeIn } from '../Shared';
import { leadershipData } from '../data';

const Leadership = ({ setSelectedItem }) => (
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
              
              {/* Dynamic Hyperlink Update */}
              {isGUB ? (
                card.url ? (
                  <a href={card.url} target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-500 text-xs font-bold mb-5 inline-flex items-center hover:underline relative z-20 w-fit">
                    <GraduationCap className="w-3.5 h-3.5 mr-1"/> {card.org} <span className="text-slate-500 dark:text-gray-500 ml-1">• {card.date}</span>
                  </a>
                ) : (
                  <p className="text-emerald-700 dark:text-emerald-500 text-xs font-bold mb-5 inline-flex items-center">
                    <GraduationCap className="w-3.5 h-3.5 mr-1"/> {card.org} <span className="text-slate-500 dark:text-gray-500 ml-1">• {card.date}</span>
                  </p>
                )
              ) : (
                card.url ? (
                  <a href={card.url} target="_blank" rel="noreferrer" className="text-rose-600 dark:text-rose-400 text-xs font-bold mb-5 inline-flex items-center hover:underline relative z-20 w-fit">
                    {card.org} <span className="text-slate-500 dark:text-gray-500 ml-1">• {card.date}</span>
                  </a>
                ) : (
                  <p className="text-rose-600 dark:text-rose-400 text-xs font-bold mb-5">{card.org} • {card.date}</p>
                )
              )}

              <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400 font-medium mb-6">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`mr-2 ${isGUB ? 'text-emerald-500' : 'text-rose-500'}`}>▹</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setSelectedItem(card)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20">
                <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
              </button>
            </div>
          </FadeIn>
        )})}
      </div>
    </div>
  </section>
);

export default Leadership;