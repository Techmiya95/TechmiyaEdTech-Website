import { CurriculumUnit } from "./types";

export const level3Units: CurriculumUnit[] = [
  {
    id: "unit-29",
    unitNumber: 29,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "What Branches Are and Why They Are Virtually Free in Git",
    slug: "what-branches-are",
    estimatedMinutes: 15,
    topics: ["Branch Pointers", "Refs", "Lightweight Branches", "41-byte Files"],
    learningObjectives: [
      "Understand why a Git branch is simply a 41-byte text pointer to a commit hash",
      "Contrast Git's instantaneous branching with SVN's heavy full-directory copies",
      "Explain why branching allows risk-free parallel experimentation"
    ],
    simpleExplanation: "A branch in Git isn't a duplicate copy of your entire hard drive. It's just a tiny sticky note with a commit hash written on it. Creating a branch takes less than 1 millisecond.",
    analogy: "Like adding a new bookmark in a book rather than photocopying the entire book.",
    technicalExplanation: "In Git, a branch is simply a lightweight movable pointer to a commit object, stored as a 41-byte text file inside `.git/refs/heads/<branchname>`. As you commit, the pointer automatically advances.",
    syntaxAndCommands: [
      "git branch",
      "cat .git/refs/heads/main"
    ],
    walkthrough: [
      {
        command: "git branch",
        explanation: "List all local branches in repository; active branch has an asterisk (*).",
        expectedOutput: "* main"
      }
    ],
    practicalExercise: "Create a branch `test-branch`, check the `.git/refs/heads/` directory, and verify it is a tiny text file containing a commit hash.",
    commonErrorsAndFixes: [
      {
        error: "Fearing that creating branches will slow down the computer or eat disk space.",
        fix: "Branches in Git are virtually free (41 bytes). Professional developers create and destroy dozens of branches every day."
      }
    ],
    industryUseCase: "Engineering teams create a new isolated branch for every single ticket or bugfix, ensuring main remains pristine and deployable at all times.",
    interviewQuestions: [
      {
        question: "How does Git implement branches under the hood?",
        answer: "A branch is merely a 41-byte file containing a 40-character SHA-1 commit hash plus a newline character inside `.git/refs/heads/`."
      }
    ],
    quiz: {
      question: "Why is creating a new branch in Git so fast compared to older systems like SVN?",
      options: [
        "Git compresses files into zip archives.",
        "Git simply writes a 41-byte pointer to the current commit hash instead of copying files.",
        "Git asks GitHub to do the work on the cloud.",
        "Git deletes all uncommitted files first."
      ],
      correctIndex: 1,
      explanation: "Git branches are just movable pointers to commit objects, making creation instantaneous."
    },
    officialReference: {
      title: "Git SCM: Git Branching - Branches in a Nutshell",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"
    },
    checklist: [
      "I understand that a branch is a movable commit pointer",
      "I know where branch refs are stored (.git/refs/heads/)",
      "I feel confident creating branches freely"
    ]
  },
  {
    id: "unit-30",
    unitNumber: 30,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Modern Branch Switching with `git switch` vs Legacy `git checkout`",
    slug: "modern-branch-switching-git-switch",
    estimatedMinutes: 15,
    topics: ["git switch", "git switch -c", "Legacy git checkout", "Git 2.23+ Architecture"],
    learningObjectives: [
      "Switch between branches safely using modern `git switch`",
      "Create and switch in a single step with `git switch -c <name>`",
      "Understand why `git switch` replaced ambiguous `git checkout`"
    ],
    simpleExplanation: "Before Git 2.23, `git checkout` was used for everything: switching branches, making branches, and discarding files. `git switch` is the clear, dedicated command just for branches.",
    analogy: "Like having a dedicated light switch on the wall instead of a universal remote that might accidentally turn on the blender.",
    technicalExplanation: "`git switch` updates HEAD to point to the specified branch ref and updates the working tree and index to match that branch's target tree.",
    syntaxAndCommands: [
      "git switch <branch-name>",
      "git switch -c <new-branch-name>",
      "git switch -"
    ],
    walkthrough: [
      {
        command: "git switch -c feature/shopping-cart",
        explanation: "Create and switch to new feature branch in one command.",
        expectedOutput: "Switched to a new branch 'feature/shopping-cart'"
      },
      {
        command: "git switch -",
        explanation: "Quickly toggle back to the previous branch you were just on.",
        expectedOutput: "Switched to branch 'main'"
      }
    ],
    practicalExercise: "Switch between `main` and a new branch using `git switch -c` and toggle back with `git switch -`.",
    commonErrorsAndFixes: [
      {
        error: "error: Your local changes to the following files would be overwritten by checkout.",
        fix: "You have uncommitted changes that collide with files in the target branch. Commit them, stash them with `git stash`, or discard them before switching."
      }
    ],
    industryUseCase: "Modern code review guidelines encourage developers to use `git switch` in all setup scripts and documentation for clarity.",
    interviewQuestions: [
      {
        question: "What is the benefit of `git switch` over `git checkout`?",
        answer: "`git switch` has a single clear responsibility (branch switching/creation), preventing accidental working-directory file overwrites caused by ambiguous syntax in `git checkout`."
      }
    ],
    quiz: {
      question: "Which modern command creates a new branch named `bugfix/login` and switches to it immediately?",
      options: [
        "git switch --new bugfix/login",
        "git switch -c bugfix/login",
        "git branch --goto bugfix/login",
        "git checkout --make bugfix/login"
      ],
      correctIndex: 1,
      explanation: "`git switch -c <branch>` creates the branch and switches HEAD to it."
    },
    officialReference: {
      title: "Git SCM: git-switch Documentation",
      url: "https://git-scm.com/docs/git-switch"
    },
    checklist: [
      "I use git switch instead of legacy git checkout",
      "I know how to create and switch with git switch -c",
      "I use git switch - to jump back to previous branch"
    ]
  },
  {
    id: "unit-31",
    unitNumber: 31,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Creating and Managing Branches (`git branch`, List, Rename, Delete)",
    slug: "creating-and-managing-branches",
    estimatedMinutes: 15,
    topics: ["git branch", "Branch Listing", "Renaming -m", "Safe Delete -d", "Force Delete -D"],
    learningObjectives: [
      "List all local and remote branches (`git branch -a`)",
      "Rename active or arbitrary branches with `git branch -m`",
      "Safely delete merged branches with `-d` and force-delete experimental branches with `-D`"
    ],
    simpleExplanation: "Branches are cheap, but after you finish a feature and merge it, clean up your old branches so your list doesn't become cluttered.",
    analogy: "Throwing away scratch paper notes once you've typed the final essay.",
    technicalExplanation: "`git branch -d` verifies that all commits on the branch are reachable from HEAD before deleting. `-D` skips safety checks and deletes the ref directly.",
    syntaxAndCommands: [
      "git branch -a",
      "git branch -m <new-name>",
      "git branch -d <branch-name>",
      "git branch -D <branch-name>"
    ],
    walkthrough: [
      {
        command: "git branch -m main",
        explanation: "Rename current branch to 'main'.",
        expectedOutput: ""
      },
      {
        command: "git branch -d old-feature",
        explanation: "Safely delete merged branch.",
        expectedOutput: "Deleted branch old-feature (was 3b18e51)."
      }
    ],
    practicalExercise: "Create a branch `temp-test`, switch to `main`, and delete it using `git branch -d temp-test`.",
    commonErrorsAndFixes: [
      {
        error: "error: Cannot delete branch 'feature' checked out at '/path'.",
        fix: "You cannot delete the branch you are currently standing on! Switch to `main` first: `git switch main`, then delete."
      }
    ],
    industryUseCase: "Development teams delete merged feature branches automatically after PR merges to keep repository ref lists clean and fast.",
    interviewQuestions: [
      {
        question: "What is the difference between `git branch -d` and `git branch -D`?",
        answer: "`-d` is safe delete: it refuses to delete a branch if it contains unmerged commits. `-D` is shorthand for `--delete --force`, deleting regardless of merge status."
      }
    ],
    quiz: {
      question: "Which command safely deletes a branch ONLY IF all its commits have already been merged?",
      options: [
        "git branch -D <name>",
        "git branch -d <name>",
        "git branch --kill <name>",
        "git rm --branch <name>"
      ],
      correctIndex: 1,
      explanation: "`git branch -d` enforces the merge safety check before deleting the ref pointer."
    },
    officialReference: {
      title: "Git SCM: git-branch Documentation",
      url: "https://git-scm.com/docs/git-branch"
    },
    checklist: [
      "I know how to list all branches with git branch -a",
      "I know how to rename branches with git branch -m",
      "I know the difference between -d (safe) and -D (force delete)"
    ]
  },
  {
    id: "unit-32",
    unitNumber: 32,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Branch Naming Conventions in Professional Teams",
    slug: "branch-naming-conventions",
    estimatedMinutes: 12,
    topics: ["Branch Naming", "Prefixes", "Jira / GitHub Issues Integration", "Clean Repositories"],
    learningObjectives: [
      "Apply industry-standard branch prefixes (`feature/`, `bugfix/`, `hotfix/`, `chore/`)",
      "Incorporate issue tracker ticket numbers (e.g. `feature/PROJ-123-dark-mode`)",
      "Avoid prohibited branch characters (spaces, colons, consecutive dots)"
    ],
    simpleExplanation: "Naming your branch `my-stuff` tells nobody what you are working on. Naming it `feature/104-user-profile` lets everyone on the team know immediately.",
    analogy: "Labeling files in an office filing cabinet with standard department prefixes and project numbers.",
    technicalExplanation: "Branch names map to filesystem paths under `.git/refs/heads/`. Using slashes (`category/name`) creates virtual directories, enabling hierarchical tab completion and wildcard filtering (`git branch --list 'feature/*'`.)",
    syntaxAndCommands: [
      "git switch -c feature/user-authentication",
      "git switch -c bugfix/navbar-mobile-overlap",
      "git switch -c hotfix/production-payment-null-check"
    ],
    walkthrough: [
      {
        command: "git switch -c feature/TUT-42-git-certification",
        explanation: "Create branch with ticket prefix and descriptive kebab-case slug.",
        expectedOutput: "Switched to a new branch 'feature/TUT-42-git-certification'"
      }
    ],
    practicalExercise: "Practice naming branches for 3 realistic scenarios: fixing a broken footer, adding a dark mode toggle, and updating npm packages.",
    commonErrorsAndFixes: [
      {
        error: "fatal: 'feature test' is not a valid branch name.",
        fix: "Branch names cannot contain spaces! Use hyphens or slashes: `feature/test`."
      }
    ],
    industryUseCase: "CI/CD systems inspect branch name prefixes (e.g., `hotfix/*`) to trigger expedited staging tests and notify on-call managers automatically.",
    interviewQuestions: [
      {
        question: "Why do engineering teams adopt hierarchical branch naming like `feature/abc`?",
        answer: "It provides clarity in team collaboration, maps directly to Jira/GitHub ticket tracking, and allows automated CI/CD filtering based on prefix patterns."
      }
    ],
    quiz: {
      question: "Which of the following is a prohibited character inside a Git branch name?",
      options: [
        "Slash (/)",
        "Hyphen (-)",
        "Space ( )",
        "Underscore (_)"
      ],
      correctIndex: 2,
      explanation: "Spaces are invalid characters in Git references (checked by `git check-ref-format`)."
    },
    officialReference: {
      title: "Git SCM: git-check-ref-format Documentation",
      url: "https://git-scm.com/docs/git-check-ref-format"
    },
    checklist: [
      "I use descriptive kebab-case branch names",
      "I prefix branches with feature/, bugfix/, or hotfix/",
      "I avoid invalid characters like spaces"
    ]
  },
  {
    id: "unit-33",
    unitNumber: 33,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Integrating Changes with `git merge` (Understanding Fast-Forward Merges)",
    slug: "integrating-changes-fast-forward-merge",
    estimatedMinutes: 15,
    topics: ["git merge", "Fast-Forward", "Linear History", "--no-ff Flag"],
    learningObjectives: [
      "Execute basic branch merges using `git merge <branch>`",
      "Understand why a Fast-Forward merge occurs when target branch has no diverging commits",
      "Use `--no-ff` when a team policy requires an explicit merge commit"
    ],
    simpleExplanation: "When you finish work on your feature branch and `main` hasn't had any new commits while you were working, Git simply fast-forwards the `main` pointer forward. No conflicts, no hassle.",
    analogy: "Fast-forwarding a cassette tape to catch up with the music.",
    technicalExplanation: "If the commit at the tip of the current branch is a direct ancestor of the target branch commit, Git performs a fast-forward by simply advancing the branch pointer.",
    syntaxAndCommands: [
      "git switch main",
      "git merge feature/auth",
      "git merge --no-ff feature/auth"
    ],
    walkthrough: [
      {
        command: "git switch main && git merge feature/auth",
        explanation: "Merge feature branch into main via fast-forward.",
        expectedOutput: "Updating 4a7c19f..8fa12cd\nFast-forward\n auth.js | 45 ++++++++++++++++++++\n 1 file changed, 45 insertions(+)"
      }
    ],
    practicalExercise: "Create a branch from `main`, commit a file, switch back to `main`, and merge it to witness a Fast-Forward merge.",
    commonErrorsAndFixes: [
      {
        error: "Merging into the wrong branch.",
        fix: "Always check `git status` or `git branch` before running `git merge`. You must be on the RECEIVING branch (e.g. `main`) when running `git merge <feature>`."
      }
    ],
    industryUseCase: "Trunk-based development teams prefer fast-forward merges to keep production history 100% linear and simple to audit.",
    interviewQuestions: [
      {
        question: "When does Git perform a Fast-Forward merge?",
        answer: "When the target branch tip commit is directly reachable as an ancestor of the incoming branch tip commit, with zero diverging commits on the current branch."
      }
    ],
    quiz: {
      question: "To merge branch `feature-x` INTO `main`, which branch must you have checked out when running `git merge feature-x`?",
      options: [
        "feature-x",
        "main",
        "It does not matter",
        "origin/main"
      ],
      correctIndex: 1,
      explanation: "You must be on the branch you want to merge INTO (main)."
    },
    officialReference: {
      title: "Git SCM: Basic Branching and Merging",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
    },
    checklist: [
      "I know to switch to target branch before merging",
      "I understand why Fast-Forward merges produce linear logs",
      "I know what the --no-ff flag does"
    ]
  },
  {
    id: "unit-34",
    unitNumber: 34,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Three-Way Merges & The Merge Base Commit",
    slug: "three-way-merges-merge-base",
    estimatedMinutes: 18,
    topics: ["3-Way Merge", "Merge Base", "Common Ancestor", "Merge Commit", "git merge-base"],
    learningObjectives: [
      "Understand how Git performs 3-way merges when branches have diverged",
      "Identify the 3 commits involved: Common Ancestor (Base), Current Branch (Ours), Incoming Branch (Theirs)",
      "Inspect the common ancestor using `git merge-base <branch1> <branch2>`"
    ],
    simpleExplanation: "When both you and your teammate made new commits at the same time, Git looks back to find the last point in time where you both agreed (the Common Ancestor), and intelligently weaves the changes together.",
    analogy: "Two editors proofreading different paragraphs of the same original manuscript; both edits are merged into a combined final draft.",
    technicalExplanation: "Git uses a 3-way merge algorithm (typically `ort` or `recursive`). It computes the lowest common ancestor commit (`merge-base`) and calculates two diffs: Base -> Ours, and Base -> Theirs, combining them into a merge commit with 2 parents.",
    syntaxAndCommands: [
      "git merge-base main feature",
      "git merge feature"
    ],
    walkthrough: [
      {
        command: "git merge-base main feature/auth",
        explanation: "Find the common ancestor commit hash where the branches diverged.",
        expectedOutput: "4a7c19f20108920192384a8bc12093847291a012"
      },
      {
        command: "git merge feature/auth",
        explanation: "Perform 3-way merge, opening editor for merge commit message.",
        expectedOutput: "Merge made by the 'ort' strategy.\n auth.js | 10 ++\n 1 file changed, 10 insertions(+)"
      }
    ],
    practicalExercise: "Create a commit on `main` and a commit on `feature`. Merge them and inspect `git log --graph --oneline` to see the merge commit.",
    commonErrorsAndFixes: [
      {
        error: "Surprise when terminal opens Vim or Nano for a merge commit message.",
        fix: "Accept the default message! In Nano, press `Ctrl+O`, `Enter`, `Ctrl+X`. In Vim, type `:wq` and press `Enter`."
      }
    ],
    industryUseCase: "Open-source projects like the Linux kernel use 3-way merge commits to clearly document when major subsystems are joined into the release branch.",
    interviewQuestions: [
      {
        question: "What are the three trees/commits involved in a 3-way merge?",
        answer: "1. The common ancestor commit (merge-base), 2. The tip of the active branch (HEAD / 'ours'), and 3. The tip of the incoming branch being merged ('theirs')."
      }
    ],
    quiz: {
      question: "How many parent commits does a standard merge commit have in Git?",
      options: [
        "0",
        "1",
        "At least 2",
        "It has no parents"
      ],
      correctIndex: 2,
      explanation: "A merge commit records two (or more in an octopus merge) parent commit references."
    },
    officialReference: {
      title: "Git SCM: Advanced Merging",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging"
    },
    checklist: [
      "I understand how the 3-way merge algorithm works",
      "I can find the common ancestor with git merge-base",
      "I know how to read 2-parent merge commits in git log"
    ]
  },
  {
    id: "unit-35",
    unitNumber: 35,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Merge Conflicts Explained: Anatomy of Conflict Markers",
    slug: "merge-conflicts-explained",
    estimatedMinutes: 18,
    topics: ["Merge Conflicts", "Conflict Markers", "<<<<<<< HEAD", "=======", ">>>>>>> Branch"],
    learningObjectives: [
      "Understand why merge conflicts occur (diverging edits to the exact same lines)",
      "Dissect conflict marker anatomy: `<<<<<<< HEAD`, `=======`, `>>>>>>> <branch>`",
      "Recognize that merge conflicts are a normal, everyday engineering occurrence, not an error"
    ],
    simpleExplanation: "A merge conflict isn't an error or a crash. It's simply Git raising its hand and saying: 'Two people edited the exact same line in two different ways. I don't know who is right, so you decide!'",
    analogy: "Two friends planning dinner: one wrote 'Pizza' on the shopping list, the other wrote 'Burgers' on the same line. You have to decide which one to keep.",
    technicalExplanation: "When both diffs from the merge-base touch overlapping byte offsets with conflicting changes, Git halts the automatic merge, marks the files as unmerged in the index, and writes conflict markers to the working tree.",
    syntaxAndCommands: [
      "git status",
      "git diff",
      "<<<<<<< HEAD",
      "=======",
      ">>>>>>> <branch>"
    ],
    walkthrough: [
      {
        command: "git status",
        explanation: "Check conflict status: files are listed under 'Unmerged paths'.",
        expectedOutput: "Unmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n\tboth modified:   index.html"
      }
    ],
    practicalExercise: "Inspect a conflict block in a text editor and identify which part belongs to HEAD and which belongs to the incoming branch.",
    commonErrorsAndFixes: [
      {
        error: "Panicking and deleting the repository when a conflict happens.",
        fix: "Don't panic! Remember you can always abort with `git merge --abort` to return to your exact starting state at any time."
      }
    ],
    industryUseCase: "Engineering teams resolve dozens of merge conflicts every sprint. VS Code and JetBrains IDEs provide interactive 3-way conflict resolution visualizers.",
    interviewQuestions: [
      {
        question: "What causes a Git merge conflict?",
        answer: "A conflict occurs when two branches modify the same line(s) of a file differently since their common ancestor, or when one branch modifies a file that the other branch deleted."
      }
    ],
    quiz: {
      question: "In a Git merge conflict marker, what does the section between `<<<<<<< HEAD` and `=======` represent?",
      options: [
        "The version from the branch being merged into your current branch.",
        "The version currently checked out on your active branch.",
        "A syntax error identified by the browser.",
        "Code automatically deleted by Git."
      ],
      correctIndex: 1,
      explanation: "`<<<<<<< HEAD` to `=======` contains the changes on your current checked-out branch."
    },
    officialReference: {
      title: "Git SCM: Basic Merge Conflicts",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts"
    },
    checklist: [
      "I know conflicts occur on overlapping line edits",
      "I can read <<<<<<< HEAD, =======, and >>>>>>> markers",
      "I treat conflicts as standard collaboration checkpoints"
    ]
  },
  {
    id: "unit-36",
    unitNumber: 36,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Resolving Merge Conflicts Step-by-Step with Verification",
    slug: "resolving-merge-conflicts-step-by-step",
    estimatedMinutes: 20,
    topics: ["Conflict Resolution", "git add", "Resolving Markers", "Test Verification", "Finalizing Commit"],
    learningObjectives: [
      "Follow the 5-step conflict resolution protocol reliably",
      "Remove all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) cleanly",
      "Run tests and build checks BEFORE finalizing the merge commit"
    ],
    simpleExplanation: "To fix a conflict: 1. Open the file. 2. Choose the correct code. 3. Delete the marker lines. 4. Run `git add <file>`. 5. Run `git commit`.",
    analogy: "Erasing the pencil marks and whiteout on a document before printing the official final version.",
    technicalExplanation: "When you edit the conflicted file and run `git add <file>`, Git marks the conflict resolved in stage 0 of the index. Running `git commit` (without `-m`) auto-generates the standard merge commit message.",
    syntaxAndCommands: [
      "git status",
      "git add <resolved-file>",
      "git commit"
    ],
    walkthrough: [
      {
        command: "git add index.html",
        explanation: "Mark conflicted file as resolved by staging the cleaned-up file.",
        expectedOutput: ""
      },
      {
        command: "git commit -m \"merge: resolve navbar title conflict between main and feature\"",
        explanation: "Finalize the merge commit.",
        expectedOutput: "[main c910e82] merge: resolve navbar title conflict between main and feature"
      }
    ],
    practicalExercise: "Follow Practical Lab 5 to deliberately create and resolve a conflict from start to finish.",
    commonErrorsAndFixes: [
      {
        error: "Accidentally leaving `<<<<<<< HEAD` or `>>>>>>>` text in your code, which causes application syntax errors.",
        fix: "Always search your project for `<<<<<<<` before committing: `grep -rn '<<<<<<<' .`."
      }
    ],
    industryUseCase: "Automated CI/CD linting checks fail builds if residual Git conflict marker characters (`<<<<<<<`) are detected in committed files.",
    interviewQuestions: [
      {
        question: "How do you signal to Git that a conflicted file has been successfully resolved?",
        answer: "By staging the resolved file with `git add <filename>`."
      }
    ],
    quiz: {
      question: "After manually editing a conflicted file and removing conflict markers, what command tells Git the conflict is resolved?",
      options: [
        "git resolve <file>",
        "git add <file>",
        "git conflict --done",
        "git fix <file>"
      ],
      correctIndex: 1,
      explanation: "`git add <file>` marks the conflict as resolved in the Git index."
    },
    officialReference: {
      title: "GitHub Docs: Resolving a merge conflict using the command line",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line"
    },
    checklist: [
      "I know the 5 steps of conflict resolution",
      "I delete all conflict markers completely",
      "I verify the app runs before committing the merge"
    ]
  },
  {
    id: "unit-37",
    unitNumber: 37,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Aborting Merges Safely with `git merge --abort`",
    slug: "aborting-merges-git-merge-abort",
    estimatedMinutes: 10,
    topics: ["git merge --abort", "Merge Safety", "Undoing Active Merges", "Escape Hatch"],
    learningObjectives: [
      "Cancel an in-progress merge conflict immediately using `git merge --abort`",
      "Return working tree and index to the exact state prior to running `git merge`",
      "Understand when it is smarter to pause and regroup with teammates"
    ],
    simpleExplanation: "If a merge conflict looks terrifying, confusing, or touches files you don't understand, don't guess! Run `git merge --abort` and Git rewinds time as if you never attempted the merge.",
    analogy: "Hitting the 'Cancel' button in an installation wizard when you realize you selected the wrong drive.",
    technicalExplanation: "`git merge --abort` reads `ORIG_HEAD` and resets the index and working tree back to the pre-merge state, cleaning up unresolved conflict metadata.",
    syntaxAndCommands: [
      "git merge --abort",
      "git status"
    ],
    walkthrough: [
      {
        command: "git merge --abort",
        explanation: "Safely exit active conflict state and restore pre-merge tree.",
        expectedOutput: ""
      },
      {
        command: "git status",
        explanation: "Verify tree is back to clean state on active branch.",
        expectedOutput: "On branch main\nnothing to commit, working tree clean"
      }
    ],
    practicalExercise: "Trigger a merge conflict in a test repo, run `git merge --abort`, and verify with `git status` that everything returned to normal.",
    commonErrorsAndFixes: [
      {
        error: "Running `git reset --hard` during a merge instead of `git merge --abort`.",
        fix: "`git merge --abort` is the dedicated, safe command designed specifically to clean up in-progress merge state without unintended side effects."
      }
    ],
    industryUseCase: "When a junior developer encounters an unexpected 50-file conflict, they abort the merge and pair-program with the senior author of the incoming branch.",
    interviewQuestions: [
      {
        question: "What does `git merge --abort` do during a conflict?",
        answer: "It resets the working tree and index back to the exact commit state before the merge command was initiated."
      }
    ],
    quiz: {
      question: "Which command immediately cancels an in-progress merge conflict and returns to the pre-merge state?",
      options: [
        "git merge --cancel",
        "git merge --abort",
        "git exit --merge",
        "git rollback"
      ],
      correctIndex: 1,
      explanation: "`git merge --abort` safely abandons the current merge operation."
    },
    officialReference: {
      title: "Git SCM: git-merge --abort documentation",
      url: "https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---abort"
    },
    checklist: [
      "I know the merge escape hatch command",
      "I use git merge --abort when conflicts are unclear",
      "I verify the working tree is restored with git status"
    ]
  },
  {
    id: "unit-38",
    unitNumber: 38,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Deleting Merged vs. Unmerged Branches & Remote Pruning (`git fetch --prune`)",
    slug: "deleting-branches-and-remote-pruning",
    estimatedMinutes: 15,
    topics: ["git branch -d", "git branch -D", "git fetch --prune", "Remote Tracking Branches"],
    learningObjectives: [
      "Prune deleted remote branches locally using `git fetch --prune`",
      "Identify stale branches that have already been merged into `main` (`git branch --merged`)",
      "Keep local and remote branch lists synchronized"
    ],
    simpleExplanation: "When a teammate deletes a feature branch on GitHub after merging their PR, your local Git still remembers the old branch name until you run `git fetch --prune` to sweep away the ghost branches.",
    analogy: "Deleting outdated phone contacts of people who changed numbers.",
    technicalExplanation: "`git fetch --prune` deletes remote-tracking refs (`refs/remotes/origin/*`) that no longer exist on the remote repository.",
    syntaxAndCommands: [
      "git branch --merged",
      "git fetch --prune",
      "git config --global fetch.prune true"
    ],
    walkthrough: [
      {
        command: "git fetch --prune origin",
        explanation: "Fetch latest updates and prune deleted remote branches.",
        expectedOutput: "From https://github.com/org/repo\n - [deleted]         (none)     -> origin/feature/old-navbar"
      }
    ],
    practicalExercise: "Enable automatic pruning globally: `git config --global fetch.prune true`.",
    commonErrorsAndFixes: [
      {
        error: "Seeing dozens of deleted branches in `git branch -a`.",
        fix: "Run `git fetch --prune`. Configure `fetch.prune = true` globally so Git cleans remote references automatically."
      }
    ],
    industryUseCase: "Enterprise repositories with hundreds of developers would grind to a halt with thousands of dead branch refs without automatic pruning.",
    interviewQuestions: [
      {
        question: "What does `git fetch --prune` do?",
        answer: "Before fetching, it removes any remote-tracking references that no longer exist on the remote repository."
      }
    ],
    quiz: {
      question: "Which command cleans up local tracking references for branches that have already been deleted on GitHub?",
      options: [
        "git clean --branches",
        "git fetch --prune",
        "git remote --delete-all",
        "git branch --sync"
      ],
      correctIndex: 1,
      explanation: "`git fetch --prune` deletes obsolete remote-tracking branches."
    },
    officialReference: {
      title: "Git SCM: Remote Branches - Pruning",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches"
    },
    checklist: [
      "I know how to list merged branches",
      "I use git fetch --prune to clean dead remote refs",
      "I enabled automatic pruning in git config"
    ]
  },
  {
    id: "unit-39",
    unitNumber: 39,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Rebasing Fundamentals: Moving the Branch Base Point",
    slug: "rebasing-fundamentals",
    estimatedMinutes: 18,
    topics: ["git rebase", "Rebase Mechanics", "Linear History", "Hash Changes"],
    learningObjectives: [
      "Understand what `git rebase <base>` does conceptually",
      "Trace how Git replays commits one by one onto a new base commit",
      "Recognize that rebasing creates brand new commits with new SHA-1 hashes"
    ],
    simpleExplanation: "Imagine you started writing a chapter based on version 1 of a book. While you were writing, the author published version 2. Rebasing picks up your chapter and rewrites it as if you started from version 2 all along.",
    analogy: "Transplanting a growing branch from an old tree trunk onto a taller, fresher tree trunk.",
    technicalExplanation: "`git rebase <upstream>` finds the common ancestor, saves your branch's commits as temporary patches in `.git/rebase-apply`, resets the branch to `<upstream>`, and replays each patch sequentially.",
    syntaxAndCommands: [
      "git switch feature",
      "git rebase main",
      "git rebase --continue",
      "git rebase --abort"
    ],
    walkthrough: [
      {
        command: "git switch feature/cart && git rebase main",
        explanation: "Rebase feature branch on top of latest main.",
        expectedOutput: "Successfully rebased and updated refs/heads/feature/cart."
      }
    ],
    practicalExercise: "Create a feature branch, add commits to both `main` and the feature branch, and rebase the feature branch on `main`.",
    commonErrorsAndFixes: [
      {
        error: "Conflict occurs during rebase.",
        fix: "Fix the conflict in the file, run `git add <file>`, and run `git rebase --continue`. DO NOT run `git commit` during a rebase!"
      }
    ],
    industryUseCase: "Engineering teams rebase their feature branches onto `origin/main` daily before opening a PR to ensure seamless conflict-free merges.",
    interviewQuestions: [
      {
        question: "What is the technical difference between the commits before and after a rebase?",
        answer: "Even if the code changes are identical, the commits after a rebase are brand new objects with different parent pointers, timestamps, and therefore different SHA-1 hashes."
      }
    ],
    quiz: {
      question: "What command continues an in-progress rebase after resolving a conflict and staging the file with `git add`?",
      options: [
        "git commit",
        "git rebase --continue",
        "git rebase --finish",
        "git resume"
      ],
      correctIndex: 1,
      explanation: "`git rebase --continue` replays the remaining commits in the queue."
    },
    officialReference: {
      title: "Git SCM: Git Branching - Rebasing",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
    },
    checklist: [
      "I understand how rebase replays patches",
      "I know to use git rebase --continue after conflicts",
      "I know rebasing rewrites commit hashes"
    ]
  },
  {
    id: "unit-40",
    unitNumber: 40,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Merge vs. Rebase: The Great Debate & Team Strategy Guidelines",
    slug: "merge-vs-rebase-guidelines",
    estimatedMinutes: 18,
    topics: ["Merge vs Rebase", "The Golden Rule of Rebasing", "Trunk-Based Development", "GitFlow"],
    learningObjectives: [
      "Compare the trade-offs of `git merge` (preserves historical truth) vs `git rebase` (linear story)",
      "Strictly memorize and apply the Golden Rule of Rebasing",
      "Choose the appropriate strategy based on team workflow policies"
    ],
    simpleExplanation: "`merge` preserves the exact messy truth of what happened and when. `rebase` tells a clean, beautiful story. Use rebase on your own private laptop work; use merge once you share work with teammates.",
    analogy: "A rough draft journal (merge) vs a published, polished book chapter (rebase).",
    technicalExplanation: "The Golden Rule: Never rebase commits that exist outside your repository and that people may have based work on. Rewriting shared history breaks other clones and leads to duplicate commits upon merging.",
    syntaxAndCommands: [
      "git pull --rebase origin main",
      "git merge --no-ff feature"
    ],
    walkthrough: [
      {
        command: "git pull --rebase origin main",
        explanation: "Keep local branch up to date with remote without creating ugly micro-merge commits.",
        expectedOutput: "Current branch main is up to date."
      }
    ],
    practicalExercise: "Write a 3-bullet team guide outlining when developers on your team should merge vs rebase.",
    commonErrorsAndFixes: [
      {
        error: "Rebasing `main` and force-pushing to GitHub.",
        fix: "NEVER do this! It breaks every teammate's working repository. Protect `main` with GitHub Branch Protection Rules."
      }
    ],
    industryUseCase: "Companies like Google and Spotify enforce Trunk-Based Development with fast-forward/rebase PRs to maintain crystal-clear bisectable commit logs.",
    interviewQuestions: [
      {
        question: "State the Golden Rule of Rebasing and explain why it is vital.",
        answer: "Never rebase commits that have been pushed to a public/shared branch. Rebasing changes commit hashes, causing history divergence and severe conflict nightmares for teammates who pulled those commits."
      }
    ],
    quiz: {
      question: "According to the Golden Rule of Rebasing, which commits should you NEVER rebase?",
      options: [
        "Commits created on a Friday.",
        "Commits that have already been pushed to a public/shared repository.",
        "Commits that touch CSS files.",
        "Commits with fewer than 10 lines of code."
      ],
      correctIndex: 1,
      explanation: "Rebasing published shared commits forces other developers into complex history desynchronization."
    },
    officialReference: {
      title: "Pro Git: The Perils of Rebasing",
      url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebase_peril"
    },
    checklist: [
      "I know the pros and cons of merge vs rebase",
      "I know the Golden Rule of Rebasing by heart",
      "I keep private feature branches rebased before PR"
    ]
  },
  {
    id: "unit-41",
    unitNumber: 41,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Interactive Rebase (`git rebase -i`): Squashing, Rewording, and Reordering",
    slug: "interactive-rebase-squashing-rewording",
    estimatedMinutes: 20,
    topics: ["git rebase -i", "squash / fixup", "reword", "drop", "Clean PR History"],
    learningObjectives: [
      "Launch interactive rebase with `git rebase -i HEAD~N`",
      "Combine messy trial-and-error commits using `squash` (s) and `fixup` (f)",
      "Edit commit messages with `reword` (r) and delete commits with `drop` (d)"
    ],
    simpleExplanation: "While building a feature, you might make 10 messy commits ('fixed typo', 'test again', 'finally works'). Interactive rebase lets you squash all 10 into 1 beautiful, professional commit before your boss reviews it.",
    analogy: "Like editing the rough cuts and outtakes of a movie into a polished 2-hour cinema release.",
    technicalExplanation: "`git rebase -i` opens an editor with an instruction todo list. Git pauses at each command (`pick`, `reword`, `edit`, `squash`, `fixup`, `drop`) allowing fine-grained history reconstruction.",
    syntaxAndCommands: [
      "git rebase -i HEAD~3",
      "Commands: pick, reword, edit, squash, fixup, drop"
    ],
    walkthrough: [
      {
        command: "git rebase -i HEAD~3",
        explanation: "Open interactive rebase todo list for the last 3 commits.",
        expectedOutput: "pick 4a7c19f feat: add login button\npick 8fa12cd fix typo in login\npick b1028af fix css color\n# Rebase instructions..."
      }
    ],
    practicalExercise: "Make 3 test commits. Use `git rebase -i HEAD~3` and change the second and third from `pick` to `fixup` (f) to squash them.",
    commonErrorsAndFixes: [
      {
        error: "Changing the first commit in the list to `squash`.",
        fix: "The first commit cannot be squashed because there is no prior commit in the selected list to fold into! Leave the first commit as `pick`."
      }
    ],
    industryUseCase: "Senior developers interactive-rebase every branch before submitting PRs, ensuring the company git log looks clean, intentional, and readable.",
    interviewQuestions: [
      {
        question: "What is the difference between `squash` and `fixup` in interactive rebase?",
        answer: "Both combine the commit into the previous commit. `squash` prompts you to combine both commit messages, whereas `fixup` discards the squashed commit's log message."
      }
    ],
    quiz: {
      question: "In `git rebase -i`, which command combines a commit into the previous commit while DISCARDING its commit message?",
      options: [
        "squash (s)",
        "fixup (f)",
        "reword (r)",
        "drop (d)"
      ],
      correctIndex: 1,
      explanation: "`fixup` merges the changes into the previous commit and discards the log message."
    },
    officialReference: {
      title: "Git SCM: Rewriting History - Changing Multiple Commit Messages",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History"
    },
    checklist: [
      "I know how to launch git rebase -i HEAD~N",
      "I use squash and fixup to clean commit history",
      "I know how to reword and reorder commits"
    ]
  },
  {
    id: "unit-42",
    unitNumber: 42,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Cherry-Picking Commits with `git cherry-pick`",
    slug: "cherry-picking-commits",
    estimatedMinutes: 15,
    topics: ["git cherry-pick", "Selective Commit Copying", "Hotfixes", "Patch Porting"],
    learningObjectives: [
      "Apply specific individual commits from one branch onto another using `git cherry-pick <hash>`",
      "Port hotfixes from development branches directly into production release branches",
      "Understand why cherry-picking creates a new commit hash with the same diff"
    ],
    simpleExplanation: "Imagine you are at an ice cream shop with 30 flavors. Instead of ordering the whole shop, you point to just one scoop of strawberry. Cherry-pick grabs just ONE specific commit from another branch without merging anything else.",
    analogy: "Picking one specific strawberry from a fruit basket to put on top of your cake.",
    technicalExplanation: "`git cherry-pick <commit>` computes the patch introduced by `<commit>` relative to its parent and applies that exact patch on top of the currently checked-out branch, recording a new commit.",
    syntaxAndCommands: [
      "git cherry-pick <commit-hash>",
      "git cherry-pick -n <hash> (no commit, stage only)",
      "git cherry-pick --continue",
      "git cherry-pick --abort"
    ],
    walkthrough: [
      {
        command: "git switch main && git cherry-pick 8fa12cd",
        explanation: "Apply hotfix commit 8fa12cd onto main branch.",
        expectedOutput: "[main d9801af] fix: critical null pointer in payment gateway\n 1 file changed, 2 insertions(+)"
      }
    ],
    practicalExercise: "Create a commit on a branch `dev`. Switch to `main` and cherry-pick that specific commit hash.",
    commonErrorsAndFixes: [
      {
        error: "Cherry-picking the same commit multiple times onto the same branch.",
        fix: "Avoid cherry-picking unnecessarily; if you need the whole branch, merge or rebase instead to prevent duplicate commits."
      }
    ],
    industryUseCase: "When a bugfix is committed on the `develop` branch, engineers cherry-pick it onto `v2.4-hotfix` for immediate customer deployment.",
    interviewQuestions: [
      {
        question: "When is `git cherry-pick` preferred over `git merge`?",
        answer: "When you need a single bugfix or feature from a branch that also contains unfinished or unapproved commits that should not be merged yet."
      }
    ],
    quiz: {
      question: "Which command applies the exact changes from commit `a1b2c3d` onto your active branch?",
      options: [
        "git merge a1b2c3d",
        "git cherry-pick a1b2c3d",
        "git copy a1b2c3d",
        "git apply-commit a1b2c3d"
      ],
      correctIndex: 1,
      explanation: "`git cherry-pick <hash>` ports that specific individual commit."
    },
    officialReference: {
      title: "Git SCM: git-cherry-pick Documentation",
      url: "https://git-scm.com/docs/git-cherry-pick"
    },
    checklist: [
      "I know how to cherry-pick a commit by hash",
      "I know when cherry-pick is better than full merge",
      "I know how to resolve conflicts during cherry-pick"
    ]
  },
  {
    id: "unit-43",
    unitNumber: 43,
    level: 3,
    levelTitle: "Level 3 — Branching and Merging",
    title: "Stashing Unfinished Work with `git stash` & Restoring with `pop`/`apply`",
    slug: "stashing-unfinished-work",
    estimatedMinutes: 15,
    topics: ["git stash", "git stash pop", "git stash apply", "git stash list", "git stash drop"],
    learningObjectives: [
      "Shelve unfinished changes safely using `git stash`",
      "Inspect the stash stack with `git stash list`",
      "Restore stashed work using `git stash pop` (restores & removes) vs `git stash apply` (restores & keeps)",
      "Stash untracked files with `git stash -u`"
    ],
    simpleExplanation: "You're in the middle of writing code when your boss says 'Quick, check this bug on main!'. You don't want to make an ugly unfinished commit. `git stash` puts your work in a drawer so your desk is clean, and you can take it back out later.",
    analogy: "Putting your unfinished puzzle on a side table so guests can use the dining table.",
    technicalExplanation: "`git stash` saves your local modifications (both staged and unstaged) to a special ref (`refs/stash`) and resets the working directory to match HEAD. Stashes operate as a LIFO (Last-In, First-Out) stack.",
    syntaxAndCommands: [
      "git stash",
      "git stash -u (include untracked files)",
      "git stash save \"description\"",
      "git stash list",
      "git stash pop",
      "git stash apply"
    ],
    walkthrough: [
      {
        command: "git stash push -m \"wip: half-finished cart checkout\"",
        explanation: "Shelve uncommitted modifications with descriptive label.",
        expectedOutput: "Saved working directory and index state WIP on feature: wip: half-finished cart checkout"
      },
      {
        command: "git stash list",
        explanation: "Inspect stashes currently stored on the stack.",
        expectedOutput: "stash@{0}: On feature: wip: half-finished cart checkout"
      },
      {
        command: "git stash pop",
        explanation: "Restore changes and remove them from the stash stack.",
        expectedOutput: "On branch feature\nChanges not staged for commit:\n\tmodified:   cart.js\nDropped stash@{0}"
      }
    ],
    practicalExercise: "Make an unstaged edit, run `git stash`, observe clean status, and restore it with `git stash pop`.",
    commonErrorsAndFixes: [
      {
        error: "Running `git stash` and noticing brand new untracked files were NOT stashed.",
        fix: "By default, `git stash` ignores untracked files! Use `git stash -u` (or `--include-untracked`) to stash new files too."
      }
    ],
    industryUseCase: "Engineers stash work before pulling upstream updates to prevent merge conflicts during `git pull --rebase`.",
    interviewQuestions: [
      {
        question: "What is the difference between `git stash pop` and `git stash apply`?",
        answer: "`git stash pop` applies the stash and immediately removes it from the stash list. `git stash apply` restores the changes but leaves the stash on the stack for re-use."
      }
    ],
    quiz: {
      question: "Which flag allows `git stash` to ALSO save newly created UNTRACKED files?",
      options: [
        "-a",
        "-u",
        "-f",
        "--all-clean"
      ],
      correctIndex: 1,
      explanation: "`-u` (or `--include-untracked`) stashes untracked files alongside tracked modifications."
    },
    officialReference: {
      title: "Git SCM: Git Tools - Stashing and Cleaning",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning"
    },
    checklist: [
      "I know how to stash work in progress",
      "I know the difference between stash pop and apply",
      "I use git stash -u to include untracked files"
    ]
  }
];
