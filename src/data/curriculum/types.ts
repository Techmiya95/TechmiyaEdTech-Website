export interface CommandWalkthrough {
  command: string;
  explanation: string;
  expectedOutput: string;
}

export interface ErrorFix {
  error: string;
  fix: string;
}

export interface InterviewQnA {
  question: string;
  answer: string;
}

export interface ChapterQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface OfficialRef {
  title: string;
  url: string;
}

export interface CurriculumUnit {
  id: string; // e.g., "unit-01", ..., "unit-100"
  unitNumber: number; // 1 to 100
  level: number; // 1 to 7
  levelTitle: string;
  title: string;
  slug: string;
  estimatedMinutes: number;
  topics: string[];
  learningObjectives: string[];
  simpleExplanation: string;
  analogy: string;
  technicalExplanation: string;
  syntaxAndCommands: string[];
  walkthrough: CommandWalkthrough[];
  practicalExercise: string;
  commonErrorsAndFixes: ErrorFix[];
  industryUseCase: string;
  interviewQuestions: InterviewQnA[];
  quiz: ChapterQuiz;
  officialReference: OfficialRef;
  checklist: string[];
}
