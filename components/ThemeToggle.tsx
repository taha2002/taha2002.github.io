"use client"
import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    // Load saved theme on mount
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t: Theme) => {
      root.classList.remove('light', 'dark');

      if (t === 'system') {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      } else {
        localStorage.setItem('theme', t);
        if (t === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    applyTheme(theme);
  }, [theme]);

  const cycleTheme = () => {
    if (theme === 'system') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    else setTheme('system');
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-terminal-bg border border-terminal-border text-terminal-body hover:text-terminal-cyan hover:border-terminal-cyan transition-all group relative"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <div className={`absolute transition-all duration-300 ${theme === 'light' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Sun size={20} />
        </div>
        <div className={`absolute transition-all duration-300 ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Moon size={20} />
        </div>
        <div className={`absolute transition-all duration-300 ${theme === 'system' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Monitor size={20} />
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-terminal-panel border border-terminal-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
        {theme.toUpperCase()}
      </span>
    </button>
  );
};

export default ThemeToggle;