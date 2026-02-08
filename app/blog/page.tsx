import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { Terminal, AlertTriangle, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog Archive | Taha Bouras',
    description: 'Technical documentation, reverse engineering notes, and post-mortem analysis of deployed systems.',
};

export default async function BlogArchive() {
    const allPostsData = await getSortedPostsData();
    const hasPosts = allPostsData.length > 0;

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-terminal-border pb-8">
                <div>
                    <Link
                        href="/"
                        className="text-xs font-mono text-terminal-body hover:text-terminal-cyan mb-4 block"
                    >
                        &larr; RETURN_ROOT
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-terminal-header mb-4">
                        System Logs <span className="text-terminal-cyan">/Archive</span>
                    </h1>
                    <p className="text-terminal-body max-w-xl">
                        Technical documentation, reverse engineering notes, and post-mortem analysis of deployed systems.
                    </p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-terminal-cyan font-mono text-xl font-bold">
                        {allPostsData.length} <span className="text-terminal-body text-sm">ENTRIES FOUND</span>
                    </div>
                </div>
            </div>

            {!hasPosts ? (
                <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-terminal-border rounded-xl bg-terminal-bg/50">
                    <AlertTriangle size={64} className="text-terminal-yellow mb-6" />
                    <h2 className="text-2xl font-bold text-terminal-header mb-2">ARCHIVE EMPTY</h2>
                    <p className="text-terminal-body max-w-md">
                        The knowledge base is currently offline or under compilation. Please check back later for system updates.
                    </p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPostsData.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="group bg-terminal-panel border border-terminal-border rounded-lg p-6 cursor-pointer hover:border-terminal-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1 block"
                        >
                            <div className="flex items-center justify-between mb-4 text-xs font-mono text-terminal-body/70">
                                <span className="flex items-center gap-1 text-terminal-cyan">
                                    <Terminal size={12} /> {post.id}
                                </span>
                                <span>{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-terminal-header mb-3 group-hover:text-terminal-cyan transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-terminal-bg border border-terminal-border text-terminal-purple">
                                    {post.category}
                                </span>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-terminal-bg border border-terminal-border text-terminal-body">
                                    {post.readTime}
                                </span>
                            </div>

                            <p className="text-terminal-body text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center text-terminal-cyan text-sm font-mono font-bold mt-auto group-hover:gap-2 transition-all">
                                DECRYPT_FILE <ChevronRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
