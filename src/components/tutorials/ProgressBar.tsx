"use client";
import React from "react";

interface ProgressBarProps {
  completed: number;
  total: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
  label = "Course Progress",
  size = "md",
  showCount = true,
}) => {
  const percentage = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;

  const heightClass = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  }[size];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5 text-slate-700">
        <span className="font-semibold text-slate-900">{label}</span>
        <div className="flex items-center gap-2">
          {showCount && (
            <span className="text-slate-500 font-mono text-xs">
              {completed}/{total}
            </span>
          )}
          <span className="font-bold text-amber-600 font-mono">{percentage}%</span>
        </div>
      </div>
      <div className={`w-full bg-slate-200/80 rounded-full overflow-hidden ${heightClass}`}>
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};
