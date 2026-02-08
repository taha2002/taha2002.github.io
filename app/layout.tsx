import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
    title: 'Taha Bouras | Full Stack Engineer & Scraping Expert',
    description: 'Senior Full Stack Engineer specializing in Backend Systems, Advanced Data Scraping, Industrial Maintenance, and High-Performance Web Architecture. Based in Algiers.',
    keywords: ['Taha Bouras', 'Full Stack Engineer', 'Web Scraping', 'Python', 'React', 'Next.js', 'Industrial Maintenance', 'API Development', 'Backend Engineer', 'Algiers'],
    authors: [{ name: 'Taha Bouras' }],
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: '/apple-touch-icon.png',
        other: [
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
    },
    openGraph: {
        type: 'website',
        url: 'https://taha.is-a.dev/',
        title: 'Taha Bouras | Full Stack Engineer & Scraping Expert',
        description: 'Explore the portfolio of a Senior Engineer bridging the gap between Industrial IoT, Reverse Engineering, and Modern Web Applications.',
        images: ['/black-filled-logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Taha Bouras | Full Stack Engineer & Scraping Expert',
        description: 'Explore the portfolio of a Senior Engineer bridging the gap between Industrial IoT, Reverse Engineering, and Modern Web Applications.',
        images: ['/black-filled-logo.png'],
    }
};

import Navbar from '@/components/Navbar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-terminal-bg text-terminal-body transition-colors duration-300 selection:bg-terminal-cyan selection:text-white`}>
                {/* Theme script to prevent FOUC */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
                    }}
                />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
