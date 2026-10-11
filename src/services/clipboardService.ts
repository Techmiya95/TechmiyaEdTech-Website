import { sanitizeText } from "@/utils/validation";
import { StoredAssessmentAttempt, UserProgress } from "@/utils/eligibility";

export interface GoogleSheetsExportParams {
  attempt: StoredAssessmentAttempt;
  progress: UserProgress;
  totalRequiredLessons: number;
  totalRequiredLabs: number;
  isCertificateEligible: boolean;
}

export const GOOGLE_SHEETS_COLUMNS = [
  "Record ID",
  "Course Name",
  "Student Name",
  "Student Email",
  "Assessment Attempt",
  "Assessment Date",
  "Total Marks",
  "Marks Obtained",
  "Percentage",
  "Grade",
  "Pass/Fail",
  "Completed Lessons",
  "Required Lessons",
  "Completed Labs",
  "Required Labs",
  "Certificate Eligible",
  "Topic-wise Performance",
  "Certificate ID"
];

export const clipboardService = {
  /**
   * Column headers for Google Sheets (for copy-header utility)
   */
  getHeaders(): string {
    return GOOGLE_SHEETS_COLUMNS.join("\t");
  },

  /**
   * Formats a clean, TSV (Tab-Separated Value) row matching the 18 required columns.
   */
  formatRow(params: GoogleSheetsExportParams): string {
    const { attempt, progress, totalRequiredLessons, totalRequiredLabs, isCertificateEligible } = params;

    // Format topic breakdown summary: e.g. "Basics: 10/10 | Branching: 14/16 | GitHub: 12/16"
    const topicSummary = Object.entries(attempt.topicBreakdown || {})
      .map(([topic, stats]) => `${topic}: ${stats.correct}/${stats.total}`)
      .join(" | ");

    const formattedDate = new Date(attempt.timestamp).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const columns: string[] = [
      sanitizeText(attempt.attemptId),
      "Git & GitHub: Beginner to Advanced",
      sanitizeText(attempt.studentName || "Anonymous Student"),
      sanitizeText(attempt.studentEmail || "N/A"),
      String(attempt.attemptNumber),
      sanitizeText(formattedDate),
      String(attempt.maxScore),
      String(attempt.score),
      `${attempt.percentage}%`,
      attempt.grade,
      attempt.isPassing ? "PASS" : "FAIL",
      String(progress.completedLessons.length),
      String(totalRequiredLessons),
      String(progress.completedLabs.length),
      String(totalRequiredLabs),
      isCertificateEligible ? "YES" : "NO",
      sanitizeText(topicSummary),
      attempt.certificateId ? sanitizeText(attempt.certificateId) : "Not Issued"
    ];

    return columns.join("\t");
  },

  /**
   * Copies string to system clipboard with robust fallback
   */
  async copyToClipboard(text: string): Promise<boolean> {
    if (typeof window === "undefined") return false;

    // Modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn("[ClipboardService] Navigator clipboard write failed, trying fallback:", err);
      }
    }

    // Fallback using textarea execCommand
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error("[ClipboardService] Fallback execCommand failed:", err);
      return false;
    }
  }
};
