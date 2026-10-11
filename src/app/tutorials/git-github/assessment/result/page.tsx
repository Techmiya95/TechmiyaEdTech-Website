"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Award,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  FileSpreadsheet
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { assessmentService } from "@/services/assessmentService";
import { progressService } from "@/services/progressService";
import { clipboardService } from "@/services/clipboardService";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { gitGithubCurriculum } from "@/data/gitGithubCurriculum";
import { practicalLabs } from "@/data/practicalLabs";
import { getCertificateEligibility, StoredAssessmentAttempt } from "@/utils/eligibility";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const attemptId = searchParams.get("id");

  const [attempt, setAttempt] = useState<StoredAssessmentAttempt | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  const progress = progressService.getProgress();
  const allUnitIds = gitGithubCurriculum.map((u) => u.id);
  const allLabIds = practicalLabs.map((l) => l.id);

  useEffect(() => {
    const attempts = assessmentService.getAttempts();
    if (attemptId) {
      const found = attempts.find((a) => a.attemptId === attemptId);
      if (found) {
        setAttempt(found);
        return;
      }
    }
    // Default to latest attempt
    const latest = assessmentService.getLatestAttempt();
    setAttempt(latest);
  }, [attemptId]);

  if (!attempt) {
    return (
      <div className="max-w-md mx-auto my-16 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-2">No Assessment Attempt Found</h2>
        <p className="text-xs text-slate-600 mb-6">
          You haven&apos;t completed the final assessment yet.
        </p>
        <Link
          href="/tutorials/git-github/assessment"
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs inline-block"
        >
          Take the 50-Mark Assessment
        </Link>
      </div>
    );
  }

  const eligibility = getCertificateEligibility(
    progress,
    attempt,
    allUnitIds,
    allLabIds
  );

  const handleCopyForGoogleSheets = async () => {
    const row = clipboardService.formatRow({
      attempt,
      progress,
      totalRequiredLessons: allUnitIds.length,
      totalRequiredLabs: allLabIds.length,
      isCertificateEligible: eligibility.isEligible,
    });

    const success = await clipboardService.copyToClipboard(row);
    if (success) {
      setCopied(true);
      setCopyFeedback("Tab-separated row copied! Paste directly into Google Sheets (Ctrl+V / Cmd+V).");
      setTimeout(() => {
        setCopied(false);
        setCopyFeedback("");
      }, 5000);
    } else {
      setCopyFeedback("Unable to access clipboard automatically. Please copy manually.");
    }
  };

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 w-full space-y-8">
      {/* Score Summary Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center relative overflow-hidden">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-sm bg-amber-500 text-slate-950">
            {attempt.isPassing ? "🏆" : "📝"}
          </div>

          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Assessment Attempt #{attempt.attemptNumber}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-950">
            {attempt.isPassing ? "Assessment Passed!" : "Retake Required"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600">
            Candidate: <strong className="text-slate-900">{attempt.studentName}</strong> ({attempt.studentEmail})
          </p>

          {/* Large Score Metric */}
          <div className="py-4">
            <div className="text-4xl sm:text-6xl font-black text-slate-900 font-mono tracking-tight">
              {attempt.score} <span className="text-2xl sm:text-4xl text-slate-400">/ 50</span>
            </div>
            <div className="text-sm font-bold text-slate-500 mt-1">
              Percentage: <span className="text-slate-900">{attempt.percentage}%</span>
            </div>
          </div>

          {/* Grade Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl border font-bold text-sm bg-slate-50 border-slate-200">
            <span className="text-xs text-slate-500">Grade Earned:</span>
            <span className="text-xl font-black font-mono text-amber-600">
              {attempt.grade}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-700">{attempt.status}</span>
          </div>
        </div>

        {/* Retake & Next Steps Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-100 mt-8">
          <Link
            href="/tutorials/git-github/assessment"
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </Link>

          {eligibility.isEligible ? (
            <Link
              href="/tutorials/git-github/certificate"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>Claim & Download Certificate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              href="/tutorials/git-github/certificate"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2"
            >
              <span>Check Certificate Status</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* SECTION 10 REQUIREMENT: Google Sheets Data Collection (No Backend) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Google Sheets Manual Export (No Backend)
              </h2>
              <p className="text-xs text-slate-400">
                Copy a clean, 18-column tab-separated row to paste directly into your admin Google Sheets spreadsheet.
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyForGoogleSheets}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-slate-950" />
                <span>Copied for Sheets!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Results for Google Sheets</span>
              </>
            )}
          </button>
        </div>

        {copyFeedback && (
          <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-300 font-mono">
            {copyFeedback}
          </div>
        )}

        <div className="text-[11px] text-slate-400 leading-relaxed">
          <span className="font-bold text-slate-200">Export Columns Included: </span>
          Record ID • Course Name • Student Name • Student Email • Attempt # • Date • Total Marks (50) • Marks Obtained • Percentage • Grade • Pass/Fail • Completed Lessons • Required Lessons • Completed Labs • Required Labs • Certificate Eligible • Topic Performance • Certificate ID.
        </div>
      </div>

      {/* Topic-Wise Performance Breakdown */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
          <span>📊 Topic-Wise Performance Breakdown</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(attempt.topicBreakdown || {}).map(([topic, stats]) => {
            const isFull = stats.correct === stats.total;
            return (
              <div
                key={topic}
                className={`p-3.5 rounded-xl border flex items-center justify-between text-xs ${
                  isFull
                    ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                    : "bg-slate-50 border-slate-200 text-slate-800"
                }`}
              >
                <span className="font-semibold">{topic}</span>
                <span className="font-mono font-bold">
                  {stats.correct} / {stats.total} Marks
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Analysis & Recommended Lessons */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-950">
          📝 Question-by-Question Analysis & Review
        </h2>

        <div className="space-y-4">
          {assessmentQuestions.map((q, idx) => {
            const userChoice = attempt.answers[q.id];
            const isCorrect = userChoice === q.correctOptionIndex;

            return (
              <div
                key={q.id}
                className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm space-y-3 ${
                  isCorrect
                    ? "bg-white border-slate-200"
                    : "bg-rose-50/40 border-rose-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                    <span className="font-bold text-slate-900">
                      Q{idx + 1}: {q.question}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 shrink-0">
                    {isCorrect ? `+${q.marks}m` : `0/${q.marks}m`}
                  </span>
                </div>

                <div className="pl-7 space-y-1.5 text-xs text-slate-700">
                  <div>
                    <span className="font-bold">Your Answer: </span>
                    <span className={isCorrect ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}>
                      {userChoice !== undefined ? q.options[userChoice] : "Unanswered"}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div>
                      <span className="font-bold text-emerald-800">Correct Answer: </span>
                      <span className="text-emerald-900 font-medium">
                        {q.options[q.correctOptionIndex]}
                      </span>
                    </div>
                  )}
                  <p className="pt-1.5 text-slate-600 leading-relaxed italic border-t border-slate-100">
                    💡 {q.explanation}
                  </p>

                  {!isCorrect && q.recommendedLessonId && (
                    <div className="pt-2">
                      <Link
                        href={`/tutorials/git-github/lesson?id=${q.recommendedLessonId}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Revisit Recommended Lesson ({q.recommendedLessonId.toUpperCase()})</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default function AssessmentResultPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <TutorialHeader />
      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-500 font-mono text-sm">
            Loading assessment results...
          </div>
        }
      >
        <ResultContent />
      </Suspense>
    </div>
  );
}
