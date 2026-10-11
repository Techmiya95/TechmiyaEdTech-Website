export interface GradeResult {
  score: number;
  maxScore: number;
  percentage: number;
  grade: "A+" | "A" | "B" | "B+" | "Not Passed";
  status: "Excellent" | "Very Good" | "Good" | "Pass" | "Retake required";
  isPassing: boolean;
}

/**
 * Calculates grade according to the exact Techmiya Tutorials specification:
 * 46-50: A+ (Excellent)
 * 41-45: A  (Very Good)
 * 36-40: B  (Good)
 * 31-35: B+ (Pass)
 * 0-30:  Not Passed (Retake required)
 * 
 * Strict boundary checks:
 * 50 -> A+
 * 46 -> A+
 * 45 -> A
 * 41 -> A
 * 40 -> B
 * 36 -> B
 * 35 -> B+
 * 31 -> B+
 * 30 -> Not Passed
 * 0  -> Not Passed
 */
export function calculateGrade(score: number, maxScore: number = 50): GradeResult {
  const clampedScore = Math.max(0, Math.min(score, maxScore));
  const percentage = Math.round((clampedScore / maxScore) * 100 * 10) / 10;

  if (clampedScore >= 46 && clampedScore <= 50) {
    return {
      score: clampedScore,
      maxScore,
      percentage,
      grade: "A+",
      status: "Excellent",
      isPassing: true,
    };
  }

  if (clampedScore >= 41 && clampedScore <= 45) {
    return {
      score: clampedScore,
      maxScore,
      percentage,
      grade: "A",
      status: "Very Good",
      isPassing: true,
    };
  }

  if (clampedScore >= 36 && clampedScore <= 40) {
    return {
      score: clampedScore,
      maxScore,
      percentage,
      grade: "B",
      status: "Good",
      isPassing: true,
    };
  }

  if (clampedScore >= 31 && clampedScore <= 35) {
    return {
      score: clampedScore,
      maxScore,
      percentage,
      grade: "B+",
      status: "Pass",
      isPassing: true,
    };
  }

  // 0 - 30
  return {
    score: clampedScore,
    maxScore,
    percentage,
    grade: "Not Passed",
    status: "Retake required",
    isPassing: false,
  };
}
