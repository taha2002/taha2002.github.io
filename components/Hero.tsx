"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Download, ChevronDown, Minimize2, Maximize2, X, Command, Folder, FileText } from 'lucide-react';
import { INTRO_TXT } from '../constants';
import HackerText from './HackerText';

const Hero: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [bootSequenceIndex, setBootSequenceIndex] = useState(0);
  const [isBooting, setIsBooting] = useState(true);
  const [inputValue, setInputValue] = useState('');

  // Animation States
  const [isMaximized, setIsMaximized] = useState(false);
  const [terminalStyle, setTerminalStyle] = useState<React.CSSProperties>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- BOOT SEQUENCE ---
  useEffect(() => {
    if (bootSequenceIndex < INTRO_TXT.length) {
      const timeout = setTimeout(() => {
        setHistory(prev => [...prev, INTRO_TXT[bootSequenceIndex]]);
        setBootSequenceIndex(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsBooting(false);
      // Only focus if we are at the top of the page to prevent scrolling up when navigating to hash
      setTimeout(() => {
        if (window.scrollY < 100 && inputRef.current) {
          inputRef.current.focus({ preventScroll: true });
        }
      }, 100);
    }
  }, [bootSequenceIndex]);

  // --- SCROLL LOCK ---
  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [history, isMaximized]);

  // --- ANIMATION LOGIC (FLIP) ---
  const toggleMaximize = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (!isMaximized) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTerminalStyle({
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          zIndex: 50,
        });

        setTimeout(() => {
          setTerminalStyle({
            position: 'fixed',
            top: '2rem',
            left: '2rem',
            right: '2rem',
            bottom: '2rem',
            width: 'auto',
            height: 'auto',
            zIndex: 50,
            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
          });
          setIsMaximized(true);
          setTimeout(() => setIsAnimating(false), 500);
        }, 10);
      }
    } else {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTerminalStyle({
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          zIndex: 50,
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        });

        setTimeout(() => {
          setIsMaximized(false);
          setTerminalStyle({});
          setIsAnimating(false);
        }, 500);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (isMaximized && !isAnimating) {
        setTerminalStyle({
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          right: '2rem',
          bottom: '2rem',
          width: 'auto',
          height: 'auto',
          zIndex: 50,
        });
      } else if (!isMaximized && !isAnimating) {
        setTerminalStyle({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized, isAnimating]);

  const handleTerminalClick = () => {
    if (!isBooting && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  };

  const handleDownloadCV = () => {
    window.print();
  };

  const handleCommand = (cmd: string) => {
    const rawCmd = cmd.trim();
    const args = rawCmd.split(' ').filter(c => c !== '');
    const command = args[0]?.toLowerCase();
    const arg1 = args[1]?.toLowerCase();

    let output: React.ReactNode = null;
    let action: (() => void) | null = null;

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-400">
            <div className="text-white font-bold mb-2">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-terminal-cyan">ls</span> <span>List portfolio modules & assets</span>
              <span className="text-terminal-cyan">cat [file]</span> <span>Read content (e.g., cat skills.txt)</span>
              <span className="text-terminal-cyan">open [dir]</span> <span>Navigate to section (e.g., open blog)</span>
              <span className="text-terminal-cyan">whoami</span> <span>Identify session user</span>
              <span className="text-terminal-cyan">date</span> <span>Show system time</span>
              <span className="text-terminal-cyan">clear</span> <span>Clear terminal history</span>
            </div>
          </div>
        );
        break;

      case 'ls':
        output = (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-2">
            <div className="flex items-center gap-2 text-terminal-purple"><Folder size={14} /> modules/projects</div>
            <div className="flex items-center gap-2 text-terminal-purple"><Folder size={14} /> modules/experience</div>
            <div className="flex items-center gap-2 text-terminal-purple"><Folder size={14} /> modules/blog</div>
            <div className="flex items-center gap-2 text-terminal-purple"><Folder size={14} /> modules/contact</div>
            <div className="flex items-center gap-2 text-slate-300"><FileText size={14} /> skills_matrix.txt</div>
          </div>
        );
        break;

      case 'open':
      case 'cd':
        if (!arg1) {
          output = "Usage: open [folder_name] (e.g., 'open projects')";
        } else {
          const map: Record<string, string> = {
            'projects': 'projects',
            'modules/projects': 'projects',
            'experience': 'experience',
            'modules/experience': 'experience',
            'blog': 'blog',
            'modules/blog': 'blog',
            'contact': 'contact',
            'modules/contact': 'contact',
            'skills': 'skills'
          };
          const target = map[arg1] || map[arg1.replace('/', '')];

          if (target && navigateToSection(target)) {
            output = <span className="text-terminal-green">{`> MOUNTING MODULE: [${target.toUpperCase()}]... SUCCESS.`}</span>;
            if (isMaximized) action = toggleMaximize;
          } else {
            output = <span className="text-red-400">{`Directory '${arg1}' not found. Try 'ls' to view modules.`}</span>;
          }
        }
        break;

      case 'cat':
        if (!arg1) {
          output = "Usage: cat [filename]";
        } else if (arg1 === 'skills_matrix.txt' || arg1 === 'skills.txt') {
          output = (
            <div className="text-xs md:text-sm font-mono leading-tight mt-2 text-slate-300">
              <div className="mb-1">PYTHON / BACKEND   [====================] 98%</div>
              <div className="mb-1">REACT / NEXT.JS    [==================--] 90%</div>
              <div className="mb-1">DATA SCRAPING      [====================] 99%</div>
              <div className="mb-1">SYSTEM ARCHITECT   [===============-----] 85%</div>
              <div className="mb-1">INDUSTRIAL MAINT.  [=================---] 88%</div>
            </div>
          );
        } else if (arg1 === 'about_me.md') {
          output = "Senior Full Stack Engineer bridging the gap between Industrial IoT and Modern Web Architectures. Based in Algiers.";
        } else {
          output = <span className="text-red-400">{`File '${arg1}' not found or permission denied.`}</span>;
        }
        break;

      case 'whoami':
        output = "guest_user@portfolio (Role: Recruiter / Visitor)";
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'sudo':
        output = <span className="text-red-500 font-bold">PERMISSION DENIED: You do not have root access to this portfolio kernel.</span>;
        break;

      case 'rm':
        output = <span className="text-red-500">Error: Deletion of assets is restricted to admin@tahabouras.</span>;
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        if (command) {
          output = <span className="text-red-400">{`Command not found: ${command}. Type 'help' for assistance.`}</span>;
        }
    }

    if (output || command) {
      setHistory(prev => [...prev, `guest@portfolio:~$ ${rawCmd}`, output as any]);
    }

    if (action) setTimeout(action, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <section className={`min-h-screen flex flex-col justify-center items-center relative px-4 py-20 md:py-0` }>
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Bio */}
        <div className="space-y-8 animate-fade-in order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-panel border border-terminal-border text-terminal-cyan text-xs md:text-sm font-mono transition-colors">
            <span className="w-2 h-2 rounded-full bg-terminal-cyan animate-pulse"></span>
            System Status: ONLINE
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-terminal-header leading-tight transition-colors">
            <HackerText text="Full Stack" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-cyan to-terminal-purple">
              <HackerText text="Engineer" />
            </span>
          </h1>

          <p className="text-terminal-body text-base md:text-lg leading-relaxed max-w-xl transition-colors">
            Specialized in complex <strong>Backend Systems</strong>, <strong>Data Extraction Pipelines</strong>, and <strong>Industrial Maintenance</strong>.
            Bridging the gap between raw data and actionable web interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => navigateToSection('projects')}
              className="px-6 py-4 bg-terminal-cyan text-white dark:text-black font-bold rounded hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              <TerminalIcon size={18} />
              View Protocol
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-4 border border-terminal-border text-terminal-body rounded hover:border-terminal-cyan hover:text-terminal-cyan transition-all flex items-center justify-center gap-2 text-sm md:text-base bg-terminal-panel"
              title="Save as PDF"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>

        {/* Right: Terminal Visual */}
        <div ref={containerRef} className={`w-full order-1 lg:order-2 h-[320px] relative ${isMaximized ? " z-[50]" : "z-10"}`}>
          <div
            style={terminalStyle}
            className={`
                flex flex-col bg-[#0f0f13] rounded-lg border border-terminal-border overflow-hidden shadow-2xl shadow-terminal-cyan/5 font-mono text-xs md:text-sm 
                ${!isMaximized && !isAnimating ? 'absolute inset-0' : ''}
              `}
            onClick={handleTerminalClick}
          >
            {/* Terminal Header */}
            <div className="bg-[#1a1a20] px-4 py-3 flex items-center gap-2 border-b border-terminal-border shrink-0 cursor-default select-none">
              <div className="flex gap-2 group">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                <div
                  onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}
                  className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer flex items-center justify-center group/min"
                  title={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized && <Minimize2 size={8} className="text-black opacity-0 group-hover/min:opacity-100" />}
                </div>
                <div
                  onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}
                  className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer flex items-center justify-center group/max"
                  title="Maximize"
                >
                  {!isMaximized && <Maximize2 size={8} className="text-black opacity-0 group-hover/max:opacity-100" />}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2 text-slate-500">
                <Command size={12} />
                <span className="text-xs">
                  {isMaximized ? 'admin_mode' : 'guest_mode'} — {isMaximized ? 'fullscreen' : 'standard'}
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={scrollableRef}
              className="p-6 text-green-400 bg-black/95 overflow-y-auto flex-grow font-mono scrollbar-hide custom-scrollbar relative"
            >
              {/* CRT Scanline Effect */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>

              {history.map((item, i) => (
                <div key={i} className="mb-2 whitespace-pre-wrap break-words leading-relaxed relative z-0 text-slate-300">
                  {typeof item === 'string' ? item : item}
                </div>
              ))}

              {!isBooting && (
                <div className="flex items-center relative z-0">
                  <span className="text-terminal-purple mr-2 shrink-0">guest@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-slate-200 flex-grow font-mono caret-terminal-cyan w-full"
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              )}
            </div>
          </div>

          {isMaximized && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
              onClick={toggleMaximize}
            />
          )}
        </div>
      </div>

      <a href="#experience" className="absolute bottom-6 animate-bounce text-terminal-body hover:text-terminal-cyan transition-colors hidden md:block">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
