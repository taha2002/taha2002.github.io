'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === '/';

    const [activeSection, setActiveSection] = useState<string>('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll Progress & Active Section (Only for Home)
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = totalScroll / windowHeight;
            setScrollProgress(scroll || 0);

            if (isHome) {
                const sections = ['experience', 'projects', 'contact'];
                let current = '';
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2) {
                            current = section;
                        }
                    }
                }
                setActiveSection(current);
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
    };

    const handleNavClick = (sectionId: string) => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';

        if (sectionId === 'home') {
            if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                router.push('/');
            }
            return;
        }

        if (sectionId === 'blog') {
            router.push('/blog');
            return;
        }

        // For sections
        if (isHome) {
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navigate to home then scroll
            router.push(`/#${sectionId}`);
        }
    };

    const navLinkClass = (section: string) => {
        const isActive = activeSection === section && isHome;
        // Blog active state
        const isBlogActive = section === 'blog' && pathname.startsWith('/blog');

        return `
      transition-all duration-300 hover:text-terminal-cyan cursor-pointer
      ${(isActive || isBlogActive)
                ? 'text-terminal-cyan font-bold scale-105 shadow-[0_1px_0_0_currentColor]'
                : 'text-terminal-body'
            }
    `;
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-terminal-bg/80 backdrop-blur-md border-b border-terminal-border transition-colors duration-300">
                <div
                    className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-terminal-cyan to-terminal-purple transition-all duration-100 ease-out z-50"
                    style={{ width: `${scrollProgress * 100}%` }}
                ></div>

                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div
                        className="flex items-center gap-3 cursor-pointer group z-50"
                        onClick={() => handleNavClick('home')}
                    >
                        <div className="relative">
                            <img
                                src="/black-filled-logo.png"
                                alt="TB Logo"
                                className="h-9 w-9 rounded border border-terminal-border object-cover group-hover:border-terminal-cyan transition-colors dark:hidden"
                            />
                            <img
                                src="/white-filled-logo.png"
                                alt="TB Logo"
                                className="h-9 w-9 rounded border border-terminal-border object-cover group-hover:border-terminal-cyan transition-colors hidden dark:block"
                            />
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-terminal-bg rounded-full"></span>
                        </div>
                        <div className="font-mono font-bold text-xl tracking-tighter text-terminal-header group-hover:text-terminal-cyan transition-colors">
                            <span className="text-terminal-cyan">&lt;</span>Taha_Bouras<span className="text-terminal-cyan">/&gt;</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-8 text-sm font-mono">
                            <button onClick={() => handleNavClick('experience')} className={navLinkClass('experience')}>
                                <span className="text-terminal-cyan mr-1">01.</span> Roles
                            </button>
                            <button onClick={() => handleNavClick('projects')} className={navLinkClass('projects')}>
                                <span className="text-terminal-green mr-1">02.</span> Work
                            </button>
                            <button onClick={() => handleNavClick('blog')} className={navLinkClass('blog')}>
                                <span className="text-terminal-cyan mr-1">03.</span> Blog
                            </button>
                            <button onClick={() => handleNavClick('contact')} className={navLinkClass('contact')}>
                                <span className="text-terminal-purple mr-1">04.</span> Contact
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block h-6 w-px bg-terminal-border"></div>
                            <ThemeToggle />
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 text-terminal-header hover:text-terminal-cyan transition-colors z-50"
                                aria-label="Toggle Menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
        fixed inset-0 bg-terminal-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden
        ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
                <div className="flex flex-col gap-8 text-2xl font-mono font-bold text-center">
                    <button onClick={() => handleNavClick('experience')} className="text-terminal-header hover:text-terminal-cyan transition-colors">
                        <span className="text-terminal-cyan block text-sm mb-1">01.</span> ROLES
                    </button>
                    <button onClick={() => handleNavClick('projects')} className="text-terminal-header hover:text-terminal-green transition-colors">
                        <span className="text-terminal-green block text-sm mb-1">02.</span> WORK
                    </button>
                    <button onClick={() => handleNavClick('blog')} className="text-terminal-header hover:text-terminal-cyan transition-colors">
                        <span className="text-terminal-cyan block text-sm mb-1">03.</span> BLOG
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="text-terminal-header hover:text-terminal-purple transition-colors">
                        <span className="text-terminal-purple block text-sm mb-1">04.</span> CONTACT
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
