"use client"
import React, { useEffect, useState } from 'react';
import { TECH_STACK } from '../constants';
import { Terminal, Cpu, Code, Layers, Shield, Wrench, Database } from 'lucide-react';

const TechStack: React.FC = () => {
  const [floatingIcons, setFloatingIcons] = useState<any[]>([]);

  // Simple Icons slugs
  const iconMap: Record<string, string> = {
    "Python": "python",
    "PHP": "php",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "SQL": "postgresql",
    "Bash": "gnubash",
    "Next.js": "nextdotjs",
    "React": "react",
    "FastAPI": "fastapi",
    "Tailwind CSS": "tailwindcss",
    "WordPress Core": "wordpress",
    "WooCommerce": "woo",
    "Supabase": "supabase",
    "Remix": "remix",
    "Expo": "expo",
    "Burp Suite": "burpsuite",
    "Selenium": "selenium",
    "BeautifulSoup": "python",
    "Cloudflare Bypass": "cloudflare",
    "Android Reverse Eng.": "android",
    "Git": "git",
    "Docker": "docker",
    "Linux": "linux",
    "Postman": "postman",
    "Nginx": "nginx",
    "HLS Streaming": "youtube",
    "LangChain": "langchain",
    "n8n": "n8n",
    "OpenTelemetry": "opentelemetry",
    "Antibot Detection": "robotframework",
    "ZenRows": "googlechrome",
    "Origin IP Finder": "torproject"
  };

  // Helper component for icons
  const TechIcon = ({ name, className }: { name: string, className?: string }) => {
    const slug = iconMap[name];
    if (slug) {
      return (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          className={className}
          loading="lazy"
        />
      );
    }
    return <Terminal className={className} />;
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code size={20} />;
    if (category.includes("Frameworks")) return <Layers size={20} />;
    if (category.includes("Scraping")) return <Shield size={20} />;
    if (category.includes("DevOps")) return <Wrench size={20} />;
    return <Cpu size={20} />;
  };

  useEffect(() => {
    // Generate floating background icons
    const iconsToFloat = [
      "Python", "React", "Docker", "Linux", "TypeScript", "Next.js",
      "WordPress Core", "PHP", "Git", "Supabase", "Tailwind CSS",
      "Postman", "SQL", "Bash", "FastAPI", "Selenium", "Burp Suite",
    ];

    const items = iconsToFloat.map((name, i) => ({
      name,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 40 + Math.random() * 80,
      duration: 15 + Math.random() * 20,
      delay: -(Math.random() * 20),
      opacity: 0.1 + Math.random() * 0.2
    }));

    setFloatingIcons(items);
  }, []);

  // Prepare flattened list for the bottom grid
  const allTechItems = Array.from(new Set(TECH_STACK.flatMap(g => g.items)));

  return (
    <section className="relative py-24 overflow-hidden min-h-[800px] border-b border-terminal-border bg-terminal-bg transition-colors duration-300">

      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className="absolute will-change-transform"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              opacity: item.opacity,
              animation: `float ${item.duration}s infinite ease-in-out`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <TechIcon
              name={item.name}
              className="w-full h-full object-contain filter grayscale-0 grayscale invert opacity-50 opacity-40"
            // className="w-full h-full object-contain filter grayscale-0 dark:grayscale dark:invert opacity-50 dark:opacity-40"
            // className="w-full h-full object-contain tech-icon opacity-50 dark:opacity-40"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-header mb-4 tracking-tight">
            <span className="text-terminal-cyan">MASTER EXPERIENCE</span> DATABASE
          </h2>
          <div className="h-1 w-20 bg-terminal-cyan rounded"></div>
          <p className="mt-4 text-terminal-body max-w-2xl text-lg">
            A categorized archive of technical proficiencies, frameworks, and command-line weaponry.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-24">
          {TECH_STACK.map((group, idx) => (
            <div
              key={idx}
              className="group relative bg-terminal-panel/80 backdrop-blur-md border border-terminal-border rounded-xl p-6 md:p-8 hover:border-terminal-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-terminal-cyan/10 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-terminal-border/50 pb-4">
                <div className="p-3 bg-terminal-bg rounded-lg border border-terminal-border text-terminal-cyan group-hover:text-terminal-purple transition-colors shadow-sm">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-terminal-header tracking-wide">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="
                      inline-flex items-center px-3 py-1.5 
                      bg-terminal-bg/50 border border-terminal-border rounded-md 
                      text-sm font-mono text-terminal-body 
                      group-hover:border-terminal-cyan/30 group-hover:bg-terminal-bg/80 group-hover:text-terminal-header 
                      transition-all cursor-crosshair select-none
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-terminal-cyan rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL WIDTH STATIC GRID (Replaces Marquee) */}
      <div className="relative z-10 w-full bg-terminal-panel/30 border-t border-terminal-border backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terminal-bg border border-terminal-border text-terminal-cyan font-mono text-sm mb-10 shadow-sm">
            <Database size={16} />
            <span>COMPLETE_ARSENAL_INDEX</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {allTechItems.map((tech, i) => (
              <div key={i} className="group flex flex-col items-center gap-3 relative">
                {/* 
                           Icon Container: 
                           In light mode: White background, colored icons.
                           In dark mode: Dark background, monochrome white icons for cyber aesthetic.
                        */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-terminal-panel rounded-2xl border border-gray-200 dark:border-terminal-border shadow-sm group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:border-terminal-cyan/50 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 z-10">
                  <TechIcon name={tech} className="w-1/2 h-1/2 object-contain tech-icon" />
                </div>

                {/* Tooltip Label */}
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold font-mono text-terminal-header bg-terminal-bg border border-terminal-border px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-20">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(5deg); }
          66% { transform: translateY(20px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
