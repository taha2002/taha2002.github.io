import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import SkillsChart from '@/components/SkillsChart';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    color: 'var(--header)'
                }}>
            </div>

            <Hero />
            <Experience />
            <TechStack />
            <SkillsChart />
            <Projects />
            <SocialProof />
            <Footer />
            <BackToTop />
        </main>
    );
}
