import React from 'react';
import { Code, HeartHandshake, CheckCircle } from 'lucide-react';
import { FadeIn } from '../Shared';
import { projectsData, volunteeringData } from '../data';

const ProjectsVolunteering = ({ setSelectedItem }) => (
  <>
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
                <div className="peer-card p-6 bg-white/90 dark:bg-gray-900/40 backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 rounded-3xl transition-all flex flex-col h-full shadow-sm relative group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start">
                      <Code className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{item.title}</h4>
                        {/* Dynamic Hyperlink */}
                        {item.url ? (
                           <a href={item.url} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-gray-500 font-semibold text-sm hover:underline relative z-20 w-fit block">@ {item.org}</a>
                        ) : (
                           <span className="text-slate-500 dark:text-gray-500 font-semibold text-sm">@ {item.org}</span>
                        )}
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
                <div className="peer-card p-6 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-3xl transition-all flex flex-col h-full shadow-sm relative group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start">
                      <HeartHandshake className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">{item.title}</h4>
                        {/* Dynamic Hyperlink */}
                        {item.url ? (
                           <a href={item.url} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-gray-500 font-semibold text-sm hover:underline relative z-20 w-fit block">@ {item.org}</a>
                        ) : (
                           <span className="text-slate-500 dark:text-gray-500 font-semibold text-sm">@ {item.org}</span>
                        )}
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
  </>
);

export default ProjectsVolunteering;