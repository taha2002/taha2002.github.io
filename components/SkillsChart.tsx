"use client"
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILL_DATA, EDUCATION } from '../constants';
import { GraduationCap, FileText } from 'lucide-react';

const SkillsChart: React.FC = () => {
  return (
    <section className="py-20 bg-terminal-panel border-y border-terminal-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">

          {/* Education Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-terminal-header">
                <span className="text-terminal-yellow">02.</span> Education & Research
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-terminal-border hover:border-terminal-yellow transition-colors">
                  <h3 className="text-lg font-bold text-terminal-header">{edu.degree}</h3>
                  <div className="text-terminal-yellow text-sm font-mono mb-2">{edu.institution} | {edu.period}</div>
                  <div className="text-terminal-body text-sm mb-2">{edu.status}</div>
                  {edu.description && (
                    <div className="mt-3 p-3 bg-terminal-bg rounded text-sm text-terminal-body/90 border border-terminal-border">
                      <p className="mb-2 italic opacity-80">{edu.description}</p>
                      {edu.link && (
                        <a href={edu.link} target="_blank" rel="noreferrer" className="text-terminal-cyan hover:underline inline-flex items-center gap-1 text-xs">
                          <FileText size={12} /> Read Publication
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-terminal-bg/50 rounded-lg border border-terminal-border">
              <h4 className="text-terminal-header font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-terminal-yellow" />
                Key Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['System Integration', 'Cloudflare Bypass', 'Reverse Engineering', 'API Design', 'Video Engineering'].map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-terminal-panel border border-terminal-border text-xs text-terminal-body">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Column */}
          <div className="w-full lg:w-1/2 h-[450px] relative flex justify-center items-center">
            <div className="absolute top-0 right-0 z-10 text-[10px] sm:text-xs text-terminal-body/60 font-mono">
              [ANALYSIS_MODE: RADAR]
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={SKILL_DATA}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: 'var(--header)', fontSize: 11, fontWeight: 600 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="var(--accent-cyan)"
                  strokeWidth={3}
                  fill="var(--accent-cyan)"
                  fillOpacity={0.2}
                  activeDot={{ r: 6, fill: '#fff', stroke: 'var(--accent-cyan)' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--panel)', borderColor: 'var(--border)', color: 'var(--header)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}
                  cursor={{ stroke: 'var(--border)', strokeWidth: 1 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsChart;