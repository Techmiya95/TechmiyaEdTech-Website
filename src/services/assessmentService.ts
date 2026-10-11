import { getStorageItem, setStorageItem, removeStorageItem } from "@/utils/storage";
import { StoredAssessmentAttempt } from "@/utils/eligibility";
import { calculateGrade } from "@/utils/gradeCalculator";
import { assessmentQuestions } from "@/data/assessmentQuestions";

const ATTEMPTS_STORAGE_KEY = "techmiya_git_assessment_attempts_v1";

export const assessmentService = {
  getAttempts(): StoredAssessmentAttempt[] {
    return getStorageItem<StoredAssessmentAttempt[]>(ATTEMPTS_STORAGE_KEY, []);
  },

  getLatestAttempt(): StoredAssessmentAttempt | null {
    const attempts = this.getAttempts();
    if (attempts.length === 0) return null;
    return attempts[attempts.length - 1];
  },

  getBestAttempt(): StoredAssessmentAttempt | null {
    const attempts = this.getAttempts();
    if (attempts.length === 0) return null;
    return [...attempts].sort((a, b) => b.score - a.score)[0];
  },

  submitAssessment(params: {
    studentName: string;
    studentEmail: string;
    answers: Record<string, number>;
  }): StoredAssessmentAttempt {
    const { studentName, studentEmail, answers } = params;
    const attempts = this.getAttempts();
    const attemptNumber = attempts.length + 1;

    let score = 0;
    const maxScore = 50;
    const topicBreakdown: Record<string, { total: number; correct: number }> = {};

    assessmentQuestions.forEach((q) => {
      if (!topicBreakdown[q.topic]) {
        topicBreakdown[q.topic] = { total: 0, correct: 0 };
      }
      topicBreakdown[q.topic].total += q.marks;

      const selectedIndex = answers[q.id];
      if (selectedIndex === q.correctOptionIndex) {
        score += q.marks;
        topicBreakdown[q.topic].correct += q.marks;
      }
    });

    const gradeResult = calculateGrade(score, maxScore);

    // Generate unique Certificate ID if passing
    let certificateId: string | undefined = undefined;
    if (gradeResult.isPassing) {
      const year = new Date().getFullYear();
      const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
      certificateId = `TECHMIYA-GIT-${year}-${randomSuffix}`;
    }

    const newAttempt: StoredAssessmentAttempt = {
      attemptId: `attempt_${Date.now()}_${attemptNumber}`,
      attemptNumber,
      timestamp: new Date().toISOString(),
      studentName: studentName.trim(),
      studentEmail: studentEmail.trim().toLowerCase(),
      answers,
      score,
      maxScore,
      percentage: gradeResult.percentage,
      grade: gradeResult.grade,
      status: gradeResult.status,
      isPassing: gradeResult.isPassing,
      topicBreakdown,
      certificateId,
    };

    const updatedAttempts = [...attempts, newAttempt];
    setStorageItem(ATTEMPTS_STORAGE_KEY, updatedAttempts);

    return newAttempt;
  },

  clearAttempts(): void {
    removeStorageItem(ATTEMPTS_STORAGE_KEY);
  }
};
