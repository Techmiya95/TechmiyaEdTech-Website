"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Terminal,
  CheckCircle2,
  Award,
  Clock,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Search,
  Filter,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { TutorialHeader } from "@/components/tutorials/TutorialHeader";
import { ProgressBar } from "@/components/tutorials/ProgressBar";
import { gitGithubCurriculum, curriculumLevels } from "@/data/gitGithubCurriculum";
import { practicalLabs } from "@/data/practicalLabs";
import { gitGithubResources } from "@/data/gitGithubResources";
import { progressService } from "@/services/progressService";
import { assessmentService } from "@/services/assessmentService";
import { getCertificateEligibility, UserProgress } from "@/utils/eligibility";

export default function GitGithubHome() {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedLabs: [],
    mode: "beginner",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<number | "all">("all");

  useEffect(() => {
    setProgress(progressService.getProgress());
  }, []);

  const handleModeToggle = (newMode: "beginner" | "advanced") => {
    const updated = progressService.setMode(newMode);
    setProgress(updated);
  };

  const latestAttempt = assessmentService.getLatestAttempt();
  const allUnitIds = gitGithubCurriculum.map((u) => u.id);
  const allLabIds = practicalLabs.map((l) => l.id);

  const eligibility = getCertificateEligibility(
    progress,
    latestAttempt,
    allUnitIds,
    allLabIds
  );

  const filteredUnits = gitGithubCurriculum.filter((u) => {
    const matchesSearch =
      searchQuery === "" ||
      u.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel =
      selectedLevelFilter === "all" || u.level === selectedLevelFilter;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <TutorialHeader />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-white via-amber-50/30 to-slate-50 border-b border-slate-200/80 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Techmiya Tutorials Certification Path</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              Git & GitHub: <span className="text-amber-500">Beginner to Advanced</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              A comprehensive, industry-relevant curriculum designed for learners from absolute non-IT backgrounds to experienced software engineers. Master terminal version control, branching strategies, merge conflicts, pull request reviews, CI/CD automation, and repository security.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Curriculum</span>
                </div>
                <div className="text-2xl font-black text-slate-900">100 Units</div>
                <div className="text-[11px] text-slate-500">Across 7 structured levels</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>Practical Labs</span>
                </div>
                <div className="text-2xl font-black text-slate-900">15 Labs</div>
                <div className="text-[11px] text-slate-500">Hands-on walkthroughs</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Est. Time</span>
                </div>
                <div className="text-2xl font-black text-slate-900">~30 Hours</div>
                <div className="text-[11px] text-slate-500 font-medium text-amber-700">Estimated duration</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Assessment</span>
                </div>
                <div className="text-2xl font-black text-slate-900">50 Marks</div>
                <div className="text-[11px] text-slate-500">Passing score: 31/50</div>
              </div>
            </div>

            {/* Action Buttons & Mode Switch */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/tutorials/git-github/lesson?id=unit-01"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Start Learning Unit 1</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/tutorials/git-github/labs"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-emerald-600" />
                <span>Explore 15 Labs</span>
              </Link>

              <Link
                href="/tutorials/git-github/assessment"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Final Assessment (50m)</span>
              </Link>

              {/* Mode Toggle */}
              <div className="ml-auto inline-flex items-center bg-slate-200/90 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => handleModeToggle("beginner")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    progress.mode === "beginner"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  🌱 Beginner Mode
                </button>
                <button
                  onClick={() => handleModeToggle("advanced")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    progress.mode === "advanced"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ⚡ Advanced Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Progress Overview Strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <ProgressBar
                  completed={progress.completedLessons.length}
                  total={100}
                  label="Curriculum Units Completed"
                />
              </div>

              <div>
                <ProgressBar
                  completed={progress.completedLabs.length}
                  total={15}
                  label="Practical Labs Completed"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Certification Status:</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {eligibility.isEligible ? (
                      <span className="text-emerald-700 font-bold">Eligible for Certificate!</span>
                    ) : (
                      <span>{eligibility.missingRequirements.length} requirement(s) pending</span>
                    )}
                  </div>
                </div>

                <Link
                  href="/tutorials/git-github/certificate"
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    eligibility.isEligible
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {eligibility.isEligible ? "View Certificate" : "Check Eligibility"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Level Pathway & Search */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-12">
        {/* Search & Level Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search chapters, syntax, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
            />
          </div>

          {/* Level Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
            <button
              onClick={() => setSelectedLevelFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedLevelFilter === "all"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Levels
            </button>
            {[1, 2, 3, 4, 5, 6, 7].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevelFilter(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedLevelFilter === lvl
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Level {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Level Blocks */}
        <div className="space-y-10">
          {curriculumLevels
            .filter((lvl) => selectedLevelFilter === "all" || lvl.level === selectedLevelFilter)
            .map((lvl) => {
              const matchingUnits = lvl.units.filter((u) => {
                return (
                  searchQuery === "" ||
                  u.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  u.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
                );
              });

              if (searchQuery && matchingUnits.length === 0) return null;

              const completedInLevel = lvl.units.filter((u) =>
                progress.completedLessons.includes(u.id)
              ).length;

              return (
                <section key={lvl.level} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                  {/* Level Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center font-mono">
                          L{lvl.level}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                          {lvl.title}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {lvl.description}
                      </p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <div className="text-xs font-mono text-slate-500">
                        {completedInLevel}/{lvl.units.length} completed
                      </div>
                      <div className="text-xs font-semibold text-amber-700">
                        ~{lvl.totalMinutes} mins total
                      </div>
                    </div>
                  </div>

                  {/* Units Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {matchingUnits.map((unit) => {
                      const isCompleted = progress.completedLessons.includes(unit.id);

                      return (
                        <Link
                          key={unit.id}
                          href={`/tutorials/git-github/lesson?id=${unit.id}`}
                          className={`group flex items-start gap-3.5 p-4 rounded-2xl border transition-all ${
                            isCompleted
                              ? "bg-slate-50/60 border-slate-200 hover:border-slate-300"
                              : "bg-white border-slate-200/90 hover:border-amber-400 hover:shadow-md"
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-amber-500 flex items-center justify-center text-[10px] font-mono text-slate-400 group-hover:text-amber-600">
                                {unit.unitNumber}
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-[11px] font-mono font-bold text-amber-700 uppercase">
                                Unit #{unit.unitNumber}
                              </span>
                              <span className="text-[11px] text-slate-400">
                                {unit.estimatedMinutes}m
                              </span>
                            </div>

                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-1 mb-1">
                              {unit.title}
                            </h3>

                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2">
                              {progress.mode === "beginner" ? unit.simpleExplanation : unit.technicalExplanation}
                            </p>

                            <div className="flex flex-wrap gap-1">
                              {unit.topics.slice(0, 3).map((topic, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}
        </div>

        {/* Official Candidate Learning Resources Grid (Section 3 Requirement) */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Verified External Sources</span>
            </div>
            <h2 className="text-2xl font-black text-slate-950 mb-1">
              Official Git & GitHub Learning Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Techmiya curates and cross-references official documentation and interactive platforms so learners can continue independent study with verified authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gitGithubResources.map((res) => (
              <a
                key={res.id}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {res.provider}
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                      {res.difficulty}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between gap-1 mb-2">
                    <span>{res.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
                  </h3>

                  <ul className="space-y-1 mb-4 text-xs text-slate-600">
                    {res.learningObjectives.slice(0, 2).map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span className="line-clamp-2">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Reviewed: {res.lastReviewed}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Link
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Grade Rules & Certification Criteria Table */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>50-Mark Assessment Criteria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Grade Boundaries & Certification Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Certification is strictly earned based on verified course completion and passing the 50-mark final assessment. Passing score is 31 marks (62%).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Grade Boundaries Table */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950/60 text-slate-400 font-bold border-b border-slate-700 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5">Score (out of 50)</th>
                    <th className="p-3.5">Grade</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 text-slate-200 font-mono">
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-3.5 font-bold text-amber-400">46 – 50</td>
                    <td className="p-3.5 font-black text-white">A+</td>
                    <td className="p-3.5 text-emerald-400 font-sans font-semibold">Excellent</td>
                    <td className="p-3.5 text-emerald-400 font-sans">Eligible ✓</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-3.5 font-bold text-amber-400">41 – 45</td>
                    <td className="p-3.5 font-black text-white">A</td>
                    <td className="p-3.5 text-emerald-400 font-sans font-semibold">Very Good</td>
                    <td className="p-3.5 text-emerald-400 font-sans">Eligible ✓</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-3.5 font-bold text-amber-400">36 – 40</td>
                    <td className="p-3.5 font-black text-white">B</td>
                    <td className="p-3.5 text-blue-400 font-sans font-semibold">Good</td>
                    <td className="p-3.5 text-emerald-400 font-sans">Eligible ✓</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-3.5 font-bold text-amber-400">31 – 35</td>
                    <td className="p-3.5 font-black text-white">B+</td>
                    <td className="p-3.5 text-blue-400 font-sans font-semibold">Pass</td>
                    <td className="p-3.5 text-emerald-400 font-sans">Eligible ✓</td>
                  </tr>
                  <tr className="bg-rose-950/20 text-rose-300">
                    <td className="p-3.5 font-bold">0 – 30</td>
                    <td className="p-3.5 font-bold text-rose-400">Not Passed</td>
                    <td className="p-3.5 font-sans font-semibold">Retake required</td>
                    <td className="p-3.5 text-rose-400 font-sans">Unavailable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Eligibility Requirements Box */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 space-y-4">
              <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Certification Eligibility Rules:</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <span><strong>100 Curriculum Units:</strong> Every single lesson ID in the course must be completed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <span><strong>15 Practical Labs:</strong> All designated interactive lab scenarios must be completed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <span><strong>50-Mark Assessment:</strong> Submit the 30-question final exam and score at least 31 marks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                  <span><strong>Downloadable PDF:</strong> Client-side high-resolution verified PDF with unique certificate ID.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/tutorials/git-github/assessment"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all"
                >
                  <span>Launch Final 50-Mark Assessment</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-white">Techmiya Tutorials</span> — Git & GitHub Complete Learning, Assessment & Certification Module.
          </div>
          <div>
            Local Browser Storage Persistence • No Backend Required • GitHub Pages Ready
          </div>
        </div>
      </footer>
    </div>
  );
}
