import Link from 'next/link';
import { getSortedPostsData, getPostData } from '@/lib/blog';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/components/CodeBlock';

export async function generateStaticParams() {
    const posts = await getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        return {
            title: 'Post Not Found | Taha Bouras',
        };
    }

    return {
        title: `${postData.title} | Taha Bouras`,
        description: postData.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Navigation */}
                <Link
                    href="/blog"
                    className="group flex items-center gap-2 text-terminal-body hover:text-terminal-cyan transition-colors mb-8 font-mono text-sm inline-flex"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    RETURN TO ARCHIVE
                </Link>

                {/* Header */}
                <header className="mb-12 border-b border-terminal-border pb-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-terminal-cyan mb-6">
                        <span className="px-3 py-1 rounded border border-terminal-cyan/30 bg-terminal-cyan/10">
                            {postData.category?.toUpperCase() || 'UNCATEGORIZED'}
                        </span>
                        <span className="flex items-center gap-2 text-terminal-body">
                            <Calendar size={14} /> {postData.date}
                        </span>
                        <span className="flex items-center gap-2 text-terminal-body">
                            <Clock size={14} /> {postData.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-terminal-header leading-tight mb-6">
                        {postData.title}
                    </h1>

                    <p className="text-lg md:text-xl text-terminal-body/80 leading-relaxed italic border-l-4 border-terminal-purple pl-4">
                        {postData.excerpt}
                    </p>
                </header>

                {/* Content */}
                <div className="markdown-content">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !String(children).includes('\n');

                                return !isInline && match ? (
                                    <CodeBlock
                                        language={match[1]}
                                        value={String(children).replace(/\n$/, '')}
                                    />
                                ) : (
                                    <code className="px-1.5 py-0.5 rounded bg-terminal-panel text-terminal-cyan font-mono text-sm border border-terminal-border" {...props}>
                                        {children}
                                    </code>
                                );
                            },
                            h1: ({ children }) => (
                                <h1 className="text-3xl font-bold text-terminal-header mt-8 mb-4">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-2xl font-bold text-terminal-header mt-8 mb-4">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl font-bold text-terminal-header mt-6 mb-3">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-terminal-body leading-relaxed mb-4">
                                    {children}
                                </p>
                            ),
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    className="text-terminal-cyan hover:text-cyan-400 underline underline-offset-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {children}
                                </a>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside text-terminal-body mb-4 space-y-2">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside text-terminal-body mb-4 space-y-2">
                                    {children}
                                </ol>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-terminal-purple pl-4 italic text-terminal-body/80 my-6">
                                    {children}
                                </blockquote>
                            ),
                            table: ({ children }) => (
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-terminal-border rounded-lg overflow-hidden">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="bg-terminal-panel">
                                    {children}
                                </thead>
                            ),
                            th: ({ children }) => (
                                <th className="px-4 py-3 text-left text-sm font-bold text-terminal-header border-b border-terminal-border">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="px-4 py-3 text-sm text-terminal-body border-b border-terminal-border">
                                    {children}
                                </td>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-bold text-terminal-header">
                                    {children}
                                </strong>
                            ),
                            em: ({ children }) => (
                                <em className="italic text-terminal-body">
                                    {children}
                                </em>
                            ),
                            hr: () => (
                                <hr className="border-terminal-border my-8" />
                            ),
                        }}
                    >
                        {postData.content || ''}
                    </ReactMarkdown>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-terminal-border flex justify-between items-center text-terminal-body/50 font-mono text-xs">
                    <div>LOG_ID: {postData.id}</div>
                    <div>END_OF_TRANSMISSION</div>
                </div>

            </div>
        </article>
    );
}

