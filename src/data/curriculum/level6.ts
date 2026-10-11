import { CurriculumUnit } from "./types";

export const level6Units: CurriculumUnit[] = [
  {
    id: "unit-74",
    unitNumber: 74,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "What CI/CD Means: Continuous Integration & Continuous Deployment",
    slug: "what-cicd-means",
    estimatedMinutes: 15,
    topics: ["CI/CD Concepts", "Continuous Integration", "Continuous Delivery", "Continuous Deployment", "Automation Pipelines"],
    learningObjectives: [
      "Define Continuous Integration (CI) and its core benefits",
      "Distinguish between Continuous Delivery (manual release approval) and Continuous Deployment (automatic production rollout)",
      "Explain how automation eliminates 'it works on my machine' syndrome"
    ],
    simpleExplanation: "CI/CD is a robot assistant for your team. Every time you push code, the robot wakes up on a clean computer, downloads your code, runs your tests, and if everything passes, publishes your website to users automatically.",
    analogy: "An automated quality control scanner at the end of a manufacturing assembly line that checks every item before shipping.",
    technicalExplanation: "Continuous Integration is the practice of merging all developer working copies to a shared mainline several times a day, backed by automated test suites. Continuous Deployment automates the release of validated builds to staging or production environments without manual intervention.",
    syntaxAndCommands: ["CI Pipeline: checkout -> install -> lint -> test -> build -> deploy"],
    walkthrough: [
      {
        command: "npm run build",
        explanation: "Simulate a local build step that a CI pipeline runs on every pull request.",
        expectedOutput: "✓ Compiled successfully in 1.4s"
      }
    ],
    practicalExercise: "List 3 tasks that human developers usually forget to do that can be 100% automated by a CI pipeline.",
    commonErrorsAndFixes: [
      {
        error: "Thinking CI/CD is only for massive corporate projects.",
        fix: "Even single-developer solo projects benefit enormously from CI: it guarantees your code compiles cleanly and alerts you to broken links."
      }
    ],
    industryUseCase: "Netflix and Amazon deploy code to production thousands of times per day using fully automated CI/CD canary deployment pipelines.",
    interviewQuestions: [
      {
        question: "Explain the difference between Continuous Delivery and Continuous Deployment.",
        answer: "In Continuous Delivery, every passing build is automatically packaged and ready for release, but the final deployment to production requires manual human approval. In Continuous Deployment, every passing build deploys to production automatically with zero human intervention."
      }
    ],
    quiz: {
      question: "What is the primary objective of Continuous Integration (CI)?",
      options: [
        "To write marketing emails to customers.",
        "To merge code frequently into a shared branch and automatically validate it with automated tests.",
        "To delete git repositories every 30 days.",
        "To replace all human programmers."
      ],
      correctIndex: 1,
      explanation: "CI automates code validation and test suites whenever developers commit or open pull requests."
    },
    officialReference: {
      title: "GitHub Docs: About continuous integration",
      url: "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration"
    },
    checklist: [
      "I know what CI and CD stand for",
      "I understand the difference between Delivery and Deployment",
      "I know the core benefits of automated quality gates"
    ]
  },
  {
    id: "unit-75",
    unitNumber: 75,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Understanding GitHub Actions Architecture: Workflows, Events, Jobs, Steps & Runners",
    slug: "github-actions-architecture",
    estimatedMinutes: 18,
    topics: ["GitHub Actions", "Workflows", "Events (on:)", "Jobs", "Steps", "Runners"],
    learningObjectives: [
      "Master the 5 core concepts of GitHub Actions: Workflows, Events, Jobs, Steps, and Runners",
      "Understand how jobs run in parallel by default, and how to create dependencies with `needs:`",
      "Trace execution flow from repository event to runner completion"
    ],
    simpleExplanation: "An Event (like opening a PR) triggers a Workflow (recipe). The workflow starts Jobs (tasks), which run on Runners (virtual computers in the cloud). Inside each job are Steps (individual commands).",
    analogy: "Like a restaurant: An order ticket (Event) triggers a meal ticket (Workflow). The chefs (Jobs) work on their kitchen counters (Runners) following recipe steps (Steps).",
    technicalExplanation: "Workflows are automated procedures declared in YAML under `.github/workflows/`. GitHub handles event dispatching, assigns ephemeral virtual machine runners, provisions containers, streams logs, and collects execution status.",
    syntaxAndCommands: [
      "Workflow (.github/workflows/*.yml)",
      "on: [push, pull_request]",
      "jobs: <job_id>: runs-on: ubuntu-latest steps: [...]"
    ],
    walkthrough: [
      {
        command: "ls -la .github/workflows/",
        explanation: "Inspect where GitHub Actions workflow files live inside a repository.",
        expectedOutput: "-rw-r--r-- 1 user group 420 Oct 11 ci.yml"
      }
    ],
    practicalExercise: "Draw the GitHub Actions hierarchy diagram: Event -> Workflow -> Jobs (parallel) -> Steps (sequential) -> Runner.",
    commonErrorsAndFixes: [
      {
        error: "Assuming jobs share file state with other jobs automatically.",
        fix: "Each job runs on a separate, fresh virtual machine runner! To share files between jobs, use `actions/upload-artifact` and `download-artifact`."
      }
    ],
    industryUseCase: "Over 80% of open-source projects on GitHub use GitHub Actions to automate unit testing, linting, packaging, and documentation deployments.",
    interviewQuestions: [
      {
        question: "Do jobs in a GitHub Actions workflow run in parallel or sequentially by default?",
        answer: "Jobs run in parallel by default. To run jobs sequentially, define dependencies using the `needs:` keyword (e.g. `needs: build`)."
      }
    ],
    quiz: {
      question: "In GitHub Actions, which component provides the actual cloud virtual machine where commands execute?",
      options: [
        "Event",
        "Step",
        "Runner",
        "Workflow"
      ],
      correctIndex: 2,
      explanation: "A Runner is the virtual machine server that executes steps within a job."
    },
    officialReference: {
      title: "GitHub Docs: Understanding GitHub Actions",
      url: "https://docs.github.com/en/actions/about-continuous-integration/understanding-github-actions"
    },
    checklist: [
      "I understand the 5 core Actions building blocks",
      "I know jobs run in parallel unless needs: is specified",
      "I understand runners are ephemeral virtual machines"
    ]
  },
  {
    id: "unit-76",
    unitNumber: 76,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Anatomy of a Workflow YAML File (`.github/workflows/*.yml`)",
    slug: "workflow-yaml-anatomy",
    estimatedMinutes: 20,
    topics: ["YAML Syntax", "name:", "on:", "jobs:", "runs-on:", "uses: vs run:"],
    learningObjectives: [
      "Author valid GitHub Actions workflow files in YAML",
      "Understand the difference between community marketplace actions (`uses:`) and shell commands (`run:`)",
      "Apply strict 2-space YAML formatting and avoid parsing errors"
    ],
    simpleExplanation: "A workflow file is written in YAML, a clean text format that looks like an outline with indentation. You give it a name, tell it when to run, pick a computer type, and list your terminal commands.",
    analogy: "Writing a clear recipe checklist with ingredients and step-by-step instructions for a chef.",
    technicalExplanation: "YAML maps keys to values, sequences, and objects. The top-level keys are `name` (display title), `on` (triggers), `env` (environment variables), and `jobs` (task definitions). `uses:` invokes an action; `run:` executes a shell command.",
    syntaxAndCommands: [
      "name: CI Pipeline",
      "on: [push]",
      "jobs:",
      "  test:",
      "    runs-on: ubuntu-latest",
      "    steps:",
      "      - uses: actions/checkout@v4",
      "      - run: npm test"
    ],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/workflows/verify.yml\nname: Quick Verify\non: [push]\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: echo 'Repository checked out successfully!'\nEOF",
        explanation: "Author minimal complete workflow definition.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Create a minimal workflow `.github/workflows/hello.yml` that checks out the repository and runs `echo 'Hello from Actions!'`.",
    commonErrorsAndFixes: [
      {
        error: "YAML error: 'mapping values are not allowed here'.",
        fix: "You likely used tabs instead of spaces or misaligned your 2-space indentation. Replace tabs with 2 spaces."
      }
    ],
    industryUseCase: "Development teams maintain standard CI templates across all repositories to enforce uniform security and testing standards.",
    interviewQuestions: [
      {
        question: "In a GitHub Actions step, what is the difference between `uses:` and `run:`?",
        answer: "`uses:` executes a reusable pre-built action from GitHub Marketplace or another repository (e.g. `actions/checkout@v4`). `run:` executes arbitrary shell commands on the runner's operating system."
      }
    ],
    quiz: {
      question: "Which pre-built action is almost ALWAYS the first step in any job to download the code onto the runner?",
      options: [
        "actions/download-repo@v1",
        "actions/checkout@v4",
        "git/clone@v2",
        "actions/pull@v3"
      ],
      correctIndex: 1,
      explanation: "`actions/checkout@v4` checks out your repository to `$GITHUB_WORKSPACE` so subsequent steps can access it."
    },
    officialReference: {
      title: "GitHub Docs: Workflow syntax for GitHub Actions",
      url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions"
    },
    checklist: [
      "I know where workflows live (.github/workflows/*.yml)",
      "I know the difference between uses: and run:",
      "I understand YAML 2-space indentation rules"
    ]
  },
  {
    id: "unit-77",
    unitNumber: 77,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Triggering Workflows on Push, Pull Request, Schedule, and Manual Dispatch",
    slug: "triggering-workflows-events",
    estimatedMinutes: 18,
    topics: ["on: push", "on: pull_request", "schedule (cron)", "workflow_dispatch", "Path Filtering"],
    learningObjectives: [
      "Trigger workflows on code events: `push`, `pull_request`, `release`",
      "Schedule recurring automated jobs using cron syntax (e.g. `schedule: - cron: '0 0 * * *'`)",
      "Add interactive 'Run workflow' buttons using `workflow_dispatch` with input parameters",
      "Optimize CI costs using path filtering (`paths:` / `paths-ignore:`)"
    ],
    simpleExplanation: "You don't want tests running when someone only edits a typo in the README. Event filters let you run tests only when files in `src/` change, or run security scans every Sunday night at midnight.",
    analogy: "Motion sensors that only turn on the lights when someone walks into the room, saving electricity.",
    technicalExplanation: "`on:` filters support branch scoping (`branches: [main]`), tag filters (`tags: ['v*']`), file paths (`paths: ['src/**']`), cron schedules, and manual UI triggers with strongly-typed inputs via `workflow_dispatch`.",
    syntaxAndCommands: [
      "on: push: branches: [main] paths: ['src/**']",
      "on: pull_request: types: [opened, synchronize]",
      "on: schedule: - cron: '0 2 * * 1'",
      "on: workflow_dispatch: inputs: environment: ..."
    ],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/workflows/manual.yml\nname: Manual Deployment\non:\n  workflow_dispatch:\n    inputs:\n      env:\n        description: 'Target environment'\n        required: true\n        default: 'staging'\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo \"Deploying to ${{ inputs.env }}\"\nEOF",
        explanation: "Define interactive workflow with manual UI trigger.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Add `paths-ignore: ['**.md']` to a workflow so committing documentation changes doesn't waste CI runner minutes.",
    commonErrorsAndFixes: [
      {
        error: "Workflow with `workflow_dispatch` doesn't show up with a 'Run workflow' button in GitHub UI.",
        fix: "The workflow file MUST be committed and pushed to the default branch (`main`) before GitHub's UI will render the manual trigger button."
      }
    ],
    industryUseCase: "Nightly regression test suites execute at 2 AM using cron triggers, testing hundreds of edge cases without blocking day-to-day developer PRs.",
    interviewQuestions: [
      {
        question: "How do you enable a manual 'Run workflow' button in GitHub Actions with custom parameters?",
        answer: "By adding the `workflow_dispatch:` trigger under the `on:` section, optionally defining `inputs` with types, default values, and descriptions."
      }
    ],
    quiz: {
      question: "Which trigger event enables an interactive button on GitHub to trigger a workflow on demand?",
      options: [
        "manual_start",
        "workflow_dispatch",
        "click_trigger",
        "button_event"
      ],
      correctIndex: 1,
      explanation: "`workflow_dispatch` provides manual on-demand workflow triggering from the GitHub web UI or API."
    },
    officialReference: {
      title: "GitHub Docs: Events that trigger workflows",
      url: "https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows"
    },
    checklist: [
      "I know how to scope triggers to specific branches",
      "I can trigger workflows on schedule with cron",
      "I use workflow_dispatch for manual operational tasks"
    ]
  },
  {
    id: "unit-78",
    unitNumber: 78,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Hosted Runners (`ubuntu-latest`, `windows`, `macos`) vs. Self-Hosted Runners",
    slug: "github-hosted-vs-self-hosted-runners",
    estimatedMinutes: 15,
    topics: ["GitHub-Hosted Runners", "ubuntu-latest", "windows-latest", "macos-latest", "Self-Hosted Runners"],
    learningObjectives: [
      "Select the right hosted runner operating system for your build requirements",
      "Understand runner hardware specifications, billing minutes, and clean environment guarantees",
      "Evaluate when an enterprise requires Self-Hosted Runners (on-premise hardware, private VPC)"
    ],
    simpleExplanation: "GitHub provides free cloud computers for your workflows: Ubuntu (Linux), Windows, and macOS. They are wiped clean after every run, so tests always run in a fresh, identical environment.",
    analogy: "Renting a spotless rental car for a 10-minute trip and returning it; every driver gets a freshly cleaned car with a full tank.",
    technicalExplanation: "GitHub-hosted runners provide 2-core / 4-core vCPUs with pre-installed developer tools (Docker, Node, Python, Java, etc.). Self-hosted runners run a lightweight daemon (`actions-runner`) on your own servers, enabling custom hardware (GPUs) or access to internal private corporate networks.",
    syntaxAndCommands: [
      "runs-on: ubuntu-latest",
      "runs-on: windows-latest",
      "runs-on: macos-latest",
      "runs-on: [self-hosted, linux, gpu]"
    ],
    walkthrough: [
      {
        command: "uname -a",
        explanation: "Check operating system kernel information inside a runner step.",
        expectedOutput: "Linux runner-xyz 6.5.0-1014-azure #14~22.04.1-Ubuntu SMP..."
      }
    ],
    practicalExercise: "Compare the billing multipliers: Ubuntu (1x), Windows (2x), and macOS (10x). Why is Linux the default choice for web applications?",
    commonErrorsAndFixes: [
      {
        error: "Running public pull requests on self-hosted runners without restrictions.",
        fix: "Extreme security hazard! Untrusted forks could execute malicious code on your private server. Only use GitHub-hosted runners for public repositories."
      }
    ],
    industryUseCase: "AI/ML teams attach powerful NVIDIA GPU workstations as self-hosted runners to train models automatically upon pull request merges.",
    interviewQuestions: [
      {
        question: "What are the primary trade-offs of GitHub-hosted runners vs self-hosted runners?",
        answer: "GitHub-hosted runners are fully managed, secure, and clean up automatically, but have fixed specs. Self-hosted runners allow custom hardware, persistent caches, and private network access, but require self-maintenance and carry security risks on public repos."
      }
    ],
    quiz: {
      question: "Which hosted runner operating system is the industry standard default for web application CI/CD pipelines?",
      options: [
        "ubuntu-latest",
        "windows-latest",
        "macos-14",
        "solaris-latest"
      ],
      correctIndex: 0,
      explanation: "`ubuntu-latest` is fast, lightweight, cost-effective, and matches modern containerized cloud production environments."
    },
    officialReference: {
      title: "GitHub Docs: About GitHub-hosted runners",
      url: "https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners"
    },
    checklist: [
      "I know the available hosted runner types",
      "I use ubuntu-latest as standard default",
      "I understand the security implications of self-hosted runners"
    ]
  },
  {
    id: "unit-79",
    unitNumber: 79,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Setting Up Node.js & Running Automated Tests (`actions/setup-node`)",
    slug: "setup-node-and-automated-tests",
    estimatedMinutes: 18,
    topics: ["actions/setup-node", "npm ci", "Automated Testing", "npm test", "Linting in CI"],
    learningObjectives: [
      "Configure specific Node.js versions (e.g. 18, 20, 22) using `actions/setup-node@v4`",
      "Use `npm ci` (Clean Install) instead of `npm install` for deterministic builds",
      "Run linting and test scripts, failing the workflow if tests break"
    ],
    simpleExplanation: "To test your React or Next.js app in the cloud, the runner needs Node.js installed. `actions/setup-node` installs the exact version you need and caches your dependencies in seconds.",
    analogy: "Setting up a standard test workbench with the exact calibrated tools needed to inspect a circuit board.",
    technicalExplanation: "`actions/setup-node@v4` sets up the Node.js environment, updates PATH, and configures automatic caching for npm, yarn, or pnpm. `npm ci` installs dependencies directly from `package-lock.json`, preventing accidental dependency drift.",
    syntaxAndCommands: [
      "- uses: actions/setup-node@v4",
      "  with: node-version: 20 cache: 'npm'",
      "- run: npm ci",
      "- run: npm test"
    ],
    walkthrough: [
      {
        command: "node -v",
        explanation: "Verify active Node.js version on the runner.",
        expectedOutput: "v20.11.1"
      }
    ],
    practicalExercise: "Review the GitHub Actions test workflow in Practical Lab 15 and explain each step in order.",
    commonErrorsAndFixes: [
      {
        error: "Using `npm install` in CI pipelines.",
        fix: "Always use `npm ci` in CI! It enforces strict matching against `package-lock.json`, runs faster, and prevents silent package version upgrades."
      }
    ],
    industryUseCase: "Front-end engineering teams run Jest and Vitest suites on every pull request, blocking regressions before code reaches staging.",
    interviewQuestions: [
      {
        question: "Why should CI/CD pipelines use `npm ci` instead of `npm install`?",
        answer: "`npm ci` requires an existing `package-lock.json`, deletes `node_modules` before installing, never writes back to the lockfile, and guarantees 100% reproducible installs."
      }
    ],
    quiz: {
      question: "Which npm command is specifically optimized for automated CI environments to ensure reproducible builds from `package-lock.json`?",
      options: [
        "npm install",
        "npm ci",
        "npm get",
        "npm build --all"
      ],
      correctIndex: 1,
      explanation: "`npm ci` (clean install) is designed for automated environments and never alters lockfiles."
    },
    officialReference: {
      title: "GitHub Actions: setup-node Action",
      url: "https://github.com/actions/setup-node"
    },
    checklist: [
      "I know how to set up Node.js with actions/setup-node",
      "I use npm ci in all CI pipelines",
      "I run lint and test steps before building"
    ]
  },
  {
    id: "unit-80",
    unitNumber: 80,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Setting Up Python & Running Automated Tests (`actions/setup-python`, `pytest`)",
    slug: "setup-python-and-automated-tests",
    estimatedMinutes: 18,
    topics: ["actions/setup-python", "pip / poetry / pipenv", "pytest", "Flake8 / Black", "Virtual Environments"],
    learningObjectives: [
      "Configure Python versions (e.g. 3.10, 3.11, 3.12) using `actions/setup-python@v5`",
      "Install dependencies from `requirements.txt` or Poetry",
      "Execute automated unit tests with `pytest` and linter checks with `flake8`"
    ],
    simpleExplanation: "For Python, Django, or Flask projects, `actions/setup-python` sets up Python on the cloud runner, installs your libraries, and runs `pytest` to make sure your backend logic is bulletproof.",
    analogy: "Like activating a virtual laboratory with the exact chemical reagents required to test a formula.",
    technicalExplanation: "`actions/setup-python@v5` downloads and installs pre-built Python binaries from GitHub's runner tool cache, sets up pip caching, and sets environment variables (`python`, `pip`).",
    syntaxAndCommands: [
      "- uses: actions/setup-python@v5",
      "  with: python-version: '3.11' cache: 'pip'",
      "- run: pip install -r requirements.txt",
      "- run: pytest"
    ],
    walkthrough: [
      {
        command: "python --version",
        explanation: "Check runner's active Python version.",
        expectedOutput: "Python 3.11.8"
      }
    ],
    practicalExercise: "Draft a `.github/workflows/python-test.yml` workflow that checks out code, sets up Python 3.12, installs pytest, and runs tests.",
    commonErrorsAndFixes: [
      {
        error: "Tests failing due to missing pip packages.",
        fix: "Ensure all runtime and test packages are pinned in `requirements.txt` or `pyproject.toml`."
      }
    ],
    industryUseCase: "Data science and backend teams automate model validation tests and REST API contract tests using pytest on GitHub Actions.",
    interviewQuestions: [
      {
        question: "How do you enable dependency caching in `actions/setup-python`?",
        answer: "By setting `cache: 'pip'` (or `'poetry'`, `'pipenv'`) in the `with:` block of `actions/setup-python@v5`."
      }
    ],
    quiz: {
      question: "Which official GitHub action provisions Python runtimes on virtual machine runners?",
      options: [
        "actions/install-python",
        "actions/setup-python@v5",
        "python/setup@v2",
        "tools/python@v1"
      ],
      correctIndex: 1,
      explanation: "`actions/setup-python` is the official action maintained by GitHub."
    },
    officialReference: {
      title: "GitHub Actions: setup-python Action",
      url: "https://github.com/actions/setup-python"
    },
    checklist: [
      "I know how to provision Python with setup-python",
      "I configure pip dependency caching",
      "I run pytest to validate backend pull requests"
    ]
  },
  {
    id: "unit-81",
    unitNumber: 81,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Caching Dependencies (`actions/cache`) to Slash Execution Time",
    slug: "caching-dependencies-actions-cache",
    estimatedMinutes: 18,
    topics: ["actions/cache", "Cache Keys", "hashFiles()", "Restore Keys", "Speeding up CI"],
    learningObjectives: [
      "Understand how caching prevents re-downloading gigabytes of dependencies on every run",
      "Construct dynamic cache keys using `hashFiles('**/package-lock.json')`",
      "Configure fallback restore keys for incremental cache hits"
    ],
    simpleExplanation: "Downloading `node_modules` from scratch on every push takes 2 minutes. Caching saves your downloaded files in a cloud locker. If your lockfile didn't change, the runner grabs the locker in 3 seconds.",
    analogy: "Keeping favorite snacks in your pantry at home instead of driving to the grocery store every single time you want a snack.",
    technicalExplanation: "`actions/cache` stores and retrieves files using unique keys. If a key matches, it restores the archive (Cache Hit). If not (Cache Miss), the job runs, downloads dependencies, and saves a new cache snapshot upon job completion.",
    syntaxAndCommands: [
      "- uses: actions/cache@v4",
      "  with:",
      "    path: ~/.npm",
      "    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}",
      "    restore-keys: ${{ runner.os }}-node-"
    ],
    walkthrough: [
      {
        command: "echo 'Cache Hit: restoring ~/.npm from key Linux-node-a190b...'",
        explanation: "Log showing instantaneous cache restoration in runner output.",
        expectedOutput: "Cache Hit: restoring ~/.npm from key Linux-node-a190b..."
      }
    ],
    practicalExercise: "Inspect how modern `setup-node` and `setup-python` actions have built-in `cache:` flags that configure `actions/cache` under the hood.",
    commonErrorsAndFixes: [
      {
        error: "Cache key never invalidates even when dependencies are updated.",
        fix: "Always include `hashFiles('**/package-lock.json')` in your cache key so any change to lockfile generates a fresh cache key."
      }
    ],
    industryUseCase: "Enterprise engineering teams slash monthly GitHub Actions compute bills by up to 60% by implementing smart dependency and build caching.",
    interviewQuestions: [
      {
        question: "How does `hashFiles()` ensure cache invalidation in GitHub Actions?",
        answer: "It computes a cryptographic hash of the specified files. When `package-lock.json` changes, the hash changes, resulting in a cache miss and forcing a fresh install and cache update."
      }
    ],
    quiz: {
      question: "What function calculates a unique checksum of lockfiles for dynamic cache key generation?",
      options: [
        "checksum()",
        "hashFiles()",
        "makeHash()",
        "lockHash()"
      ],
      correctIndex: 1,
      explanation: "`hashFiles()` generates a SHA-256 hash of matched file paths."
    },
    officialReference: {
      title: "GitHub Docs: Caching dependencies to speed up workflows",
      url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows"
    },
    checklist: [
      "I know how caching speeds up CI builds",
      "I construct cache keys with hashFiles()",
      "I understand cache hit vs cache miss lifecycle"
    ]
  },
  {
    id: "unit-82",
    unitNumber: 82,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Uploading & Downloading Workflow Artifacts (`actions/upload-artifact`)",
    slug: "workflow-artifacts",
    estimatedMinutes: 18,
    topics: ["Artifacts", "upload-artifact@v4", "download-artifact@v4", "Sharing Data Across Jobs", "Retention Days"],
    learningObjectives: [
      "Persist build bundles, test coverage reports, and logs using `actions/upload-artifact@v4`",
      "Pass compiled assets from a `build` job to a subsequent `deploy` or `test` job",
      "Configure artifact retention policies to manage storage limits"
    ],
    simpleExplanation: "Because runners are destroyed after each job ends, any compiled files disappear. Artifacts are zipped packages saved to GitHub's storage that you can download or pass to another job.",
    analogy: "Putting your luggage in airport baggage transit so it gets loaded onto your connecting flight.",
    technicalExplanation: "`actions/upload-artifact` compresses and uploads specified directories to GitHub blob storage, making them available in the GitHub UI and downloadable by other jobs via `actions/download-artifact`.",
    syntaxAndCommands: [
      "- uses: actions/upload-artifact@v4",
      "  with: name: production-build path: dist/ retention-days: 7",
      "- uses: actions/download-artifact@v4",
      "  with: name: production-build"
    ],
    walkthrough: [
      {
        command: "ls -la dist/",
        explanation: "Check build directory to be packaged as an artifact.",
        expectedOutput: "-rw-r--r-- 1 user group 18578 Oct 11 index.html"
      }
    ],
    practicalExercise: "Add an artifact upload step that uploads your test coverage directory (`coverage/`) after running tests.",
    commonErrorsAndFixes: [
      {
        error: "Trying to access files created in Job A from Job B without downloading the artifact.",
        fix: "Jobs run on separate isolated machines! Upload in Job A, declare `needs: jobA` in Job B, and download the artifact in Job B."
      }
    ],
    industryUseCase: "Mobile development teams build iOS and Android APK binaries in CI and upload them as artifacts for QA teams to install and test on physical devices.",
    interviewQuestions: [
      {
        question: "How can two separate jobs in the same GitHub Actions workflow share compiled files?",
        answer: "Job 1 uploads the files using `actions/upload-artifact@v4`. Job 2 declares `needs: job1` and retrieves the files using `actions/download-artifact@v4`."
      }
    ],
    quiz: {
      question: "Which action persists compiled files and logs after a workflow runner finishes execution?",
      options: [
        "actions/save-files",
        "actions/upload-artifact@v4",
        "actions/archive",
        "git/persist"
      ],
      correctIndex: 1,
      explanation: "`actions/upload-artifact` saves files to persistent GitHub storage for the workflow."
    },
    officialReference: {
      title: "GitHub Docs: Storing and sharing data that a workflow generates",
      url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-that-a-workflow-generates"
    },
    checklist: [
      "I know how to upload build artifacts",
      "I know how to pass data between jobs",
      "I configure retention policies to manage storage"
    ]
  },
  {
    id: "unit-83",
    unitNumber: 83,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Managing Environment Variables & Encrypted Secrets (`${{ secrets.API_KEY }}`)",
    slug: "managing-secrets-and-env-variables",
    estimatedMinutes: 20,
    topics: ["Encrypted Secrets", "Repository Secrets", "Environment Variables", "Masking in Logs", "Security Hygiene"],
    learningObjectives: [
      "Store production API keys, tokens, and database passwords securely in GitHub Encrypted Secrets",
      "Reference secrets inside workflow steps via `${{ secrets.MY_SECRET }}`",
      "Understand automated log masking (asterisk masking `***`) and avoid accidental secret exposure"
    ],
    simpleExplanation: "Never, ever hardcode passwords in your code or workflow files. Save them in GitHub's encrypted vault (Settings -> Secrets). In your workflow, you call them by nickname, and GitHub hides their values with `***` in all logs.",
    analogy: "Keeping your money in a bank vault and using a secure debit card rather than leaving cash taped to your computer monitor.",
    technicalExplanation: "GitHub Secrets uses Libsodium public-key cryptography to encrypt values at rest. During runner execution, secrets are decrypted into memory and automatically redacted/masked if printed to stdout/stderr.",
    syntaxAndCommands: [
      "Settings -> Secrets and variables -> Actions -> New repository secret",
      "env:",
      "  DATABASE_URL: ${{ secrets.PROD_DB_URL }}",
      "  STRIPE_KEY: ${{ secrets.STRIPE_SECRET_KEY }}"
    ],
    walkthrough: [
      {
        command: "echo '::add-mask::my-secret-token'",
        explanation: "See how GitHub Actions runner registers strings to be masked with *** in console output.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Add a dummy secret `TEST_SECRET` in your repository settings and print it with `echo \"Secret length: ${#SECRET}\"` to confirm it is masked.",
    commonErrorsAndFixes: [
      {
        error: "Attempting to access repository secrets from pull requests opened by external untrusted forks.",
        fix: "By design, GitHub BLOCKS secrets from untrusted fork PRs to prevent malicious code from exfiltrating company credentials."
      }
    ],
    industryUseCase: "Deployment pipelines inject AWS access keys and Kubernetes kubeconfig certificates strictly through Encrypted Secrets.",
    interviewQuestions: [
      {
        question: "Why does GitHub Actions automatically mask secrets in console output, and what happens if a secret is echoed?",
        answer: "GitHub masks known secret values with `***` to prevent accidental credential leakage into build logs viewable by team members or the public."
      }
    ],
    quiz: {
      question: "How are encrypted repository secrets safely injected into a GitHub Actions step?",
      options: [
        "By hardcoding them in plain text in `ci.yml`.",
        "Using the expression `${{ secrets.SECRET_NAME }}`.",
        "By uploading a `.env` file to the GitHub repository.",
        "By emailing them to GitHub support."
      ],
      correctIndex: 1,
      explanation: "`${{ secrets.NAME }}` safely injects the decrypted secret at runtime into the runner environment."
    },
    officialReference: {
      title: "GitHub Docs: Using secrets in GitHub Actions",
      url: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions"
    },
    checklist: [
      "I never commit credentials to version control",
      "I configure secrets under Settings -> Secrets and variables",
      "I inject secrets via environment variables in workflows"
    ]
  },
  {
    id: "unit-84",
    unitNumber: 84,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Permissions & The Principle of Least Privilege in Workflows (`permissions:` Block)",
    slug: "workflow-permissions-least-privilege",
    estimatedMinutes: 18,
    topics: ["permissions: block", "GITHUB_TOKEN", "Least Privilege", "Read vs Write Scopes", "Supply Chain Security"],
    learningObjectives: [
      "Restrict default `GITHUB_TOKEN` permissions using top-level `permissions:` blocks",
      "Grant read-only access by default (`permissions: contents: read`)",
      "Prevent supply-chain compromised actions from maliciously pushing code or altering releases"
    ],
    simpleExplanation: "Every workflow gets an automatic digital badge (`GITHUB_TOKEN`). If you don't restrict it, a malicious third-party script could use that badge to alter your code. Setting strict permissions ensures the badge can only do what's strictly necessary.",
    analogy: "Giving a visitor a guest badge that only opens the front lobby, rather than a master key to every office.",
    technicalExplanation: "GitHub Actions generates an ephemeral `GITHUB_TOKEN` per workflow. Best security practice mandates explicitly defining the `permissions:` block at workflow or job level (e.g. `contents: read`, `pull-requests: write`, `issues: none`), following the Principle of Least Privilege.",
    syntaxAndCommands: [
      "permissions:",
      "  contents: read",
      "  pull-requests: write",
      "  issues: none"
    ],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/workflows/secure.yml\nname: Secure CI\npermissions:\n  contents: read\njobs:\n  audit:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\nEOF",
        explanation: "Author workflow with explicitly scoped read-only permissions.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Add a `permissions: contents: read` block at the top of your CI workflow to adhere to OpenSSF Scorecard security standards.",
    commonErrorsAndFixes: [
      {
        error: "Action fails with 'Resource not accessible by integration' when trying to create a release.",
        fix: "You explicitly restricted permissions! Add `contents: write` specifically to the job that creates releases."
      }
    ],
    industryUseCase: "OpenSSF (Open Source Security Foundation) flags repositories as high-risk if their GitHub Actions workflows lack explicit least-privilege permission definitions.",
    interviewQuestions: [
      {
        question: "Why should every GitHub Actions workflow declare an explicit `permissions:` block?",
        answer: "To adhere to the Principle of Least Privilege, preventing compromised dependencies or third-party actions from abusing default broad permissions to tamper with code or deploy malicious releases."
      }
    ],
    quiz: {
      question: "Which permission block sets the workflow's GITHUB_TOKEN to minimal read-only access for repository code?",
      options: [
        "permissions: admin: false",
        "permissions: contents: read",
        "permissions: readonly",
        "permissions: secure: true"
      ],
      correctIndex: 1,
      explanation: "`permissions: contents: read` restricts repository code access to read-only."
    },
    officialReference: {
      title: "GitHub Docs: Assigning permissions to jobs",
      url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token"
    },
    checklist: [
      "I declare explicit permissions in every workflow",
      "I follow least privilege (read-only by default)",
      "I protect GITHUB_TOKEN from unauthorized write actions"
    ]
  },
  {
    id: "unit-85",
    unitNumber: 85,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Matrix Builds: Testing Across Multiple OS & Language Versions Simultaneously",
    slug: "matrix-builds-multi-os-testing",
    estimatedMinutes: 20,
    topics: ["strategy: matrix", "Multi-OS Matrix", "Multi-Version Matrix", "fail-fast: false", "Combinatorial Testing"],
    learningObjectives: [
      "Execute combinatorial tests across multiple OS environments (`ubuntu`, `windows`, `macos`) in parallel",
      "Test libraries across multiple runtime versions (e.g. Node 18, 20, 22 or Python 3.10, 3.11, 3.12)",
      "Configure `fail-fast: false` to allow all matrix combinations to finish even if one fails"
    ],
    simpleExplanation: "Instead of writing 9 separate workflows to test on Windows, Mac, and Linux across Node 18, 20, and 22, a Matrix Build lets you define the combinations in 3 lines and runs all 9 tests simultaneously in parallel.",
    analogy: "A flight simulator testing an airplane in sunny, rainy, and snowy conditions all at the same time on separate computer screens.",
    technicalExplanation: "`strategy.matrix` generates multiple job runs by creating combinations of variables. `matrix.os` and `matrix.node-version` spawn N parallel runners. Setting `fail-fast: false` prevents GitHub from canceling remaining jobs if one matrix cell fails.",
    syntaxAndCommands: [
      "strategy:",
      "  fail-fast: false",
      "  matrix:",
      "    os: [ubuntu-latest, windows-latest, macos-latest]",
      "    node: [18, 20, 22]"
    ],
    walkthrough: [
      {
        command: "echo 'Matrix generated: 3 OS x 3 Node = 9 parallel runner jobs'",
        explanation: "Matrix multiplication concept visualization.",
        expectedOutput: "Matrix generated: 3 OS x 3 Node = 9 parallel runner jobs"
      }
    ],
    practicalExercise: "Draft a matrix configuration that tests your project on Node 18 and Node 20 on `ubuntu-latest`.",
    commonErrorsAndFixes: [
      {
        error: "One job fails and cancels all other matrix jobs before you can see which environments passed.",
        fix: "Add `fail-fast: false` under `strategy:` so all combinations complete their full test runs."
      }
    ],
    industryUseCase: "Cross-platform libraries like Vite, React, and Electron rely on matrix builds to guarantee compatibility across Windows, Mac, and Linux.",
    interviewQuestions: [
      {
        question: "What does `fail-fast: false` do in a GitHub Actions matrix strategy?",
        answer: "By default (`fail-fast: true`), GitHub cancels all in-progress matrix jobs as soon as any single job in the matrix fails. Setting it to `false` allows all jobs to complete regardless of individual failures."
      }
    ],
    quiz: {
      question: "If a matrix defines `os: [ubuntu, windows]` and `node: [18, 20, 22]`, how many parallel jobs will GitHub Actions spawn?",
      options: [
        "2",
        "3",
        "5",
        "6"
      ],
      correctIndex: 3,
      explanation: "Combinatorial product: 2 operating systems * 3 Node versions = 6 jobs."
    },
    officialReference: {
      title: "GitHub Docs: Using a matrix for your jobs",
      url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow"
    },
    checklist: [
      "I know how to define a matrix strategy",
      "I test across multiple runtime versions in parallel",
      "I use fail-fast: false to collect complete diagnostic data"
    ]
  },
  {
    id: "unit-86",
    unitNumber: 86,
    level: 6,
    levelTitle: "Level 6 — GitHub Actions and Automation",
    title: "Debugging Failed Workflows, Re-Running Jobs & Viewing Live Runner Logs",
    slug: "debugging-failed-workflows-runner-logs",
    estimatedMinutes: 18,
    topics: ["Live Runner Logs", "Re-run Failed Jobs", "Debug Logging (ACTIONS_STEP_DEBUG)", "ANSI Color Output", "Exit Codes"],
    learningObjectives: [
      "Inspect live streaming runner logs and pinpoint the exact failing command and exit code",
      "Enable verbose debug logging using `ACTIONS_STEP_DEBUG` and `ACTIONS_RUNNER_DEBUG`",
      "Re-run only failed jobs without re-running passing steps to save time and compute quotas"
    ],
    simpleExplanation: "When a red X appears on your PR, don't guess! Click on the red X, open the failed step, and read the exact error message. You can even click 'Re-run failed jobs' once you push a fix.",
    analogy: "Reading the diagnostic error code from your car's check-engine computer to know exactly which spark plug needs replacement.",
    technicalExplanation: "GitHub Actions streams stdout/stderr from each step. A step fails if its process exits with non-zero code. Setting secret `ACTIONS_STEP_DEBUG: true` enables internal runner diagnostic logs.",
    syntaxAndCommands: [
      "ACTIONS_STEP_DEBUG: true",
      "ACTIONS_RUNNER_DEBUG: true",
      "Re-run all jobs / Re-run failed jobs"
    ],
    walkthrough: [
      {
        command: "gh run list --limit 3",
        explanation: "List recent workflow run statuses using GitHub CLI.",
        expectedOutput: "completed  success  CI Pipeline  main  8fa12cd\ncompleted  failure  CI Pipeline  main  3b18e51"
      }
    ],
    practicalExercise: "Deliberately cause a test failure in a practice branch, inspect the red X log on GitHub, and practice reading the stack trace.",
    commonErrorsAndFixes: [
      {
        error: "Re-running all 15 passing jobs when only 1 job had a temporary network glitch.",
        fix: "Click the dropdown on GitHub: 'Re-run failed jobs'. This only executes the failing job, saving 90% of execution time."
      }
    ],
    industryUseCase: "Site reliability engineers monitor GitHub Actions execution metrics and configure alerts in Slack when production deployment workflows fail.",
    interviewQuestions: [
      {
        question: "How do you enable verbose diagnostic debug logging in GitHub Actions?",
        answer: "Create a repository secret named `ACTIONS_STEP_DEBUG` set to `true`, and optionally `ACTIONS_RUNNER_DEBUG` set to `true`."
      }
    ],
    quiz: {
      question: "What causes a GitHub Actions step to be marked as failed (Red X)?",
      options: [
        "The step printed a warning message to the terminal.",
        "The step's process terminated with a non-zero exit code (e.g. exit 1).",
        "The step took longer than 5 seconds.",
        "The step did not include any comments."
      ],
      correctIndex: 1,
      explanation: "POSIX standard: exit code 0 indicates success; any non-zero exit code signals failure to the runner."
    },
    officialReference: {
      title: "GitHub Docs: Using workflow run logs",
      url: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/using-workflow-run-logs"
    },
    checklist: [
      "I know how to read live runner logs",
      "I can locate the exact line that caused a failure",
      "I know how to re-run only failed jobs"
    ]
  }
];
