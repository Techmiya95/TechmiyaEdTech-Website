import { CurriculumUnit } from "./types";

export const level5Units: CurriculumUnit[] = [
  {
    id: "unit-59",
    unitNumber: 59,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Contributing to an Existing Repository: The Professional Workflow",
    slug: "contributing-to-existing-repository",
    estimatedMinutes: 18,
    topics: ["Contribution Guidelines", "CONTRIBUTING.md", "Branching Strategy", "Opening PRs"],
    learningObjectives: [
      "Follow repository contribution guidelines (`CONTRIBUTING.md`) before writing code",
      "Clone, configure branch, implement feature, and run local test suite",
      "Submit clean pull requests that adhere to team coding and commit conventions"
    ],
    simpleExplanation: "Joining a team codebase is like visiting a new friend's house. You don't rearrange their furniture without asking. You read their rules (`CONTRIBUTING.md`), wipe your shoes (run tests), and ask before making big changes.",
    analogy: "Following the house rules and style guide of an established engineering workshop.",
    technicalExplanation: "Open-source and enterprise repositories mandate automated linters, unit tests, and specific branch-naming structures. Adhering to `CONTRIBUTING.md` ensures your pull request is welcomed and reviewed promptly.",
    syntaxAndCommands: ["cat CONTRIBUTING.md", "npm test", "npm run lint"],
    walkthrough: [
      {
        command: "npm test",
        explanation: "Always run project test suite locally to verify baseline health before editing code.",
        expectedOutput: "PASS src/utils/gradeCalculator.test.ts (10 tests passed)"
      }
    ],
    practicalExercise: "Find the `CONTRIBUTING.md` file in a popular GitHub repository and identify their guidelines for commit messages and testing.",
    commonErrorsAndFixes: [
      {
        error: "Submitting a PR with failing automated tests.",
        fix: "Always run the local test command (`npm test` / `pytest`) on your branch before pushing to GitHub."
      }
    ],
    industryUseCase: "Kubernetes contributors who follow `CONTRIBUTING.md` have their PRs merged in days, while unformatted PRs remain stalled for months.",
    interviewQuestions: [
      {
        question: "What is the purpose of a `CONTRIBUTING.md` file in a GitHub repository?",
        answer: "It outlines the developer guidelines for proposing bug fixes and features, including local setup, testing standards, branching conventions, and code of conduct."
      }
    ],
    quiz: {
      question: "Which file in a repository root documents how developers should submit code, run tests, and format commits?",
      options: [
        "LICENSE",
        "CONTRIBUTING.md",
        ".gitignore",
        "package.json"
      ],
      correctIndex: 1,
      explanation: "`CONTRIBUTING.md` provides explicit guidelines for external and internal contributors."
    },
    officialReference: {
      title: "GitHub Docs: Setting guidelines for repository contributors",
      url: "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors"
    },
    checklist: [
      "I check for CONTRIBUTING.md when joining a repo",
      "I run tests locally before pushing",
      "I match the project's commit and coding style"
    ]
  },
  {
    id: "unit-60",
    unitNumber: 60,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Managing Remote Upstreams & Keeping Local Branches in Sync",
    slug: "managing-remote-upstreams-sync",
    estimatedMinutes: 18,
    topics: ["Upstream Sync", "git fetch upstream", "Syncing Forks", "Rebasing onto Upstream"],
    learningObjectives: [
      "Maintain active synchronization with the parent `upstream` repository",
      "Rebase active feature branches on top of `upstream/main` to absorb teammate commits",
      "Prevent stale branches from accumulating painful merge conflicts"
    ],
    simpleExplanation: "While you're working on your feature for three days, your teammates have already merged 20 other features into the main project. Syncing upstream keeps your laptop up to date so there are no surprises.",
    analogy: "Checking the news every morning so you know what happened while you were asleep.",
    technicalExplanation: "Fetching upstream updates (`git fetch upstream`) downloads new remote refs into `refs/remotes/upstream/`. Rebasing your feature branch (`git rebase upstream/main`) integrates latest changes seamlessly.",
    syntaxAndCommands: [
      "git fetch upstream",
      "git switch main",
      "git merge upstream/main",
      "git switch feature && git rebase main"
    ],
    walkthrough: [
      {
        command: "git fetch upstream",
        explanation: "Fetch latest commits from original upstream repository.",
        expectedOutput: "From https://github.com/upstream/repo\n * [new branch]      main       -> upstream/main"
      },
      {
        command: "git switch main && git merge --ff-only upstream/main",
        explanation: "Fast-forward local main to match upstream exactly.",
        expectedOutput: "Updating 4a7c19f..3b18e51\nFast-forward"
      }
    ],
    practicalExercise: "Practice the 3-step sync sequence: fetch upstream, fast-forward main, and rebase your feature branch.",
    commonErrorsAndFixes: [
      {
        error: "Committing work directly on your local `main` branch when using a fork.",
        fix: "Never commit directly to `main`! Keep `main` pure and identical to upstream. Always create a feature branch for your work."
      }
    ],
    industryUseCase: "Engineers working on large open source frameworks rebase their branches on upstream main daily to catch API breaking changes immediately.",
    interviewQuestions: [
      {
        question: "Why should you keep your local `main` branch synchronized with `upstream/main` rather than working on `main` directly?",
        answer: "Keeping local `main` pure and identical to upstream allows seamless fast-forward updates and guarantees clean branching points for new features."
      }
    ],
    quiz: {
      question: "Which command updates your local `main` to match `upstream/main` strictly via fast-forward without creating unnecessary merge commits?",
      options: [
        "git merge --ff-only upstream/main",
        "git push upstream main",
        "git clean -fd",
        "git reset --soft"
      ],
      correctIndex: 0,
      explanation: "`git merge --ff-only upstream/main` guarantees that `main` only advances if it can be done linearly."
    },
    officialReference: {
      title: "GitHub Docs: Syncing a fork",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"
    },
    checklist: [
      "I keep my local main in sync with upstream",
      "I never commit directly to local main in a fork",
      "I rebase feature branches on upstream/main regularly"
    ]
  },
  {
    id: "unit-61",
    unitNumber: 61,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Configuring GitHub Branch Protection Rules (Require PRs, Passing CI, Linear History)",
    slug: "github-branch-protection-rules",
    estimatedMinutes: 20,
    topics: ["Branch Protection", "Require Approvals", "Required Status Checks", "Enforce Linear History", "Restrict Force Pushes"],
    learningObjectives: [
      "Configure branch protection on `main` and release branches",
      "Require at least 1 or 2 code review approvals before merge",
      "Require passing automated CI test status checks before the merge button enables",
      "Block direct force-pushes (`git push --force`) completely"
    ],
    simpleExplanation: "Branch protection is a digital bouncer at the door of your `main` branch. It physically disables the merge button unless all tests pass and a senior developer signs off.",
    analogy: "Two bank officers must both turn their keys simultaneously before the vault opens.",
    technicalExplanation: "GitHub Branch Protection Rules enforce repository governance. They validate review count, enforce codeowner reviews, require status checks from webhooks/Actions to report `success`, and reject non-fast-forward pushes.",
    syntaxAndCommands: [
      "Settings -> Branches -> Add branch protection rule",
      "Rule target: main",
      "Require a pull request before merging",
      "Require status checks to pass before merging"
    ],
    walkthrough: [
      {
        command: "git push origin main",
        explanation: "Test protection rule: Direct push to main is rejected by GitHub bouncer.",
        expectedOutput: "remote: error: GH006: Protected branch update failed for refs/heads/main.\nremote: error: At least 1 approving review is required by reviewers with write access.\nTo https://github.com/org/repo.git\n ! [remote rejected] main -> main (protected branch hook declined)"
      }
    ],
    practicalExercise: "Enable Branch Protection on `main` in your GitHub repository and check 'Require a pull request before merging'.",
    commonErrorsAndFixes: [
      {
        error: "Admins bypassing branch rules accidentally.",
        fix: "Check the setting 'Do not allow bypassing the above settings' to enforce rules even for repository administrators."
      }
    ],
    industryUseCase: "Fintech companies use branch protection to comply with financial auditing regulations requiring four-eyes review on all money-handling code.",
    interviewQuestions: [
      {
        question: "Why should software engineering teams enforce Branch Protection Rules?",
        answer: "To prevent accidental direct pushes to production, ensure all code is peer-reviewed, enforce automated test validation, and prevent catastrophic history rewrites via force-pushes."
      }
    ],
    quiz: {
      question: "Which setting in GitHub Branch Protection Rules prevents developers from running `git push --force` against `main`?",
      options: [
        "Include administrators",
        "Block force pushes (enabled by default)",
        "Enable secret scanning",
        "Allow auto-merge"
      ],
      correctIndex: 1,
      explanation: "Branch protection blocks force pushes by default to preserve linear history integrity."
    },
    officialReference: {
      title: "GitHub Docs: Managing a branch protection rule",
      url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"
    },
    checklist: [
      "I know how to set up branch protection rules",
      "I require passing CI tests before merge",
      "I protect main from force-pushes"
    ]
  },
  {
    id: "unit-62",
    unitNumber: 62,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Code Owners (`CODEOWNERS`): Automatically Assigning Specialized Reviewers",
    slug: "codeowners-automatic-reviewer-assignment",
    estimatedMinutes: 15,
    topics: ["CODEOWNERS file", "Path Mapping", "Automated Reviewers", "Security Sign-Off"],
    learningObjectives: [
      "Create a `.github/CODEOWNERS` file to map directories to specific developers or teams",
      "Enforce mandatory review sign-off for security-sensitive paths (e.g. `/auth/`, `/payments/`)",
      "Understand path syntax precedence in CODEOWNERS"
    ],
    simpleExplanation: "If someone changes the database or billing code, you want the billing specialist to review it automatically. `CODEOWNERS` is a rulebook that says: 'If you touch this folder, ask this person for approval.'",
    analogy: "Like a hospital routing patient charts to the cardiologist when heart medications are adjusted.",
    technicalExplanation: "GitHub automatically requests reviews from code owners when a PR touches files matching paths in `.github/CODEOWNERS`. Combined with branch protection, codeowner approval can be made strictly mandatory.",
    syntaxAndCommands: [
      "touch .github/CODEOWNERS",
      "# Example syntax:",
      "* @techmiya/core-team",
      "/src/api/payment/ @security-lead",
      "*.sql @database-admin"
    ],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/CODEOWNERS\n# Global fallback owners\n* @techmiya-lead\n# Security critical code\n/src/utils/validation.ts @security-team\nEOF",
        explanation: "Define codeowner routing rules.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Create a `.github/CODEOWNERS` file in a repository and map your GitHub username as owner for all `*.ts` files.",
    commonErrorsAndFixes: [
      {
        error: "CODEOWNERS file placed in wrong folder.",
        fix: "The file must be named `CODEOWNERS` (no extension) and placed in `.github/`, root `/`, or `docs/`."
      }
    ],
    industryUseCase: "Shopify uses `CODEOWNERS` across thousands of engineers to ensure checkout performance experts review any change touching checkout pipelines.",
    interviewQuestions: [
      {
        question: "Where should the `CODEOWNERS` file be located in a repository?",
        answer: "Inside the `.github/` directory (recommended), the root directory `/`, or the `docs/` directory."
      }
    ],
    quiz: {
      question: "What happens when a pull request modifies a file covered by a rule in `.github/CODEOWNERS`?",
      options: [
        "The pull request is immediately rejected.",
        "GitHub automatically adds the designated code owner as a required reviewer on the PR.",
        "The file is deleted from the pull request.",
        "The author receives an automated penalty score."
      ],
      correctIndex: 1,
      explanation: "GitHub automatically requests review from the specified code owner team or user."
    },
    officialReference: {
      title: "GitHub Docs: About code owners",
      url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"
    },
    checklist: [
      "I know where to place the CODEOWNERS file",
      "I can map directory paths to teams and users",
      "I understand how it pairs with branch protection"
    ]
  },
  {
    id: "unit-63",
    unitNumber: 63,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Conventional Commits in Team Workflows (`feat`, `fix`, `docs`, `chore`, `refactor`)",
    slug: "conventional-commits-specification",
    estimatedMinutes: 18,
    topics: ["Conventional Commits", "Semantic Release", "feat / fix / chore / docs", "Breaking Changes BREAKING CHANGE:"],
    learningObjectives: [
      "Apply the Conventional Commits 1.0.0 specification across all commits",
      "Master common commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`",
      "Document breaking API changes using `!` or `BREAKING CHANGE:` footers for automated SemVer bumps"
    ],
    simpleExplanation: "Instead of writing whatever comes to mind, teams use a shared grammar: `feat:` for new features, `fix:` for bug fixes, `docs:` for documentation. Computers can read this and automatically write release notes!",
    analogy: "Standardized medical prescription shorthand that all doctors and pharmacists understand worldwide.",
    technicalExplanation: "Conventional Commits structure: `<type>[optional scope]: <description>\\n\\n[optional body]\\n\\n[optional footer(s)]`. Tools like semantic-release parse this structure to automate SemVer incrementing and changelog generation.",
    syntaxAndCommands: [
      "feat(auth): add OAuth2 Google login",
      "fix(ui): resolve button clipping on mobile",
      "docs(readme): update installation steps",
      "chore(deps): bump next from 15.0 to 16.0"
    ],
    walkthrough: [
      {
        command: "git commit -m \"feat(cert): generate downloadable PDF completion certificates\"",
        explanation: "Commit following conventional commit standard.",
        expectedOutput: "[main 2a0911f] feat(cert): generate downloadable PDF completion certificates"
      }
    ],
    practicalExercise: "Write 4 commit messages adhering strictly to Conventional Commits for: fixing a bug, adding a new feature, updating a README, and updating dependencies.",
    commonErrorsAndFixes: [
      {
        error: "Capitalizing the type (e.g. `Feat: ...` or `FIX: ...`).",
        fix: "Conventional Commits types MUST be lowercase: `feat:`, `fix:`, `docs:`, `chore:`."
      }
    ],
    industryUseCase: "Angular, Vue, Next.js, and hundreds of top software libraries generate their entire GitHub release notes automatically using Conventional Commits.",
    interviewQuestions: [
      {
        question: "How does Conventional Commits enable automated software releases?",
        answer: "By determining the SemVer bump automatically: `fix` triggers a PATCH release, `feat` triggers a MINOR release, and `BREAKING CHANGE:` triggers a MAJOR release."
      }
    ],
    quiz: {
      question: "According to Conventional Commits, which type should be used when fixing a software bug?",
      options: [
        "bug:",
        "fix:",
        "patch:",
        "repair:"
      ],
      correctIndex: 1,
      explanation: "`fix:` is the designated type for bug repairs that map to SemVer patch bumps."
    },
    officialReference: {
      title: "Conventional Commits 1.0.0 Specification",
      url: "https://www.conventionalcommits.org/en/v1.0.0/"
    },
    checklist: [
      "I know the core types: feat, fix, docs, chore, refactor",
      "I structure messages as type(scope): description",
      "I know how breaking changes trigger major version bumps"
    ]
  },
  {
    id: "unit-64",
    unitNumber: 64,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Creating Pull Request Templates (`.github/pull_request_template.md`)",
    slug: "pull-request-templates",
    estimatedMinutes: 15,
    topics: ["PR Templates", "Checklists", "Testing Instructions", ".github Directory"],
    learningObjectives: [
      "Create a standardized `.github/pull_request_template.md`",
      "Prompt contributors for description, issue links, test verification, and screenshots",
      "Elevate repository code quality and review speed"
    ],
    simpleExplanation: "When someone opens a new Pull Request, GitHub automatically fills their text box with your template questions: 'What did you change? Did you run tests? Did you include screenshots?'",
    analogy: "A standardized job application form ensuring every applicant provides all necessary documents up front.",
    technicalExplanation: "GitHub checks `.github/pull_request_template.md` and pre-populates the PR description textarea upon creation. Multiple templates can also be configured under `.github/PULL_REQUEST_TEMPLATE/`.",
    syntaxAndCommands: ["touch .github/pull_request_template.md"],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/pull_request_template.md\n## Description\n<!-- What problem does this PR solve? -->\n\n## Related Issue\nFixes #\n\n## Checklist\n- [ ] My code passes local tests (`npm test`)\n- [ ] I followed Conventional Commits\n- [ ] I added documentation where needed\nEOF",
        explanation: "Author production PR template file.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Create a `.github/pull_request_template.md` file in your repository and open a test PR to see it auto-populate.",
    commonErrorsAndFixes: [
      {
        error: "PR template doesn't load when opening a PR on GitHub.",
        fix: "Check spelling and path: `.github/pull_request_template.md` (lowercase with underscores)."
      }
    ],
    industryUseCase: "Microsoft and Airbnb use PR templates requiring contributors to confirm accessibility, performance, and internationalization audits before code review.",
    interviewQuestions: [
      {
        question: "Where should the pull request template file be placed in a GitHub repository?",
        answer: "Inside the `.github/` folder as `pull_request_template.md`, in the root directory, or in the `docs/` directory."
      }
    ],
    quiz: {
      question: "What is the primary benefit of a Pull Request Template?",
      options: [
        "It automatically writes the code for the pull request.",
        "It guides contributors to provide all required context, issue links, and test verification up front.",
        "It speeds up git clone performance.",
        "It hides the code from search engines."
      ],
      correctIndex: 1,
      explanation: "PR templates standardize quality checklists and context for reviewers."
    },
    officialReference: {
      title: "GitHub Docs: Creating a pull request template for your repository",
      url: "https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository"
    },
    checklist: [
      "I know where to place pull_request_template.md",
      "I include issue links and testing checklists",
      "I use templates to streamline team code reviews"
    ]
  },
  {
    id: "unit-65",
    unitNumber: 65,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Creating Structured Issue Templates (`.github/ISSUE_TEMPLATE/*.yml`)",
    slug: "structured-issue-templates",
    estimatedMinutes: 15,
    topics: ["Issue Forms", "YAML Form Schemas", "Bug Reports vs Feature Requests", "Required Fields"],
    learningObjectives: [
      "Build structured GitHub Issue Forms using modern YAML syntax",
      "Create distinct forms for 'Bug Report' and 'Feature Request'",
      "Enforce mandatory input fields (e.g. reproduction steps, OS, browser)"
    ],
    simpleExplanation: "Instead of letting users submit a blank issue saying 'Broken', Issue Forms give them neat text fields, dropdown menus, and checkboxes so you get the exact information needed to fix bugs.",
    analogy: "Like a structured doctor's patient intake form instead of a blank sheet of paper.",
    technicalExplanation: "GitHub Issue Forms are configured via `.github/ISSUE_TEMPLATE/*.yml`. They render interactive web forms with validation attributes (`validations: required: true`), dropdowns, and markdown text areas.",
    syntaxAndCommands: ["mkdir -p .github/ISSUE_TEMPLATE", "touch .github/ISSUE_TEMPLATE/bug_report.yml"],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/ISSUE_TEMPLATE/bug_report.yml\nname: Bug Report\ndescription: File a reproducible bug report\nbody:\n  - type: textarea\n    id: repro\n    attributes:\n      label: Steps to Reproduce\n    validations:\n      required: true\nEOF",
        explanation: "Create YAML issue form definition.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Create `.github/ISSUE_TEMPLATE/bug_report.yml` and test creating a new issue on GitHub to view the custom form.",
    commonErrorsAndFixes: [
      {
        error: "YAML indentation error in issue template.",
        fix: "YAML is strictly indentation-sensitive. Use exactly 2 spaces per indentation level and never use tab characters."
      }
    ],
    industryUseCase: "React and Next.js require all bug reports to provide a minimal runnable StackBlitz reproduction link before maintainers will inspect the issue.",
    interviewQuestions: [
      {
        question: "What is the advantage of GitHub YAML Issue Forms over traditional markdown issue templates?",
        answer: "YAML Issue Forms provide structured UI controls (dropdowns, checkboxes, text fields) with mandatory field validation, preventing incomplete or spam bug submissions."
      }
    ],
    quiz: {
      question: "Which file format is used to define modern GitHub Issue Forms with structured fields and dropdowns?",
      options: [
        "XML",
        "YAML (.yml)",
        "SQL",
        "HTML"
      ],
      correctIndex: 1,
      explanation: "GitHub Issue Forms are authored in YAML under `.github/ISSUE_TEMPLATE/`."
    },
    officialReference: {
      title: "GitHub Docs: Syntax for GitHub's form schema",
      url: "https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema"
    },
    checklist: [
      "I know how to create YAML issue form templates",
      "I require reproduction steps for bug reports",
      "I organize templates in .github/ISSUE_TEMPLATE/"
    ]
  },
  {
    id: "unit-66",
    unitNumber: 66,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Writing Constructive, Empathetic Code Review Comments",
    slug: "constructive-code-review-etiquette",
    estimatedMinutes: 15,
    topics: ["Code Review Empathy", "Nitpicks vs Blockers", "Question vs Demand", "Psychological Safety"],
    learningObjectives: [
      "Deliver actionable feedback that elevates code quality while fostering psychological safety",
      "Prefix minor feedback with labels like `[Nitpick]` or `[Optional]` to distinguish non-blockers",
      "Ask clarifying questions rather than making aggressive demands"
    ],
    simpleExplanation: "A great code reviewer critiques the code, never the person. Instead of 'You wrote bad code', say: 'Could we handle the empty list case here to avoid an unhandled error? Here is an idea: ...'",
    analogy: "Like a skilled music producer coaching a musician to deliver their best vocal take in a recording studio.",
    technicalExplanation: "High-performing engineering teams adopt conventional comment tagging (`nit:`, `suggestion:`, `question:`, `issue:`) to clearly communicate severity and intent during async code reviews.",
    syntaxAndCommands: [
      "nit: consider renaming this variable for clarity",
      "question: what happens if the user has no permissions here?",
      "suggestion: we can use Array.prototype.find here for O(N) lookup"
    ],
    walkthrough: [
      {
        command: "echo 'nit: consider destructuring props here for consistency with other components.'",
        explanation: "Example of clear, low-severity non-blocking review comment.",
        expectedOutput: "nit: consider destructuring props here for consistency with other components."
      }
    ],
    practicalExercise: "Rephrase three harsh review comments into constructive, empathetic peer suggestions.",
    commonErrorsAndFixes: [
      {
        error: "Treating small cosmetic style preferences as blockers that stall a feature for days.",
        fix: "Automate code style with Prettier and ESLint. Reserve human review energy for architecture, security, logic, and edge cases."
      }
    ],
    industryUseCase: "Engineering teams with high psychological safety and empathetic review cultures produce 40% fewer production defects and enjoy higher retention.",
    interviewQuestions: [
      {
        question: "How do you handle disagreements with a peer during a Pull Request code review?",
        answer: "Step back from personal opinions, refer to objective project standards and architecture guidelines, seek data/benchmarks, and if needed, hop on a quick 5-minute video call to align."
      }
    ],
    quiz: {
      question: "What is the recommended approach for minor cosmetic feedback in a code review?",
      options: [
        "Reject the pull request immediately.",
        "Label it clearly as a non-blocking nitpick (e.g. `nit: ...`) so it doesn't block critical progress.",
        "Tag the CEO of the company.",
        "Never say anything ever."
      ],
      correctIndex: 1,
      explanation: "Prefixing with `nit:` clarifies that the feedback is a minor optional polish rather than a deployment blocker."
    },
    officialReference: {
      title: "Google Engineering Practices: How to do a code review",
      url: "https://google.github.io/eng-practices/review/reviewer/"
    },
    checklist: [
      "I critique the code, not the person",
      "I distinguish between blockers and non-blocking nits",
      "I praise good solutions in peer PRs"
    ]
  },
  {
    id: "unit-67",
    unitNumber: 67,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Multi-Contributor Conflict Resolution & Handling Divergent Pushes",
    slug: "multi-contributor-conflict-resolution",
    estimatedMinutes: 20,
    topics: ["Divergent Branches", "Team Collaboration", "Merge Strategies", "Rebase Reconciliation"],
    learningObjectives: [
      "Diagnose when multiple developers touch overlapping modules simultaneously",
      "Coordinate communication channels before resolving team merge conflicts",
      "Preserve teammate work while integrating personal changes"
    ],
    simpleExplanation: "When two developers work on the same file at the same time, Git will flag a conflict. The key to resolving it is talking to your teammate to agree on how both features should fit together.",
    analogy: "Two authors writing chapters that introduce the same character; they sit down together to align their story outlines.",
    technicalExplanation: "Resolving team conflicts requires understanding the intention of both sides (`ours` vs `theirs`). Running `git log --left-right --graph branchA...branchB` visualizes the commits unique to each contributor.",
    syntaxAndCommands: [
      "git log --left-right --graph main...feature",
      "git fetch origin",
      "git pull --rebase origin main"
    ],
    walkthrough: [
      {
        command: "git log --oneline --left-right HEAD...origin/main",
        explanation: "Inspect symmetric difference showing commits on local (<) vs commits on remote (>).",
        expectedOutput: "< 8fa12cd feat: local shopping cart logic\n> 3b18e51 feat: teammate checkout payment webhook"
      }
    ],
    practicalExercise: "Simulate a multi-contributor workflow by modifying the same line in two separate local branches and reconciling them.",
    commonErrorsAndFixes: [
      {
        error: "Blindly selecting 'Accept Current Change' in VS Code without reading what your teammate wrote.",
        fix: "Never delete a teammate's code without understanding it! Integrate both sets of logic so neither feature breaks."
      }
    ],
    industryUseCase: "During major product launches, feature squads hold 15-minute daily merge syncs to coordinate dependencies across teams.",
    interviewQuestions: [
      {
        question: "How do you inspect which commits exist only on your local branch vs only on the remote branch?",
        answer: "Use the symmetric difference syntax: `git log --left-right --oneline HEAD...origin/main`."
      }
    ],
    quiz: {
      question: "What does `git log HEAD...origin/main` display?",
      options: [
        "All commits since the repository was initialized.",
        "The symmetric difference: commits unique to your branch and commits unique to origin/main.",
        "Only untracked files.",
        "Your operating system logs."
      ],
      correctIndex: 1,
      explanation: "Triple-dot (`...`) syntax displays commits reachable from either ref, but not from both."
    },
    officialReference: {
      title: "Git SCM: Revision Selection - Commit Ranges",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_commit_ranges"
    },
    checklist: [
      "I communicate with teammates during complex conflicts",
      "I use git log symmetric difference to compare branches",
      "I verify both contributors' features work together"
    ]
  },
  {
    id: "unit-68",
    unitNumber: 68,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Fixing Rejected Pushes Gracefully with Rebase",
    slug: "fixing-rejected-pushes-with-rebase",
    estimatedMinutes: 18,
    topics: ["Rejected Push", "! [rejected]", "git pull --rebase", "Linear History", "No Merge Bubbles"],
    learningObjectives: [
      "Recognize the classic Git error: `! [rejected] (fetch first)`",
      "Understand why running plain `git pull` creates ugly micro-merge commits ('Merge branch main of...')",
      "Resolve the rejection gracefully using `git pull --rebase origin <branch>`"
    ],
    simpleExplanation: "When you try to push your work, Git says 'Wait! Your teammate pushed code 5 minutes ago that you don't have yet.' Instead of making an ugly merge bubble, `git pull --rebase` slides your new commits neatly on top.",
    analogy: "Getting in line at the grocery store: stepping in behind the customer who arrived right before you.",
    technicalExplanation: "When a remote ref has advanced, a push is rejected to prevent non-fast-forward loss. `git pull --rebase` fetches remote commits and replays your local commits on top of them, creating a clean linear history.",
    syntaxAndCommands: [
      "git push origin main (fails)",
      "git pull --rebase origin main",
      "git push origin main (succeeds)"
    ],
    walkthrough: [
      {
        command: "git pull --rebase origin main",
        explanation: "Fetch remote work and replay local commits on top.",
        expectedOutput: "From https://github.com/org/repo\n * branch            main       -> FETCH_HEAD\nSuccessfully rebased and updated refs/heads/main."
      },
      {
        command: "git push origin main",
        explanation: "Push now succeeds because history is linear and up to date.",
        expectedOutput: "Writing objects: 100% (3/3), done.\nTo https://github.com/org/repo.git\n   3b18e51..8fa12cd  main -> main"
      }
    ],
    practicalExercise: "Follow Practical Lab 12 to deliberately resolve a rejected push using `git pull --rebase`.",
    commonErrorsAndFixes: [
      {
        error: "Force-pushing (`git push -f`) when a push is rejected.",
        fix: "NEVER force-push over a rejected push on a shared branch! That literally overwrites and destroys your teammate's commits. Rebase instead."
      }
    ],
    industryUseCase: "Engineering team style guides mandate `git pull --rebase` globally to eradicate 'Merge branch of github.com' clutter from repository history.",
    interviewQuestions: [
      {
        question: "Why does Git reject a push with `! [rejected] (fetch first)` and how should you resolve it?",
        answer: "The remote contains commits that do not exist in your local branch. Resolve it by fetching and integrating remote changes, preferably using `git pull --rebase origin <branch>`."
      }
    ],
    quiz: {
      question: "Which command gracefully resolves a rejected push while maintaining a clean, linear git history without extra merge commits?",
      options: [
        "git push --force",
        "git pull --rebase origin <branch>",
        "git reset --hard",
        "git delete origin"
      ],
      correctIndex: 1,
      explanation: "`git pull --rebase` fetches remote commits and replays your local commits on top."
    },
    officialReference: {
      title: "GitHub Docs: Dealing with non-fast-forward errors",
      url: "https://docs.github.com/en/get-started/using-git/dealing-with-non-fast-forward-errors"
    },
    checklist: [
      "I recognize why pushes are rejected",
      "I use git pull --rebase instead of plain pull",
      "I never force-push to resolve a rejected push"
    ]
  },
  {
    id: "unit-69",
    unitNumber: 69,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Recovering from Common Collaboration Failures (Accidental Commits & Wrong Branch)",
    slug: "recovering-from-collaboration-failures",
    estimatedMinutes: 20,
    topics: ["Accidental Commits", "Committed to Wrong Branch", "Moving Commits", "Unstaging Mistakes"],
    learningObjectives: [
      "Move commits that were accidentally committed directly onto `main` to a new feature branch",
      "Reset `main` back to clean upstream state without losing any work",
      "Recover from accidental file commits before pushing"
    ],
    simpleExplanation: "We've all done it: you spent 2 hours writing code, committed it, and suddenly realized: 'Oh no, I'm on main, not on my feature branch!'. You can move those commits to a feature branch in 3 easy commands.",
    analogy: "Putting your groceries in the wrong shopping bag; you simply transfer the items into the correct bag before leaving.",
    technicalExplanation: "Create a new branch at the current commit (`git branch feature/my-work`). HEAD and the new branch both point to the commit. Then reset `main` backwards to origin (`git reset --hard origin/main`). Finally switch to your feature branch (`git switch feature/my-work`).",
    syntaxAndCommands: [
      "git branch feature/my-work (saves commits)",
      "git reset --hard origin/main (resets main)",
      "git switch feature/my-work (continues work)"
    ],
    walkthrough: [
      {
        command: "git branch feature/accidental-work",
        explanation: "Create new branch at current commit point, preserving the work.",
        expectedOutput: ""
      },
      {
        command: "git reset --hard HEAD~1",
        explanation: "Rewind main back 1 commit to pristine clean state.",
        expectedOutput: "HEAD is now at 3b18e51 chore: update dependencies"
      },
      {
        command: "git switch feature/accidental-work",
        explanation: "Switch to feature branch where the commit is safely waiting.",
        expectedOutput: "Switched to branch 'feature/accidental-work'"
      }
    ],
    practicalExercise: "Simulate making a commit on `main` and moving it cleanly onto a new branch using the 3-step recovery recipe.",
    commonErrorsAndFixes: [
      {
        error: "Running `git reset --hard` BEFORE creating the new branch.",
        fix: "If you reset first, use `git reflog` immediately to find the commit hash and attach a branch to it: `git branch recovery <hash>`."
      }
    ],
    industryUseCase: "Every professional developer uses this recovery pattern regularly when switching between hotfixes and feature development.",
    interviewQuestions: [
      {
        question: "How do you move a commit that was accidentally committed to `main` over to a new feature branch?",
        answer: "1. Create the new branch at current HEAD (`git branch <feature>`), 2. Reset `main` back (`git reset --hard HEAD~1` or `origin/main`), 3. Switch to the feature branch (`git switch <feature>`)."
      }
    ],
    quiz: {
      question: "Which command records a new branch pointer at your current commit WITHOUT switching to it yet?",
      options: [
        "git branch <name>",
        "git switch <name>",
        "git checkout <name>",
        "git tag <name>"
      ],
      correctIndex: 0,
      explanation: "`git branch <name>` creates the branch pointer at the current commit while leaving your active branch unchanged."
    },
    officialReference: {
      title: "Git SCM: Undoing Things",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things"
    },
    checklist: [
      "I know the 3-step recipe to move commits off main",
      "I know how to reset main back to origin/main",
      "I know reflog protects against reset mistakes"
    ]
  },
  {
    id: "unit-70",
    unitNumber: 70,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Managing Large Teams: Permissions, Roles, and Repository Governance",
    slug: "managing-teams-permissions-governance",
    estimatedMinutes: 18,
    topics: ["GitHub Roles", "Read / Triage / Write / Maintain / Admin", "Least Privilege", "Team Sync"],
    learningObjectives: [
      "Understand the 5 GitHub repository permission levels (Read, Triage, Write, Maintain, Admin)",
      "Apply the Principle of Least Privilege across engineering departments",
      "Structure nested GitHub Teams to streamline permission management"
    ],
    simpleExplanation: "In a company with 100 people, not everyone should have the power to delete repositories or change billing. Junior developers get Write access; project managers get Triage access; team leads get Admin access.",
    analogy: "Security keycard clearance in a hospital: nurses, doctors, pharmacists, and directors each have access only to the doors they need.",
    technicalExplanation: "GitHub Role-Based Access Control (RBAC): Read (clone/view), Triage (manage issues/labels without push), Write (push to non-protected branches), Maintain (manage repository settings without sensitive actions), Admin (full repository ownership).",
    syntaxAndCommands: [
      "Roles: Read, Triage, Write, Maintain, Admin",
      "Principle of Least Privilege (PoLP)"
    ],
    walkthrough: [
      {
        command: "gh api /repos/Techmiya-Ed-Tech/Techmiya-Ed-Tech-Website/collaborators",
        explanation: "Inspect repository collaborator access levels via GitHub CLI/API.",
        expectedOutput: "[ { \"login\": \"lead\", \"permissions\": { \"admin\": true } } ]"
      }
    ],
    practicalExercise: "Draft a permissions matrix for a software startup with: 2 Founders, 5 Developers, 2 QA Testers, and 1 Product Manager.",
    commonErrorsAndFixes: [
      {
        error: "Giving Admin access to all team members.",
        fix: "Grant Write access to developers and reserve Admin for engineering directors to prevent accidental repository setting overrides."
      }
    ],
    industryUseCase: "Enterprise organizations connect GitHub Enterprise to Okta or Azure Active Directory for automated onboarding and offboarding.",
    interviewQuestions: [
      {
        question: "Explain the difference between the 'Triage' and 'Write' roles on GitHub.",
        answer: "'Triage' allows managing issues, labels, and discussions without push access to code. 'Write' includes full code push permissions to non-protected branches."
      }
    ],
    quiz: {
      question: "Which GitHub permission role allows managing issues and pull requests (closing, labeling) WITHOUT granting write access to push code?",
      options: [
        "Read",
        "Triage",
        "Write",
        "Maintain"
      ],
      correctIndex: 1,
      explanation: "The Triage role is tailored for issue managers, triagers, and QA testers who do not author code directly."
    },
    officialReference: {
      title: "GitHub Docs: Repository roles for an organization",
      url: "https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    checklist: [
      "I know the 5 repository permission tiers",
      "I apply the Principle of Least Privilege",
      "I understand how teams simplify access control"
    ]
  },
  {
    id: "unit-71",
    unitNumber: 71,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Git Hooks Architecture: Client-Side vs. Server-Side Hooks",
    slug: "git-hooks-architecture",
    estimatedMinutes: 18,
    topics: [".git/hooks", "Client Hooks (pre-commit, commit-msg)", "Server Hooks (pre-receive)", "Bypassing with --no-verify"],
    learningObjectives: [
      "Explore the `.git/hooks/` directory and hook script templates",
      "Understand Client-side hooks (`pre-commit`, `commit-msg`, `pre-push`)",
      "Understand Server-side hooks (`pre-receive`, `update`, `post-receive`) on GitHub/GitLab"
    ],
    simpleExplanation: "Git hooks are automated scripts that trigger at key moments. For example, a `pre-commit` hook automatically checks your code for syntax errors before allowing you to commit. If an error is found, Git stops you.",
    analogy: "Like a spellchecker that underlines typos in red and won't let you submit an online exam until you fix them.",
    technicalExplanation: "Hooks are executable shell or Python scripts residing in `.git/hooks/`. Client hooks execute locally and can be bypassed with `--no-verify`. Server hooks execute on the hosting server and cannot be bypassed by clients.",
    syntaxAndCommands: [
      "ls -la .git/hooks/",
      "chmod +x .git/hooks/pre-commit",
      "git commit -m \"msg\" --no-verify (bypasses local hooks)"
    ],
    walkthrough: [
      {
        command: "ls .git/hooks/",
        explanation: "List default hook sample templates in a Git repository.",
        expectedOutput: "applypatch-msg.sample      pre-applypatch.sample\ncommit-msg.sample          pre-commit.sample\npre-push.sample            pre-rebase.sample"
      }
    ],
    practicalExercise: "Create an executable `.git/hooks/pre-commit` script that runs `echo 'Running pre-commit check...'` and exits with code 0.",
    commonErrorsAndFixes: [
      {
        error: "Script in `.git/hooks/pre-commit` does not run when committing.",
        fix: "Make sure the file does NOT have the `.sample` extension and has execute permissions: `chmod +x .git/hooks/pre-commit`."
      }
    ],
    industryUseCase: "Security teams use `commit-msg` hooks to enforce Conventional Commits formatting and `pre-commit` hooks to prevent committing AWS API keys.",
    interviewQuestions: [
      {
        question: "Why can't client-side Git hooks be relied upon for critical enterprise security enforcement?",
        answer: "Because client hooks live in local `.git/hooks` and any developer can bypass them with `git commit --no-verify`. Critical security rules must be enforced via server-side checks or CI/CD pipelines."
      }
    ],
    quiz: {
      question: "Which client-side Git hook runs immediately before a commit message editor opens?",
      options: [
        "post-commit",
        "pre-commit",
        "post-receive",
        "pre-push"
      ],
      correctIndex: 1,
      explanation: "`pre-commit` runs before the commit is created; returning a non-zero exit code halts the commit."
    },
    officialReference: {
      title: "Git SCM: Customizing Git - Git Hooks",
      url: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"
    },
    checklist: [
      "I know where Git hooks live (.git/hooks)",
      "I know the difference between client and server hooks",
      "I know client hooks can be bypassed with --no-verify"
    ]
  },
  {
    id: "unit-72",
    unitNumber: 72,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Automating Code Quality with Husky and `lint-staged`",
    slug: "automating-code-quality-husky-lint-staged",
    estimatedMinutes: 18,
    topics: ["Husky", "lint-staged", "Prettier & ESLint", "Automated Formatting", "Git Hooks in Version Control"],
    learningObjectives: [
      "Version control Git hooks across team members using Husky",
      "Speed up pre-commit formatting by running ESLint/Prettier ONLY on staged files using `lint-staged`",
      "Ensure broken code and syntax errors are physically blocked from being committed"
    ],
    simpleExplanation: "Because default `.git/hooks` aren't shared when teammates clone a repo, Husky puts your hooks inside the project. Every time you commit, it automatically formats your code with Prettier and checks for linter errors in 1 second.",
    analogy: "An automated car wash that cleans your car every time you pull out of your driveway.",
    technicalExplanation: "Husky configures `core.hooksPath` to point to a committed `.husky/` directory. `lint-staged` inspects Git index, identifies staged files matching glob filters, runs linters/formatters, and re-stages modifications automatically.",
    syntaxAndCommands: [
      "npx husky init",
      "npm install --save-dev lint-staged",
      "package.json: \"lint-staged\": { \"*.{js,ts,tsx}\": [\"eslint --fix\", \"prettier --write\"] }"
    ],
    walkthrough: [
      {
        command: "npx lint-staged --help",
        explanation: "Inspect lint-staged configuration CLI tool.",
        expectedOutput: "Usage: lint-staged [options]..."
      }
    ],
    practicalExercise: "Inspect how `lint-staged` works by adding a simple `echo` task to test staged file interception.",
    commonErrorsAndFixes: [
      {
        error: "Running linters on all 1,000 files on every commit, taking 45 seconds.",
        fix: "Use `lint-staged`! It runs formatting ONLY on the 2 or 3 files you currently staged, taking less than 1 second."
      }
    ],
    industryUseCase: "Front-end engineering organizations at Airbnb, Netflix, and Uber use Husky + lint-staged to guarantee 100% uniform codebase formatting.",
    interviewQuestions: [
      {
        question: "Why is `lint-staged` used in conjunction with Husky rather than running `npm run lint` directly?",
        answer: "`npm run lint` lints the entire project, which is slow on large codebases. `lint-staged` isolates only the modified files currently staged in the Git index, finishing in milliseconds."
      }
    ],
    quiz: {
      question: "What tool allows teams to version control and share Git hooks inside a project repository across all contributors?",
      options: [
        "Docker",
        "Husky",
        "Webpack",
        "Babel"
      ],
      correctIndex: 1,
      explanation: "Husky provides modern, committed Git hook management for Node.js and web applications."
    },
    officialReference: {
      title: "Husky Documentation",
      url: "https://typicode.github.io/husky/"
    },
    checklist: [
      "I know why raw .git/hooks are not shared via clone",
      "I know how Husky shares hooks via .husky/",
      "I understand how lint-staged speeds up pre-commit checks"
    ]
  },
  {
    id: "unit-73",
    unitNumber: 73,
    level: 5,
    levelTitle: "Level 5 — Collaboration and Real Projects",
    title: "Designing a Production-Ready Team Git & GitHub Release Workflow",
    slug: "designing-production-team-release-workflow",
    estimatedMinutes: 20,
    topics: ["Release Architecture", "Environments (Dev, Staging, Prod)", "Semantic Versioning", "Automated Changelogs"],
    learningObjectives: [
      "Architect an end-to-end team development and release lifecycle",
      "Map branches to environments: feature branch -> Staging Preview -> `main` -> Production",
      "Integrate automated release tagging and changelog generation"
    ],
    simpleExplanation: "A professional engineering workflow connects everything you learned: developer branches off main, opens a PR with templates, passes CI tests, gets peer reviews, merges with Squash, and triggers automatic deployment to customers.",
    analogy: "An assembly line in a state-of-the-art automobile factory where every station performs quality inspections before the car drives off the line.",
    technicalExplanation: "Production workflows combine GitHub Flow with GitHub Environments. PR merges to `main` trigger release automation (e.g. semantic-release), bump `package.json`, generate `CHANGELOG.md`, create annotated Git tags, and deploy via CD pipelines.",
    syntaxAndCommands: [
      "1. feature branch -> 2. PR Review -> 3. Automated CI -> 4. Squash & Merge -> 5. Release Tag -> 6. Deploy"
    ],
    walkthrough: [
      {
        command: "git tag -l -n 1 --sort=-v:refname",
        explanation: "Inspect most recent semantic version release tag in repository history.",
        expectedOutput: "v1.0.0          Release 1.0.0 with core learning curriculum"
      }
    ],
    practicalExercise: "Diagram your ideal 5-step release workflow on paper, including branch protection rules and CI checks.",
    commonErrorsAndFixes: [
      {
        error: "Deploying directly from a developer's laptop rather than an automated CI/CD pipeline.",
        fix: "Always deploy through automated pipelines triggered by git tags or main merges to ensure reproducible builds."
      }
    ],
    industryUseCase: "Fintech, SaaS, and e-commerce companies deploy dozens of customer updates daily using this streamlined continuous delivery release pipeline.",
    interviewQuestions: [
      {
        question: "Outline a complete, modern Git and GitHub release workflow from developer branch to production deployment.",
        answer: "1. Developer branches off updated `main`, 2. Implements atomic commits with Conventional Commits, 3. Pushes and opens PR using PR template, 4. CI runs linting/unit tests and deploys ephemeral preview environment, 5. Peer review and CODEOWNERS approve, 6. Squash-and-merge to `main`, 7. CD pipeline runs production build, tags SemVer release, and deploys to production servers."
      }
    ],
    quiz: {
      question: "Which of the following practices represents a modern, production-grade Git and GitHub team standard?",
      options: [
        "Pushing untested code directly to `main` at 5 PM on a Friday.",
        "Branching off `main`, requiring passing CI checks and peer reviews via PRs, and deploying automatically upon merge.",
        "Disabling all branch protection rules.",
        "Never deleting merged feature branches."
      ],
      correctIndex: 1,
      explanation: "Short-lived branches, automated CI testing, peer review PRs, and automated CD deployment embody modern engineering standards."
    },
    officialReference: {
      title: "GitHub Docs: About continuous integration",
      url: "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration"
    },
    checklist: [
      "I can explain an end-to-end production workflow",
      "I know how environments link to branch triggers",
      "I understand the value of automated release pipelines"
    ]
  }
];
