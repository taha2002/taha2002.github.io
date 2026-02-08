"use client"
import React from 'react';
import Link from 'next/link';
import { Terminal, Home, FileQuestion, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-100px)] pt-24 pb-20 bg-terminal-bg flex items-center justify-center px-4">
            <div className="max-w-2xl w-full">
                {/* Terminal Window */}
                <div className="bg-terminal-panel border-2 border-terminal-border rounded-lg overflow-hidden shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-terminal-bg border-b border-terminal-border px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-terminal-body text-sm font-mono ml-4">error.log</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-8 py-4 md:p-12 md:py-6 font-mono text-sm">
                        {/* Error Animation */}
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="text-terminal-cyan animate-pulse" size={32} />
                            <div className="flex items-center gap-2">
                                <AlertCircle className="text-terminal-yellow animate-bounce" size={24} />
                                <span className="text-terminal-yellow font-bold text-2xl">ERROR 404</span>
                            </div>
                        </div>

                        {/* Error Messages */}
                        <div className="space-y-2 mb-8">
                            <p className="text-terminal-body">
                                <span className="text-terminal-purple">[SYSTEM]</span>
                                <span className="text-terminal-cyan"> ROUTE_NOT_FOUND</span>
                            </p>
                            <p className="text-terminal-body">
                                <span className="text-terminal-purple">[ERROR]</span>
                                <span className="text-red-400"> The requested resource does not exist in the database</span>
                            </p>
                            <p className="text-terminal-body">
                                <span className="text-terminal-purple">[INFO]</span>
                                <span className="text-terminal-green"> Possible causes: Broken link, typo, or deleted content</span>
                            </p>
                        </div>

                        {/* 404 ASCII Art */}
                        <div className="bg-terminal-bg rounded p-4 mb-8 overflow-x-auto">
                            <pre className="text-terminal-cyan text-xs leading-tight">
                                {`  ╦ ╦╔═╗╦ ╦  ╦  ╔═╗╔═╗╔╦╗┬
  ╚═╝║ ║║ ║  ║  ║ ║╚═╗ ║ │
  ╚═╝╚═╝╚═╝  ╩═╝╚═╝╚═╝ ╩ o
  
  ┬ ┬┌─┐┬ ┬┬─┐  ┌─┐┌─┐┌─┐┌─┐  ┬┌─┐
  └┬┘│ ││ │├┬┘  ├─┘├─┤│ ┬├┤   │└─┐
   ┴ └─┘└─┘┴└─  ┴  ┴ ┴└─┘└─┘  ┴└─┘
  
  ┌┐┌┌─┐┌┬┐  ┌─┐┌─┐┬ ┬┌┐┌┌┬┐
  ││││ │ │   ├┤ │ ││ ││││ ││
  ┘└┘└─┘ ┴   └  └─┘└─┘┘└┘─┴┘`}
                            </pre>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-terminal-cyan text-white dark:text-black font-bold rounded hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                            >
                                <Home size={20} />
                                RETURN_HOME
                            </Link>
                            <Link
                                href="/blog"
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-terminal-panel border border-terminal-border text-terminal-header font-bold rounded hover:border-terminal-purple transition-all hover:scale-105"
                            >
                                <FileQuestion size={20} />
                                VIEW_BLOG
                            </Link>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 pt-6 border-t border-terminal-border/50">
                            <p className="text-terminal-body/70 text-xs">
                                <span className="text-terminal-purple">$</span> If you believe this is an error, please
                                <a href="mailto:tahadevbou@gmail.com" className="text-terminal-cyan hover:underline ml-1">
                                    contact support
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
