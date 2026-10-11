import { CurriculumUnit } from "./types";

export const level7Units: CurriculumUnit[] = [
  {
    id: "unit-87",
    unitNumber: 87,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Git Internals Deep Dive: Objects, Blobs, Trees, and Commits",
    slug: "git-internals-objects-blobs-trees",
    estimatedMinutes: 20,
    topics: ["Git Internals", ".git/objects", "Blobs", "Trees", "Commit Objects", "Annotated Tag Objects"],
    learningObjectives: [
      "Deconstruct the 4 core Git object types: Blobs (files), Trees (directories), Commits (snapshots), Tags (references)",
      "Explore the internal `.git/objects/` loose object storage hierarchy",
      "Understand why Git objects are immutable and content-addressed"
    ],
    simpleExplanation: "Under the hood, Git is really just a simple key-value database! Files are stored as Blobs, folders are stored as Trees, and snapshots are stored as Commits. The key is the SHA-1 hash, and the value is the compressed content.",
    analogy: "A library catalog where every book, shelf, and room has a unique fingerprint code that never changes.",
    technicalExplanation: "Git compresses objects using zlib deflation and prefixes them with `<type> <size>\\0`. The SHA-1 hash is computed over this header + payload. The first 2 characters determine the directory under `.git/objects/`, and the remaining 38 form the filename.",
    syntaxAndCommands: [
      "git cat-file -t <hash> (type)",
      "git cat-file -p <hash> (pretty-print content)",
      "git cat-file -s <hash> (size in bytes)"
    ],
    walkthrough: [
      {
        command: "git rev-parse HEAD",
        explanation: "Retrieve current commit hash.",
        expectedOutput: "8fa12cd0923f1a947d10e82c18001bc210499fa1"
      },
      {
        command: "git cat-file -t 8fa12cd",
        explanation: "Check the object type of current HEAD.",
        expectedOutput: "commit"
      },
      {
        command: "git cat-file -p 8fa12cd",
        explanation: "Pretty-print raw internal contents of commit object.",
        expectedOutput: "tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904\nauthor Techmiya Student <student@techmiya.com> 1728634800 +0530\ncommitter Techmiya Student <student@techmiya.com> 1728634800 +0530\n\nfeat: implement certificate verification"
      }
    ],
    practicalExercise: "Use `git cat-file -p HEAD` to find the root `tree` hash, then run `git cat-file -p <tree-hash>` to view the directory listing.",
    commonErrorsAndFixes: [
      {
        error: "Attempting to open files in `.git/objects/` directly in Notepad.",
        fix: "Loose objects are zlib compressed binaries! Always use `git cat-file -p` to inspect their contents."
      }
    ],
    industryUseCase: "Understanding Git internals allows senior infrastructure engineers to diagnose corrupted repositories and build custom Git integrations.",
    interviewQuestions: [
      {
        question: "What are the four fundamental object types stored in Git's object database?",
        answer: "1. Blob (stores file data), 2. Tree (stores directory hierarchies and file modes), 3. Commit (stores author, committer, tree pointer, parent pointers, message), 4. Tag (annotated tag metadata)."
      }
    ],
    quiz: {
      question: "Which Git object represents directory hierarchies and filenames?",
      options: [
        "Blob",
        "Tree",
        "Commit",
        "Ref"
      ],
      correctIndex: 1,
      explanation: "A Tree object maps filenames and modes to corresponding blob and sub-tree hashes."
    },
    officialReference: {
      title: "Git SCM: Git Internals - Git Objects",
      url: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"
    },
    checklist: [
      "I know the 4 object types in Git",
      "I know how loose objects are organized in .git/objects",
      "I can inspect raw objects using git cat-file -p"
    ]
  },
  {
    id: "unit-88",
    unitNumber: 88,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "The Directed Acyclic Graph (DAG) & Cryptographic Hashing",
    slug: "directed-acyclic-graph-cryptographic-hashing",
    estimatedMinutes: 18,
    topics: ["Directed Acyclic Graph (DAG)", "Merkle Tree", "SHA-1 vs SHA-256 (Object Format)", "Parent Pointers", "Immutability"],
    learningObjectives: [
      "Understand Git's mathematical structure as a Directed Acyclic Graph (DAG)",
      "Explain how Merkle Trees guarantee cryptographic immutability across the entire project history",
      "Understand Git's ongoing migration from SHA-1 to SHA-256 for collision resistance"
    ],
    simpleExplanation: "A DAG means Git history moves forward in one direction with no time loops. Every commit points backwards to its parent. Changing even a single comma in a file from 3 years ago changes every single hash all the way up to today.",
    analogy: "Like a blockchain or a genealogical family tree where parents are connected to ancestors with tamper-proof DNA seals.",
    technicalExplanation: "Because commit hashes incorporate their parent commit hashes, Git forms a cryptographic Merkle DAG. Any modification to history changes the root hash, making silent historical tampering mathematically impossible.",
    syntaxAndCommands: [
      "git log --graph --oneline",
      "git rev-list --parents -n 5 HEAD"
    ],
    walkthrough: [
      {
        command: "git rev-list --parents -n 2 HEAD",
        explanation: "Display commit hash followed by its parent commit hash(es).",
        expectedOutput: "8fa12cd0923f 4a7c19f20108\n4a7c19f20108 1b09e8a7192a"
      }
    ],
    practicalExercise: "Draw a small 5-commit DAG on paper showing a feature branch and a merge commit with 2 parents.",
    commonErrorsAndFixes: [
      {
        error: "Thinking commit hashes are generated by random number generators.",
        fix: "Commit hashes are 100% deterministic cryptographic checksums computed from author, committer, date, parent hashes, tree hash, and message."
      }
    ],
    industryUseCase: "Cryptographic Git commit DAGs form the backbone of modern verifiable software supply-chain standards (SLSA Level 3).",
    interviewQuestions: [
      {
        question: "Why is Git referred to as a Merkle Directed Acyclic Graph (DAG)?",
        answer: "Because commits point back to their parent commits without cycles (Acyclic Graph), and every node is cryptographically verified by hashing the contents and hashes of its children/parents (Merkle Tree)."
      }
    ],
    quiz: {
      question: "What happens if someone secretly alters one character of code in a commit made 2 years ago in Git?",
      options: [
        "Git updates the file without changing anything else.",
        "The cryptographic hash of that commit changes, and the hashes of all subsequent commits diverge, immediately exposing the tampering.",
        "The file is automatically erased.",
        "Nothing happens."
      ],
      correctIndex: 1,
      explanation: "Merkle trees ensure cryptographic immutability: changing past content changes all subsequent hashes in the chain."
    },
    officialReference: {
      title: "Pro Git: Git Internals - Git References",
      url: "https://git-scm.com/book/en/v2/Git-Internals-Git-References"
    },
    checklist: [
      "I understand the DAG commit model",
      "I know how parent pointers preserve chronology",
      "I appreciate cryptographic Merkle immutability"
    ]
  },
  {
    id: "unit-89",
    unitNumber: 89,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Git Plumbing vs. Porcelain Commands (`cat-file`, `hash-object`, `ls-tree`)",
    slug: "git-plumbing-vs-porcelain",
    estimatedMinutes: 18,
    topics: ["Porcelain (User-facing)", "Plumbing (Low-level)", "git hash-object", "git cat-file", "git ls-tree", "git update-ref"],
    learningObjectives: [
      "Distinguish high-level user interface commands (Porcelain) from low-level internal commands (Plumbing)",
      "Compute blob hashes without committing using `git hash-object`",
      "Inspect directory tree structures using `git ls-tree`",
      "Manipulate reference pointers directly with `git update-ref`"
    ],
    simpleExplanation: "Porcelain is the shiny user interface you touch every day: `commit`, `checkout`, `merge`. Plumbing is the internal pipes, valves, and gears underneath: `hash-object`, `cat-file`, `ls-tree`.",
    analogy: "Porcelain is the steering wheel and pedals of a car; plumbing is the fuel injection pumps and engine pistons.",
    technicalExplanation: "Porcelain commands provide user-friendly workflows. Plumbing commands provide scriptable, stable, Unix-style building blocks that return machine-parseable data with deterministic exit codes.",
    syntaxAndCommands: [
      "git hash-object -w <file>",
      "git cat-file -p <hash>",
      "git ls-tree HEAD",
      "git update-ref refs/heads/main <hash>"
    ],
    walkthrough: [
      {
        command: "git ls-tree HEAD",
        explanation: "Display contents of root tree object referenced by current commit.",
        expectedOutput: "100644 blob 3b18e51...    .gitignore\n100644 blob 4a7c19f...    README.md\n040000 tree 8fa12cd...    src"
      }
    ],
    practicalExercise: "Use `git hash-object` to hash a string, write it to `.git/objects` with `-w`, and read it back with `git cat-file -p`.",
    commonErrorsAndFixes: [
      {
        error: "Using porcelain commands in shell scripts that require guaranteed stable output formats.",
        fix: "Porcelain commands may change their human-readable output format between Git versions. Use plumbing commands (`git diff-tree`, `git rev-parse`) for stable script parsing."
      }
    ],
    industryUseCase: "IDE developers (VS Code, JetBrains) execute plumbing commands under the hood to render high-performance visual Git graphs.",
    interviewQuestions: [
      {
        question: "Explain the architectural concept of Porcelain vs Plumbing in Git.",
        answer: "Porcelain commands (`git status`, `git commit`, `git checkout`) are user-facing, high-level commands designed for human productivity. Plumbing commands (`git cat-file`, `git hash-object`, `git ls-tree`) are low-level tools designed for scripting and internal engine operations."
      }
    ],
    quiz: {
      question: "Which of the following is a low-level Git PLUMBING command?",
      options: [
        "git pull",
        "git cat-file",
        "git commit",
        "git switch"
      ],
      correctIndex: 1,
      explanation: "`git cat-file` is a low-level plumbing command used to inspect raw repository objects."
    },
    officialReference: {
      title: "Git SCM: Git Internals - Plumbing and Porcelain",
      url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain"
    },
    checklist: [
      "I know the difference between porcelain and plumbing",
      "I know how to inspect trees with git ls-tree",
      "I can compute hashes with git hash-object"
    ]
  },
  {
    id: "unit-90",
    unitNumber: 90,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Resolving & Troubleshooting Detached HEAD States Safely",
    slug: "troubleshooting-detached-head",
    estimatedMinutes: 18,
    topics: ["Detached HEAD", "Checking out Commit Hashes", "Orphan Commits", "git switch -c recovery", "Safety Rules"],
    learningObjectives: [
      "Understand exactly why HEAD detaches when checking out a specific commit hash or tag",
      "Recognize the warning sign: `You are in 'detached HEAD' state`",
      "Safely rescue experimental commits created in detached HEAD by creating a branch (`git switch -c <name>`)"
    ],
    simpleExplanation: "Usually, HEAD points to a branch name, which points to a commit. When you checkout a hash directly, HEAD points directly to the commit, bypassing the branch. It's safe to look around, but to save new work, give it a branch name!",
    analogy: "Stepping off a named train onto an unmarked platform; to resume traveling safely, hop on a named track.",
    technicalExplanation: "In detached HEAD, `.git/HEAD` contains a 40-character commit hash instead of a symbolic ref (`ref: refs/heads/...`). New commits advance HEAD directly, but because no branch ref tracks them, they become candidates for garbage collection once you switch away.",
    syntaxAndCommands: [
      "git checkout <commit-hash>",
      "git status (shows 'HEAD detached at <hash>')",
      "git switch -c recovery-branch",
      "git switch main"
    ],
    walkthrough: [
      {
        command: "git checkout 4a7c19f",
        explanation: "Intentionally checkout an older commit hash to inspect it.",
        expectedOutput: "Note: switching to '4a7c19f'.\nYou are in 'detached HEAD' state..."
      },
      {
        command: "git switch -c explore/older-version",
        explanation: "Secure the state by attaching a permanent named branch to it.",
        expectedOutput: "Switched to a new branch 'explore/older-version'"
      }
    ],
    practicalExercise: "Follow Practical Lab 13 to recreate a detached HEAD scenario and rescue an orphaned commit.",
    commonErrorsAndFixes: [
      {
        error: "Switching back to `main` after committing in detached HEAD state and noticing your commits vanished.",
        fix: "Don't panic! The commits are not deleted yet. Run `git reflog` immediately, locate the commit hash, and run `git branch rescue <hash>`."
      }
    ],
    industryUseCase: "CI/CD checkout actions deliberately check out exact commit hashes (detached HEAD) to guarantee that tests run against the exact commit tested, even if branch tips move.",
    interviewQuestions: [
      {
        question: "What is a 'detached HEAD' state and how do you save commits made while in this state?",
        answer: "Detached HEAD occurs when HEAD points directly to a commit hash rather than a branch reference. To preserve commits made in this state, create a new branch before switching away: `git switch -c <branch-name>`."
      }
    ],
    quiz: {
      question: "What is the recommended command to secure new commits made in a detached HEAD state onto a permanent branch?",
      options: [
        "git save-detached",
        "git switch -c <new-branch-name>",
        "git head --attach",
        "git commit --rescue"
      ],
      correctIndex: 1,
      explanation: "`git switch -c <name>` creates a new branch pointing to the current commit, securing it permanently."
    },
    officialReference: {
      title: "Git SCM: git-checkout - Detached HEAD",
      url: "https://git-scm.com/docs/git-checkout#_detached_head"
    },
    checklist: [
      "I understand what causes detached HEAD",
      "I know how to inspect older commits safely",
      "I know how to rescue detached commits onto a branch"
    ]
  },
  {
    id: "unit-91",
    unitNumber: 91,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Disaster Recovery: Finding & Restoring Lost Commits with `git reflog`",
    slug: "disaster-recovery-git-reflog",
    estimatedMinutes: 20,
    topics: ["git reflog", "Reference Logs", "HEAD@{n}", "Recovering Lost Commits", "Garbage Collection (gc)"],
    learningObjectives: [
      "Query the local reference log (`git reflog`) to view chronological movement of HEAD",
      "Locate commit hashes orphaned by accidental `git reset --hard`, branch deletions, or bad rebases",
      "Restore repository state with 100% fidelity using `git reset --hard HEAD@{n}`"
    ],
    simpleExplanation: "`git reflog` is Git's ultimate black-box flight recorder. Even if you run `git reset --hard` and think you deleted everything, reflog records every single step you took for the past 90 days. Almost nothing is ever truly lost.",
    analogy: "A flight data recorder that tracks every control movement of the aircraft.",
    technicalExplanation: "Git writes entry logs to `.git/logs/HEAD` and `.git/logs/refs/heads/*` on every ref update. Even unreferenced objects remain in `.git/objects/` until `git gc` prunes unreachable objects older than `gc.pruneExpire` (default: 14 days) or `gc.reflogExpire` (default: 90 days).",
    syntaxAndCommands: [
      "git reflog",
      "git reflog show main",
      "git reset --hard HEAD@{1}",
      "git branch recovery HEAD@{2}"
    ],
    walkthrough: [
      {
        command: "git reflog -n 5",
        explanation: "Display the last 5 movements of the HEAD pointer.",
        expectedOutput: "8fa12cd (HEAD -> main) HEAD@{0}: commit: feat: add verification\n4a7c19f HEAD@{1}: reset: moving to HEAD~1\n3b18e51 HEAD@{2}: commit: feat: lost important feature\n1b09e8a HEAD@{3}: checkout: moving from dev to main"
      },
      {
        command: "git branch rescued-feature HEAD@{2}",
        explanation: "Create branch pointer directly targeting the lost commit hash found in reflog.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Follow Practical Lab 14: simulate an accidental `--hard` reset and successfully recover the commit using `git reflog`.",
    commonErrorsAndFixes: [
      {
        error: "Expecting `git reflog` on your home computer to show commits made on your office computer.",
        fix: "Reflog is 100% LOCAL! Reference logs are never pushed or shared between repositories."
      }
    ],
    industryUseCase: "Senior tech leads regularly save panicked junior developers from accidental reset disasters in 60 seconds using `git reflog`.",
    interviewQuestions: [
      {
        question: "How does `git reflog` differ from `git log`?",
        answer: "`git log` displays the commit history reachable from the currently checked-out commit. `git reflog` is a chronological audit record of where HEAD and branch refs have pointed on your local machine over time, including orphaned commits."
      }
    ],
    quiz: {
      question: "Which command reveals commits that appear to have disappeared after an accidental `git reset --hard`?",
      options: [
        "git log --deleted",
        "git reflog",
        "git recover --all",
        "git history --raw"
      ],
      correctIndex: 1,
      explanation: "`git reflog` tracks every change to HEAD, allowing recovery of orphaned commits."
    },
    officialReference: {
      title: "Git SCM: git-reflog Documentation",
      url: "https://git-scm.com/docs/git-reflog"
    },
    checklist: [
      "I know reflog is the ultimate local safety net",
      "I can read HEAD@{n} reference syntax",
      "I can recover lost commits with git branch <name> <hash>"
    ]
  },
  {
    id: "unit-92",
    unitNumber: 92,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Advanced Merge Strategies in Depth: `ort`, `recursive`, `ours`, `theirs`, `octopus`",
    slug: "advanced-merge-strategies",
    estimatedMinutes: 20,
    topics: ["ort Strategy", "recursive Strategy", "Strategy Options (-X ours / -X theirs)", "Octopus Merge", "Subtree Merge"],
    learningObjectives: [
      "Understand Git's modern default merge strategy: `ort` (Ostensibly Recursive's Twin)",
      "Pass recursive strategy options (`-X ours` and `-X theirs`) to auto-resolve conflict hunks",
      "Recognize an Octopus merge (merging 3 or more branches in one commit)"
    ],
    simpleExplanation: "Git has different brain algorithms for merging. The standard algorithm (`ort`) is lightning-fast. You can also give it hints like: 'If there's any conflict, always prefer my version' (`-X ours`).",
    analogy: "Choosing whether a panel of judges, a coin toss, or the home team has the tie-breaking vote.",
    technicalExplanation: "In Git 2.34+, `ort` replaced `recursive` as the default strategy, rewriting the merge engine with significant performance improvements and better rename detection. Strategy options (`-X ours`/`-X theirs`) resolve conflicting hunks automatically while still merging non-conflicting lines cleanly.",
    syntaxAndCommands: [
      "git merge -s ort feature",
      "git merge -X ours feature",
      "git merge -X theirs feature",
      "git merge branchA branchB branchC (Octopus)"
    ],
    walkthrough: [
      {
        command: "git merge -X theirs feature/updates",
        explanation: "Merge feature branch, favoring incoming changes for any conflicting hunks.",
        expectedOutput: "Auto-merging config.js\nMerge made by the 'ort' strategy."
      }
    ],
    practicalExercise: "Compare the `-s ours` strategy (completely discards incoming tree) with `-X ours` option (only favors ours on conflicted lines).",
    commonErrorsAndFixes: [
      {
        error: "Confusing `-s ours` with `-X ours`.",
        fix: "CRITICAL DIFFERENCE: `-s ours` completely throws away ALL code from the other branch! `-X ours` merges everything cleanly and only uses ours when lines collide."
      }
    ],
    industryUseCase: "Release managers use `-X theirs` when updating third-party vendor branches with new vendor upstream releases.",
    interviewQuestions: [
      {
        question: "What is the difference between `-s ours` and `-X ours` in `git merge`?",
        answer: "`-s ours` uses the 'ours' merge strategy, creating a merge commit that completely ignores the incoming branch's changes. `-X ours` is a strategy option for the recursive/ort strategy that merges all non-conflicting changes and only chooses our version for conflicting hunks."
      }
    ],
    quiz: {
      question: "Which merge command combines THREE or more branches into a single commit simultaneously?",
      options: [
        "Octopus merge",
        "Hydra merge",
        "Spider merge",
        "Multi-rebase"
      ],
      correctIndex: 0,
      explanation: "An Octopus merge combines more than two branches into a single merge commit."
    },
    officialReference: {
      title: "Git SCM: Advanced Merging - Merge Strategies",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging#_merge_strategies"
    },
    checklist: [
      "I know the default ort merge engine",
      "I know the difference between -s ours and -X ours",
      "I understand when octopus merges apply"
    ]
  },
  {
    id: "unit-93",
    unitNumber: 93,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Submodules vs. Monorepos: Managing Multi-Repository Codebases",
    slug: "submodules-vs-monorepos",
    estimatedMinutes: 20,
    topics: ["git submodule", ".gitmodules", "Submodule Initialization", "Monorepo Trade-offs", "git clone --recurse-submodules"],
    learningObjectives: [
      "Include external Git repositories inside your project using `git submodule add`",
      "Understand `.gitmodules` configuration and commit pin tracking (commit pointer vs branch)",
      "Clone submodules recursively using `git clone --recurse-submodules`",
      "Contrast submodules with modern Monorepo tooling (Turborepo, Nx)"
    ],
    simpleExplanation: "Submodules let you keep a Git repository as a subfolder inside another Git repository. It's pinned to an exact commit, so external updates don't unexpectedly break your app.",
    analogy: "Referencing an external textbook chapter inside your thesis syllabus with an exact edition and page number.",
    technicalExplanation: "Submodules record a gitlink entry (mode `160000`) in the tree, pointing to an exact commit hash in the subproject's repository. Configuration is tracked in `.gitmodules`.",
    syntaxAndCommands: [
      "git submodule add https://github.com/vendor/lib.git vendor/lib",
      "git submodule update --init --recursive",
      "git clone --recurse-submodules <url>"
    ],
    walkthrough: [
      {
        command: "git submodule status",
        explanation: "Check pinned commit hashes of active submodules.",
        expectedOutput: " 8fa12cd0923f vendor/lib (v1.2.0)"
      }
    ],
    practicalExercise: "Add a small open source utility as a submodule to a test repository and inspect the generated `.gitmodules` file.",
    commonErrorsAndFixes: [
      {
        error: "Cloning a repo with submodules and finding the submodule folders empty.",
        fix: "Submodules are not downloaded by default! Run `git submodule update --init --recursive` or clone with `--recurse-submodules`."
      }
    ],
    industryUseCase: "Game development engines (Unreal, Unity) embed physics engines and third-party SDKs as Git submodules.",
    interviewQuestions: [
      {
        question: "How does Git track the version of a submodule inside the parent repository?",
        answer: "The parent repository records a gitlink entry pointing to a specific 40-character commit hash of the subproject, not a moving branch pointer."
      }
    ],
    quiz: {
      question: "Which command clones a repository and automatically downloads all of its nested submodules in one step?",
      options: [
        "git clone --all-files <url>",
        "git clone --recurse-submodules <url>",
        "git clone --with-modules <url>",
        "git clone --deep <url>"
      ],
      correctIndex: 1,
      explanation: "`git clone --recurse-submodules` automatically initializes and fetches all submodules."
    },
    officialReference: {
      title: "Git SCM: Git Tools - Submodules",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules"
    },
    checklist: [
      "I know how submodules pin specific commit hashes",
      "I know how .gitmodules tracks remote URLs",
      "I use --recurse-submodules when cloning"
    ]
  },
  {
    id: "unit-94",
    unitNumber: 94,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Managing Large Files & Media Assets with Git LFS (Large File Storage)",
    slug: "managing-large-files-git-lfs",
    estimatedMinutes: 18,
    topics: ["Git LFS", ".gitattributes", "Pointer Files", "Binary Assets", "Repository Bloat Prevention"],
    learningObjectives: [
      "Understand why committing 500MB video or dataset files bloats Git repositories permanently",
      "Install and configure Git LFS (`git lfs install` and `git lfs track \"*.mp4\"`)",
      "Understand Git LFS text pointer files and separate remote asset storage"
    ],
    simpleExplanation: "Standard Git saves every version of every file forever. If you change a 1GB video 5 times, your repo becomes 5GB to download! Git LFS replaces the heavy file with a tiny 100-byte text ticket, storing the actual video in high-speed cloud storage.",
    analogy: "Coat check at a luxury hotel: you carry a lightweight plastic claim ticket in your pocket while your heavy winter coat is stored safely in the cloakroom.",
    technicalExplanation: "Git LFS replaces large files in your Git tree with lightweight pointer files (containing SHA-256 and size). Git filters (`clean` on commit, `smudge` on checkout) intercept the transfer and download the actual binary from an LFS server via HTTP.",
    syntaxAndCommands: [
      "git lfs install",
      "git lfs track \"*.psd\"",
      "git lfs track \"*.mp4\"",
      "git lfs ls-files"
    ],
    walkthrough: [
      {
        command: "git lfs track \"*.mp4\"",
        explanation: "Configure Git LFS tracking pattern; writes rule to .gitattributes.",
        expectedOutput: "Tracking \"*.mp4\""
      },
      {
        command: "cat .gitattributes",
        explanation: "Inspect generated filter attributes for LFS files.",
        expectedOutput: "*.mp4 filter=lfs diff=lfs merge=lfs -text"
      }
    ],
    practicalExercise: "Inspect a Git LFS pointer file format with `git cat-file -p` to observe the `version`, `oid sha256`, and `size` fields.",
    commonErrorsAndFixes: [
      {
        error: "Committing large files before tracking them with `git lfs track`.",
        fix: "If committed before LFS tracking, the file is already baked into Git history! Track with LFS first, or migrate history using `git lfs migrate import`."
      }
    ],
    industryUseCase: "AI companies (Hugging Face, OpenAI) host 20GB machine learning model weights (`.bin`, `.safetensors`) using Git LFS.",
    interviewQuestions: [
      {
        question: "How does Git LFS work under the hood without bloating the Git object database?",
        answer: "Git LFS stores a tiny text pointer file in Git containing the file's SHA-256 hash and size. The actual large binary payload is uploaded to and downloaded from a dedicated LFS object store using smudge/clean filters."
      }
    ],
    quiz: {
      question: "Which file records the file patterns that Git LFS should track?",
      options: [
        ".gitignore",
        ".gitattributes",
        ".gitmodules",
        "lfs.config"
      ],
      correctIndex: 1,
      explanation: "Git LFS tracking rules are stored in `.gitattributes`."
    },
    officialReference: {
      title: "Git Large File Storage (Official Site)",
      url: "https://git-lfs.com/"
    },
    checklist: [
      "I know why raw Git repositories choke on large binaries",
      "I can configure Git LFS tracking with .gitattributes",
      "I understand how pointer files work"
    ]
  },
  {
    id: "unit-95",
    unitNumber: 95,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Digitally Signing Commits & Tags with GPG and SSH Keys (Verified Badge)",
    slug: "digitally-signing-commits-gpg-ssh",
    estimatedMinutes: 20,
    topics: ["Signed Commits", "Verified Badge", "GPG Keys", "SSH Signing (Git 2.34+)", "Cryptographic Proof"],
    learningObjectives: [
      "Understand why anyone can forge arbitrary author names in Git commits without signatures",
      "Sign commits using modern SSH signing keys (`gpg.format ssh`) or GPG",
      "Earn the green 'Verified' badge on GitHub commits",
      "Configure global automatic commit signing (`commit.gpgsign true`)"
    ],
    simpleExplanation: "Did you know anyone can set their Git email to `elonmusk@tesla.com` and make it look like someone else made a commit? Cryptographic signing attaches a mathematical wax seal proving the commit genuinely came from your private key.",
    analogy: "A notarized signature on a legal contract verified with an official state seal.",
    technicalExplanation: "Git supports GPG, SSH, and X.509 signing. With Git 2.34+, developers can use their existing SSH key for signing. The signature is embedded inside the commit object header (`gpgsig`). GitHub verifies the signature against public keys stored in user settings.",
    syntaxAndCommands: [
      "git config --global gpg.format ssh",
      "git config --global user.signingkey ~/.ssh/id_ed25519.pub",
      "git config --global commit.gpgsign true",
      "git log --show-signature"
    ],
    walkthrough: [
      {
        command: "git log -n 1 --show-signature",
        explanation: "Verify signature on latest commit.",
        expectedOutput: "commit 8fa12cd...\nGood \"ssh\" signature for student@techmiya.com with ED25519 key...\nAuthor: Techmiya Student..."
      }
    ],
    practicalExercise: "Enable SSH commit signing globally on your machine and push a commit to GitHub to see the green 'Verified' badge.",
    commonErrorsAndFixes: [
      {
        error: "Unverified badge on GitHub after signing.",
        fix: "Ensure your signing key is added to GitHub under `Settings -> SSH and GPG keys -> New SSH key -> Key type: Signing Key`."
      }
    ],
    industryUseCase: "Security-sensitive organizations (governments, banks, cryptocurrency protocols) mandate signed commits for all PR merges via branch protection rules.",
    interviewQuestions: [
      {
        question: "Why is commit signing necessary in professional software engineering?",
        answer: "Because Git author metadata can be spoofed by anyone running `git config user.name`. Digital signatures mathematically prove authorship and guarantee the commit has not been tampered with."
      }
    ],
    quiz: {
      question: "Which configuration option tells Git to automatically sign EVERY commit you make?",
      options: [
        "git config --global security.enabled true",
        "git config --global commit.gpgsign true",
        "git config --global auto.verify true",
        "git config --global secure.commits true"
      ],
      correctIndex: 1,
      explanation: "`commit.gpgsign true` enables automatic signing for all subsequent commits."
    },
    officialReference: {
      title: "GitHub Docs: About commit signature verification",
      url: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification"
    },
    checklist: [
      "I understand why author metadata can be forged",
      "I know how to sign commits with SSH or GPG keys",
      "I configure commit.gpgsign true for automated verification"
    ]
  },
  {
    id: "unit-96",
    unitNumber: 96,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Secrets Prevention & Credential Hygiene: git-secrets, Gitleaks, and TruffleHog",
    slug: "secrets-prevention-credential-hygiene",
    estimatedMinutes: 20,
    topics: ["Secret Leaks", "Gitleaks", "TruffleHog", "Entropy Analysis", "Pre-Commit Secret Scanning"],
    learningObjectives: [
      "Identify the 10 most common leaked credentials (AWS keys, Stripe tokens, private SSH keys, JWT secrets)",
      "Set up automated pre-commit secret scanners using Gitleaks or TruffleHog",
      "Understand why simply deleting a committed secret in a follow-up commit DOES NOT remove it from history"
    ],
    simpleExplanation: "Automated scanner bots scan every single public commit on GitHub within 2 seconds of being pushed. If you commit an AWS key, bots will hijack your account and rack up $10,000 in bills in minutes. Prevention is critical.",
    analogy: "Checking your pockets for your house keys before locking the front door, rather than throwing keys in the mailbox.",
    technicalExplanation: "Gitleaks uses regular expressions and Shannon entropy algorithms to detect high-entropy strings and known API token patterns (e.g. `AKIA[0-9A-Z]{16}` for AWS) in staged diffs prior to commit.",
    syntaxAndCommands: [
      "gitleaks detect --verbose",
      "trufflehog git file://. --since-commit HEAD~5",
      "pre-commit hook: gitleaks protect --staged"
    ],
    walkthrough: [
      {
        command: "gitleaks version",
        explanation: "Check installed secret scanner utility version.",
        expectedOutput: "gitleaks version 8.18.2"
      }
    ],
    practicalExercise: "Test a secret scanner in a temporary sandbox to see how it catches simulated dummy tokens before they can be committed.",
    commonErrorsAndFixes: [
      {
        error: "Committing a secret, realizing it, and immediately committing a second commit that deletes the file.",
        fix: "The secret is STILL IN GIT HISTORY in the previous commit! Anyone can run `git show` to read it. You must ROTATE the secret immediately."
      }
    ],
    industryUseCase: "Top financial institutions block developer pushes at the network firewall if pre-receive hooks detect high-entropy credentials.",
    interviewQuestions: [
      {
        question: "If a developer accidentally commits a database password and pushes it to GitHub, why is pushing a second commit removing the password completely inadequate?",
        answer: "Because Git preserves full immutable history. The secret remains fully visible in the previous commit object forever and can be checked out or viewed on GitHub diffs. The credential must be rotated immediately at the provider."
      }
    ],
    quiz: {
      question: "What is the MANDATORY immediate first step if an active production secret is accidentally committed to GitHub?",
      options: [
        "Delete the repository immediately.",
        "Rotate (revoke and regenerate) the compromised secret at the service provider immediately.",
        "Push an empty commit with message 'clean'.",
        "Wait for GitHub support to email you."
      ],
      correctIndex: 1,
      explanation: "Bots scrape public GitHub in seconds; the compromised credential must be revoked immediately at the provider."
    },
    officialReference: {
      title: "Gitleaks Documentation & Rules",
      url: "https://github.com/gitleaks/gitleaks"
    },
    checklist: [
      "I know automated bots scrape GitHub commits constantly",
      "I know follow-up commits do not remove past secrets",
      "I install pre-commit secret scanners"
    ]
  },
  {
    id: "unit-97",
    unitNumber: 97,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Emergency Secret Remediation: Cleaning Git History with `git-filter-repo`",
    slug: "cleaning-git-history-git-filter-repo",
    estimatedMinutes: 20,
    topics: ["git-filter-repo", "BFG Repo-Cleaner", "Purging Secrets from History", "Force Pushing All Refs", "GitHub Cache Purging"],
    learningObjectives: [
      "Purge sensitive files and passwords completely from entire Git history using official `git-filter-repo`",
      "Understand why legacy `git filter-branch` is deprecated and dangerous",
      "Force-push rewritten sanitized history to remote repositories safely (`git push origin --force --all`)"
    ],
    simpleExplanation: "If a secret was committed 6 months ago, you need a heavy industrial shredder that goes through all 500 past commits and cuts out that file from every past snapshot.",
    analogy: "Going through every historical ledger in the city archive with permanent black ink to redact confidential records.",
    technicalExplanation: "`git-filter-repo` (Python tool recommended by Git core team) rewrites the entire commit DAG, rebuilding all tree objects without the specified file or pattern, recalculating all downstream hashes in seconds.",
    syntaxAndCommands: [
      "pip install git-filter-repo",
      "git filter-repo --invert-paths --path secrets.env",
      "git filter-repo --replace-text expressions.txt",
      "git push origin --force --all --tags"
    ],
    walkthrough: [
      {
        command: "git filter-repo --invert-paths --path .env --force",
        explanation: "Purge .env from every commit in repository history.",
        expectedOutput: "Parsed 120 commits\nRewriting commits... done\nCompletely finished after 0.42 seconds."
      }
    ],
    practicalExercise: "Practice purging a dummy test file from a sandbox repository using `git filter-repo`.",
    commonErrorsAndFixes: [
      {
        error: "Using deprecated `git filter-branch`.",
        fix: "Never use `git filter-branch`! It is notoriously slow, buggy, and often leaves orphaned references behind. Use `git-filter-repo`."
      }
    ],
    industryUseCase: "Security incident response teams use `git-filter-repo` during data breach remediation to sanitize repositories before public audits.",
    interviewQuestions: [
      {
        question: "Why does the official Git documentation strongly recommend `git-filter-repo` over legacy `git filter-branch`?",
        answer: "`git filter-branch` is prone to corrupting repositories, leaves residual backup refs, and is painfully slow. `git-filter-repo` is Python-based, orders of magnitude faster, and handles ref updates and tags cleanly."
      }
    ],
    quiz: {
      question: "Which modern tool is officially recommended by the Git Core Team for purging sensitive data or huge files from Git history?",
      options: [
        "git filter-branch",
        "git-filter-repo",
        "git scrub",
        "git purge-all"
      ],
      correctIndex: 1,
      explanation: "`git-filter-repo` is the official modern replacement for `git filter-branch`."
    },
    officialReference: {
      title: "git-filter-repo Documentation",
      url: "https://github.com/newren/git-filter-repo"
    },
    checklist: [
      "I know how to rewrite history to scrub secrets",
      "I use git-filter-repo instead of filter-branch",
      "I coordinate with teammates before force-pushing rewritten history"
    ]
  },
  {
    id: "unit-98",
    unitNumber: 98,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "GitHub Advanced Security: Dependabot, Secret Scanning & CodeQL SAST",
    slug: "github-advanced-security-dependabot-codeql",
    estimatedMinutes: 20,
    topics: ["Dependabot", "Secret Scanning", "CodeQL", "Static Application Security Testing (SAST)", "Supply Chain Security"],
    learningObjectives: [
      "Enable automated vulnerability dependency updates with Dependabot",
      "Configure GitHub Secret Scanning to block pushes containing live credentials",
      "Automate semantic code vulnerability analysis using CodeQL AST queries"
    ],
    simpleExplanation: "GitHub has automated security guards watching your repository 24/7. Dependabot opens PRs when your npm libraries have security flaws. Secret Scanning stops you if you accidentally paste a password. CodeQL scans your code for SQL injection bugs.",
    analogy: "An automated security system with fire alarms (secret scanning), routine structural inspections (CodeQL), and automated maintenance upgrades (Dependabot).",
    technicalExplanation: "GitHub Advanced Security (GHAS) provides: 1. Push Protection (intercepts credentials before commit lands), 2. Dependabot alerts & version bumps, 3. CodeQL (treats code as data to perform control-flow and data-taint analysis detecting OWASP Top 10 vulnerabilities).",
    syntaxAndCommands: [
      ".github/dependabot.yml",
      "version: 2 updates: - package-ecosystem: 'npm' directory: '/' schedule: interval: 'weekly'",
      "uses: github/codeql-action/analyze@v3"
    ],
    walkthrough: [
      {
        command: "cat << 'EOF' > .github/dependabot.yml\nversion: 2\nupdates:\n  - package-ecosystem: 'npm'\n    directory: '/'\n    schedule:\n      interval: 'weekly'\nEOF",
        explanation: "Configure weekly automated dependency updates.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Enable 'Push protection for secrets' under repository Settings -> Code security and analysis.",
    commonErrorsAndFixes: [
      {
        error: "Push protection blocks your push with error: 'Secret detected'.",
        fix: "Good! The scanner prevented a disaster. Remove the secret from code, add it to `.env`, or use encrypted secrets before pushing."
      }
    ],
    industryUseCase: "Global banks mandate CodeQL SAST gates on all PRs to maintain compliance with PCI-DSS payment security regulations.",
    interviewQuestions: [
      {
        question: "How does GitHub Secret Scanning Push Protection prevent credential leaks?",
        answer: "It checks incoming commits during `git push` against signatures from over 100 token providers (AWS, Stripe, GitHub, etc.) and blocks the push on the server side if a live token is detected."
      }
    ],
    quiz: {
      question: "Which automated GitHub tool automatically scans your dependencies for known CVE security vulnerabilities and opens PRs with fixes?",
      options: [
        "Dependabot",
        "CodeQL",
        "Husky",
        "Prettier"
      ],
      correctIndex: 0,
      explanation: "Dependabot monitors dependencies and opens automated pull requests with patched versions."
    },
    officialReference: {
      title: "GitHub Docs: About GitHub Advanced Security",
      url: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security"
    },
    checklist: [
      "I configure Dependabot for automated dependency updates",
      "I enable Secret Scanning Push Protection",
      "I understand CodeQL static security analysis"
    ]
  },
  {
    id: "unit-99",
    unitNumber: 99,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Diagnosing & Optimizing Repository Performance (`git gc`, `git prune`, Packfiles)",
    slug: "repository-performance-git-gc-packfiles",
    estimatedMinutes: 18,
    topics: ["git gc", "Packfiles (.pack & .idx)", "Delta Compression", "git count-objects", "Repository Health"],
    learningObjectives: [
      "Diagnose sluggish repositories using `git count-objects -vH`",
      "Optimize repository disk size and speed using garbage collection (`git gc --aggressive`)",
      "Understand packfiles, index files, and sliding-window delta compression"
    ],
    simpleExplanation: "Over time, creating thousands of commits creates lots of loose files. `git gc` is like defragmenting your hard drive: it compresses loose objects into compact packfiles, making Git operations 10x faster.",
    analogy: "Neatly packing loose clothes into space-saver vacuum compression bags for travel.",
    technicalExplanation: "`git gc` consolidates loose objects in `.git/objects/` into packfiles (`.pack`) with index lookup tables (`.idx`). It computes delta compression across similar files and removes unreachable objects that expired from the reflog.",
    syntaxAndCommands: [
      "git count-objects -vH",
      "git gc",
      "git gc --aggressive --prune=now"
    ],
    walkthrough: [
      {
        command: "git count-objects -vH",
        explanation: "Inspect repository object count and disk size footprint.",
        expectedOutput: "count: 0\nsize: 0 bytes\nin-pack: 1420\npacks: 1\nsize-pack: 12.4 MiB\nprune-packable: 0\ngarbage: 0"
      }
    ],
    practicalExercise: "Run `git count-objects -vH` on your current repository to examine how many objects are packed vs loose.",
    commonErrorsAndFixes: [
      {
        error: "Repository size remains 2GB even after deleting large files with `git-filter-repo`.",
        fix: "The loose objects are still cached! Run `git reflog expire --expire=now --all && git gc --prune=now --aggressive` to reclaim disk space immediately."
      }
    ],
    industryUseCase: "Large monorepos at Microsoft and Twitter run scheduled maintenance jobs to repack repositories and optimize network fetch speeds.",
    interviewQuestions: [
      {
        question: "What does `git gc` do to optimize repository performance?",
        answer: "It cleans up loose objects, packs them into compressed packfiles with delta compression, updates commit-graph caches, and prunes unreachable objects that have expired from the reflog."
      }
    ],
    quiz: {
      question: "Which command packs loose objects and cleans unreachable objects to optimize repository speed?",
      options: [
        "git clean",
        "git gc",
        "git compress",
        "git optimize"
      ],
      correctIndex: 1,
      explanation: "`git gc` stands for 'Garbage Collect' and optimizes repository storage."
    },
    officialReference: {
      title: "Git SCM: Git Internals - Packfiles",
      url: "https://git-scm.com/book/en/v2/Git-Internals-Packfiles"
    },
    checklist: [
      "I know how to check repo health with git count-objects",
      "I know how packfiles compress objects",
      "I use git gc to optimize repository performance"
    ]
  },
  {
    id: "unit-100",
    unitNumber: 100,
    level: 7,
    levelTitle: "Level 7 — Advanced Git and Security",
    title: "Final Capstone: Designing a Scalable Enterprise Git & GitHub Ecosystem",
    slug: "capstone-enterprise-git-github-ecosystem",
    estimatedMinutes: 25,
    topics: ["Enterprise Architecture", "Branching Strategy", "Security Gates", "CI/CD Deployment", "Audit Readiness"],
    learningObjectives: [
      "Synthesize all 100 curriculum units into a comprehensive architectural blueprint",
      "Design repository governance, branch protection, CODEOWNERS, and CI quality gates",
      "Demonstrate certified proficiency ready for professional software engineering teams"
    ],
    simpleExplanation: "Congratulations on reaching Unit 100! You have traveled from understanding what a version is to mastering cryptographic DAG internals, team collaboration, CI/CD automation, and enterprise security. You are now fully prepared for the final 50-mark assessment and certification!",
    analogy: "Graduating from driving school to successfully piloting high-performance vehicles on international racetracks.",
    technicalExplanation: "Enterprise Git architecture balances developer velocity with cryptographic compliance. A resilient ecosystem features short-lived feature branches, automated lint/test CI gates, Branch Protection with required reviews, signed commits, and automated Continuous Deployment pipelines.",
    syntaxAndCommands: [
      "git status -> git branch -> git rebase -> git push -> PR -> CI Pass -> Review -> Merge -> Deploy"
    ],
    walkthrough: [
      {
        command: "git status",
        explanation: "Final verification: Check that your repository is clean and ready for assessment.",
        expectedOutput: "On branch main\nnothing to commit, working tree clean"
      }
    ],
    practicalExercise: "Complete all 15 Interactive Practical Labs, take the Final 50-Mark Assessment, and earn your official Techmiya Certificate!",
    commonErrorsAndFixes: [
      {
        error: "Skipping the practical labs before attempting the final assessment.",
        fix: "Hands-on muscle memory is essential! Complete the labs to ensure you pass with flying colors."
      }
    ],
    industryUseCase: "Certified Git and GitHub engineers are the foundation of high-velocity DevOps engineering teams worldwide.",
    interviewQuestions: [
      {
        question: "Summarize the 3 most critical rules for maintaining a healthy team Git repository.",
        answer: "1. Keep main deployable at all times via branch protection and CI checks, 2. Keep commits atomic, well-described, and short-lived, 3. Never commit secrets and maintain strict credential hygiene."
      }
    ],
    quiz: {
      question: "Which of the following describes the hallmark of an industry-standard, professional software engineering team using Git and GitHub?",
      options: [
        "Committing code directly to production without testing.",
        "Short-lived feature branches, passing CI test gates, peer code reviews via Pull Requests, and automated continuous deployments.",
        "Disabling all .gitignore files.",
        "Writing commit messages like 'fixed stuff'."
      ],
      correctIndex: 1,
      explanation: "Tested feature branches, peer review PRs, and automated deployments define modern engineering excellence."
    },
    officialReference: {
      title: "GitHub: The ReadME Project - Best practices for engineering teams",
      url: "https://github.com/readme"
    },
    checklist: [
      "I have completed all 100 curriculum learning units",
      "I completed the required interactive practical labs",
      "I am ready for the 50-mark final assessment"
    ]
  }
];
