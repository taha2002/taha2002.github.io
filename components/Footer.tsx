"use client"
import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { LINKS } from '@/constants';

const Footer: React.FC = () => {
    return (
        <section id="contact" className="py-32 px-4 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terminal-purple/10 blur-[100px] rounded-full pointer-events-none"></div>
            <h2 className="text-5xl font-bold text-terminal-header mb-8 tracking-tight relative z-10">Initialize Communication</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16 relative z-10 flex-wrap">
                <a href={LINKS.email} className="px-8 py-4 bg-terminal-cyan text-white dark:text-black font-bold text-lg rounded hover:bg-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Mail size={22} /> Ping User
                </a>
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="px-8 py-4 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green font-bold text-lg rounded hover:bg-terminal-green hover:text-white dark:hover:text-black transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <MessageCircle size={22} />
                    WhatsApp
                </a>

                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-terminal-panel border border-terminal-border text-terminal-header font-bold text-lg rounded hover:border-terminal-purple hover:text-terminal-purple transition-all hover:scale-105 flex items-center justify-center gap-3">
                    <Linkedin size={22} />
                    Connect
                </a>
            </div>
            <div className="flex justify-center gap-8 mb-12 opacity-70">
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-terminal-body hover:text-terminal-header transition-colors"><Github size={28} /></a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-terminal-body hover:text-terminal-header transition-colors"><Linkedin size={28} /></a>
            </div>
            <footer className="mt-20 text-xs font-mono text-terminal-body border-t border-terminal-border/50 pt-8">
                <p>Designed & Built by Taha Bouras</p>
            </footer>
        </section>
    );
};

export default Footer;
