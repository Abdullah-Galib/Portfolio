import React, { useState } from 'react';
import { ShieldCheck, MoreHorizontal, CheckCircle, Code, Cpu, Terminal, ArrowUpRight, FolderGit2, X } from 'lucide-react';
import { FadeIn, InteractiveHeading } from '../Shared';
import { skillsData } from '../data';

const TechnicalSkills = () => {
  const [activeProfileModal, setActiveProfileModal] = useState(null);

  return (
    <section id="skills" className="py-24 bg-slate-100/90 dark:bg-gray-900/40 backdrop-blur-md border-y border-slate-200/60 dark:border-gray-800/60 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
     <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="flex items-center gap-4">
              {/* Microsoft Fluent Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl animate-pulse"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 flex items-center justify-center shadow-md border border-blue-400/20">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Consistent Heading */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Technical{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                    Skills & Profiles
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* --- Microsoft Defender Dashboard Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => (
            <FadeIn key={skill.id} delay={idx * 100} className="h-full">
              <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                
                {/* Defender Top Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800/80 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-gray-900 group-hover:scale-105 transition-transform">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 block">
                        {skill.category}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 p-1 rounded-md">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Secure Score KPI Display */}
                <div className="mb-5">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {skill.secureScore}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Healthy
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-semibold">
                    {skill.status}
                  </p>
                </div>

                {/* Segmented Microsoft Security Progress Bar */}
                <div className="mb-6">
                  <div className="h-3 w-full bg-slate-100 dark:bg-gray-900 rounded-full overflow-hidden flex gap-0.5 p-0.5">
                    <div 
                      style={{ width: `${skill.healthBar.healthy}%` }} 
                      className="bg-emerald-500 h-full rounded-l-full transition-all duration-1000"
                      title="Proficient / Healthy"
                    />
                    <div 
                      style={{ width: `${skill.healthBar.attention}%` }} 
                      className="bg-amber-500 h-full transition-all duration-1000"
                      title="Active Practice"
                    />
                    <div 
                      style={{ width: `${skill.healthBar.critical}%` }} 
                      className="bg-rose-500 h-full rounded-r-full transition-all duration-1000"
                      title="Continuous Optimization"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 dark:text-gray-500 mt-2 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Proficient</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span> Practice</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span> R&D</span>
                  </div>
                </div>

                {/* Metric Breakdown Bars */}
                <div className="space-y-3 mb-6 bg-slate-50 dark:bg-gray-900/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
                  {skill.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-gray-300 mb-1">
                        <span>{metric.label}</span>
                        <span className="text-blue-600 dark:text-blue-400">{metric.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" 
                          style={{ width: metric.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                  {skill.summary}
                </p>

                {/* Defender Action Button -> Opens Profile Projects Modal */}
                <button 
                  onClick={() => setActiveProfileModal(skill)}
                  className="mt-auto w-full py-2.5 px-4 bg-slate-999 hover:bg-blue-700 dark:bg-white dark:hover:bg-blue-800 text-white dark:text-slate-900 hover:text-white dark:hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View Projects & Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- Language Dedicated Projects & Profile Modal --- */}
        {activeProfileModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setActiveProfileModal(null)}>
            <div className="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActiveProfileModal(null)} className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-gray-900 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 text-slate-500 hover:text-rose-600 transition-colors">
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  {activeProfileModal.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Dedicated Profile Segment</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{activeProfileModal.title}</h3>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Security & Proficiency Posture</span>
                  <span className="text-xl font-black text-slate-900 dark:text-white">{activeProfileModal.secureScore}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-300 dark:border-emerald-800">
                  {activeProfileModal.status}
                </span>
              </div>

              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Executed Projects ({activeProfileModal.projects.length})
              </h4>

              <div className="space-y-4">
                {activeProfileModal.projects.map((proj, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-slate-900 dark:text-white text-base">{proj.title}</h5>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold uppercase tracking-wider">
                        {proj.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnicalSkills;