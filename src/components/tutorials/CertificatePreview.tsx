"use client";
import React, { useState } from "react";
import { Award, Download, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";
import { certificateService, CertificateData } from "@/services/certificateService";

interface CertificatePreviewProps {
  isEligible: boolean;
  missingRequirements?: string[];
  certificateData?: CertificateData | null;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  isEligible,
  missingRequirements = [],
  certificateData,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (!isEligible || !certificateData) return;
    setIsDownloading(true);
    try {
      certificateService.downloadPdf(certificateData);
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isEligible || !certificateData) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Certificate Currently Locked
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
          To maintain rigorous industry educational standards, Techmiya course certificates are awarded only after all curriculum requirements and practical assessments are verified.
        </p>

        {missingRequirements.length > 0 && (
          <div className="bg-white rounded-2xl border border-amber-200 p-5 text-left max-w-lg mx-auto mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
              Remaining Requirements Checklist:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {missingRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">⏳</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-emerald-950">
              Congratulations! You Are Certificate Eligible
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800">
              All 100 units, 15 practical labs, and the final assessment requirements are complete.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>{isDownloading ? "Generating PDF..." : "Download Official PDF"}</span>
        </button>
      </div>

      {/* Visual Live Certificate Render Card (Mimicking Real Document) */}
      <div className="relative rounded-3xl bg-amber-50/40 border-8 border-double border-amber-500 p-6 sm:p-12 shadow-2xl text-center select-none overflow-hidden">
        {/* Decorative Watermark Stamp */}
        <div className="absolute right-6 bottom-6 opacity-10 pointer-events-none">
          <Award className="w-64 h-64 text-amber-700" />
        </div>

        {/* Institution Title */}
        <div className="text-amber-600 font-black tracking-widest text-xs sm:text-sm uppercase mb-1">
          TECHMIYA TUTORIALS
        </div>
        <div className="text-[11px] text-slate-500 font-medium tracking-wide mb-4">
          ACADEMIC REPOSITORY & PRACTICAL LAB DIVISION
        </div>

        <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6" />

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Certificate of Completion
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 font-serif italic">
          This is to proudly certify that
        </p>

        {/* Student Name */}
        <div className="text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight font-serif pb-2 border-b-2 border-amber-500 max-w-md mx-auto mb-6">
          {certificateData.studentName}
        </div>

        <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed mb-4">
          has successfully mastered the comprehensive 100-unit curriculum, completed all 15 industry-grade practical labs, and passed the rigorous 50-mark final assessment in:
        </p>

        <h3 className="text-lg sm:text-2xl font-black text-amber-600 tracking-tight mb-6">
          Git & GitHub: Beginner to Advanced
        </h3>

        {/* Stats Grid inside Certificate */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mb-8 shadow-xs">
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Final Score</div>
            <div className="text-base sm:text-lg font-black text-slate-900 font-mono">
              {certificateData.score}/{certificateData.maxScore}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Percentage</div>
            <div className="text-base sm:text-lg font-black text-slate-900 font-mono">
              {certificateData.percentage}%
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Grade</div>
            <div className="text-base sm:text-lg font-black text-amber-600 font-mono font-black">
              {certificateData.grade}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">Status</div>
            <div className="text-base sm:text-lg font-black text-emerald-700 font-mono">
              PASSED
            </div>
          </div>
        </div>

        {/* Footer with Metadata & Verified Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200 text-xs text-slate-600 gap-4">
          <div className="text-left">
            <div><span className="font-semibold text-slate-800">Issue Date:</span> {certificateData.issueDate}</div>
            <div className="font-mono text-[11px] text-slate-500">ID: {certificateData.certificateId}</div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Browser-Verified Credential</span>
          </div>

          <div className="text-right">
            <div className="font-bold text-slate-900">Techmiya Tutorials</div>
            <div className="text-[11px] text-slate-500">tutorials.techmiyaedtech.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
