"use client"
import React from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { LINKS } from '@/constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-terminal-border bg-gradient-to-r from-black via-[#131318] to-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Text Side */}
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
            <ShieldCheck className="text-terminal-green" />
            Verified Global Track Record
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Maintained a consistent <span className="text-terminal-yellow font-bold">5-star rating</span> across technical projects on Fiverr and Upwork.
            Specializing in API automation, scraping pipelines, and backend architecture for international clients.
          </p>
        </div>

        {/* Links Side */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href={LINKS.fiverr}
            target="_blank"
            rel="noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-5 py-3 rounded bg-[#1dbf73]/10 border border-[#1dbf73]/30 hover:bg-[#1dbf73]/20 hover:border-[#1dbf73]/60 transition-all group"
          >
            <div className="text-[#1dbf73] font-bold text-xl tracking-tight group-hover:scale-105 transition-transform font-serif">fi</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#1dbf73] uppercase tracking-wider font-bold">Seller Profile</span>
              <span className="text-white text-sm font-bold flex items-center gap-1">
                Fiverr <Star size={12} className="fill-terminal-yellow text-terminal-yellow" /> 5.0
              </span>
            </div>
          </a>

          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-5 py-3 rounded bg-[#14a800]/10 border border-[#14a800]/30 hover:bg-[#14a800]/20 hover:border-[#14a800]/60 transition-all group"
          >
            <div className="text-[#14a800] font-bold text-xl tracking-tight font-serif italic group-hover:scale-105 transition-transform">Up</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#14a800] uppercase tracking-wider font-bold">Available</span>
              <span className="text-white text-sm font-bold flex items-center gap-1">
                Upwork <ExternalLink size={12} />
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;