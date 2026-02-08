"use client"
import React, { useEffect, useState } from 'react';
import { Lock, Unlock, Server } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("INITIATING HANDSHAKE...");
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const logs = [
      "RESOLVING HOST...",
      "BYPASSING PROXY...",
      "DECRYPTING PAYLOAD...",
      "RENDERING MARKDOWN...",
      "ACCESS GRANTED"
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUnlocked(true);
          return 100;
        }
        return prev + 2; // Speed of progress bar
      });
    }, 20);

    // Cycle logs
    const logInterval = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLog(randomLog);
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col items-center justify-center font-mono">
      {/* Central Icon */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-terminal-cyan/20 blur-xl rounded-full"></div>
        <div className="relative z-10 p-6 border border-terminal-cyan/30 rounded-full bg-black">
          {isUnlocked ? (
            <Unlock size={48} className="text-terminal-green animate-pulse" />
          ) : (
            <Lock size={48} className="text-terminal-cyan" />
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-96 h-2 bg-terminal-border/30 rounded-full overflow-hidden mb-4 relative">
        <div
          className="h-full bg-terminal-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Text Log */}
      <div className="text-terminal-cyan text-sm tracking-widest animate-pulse">
        {isUnlocked ? "SYSTEM UNLOCKED" : `> ${log} [${progress}%]`}
      </div>

      {/* Matrix Text Effect Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-[10px] text-green-500">0x4F 0x92 0xA1...</div>
        <div className="absolute bottom-20 right-20 text-[10px] text-green-500">...DECRYPTING SEGMENT 4...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
