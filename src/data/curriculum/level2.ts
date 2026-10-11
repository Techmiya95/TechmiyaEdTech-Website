import { CurriculumUnit } from "./types";

export const level2Units: CurriculumUnit[] = [
  {
    id: "unit-15",
    unitNumber: 15,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Viewing Differences with `git diff` (Working Tree vs Staging vs HEAD)",
    slug: "viewing-differences-git-diff",
    estimatedMinutes: 15,
    topics: ["git diff", "git diff --staged", "git diff HEAD", "Unified Diff Format"],
    learningObjectives: [
      "Compare modifications across the three trees using `git diff`",
      "Inspect unstaged changes vs staged changes with `git diff --staged`",
      "Read unified diff syntax (+ green additions, - red deletions, chunk headers)"
    ],
    simpleExplanation: "`git diff` shows the exact words you changed before you save them. It highlights what you added in green and what you removed in red.",
    analogy: "Like 'Track Changes' in Microsoft Word, showing strikethroughs and highlighted revisions.",
    technicalExplanation: "`git diff` computes line-by-line unified diffs using the Myers or Histogram diff algorithm between tree objects or the filesystem index.",
    syntaxAndCommands: [
      "git diff (Working directory vs Index)",
      "git diff --staged (or --cached, Index vs HEAD)",
      "git diff HEAD (Working directory + Index vs HEAD)",
      "git diff <commit1> <commit2>"
    ],
    walkthrough: [
      {
        command: "git diff",
        explanation: "Show unstaged working directory changes compared to the staging area.",
        expectedOutput: "diff --git a/app.js b/app.js\n--- a/app.js\n+++ b/app.js\n@@ -1,3 +1,4 @@\n+console.log(\"New feature added\");"
      },
      {
        command: "git diff --staged",
        explanation: "Show staged changes ready to be included in the next commit.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Modify a file, run `git diff` to view the changes. Stage it with `git add`, run `git diff` again (empty), and run `git diff --staged`.",
    commonErrorsAndFixes: [
      {
        error: "Running `git diff` and seeing no output after `git add`.",
        fix: "Once a file is staged, normal `git diff` shows nothing because there are no unstaged differences. Use `git diff --staged` to view staged changes."
      }
    ],
    industryUseCase: "Engineers run `git diff --staged` as a self-review checkpoint before every commit to catch leftover console.log or debug statements.",
    interviewQuestions: [
      {
        question: "What is the difference between `git diff` and `git diff --staged`?",
        answer: "`git diff` compares the working tree against the index (unstaged changes). `git diff --staged` compares the index against HEAD (staged changes about to be committed)."
      }
    ],
    quiz: {
      question: "Which command shows differences for changes that have ALREADY been staged with `git add`?",
      options: [
        "git diff",
        "git diff --staged",
        "git diff --working",
        "git status --diff"
      ],
      correctIndex: 1,
      explanation: "`git diff --staged` (or `--cached`) compares staged files against the last commit (HEAD)."
    },
    officialReference: {
      title: "Git SCM: git-diff Documentation",
      url: "https://git-scm.com/docs/git-diff"
    },
    checklist: [
      "I know when to use git diff vs git diff --staged",
      "I can read unified diff output (@@ headers, + and -)",
      "I review diffs before committing"
    ]
  },
  {
    id: "unit-16",
    unitNumber: 16,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Inspecting Commit History with `git log` and Formatting Flags",
    slug: "inspecting-history-git-log",
    estimatedMinutes: 15,
    topics: ["git log", "git log --oneline", "git log --graph", "Author Filtering", "Date Ranges"],
    learningObjectives: [
      "Navigate commit history backwards from HEAD",
      "Format log output using `--oneline`, `--graph`, and `--decorate`",
      "Filter commits by author (`--author`), date (`--since`), and file path"
    ],
    simpleExplanation: "`git log` is your project diary. It lists every save milestone that was ever created, who made it, and when.",
    analogy: "Like scrolling through bank statement transactions with dates, amounts, and notes.",
    technicalExplanation: "`git log` traverses the commit directed acyclic graph (DAG) following parent pointers from the currently referenced commit.",
    syntaxAndCommands: [
      "git log",
      "git log --oneline",
      "git log --graph --oneline --all",
      "git log -n 5",
      "git log --author=\"Alice\""
    ],
    walkthrough: [
      {
        command: "git log --oneline -n 3",
        explanation: "Display the last 3 commits in compact single-line format.",
        expectedOutput: "8fa12cd (HEAD -> main) feat: implement user registration form\n4a7c19f docs: add project documentation\n1b09e8a initial commit"
      }
    ],
    practicalExercise: "Create an alias for a pretty log graph: `git config --global alias.tree \"log --graph --oneline --all\"` and run `git tree`.",
    commonErrorsAndFixes: [
      {
        error: "Terminal appears stuck on ':' after running `git log`.",
        fix: "Git uses a pager (`less`). Press 'q' on your keyboard to exit the log pager and return to the prompt."
      }
    ],
    industryUseCase: "Release managers review `git log v1.0.0..v1.1.0` to generate automated release notes and changelogs for customer deployments.",
    interviewQuestions: [
      {
        question: "How do you view commit history in a graphical branch format in the terminal?",
        answer: "By passing the `--graph` flag to `git log`, typically combined as `git log --graph --oneline --all`."
      }
    ],
    quiz: {
      question: "Which keyboard key exits the `git log` pager viewer when it pauses the terminal?",
      options: [
        "Ctrl + Alt + Del",
        "Escape",
        "q",
        "Enter"
      ],
      correctIndex: 2,
      explanation: "Pressing 'q' quits the terminal pager (less) and returns to your command prompt."
    },
    officialReference: {
      title: "Git SCM: Viewing the Commit History",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History"
    },
    checklist: [
      "I know how to read standard git log output",
      "I use git log --oneline for quick summaries",
      "I know how to exit the pager with 'q'"
    ]
  },
  {
    id: "unit-17",
    unitNumber: 17,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Deep Inspection with `git show` (Analyzing Commits, Trees, and Blobs)",
    slug: "deep-inspection-git-show",
    estimatedMinutes: 12,
    topics: ["git show", "Commit Inspection", "Object Inspection", "Tags"],
    learningObjectives: [
      "Inspect the metadata and patch diff of any specific commit using `git show <hash>`",
      "Examine file content at a past point in history without checking it out",
      "Differentiate between `git log` and `git show`"
    ],
    simpleExplanation: "`git log` lists all commits like a chapter list in a book. `git show` opens one specific chapter and lets you read every word that was edited in it.",
    analogy: "Clicking on an email in your inbox to read the full body and attachments.",
    technicalExplanation: "`git show` displays the object contents and metadata: for commits, it outputs the commit message, author, date, and full unified diff introduced by that commit.",
    syntaxAndCommands: [
      "git show",
      "git show <commit-hash>",
      "git show HEAD~1",
      "git show <commit>:<file-path>"
    ],
    walkthrough: [
      {
        command: "git show 8fa12cd",
        explanation: "Inspect full diff and author metadata for commit 8fa12cd.",
        expectedOutput: "commit 8fa12cd...\nAuthor: Techmiya Student <student@techmiya.com>\nDate:   Sun Oct 11...\n\n    feat: implement user registration\n\ndiff --git a/app.js b/app.js..."
      }
    ],
    practicalExercise: "Run `git log --oneline`, copy a commit hash, and run `git show <hash>` to inspect what changed.",
    commonErrorsAndFixes: [
      {
        error: "fatal: bad object <hash>",
        fix: "The commit hash does not exist in this repository. Verify the hash from `git log`."
      }
    ],
    industryUseCase: "Security auditors use `git show <hash>` to verify that a specific commit did not introduce unauthorized vulnerability backdoors.",
    interviewQuestions: [
      {
        question: "How can you view the content of a file from 3 commits ago without switching branches or reverting files?",
        answer: "Run `git show HEAD~3:path/to/file.js`."
      }
    ],
    quiz: {
      question: "Which command shows the complete diff and details of the MOST RECENT commit (`HEAD`)?",
      options: [
        "git show",
        "git peek",
        "git status --full",
        "git detail"
      ],
      correctIndex: 0,
      explanation: "`git show` defaults to inspecting `HEAD` if no commit hash is specified."
    },
    officialReference: {
      title: "Git SCM: git-show Documentation",
      url: "https://git-scm.com/docs/git-show"
    },
    checklist: [
      "I know how to inspect a specific commit with git show",
      "I can view historical file content using git show <hash>:<file>",
      "I understand the difference between log and show"
    ]
  },
  {
    id: "unit-18",
    unitNumber: 18,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Safe File Recovery with `git restore` (Working Tree vs Staged Restoration)",
    slug: "file-recovery-git-restore",
    estimatedMinutes: 15,
    topics: ["git restore", "git restore --staged", "Discarding Changes", "Git 2.23+ Architecture"],
    learningObjectives: [
      "Use modern `git restore` to discard uncommitted working directory edits safely",
      "Unstage files with `git restore --staged <file>` without losing working directory modifications",
      "Understand why `git restore` replaced overloaded `git checkout -- <file>`"
    ],
    simpleExplanation: "Made a typo or broke something that used to work? `git restore` resets the file back to your last saved milestone, wiping away messy unsaved experiments.",
    analogy: "Like hitting 'Revert to Last Saved' in an image editor.",
    technicalExplanation: "`git restore` copies content from the tree specified by `--source` (defaults to index for working tree, or HEAD for `--staged`) into the target location.",
    syntaxAndCommands: [
      "git restore <file>",
      "git restore --staged <file>",
      "git restore --source=<commit> <file>",
      "git restore ."
    ],
    walkthrough: [
      {
        command: "git restore --staged app.js",
        explanation: "Remove app.js from staging area while keeping your modified code on disk.",
        expectedOutput: ""
      },
      {
        command: "git restore app.js",
        explanation: "Discard modifications in working directory, returning file to last committed state.",
        expectedOutput: ""
      }
    ],
    practicalExercise: "Edit a file, stage it, unstage it with `git restore --staged`, and then discard the edit with `git restore`.",
    commonErrorsAndFixes: [
      {
        error: "Running `git restore <untracked-file>` and getting 'pathspec did not match any file(s)'.",
        fix: "`git restore` only works on files tracked by Git. Untracked files can simply be deleted with `rm`."
      }
    ],
    industryUseCase: "Developers use `git restore .` to quickly wipe out test code before building production bundles.",
    interviewQuestions: [
      {
        question: "Why did Git 2.23 introduce `git restore` and `git switch`?",
        answer: "Historically, `git checkout` was dangerously overloaded—it handled switching branches, creating branches, and restoring files. `git restore` and `git switch` separated these concerns into dedicated, safe commands."
      }
    ],
    quiz: {
      question: "Which command UNSTAGES a staged file without erasing the code you wrote in your working directory?",
      options: [
        "git restore --staged <file>",
        "git delete <file>",
        "git unstage --erase <file>",
        "git reset --hard"
      ],
      correctIndex: 0,
      explanation: "`git restore --staged <file>` removes the file from the index while leaving the working directory completely untouched."
    },
    officialReference: {
      title: "Git SCM: git-restore Documentation",
      url: "https://git-scm.com/docs/git-restore"
    },
    checklist: [
      "I know how to discard unstaged changes with git restore <file>",
      "I know how to unstage files with git restore --staged <file>",
      "I understand the difference between working tree and index restoration"
    ]
  },
  {
    id: "unit-19",
    unitNumber: 19,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Removing Tracked Files with `git rm` (Disk Removal vs Cached Untracking)",
    slug: "removing-tracked-files-git-rm",
    estimatedMinutes: 12,
    topics: ["git rm", "git rm --cached", "Untracking Files", "Staged Deletions"],
    learningObjectives: [
      "Remove a file from both Git tracking and local disk using `git rm <file>`",
      "Remove a file from Git tracking while KEEPING it on disk using `git rm --cached <file>`",
      "Commit file deletions cleanly into repository history"
    ],
    simpleExplanation: "If you just delete a file with your mouse, Git notices it is missing. `git rm` tells Git: 'I deliberately deleted this file, please stage the deletion for the next commit.'",
    analogy: "Filing an official eviction notice with city records rather than just moving out silently.",
    technicalExplanation: "`git rm` removes files from the index, or from the working tree and the index. Staging the removal updates the index tree for the upcoming commit.",
    syntaxAndCommands: [
      "git rm <file>",
      "git rm -r <directory>",
      "git rm --cached <file>"
    ],
    walkthrough: [
      {
        command: "git rm obsolete.js",
        explanation: "Delete obsolete.js from disk and stage its deletion in Git index in one step.",
        expectedOutput: "rm 'obsolete.js'"
      },
      {
        command: "git rm --cached secrets.env",
        explanation: "Stop tracking secrets.env in Git while leaving physical file on disk.",
        expectedOutput: "rm 'secrets.env'"
      }
    ],
    practicalExercise: "Create a dummy file `temp.txt`, commit it, and remove it from Git while keeping it on disk using `git rm --cached temp.txt`.",
    commonErrorsAndFixes: [
      {
        error: "Accidentally running `git rm <file>` on a file with unstaged changes.",
        fix: "Git will warn you: 'file has local modifications'. Use `-f` only if you genuinely want to discard those modifications forever."
      }
    ],
    industryUseCase: "When a developer accidentally commits a 200MB test dataset, they untrack it with `git rm --cached` before adding it to `.gitignore`.",
    interviewQuestions: [
      {
        question: "What does the `--cached` flag do in `git rm`?",
        answer: "It removes the file from the Git index (staging area) only, keeping the working copy on your local disk intact."
      }
    ],
    quiz: {
      question: "Which command stops Git from tracking `config.json` without deleting the file from your computer's hard drive?",
      options: [
        "git delete config.json",
        "git rm --cached config.json",
        "git erase config.json",
        "rm -f config.json"
      ],
      correctIndex: 1,
      explanation: "`git rm --cached` untracks the file from the index while preserving the physical file on disk."
    },
    officialReference: {
      title: "Git SCM: git-rm Documentation",
      url: "https://git-scm.com/docs/git-rm"
    },
    checklist: [
      "I know how to stage a file deletion with git rm",
      "I know how to preserve local files with git rm --cached",
      "I know to add untracked files to .gitignore"
    ]
  },
  {
    id: "unit-20",
    unitNumber: 20,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Renaming & Moving Files with `git mv` & Git's Heuristic Rename Tracking",
    slug: "renaming-moving-files-git-mv",
    estimatedMinutes: 12,
    topics: ["git mv", "Rename Detection", "Similarity Index", "File Restructuring"],
    learningObjectives: [
      "Rename or move files in a single step using `git mv`",
      "Understand how Git tracks renames heuristically without storing explicit rename metadata",
      "Observe Git's similarity index in `git status` (e.g. `renamed: fileA -> fileB (100%)`)"
    ],
    simpleExplanation: "When you rename a file using `git mv old.js new.js`, Git understands that the file simply changed names, so your commit history follows along with it.",
    analogy: "Legally changing your last name on your passport; your past history stays connected to your new name.",
    technicalExplanation: "Git does not record explicit rename events in commits. It detects renames dynamically at diff time by calculating content similarity between deleted blobs and added blobs.",
    syntaxAndCommands: [
      "git mv <old-path> <new-path>",
      "git status"
    ],
    walkthrough: [
      {
        command: "git mv utils.js helpers.js",
        explanation: "Rename utils.js to helpers.js and stage the change.",
        expectedOutput: ""
      },
      {
        command: "git status -s",
        explanation: "Observe Git's rename indicator 'R'.",
        expectedOutput: "R  utils.js -> helpers.js"
      }
    ],
    practicalExercise: "Create a subfolder `src/`, move an existing file into it using `git mv`, and inspect `git status`.",
    commonErrorsAndFixes: [
      {
        error: "Renaming a file with mouse in VS Code and seeing it as a deletion and untracked file in `git status`.",
        fix: "Don't panic! Simply run `git add .` and Git's heuristic rename detector will automatically recognize it as a rename."
      }
    ],
    industryUseCase: "Refactoring a 50,000-line codebase into modular folders requires `git mv` to preserve commit history and author blame information.",
    interviewQuestions: [
      {
        question: "Does Git store a specific metadata flag for 'renamed file' inside a commit object?",
        answer: "No. Git dynamically infers renames by comparing cryptographic blob content similarity between trees."
      }
    ],
    quiz: {
      question: "Which command moves `card.css` into the `styles/` folder while staging the move in Git?",
      options: [
        "mv card.css styles/ && git add .",
        "git mv card.css styles/",
        "Both A and B achieve the same result in Git history",
        "git rename card.css styles/"
      ],
      correctIndex: 2,
      explanation: "Both `git mv` and standard OS `mv` followed by `git add` achieve the exact same staged rename result in Git."
    },
    officialReference: {
      title: "Git SCM: git-mv Documentation",
      url: "https://git-scm.com/docs/git-mv"
    },
    checklist: [
      "I know how to rename files with git mv",
      "I understand Git's heuristic similarity matching",
      "I know file history is preserved across renames"
    ]
  },
  {
    id: "unit-21",
    unitNumber: 21,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Understanding `git reset` (Soft vs Mixed vs Hard: The Critical Differences)",
    slug: "understanding-git-reset",
    estimatedMinutes: 20,
    topics: ["git reset --soft", "git reset --mixed", "git reset --hard", "Rewriting Local History"],
    learningObjectives: [
      "Differentiate the three modes of `git reset`: `--soft`, `--mixed`, and `--hard`",
      "Understand which trees each mode touches (HEAD, Index, Working Directory)",
      "Recognize the catastrophic data loss risk of `git reset --hard` with uncommitted changes"
    ],
    simpleExplanation: "`git reset` moves your project's time machine backwards. `--soft` undoes the commit but keeps your code staged. `--mixed` keeps your code in your editor. `--hard` throws your changes in the trash.",
    analogy: "Unpacking a parcel: Soft opens the box; Mixed dumps items onto the table; Hard incinerates the parcel and everything inside.",
    technicalExplanation: "`git reset` updates HEAD to point to a specified commit. `--soft` moves only HEAD. `--mixed` (default) moves HEAD and resets Index. `--hard` moves HEAD, resets Index, and overwrites Working Tree.",
    syntaxAndCommands: [
      "git reset --soft HEAD~1",
      "git reset --mixed HEAD~1 (or git reset HEAD~1)",
      "git reset --hard HEAD~1"
    ],
    walkthrough: [
      {
        command: "git reset --soft HEAD~1",
        explanation: "Undo the last commit while keeping its changes staged in index ready to amend or re-commit.",
        expectedOutput: ""
      },
      {
        command: "git status -s",
        explanation: "Notice files from undone commit are green (staged).",
        expectedOutput: "M  app.js"
      }
    ],
    practicalExercise: "Make a test commit. Run `git reset --soft HEAD~1` and verify with `git status` that changes remain staged.",
    commonErrorsAndFixes: [
      {
        error: "Running `git reset --hard` and losing unstaged work you spent all morning writing.",
        fix: "Never run `git reset --hard` unless `git status` is 100% clean, or after stashing with `git stash` first."
      }
    ],
    industryUseCase: "Senior engineers use `git reset --soft HEAD~3` to squash multiple exploratory commits into one pristine commit before creating a PR.",
    interviewQuestions: [
      {
        question: "Explain what happens to the Working Directory during `git reset --soft` vs `git reset --hard`.",
        answer: "In `--soft`, the working directory is untouched and changes remain staged. In `--hard`, the working directory is forcibly overwritten to match the target commit, permanently discarding uncommitted changes."
      }
    ],
    quiz: {
      question: "Which `git reset` mode rewrites commit history while KEEPING your modifications staged in the index?",
      options: [
        "--hard",
        "--soft",
        "--mixed",
        "--delete"
      ],
      correctIndex: 1,
      explanation: "`git reset --soft` moves HEAD backwards while leaving the index and working tree completely intact."
    },
    officialReference: {
      title: "Git SCM: Reset Demystified",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified"
    },
    checklist: [
      "I understand the difference between soft, mixed, and hard resets",
      "I know which trees are modified in each mode",
      "I never run git reset --hard with uncommitted code"
    ]
  },
  {
    id: "unit-22",
    unitNumber: 22,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Undoing Safely on Shared Branches with `git revert`",
    slug: "undoing-safely-git-revert",
    estimatedMinutes: 15,
    topics: ["git revert", "Safe Undoing", "Shared Branches", "Inverse Commit"],
    learningObjectives: [
      "Safely undo bad commits using `git revert <commit>`",
      "Understand why `git revert` is safe for shared and public production branches",
      "Differentiate between history rewrites (`reset`) and forward audit trails (`revert`)"
    ],
    simpleExplanation: "Instead of erasing history from the past, `git revert` adds a brand new commit that does the exact opposite of the bad commit. Like depositing $100 to fix an accidental $100 withdrawal.",
    analogy: "An accounting correction in a ledger: accountants never tear pages out of the book; they write an offsetting transaction entry.",
    technicalExplanation: "`git revert` records a new commit containing the inverse patch of the specified commit, preserving unbroken linear history on public branches.",
    syntaxAndCommands: [
      "git revert HEAD",
      "git revert <commit-hash>",
      "git revert --no-edit <hash>"
    ],
    walkthrough: [
      {
        command: "git revert HEAD --no-edit",
        explanation: "Automatically generate an inverse commit reverting the most recent commit.",
        expectedOutput: "[main 91fa012] Revert \"feat: broken experimental payment feature\"\n 1 file changed, 2 deletions(-)"
      }
    ],
    practicalExercise: "Create a commit that adds a line of code. Run `git revert HEAD` and inspect `git log` to see the new revert commit.",
    commonErrorsAndFixes: [
      {
        error: "Merge conflict during `git revert`.",
        fix: "If subsequent commits modified the reverted lines, resolve the conflict manually, `git add`, and run `git revert --continue`."
      }
    ],
    industryUseCase: "When a bad commit causes an outage in production, teams run `git revert <hash>` and push immediately to restore service in seconds.",
    interviewQuestions: [
      {
        question: "When should you use `git revert` instead of `git reset`?",
        answer: "Use `git revert` on public/shared branches like `main` because it creates new history without breaking other developers' clones. Use `git reset` only on private local branches."
      }
    ],
    quiz: {
      question: "Why is `git revert` preferred over `git reset` on shared remote branches?",
      options: [
        "It runs faster because it bypasses hashing.",
        "It creates a new commit that inverts the changes without rewriting past history or breaking team clones.",
        "It requires zero permissions on GitHub.",
        "It automatically deploys the website to AWS."
      ],
      correctIndex: 1,
      explanation: "`git revert` preserves history integrity and does not require destructive force-pushes."
    },
    officialReference: {
      title: "Git SCM: git-revert Documentation",
      url: "https://git-scm.com/docs/git-revert"
    },
    checklist: [
      "I know how to revert commits with git revert",
      "I understand why revert is safe for production branches",
      "I know the difference between undoing backwards (reset) vs forward (revert)"
    ]
  },
  {
    id: "unit-23",
    unitNumber: 23,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Understanding HEAD, Commit References, and Caret/Tilde Ancestry Syntax",
    slug: "head-and-commit-references",
    estimatedMinutes: 15,
    topics: ["HEAD Pointer", ".git/HEAD", "Tilde Syntax HEAD~", "Caret Syntax HEAD^", "Ancestry Navigation"],
    learningObjectives: [
      "Understand the HEAD pointer and how Git knows what you have checked out",
      "Master the difference between `HEAD~1` (first ancestor) and `HEAD^2` (second merge parent)",
      "Navigate commit graphs using relative reference syntax"
    ],
    simpleExplanation: "HEAD is Git's 'You Are Here' pin on the map. As you switch branches or make commits, the pin moves along with you.",
    analogy: "A bookmark in a novel that points to your current reading page.",
    technicalExplanation: "HEAD is a symbolic reference (usually `.git/HEAD` containing `ref: refs/heads/main`) pointing to the active branch tip or directly to a commit hash (detached HEAD).",
    syntaxAndCommands: [
      "cat .git/HEAD",
      "git rev-parse HEAD",
      "git show HEAD~1",
      "git show HEAD~2"
    ],
    walkthrough: [
      {
        command: "git rev-parse HEAD",
        explanation: "Print the full 40-character SHA-1 hash that HEAD currently points to.",
        expectedOutput: "8fa12cd0923f1a947d10e82c18001bc210499fa1"
      }
    ],
    practicalExercise: "Inspect `.git/HEAD` using your terminal and verify which branch reference it currently points to.",
    commonErrorsAndFixes: [
      {
        error: "Confusing `HEAD~2` with `HEAD^2`.",
        fix: "`HEAD~2` means go back 2 generations in direct lineage. `HEAD^2` means go to the SECOND parent of a merge commit."
      }
    ],
    industryUseCase: "Automated CI/CD build scripts inspect `git rev-parse --short HEAD` to tag Docker container images with the exact commit hash.",
    interviewQuestions: [
      {
        question: "What is the difference between `HEAD~1` and `HEAD^1`?",
        answer: "For non-merge commits, both refer to the immediate parent commit. For merge commits, `~` traverses down the first parent line, while `^` selects alternate parent branches."
      }
    ],
    quiz: {
      question: "Which shorthand reference points to the commit immediately PRIOR to the current commit?",
      options: [
        "HEAD-1",
        "HEAD~1",
        "HEAD..1",
        "PREV(HEAD)"
      ],
      correctIndex: 1,
      explanation: "`HEAD~1` (or `HEAD^`) refers to the immediate parent commit of HEAD."
    },
    officialReference: {
      title: "Git SCM: Git Tools - Revision Selection",
      url: "https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection"
    },
    checklist: [
      "I know what the HEAD pointer is",
      "I understand relative commit references (HEAD~, HEAD^)",
      "I know how to resolve hashes using git rev-parse"
    ]
  },
  {
    id: "unit-24",
    unitNumber: 24,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Amending the Latest Commit with `git commit --amend`",
    slug: "amending-commits-git-commit-amend",
    estimatedMinutes: 15,
    topics: ["git commit --amend", "--no-edit", "Fixing Typos", "Modifying Last Commit"],
    learningObjectives: [
      "Fix typos in the most recent commit message using `--amend`",
      "Add forgotten files to the last commit without creating extra 'oops' commits",
      "Understand why amending rewrites the commit hash"
    ],
    simpleExplanation: "Forgot to include one file, or made a spelling mistake in your commit message? `--amend` lets you slip changes into your last commit as if you did it right the first time.",
    analogy: "Reopening an envelope before dropping it in the mailbox to slip in a forgotten photo.",
    technicalExplanation: "`git commit --amend` creates a brand new commit object that incorporates new staged changes and replaces the tip of the current branch, assigning a new SHA-1 hash.",
    syntaxAndCommands: [
      "git commit --amend -m \"new message\"",
      "git commit --amend --no-edit"
    ],
    walkthrough: [
      {
        command: "git add forgotten.css",
        explanation: "Stage forgotten file.",
        expectedOutput: ""
      },
      {
        command: "git commit --amend --no-edit",
        explanation: "Fold staged forgotten.css into the last commit without changing the message.",
        expectedOutput: "[main 40a911c] feat: implement responsive navigation bar\n 2 files changed, 25 insertions(+)"
      }
    ],
    practicalExercise: "Create a commit, add an edit, and use `git commit --amend --no-edit` to merge the edit into the previous commit.",
    commonErrorsAndFixes: [
      {
        error: "Amending a commit that you already pushed to GitHub.",
        fix: "Amending changes the commit hash! If pushed, git will reject your next push unless forced. Never amend shared commits."
      }
    ],
    industryUseCase: "Developers amend commits locally to keep PR review commit lists tidy and free of 'fixed typo' noise.",
    interviewQuestions: [
      {
        question: "Does `git commit --amend` modify the existing commit in-place or create a new commit object?",
        answer: "Because Git objects are immutable, it creates a brand new commit object with a new SHA-1 hash and moves the branch ref pointer to it."
      }
    ],
    quiz: {
      question: "Which command updates the most recent commit with newly staged files WITHOUT opening the text editor for a new message?",
      options: [
        "git commit --update",
        "git commit --amend --no-edit",
        "git amend --quick",
        "git commit --replace"
      ],
      correctIndex: 1,
      explanation: "`git commit --amend --no-edit` merges staged changes into the tip commit while preserving its existing log message."
    },
    officialReference: {
      title: "Git SCM: Undoing Things - Changing the Last Commit",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things#_changing_your_last_commit"
    },
    checklist: [
      "I know how to modify commit messages with --amend",
      "I know how to fold extra files into the latest commit",
      "I know never to amend pushed public commits"
    ]
  },
  {
    id: "unit-25",
    unitNumber: 25,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Lightweight and Annotated Tags with `git tag` & Semantic Versioning",
    slug: "tags-and-semantic-versioning",
    estimatedMinutes: 15,
    topics: ["git tag", "Annotated Tags", "Lightweight Tags", "Semantic Versioning (SemVer)", "Release Tags"],
    learningObjectives: [
      "Create lightweight and annotated Git tags (`git tag -a`)",
      "Understand Semantic Versioning (`MAJOR.MINOR.PATCH`, e.g. `v1.2.3`)",
      "Push tags to remote repositories with `git push origin <tag>` or `--tags`"
    ],
    simpleExplanation: "Tags are permanent bookmarks for important milestones in your project, like releasing 'Version 1.0.0'. Unlike branch pointers, tags never move when new commits are added.",
    analogy: "Like engraving a gold milestone plaque on a bridge the day it officially opens.",
    technicalExplanation: "Lightweight tags are simple ref pointers to a commit. Annotated tags are full Git objects with a tagger name, email, date, and GPG signature verification capability.",
    syntaxAndCommands: [
      "git tag v1.0.0 (Lightweight)",
      "git tag -a v1.0.0 -m \"Release version 1.0.0\" (Annotated)",
      "git tag -l",
      "git push origin v1.0.0"
    ],
    walkthrough: [
      {
        command: "git tag -a v1.0.0 -m \"Release version 1.0.0 with auth and billing\"",
        explanation: "Create annotated release tag at current HEAD.",
        expectedOutput: ""
      },
      {
        command: "git show v1.0.0",
        explanation: "Display tagger metadata, message, and target commit.",
        expectedOutput: "tag v1.0.0\nTagger: Techmiya Student <student@techmiya.com>\nDate:   Sun Oct 11...\n\nRelease version 1.0.0 with auth and billing\n..."
      }
    ],
    practicalExercise: "Create an annotated tag `v0.1.0-alpha` on your repository and view it using `git tag -l` and `git show v0.1.0-alpha`.",
    commonErrorsAndFixes: [
      {
        error: "Running `git push origin main` and wondering why your newly created tag is not on GitHub.",
        fix: "Tags are NOT pushed automatically with branches! You must run `git push origin <tagname>` or `git push origin --tags`."
      }
    ],
    industryUseCase: "Package registries (npm, PyPI, Docker Hub) trigger automated builds whenever a semantic release tag is pushed to GitHub.",
    interviewQuestions: [
      {
        question: "What is the difference between a lightweight tag and an annotated tag in Git?",
        answer: "A lightweight tag is simply a pointer to a commit. An annotated tag is a distinct checksummed object in the database with tagger attribution, date, message, and optional GPG signature."
      }
    ],
    quiz: {
      question: "Which command pushes ALL local tags to the remote repository on GitHub?",
      options: [
        "git push origin --tags",
        "git upload tags",
        "git push --all-releases",
        "git sync tags"
      ],
      correctIndex: 0,
      explanation: "`git push origin --tags` sends all local tags up to the specified remote."
    },
    officialReference: {
      title: "Git SCM: Git Basics - Tagging",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging"
    },
    checklist: [
      "I know the difference between lightweight and annotated tags",
      "I understand Semantic Versioning rules (SemVer)",
      "I know how to push tags with git push origin --tags"
    ]
  },
  {
    id: "unit-26",
    unitNumber: 26,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Working with Multiple Files & Staging Logical Change Sets",
    slug: "working-with-multiple-files",
    estimatedMinutes: 15,
    topics: ["Atomic Commits", "Partial Staging", "Pathspecs", "Code Review Readiness"],
    learningObjectives: [
      "Decompose complex multi-file work into atomic, coherent commits",
      "Stage subsets of files using path filters and directory paths",
      "Facilitate painless code reviews through structured change sets"
    ],
    simpleExplanation: "Don't dump a whole week's work into one giant commit. Group your files into logical stories: one commit for database models, one for API routes, and one for UI styling.",
    analogy: "Like packing moving boxes by room (kitchen, bedroom) rather than throwing everything into a single giant pile.",
    technicalExplanation: "Atomic change sets guarantee that every individual commit leaves the build and test suite in a passing state, making `git bisect` automated debugging reliable.",
    syntaxAndCommands: [
      "git add src/components/*.jsx",
      "git commit -m \"feat(ui): add modal components\"",
      "git add src/api/*.js",
      "git commit -m \"feat(api): add auth endpoints\""
    ],
    walkthrough: [
      {
        command: "git add src/models/ && git commit -m \"feat(db): add user schema\"",
        explanation: "Stage and commit data layer independently.",
        expectedOutput: "[main a190bc1] feat(db): add user schema\n 2 files changed, 40 insertions(+)"
      }
    ],
    practicalExercise: "Create 4 test files across two categories. Make 2 separate commits that group them by purpose.",
    commonErrorsAndFixes: [
      {
        error: "Committing half of a feature such that the code fails to compile or run.",
        fix: "An atomic commit must be complete enough that the application builds and tests pass."
      }
    ],
    industryUseCase: "At high-velocity engineering organizations like Meta, large PRs are broken into stacks of small atomic commits to ensure fast review turnarounds.",
    interviewQuestions: [
      {
        question: "Why are atomic commits critical for automated regression debugging tools like `git bisect`?",
        answer: "If commits contain broken half-features, `git bisect` lands on broken states, making it impossible to identify which exact change introduced a regression."
      }
    ],
    quiz: {
      question: "What is an 'atomic commit' in software engineering best practices?",
      options: [
        "A commit that requires cryptographic encryption keys to read.",
        "A self-contained commit representing a single logical change that leaves the system in a compiling, testable state.",
        "A commit that touches at least 100 files simultaneously.",
        "A commit that can never be merged."
      ],
      correctIndex: 1,
      explanation: "Atomic commits represent a single logical unit of work, keeping code history clear and bisectable."
    },
    officialReference: {
      title: "GitHub Blog: Good commits, better software",
      url: "https://github.blog/developer-skills/github/good-commit-habits-for-better-software/"
    },
    checklist: [
      "I break large changes into logical atomic commits",
      "I verify code compiles at each commit point",
      "I separate formatting changes from business logic changes"
    ]
  },
  {
    id: "unit-27",
    unitNumber: 27,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Discarding Changes vs Creating New History: Safety Decision Matrix",
    slug: "discarding-vs-creating-history-matrix",
    estimatedMinutes: 15,
    topics: ["Destructive Commands", "Safe Commands", "Decision Matrix", "Local vs Public State"],
    learningObjectives: [
      "Categorize Git commands into Safe (creates new history) vs Destructive (discards changes)",
      "Apply the 3-question safety checklist before running undo commands",
      "Never lose code during undo operations"
    ],
    simpleExplanation: "Some Git commands build new safety nets, while others erase files from existence. Always ask: 'Have I pushed this yet, and do I have uncommitted work?' before running reset or clean.",
    analogy: "Like the difference between putting items in the recycle bin (recoverable) vs emptying the trash (destroyed forever).",
    technicalExplanation: "Commands that modify existing branch tips (`git reset`, `git commit --amend`, `git rebase`) rewrite history. Commands like `git revert` append new nodes to the commit DAG without altering past history.",
    syntaxAndCommands: [
      "SAFE: git revert, git restore --staged, git stash",
      "DESTRUCTIVE: git reset --hard, git clean -fd"
    ],
    walkthrough: [
      {
        command: "git status",
        explanation: "Step 1 of safety matrix: ALWAYS check status before executing undo commands.",
        expectedOutput: "nothing to commit, working tree clean"
      }
    ],
    practicalExercise: "Create a cheat sheet table comparing `git restore`, `git reset`, and `git revert` across safety levels.",
    commonErrorsAndFixes: [
      {
        error: "Running destructive commands without checking `git status` first.",
        fix: "Form the muscle memory of running `git status` immediately before running any reset or clean command."
      }
    ],
    industryUseCase: "Engineering lead standards require pull request merges to use `--no-ff` or safe merge strategies to maintain clear audit compliance.",
    interviewQuestions: [
      {
        question: "Which Git command can result in unrecoverable data loss for uncommitted changes?",
        answer: "`git reset --hard` and `git clean -fd` permanently discard uncommitted changes in the working tree that were never saved in Git's object database."
      }
    ],
    quiz: {
      question: "Which of the following commands creates NEW history rather than destroying past commits?",
      options: [
        "git reset --hard",
        "git revert",
        "git clean -fd",
        "git branch -D"
      ],
      correctIndex: 1,
      explanation: "`git revert` generates a brand new commit recording the inverse change, preserving complete past audit trails."
    },
    officialReference: {
      title: "Git SCM: Undoing Things",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things"
    },
    checklist: [
      "I know which Git commands are destructive",
      "I check git status before running reset",
      "I prioritize git revert for shared branches"
    ]
  },
  {
    id: "unit-28",
    unitNumber: 28,
    level: 2,
    levelTitle: "Level 2 — Essential Git Commands",
    title: "Git Clean: Safely Removing Untracked Files and Build Artifacts (`git clean -fd`)",
    slug: "removing-untracked-files-git-clean",
    estimatedMinutes: 12,
    topics: ["git clean", "Dry Run -n", "Removing Untracked Files", "Directories -d", "Force Flag -f"],
    learningObjectives: [
      "Remove untracked junk files from working directory using `git clean`",
      "Always perform a dry-run test with `git clean -nd` before deleting files",
      "Understand why Git requires explicit `-f` (force) for safety"
    ],
    simpleExplanation: "When your folder fills up with temporary test files, compiled junk, or downloads that Git doesn't track, `git clean` wipes the slate clean.",
    analogy: "Hiring a cleaning crew to sweep all scrap wood off a construction site floor.",
    technicalExplanation: "`git clean` removes untracked files from the working tree. By default, Git requires configuration or `-f` to prevent accidental removal of working tree data.",
    syntaxAndCommands: [
      "git clean -n (Dry run preview)",
      "git clean -nd (Preview files and directories)",
      "git clean -fd (Force remove files and directories)",
      "git clean -fdX (Remove only ignored files)"
    ],
    walkthrough: [
      {
        command: "git clean -nd",
        explanation: "Safety first: Preview which untracked files will be deleted without actually deleting anything.",
        expectedOutput: "Would remove temp_debug.log\nWould remove scratch/"
      },
      {
        command: "git clean -fd",
        explanation: "Execute permanent deletion of previewed untracked files and folders.",
        expectedOutput: "Removing temp_debug.log\nRemoving scratch/"
      }
    ],
    practicalExercise: "Create 2 junk files `junk1.txt` and `junk2.txt`. Run `git clean -n` to preview, then `git clean -f` to clean up.",
    commonErrorsAndFixes: [
      {
        error: "Running `git clean -f` and realizing an untracked file contained your only copy of new code.",
        fix: "Untracked files are not in Git's database and CANNOT be recovered once cleaned! ALWAYS run `git clean -n` first."
      }
    ],
    industryUseCase: "CI/CD runners execute `git clean -fdx` before starting automated builds to ensure residual caches do not cause flaky test results.",
    interviewQuestions: [
      {
        question: "Why should you always run `git clean -n` before `git clean -f`?",
        answer: "`-n` performs a dry run that shows which files would be deleted, protecting against accidental deletion of untracked files."
      }
    ],
    quiz: {
      question: "Which flag performs a SAFE PREVIEW (dry run) of `git clean` without deleting anything?",
      options: [
        "-f",
        "-n",
        "-p",
        "--test"
      ],
      correctIndex: 1,
      explanation: "`git clean -n` (dry run) prints what would be removed without deleting files."
    },
    officialReference: {
      title: "Git SCM: git-clean Documentation",
      url: "https://git-scm.com/docs/git-clean"
    },
    checklist: [
      "I always dry-run git clean with -n first",
      "I know -d removes untracked directories",
      "I understand that untracked deletions cannot be recovered"
    ]
  }
];
