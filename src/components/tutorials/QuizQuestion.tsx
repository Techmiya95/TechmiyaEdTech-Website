"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { ChapterQuiz } from "@/data/curriculum/types";

interface QuizQuestionProps {
  quiz: ChapterQuiz;
  onAnswer?: (isCorrect: boolean) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ quiz, onAnswer }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIndex(idx);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);
    if (onAnswer) {
      onAnswer(selectedIndex === quiz.correctIndex);
    }
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedIndex === quiz.correctIndex;

  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-amber-700">
        <HelpCircle className="w-4 h-4" />
        <span>Chapter Checkpoint Quiz</span>
      </div>

      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 leading-snug">
        {quiz.question}
      </h4>

      <div className="space-y-2.5 mb-5">
        {quiz.options.map((option, idx) => {
          let optionClasses =
            "flex items-start gap-3 w-full p-3.5 rounded-xl border text-left text-sm transition-all duration-150 ";

          if (!isSubmitted) {
            if (selectedIndex === idx) {
              optionClasses += "border-amber-500 bg-amber-50/70 text-slate-900 font-medium ring-1 ring-amber-500";
            } else {
              optionClasses += "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700";
            }
          } else {
            // Evaluated state
            if (idx === quiz.correctIndex) {
              optionClasses += "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-medium";
            } else if (selectedIndex === idx) {
              optionClasses += "border-rose-400 bg-rose-50 text-rose-950 line-through";
            } else {
              optionClasses += "border-slate-200 opacity-60 text-slate-500";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isSubmitted}
              className={optionClasses}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs mt-0.5 border-slate-300 text-slate-600 bg-white">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="leading-relaxed">{option}</span>
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedIndex === null}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-sm transition-all bg-amber-500 hover:bg-amber-600 text-slate-950 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          Verify Answer
        </button>
      ) : (
        <div className={`p-4 rounded-xl border ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}>
          <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-900">Correct! Well done.</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="text-rose-900">Not quite right.</span>
              </>
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            {quiz.explanation}
          </p>
          {!isCorrect && (
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};
