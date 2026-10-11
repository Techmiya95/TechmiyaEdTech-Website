import { calculateGrade, GradeResult } from "./gradeCalculator";

export interface UserProgress {
  completedLessons: string[]; // List of unique completed lesson IDs
  completedLabs: string[];    // List of unique completed lab IDs
  mode: "beginner" | "advanced";
  lastActiveLessonId?: string;
  notes?: Record<string, string>;
}

export interface StoredAssessmentAttempt {
  attemptId: string;
  attemptNumber: number;
  timestamp: string;
  studentName: string;
  studentEmail: string;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  score: number;
  maxScore: number;
  percentage: number;
  grade: "A+" | "A" | "B" | "B+" | "Not Passed";
  status: string;
  isPassing: boolean;
  topicBreakdown: Record<string, { total: number; correct: number }>;
  certificateId?: string;
}

export interface EligibilityResult {
  isEligible: boolean;
  missingRequirements: string[];
  lessonsCompletedCount: number;
  requiredLessonsCount: number;
  allLessonsCompleted: boolean;
  labsCompletedCount: number;
  requiredLabsCount: number;
  allLabsCompleted: boolean;
  assessmentTaken: boolean;
  score: number;
  maxScore: number;
  gradeResult: GradeResult | null;
  assessmentPassed: boolean;
  certificateId: string | null;
}

/**
 * Centralized Certificate Eligibility Checker.
 * Strictly verifies every required lesson ID, every required lab ID,
 * and passing assessment score (>= 31 / 50).
 */
export function getCertificateEligibility(
  progress: UserProgress | null | undefined,
  assessmentResult: StoredAssessmentAttempt | null | undefined,
  requiredLessonIds: string[],
  requiredLabIds: string[]
): EligibilityResult {
  const missingRequirements: string[] = [];

  const completedLessons = progress?.completedLessons || [];
  const completedLabs = progress?.completedLabs || [];

  // 1. Verify all required lessons
  const missingLessons = requiredLessonIds.filter(id => !completedLessons.includes(id));
  const allLessonsCompleted = missingLessons.length === 0;
  if (!allLessonsCompleted) {
    missingRequirements.push(
      `Complete all required curriculum chapters (${completedLessons.length}/${requiredLessonIds.length} completed)`
    );
  }

  // 2. Verify all required practical labs
  const missingLabs = requiredLabIds.filter(id => !completedLabs.includes(id));
  const allLabsCompleted = missingLabs.length === 0;
  if (!allLabsCompleted) {
    missingRequirements.push(
      `Complete all required practical labs (${completedLabs.length}/${requiredLabIds.length} completed)`
    );
  }

  // 3. Verify assessment attempt
  const assessmentTaken = !!assessmentResult && typeof assessmentResult.score === "number";
  let gradeResult: GradeResult | null = null;
  let assessmentPassed = false;
  let score = 0;
  const maxScore = 50;

  if (!assessmentTaken) {
    missingRequirements.push("Submit the 50-mark final assessment");
  } else {
    score = assessmentResult.score;
    gradeResult = calculateGrade(score, maxScore);
    assessmentPassed = gradeResult.isPassing && score >= 31;

    if (!assessmentPassed) {
      missingRequirements.push(
        `Achieve a passing score of at least 31/50 on the final assessment (Current score: ${score}/50, Grade: ${gradeResult.grade})`
      );
    }
  }

  const isEligible = allLessonsCompleted && allLabsCompleted && assessmentPassed;

  return {
    isEligible,
    missingRequirements,
    lessonsCompletedCount: completedLessons.length,
    requiredLessonsCount: requiredLessonIds.length,
    allLessonsCompleted,
    labsCompletedCount: completedLabs.length,
    requiredLabsCount: requiredLabIds.length,
    allLabsCompleted,
    assessmentTaken,
    score,
    maxScore,
    gradeResult,
    assessmentPassed,
    certificateId: isEligible && assessmentResult?.certificateId ? assessmentResult.certificateId : null,
  };
}
