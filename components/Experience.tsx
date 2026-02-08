"use client"
import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronDown, ChevronUp, GitCommit } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const toggleRole = (idx: number) => {
    setExpandedRole(expandedRole === idx ? null : idx);
  };

  // Helper to bold specific tech keywords in the summary
  const highlightKeywords = (text: string) => {
    const keywords = ['Next.js', 'Supabase', 'FastAPI', 'Python', 'PHP', 'WordPress', 'n8n', 'LangChain', 'HLS', 'FFmpeg', 'Cloudflare'];
    const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
    return parts.map((part, i) =>
      keywords.some(k => k.toLowerCase() === part.toLowerCase())
        ? <strong key={i} className="text-terminal-cyan font-bold">{part}</strong>
        : part
    );
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto transition-colors duration-300">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-terminal-header">
          <span className="text-terminal-purple">01.</span> Professional Roles
        </h2>
        <div className="h-px bg-terminal-border flex-grow"></div>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((job, idx) => {
          const isExpanded = expandedRole === idx;

          return (
            <div key={idx} className="relative md:pl-0">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[20px] top-0 bottom-[-48px] w-px bg-terminal-border transition-colors"></div>

              <div className="md:ml-12 group">
                {/* Role Header */}
                <div className="relative bg-terminal-panel/50 border border-terminal-border rounded-lg p-5 md:p-8 hover:border-terminal-purple/50 transition-all hover:bg-terminal-panel">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-[35px] top-8 w-4 h-4 rounded-full bg-terminal-bg border-2 border-terminal-purple shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10 transition-colors"></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-terminal-header leading-tight">
                        {job.company}
                      </h3>
                      <div className="text-terminal-purple font-mono text-sm md:text-base mt-2 flex items-center gap-2">
                        <Briefcase size={16} className="shrink-0" />
                        {job.role}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm">
                      <div className="inline-block self-start md:self-auto bg-terminal-bg border border-terminal-border px-3 py-1 rounded text-terminal-cyan font-mono mb-2 md:mb-1 transition-colors">
                        {job.period}
                      </div>
                      <div className="text-terminal-body flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="text-terminal-body text-sm md:text-base leading-relaxed mb-6 border-l-2 border-terminal-cyan/30 pl-4">
                    <p>{highlightKeywords(job.summary)}</p>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleRole(idx)}
                    className="flex items-center gap-2 text-xs md:text-sm font-mono text-terminal-body/70 hover:text-terminal-header transition-colors p-2 -ml-2 rounded hover:bg-terminal-bg/50"
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {isExpanded ? "Hide Project Details" : "View Key Projects & Protocols"}
                  </button>

                  {/* Accordion Content */}
                  <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="min-h-0">
                      <div className="space-y-6 pt-2 border-t border-terminal-border/50">
                        {job.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="flex gap-4 items-start group/item">
                            <div className="mt-1.5 text-terminal-body/60 group-hover/item:text-terminal-cyan transition-colors shrink-0">
                              <GitCommit size={16} />
                            </div>
                            <div>
                              <h4 className="font-bold text-terminal-header text-sm">{proj.title}</h4>
                              <p className="text-xs text-terminal-body mt-1 mb-2 leading-relaxed">{proj.details}</p>
                              <div className="flex flex-wrap gap-2">
                                {proj.stack.map((s, i) => (
                                  <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-terminal-bg border border-terminal-border text-terminal-body/80 whitespace-nowrap transition-colors">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;