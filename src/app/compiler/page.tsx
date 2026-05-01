"use client";
import Link from "next/link";
import { ArrowLeft, Code2, Terminal } from "lucide-react";

const Compiler = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                                <Terminal className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-green-400" />
                                    Online Compiler
                                </h1>
                                <p className="text-sm text-blue-200/80">
                                    Write, compile & run code in 70+ languages — powered by Techmiya EdTech
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Compiler Iframe */}
            <div className="w-full" style={{ height: "calc(100vh - 140px)" }}>
                <iframe
                    src="https://onecompiler.com/"
                    title="Techmiya Online Compiler"
                    className="w-full h-full border-0"
                    allow="clipboard-read; clipboard-write"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
                ></iframe>
            </div>
        </div>
    );
};

export default Compiler;
