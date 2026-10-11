export interface GitResource {
  id: string;
  title: string;
  url: string;
  provider: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  learningObjectives: string[];
  relatedModules: string[];
  verified: boolean;
  lastReviewed: string;
}

export const gitGithubResources: GitResource[] = [
  {
    id: "learn-git-branching",
    title: "Learn Git Branching",
    url: "https://learngitbranching.js.org/",
    provider: "Open Source Interactive Platform",
    difficulty: "All Levels",
    learningObjectives: [
      "Visualize Git branching and commit trees interactively",
      "Master branch switching, fast-forward merges, and three-way merges",
      "Practice rebasing, cherry-picking, and commit reordering visually"
    ],
    relatedModules: ["module-3", "module-7"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "github-skills",
    title: "GitHub Skills Interactive Courses",
    url: "https://skills.github.com/",
    provider: "GitHub",
    difficulty: "Beginner",
    learningObjectives: [
      "Learn Git and GitHub through hands-on repository challenges",
      "Practice GitHub Flow in real repositories",
      "Automate workflows using GitHub Actions"
    ],
    relatedModules: ["module-4", "module-5", "module-6"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "vscode-source-control",
    title: "VS Code Source Control (Git Integration)",
    url: "https://code.visualstudio.com/docs/sourcecontrol/overview",
    provider: "Microsoft",
    difficulty: "Beginner",
    learningObjectives: [
      "Use Git visually directly inside Visual Studio Code",
      "Stage, commit, and push changes using VS Code UI",
      "Resolve merge conflicts using VS Code 3-way Merge Editor"
    ],
    relatedModules: ["module-1", "module-2", "module-3"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "pro-git-book",
    title: "Pro Git Book (2nd Edition)",
    url: "https://git-scm.com/book/en/v2",
    provider: "Scott Chacon & Ben Straub (Official)",
    difficulty: "All Levels",
    learningObjectives: [
      "Comprehensive deep dive into Git architecture and commands",
      "Understand Git internals: blobs, trees, commits, and refs",
      "Learn server administration, branching patterns, and submodules"
    ],
    relatedModules: ["module-1", "module-2", "module-3", "module-7"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "git-official-doc",
    title: "Official Git Documentation & Reference",
    url: "https://git-scm.com/doc",
    provider: "Git Core Team",
    difficulty: "All Levels",
    learningObjectives: [
      "Authoritative reference for all Git CLI commands and flags",
      "Understand command syntax, flags, and return codes",
      "Technical specifications for plumbing and porcelain commands"
    ],
    relatedModules: ["module-1", "module-2", "module-3", "module-7"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "github-flow",
    title: "GitHub Flow Guide",
    url: "https://docs.github.com/en/get-started/using-github/github-flow",
    provider: "GitHub Docs",
    difficulty: "Beginner",
    learningObjectives: [
      "Master branch-based development workflow",
      "Learn team collaboration rules: branch, commit, pull request, discuss, merge, deploy",
      "Compare GitHub Flow with GitFlow and Trunk-Based Development"
    ],
    relatedModules: ["module-4", "module-5"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "github-docs",
    title: "GitHub Official Documentation",
    url: "https://docs.github.com/",
    provider: "GitHub",
    difficulty: "All Levels",
    learningObjectives: [
      "Complete guide to repositories, issues, PRs, wikis, and projects",
      "Configure branch protection rules, code owners, and repository security",
      "Manage personal access tokens, SSH keys, and deploy keys"
    ],
    relatedModules: ["module-4", "module-5", "module-7"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "ms-learn-github",
    title: "Microsoft Learn: GitHub Learning Paths",
    url: "https://learn.microsoft.com/en-us/training/github/",
    provider: "Microsoft Learn",
    difficulty: "Intermediate",
    learningObjectives: [
      "Enterprise GitHub fundamentals and DevOps integration",
      "Manage repository security and secret scanning with GitHub Advanced Security",
      "Implement governance and collaborative workflows in teams"
    ],
    relatedModules: ["module-5", "module-6", "module-7"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "skills-review-pr",
    title: "GitHub Skills: Review Pull Requests",
    url: "https://github.com/skills/review-pull-requests",
    provider: "GitHub Skills",
    difficulty: "Beginner",
    learningObjectives: [
      "Learn the art of reviewing teammate pull requests",
      "Leave actionable line-by-line comments, suggestions, and approvals",
      "Request changes with constructive feedback"
    ],
    relatedModules: ["module-4", "module-5"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "skills-intro-github",
    title: "GitHub Skills: Introduction to GitHub",
    url: "https://github.com/skills/introduction-to-github",
    provider: "GitHub Skills",
    difficulty: "Beginner",
    learningObjectives: [
      "Create your first GitHub repository from scratch",
      "Communicate with markdown and manage issues",
      "Open and merge your first pull request"
    ],
    relatedModules: ["module-4"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "skills-hello-actions",
    title: "GitHub Skills: Hello GitHub Actions",
    url: "https://github.com/skills/hello-github-actions",
    provider: "GitHub Skills",
    difficulty: "Intermediate",
    learningObjectives: [
      "Understand CI/CD automation concepts with GitHub Actions",
      "Write your first workflow YAML file (.github/workflows)",
      "Trigger workflows on push and pull_request events"
    ],
    relatedModules: ["module-6"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "skills-test-actions",
    title: "GitHub Skills: Test with Actions",
    url: "https://github.com/skills/test-with-actions",
    provider: "GitHub Skills",
    difficulty: "Intermediate",
    learningObjectives: [
      "Run automated unit and integration tests on every pull request",
      "Set up continuous integration pipelines for Python and Node.js",
      "Protect main branch by enforcing passing tests before merge"
    ],
    relatedModules: ["module-6"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "github-actions-doc",
    title: "GitHub Actions Official Documentation",
    url: "https://docs.github.com/en/actions",
    provider: "GitHub Docs",
    difficulty: "Advanced",
    learningObjectives: [
      "Master workflow syntax, matrix builds, job concurrency, and runners",
      "Manage encrypted repository secrets and environment variables securely",
      "Leverage GitHub Marketplace actions and write reusable workflows"
    ],
    relatedModules: ["module-6"],
    verified: true,
    lastReviewed: "2026-10-11"
  },
  {
    id: "skills-publish-packages",
    title: "GitHub Skills: Publish Packages",
    url: "https://github.com/skills/publish-packages",
    provider: "GitHub Skills",
    difficulty: "Advanced",
    learningObjectives: [
      "Automate software releases and tag generation",
      "Publish artifacts to GitHub Packages registry (npm, PyPI, Docker)",
      "Build continuous delivery (CD) deployment pipelines"
    ],
    relatedModules: ["module-6"],
    verified: true,
    lastReviewed: "2026-10-11"
  }
];
