import React from 'react';
import { Briefcase, CheckCircle, GraduationCap } from 'lucide-react';
import { FadeIn, InteractiveHeading } from '../Shared';
import { experienceData } from '../data';

const Experience = ({ setSelectedItem }) => (
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
                  
                  {/* Dynamic Logo Hyperlink */}
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="block mb-5 group/logo relative z-20">
                      <div className="w-20 h-20 bg-slate-50 dark:bg-gray-900 rounded-2xl p-4 border-2 border-slate-200 dark:border-gray-700 flex items-center justify-center overflow-hidden group-hover/logo:border-rose-500 transition-colors shadow-sm">
                        {exp.customSVG}
                      </div>
                    </a>
                  ) : (
                    <div className="block mb-5 group/logo relative z-20">
                      <div className="w-20 h-20 bg-slate-50 dark:bg-gray-900 rounded-2xl p-4 border-2 border-slate-200 dark:border-gray-700 flex items-center justify-center overflow-hidden transition-colors shadow-sm">
                        {exp.customSVG}
                      </div>
                    </div>
                  )}

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
                      
                      {/* Dynamic Title Hyperlink */}
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-gray-300 font-semibold mb-3 hover: relative z-20 inline-block w-fit">
                          {exp.org.includes('Green University') || exp.org.includes('CRITS') ? (
                            <span className="text-emerald-700 dark:text-emerald-500 inline-flex items-center"><GraduationCap className="w-4 h-4 mr-1"/>{exp.org}</span>
                          ) : exp.org}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-gray-300 font-semibold mb-3">
                          {exp.org.includes('Green University') || exp.org.includes('CRITS') ? (
                            <span className="text-emerald-700 dark:text-emerald-500 inline-flex items-center"><GraduationCap className="w-4 h-4 mr-1"/>{exp.org}</span>
                          ) : exp.org}
                        </p>
                      )}

                    </div>
                    {exp.impact && (
                      <span className="bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold border border-blue-200 dark:border-blue-800/50 shadow-sm shrink-0 whitespace-nowrap hidden sm:block uppercase tracking-wider">
                        ⚡ {exp.impact}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-5 mt-2">{exp.desc}</p>
                  
                  <button onClick={() => setSelectedItem(exp)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20">
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
);

export default Experience;