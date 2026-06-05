import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { FadeIn, InteractiveHeading } from '../Shared';
import { academicsData } from '../data';

const Academics = ({ setSelectedItem }) => (
  <section id="academics" className="py-20 bg-slate-100/80 dark:bg-gray-900/30 backdrop-blur-md border-y border-slate-200/50 dark:border-gray-800/50 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-6">
      <InteractiveHeading icon={GraduationCap} title="Academic" highlight="Journey" color="green" />
      <div className="grid md:grid-cols-2 gap-8 peer-container">
        {academicsData.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 100} className="h-full">
            <div className={`peer-card p-8 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border ${item.isGUB ? 'border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-500/50' : 'border-slate-200 dark:border-gray-800 hover:border-slate-400 dark:hover:border-gray-600'} rounded-3xl relative overflow-hidden flex flex-col h-full group`}>
              {item.isGUB && <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-500/5 rounded-bl-[100px] -z-10"></div>}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              
              {/* Dynamic Hyperlink */}
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className={`${item.isGUB ? 'text-emerald-700 dark:text-emerald-500' : 'text-slate-700 dark:text-slate-300'} font-bold flex items-center mb-5 hover: relative z-20 w-fit`}>
                  {item.isGUB && <GraduationCap className="w-4 h-4 mr-1"/>} {item.org} <span className="text-slate-500 dark:text-gray-400 ml-1">• {item.date}</span>
                </a>
              ) : (
                <p className={`${item.isGUB ? 'text-emerald-700 dark:text-emerald-500' : 'text-slate-700 dark:text-slate-300'} font-bold flex items-center mb-5`}>
                  {item.isGUB && <GraduationCap className="w-4 h-4 mr-1"/>} {item.org} <span className="text-slate-500 dark:text-gray-400 ml-1">• {item.date}</span>
                </p>
              )}

              <div className="inline-block px-4 py-1.5 bg-slate-50/80 dark:bg-gray-900/80 rounded-full text-sm text-slate-700 dark:text-gray-300 font-bold border border-slate-200 dark:border-gray-800 mb-6 w-fit backdrop-blur-sm">
                {item.desc}
              </div>
              <button onClick={() => setSelectedItem(item)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20">
                <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Academics;