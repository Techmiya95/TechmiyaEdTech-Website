"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  Briefcase,
  CheckSquare,
  Clock,
  BookOpen,
  ArrowRight,
  Layers,
  ChevronDown
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { CourseSidebar } from "@/components/tutorials/CourseSidebar";
import { CodeBlock } from "@/components/tutorials/CodeBlock";
import { QuizQuestion } from "@/components/tutorials/QuizQuestion";
import {
  gitGithubCurriculum,
  getUnitById,
  getNextUnit,
  getPrevUnit,
  CurriculumUnit,
} from "@/data/gitGithubCurriculum";
import { progressService } from "@/services/progressService";
import { UserProgress } from "@/utils/eligibility";

function LessonContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const unitId = searchParams.get("id") || "unit-01";

  const [currentUnit, setCurrentUnit] = useState<CurriculumUnit>(
    () => getUnitById(unitId) || gitGithubCurriculum[0]
  );
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedLabs: [],
    mode: "beginner",
  });
  const [expandedInterviewIdx, setExpandedInterviewIdx] = useState<number | null>(null);

  useEffect(() => {
    const unit = getUnitById(unitId) || gitGithubCurriculum[0];
    setCurrentUnit(unit);
    progressService.setLastActive(unit.id);
    setProgress(progressService.getProgress());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [unitId]);

  const isCompleted = progress.completedLessons.includes(currentUnit.id);

  const handleToggleComplete = () => {
    const updated = progressService.toggleLesson(currentUnit.id);
    setProgress(updated);
  };

  const handleModeToggle = (mode: "beginner" | "advanced") => {
    const updated = progressService.setMode(mode);
    setProgress(updated);
  };

  const prevUnit = getPrevUnit(currentUnit.id);
  const nextUnit = getNextUnit(currentUnit.id);

  return (
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* Course Sidebar */}
      <CourseSidebar
        activeUnitId={currentUnit.id}
        completedLessonIds={progress.completedLessons}
        mode={progress.mode}
        onModeToggle={handleModeToggle}
        onSelectUnit={(id) => {
          router.push(`/tutorials/git-github/lesson?id=${id}`);
        }}
      />

      {/* Main Lesson Article Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full">
        {/* Lesson Breadcrumb & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/tutorials/git-github" className="hover:text-amber-600">
              Curriculum
            </Link>
            <span>/</span>
            <span className="text-amber-700 font-bold">{currentUnit.levelTitle}</span>
            <span>/</span>
            <span className="text-slate-900 font-mono">Unit #{currentUnit.unitNumber}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              {currentUnit.estimatedMinutes} mins
            </span>

            {/* Mark as Completed Button */}
            <button
              onClick={handleToggleComplete}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200"
                  : "bg-amber-500 hover:bg-amber-600 text-slate-950"
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? "text-emerald-700" : "text-slate-950"}`} />
              <span>{isCompleted ? "Completed ✓" : "Mark Complete"}</span>
            </button>
          </div>
        </div>

        {/* Lesson Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-600 uppercase tracking-wider mb-2">
            Unit {currentUnit.unitNumber} of 100
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            {currentUnit.title}
          </h1>

          {/* Topic Tags */}
          <div className="flex flex-wrap gap-1.5">
            {currentUnit.topics.map((t, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-mono font-medium"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Objectives Box */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Learning Objectives for this Unit</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
            {currentUnit.learningObjectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: Simple Explanation & Everyday Analogy */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>🌱 Simple Concept Explanation</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {currentUnit.simpleExplanation}
          </p>

          {/* Analogy Callout Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm">
            <div className="font-bold text-amber-700 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
              <span>💡 Real-World Analogy:</span>
            </div>
            <p className="italic leading-relaxed">{currentUnit.analogy}</p>
          </div>
        </section>

        {/* Section 2: Technical Explanation (Deep Dive) */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>⚡ Technical Explanation (Under the Hood)</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">Architecture & Mechanics</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {currentUnit.technicalExplanation}
          </p>
        </section>

        {/* Section 3: Syntax & Commands */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            🛠️ Syntax & Commands Reference
          </h2>
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 text-amber-300 font-mono text-xs sm:text-sm space-y-1.5 overflow-x-auto shadow-sm">
            {currentUnit.syntaxAndCommands.map((cmd, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-slate-500 select-none">$</span>
                <span className="text-amber-200 select-all">{cmd}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Step-by-Step Command Walkthrough */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            📋 Step-by-Step Command Walkthrough
          </h2>
          <div className="space-y-4">
            {currentUnit.walkthrough.map((step, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="text-xs font-bold text-amber-700 mb-1">
                  Step {idx + 1}:
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  {step.explanation}
                </p>
                <CodeBlock
                  code={step.command}
                  output={step.expectedOutput}
                  title={`Run Command #${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Practical Exercise */}
        <section className="mb-10 p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
          <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-emerald-600" />
            <span>Hands-on Practical Exercise</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {currentUnit.practicalExercise}
          </p>
        </section>

        {/* Section 6: Common Errors & Fixes */}
        <section className="mb-10 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>Common Errors & Troubleshooting</span>
          </h2>
          <div className="space-y-3">
            {currentUnit.commonErrorsAndFixes.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-rose-950 font-mono">
                  🚨 {item.error}
                </div>
                <div className="text-xs sm:text-sm text-slate-700 pl-4 border-l-2 border-rose-400">
                  <span className="font-bold text-slate-900">How to Fix:</span> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Industry Use Case */}
        <section className="mb-10 p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Real-World Industry Scenario</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {currentUnit.industryUseCase}
          </p>
        </section>

        {/* Section 8: Technical Interview Questions */}
        <section className="mb-10 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <span>Technical Interview Questions & Model Answers</span>
          </h2>
          <div className="space-y-2.5">
            {currentUnit.interviewQuestions.map((qna, idx) => {
              const isOpen = expandedInterviewIdx === idx;
              return (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                  <button
                    onClick={() => setExpandedInterviewIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>Q: {qna.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 bg-slate-50 border-t border-slate-100 leading-relaxed">
                      <div className="font-semibold text-emerald-800 mb-1">Answer:</div>
                      {qna.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 9: Chapter Checkpoint Quiz */}
        <section className="mb-10">
          <QuizQuestion quiz={currentUnit.quiz} />
        </section>

        {/* Section 10: Official Documentation Link & Completion Checklist */}
        <section className="mb-12 p-6 rounded-2xl border border-slate-200 bg-white space-y-6">
          {/* Official Link */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Official Authority Reference:
            </h4>
            <a
              href={currentUnit.officialReference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 underline group"
            >
              <span>{currentUnit.officialReference.title}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <hr className="border-slate-100" />

          {/* Unit Completion Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Unit Mastery Checklist:
            </h4>
            <div className="space-y-2">
              {currentUnit.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prev / Next Navigation Footer */}
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {prevUnit ? (
            <Link
              href={`/tutorials/git-github/lesson?id=${prevUnit.id}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Unit #{prevUnit.unitNumber}: {prevUnit.title.slice(0, 24)}...</span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextUnit ? (
            <Link
              href={`/tutorials/git-github/lesson?id=${nextUnit.id}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Next: Unit #{nextUnit.unitNumber}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/tutorials/git-github/labs"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Continue to Practical Labs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TutorialHeader />
      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-500 font-mono text-sm">
            Loading Techmiya Git & GitHub lesson...
          </div>
        }
      >
        <LessonContent />
      </Suspense>
    </div>
  );
}
