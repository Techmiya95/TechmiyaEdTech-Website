"use client";
import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  output?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "bash",
  title,
  output,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Copy failed:", err);
    }
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-md">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/60 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-200">
            {title || language.toUpperCase()}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/70 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors font-sans text-xs font-medium"
          title="Copy code to clipboard"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 text-xs sm:text-sm font-mono text-amber-200/90 overflow-x-auto leading-relaxed select-all">
        <code>{code}</code>
      </pre>

      {/* Expected Output Block (if provided) */}
      {output && (
        <div className="border-t border-slate-800 bg-slate-950/80 px-4 py-3">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Expected Output / State:
          </div>
          <pre className="text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};
