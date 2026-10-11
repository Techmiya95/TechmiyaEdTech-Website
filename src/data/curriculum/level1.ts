import { CurriculumUnit } from "./types";

export const level1Units: CurriculumUnit[] = [
  {
    id: "unit-01",
    unitNumber: 1,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "What is Version Control & Why Every Developer Needs It",
    slug: "what-is-version-control",
    estimatedMinutes: 12,
    topics: ["Version Control Systems", "History Tracking", "Rollback Capability", "Collaboration Challenges"],
    learningObjectives: [
      "Understand why saving manual copies like 'final_v2_really_final.zip' fails at scale",
      "Explain the core purpose of a Version Control System (VCS)",
      "Recognize how version control enables safe experimentation and auditability"
    ],
    simpleExplanation: "Imagine writing a long book. If you accidentally delete chapter 3, or want to compare how your story sounded last Tuesday compared to today, you need a time machine. Version control is that time machine for code.",
    analogy: "Like Google Docs version history, but built specifically for entire folders containing thousands of code files, with precise author attribution and diff highlights.",
    technicalExplanation: "A Version Control System (VCS) records changes to a file or set of files over time so that you can recall specific versions later. It maintains a directed acyclic graph (DAG) of project states.",
    syntaxAndCommands: ["git --version"],
    walkthrough: [
      {
        command: "git --version",
        explanation: "Check if Git is currently installed on your operating system and view its installed version number.",
        expectedOutput: "git version 2.44.0"
      }
    ],
    practicalExercise: "Open your terminal and verify whether Git is already installed on your machine. Note down the version.",
    commonErrorsAndFixes: [
      {
        error: "'git' is not recognized as an internal or external command.",
        fix: "Git is not installed or not added to your system PATH. Download and install Git from https://git-scm.com."
      }
    ],
    industryUseCase: "Google, Meta, and Microsoft manage billions of lines of code where thousands of engineers ship changes every minute without overwriting each other.",
    interviewQuestions: [
      {
        question: "Why is a Version Control System necessary in a software engineering team?",
        answer: "A VCS provides audit trails, simultaneous multi-developer collaboration, automated conflict detection, and the ability to revert regressions without data loss."
      }
    ],
    quiz: {
      question: "Which of the following problems does a Version Control System primarily solve?",
      options: [
        "It speeds up internet connection speeds.",
        "It tracks file changes over time, facilitates team collaboration, and allows rolling back mistakes.",
        "It automatically writes unit test cases for you.",
        "It compiles high-level code directly into assembly."
      ],
      correctIndex: 1,
      explanation: "VCS tracks who changed what and when, enables multiple developers to work concurrently, and provides safe recovery mechanisms."
    },
    officialReference: {
      title: "Pro Git: Getting Started - About Version Control",
      url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
    },
    checklist: [
      "I understand why manual file backups are error-prone",
      "I can explain what a VCS is in simple words",
      "I checked my local terminal for the Git binary"
    ]
  },
  {
    id: "unit-02",
    unitNumber: 2,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Centralized vs. Distributed Version Control (CVCS vs. DVCS)",
    slug: "cvcs-vs-dvcs",
    estimatedMinutes: 15,
    topics: ["SVN", "Perforce", "Git Architecture", "Offline Commits", "Full Repository Clones"],
    learningObjectives: [
      "Distinguish Centralized VCS (like SVN) from Distributed VCS (like Git)",
      "Explain why every Git clone is a full backup of the entire project history",
      "Understand how distributed systems enable offline productivity"
    ],
    simpleExplanation: "In old centralized systems, there was only one master library in the cloud. If the library's internet went down, nobody could read or save work. In Git, every developer has the entire library in their pocket.",
    analogy: "A centralized system is like a bank teller window where everyone waits in line. A distributed system is like having your own offline ledger that syncs whenever you reconnect.",
    technicalExplanation: "In a CVCS, clients check out only the latest snapshot from a single server. In a DVCS like Git, clients fully mirror the entire repository, including every commit and branch history since inception.",
    syntaxAndCommands: ["git clone <url>", "git log --oneline"],
    walkthrough: [
      {
        command: "git help clone",
        explanation: "View official manual for how Git clones complete repository histories.",
        expectedOutput: "GIT-CLONE(1)                   Git Manual..."
      }
    ],
    practicalExercise: "Contrast SVN with Git on paper: write down 3 scenarios where working offline is essential for software engineers.",
    commonErrorsAndFixes: [
      {
        error: "Thinking you need an internet connection to commit code in Git.",
        fix: "Git commits are 100% local. You only need network access when pushing or pulling to a remote host like GitHub."
      }
    ],
    industryUseCase: "A developer working on an airplane with no Wi-Fi can branch, edit, test, and commit hundreds of changes locally, then push to GitHub once landed.",
    interviewQuestions: [
      {
        question: "What is the primary architectural advantage of Git over Subversion (SVN)?",
        answer: "Every developer has a complete local clone of the entire repository history, eliminating single points of failure and enabling lightning-fast offline operations."
      }
    ],
    quiz: {
      question: "What happens if the main GitHub server goes down while using a Distributed VCS like Git?",
      options: [
        "All local project code is erased permanently.",
        "Developers cannot make any local commits.",
        "Developers can still branch, commit, and inspect history locally because every clone is a complete repository copy.",
        "The computer will refuse to run Git commands until rebooted."
      ],
      correctIndex: 2,
      explanation: "Because Git is distributed, every clone has full history. Developers continue working locally uninterrupted."
    },
    officialReference: {
      title: "Git Official Documentation: Distributed Git",
      url: "https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows"
    },
    checklist: [
      "I know the difference between Centralized and Distributed VCS",
      "I understand that Git operations are local-first",
      "I recognize that every clone serves as a resilient backup"
    ]
  },
  {
    id: "unit-03",
    unitNumber: 3,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Problems Solved by Git in Modern Engineering Teams",
    slug: "problems-solved-by-git",
    estimatedMinutes: 15,
    topics: ["Code Conflicts", "Blame Tracking", "Audit Logs", "Continuous Integration"],
    learningObjectives: [
      "Identify the 5 core collaboration problems solved by Git",
      "Understand how Git provides cryptographic integrity using SHA-1 / SHA-256 hashes",
      "Learn how Git enables automated testing pipelines"
    ],
    simpleExplanation: "Before Git, sharing code meant emailing zip files, manually merging changed lines, and guessing who broke the login screen. Git automates tracking and integrity checking.",
    analogy: "Like a high-security bank vault log with tamper-proof timestamps and digital signatures for every transaction.",
    technicalExplanation: "Git content is content-addressed using SHA-1 cryptographic hashes. It is physically impossible to change the contents of any file or commit without Git detecting the hash alteration.",
    syntaxAndCommands: ["git log", "git blame <file>"],
    walkthrough: [
      {
        command: "git hash-object --stdin <<< 'hello techmiya'",
        explanation: "See how Git computes a SHA-1 checksum for any arbitrary string content.",
        expectedOutput: "3b18e512dda7e4949b6a070e17621f83cbe99c73"
      }
    ],
    practicalExercise: "Consider a team of 10 developers editing a single file. Describe what would happen without Git vs with Git.",
    commonErrorsAndFixes: [
      {
        error: "Assuming Git stores file differences (deltas) like older VCS tools.",
        fix: "Git thinks of its data more like a series of snapshots of a miniature filesystem, with deduplicated blob references."
      }
    ],
    industryUseCase: "Stripe and Amazon use Git commit history as legal compliance evidence to prove exactly which developer authored a financial algorithm change.",
    interviewQuestions: [
      {
        question: "How does Git ensure data integrity?",
        answer: "Everything in Git is checksummed before it is stored and is referenced by that checksum. You cannot lose information in transit or get file corruption without Git catching it."
      }
    ],
    quiz: {
      question: "How does Git represent and verify the integrity of commits and files?",
      options: [
        "Using randomized incrementing integer IDs (1, 2, 3).",
        "Using cryptographic hash checksums (SHA-1 / SHA-256).",
        "By saving files to Microsoft OneDrive.",
        "By asking the user for a password before every file read."
      ],
      correctIndex: 1,
      explanation: "Git uses cryptographic hashes to uniquely identify and guarantee the integrity of every object, commit, and tree."
    },
    officialReference: {
      title: "Git SCM: Git Basics - Git Has Integrity",
      url: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_git_has_integrity"
    },
    checklist: [
      "I can explain cryptographic integrity in Git",
      "I know why content-addressed storage prevents silent data corruption",
      "I understand the business value of Git audit logs"
    ]
  },
  {
    id: "unit-04",
    unitNumber: 4,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Git vs. GitHub: Demystifying the Confusion",
    slug: "git-vs-github",
    estimatedMinutes: 12,
    topics: ["Git CLI", "GitHub Cloud", "GitLab & Bitbucket", "Social Coding"],
    learningObjectives: [
      "Clearly differentiate between the Git command-line engine and GitHub web platform",
      "Identify other Git hosting providers (GitLab, Bitbucket, Azure DevOps)",
      "Explain the unique value GitHub adds to the open-source and developer community"
    ],
    simpleExplanation: "Git is the engine in your car. GitHub is the global highway network, parking garage, and car enthusiast community where you share your journeys.",
    analogy: "Git is like the camera that records video. GitHub is like YouTube where you upload, share, and discuss videos with the world.",
    technicalExplanation: "Git is a local CLI version control tool. GitHub is a commercial SaaS hosting platform built on top of Git that provides remote repository hosting, identity management, Pull Requests, Issue trackers, and CI/CD pipelines.",
    syntaxAndCommands: ["git remote -v"],
    walkthrough: [
      {
        command: "git remote -v",
        explanation: "Check which remote hosting URLs (e.g., on GitHub) your local Git repository is linked with.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Create a free personal GitHub account on github.com if you do not already have one.",
    commonErrorsAndFixes: [
      {
        error: "Confusing Git installation with GitHub account creation.",
        fix: "Installing Git gives you the local tool; creating a GitHub account gives you cloud hosting for remote repositories."
      }
    ],
    industryUseCase: "Over 100 million developers use GitHub to host open-source libraries like React, Node.js, and Linux, enabling worldwide peer collaboration.",
    interviewQuestions: [
      {
        question: "Can you use Git without GitHub? Can you use GitHub without Git?",
        answer: "Yes, you can use Git completely offline with no GitHub account. GitHub relies on Git under the hood, but also provides a web UI for basic edits."
      }
    ],
    quiz: {
      question: "Which of the following statements is 100% TRUE?",
      options: [
        "Git was created by Microsoft; GitHub was created by Linus Torvalds.",
        "You cannot use Git on your computer unless you pay for a GitHub subscription.",
        "Git is a local version control software; GitHub is a cloud hosting service for Git repositories.",
        "Git and GitHub are two names for the exact same software package."
      ],
      correctIndex: 2,
      explanation: "Git is the free, open-source version control tool; GitHub is the web-based repository hosting service."
    },
    officialReference: {
      title: "GitHub Docs: Getting started with GitHub",
      url: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    checklist: [
      "I know Git runs locally on my machine",
      "I understand GitHub is an online hosting and collaboration service",
      "I know alternative Git hosting platforms exist"
    ]
  },
  {
    id: "unit-05",
    unitNumber: 5,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Installing Git on Windows, macOS, and Linux",
    slug: "installing-git",
    estimatedMinutes: 15,
    topics: ["Git for Windows", "Git Bash", "Homebrew", "apt-get / yum", "PATH Variable"],
    learningObjectives: [
      "Install Git correctly on Windows (Git for Windows / Git Bash)",
      "Install Git on macOS using Homebrew or Xcode Command Line Tools",
      "Install Git on Ubuntu/Debian Linux using apt",
      "Verify system PATH environment settings"
    ],
    simpleExplanation: "To speak Git, your computer's terminal needs to have the Git dictionary installed. We install the official binary package for your operating system.",
    analogy: "Like installing Python or Node.js before you can run `.py` or `.js` scripts.",
    technicalExplanation: "Installing Git places the `git` executable into your operating system's binary PATH directory (`C:\\Program Files\\Git\\bin` or `/usr/bin/git`), making it callable from any terminal prompt.",
    syntaxAndCommands: [
      "Windows: winget install --id Git.Git -e --source winget",
      "macOS: brew install git",
      "Linux: sudo apt update && sudo apt install git -y"
    ],
    walkthrough: [
      {
        command: "git --version",
        explanation: "Verify installation succeeded and binary is on system PATH.",
        expectedOutput: "git version 2.44.0.windows.1"
      }
    ],
    practicalExercise: "Run `git --version` in your terminal. If not installed, use your OS installer to set it up.",
    commonErrorsAndFixes: [
      {
        error: "Windows command prompt does not recognize 'git' after installation.",
        fix: "Close and reopen your terminal or VS Code window so the updated PATH environment variables take effect."
      }
    ],
    industryUseCase: "Development teams use standardized Docker images or Ansible scripts to guarantee every team member and server runs the exact same Git version.",
    interviewQuestions: [
      {
        question: "What is Git Bash on Windows?",
        answer: "Git Bash provides a Bash emulation environment on Windows bundled with common Unix utilities (ssh, scp, grep, find) alongside the Git CLI."
      }
    ],
    quiz: {
      question: "Which command verifies that Git was successfully installed on your terminal?",
      options: [
        "git check",
        "git --version",
        "git status --all",
        "git verify-install"
      ],
      correctIndex: 1,
      explanation: "`git --version` prints the active Git binary version and confirms terminal recognition."
    },
    officialReference: {
      title: "Git SCM: Installing Git",
      url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
    },
    checklist: [
      "I have Git installed on my system",
      "I can execute git commands in terminal",
      "I know where Git executable lives"
    ]
  },
  {
    id: "unit-06",
    unitNumber: 6,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Terminal Basics & Navigating Folders for Non-IT Learners",
    slug: "terminal-basics-navigation",
    estimatedMinutes: 15,
    topics: ["CLI vs GUI", "pwd", "ls / dir", "cd", "mkdir", "Tab Completion"],
    learningObjectives: [
      "Navigate directory structures with confidence using basic CLI commands",
      "Understand current working directory (`pwd`), listing files (`ls`), and changing folders (`cd`)",
      "Use tab completion to avoid typing mistakes"
    ],
    simpleExplanation: "The terminal is simply a text-based File Explorer. Instead of double-clicking folders with a mouse, you tell the computer where to go with short keyboard words.",
    analogy: "Like texting your GPS destination instead of tapping the map screen.",
    technicalExplanation: "The Command Line Interface (CLI) directly interprets shell commands and manipulates the operating system's filesystem tree via POSIX standard primitives.",
    syntaxAndCommands: [
      "pwd (print working directory)",
      "ls or dir (list files)",
      "cd <path> (change directory)",
      "mkdir <name> (make directory)"
    ],
    walkthrough: [
      {
        command: "pwd",
        explanation: "Print the absolute file path of your current location.",
        expectedOutput: "/d/TechmiyaEdTech-Website"
      },
      {
        command: "ls -la",
        explanation: "List all files including hidden dotfiles (.git, .gitignore).",
        expectedOutput: "drwxr-xr-x 1 user group 0 Oct 11 .git\n-rw-r--r-- 1 user group 345 Oct 11 .gitignore"
      }
    ],
    practicalExercise: "Create a practice directory named `git-practice` using `mkdir git-practice` and navigate into it using `cd git-practice`.",
    commonErrorsAndFixes: [
      {
        error: "cd: The system cannot find the path specified.",
        fix: "Ensure directory name is spelled correctly and exists in the current folder. Use `ls` or `dir` to verify."
      }
    ],
    industryUseCase: "Cloud servers (AWS, Azure, Google Cloud) have no graphical mouse interface; engineers manage all deployments via CLI terminals.",
    interviewQuestions: [
      {
        question: "Why do software engineers prefer command-line Git over GUI clients?",
        answer: "CLI provides full access to 100% of Git flags and features, enables shell automation/scripting, and works identically across local laptops and remote headless cloud servers."
      }
    ],
    quiz: {
      question: "Which command shows the current folder path you are located in inside a terminal?",
      options: [
        "locate",
        "pwd",
        "whereami",
        "dir --current"
      ],
      correctIndex: 1,
      explanation: "`pwd` stands for 'Print Working Directory' and displays your active path."
    },
    officialReference: {
      title: "Ubuntu Community: Command Line Navigation Tutorial",
      url: "https://ubuntu.com/tutorials/command-line-for-beginners#3-navigating-the-filesystem"
    },
    checklist: [
      "I know how to navigate folders using cd",
      "I can list files including hidden dotfiles",
      "I can create new folders using mkdir"
    ]
  },
  {
    id: "unit-07",
    unitNumber: 7,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "First-Time Git Configuration (`user.name`, `user.email`, `init.defaultBranch`)",
    slug: "first-time-git-configuration",
    estimatedMinutes: 15,
    topics: ["git config", "Global vs Local", "Author Attribution", "Default Branch main"],
    learningObjectives: [
      "Configure your developer identity (`user.name` and `user.email`) in Git",
      "Understand the three config scopes: `--system`, `--global`, and `--local`",
      "Set `init.defaultBranch` to `main` matching modern industry standards",
      "Inspect active configurations with `git config --list --show-origin`"
    ],
    simpleExplanation: "Every time you save a snapshot in Git, Git writes your name and email on it. You must tell Git who you are once, so your team knows who wrote each feature.",
    analogy: "Like stamping your official signature and return address on an envelope before sending it.",
    technicalExplanation: "Git stores configuration in INI format files: system-level (`/etc/gitconfig`), user global (`~/.gitconfig`), and repository local (`.git/config`). More specific scopes override broader scopes.",
    syntaxAndCommands: [
      "git config --global user.name \"Your Name\"",
      "git config --global user.email \"you@example.com\"",
      "git config --global init.defaultBranch main",
      "git config --list"
    ],
    walkthrough: [
      {
        command: "git config --global user.name \"Techmiya Student\"",
        explanation: "Sets your global author name for all future commits.",
        expectedOutput: ""
      },
      {
        command: "git config --global user.email \"student@techmiyaedtech.com\"",
        explanation: "Sets your global author email, which links commits to your GitHub profile.",
        expectedOutput: ""
      },
      {
        command: "git config --global init.defaultBranch main",
        explanation: "Ensures newly initialized repositories use 'main' instead of legacy 'master'.",
        expectedOutput: ""
      },
      {
        command: "git config --global user.name",
        explanation: "Verify your configured author name.",
        expectedOutput: "Techmiya Student"
      }
    ],
    practicalExercise: "Run `git config --list` and locate your configured `user.name` and `user.email` entries.",
    commonErrorsAndFixes: [
      {
        error: "fatal: empty ident name (for <user>) not allowed",
        fix: "You forgot to configure `user.name` or `user.email`. Run `git config --global user.name ...`."
      }
    ],
    industryUseCase: "Companies like RedHat and Microsoft enforce commit email validation to prevent anonymous code merges into critical operating systems.",
    interviewQuestions: [
      {
        question: "What is the precedence order of Git configuration files?",
        answer: "Local (`.git/config`) overrides Global (`~/.gitconfig`), which in turn overrides System (`/etc/gitconfig`)."
      }
    ],
    quiz: {
      question: "Which command configures your email address across ALL repositories on your computer?",
      options: [
        "git config --all email 'dev@example.com'",
        "git config --global user.email 'dev@example.com'",
        "git set user.email 'dev@example.com'",
        "git email --system 'dev@example.com'"
      ],
      correctIndex: 1,
      explanation: "`git config --global user.email` writes your email to your user profile `~/.gitconfig`."
    },
    officialReference: {
      title: "Git SCM: First-Time Git Setup",
      url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup"
    },
    checklist: [
      "I configured user.name and user.email",
      "I set init.defaultBranch to main",
      "I verified my configuration with git config --list"
    ]
  },
  {
    id: "unit-08",
    unitNumber: 8,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Git Line Ending Configuration (`core.autocrlf` for Cross-Platform Teams)",
    slug: "git-line-endings-autocrlf",
    estimatedMinutes: 12,
    topics: ["CRLF vs LF", "Windows vs Linux", "core.autocrlf", ".gitattributes"],
    learningObjectives: [
      "Understand why Windows uses CRLF (`\\r\\n`) while macOS and Linux use LF (`\\n`)",
      "Configure `core.autocrlf true` on Windows and `core.autocrlf input` on macOS/Linux",
      "Prevent spurious full-file diffs caused by invisible line ending conversions"
    ],
    simpleExplanation: "Windows and Mac/Linux hit 'Enter' differently. If unconfigured, opening a file on Windows makes Git think every single line in the entire file changed, creating huge fake diffs.",
    analogy: "Like switching between British and American spelling; Git normalizes them behind the scenes so nobody gets confused.",
    technicalExplanation: "Windows text files end with Carriage Return + Line Feed (`\\r\\n`), whereas Unix systems use Line Feed (`\\n`). Git converts CRLF to LF upon commit and restores CRLF upon checkout on Windows when `core.autocrlf true` is enabled.",
    syntaxAndCommands: [
      "Windows: git config --global core.autocrlf true",
      "macOS/Linux: git config --global core.autocrlf input"
    ],
    walkthrough: [
      {
        command: "git config --global core.autocrlf true",
        explanation: "Configure automatic line ending normalization on Windows.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Check your current line ending setting: `git config core.autocrlf`.",
    commonErrorsAndFixes: [
      {
        error: "warning: CRLF will be replaced by LF in file.txt.",
        fix: "This is a benign warning informing you that Git's autocrlf is working correctly to normalize line endings in the repository."
      }
    ],
    industryUseCase: "Cross-platform teams collaborating across Windows workstations and Linux CI servers rely on `.gitattributes` to enforce uniform LF endings in production.",
    interviewQuestions: [
      {
        question: "Why should teams configure `core.autocrlf` or use `.gitattributes`?",
        answer: "To prevent cross-platform line ending discrepancies that pollute commit diffs and break shell scripts requiring Unix LF endings."
      }
    ],
    quiz: {
      question: "What is the recommended `core.autocrlf` setting for developers running Windows?",
      options: [
        "false",
        "true",
        "input",
        "never"
      ],
      correctIndex: 1,
      explanation: "On Windows, setting `core.autocrlf true` converts CRLF to LF on commit and LF to CRLF on checkout."
    },
    officialReference: {
      title: "GitHub Docs: Configuring Git to handle line endings",
      url: "https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings"
    },
    checklist: [
      "I understand CRLF vs LF line endings",
      "I set core.autocrlf appropriate for my OS",
      "I know how .gitattributes standardizes line endings"
    ]
  },
  {
    id: "unit-09",
    unitNumber: 9,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Creating a Project Folder & Initializing a Repository (`git init`)",
    slug: "creating-project-git-init",
    estimatedMinutes: 15,
    topics: ["git init", ".git Directory", "Repository Initialization", "Root Directory"],
    learningObjectives: [
      "Create a clean directory and transform it into a Git repository using `git init`",
      "Explore the hidden `.git` folder structure (objects, refs, HEAD, config)",
      "Understand why you should never create nested Git repositories accidentally"
    ],
    simpleExplanation: "Running `git init` wakes up Git and creates a secret management office (the `.git` folder) inside your project. From that moment on, Git watches the folder.",
    analogy: "Like placing a security camera and a timestamped visitor book inside your new office.",
    technicalExplanation: "`git init` creates the `.git` skeleton directory containing `HEAD`, `config`, `description`, `hooks/`, `info/`, `objects/`, and `refs/`. This is where all history, branches, and object databases live.",
    syntaxAndCommands: ["mkdir <project>", "cd <project>", "git init"],
    walkthrough: [
      {
        command: "mkdir techmiya-demo && cd techmiya-demo",
        explanation: "Create and enter a new project directory.",
        expectedOutput: ""
      },
      {
        command: "git init",
        explanation: "Initialize Git repository.",
        expectedOutput: "Initialized empty Git repository in /Users/dev/techmiya-demo/.git/"
      },
      {
        command: "ls -a",
        explanation: "Inspect directory contents, observing hidden .git directory.",
        expectedOutput: ".  ..  .git"
      }
    ],
    practicalExercise: "Create a temporary folder and run `git init`. Inspect the contents of `.git` using `ls -la .git`.",
    commonErrorsAndFixes: [
      {
        error: "Accidentally running `git init` inside your computer's Desktop or User home directory.",
        fix: "Delete the unintended `.git` folder immediately: `rm -rf .git` (mac/linux) or `rmdir /s /q .git` (windows). Only run `git init` inside project root folders."
      }
    ],
    industryUseCase: "Every modern software project, from React apps to backend microservices, starts with `git init` before the first line of code is committed.",
    interviewQuestions: [
      {
        question: "What does `git init` actually do on the filesystem?",
        answer: "It creates a hidden `.git` directory containing the internal object database, ref pointers, config file, and hook templates."
      }
    ],
    quiz: {
      question: "Where does Git store all of a repository's commit history, branches, and objects?",
      options: [
        "In a public cloud database on github.com.",
        "In the hidden `.git` directory at the root of the project.",
        "Inside the Windows Registry.",
        "In your computer's temporary RAM memory."
      ],
      correctIndex: 1,
      explanation: "All Git data is stored locally in the hidden `.git` directory at the project root."
    },
    officialReference: {
      title: "Git SCM: git-init Documentation",
      url: "https://git-scm.com/docs/git-init"
    },
    checklist: [
      "I know how to initialize a repository with git init",
      "I know what the hidden .git directory represents",
      "I know not to initialize git in home or root folders"
    ]
  },
  {
    id: "unit-10",
    unitNumber: 10,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "The Three Trees Architecture: Working Directory, Staging Area & Repository",
    slug: "three-trees-architecture",
    estimatedMinutes: 18,
    topics: ["Working Directory", "Index / Staging Area", "HEAD / Commit History", "Lifecycle of Files"],
    learningObjectives: [
      "Master Git's core 3-tier architecture: Working Directory, Index/Staging, and Repository",
      "Trace the progression of a file from untracked/modified to staged to committed",
      "Explain why the staging area gives developers granular control over change sets"
    ],
    simpleExplanation: "Think of your project like a package shipment. Working Directory is your messy desk. The Staging Area is the cardboard shipping box where you place only what you want to send. The Repository is the sealed, stamped shipment stored in the archive.",
    analogy: "A shopping cart (staging area) where you place items from supermarket shelves (working dir) before paying at the checkout register (committing to repository).",
    technicalExplanation: "Git manages three distinct states: Working Directory (sandbox files on disk), Index (staging area binary file `.git/index` preparing the next tree), and HEAD (pointer to latest commit snapshot).",
    syntaxAndCommands: ["git status", "git add <file>", "git commit -m <msg>"],
    walkthrough: [
      {
        command: "echo 'console.log(\"Hello\");' > app.js",
        explanation: "Create file in Working Directory.",
        expectedOutput: ""
      },
      {
        command: "git status -s",
        explanation: "Notice '??' showing untracked status in working directory.",
        expectedOutput: "?? app.js"
      },
      {
        command: "git add app.js",
        explanation: "Move file into Staging Area (Index).",
        expectedOutput: ""
      },
      {
        command: "git status -s",
        explanation: "Notice 'A' showing staged status in index.",
        expectedOutput: "A  app.js"
      }
    ],
    practicalExercise: "Draw Git's 3 trees on paper and label how `git add` and `git commit` move files between them.",
    commonErrorsAndFixes: [
      {
        error: "Editing a file after running `git add` and wondering why the edit wasn't committed.",
        fix: "`git add` captures the file state at the exact moment you staged it. If you edit it again, you must run `git add` again to stage the new changes."
      }
    ],
    industryUseCase: "Engineers working on multi-feature bugfixes selectively stage only relevant lines (`git add -p`), keeping unrelated refactorings out of the production commit.",
    interviewQuestions: [
      {
        question: "Explain the difference between the Working Directory and the Staging Area.",
        answer: "The Working Directory is your active local files on disk. The Staging Area (Index) is an intermediate holding area that determines what changes will be recorded in the next commit snapshot."
      }
    ],
    quiz: {
      question: "Which Git command moves changes from the Working Directory into the Staging Area?",
      options: [
        "git push",
        "git add",
        "git commit",
        "git checkout"
      ],
      correctIndex: 1,
      explanation: "`git add` copies file modifications from the working directory into Git's index (staging area)."
    },
    officialReference: {
      title: "Pro Git: Git Basics - Recording Changes to the Repository",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"
    },
    checklist: [
      "I can name and explain the Three Trees in Git",
      "I understand the purpose of the Staging Area",
      "I know file lifecycle states: untracked, modified, staged, committed"
    ]
  },
  {
    id: "unit-11",
    unitNumber: 11,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Inspecting Repository State with `git status`",
    slug: "inspecting-state-git-status",
    estimatedMinutes: 12,
    topics: ["git status", "Short Format", "Branch Information", "Untracked Files"],
    learningObjectives: [
      "Interpret standard `git status` output with complete confidence",
      "Read short-format status indicators (`git status -s` / `-b`)",
      "Identify which files are staged, modified, or untracked"
    ],
    simpleExplanation: "`git status` is your project dashboard. Whenever you sit down at your desk or wonder 'what was I doing?', run `git status` first.",
    analogy: "Like checking your car dashboard for fuel level, speed, and engine warning lights before driving.",
    technicalExplanation: "`git status` compares the tree at HEAD against the index, and the index against the working tree, categorizing files into staged, unstaged, and untracked sets.",
    syntaxAndCommands: ["git status", "git status -s", "git status -sb"],
    walkthrough: [
      {
        command: "git status",
        explanation: "Inspect full detailed status of active branch and working tree.",
        expectedOutput: "On branch main\nNo commits yet\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tapp.js\n\nnothing added to commit but untracked files present"
      },
      {
        command: "git status -sb",
        explanation: "Inspect compact status with branch tracking indicator.",
        expectedOutput: "## main\n?? app.js"
      }
    ],
    practicalExercise: "Create 2 files, stage 1 of them, and run `git status -s` to observe both green 'A' and red '??' indicators.",
    commonErrorsAndFixes: [
      {
        error: "Ignoring git status advice.",
        fix: "Git status almost always prints helpful hints enclosed in parentheses (e.g. `use \"git restore <file>...\" to discard changes in working directory`). Read them!"
      }
    ],
    industryUseCase: "Senior engineers run `git status` instinctively before almost every commit, branch switch, or pull operation to prevent accidental overrides.",
    interviewQuestions: [
      {
        question: "What do the two columns in `git status -s` represent?",
        answer: "The first column shows the status of the staging area relative to HEAD. The second column shows the status of the working tree relative to the staging area."
      }
    ],
    quiz: {
      question: "In `git status -s`, what does the symbol '??' next to a filename signify?",
      options: [
        "The file has a syntax error.",
        "The file is untracked by Git.",
        "The file was deleted from GitHub.",
        "The file has a merge conflict."
      ],
      correctIndex: 1,
      explanation: "'??' indicates that the file exists in your directory but has never been added to Git tracking."
    },
    officialReference: {
      title: "Git SCM: git-status Documentation",
      url: "https://git-scm.com/docs/git-status"
    },
    checklist: [
      "I know to run git status frequently",
      "I can read standard and short status formats",
      "I understand the difference between red (unstaged) and green (staged) status"
    ]
  },
  {
    id: "unit-12",
    unitNumber: 12,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Staging Changes with `git add` and Pathspecs",
    slug: "staging-changes-git-add",
    estimatedMinutes: 15,
    topics: ["git add", "Pathspecs", "git add .", "git add -A", "Interactive Staging -p"],
    learningObjectives: [
      "Stage specific files, directories, and glob patterns",
      "Understand the difference between `git add .` and `git add -A`",
      "Learn how to review patch hunks before staging with `git add -p`"
    ],
    simpleExplanation: "`git add` lets you choose exactly which pieces of work are ready to be saved into the next milestone snapshot.",
    analogy: "Selecting specific items to put into a gift box rather than shoving everything from your desk inside.",
    technicalExplanation: "`git add` updates the index using the current content found in the working tree, creating blob objects in `.git/objects` and hashing their content.",
    syntaxAndCommands: [
      "git add <file>",
      "git add file1 file2",
      "git add *.js",
      "git add .",
      "git add -p"
    ],
    walkthrough: [
      {
        command: "git add app.js",
        explanation: "Stage individual file explicitly.",
        expectedOutput: ""
      },
      {
        command: "git add src/",
        explanation: "Stage all modified files under the src directory.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Modify 2 files. Use `git add <file1>` to stage only the first file, and verify with `git status` that file2 remains unstaged.",
    commonErrorsAndFixes: [
      {
        error: "Blindly typing `git add .` and staging sensitive password files or heavy 2GB build folders.",
        fix: "Always review with `git status` before committing, or unstage with `git restore --staged <file>`."
      }
    ],
    industryUseCase: "Code review standards require atomic commits. `git add -p` lets developers stage only 5 lines of a bugfix while leaving 20 lines of experimental logging unstaged.",
    interviewQuestions: [
      {
        question: "What does `git add -p` (patch mode) do?",
        answer: "It interactively prompts the developer hunk-by-hunk, allowing selective staging of specific line changes within a single file."
      }
    ],
    quiz: {
      question: "Which command stages ONLY files ending in `.css` inside the current folder?",
      options: [
        "git stage css",
        "git add *.css",
        "git commit *.css",
        "git select --type css"
      ],
      correctIndex: 1,
      explanation: "`git add *.css` uses a glob pattern to stage all matching CSS files."
    },
    officialReference: {
      title: "Git SCM: git-add Documentation",
      url: "https://git-scm.com/docs/git-add"
    },
    checklist: [
      "I know how to stage individual files",
      "I know how to stage directories and globs",
      "I know the risk of blindly using git add ."
    ]
  },
  {
    id: "unit-13",
    unitNumber: 13,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Creating Snapshots with `git commit` & Writing Meaningful Commit Messages",
    slug: "creating-snapshots-git-commit",
    estimatedMinutes: 15,
    topics: ["git commit", "Commit Messages", "Atomic Commits", "Imperative Mood", "50/72 Rule"],
    learningObjectives: [
      "Commit staged changes permanently into local repository history",
      "Structure professional commit messages following the 50/72 rule",
      "Understand what atomic commits are and why they matter for code reviews"
    ],
    simpleExplanation: "A commit is a permanent milestone snapshot. Once committed, you can always travel back in time to this exact second in your project's history.",
    analogy: "Like hitting 'Save Game' in a video game before entering a dangerous dungeon.",
    technicalExplanation: "A commit object points to a root tree object (representing directory hierarchy), contains metadata (author, committer, timestamp), zero or more parent commit hashes, and the commit log message.",
    syntaxAndCommands: [
      "git commit -m \"feat: message\"",
      "git commit -m \"feat: title\" -m \"Detailed description explanation.\"",
      "git commit -v"
    ],
    walkthrough: [
      {
        command: "git commit -m \"feat: implement user registration form\"",
        explanation: "Create commit with concise imperative message.",
        expectedOutput: "[main (root-commit) 8fa12cd] feat: implement user registration form\n 1 file changed, 10 insertions(+)\n create mode 100644 app.js"
      }
    ],
    practicalExercise: "Make a change, stage it, and commit it with a message using Conventional Commit style: `feat: add ...` or `fix: resolve ...`.",
    commonErrorsAndFixes: [
      {
        error: "Writing useless commit messages like 'fixed stuff', 'changes', or 'asdfgh'.",
        fix: "Follow the rule: 'If applied, this commit will <your message>'. Example: 'fix: resolve navbar overlap on mobile'."
      }
    ],
    industryUseCase: "When production crashes at 2 AM, the on-call engineer reads `git log` to find the exact commit that introduced the bug. Clear messages save hours of downtime.",
    interviewQuestions: [
      {
        question: "What is the 50/72 rule for Git commit messages?",
        answer: "Keep the subject line under 50 characters, capitalize it, do not end with a period, use imperative mood, and wrap the detailed body at 72 characters."
      }
    ],
    quiz: {
      question: "Which of the following commit messages best follows professional software engineering standards?",
      options: [
        "wip",
        "updated files for sprint",
        "fix(auth): prevent null pointer exception on missing JWT token",
        "done with today's work"
      ],
      correctIndex: 2,
      explanation: "It follows the conventional commit standard: type(scope), imperative verb, and explains the concrete change."
    },
    officialReference: {
      title: "Git SCM: git-commit Documentation",
      url: "https://git-scm.com/docs/git-commit"
    },
    checklist: [
      "I know how to commit staged changes with git commit",
      "I write concise, imperative commit messages",
      "I understand why atomic commits keep history clean"
    ]
  },
  {
    id: "unit-14",
    unitNumber: 14,
    level: 1,
    levelTitle: "Level 1 — Foundations",
    title: "Configuring `.gitignore` & Protecting Secrets from Version Control",
    slug: "gitignore-configuration-and-secrets",
    estimatedMinutes: 15,
    topics: [".gitignore", "Ignored Patterns", "node_modules", "Environment Secrets", "git check-ignore"],
    learningObjectives: [
      "Create and structure a comprehensive `.gitignore` file",
      "Master ignore syntax: wildcards (`*`), directories (`/`), and negations (`!`)",
      "Prevent accidental leakage of API credentials and large build dependencies",
      "Debug ignore rules using `git check-ignore -v <path>`"
    ],
    simpleExplanation: "Some files never belong in Git: private database passwords, temporary test logs, or massive 500MB dependency folders. `.gitignore` tells Git: 'Ignore these completely.'",
    analogy: "Like putting a 'Do Not Disturb' sign on private storage rooms in an office building.",
    technicalExplanation: "Git checks `.gitignore` files hierarchically. Untracked files matching active ignore patterns are omitted from `git status` output and blocked from standard `git add` operations.",
    syntaxAndCommands: [
      "touch .gitignore",
      "echo 'node_modules/' >> .gitignore",
      "echo '.env' >> .gitignore",
      "git check-ignore -v <file>"
    ],
    walkthrough: [
      {
        command: "echo '.env' >> .gitignore",
        explanation: "Add .env file to ignore list.",
        expectedOutput: ""
      },
      {
        command: "echo 'SECRET_KEY=12345' > .env",
        explanation: "Create secret file.",
        expectedOutput: ""
      },
      {
        command: "git status",
        explanation: "Verify that .env is completely ignored and does not appear in untracked files.",
        expectedOutput: "On branch main\nUntracked files:\n\t.gitignore"
      }
    ],
    practicalExercise: "Create a `.gitignore` file and add `.env`, `*.log`, and `dist/`. Test with `git status` that matching files are hidden.",
    commonErrorsAndFixes: [
      {
        error: "Adding a file to `.gitignore` after it was already tracked in Git, and it keeps showing up.",
        fix: "`.gitignore` only affects UNTRACKED files. Untrack already tracked files without deleting them using: `git rm --cached <file>`."
      }
    ],
    industryUseCase: "Uber was fined millions of dollars when AWS credentials checked into a repository leaked to attackers. Strict `.gitignore` rules prevent catastrophic security breaches.",
    interviewQuestions: [
      {
        question: "How do you stop tracking a file that is already committed without deleting it from your local filesystem?",
        answer: "Run `git rm --cached <file>` and add the file path to `.gitignore`."
      }
    ],
    quiz: {
      question: "Which of the following files should ALWAYS be ignored in `.gitignore`?",
      options: [
        "README.md",
        "package.json",
        "`.env` containing secret API credentials",
        "src/index.js"
      ],
      correctIndex: 2,
      explanation: "`.env` contains sensitive passwords and secrets and must never be committed to Git."
    },
    officialReference: {
      title: "Git SCM: gitignore Documentation",
      url: "https://git-scm.com/docs/gitignore"
    },
    checklist: [
      "I know how to create a .gitignore file",
      "I know wildcards and directory ignore syntax",
      "I understand how to untrack already committed files with git rm --cached"
    ]
  }
];
