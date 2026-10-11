import { gitGithubCurriculum, curriculumLevels } from "../data/gitGithubCurriculum";
import { assessmentQuestions } from "../data/assessmentQuestions";
import { gitGithubResources } from "../data/gitGithubResources";
import { practicalLabs } from "../data/practicalLabs";
import { calculateGrade } from "../utils/gradeCalculator";
import { getCertificateEligibility } from "../utils/eligibility";
import { clipboardService, GOOGLE_SHEETS_COLUMNS } from "../services/clipboardService";
import { StoredAssessmentAttempt, UserProgress } from "../utils/eligibility";

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, details?: any) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${testName}`, details ? details : "");
  }
}

console.log("=================================================");
console.log("🚀 RUNNING COMPREHENSIVE TECHMIYA GIT MODULE TESTS");
console.log("=================================================\n");

// 1. CURRICULUM TESTS
console.log("📌 1. Testing Curriculum & 100 Learning Units...");
assert(gitGithubCurriculum.length === 100, `Curriculum has exactly 100 units (actual: ${gitGithubCurriculum.length})`);

const unitIds = new Set<string>();
let duplicateCount = 0;
let incompleteCount = 0;

gitGithubCurriculum.forEach((unit) => {
  if (unitIds.has(unit.id)) {
    duplicateCount++;
  }
  unitIds.add(unit.id);

  if (
    !unit.title ||
    !unit.simpleExplanation ||
    !unit.technicalExplanation ||
    !unit.learningObjectives ||
    unit.learningObjectives.length === 0 ||
    !unit.walkthrough ||
    unit.walkthrough.length === 0 ||
    !unit.practicalExercise ||
    !unit.quiz ||
    !unit.checklist ||
    unit.checklist.length === 0
  ) {
    incompleteCount++;
  }
});

assert(duplicateCount === 0, `All 100 units have unique IDs (duplicates: ${duplicateCount})`);
assert(incompleteCount === 0, `All 100 units contain substantive required sections (incomplete: ${incompleteCount})`);
assert(curriculumLevels.length === 7, `Curriculum is organized across exactly 7 levels (actual: ${curriculumLevels.length})`);

// 2. ASSESSMENT & SCORING TESTS
console.log("\n📌 2. Testing Assessment Questions Blueprint & Scoring...");
assert(assessmentQuestions.length === 30, `Assessment has exactly 30 questions (actual: ${assessmentQuestions.length})`);

const totalMarks = assessmentQuestions.reduce((sum, q) => sum + q.marks, 0);
assert(totalMarks === 50, `Assessment total marks equal exactly 50 (actual: ${totalMarks})`);

const section1 = assessmentQuestions.filter(q => q.section === "Git Fundamentals & Commands");
const section2 = assessmentQuestions.filter(q => q.section === "Branching, Merging & Recovery");
const section3 = assessmentQuestions.filter(q => q.section === "GitHub & Collaboration Workflows");
const section4 = assessmentQuestions.filter(q => q.section === "GitHub Actions, Security & Scenarios");

assert(section1.length === 10 && section1.every(q => q.marks === 1), "Section 1: 10 questions @ 1 mark each = 10 marks");
assert(section2.length === 8 && section2.every(q => q.marks === 2), "Section 2: 8 questions @ 2 marks each = 16 marks");
assert(section3.length === 8 && section3.every(q => q.marks === 2), "Section 3: 8 questions @ 2 marks each = 16 marks");
assert(section4.length === 4 && section4.every(q => q.marks === 2), "Section 4: 4 questions @ 2 marks each = 8 marks");

// Question ID uniqueness & options validity
const questionIds = new Set<string>();
let invalidQuestions = 0;
assessmentQuestions.forEach(q => {
  if (questionIds.has(q.id)) invalidQuestions++;
  questionIds.add(q.id);
  if (!q.options || q.options.length < 2 || q.correctOptionIndex < 0 || q.correctOptionIndex >= q.options.length) {
    invalidQuestions++;
  }
});
assert(invalidQuestions === 0, `All questions have unique IDs and valid answer keys (invalid: ${invalidQuestions})`);

// 3. GRADE BOUNDARY TESTS
console.log("\n📌 3. Testing Exact Grade Boundaries...");
const boundaryTests = [
  { score: 0, expectedGrade: "Not Passed", expectedStatus: "Retake required", expectedPass: false },
  { score: 15, expectedGrade: "Not Passed", expectedStatus: "Retake required", expectedPass: false },
  { score: 30, expectedGrade: "Not Passed", expectedStatus: "Retake required", expectedPass: false },
  { score: 31, expectedGrade: "B+", expectedStatus: "Pass", expectedPass: true },
  { score: 35, expectedGrade: "B+", expectedStatus: "Pass", expectedPass: true },
  { score: 36, expectedGrade: "B", expectedStatus: "Good", expectedPass: true },
  { score: 40, expectedGrade: "B", expectedStatus: "Good", expectedPass: true },
  { score: 41, expectedGrade: "A", expectedStatus: "Very Good", expectedPass: true },
  { score: 45, expectedGrade: "A", expectedStatus: "Very Good", expectedPass: true },
  { score: 46, expectedGrade: "A+", expectedStatus: "Excellent", expectedPass: true },
  { score: 50, expectedGrade: "A+", expectedStatus: "Excellent", expectedPass: true },
];

boundaryTests.forEach(test => {
  const result = calculateGrade(test.score);
  assert(
    result.grade === test.expectedGrade && result.status === test.expectedStatus && result.isPassing === test.expectedPass,
    `Score ${test.score}/50 correctly yields Grade: ${test.expectedGrade}, Status: ${test.expectedStatus}, Passed: ${test.expectedPass}`
  );
});

// 4. ELIGIBILITY TESTS
console.log("\n📌 4. Testing Certificate Eligibility Central Logic...");
const allLessonIds = gitGithubCurriculum.map(u => u.id);
const allLabIds = practicalLabs.map(l => l.id);

const mockPassedAttempt: StoredAssessmentAttempt = {
  attemptId: "TECHMIYA-ATTEMPT-1",
  attemptNumber: 1,
  timestamp: new Date().toISOString(),
  studentName: "John Doe",
  studentEmail: "john@example.com",
  answers: {},
  score: 45,
  maxScore: 50,
  percentage: 90,
  grade: "A",
  status: "Very Good",
  isPassing: true,
  topicBreakdown: {},
  certificateId: "TECHMIYA-GIT-2026-TEST"
};

const mockFailedAttempt: StoredAssessmentAttempt = {
  attemptId: "TECHMIYA-ATTEMPT-2",
  attemptNumber: 1,
  timestamp: new Date().toISOString(),
  studentName: "Jane Doe",
  studentEmail: "jane@example.com",
  answers: {},
  score: 30,
  maxScore: 50,
  percentage: 60,
  grade: "Not Passed",
  status: "Retake required",
  isPassing: false,
  topicBreakdown: {}
};

// Case A: Passed assessment but 0 lessons completed -> Must fail
const caseA = getCertificateEligibility(
  { completedLessons: [], completedLabs: allLabIds, mode: "beginner" },
  mockPassedAttempt,
  allLessonIds,
  allLabIds
);
assert(!caseA.isEligible && caseA.allLessonsCompleted === false, "Certificate blocked when lessons are incomplete even if exam is passed");

// Case B: Incomplete labs -> Must fail
const caseB = getCertificateEligibility(
  { completedLessons: allLessonIds, completedLabs: allLabIds.slice(0, 10), mode: "beginner" },
  mockPassedAttempt,
  allLessonIds,
  allLabIds
);
assert(!caseB.isEligible && caseB.allLabsCompleted === false, "Certificate blocked when practical labs are incomplete");

// Case C: All lessons and labs complete, but failed assessment (30/50) -> Must fail
const caseC = getCertificateEligibility(
  { completedLessons: allLessonIds, completedLabs: allLabIds, mode: "beginner" },
  mockFailedAttempt,
  allLessonIds,
  allLabIds
);
assert(!caseC.isEligible && caseC.assessmentPassed === false, "Certificate blocked when assessment is failed (30/50)");

// Case D: All lessons, all labs, and passing assessment (31/50) -> Must PASS
const mockPass31Attempt: StoredAssessmentAttempt = {
  ...mockPassedAttempt,
  score: 31,
  percentage: 62,
  grade: "B+",
  status: "Pass",
  isPassing: true
};
const caseD = getCertificateEligibility(
  { completedLessons: allLessonIds, completedLabs: allLabIds, mode: "beginner" },
  mockPass31Attempt,
  allLessonIds,
  allLabIds
);
assert(caseD.isEligible && caseD.allLessonsCompleted && caseD.allLabsCompleted && caseD.assessmentPassed, "Certificate approved when all 100 lessons, 15 labs, and score 31/50 are achieved");

// 5. GOOGLE SHEETS TSV EXPORT TEST
console.log("\n📌 5. Testing Google Sheets TSV 18-Column Export...");
assert(GOOGLE_SHEETS_COLUMNS.length === 18, `Google Sheets header format has exactly 18 columns (actual: ${GOOGLE_SHEETS_COLUMNS.length})`);

const mockExportProgress: UserProgress = {
  completedLessons: allLessonIds,
  completedLabs: allLabIds,
  mode: "beginner"
};

const tsvRow = clipboardService.formatRow({
  attempt: mockPassedAttempt,
  progress: mockExportProgress,
  totalRequiredLessons: 100,
  totalRequiredLabs: 15,
  isCertificateEligible: true
});
const tsvColumns = tsvRow.split("\t");
assert(tsvColumns.length === 18, `Exported TSV row contains exactly 18 tab-separated values (actual: ${tsvColumns.length})`);
assert(tsvColumns[1] === "Git & GitHub: Beginner to Advanced", "Column 2: Correct Course Name");
assert(tsvColumns[2] === "John Doe", "Column 3: Correct Student Name");
assert(tsvColumns[3] === "john@example.com", "Column 4: Correct Student Email");
assert(tsvColumns[7] === "45", "Column 8: Correct Marks Obtained (45)");
assert(tsvColumns[9] === "A", "Column 10: Correct Grade (A)");
assert(tsvColumns[10] === "PASS", "Column 11: Correct Pass/Fail");
assert(tsvColumns[17] === "TECHMIYA-GIT-2026-TEST", "Column 18: Correct Certificate ID");

// 6. RESOURCES & LABS INTEGRITY
console.log("\n📌 6. Testing Verified Resources & Practical Labs...");
assert(gitGithubResources.length === 14, `All 14 candidate curriculum resources defined (actual: ${gitGithubResources.length})`);
assert(practicalLabs.length === 15, `All 15 interactive practical labs created (actual: ${practicalLabs.length})`);

const labsValid = practicalLabs.every(l => 
  l.scenario && l.prerequisites && l.startingState && l.commands.length > 0 && l.expectedResult && l.verificationSteps.length > 0 && l.troubleshooting && l.completionCriteria
);
assert(labsValid, "All 15 labs contain full scenario, prerequisites, starting state, commands, expected result, verification, troubleshooting & completion criteria");

console.log("\n=================================================");
console.log(`TEST SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} failures)`);
console.log("=================================================");

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL 38 VERIFICATION TESTS PASSED PERFECTLY!\n");
}
