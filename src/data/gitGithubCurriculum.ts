import { CurriculumUnit } from "./curriculum/types";
import { level1Units } from "./curriculum/level1";
import { level2Units } from "./curriculum/level2";
import { level3Units } from "./curriculum/level3";
import { level4Units } from "./curriculum/level4";
import { level5Units } from "./curriculum/level5";
import { level6Units } from "./curriculum/level6";
import { level7Units } from "./curriculum/level7";

export * from "./curriculum/types";

/**
 * Complete, sequential 100-unit curriculum covering Git & GitHub from Foundations to Advanced Enterprise Architecture.
 */
export const gitGithubCurriculum: CurriculumUnit[] = [
  ...level1Units, // Units 1 - 14
  ...level2Units, // Units 15 - 28
  ...level3Units, // Units 29 - 43
  ...level4Units, // Units 44 - 58
  ...level5Units, // Units 59 - 73
  ...level6Units, // Units 74 - 86
  ...level7Units, // Units 87 - 100
];

export interface CurriculumLevel {
  level: number;
  title: string;
  description: string;
  units: CurriculumUnit[];
  totalMinutes: number;
}

export const curriculumLevels: CurriculumLevel[] = [
  {
    level: 1,
    title: "Level 1 — Foundations",
    description: "What version control is, terminal basics, Git vs GitHub, first configuration, and your first commit.",
    units: level1Units,
    totalMinutes: level1Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 2,
    title: "Level 2 — Essential Git Commands",
    description: "Inspecting history, diffs, safe file recovery, tracked file management, reset, and revert.",
    units: level2Units,
    totalMinutes: level2Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 3,
    title: "Level 3 — Branching and Merging",
    description: "Fast-forward vs 3-way merges, merge conflict anatomy and resolution, rebasing, stash, and cherry-pick.",
    units: level3Units,
    totalMinutes: level3Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 4,
    title: "Level 4 — GitHub Fundamentals",
    description: "Remote repositories, SSH authentication, pushing, pulling, forks, markdown READMEs, and GitHub Pages.",
    units: level4Units,
    totalMinutes: level4Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 5,
    title: "Level 5 — Collaboration and Real Projects",
    description: "Contributing workflows, branch protection rules, CODEOWNERS, conventional commits, and team governance.",
    units: level5Units,
    totalMinutes: level5Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 6,
    title: "Level 6 — GitHub Actions and Automation",
    description: "CI/CD concepts, YAML workflows, events, runners, dependency caching, secrets, and matrix testing.",
    units: level6Units,
    totalMinutes: level6Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
  {
    level: 7,
    title: "Level 7 — Advanced Git and Security",
    description: "Git internals (objects, trees, blobs), reflog disaster recovery, submodules, LFS, GPG signatures, and security.",
    units: level7Units,
    totalMinutes: level7Units.reduce((acc, u) => acc + u.estimatedMinutes, 0),
  },
];

export function getUnitById(id: string): CurriculumUnit | undefined {
  return gitGithubCurriculum.find((u) => u.id === id);
}

export function getUnitByNumber(num: number): CurriculumUnit | undefined {
  return gitGithubCurriculum.find((u) => u.unitNumber === num);
}

export function getAllUnitIds(): string[] {
  return gitGithubCurriculum.map((u) => u.id);
}

export function getNextUnit(currentId: string): CurriculumUnit | undefined {
  const index = gitGithubCurriculum.findIndex((u) => u.id === currentId);
  if (index >= 0 && index < gitGithubCurriculum.length - 1) {
    return gitGithubCurriculum[index + 1];
  }
  return undefined;
}

export function getPrevUnit(currentId: string): CurriculumUnit | undefined {
  const index = gitGithubCurriculum.findIndex((u) => u.id === currentId);
  if (index > 0) {
    return gitGithubCurriculum[index - 1];
  }
  return undefined;
}
