"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  CheckCircle2,
  Circle,
  Search,
  BookOpen,
  Filter,
  Layers,
  Sparkles
} from "lucide-react";
import { curriculumLevels, CurriculumUnit } from "@/data/gitGithubCurriculum";

interface CourseSidebarProps {
  activeUnitId?: string;
  completedLessonIds: string[];
  mode: "beginner" | "advanced";
  onModeToggle?: (mode: "beginner" | "advanced") => void;
  onSelectUnit?: (unitId: string) => void;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({
  activeUnitId,
  completedLessonIds,
  mode,
  onModeToggle,
  onSelectUnit,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  // Track open/collapsed state of levels; by default expand the active level or Level 1
  const [expandedLevels, setExpandedLevels] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const toggleLevel = (levelNum: number) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [levelNum]: !prev[levelNum],
    }));
  };

  const filteredLevels = curriculumLevels.map((lvl) => {
    const matchingUnits = lvl.units.filter((u) => {
      const q = searchQuery.toLowerCase();
      return (
        u.title.toLowerCase().includes(q) ||
        u.topics.some((t) => t.toLowerCase().includes(q)) ||
        `unit-${u.unitNumber}`.includes(q)
      );
    });
    return { ...lvl, units: matchingUnits };
  }).filter((lvl) => lvl.units.length > 0 || !searchQuery);

  const totalUnits = 100;
  const completedCount = completedLessonIds.length;
  const percentage = Math.round((completedCount / totalUnits) * 100);

  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-white border-r border-slate-200 flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none">
      {/* Top Sidebar Header with Progress & Search */}
      <div className="p-4 border-b border-slate-200 bg-slate-50/70 space-y-3">
        {/* Course Title & Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
            <span>Git & GitHub Curriculum</span>
            <span className="text-amber-600 font-mono">{percentage}%</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
            <span>{completedCount} of 100 units completed</span>
            <span className="font-semibold text-slate-700">7 Levels</span>
          </div>
        </div>

        {/* Mode Toggle (Beginner vs Advanced) */}
        {onModeToggle && (
          <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold">
            <button
              onClick={() => onModeToggle("beginner")}
              className={`flex-1 py-1 rounded-md text-center transition-all ${
                mode === "beginner"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌱 Beginner Mode
            </button>
            <button
              onClick={() => onModeToggle("advanced")}
              className={`flex-1 py-1 rounded-md text-center transition-all ${
                mode === "advanced"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚡ Advanced Mode
            </button>
          </div>
        )}

        {/* Search input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search all 100 units or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
          />
        </div>
      </div>

      {/* Expandable Module Tree */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
        {filteredLevels.map((level) => {
          const isExpanded = !!expandedLevels[level.level] || searchQuery.length > 0;
          const levelCompletedCount = level.units.filter((u) =>
            completedLessonIds.includes(u.id)
          ).length;

          return (
            <div key={level.level} className="pt-1">
              {/* Level Accordion Header */}
              <button
                onClick={() => toggleLevel(level.level)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100/70 text-left transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center font-mono">
                    {level.level}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {level.title}
                    </h3>
                    <div className="text-[10px] text-slate-500">
                      {levelCompletedCount}/{level.units.length} completed
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Unit List */}
              {isExpanded && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 my-1 space-y-0.5">
                  {level.units.map((unit) => {
                    const isCompleted = completedLessonIds.includes(unit.id);
                    const isActive = activeUnitId === unit.id;

                    return (
                      <Link
                        key={unit.id}
                        href={`/tutorials/git-github/lesson?id=${unit.id}`}
                        onClick={() => onSelectUnit && onSelectUnit(unit.id)}
                        className={`group flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-all ${
                          isActive
                            ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                            : isCompleted
                            ? "text-slate-700 hover:bg-slate-100"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span className="shrink-0 mt-0.5">
                          {isCompleted ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isActive ? "text-slate-950" : "text-emerald-500"
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 ${
                                isActive ? "text-slate-950" : "text-slate-300"
                              }`}
                            />
                          )}
                        </span>
                        <div className="flex-1 leading-snug">
                          <span className="font-mono text-[10px] opacity-75 mr-1">
                            #{unit.unitNumber}
                          </span>
                          <span>{unit.title}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
