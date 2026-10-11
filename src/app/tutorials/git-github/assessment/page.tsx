"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  User,
  Mail,
  ShieldCheck,
  RotateCcw
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { assessmentQuestions, AssessmentQuestion } from "@/data/assessmentQuestions";
import { assessmentService } from "@/services/assessmentService";
import { isValidEmail, isValidName } from "@/utils/validation";

export default function AssessmentPage() {
  const router = useRouter();

  // Student details
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Assessment flow states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Load existing student name/email if previous attempt exists
  useEffect(() => {
    const latest = assessmentService.getLatestAttempt();
    if (latest) {
      if (latest.studentName) setStudentName(latest.studentName);
      if (latest.studentEmail) setStudentEmail(latest.studentEmail);
    }
  }, []);

  const totalQuestions = assessmentQuestions.length; // 30
  const totalMarks = assessmentQuestions.reduce((acc, q) => acc + q.marks, 0); // 50
  const answeredCount = Object.keys(answers).length;

  const currentQ = assessmentQuestions[currentQuestionIndex];

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const validateStudentInfo = (): boolean => {
    let valid = true;
    if (!isValidName(studentName)) {
      setNameError("Please enter your real full name (at least 2 characters) for certificate issuance.");
      valid = false;
    } else {
      setNameError("");
    }

    if (!isValidEmail(studentEmail)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  };

  const handleStartExam = () => {
    if (validateStudentInfo()) {
      setHasStarted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitExam = () => {
    if (isSubmitting) return;

    if (!validateStudentInfo()) {
      setIsReviewMode(false);
      setHasStarted(false);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = assessmentService.submitAssessment({
        studentName,
        studentEmail,
        answers,
      });
      router.push(`/tutorials/git-github/assessment/result?id=${result.attemptId}`);
    } catch (err) {
      console.error("Submission failed:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <TutorialHeader />

      {/* Top Header Strip */}
      <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Official 50-Mark Examination</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">
              Git & GitHub Final Assessment
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-slate-400">Total Marks: </span>
              <span className="font-bold text-amber-400">{totalMarks} Marks</span>
            </div>
            <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-slate-400">Questions: </span>
              <span className="font-bold text-white">30 Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Assessment Body */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        {!hasStarted ? (
          /* Student Registration / Entry Screen */
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950">
                Candidate Information & Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Please enter your details below. Your name will appear on your verified Certificate of Completion upon passing (score 31/50 or higher).
              </p>
            </div>

            {/* Assessment Blueprint & Rules */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-slate-800">
              <div className="font-bold text-amber-950 uppercase tracking-wider text-xs">
                Assessment Blueprint:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Section 1: Git Fundamentals (10 Qs @ 1 mark = 10m)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Section 2: Branching & Merging (8 Qs @ 2 marks = 16m)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Section 3: GitHub & Collaboration (8 Qs @ 2 marks = 16m)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Section 4: Actions & Security (4 Qs @ 2 marks = 8m)</span>
                </li>
              </ul>
            </div>

            {/* Candidate Inputs */}
            <div className="space-y-4 max-w-md mx-auto pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name (for Certificate)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma or Priya Nair"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                {nameError && (
                  <p className="text-xs text-rose-600 mt-1">{nameError}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                {emailError && (
                  <p className="text-xs text-rose-600 mt-1">{emailError}</p>
                )}
              </div>

              <button
                onClick={handleStartExam}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Begin Assessment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : isReviewMode ? (
          /* Review Screen Before Submission */
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                  Review Your Answers
                </h2>
                <p className="text-xs text-slate-500">
                  Candidate: <span className="font-bold text-slate-800">{studentName}</span> ({studentEmail})
                </p>
              </div>

              <div className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg">
                Answered: {answeredCount} / {totalQuestions}
              </div>
            </div>

            {/* Questions Grid Summary */}
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
              {assessmentQuestions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setIsReviewMode(false);
                    }}
                    className={`h-11 rounded-xl text-xs font-mono font-bold transition-all flex flex-col items-center justify-center ${
                      isAnswered
                        ? "bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200"
                        : "bg-slate-100 text-slate-500 border border-dashed border-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    <span>Q{idx + 1}</span>
                    <span className="text-[9px] opacity-75">{q.marks}m</span>
                  </button>
                );
              })}
            </div>

            {answeredCount < totalQuestions && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  You have <strong>{totalQuestions - answeredCount} unanswered question(s)</strong>. You can click on any number above to answer it.
                </span>
              </div>
            )}

            {/* Submission Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => setIsReviewMode(false)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Back to Questions
              </button>

              <button
                onClick={handleSubmitExam}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Exam..." : "Confirm & Finalize Submission"}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Live Question Screen */
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            {/* Question Header & Nav Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs font-mono">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  ({currentQ.marks} {currentQ.marks === 1 ? "Mark" : "Marks"})
                </span>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                {currentQ.section}
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-xl font-bold text-slate-950 leading-snug">
                {currentQ.question}
              </h3>

              {currentQ.codeSnippet && (
                <div className="p-4 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed border border-slate-800">
                  {currentQ.codeSnippet}
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = answers[currentQ.id] === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, idx)}
                    className={`w-full flex items-start gap-3.5 p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all ${
                      isSelected
                        ? "border-amber-500 bg-amber-50/80 text-slate-950 font-bold ring-2 ring-amber-500"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 border-amber-600"
                          : "border-slate-300 text-slate-500 bg-white"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 disabled:opacity-40"
              >
                Previous Question
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setIsReviewMode(true)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  Review All ({answeredCount}/{totalQuestions})
                </button>

                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={() => setIsReviewMode(true)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                  >
                    Review & Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
