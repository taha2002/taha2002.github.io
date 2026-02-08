"use client"
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Simple regex-based splitter. In a production app, use 'react-markdown'
  const lines = content.split('\n');
  const renderedContent = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle Code Blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        renderedContent.push(
          <div key={`code-${i}`} className="my-6 bg-[#0f0f13] border border-terminal-border rounded-lg p-4 overflow-x-auto relative group">
            <div className="absolute top-2 right-2 text-[10px] text-terminal-body/50 font-mono">SCRIPT_EXEC</div>
            <pre className="text-terminal-green font-mono text-sm leading-relaxed">
              {codeBuffer.join('\n')}
            </pre>
          </div>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        // Start of code block
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Handle Headers
    if (line.startsWith('# ')) {
      renderedContent.push(
        <h2 key={i} className="text-3xl font-bold text-terminal-header mt-12 mb-6 border-b border-terminal-border pb-2">
          {line.replace('# ', '')}
        </h2>
      );
    } else if (line.startsWith('## ')) {
      renderedContent.push(
        <h3 key={i} className="text-xl font-bold text-terminal-cyan mt-8 mb-4 flex items-center gap-2">
          <span className="text-terminal-purple">##</span> {line.replace('## ', '')}
        </h3>
      );
    } else if (line.startsWith('### ')) {
      renderedContent.push(
        <h4 key={i} className="text-lg font-bold text-terminal-header mt-6 mb-3">
          {line.replace('### ', '')}
        </h4>
      );
    }
    // Handle List Items
    else if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      renderedContent.push(
        <li key={i} className="ml-6 text-terminal-body mb-2 list-disc marker:text-terminal-cyan">
          {processInlineStyles(line.replace(/^[*-] /, ''))}
        </li>
      );
    } else if (line.trim().match(/^\d+\. /)) {
      renderedContent.push(
        <li key={i} className="ml-6 text-terminal-body mb-2 list-decimal marker:text-terminal-purple">
          {processInlineStyles(line.replace(/^\d+\. /, ''))}
        </li>
      );
    }
    // Handle Standard Paragraphs
    else if (line.trim() !== '') {
      renderedContent.push(
        <p key={i} className="text-terminal-body mb-4 leading-7 md:text-lg">
          {processInlineStyles(line)}
        </p>
      );
    }
  }

  return <div>{renderedContent}</div>;
};

// Helper to handle bold (**text**) and code (`text`) inline
const processInlineStyles = (text: string) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="bg-terminal-panel border border-terminal-border rounded px-1.5 py-0.5 text-terminal-cyan font-mono text-sm">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-terminal-header font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default MarkdownRenderer;
