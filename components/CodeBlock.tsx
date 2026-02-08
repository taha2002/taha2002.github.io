"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
    language: string;
    value: string;
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6">
            <div className="absolute right-3 top-3 z-10">
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 bg-terminal-panel border border-terminal-border rounded text-xs font-mono text-terminal-cyan hover:bg-terminal-bg transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <>
                            <Check size={14} />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy size={14} />
                            Copy
                        </>
                    )}
                </button>
            </div>
            <div className="absolute left-3 top-3 text-xs font-mono text-terminal-body/50 z-10">
                {language}
            </div>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    padding: '3rem 1.5rem 1.5rem 1.5rem',
                    backgroundColor: 'var(--panel)',
                    border: '1px solid var(--border)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                }}
                codeTagProps={{
                    style: {
                        fontFamily: 'JetBrains Mono, monospace',
                    }
                }}
            >
                {value}
            </SyntaxHighlighter>
        </div>
    );
}
