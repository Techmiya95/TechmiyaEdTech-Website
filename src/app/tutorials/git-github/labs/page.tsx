"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Terminal,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckSquare,
  ArrowRight
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { CodeBlock } from "@/components/tutorials/CodeBlock";
import { practicalLabs, PracticalLab } from "@/data/practicalLabs";
import { progressService } from "@/services/progressService";
import { UserProgress } from "@/utils/eligibility";

export default function PracticalLabsPage() {
  const [selectedLabId, setSelectedLabId] = useState<string>("lab-01");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedLabs: [],
    mode: "beginner",
  });

  useEffect(() => {
    setProgress(progressService.getProgress());
  }, []);

  const activeLab = practicalLabs.find((l) => l.id === selectedLabId) || practicalLabs[0];
  const isLabCompleted = progress.completedLabs.includes(activeLab.id);

  const handleToggleLab = (labId: string) => {
    const updated = progressService.toggleLab(labId);
    setProgress(updated);
  };

  const categories = ["All", "Fundamentals", "Branching & Merging", "GitHub & Remote", "Advanced & Recovery", "CI/CD Automation"];

  const filteredLabs = practicalLabs.filter((lab) => {
    if (selectedCategory === "All") return true;
    return lab.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <TutorialHeader />

      {/* Hero Banner */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs mb-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-700" />
                <span>Hands-On Engineering Practice</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Interactive Practical Labs
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complete these 15 industry-grade simulated lab scenarios. Every lab includes starting state, commands, expected outputs, verification steps, and troubleshooting.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shrink-0 text-right">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                Labs Completed
              </div>
              <div className="text-2xl font-black text-emerald-600 font-mono">
                {progress.completedLabs.length} / {practicalLabs.length}
              </div>
              <div className="text-[11px] text-slate-400">All 15 required for certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">
        {/* Left Column: Lab Directory List */}
        <div className="w-full lg:w-80 shrink-0 space-y-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white font-bold"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Labs List */}
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {filteredLabs.map((lab) => {
              const isDone = progress.completedLabs.includes(lab.id);
              const isActive = lab.id === activeLab.id;

              return (
                <button
                  key={lab.id}
                  onClick={() => setSelectedLabId(lab.id)}
                  className={`w-full flex items-start gap-3 p-3.5 text-left transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <span className="shrink-0 mt-0.5">
                    {isDone ? (
                      <CheckCircle2
                        className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-emerald-500"}`}
                      />
                    ) : (
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center text-[9px] font-mono ${
                          isActive
                            ? "border-slate-950 text-slate-950"
                            : "border-slate-300 text-slate-400"
                        }`}
                      >
                        {lab.labNumber}
                      </div>
                    )}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase font-mono opacity-75 mb-0.5">
                      Lab #{lab.labNumber} • {lab.category}
                    </div>
                    <div className="text-xs font-bold leading-snug line-clamp-2">
                      {lab.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Lab Detailed Viewer */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          {/* Active Lab Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase mb-1">
                <span>Lab #{activeLab.labNumber}</span>
                <span>•</span>
                <span>{activeLab.category}</span>
                <span>•</span>
                <span>{activeLab.difficulty}</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-950">
                {activeLab.title}
              </h2>
            </div>

            <button
              onClick={() => handleToggleLab(activeLab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs shrink-0 ${
                isLabCompleted
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200"
                  : "bg-amber-500 hover:bg-amber-600 text-slate-950"
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isLabCompleted ? "text-emerald-700" : "text-slate-950"}`} />
              <span>{isLabCompleted ? "Lab Completed ✓" : "Mark Lab as Complete"}</span>
            </button>
          </div>

          {/* Scenario */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Scenario & Objective:
            </h3>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              {activeLab.scenario}
            </p>
          </div>

          {/* Prerequisites & Starting State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Prerequisites:
              </h4>
              <ul className="space-y-1 text-xs text-slate-700">
                {activeLab.prerequisites.map((pre, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{pre}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Starting State:
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-mono">
                {activeLab.startingState}
              </p>
            </div>
          </div>

          {/* Lab Commands Walkthrough */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-500" />
              <span>Interactive Step-by-Step Command Walkthrough</span>
            </h3>

            <div className="space-y-3">
              {activeLab.commands.map((cmd, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-2">
                  <div className="text-xs font-bold text-amber-700">
                    Step {i + 1}: {cmd.explanation}
                  </div>
                  <CodeBlock
                    code={cmd.command}
                    output={cmd.expectedOutput}
                    title={`Terminal Step #${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Expected Result & Verification Steps */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Expected Result & Verification:</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-semibold">
              {activeLab.expectedResult}
            </p>

            <div className="pt-2 border-t border-emerald-200/80 space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                Verification Checklist:
              </div>
              <ul className="space-y-1 text-xs text-emerald-950">
                {activeLab.verificationSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Troubleshooting Tips */}
          {activeLab.troubleshooting.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>Troubleshooting Common Lab Gotchas</span>
              </h3>
              <div className="space-y-2">
                {activeLab.troubleshooting.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/50 text-xs">
                    <div className="font-bold text-rose-950 mb-1">Issue: {item.problem}</div>
                    <div className="text-slate-700 pl-3 border-l-2 border-rose-400">
                      <span className="font-semibold text-slate-900">Solution:</span> {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completion Criteria Strip */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              <span className="font-bold text-slate-900">Completion Criteria: </span>
              {activeLab.completionCriteria}
            </div>

            <button
              onClick={() => handleToggleLab(activeLab.id)}
              className="text-amber-700 hover:text-amber-800 font-bold underline shrink-0"
            >
              {isLabCompleted ? "Undo completion" : "Mark as done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
