"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Download,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  BookOpen,
  Terminal
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { CertificatePreview } from "@/components/tutorials/CertificatePreview";
import { gitGithubCurriculum } from "@/data/gitGithubCurriculum";
import { practicalLabs } from "@/data/practicalLabs";
import { progressService } from "@/services/progressService";
import { assessmentService } from "@/services/assessmentService";
import { getCertificateEligibility, UserProgress } from "@/utils/eligibility";
import { CertificateData } from "@/services/certificateService";

export default function CertificatePage() {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedLabs: [],
    mode: "beginner",
  });

  useEffect(() => {
    setProgress(progressService.getProgress());
  }, []);

  const latestAttempt = assessmentService.getLatestAttempt();
  const allUnitIds = gitGithubCurriculum.map((u) => u.id);
  const allLabIds = practicalLabs.map((l) => l.id);

  const eligibility = getCertificateEligibility(
    progress,
    latestAttempt,
    allUnitIds,
    allLabIds
  );

  let certificateData: CertificateData | null = null;
  if (eligibility.isEligible && latestAttempt && latestAttempt.certificateId) {
    certificateData = {
      studentName: latestAttempt.studentName || "Certified Student",
      studentEmail: latestAttempt.studentEmail,
      courseTitle: "Git & GitHub: Beginner to Advanced",
      score: latestAttempt.score,
      maxScore: latestAttempt.maxScore,
      percentage: latestAttempt.percentage,
      grade: latestAttempt.grade,
      issueDate: new Date(latestAttempt.timestamp).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      certificateId: latestAttempt.certificateId,
    };
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <TutorialHeader />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Credential Verification</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
            Course Completion Certificate
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Validated by Techmiya Tutorials based on 100 curriculum units, 15 practical labs, and 50-mark formal assessment results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full space-y-10">
        {/* Certificate Display or Lock Warning */}
        <CertificatePreview
          isEligible={eligibility.isEligible}
          missingRequirements={eligibility.missingRequirements}
          certificateData={certificateData}
        />

        {/* Progress Requirements Breakdown Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <span>Eligibility Requirements Breakdown:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Requirement 1: Lessons */}
            <div className={`p-4 rounded-2xl border ${
              eligibility.allLessonsCompleted
                ? "bg-emerald-50/70 border-emerald-200"
                : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Curriculum Units
                </span>
                {eligibility.allLessonsCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <span className="text-xs font-mono text-amber-600 font-bold">Incomplete</span>
                )}
              </div>
              <div className="text-lg font-black text-slate-900 font-mono mb-1">
                {eligibility.lessonsCompletedCount} / {eligibility.requiredLessonsCount}
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                All 100 units must be marked complete.
              </p>
              {!eligibility.allLessonsCompleted && (
                <Link
                  href="/tutorials/git-github/lesson"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 underline inline-flex items-center gap-1"
                >
                  <span>Continue Units</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Requirement 2: Practical Labs */}
            <div className={`p-4 rounded-2xl border ${
              eligibility.allLabsCompleted
                ? "bg-emerald-50/70 border-emerald-200"
                : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practical Labs
                </span>
                {eligibility.allLabsCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <span className="text-xs font-mono text-amber-600 font-bold">Incomplete</span>
                )}
              </div>
              <div className="text-lg font-black text-slate-900 font-mono mb-1">
                {eligibility.labsCompletedCount} / {eligibility.requiredLabsCount}
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                All 15 simulated engineering labs must be completed.
              </p>
              {!eligibility.allLabsCompleted && (
                <Link
                  href="/tutorials/git-github/labs"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 underline inline-flex items-center gap-1"
                >
                  <span>Complete Labs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Requirement 3: Assessment Score */}
            <div className={`p-4 rounded-2xl border ${
              eligibility.assessmentPassed
                ? "bg-emerald-50/70 border-emerald-200"
                : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Final Assessment
                </span>
                {eligibility.assessmentPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <span className="text-xs font-mono text-amber-600 font-bold">Score &lt; 31</span>
                )}
              </div>
              <div className="text-lg font-black text-slate-900 font-mono mb-1">
                {eligibility.assessmentTaken ? `${eligibility.score} / 50` : "Not Taken"}
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                Minimum passing score: 31/50 (Grade B+, A, or A+).
              </p>
              {!eligibility.assessmentPassed && (
                <Link
                  href="/tutorials/git-github/assessment"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 underline inline-flex items-center gap-1"
                >
                  <span>Take Assessment</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
