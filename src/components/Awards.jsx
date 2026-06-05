import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { FadeIn } from '../Shared';
import { awardsData } from '../data';

const Awards = ({ setSelectedItem }) => (
  <section id="awards" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Honors, Awards & <span className="text-rose-600 dark:text-rose-500">Certificates</span></h2>
          <p className="text-slate-600 dark:text-gray-400 font-medium text-lg">Recognitions received for leadership, academic excellence, and event coordination.</p>
        </div>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 peer-container">
        {awardsData.map((award, idx) => (
          <FadeIn key={idx} delay={idx * 100} className="h-full">
            <div className="peer-card flex flex-col items-center text-center p-8 bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-gray-800/50 rounded-3xl transition-all shadow-sm h-full group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm ${award.bg} ${award.border} border group-hover:scale-110 transition-transform`}>
                <Award className={`w-8 h-8 ${award.color}`} />
              </div>
              <h4 className="text-slate-900 dark:text-white font-extrabold text-lg mb-2">{award.title}</h4>
              
              {/* Dynamic Hyperlink Update */}
              {award.url ? (
                <a href={award.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-6 hover:text-blue-500 hover: relative z-20 w-fit">{award.org}</a>
              ) : (
                <p className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-6">{award.org}</p>
              )}

              <button onClick={() => setSelectedItem(award)} className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-blue-50/80 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 hover:border-rose-200 dark:hover:border-rose-800 w-fit focus:outline-none uppercase tracking-wide relative z-20">
                <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> Verify Details
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;