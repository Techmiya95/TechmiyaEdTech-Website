export interface PracticalLab {
  id: string;
  labNumber: number;
  title: string;
  category: "Fundamentals" | "Branching & Merging" | "GitHub & Remote" | "Advanced & Recovery" | "CI/CD Automation";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  scenario: string;
  prerequisites: string[];
  startingState: string;
  commands: {
    command: string;
    explanation: string;
    expectedOutput: string;
  }[];
  expectedResult: string;
  verificationSteps: string[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
  completionCriteria: string;
}

export const practicalLabs: PracticalLab[] = [
  {
    id: "lab-01",
    labNumber: 1,
    title: "Create a Repository and Make the First Commit",
    category: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    scenario: "You are starting a brand new portfolio project 'my-portfolio' and want to initialize a Git repository to version control your project from day one.",
    prerequisites: ["Git installed", "User name and email configured (`git config --global user.name` & `user.email`)"],
    startingState: "An empty directory named `my-portfolio` with no prior Git initialization.",
    commands: [
      {
        command: "mkdir my-portfolio && cd my-portfolio",
        explanation: "Creates a project folder and enters it.",
        expectedOutput: ""
      },
      {
        command: "git init",
        explanation: "Initializes a hidden `.git` folder that tracks repository history.",
        expectedOutput: "Initialized empty Git repository in /Users/dev/my-portfolio/.git/"
      },
      {
        command: "echo '# My Portfolio' > README.md",
        explanation: "Creates an initial README markdown file in the working directory.",
        expectedOutput: ""
      },
      {
        command: "git status",
        explanation: "Checks file states; shows README.md as untracked in red.",
        expectedOutput: "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tREADME.md\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
      },
      {
        command: "git add README.md",
        explanation: "Moves README.md from working directory into the staging area (index).",
        expectedOutput: ""
      },
      {
        command: "git commit -m \"feat: initial commit with README\"",
        explanation: "Records snapshot of staged changes into permanent Git history.",
        expectedOutput: "[main (root-commit) 4a7c19f] feat: initial commit with README\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md"
      }
    ],
    expectedResult: "A clean Git repository on branch `main` with 1 commit in history.",
    verificationSteps: [
      "Run `git status` -> Should output 'nothing to commit, working tree clean'.",
      "Run `git log --oneline` -> Should display commit hash `4a7c19f` and message 'feat: initial commit with README'."
    ],
    troubleshooting: [
      {
        problem: "Author identity unknown error during commit.",
        solution: "Run `git config --global user.email 'you@example.com'` and `git config --global user.name 'Your Name'`."
      },
      {
        problem: "Branch defaults to 'master' instead of 'main'.",
        solution: "Run `git branch -M main` or configure default: `git config --global init.defaultBranch main`."
      }
    ],
    completionCriteria: "Repository initialized, README staged, and root commit recorded cleanly."
  },
  {
    id: "lab-02",
    labNumber: 2,
    title: "Track Changes to Multiple Files",
    category: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 12,
    scenario: "You added HTML, CSS, and JavaScript files to your website and need to selectively stage and commit cohesive logical changes.",
    prerequisites: ["Completed Lab 1"],
    startingState: "Existing repository with `README.md` committed.",
    commands: [
      {
        command: "touch index.html styles.css app.js",
        explanation: "Creates 3 new files in your project directory.",
        expectedOutput: ""
      },
      {
        command: "git status -s",
        explanation: "Displays short-format status: '??' indicates untracked files.",
        expectedOutput: "?? app.js\n?? index.html\n?? styles.css"
      },
      {
        command: "git add index.html styles.css",
        explanation: "Stages the UI files together as one cohesive presentation layer.",
        expectedOutput: ""
      },
      {
        command: "git commit -m \"feat: add core markup and stylesheet\"",
        explanation: "Commits only the staged UI files, leaving app.js untracked.",
        expectedOutput: "[main b18e32c] feat: add core markup and stylesheet\n 2 files changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 index.html\n create mode 100644 styles.css"
      },
      {
        command: "git add app.js && git commit -m \"feat: add interactive script\"",
        explanation: "Stages and commits the JavaScript logic in a separate commit.",
        expectedOutput: "[main f42a901] feat: add interactive script\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 app.js"
      }
    ],
    expectedResult: "Three files tracked across two atomic, meaningful commits.",
    verificationSteps: [
      "Run `git log -n 2 --oneline` -> Two distinct commits visible.",
      "Run `git status` -> Working tree clean."
    ],
    troubleshooting: [
      {
        problem: "Accidentally staged all files with `git add .` before you were ready.",
        solution: "Unstage specific file with `git restore --staged app.js`."
      }
    ],
    completionCriteria: "Selectively staged files and made two separate atomic commits."
  },
  {
    id: "lab-03",
    labNumber: 3,
    title: "Create and Configure a .gitignore File",
    category: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    scenario: "Prevent sensitive environment files (`.env`), OS garbage files (`.DS_Store`), and dependencies (`node_modules`) from polluting source control.",
    prerequisites: ["Existing repository"],
    startingState: "Repository with source code and temporary `.env` file containing local API secrets.",
    commands: [
      {
        command: "echo 'API_SECRET=supersecret123' > .env",
        explanation: "Simulate creating a local environment file with secrets.",
        expectedOutput: ""
      },
      {
        command: "mkdir logs && echo 'error log' > logs/debug.log",
        explanation: "Simulate generating runtime log files.",
        expectedOutput: ""
      },
      {
        command: "echo -e '.env\n*.log\nlogs/\nnode_modules/\n.DS_Store' > .gitignore",
        explanation: "Defines exclusion rules for Git tracking.",
        expectedOutput: ""
      },
      {
        command: "git status",
        explanation: "Verify that .env and logs/ are ignored; only .gitignore is visible.",
        expectedOutput: "On branch main\nUntracked files:\n\t.gitignore\n\nnothing added to commit but untracked files present"
      },
      {
        command: "git add .gitignore && git commit -m \"chore: ignore environment files and logs\"",
        explanation: "Commit the .gitignore file so all team members inherit exclusion rules.",
        expectedOutput: "[main d918f0a] chore: ignore environment files and logs\n 1 file changed, 5 insertions(+)\n create mode 100644 .gitignore"
      }
    ],
    expectedResult: ".env and logs/ are completely ignored and cannot be accidentally committed.",
    verificationSteps: [
      "Run `git status` -> .env and logs/ do not appear anywhere.",
      "Run `git check-ignore -v .env` -> Shows line from .gitignore matching it."
    ],
    troubleshooting: [
      {
        problem: "File was already tracked before adding to .gitignore and keeps showing up in diffs.",
        solution: "Untrack from Git while keeping local file: `git rm --cached <filename>`."
      }
    ],
    completionCriteria: ".gitignore properly created, committed, and preventing sensitive file tracking."
  },
  {
    id: "lab-04",
    labNumber: 4,
    title: "Create Two Branches and Perform a Fast-Forward Merge",
    category: "Branching & Merging",
    difficulty: "Beginner",
    estimatedMinutes: 15,
    scenario: "Create an isolated feature branch `feature/navbar`, add responsive navigation, and integrate it into `main` using a clean fast-forward merge.",
    prerequisites: ["Working repository on branch `main`"],
    startingState: "Branch `main` with clean working tree.",
    commands: [
      {
        command: "git switch -c feature/navbar",
        explanation: "Creates and immediately switches to branch 'feature/navbar'.",
        expectedOutput: "Switched to a new branch 'feature/navbar'"
      },
      {
        command: "echo '<nav>Techmiya Nav</nav>' >> index.html",
        explanation: "Modifies index.html with new navigation component.",
        expectedOutput: ""
      },
      {
        command: "git commit -am \"feat(ui): add responsive navigation bar\"",
        explanation: "Stages and commits modified index.html directly on feature branch.",
        expectedOutput: "[feature/navbar 77c4e21] feat(ui): add responsive navigation bar\n 1 file changed, 1 insertion(+)"
      },
      {
        command: "git switch main",
        explanation: "Switches back to production branch main.",
        expectedOutput: "Switched to branch 'main'"
      },
      {
        command: "git merge feature/navbar",
        explanation: "Merges feature into main. Because main had no diverging commits, Git performs Fast-Forward.",
        expectedOutput: "Updating f42a901..77c4e21\nFast-forward\n index.html | 1 +\n 1 file changed, 1 insertion(+)"
      },
      {
        command: "git branch -d feature/navbar",
        explanation: "Safely deletes the merged feature branch.",
        expectedOutput: "Deleted branch feature/navbar (was 77c4e21)."
      }
    ],
    expectedResult: "`main` now contains the navbar changes, and temporary branch is deleted.",
    verificationSteps: [
      "Run `git log --graph --oneline -n 3` -> Linear history showing the commit on main.",
      "Run `git branch` -> Only `main` exists."
    ],
    troubleshooting: [
      {
        problem: "Git says 'error: Cannot delete branch feature/navbar checked out'.",
        solution: "You must switch to another branch first: `git switch main` before deleting."
      }
    ],
    completionCriteria: "Feature branch created, commit made, fast-forward merge completed, branch cleaned up."
  },
  {
    id: "lab-05",
    labNumber: 5,
    title: "Deliberately Create and Resolve a Merge Conflict",
    category: "Branching & Merging",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    scenario: "Two developers simultaneously edit the same line of code in different branches. You must resolve the conflict cleanly and verify the final result.",
    prerequisites: ["Understanding of branches and `git merge`"],
    startingState: "`main` branch with `README.md` containing line: `Project Title: Techmiya EdTech`.",
    commands: [
      {
        command: "git switch -c update-title-a",
        explanation: "Branch A developer changes title to 'Techmiya Portal A'.",
        expectedOutput: "Switched to a new branch 'update-title-a'"
      },
      {
        command: "sed -i 's/Techmiya EdTech/Techmiya Learning Portal/' README.md && git commit -am \"docs: rename to Techmiya Learning Portal\"",
        explanation: "Modifies line and commits on branch A.",
        expectedOutput: "[update-title-a 31d99a1] docs: rename to Techmiya Learning Portal\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      },
      {
        command: "git switch main && git switch -c update-title-b",
        explanation: "Branch B developer diverges from main and modifies same line differently.",
        expectedOutput: "Switched to branch 'main'\nSwitched to a new branch 'update-title-b'"
      },
      {
        command: "sed -i 's/Techmiya EdTech/Techmiya Academy Global/' README.md && git commit -am \"docs: rename to Techmiya Academy Global\"",
        explanation: "Modifies same line and commits on branch B.",
        expectedOutput: "[update-title-b 88c02bf] docs: rename to Techmiya Academy Global\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      },
      {
        command: "git switch main && git merge update-title-a",
        explanation: "Merge branch A into main successfully via fast-forward.",
        expectedOutput: "Fast-forward\n README.md | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      },
      {
        command: "git merge update-title-b",
        explanation: "Attempting to merge branch B produces a Merge Conflict because both modified line 1.",
        expectedOutput: "Auto-merging README.md\nCONFLICT (content): Merge conflict in README.md\nAutomatic merge failed; fix conflicts and then commit the result."
      },
      {
        command: "git status",
        explanation: "Examine conflict state. README.md is marked 'both modified'.",
        expectedOutput: "Unmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n\tboth modified:   README.md"
      },
      {
        command: "echo '# Project Title: Techmiya Learning Academy (Resolved)' > README.md",
        explanation: "Resolve the conflict manually by choosing the consensus text and removing <<<<<<< ======= >>>>>>> markers.",
        expectedOutput: ""
      },
      {
        command: "git add README.md && git commit -m \"merge: resolve title conflict between branch A and B\"",
        explanation: "Stage resolved file and finalize the merge commit.",
        expectedOutput: "[main ef432a9] merge: resolve title conflict between branch A and B"
      }
    ],
    expectedResult: "Merge conflict successfully resolved with clean merge commit in history.",
    verificationSteps: [
      "Run `git log --graph --oneline -n 4` -> Forked branch graph converging into merge commit.",
      "Run `git status` -> Clean working tree."
    ],
    troubleshooting: [
      {
        problem: "Accidentally left `<<<<<<< HEAD` or `>>>>>>> update-title-b` conflict markers in code.",
        solution: "Always search code for `<<<<<<<` before staging: `grep -rn '<<<<<<<' .`."
      },
      {
        problem: "Want to abort merge midway.",
        solution: "Run `git merge --abort` to return working tree to exact state before merge attempt."
      }
    ],
    completionCriteria: "Conflict created, markers inspected, manually resolved, staged, and merge commit recorded."
  },
  {
    id: "lab-06",
    labNumber: 6,
    title: "Safely Undo Uncommitted Changes",
    category: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    scenario: "You accidentally introduced broken code into `index.html` and staged unwanted files. Safely discard uncommitted changes without losing committed work.",
    prerequisites: ["Clean repository with previous commits"],
    startingState: "Modified `index.html` with invalid test code, and new junk file `temp_test.js` staged.",
    commands: [
      {
        command: "echo 'SYNTAX_ERROR_BROKEN_CODE' >> index.html",
        explanation: "Simulate making an error in working directory.",
        expectedOutput: ""
      },
      {
        command: "echo 'test' > temp_test.js && git add temp_test.js",
        explanation: "Simulate accidentally staging a junk file.",
        expectedOutput: ""
      },
      {
        command: "git status",
        explanation: "Shows staged temp_test.js and unstaged changes to index.html.",
        expectedOutput: "Changes to be committed:\n\tnew file:   temp_test.js\nChanges not staged for commit:\n\tmodified:   index.html"
      },
      {
        command: "git restore --staged temp_test.js",
        explanation: "Safely unstages temp_test.js back to working tree without deleting it.",
        expectedOutput: ""
      },
      {
        command: "rm temp_test.js",
        explanation: "Removes untracked test file from working directory.",
        expectedOutput: ""
      },
      {
        command: "git restore index.html",
        explanation: "Discards uncommitted changes in index.html, reverting to last committed state.",
        expectedOutput: ""
      }
    ],
    expectedResult: "Working tree returned to 100% clean state; broken code completely discarded.",
    verificationSteps: [
      "Run `git diff` -> Returns zero output.",
      "Run `git status` -> Working tree clean."
    ],
    troubleshooting: [
      {
        problem: "Ran `git checkout -- file` instead of `git restore`.",
        solution: "Both achieve the same file restoration, but `git restore` (Git 2.23+) is the modern, dedicated command."
      }
    ],
    completionCriteria: "Staged file unstaged with `git restore --staged`, and dirty working copy restored."
  },
  {
    id: "lab-07",
    labNumber: 7,
    title: "Compare and Contrast `git revert` vs `git reset`",
    category: "Fundamentals",
    difficulty: "Intermediate",
    estimatedMinutes: 15,
    scenario: "Understand when to use `git revert` (safe for shared/public branches) vs `git reset` (rewrites local history).",
    prerequisites: ["Repository with at least 3 commits"],
    startingState: "3 sequential commits: C1 (init), C2 (add feature X), C3 (add buggy feature Y).",
    commands: [
      {
        command: "echo 'buggy code' > bug.txt && git add bug.txt && git commit -m \"feat: introduce buggy feature\"",
        explanation: "Commit C3 introduced a bug.",
        expectedOutput: "[main a09b112] feat: introduce buggy feature\n 1 file changed, 1 insertion(+)"
      },
      {
        command: "git revert HEAD --no-edit",
        explanation: "Creates a brand NEW commit that applies inverse changes of C3. Safe for shared branches!",
        expectedOutput: "[main 6e44b30] Revert \"feat: introduce buggy feature\"\n 1 file changed, 1 deletion(-)\n delete mode 100644 bug.txt"
      },
      {
        command: "git log --oneline -n 3",
        explanation: "Observe history: both buggy commit and revert commit exist, preserving audit trail.",
        expectedOutput: "6e44b30 Revert \"feat: introduce buggy feature\"\na09b112 feat: introduce buggy feature\nef432a9 merge: resolve title conflict"
      },
      {
        command: "git reset --soft HEAD~1",
        explanation: "Undo revert commit locally while keeping changes staged in index.",
        expectedOutput: ""
      },
      {
        command: "git reset --hard HEAD~1",
        explanation: "WARNING: Completely rewrites history and discards changes back to parent commit.",
        expectedOutput: "HEAD is now at ef432a9 merge: resolve title conflict"
      }
    ],
    expectedResult: "Demonstrated safe public undo with `git revert` vs private history rewrite with `git reset`.",
    verificationSteps: [
      "Verify understanding: Never use `git reset --hard` on branches that have been pushed to GitHub.",
      "Check `git status` -> Clean tree."
    ],
    troubleshooting: [
      {
        problem: "Pushed after hard reset and remote rejects push.",
        solution: "Remote prevents history rewrite unless force pushed (`--force-with-lease`). Avoid force pushing shared branches!"
      }
    ],
    completionCriteria: "Both `git revert` and `git reset` executed with clear understanding of trade-offs."
  },
  {
    id: "lab-08",
    labNumber: 8,
    title: "Clone an Existing Remote Repository",
    category: "GitHub & Remote",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    scenario: "Clone an open-source tutorial repository to your local machine, inspect remote tracking branches, and examine configuration.",
    prerequisites: ["Git installed", "Network connection or simulated remote url"],
    startingState: "Clean directory outside of any existing Git repository.",
    commands: [
      {
        command: "git clone https://github.com/Techmiya-Ed-Tech/Techmiya-Ed-Tech-Website.git techmiya-clone",
        explanation: "Clones remote repo into target directory 'techmiya-clone'.",
        expectedOutput: "Cloning into 'techmiya-clone'...\nremote: Enumerating objects: 120, done.\nremote: Counting objects: 100% (120/120), done.\nReceiving objects: 100% (120/120), 450.21 KiB | 2.10 MiB/s, done.\nResolving deltas: 100% (54/54), done."
      },
      {
        command: "cd techmiya-clone",
        explanation: "Enters newly cloned repository directory.",
        expectedOutput: ""
      },
      {
        command: "git remote -v",
        explanation: "Inspects configured remote name and endpoints.",
        expectedOutput: "origin\thttps://github.com/Techmiya-Ed-Tech/Techmiya-Ed-Tech-Website.git (fetch)\norigin\thttps://github.com/Techmiya-Ed-Tech/Techmiya-Ed-Tech-Website.git (push)"
      },
      {
        command: "git branch -a",
        explanation: "Lists local branches and remote-tracking references (`remotes/origin/HEAD`, `remotes/origin/main`).",
        expectedOutput: "* main\n  remotes/origin/HEAD -> origin/main\n  remotes/origin/main"
      }
    ],
    expectedResult: "Fully operational local clone with remote tracking branches and history intact.",
    verificationSteps: [
      "Run `git log -n 1` -> Confirms HEAD points to origin/main.",
      "Run `git remote show origin` -> Displays remote status and tracking branches."
    ],
    troubleshooting: [
      {
        problem: "Authentication failed when cloning private repository.",
        solution: "Use Personal Access Token (PAT) or configure SSH key (`ssh -T git@github.com`)."
      }
    ],
    completionCriteria: "Repository cloned, remote origin inspected, tracking branches understood."
  },
  {
    id: "lab-09",
    labNumber: 9,
    title: "Connect and Push a Local Repository to GitHub",
    category: "GitHub & Remote",
    difficulty: "Beginner",
    estimatedMinutes: 15,
    scenario: "You created a project locally and now want to publish it to a newly created empty repository on GitHub under your account.",
    prerequisites: ["GitHub account", "Personal Access Token or SSH keys set up"],
    startingState: "Local Git repository with commits on branch `main` and no configured remote.",
    commands: [
      {
        command: "git remote add origin https://github.com/techmiya-student/my-portfolio.git",
        explanation: "Links local repository to remote GitHub URL with alias 'origin'.",
        expectedOutput: ""
      },
      {
        command: "git remote -v",
        explanation: "Verifies the newly added remote URL.",
        expectedOutput: "origin\thttps://github.com/techmiya-student/my-portfolio.git (fetch)\norigin\thttps://github.com/techmiya-student/my-portfolio.git (push)"
      },
      {
        command: "git branch -M main",
        explanation: "Ensures default branch is named 'main' matching GitHub standard.",
        expectedOutput: ""
      },
      {
        command: "git push -u origin main",
        explanation: "Pushes commits to GitHub and establishes upstream tracking with `-u`.",
        expectedOutput: "Enumerating objects: 12, done.\nCounting objects: 100% (12/12), done.\nWriting objects: 100% (12/12), 1.2 KiB | 1.2 MiB/s, done.\nTotal 12 (delta 2), reused 0 (delta 0)\nTo https://github.com/techmiya-student/my-portfolio.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'."
      }
    ],
    expectedResult: "Local commits published to GitHub; upstream tracking established.",
    verificationSteps: [
      "Run `git branch -vv` -> Shows `[origin/main]` tracking indicator.",
      "Subsequent pushes require only `git push` without flags."
    ],
    troubleshooting: [
      {
        problem: "Password authentication was removed on August 13, 2021 error.",
        solution: "Generate a Fine-Grained Personal Access Token (PAT) with `repo` scope under GitHub Developer Settings."
      }
    ],
    completionCriteria: "Remote added, upstream set, and initial push completed successfully."
  },
  {
    id: "lab-10",
    labNumber: 10,
    title: "Open a Professional Pull Request on GitHub",
    category: "GitHub & Remote",
    difficulty: "Intermediate",
    estimatedMinutes: 15,
    scenario: "Push a feature branch to GitHub and create a well-documented Pull Request with title, description, and issue reference.",
    prerequisites: ["Cloned repository with remote upstream access"],
    startingState: "Local branch `feature/dark-mode` with 2 commits ready to share.",
    commands: [
      {
        command: "git switch -c feature/dark-mode",
        explanation: "Creates feature branch for dark mode toggle.",
        expectedOutput: "Switched to a new branch 'feature/dark-mode'"
      },
      {
        command: "echo '/* dark mode styles */' >> styles.css && git commit -am \"feat: implement dark mode color tokens\"",
        explanation: "Records implementation commit on feature branch.",
        expectedOutput: "[feature/dark-mode f104a39] feat: implement dark mode color tokens\n 1 file changed, 1 insertion(+)"
      },
      {
        command: "git push -u origin feature/dark-mode",
        explanation: "Pushes feature branch to GitHub; GitHub returns direct PR creation link.",
        expectedOutput: "Total 3 (delta 1)\nremote: Create a pull request for 'feature/dark-mode' on GitHub by visiting:\nremote:      https://github.com/techmiya/repo/pull/new/feature/dark-mode\nTo https://github.com/techmiya/repo.git\n * [new branch]      feature/dark-mode -> feature/dark-mode"
      }
    ],
    expectedResult: "Feature branch published remotely and Pull Request ready for peer review.",
    verificationSteps: [
      "Open PR on GitHub using PR template.",
      "Check that Base branch is `main` and Compare branch is `feature/dark-mode`.",
      "Verify diff shows only intended 1 file change."
    ],
    troubleshooting: [
      {
        problem: "Base branch selected incorrectly as another developer's branch.",
        solution: "Edit PR base on GitHub to point to production target `main`."
      }
    ],
    completionCriteria: "Branch pushed with upstream, PR created with descriptive body and linked issue."
  },
  {
    id: "lab-11",
    labNumber: 11,
    title: "Review a Teammate's Pull Request and Request Changes",
    category: "GitHub & Remote",
    difficulty: "Intermediate",
    estimatedMinutes: 15,
    scenario: "Act as a Senior Code Reviewer. Inspect a pull request diff, identify an unhandled exception or missing test, leave multi-line feedback, and request changes.",
    prerequisites: ["Understanding of Pull Request review workflow"],
    startingState: "Open Pull Request #42: 'Add payment calculation module'.",
    commands: [
      {
        command: "git fetch origin pull/42/head:pr-42-review",
        explanation: "Fetches teammate's PR locally to run tests and verify behavior before approving.",
        expectedOutput: "From https://github.com/techmiya/repo\n * [new ref]         refs/pull/42/head -> pr-42-review"
      },
      {
        command: "git switch pr-42-review",
        explanation: "Checks out PR locally for testing.",
        expectedOutput: "Switched to branch 'pr-42-review'"
      },
      {
        command: "git log -p -n 1",
        explanation: "Inspects code diff locally: discovers division by zero possibility.",
        expectedOutput: "+ function calculateTax(amount, rate) {\n+   return amount / rate;\n+ }"
      }
    ],
    expectedResult: "Actionable review submitted with suggested inline change: `if (rate === 0) return 0;`.",
    verificationSteps: [
      "Navigate to Files Changed tab on PR.",
      "Add inline comment with GitHub Suggestion markdown syntax: ```suggestion.",
      "Select 'Request Changes' with constructive justification."
    ],
    troubleshooting: [
      {
        problem: "Accidentally submitted review as 'Comment' instead of 'Request changes'.",
        solution: "Update review state on GitHub PR sidebar or add status label."
      }
    ],
    completionCriteria: "PR reviewed locally, inline suggestion formatted, and review submitted."
  },
  {
    id: "lab-12",
    labNumber: 12,
    title: "Fix a Rejected Push Caused by Remote Divergence",
    category: "GitHub & Remote",
    difficulty: "Intermediate",
    estimatedMinutes: 15,
    scenario: "You attempt to `git push`, but a teammate has pushed commits to `main` in the meantime. Resolve the rejection without wiping your work.",
    prerequisites: ["Local branch out of sync with remote"],
    startingState: "Local `main` has 1 new commit, while remote `origin/main` has 1 different commit.",
    commands: [
      {
        command: "git push origin main",
        explanation: "Fails because remote contains work you do not have locally.",
        expectedOutput: "To https://github.com/techmiya/repo.git\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'https://github.com/techmiya/repo.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: (e.g., 'git pull ...') before pushing again."
      },
      {
        command: "git pull --rebase origin main",
        explanation: "Fetches remote changes and replays your local commits on top of latest remote history.",
        expectedOutput: "From https://github.com/techmiya/repo\n * branch            main       -> FETCH_HEAD\nSuccessfully rebased and updated refs/heads/main."
      },
      {
        command: "git push origin main",
        explanation: "Push now succeeds because history is linear and up to date.",
        expectedOutput: "Writing objects: 100% (3/3), 320 bytes | 320.00 KiB/s, done.\nTo https://github.com/techmiya/repo.git\n   98a12dc..f104a39  main -> main"
      }
    ],
    expectedResult: "Rejection resolved cleanly with `git pull --rebase` and push accepted.",
    verificationSteps: [
      "Run `git log --oneline -n 3` -> Linear history with remote commit followed by your commit.",
      "Run `git status` -> Branch up to date with `origin/main`."
    ],
    troubleshooting: [
      {
        problem: "Conflict occurs during rebase.",
        solution: "Resolve conflict in affected file, run `git add <file>`, and continue with `git rebase --continue`."
      }
    ],
    completionCriteria: "Diagnosed rejected push, fetched and rebased remote commits, and pushed cleanly."
  },
  {
    id: "lab-13",
    labNumber: 13,
    title: "Resolve a Detached HEAD State",
    category: "Advanced & Recovery",
    difficulty: "Advanced",
    estimatedMinutes: 15,
    scenario: "You checked out an older commit hash directly to inspect it, made test commits, and now need to save those commits to a proper branch without losing them.",
    prerequisites: ["Understanding of HEAD pointer and branch references"],
    startingState: "HEAD is detached at an arbitrary commit hash `31d99a1`.",
    commands: [
      {
        command: "git checkout 31d99a1",
        explanation: "Checking out a commit hash directly detaches HEAD from branch tip.",
        expectedOutput: "Note: switching to '31d99a1'.\nYou are in 'detached HEAD' state. You can look around, make experimental\nchanges and commit them..."
      },
      {
        command: "echo 'experimental fix' >> experimental.txt && git add experimental.txt && git commit -m \"exp: test experimental algorithm\"",
        explanation: "Committing in detached HEAD state creates an unreferenced commit.",
        expectedOutput: "[detached HEAD 8bc210d] exp: test experimental algorithm\n 1 file changed, 1 insertion(+)"
      },
      {
        command: "git status",
        explanation: "Confirms HEAD is detached at commit 8bc210d.",
        expectedOutput: "HEAD detached from 31d99a1\nnothing to commit, working tree clean"
      },
      {
        command: "git switch -c recovery/experimental-fix",
        explanation: "Creates a new named branch pointing to the current commit, securing it from garbage collection.",
        expectedOutput: "Switched to a new branch 'recovery/experimental-fix'"
      },
      {
        command: "git status",
        explanation: "Confirms HEAD is now attached to 'recovery/experimental-fix'.",
        expectedOutput: "On branch recovery/experimental-fix\nnothing to commit, working tree clean"
      }
    ],
    expectedResult: "Detached commits safely secured under named branch `recovery/experimental-fix`.",
    verificationSteps: [
      "Run `git branch` -> Shows `recovery/experimental-fix` with asterisk.",
      "Run `git log -n 1 --oneline` -> Commit 8bc210d is preserved."
    ],
    troubleshooting: [
      {
        problem: "Already switched to main before creating branch and detached commit vanished.",
        solution: "Use `git reflog` to find orphaned commit hash, then `git branch <new-branch> <hash>`."
      }
    ],
    completionCriteria: "Recognized detached HEAD warning and bound orphan commit to a permanent branch."
  },
  {
    id: "lab-14",
    labNumber: 14,
    title: "Recover an Accidental Hard Reset Using `git reflog`",
    category: "Advanced & Recovery",
    difficulty: "Advanced",
    estimatedMinutes: 20,
    scenario: "A developer accidentally executed `git reset --hard HEAD~2`, seemingly deleting two days of committed work. Recover the lost commits using the reference log.",
    prerequisites: ["Understanding of Git commit graph and reflog mechanism"],
    startingState: "Branch `main` has lost its top two commits due to accidental `--hard` reset.",
    commands: [
      {
        command: "git reset --hard HEAD~2",
        explanation: "Simulate catastrophe: rewrites HEAD backwards, orphaning recent commits.",
        expectedOutput: "HEAD is now at 4a7c19f feat: initial commit with README"
      },
      {
        command: "git log --oneline",
        explanation: "Recent commits appear completely gone from normal log.",
        expectedOutput: "4a7c19f feat: initial commit with README"
      },
      {
        command: "git reflog -n 5",
        explanation: "Reflog records every movement of HEAD. The orphaned commit hash is clearly visible!",
        expectedOutput: "4a7c19f (HEAD -> main) HEAD@{0}: reset: moving to HEAD~2\n77c4e21 HEAD@{1}: commit: feat(ui): add responsive navigation bar\nf42a901 HEAD@{2}: commit: feat: add interactive script\nb18e32c HEAD@{3}: commit: feat: add core markup and stylesheet"
      },
      {
        command: "git reset --hard 77c4e21",
        explanation: "Move HEAD back to the exact pre-catastrophe commit identified from reflog.",
        expectedOutput: "HEAD is now at 77c4e21 feat(ui): add responsive navigation bar"
      },
      {
        command: "git log --oneline -n 3",
        explanation: "All lost commits are 100% recovered!",
        expectedOutput: "77c4e21 (HEAD -> main) feat(ui): add responsive navigation bar\nf42a901 feat: add interactive script\nb18e32c feat: add core markup and stylesheet"
      }
    ],
    expectedResult: "Zero data loss. Commits restored using reference log pointer.",
    verificationSteps: [
      "Run `git log` -> Verify all recovered commits and file states are restored.",
      "Check `git status` -> Clean working tree."
    ],
    troubleshooting: [
      {
        problem: "Uncommitted changes were lost in the reset.",
        solution: "Reflog only tracks committed snapshots. Never run `--hard` reset with uncommitted work in working tree!"
      }
    ],
    completionCriteria: "Diagnosed lost commit, queried reflog, and recovered HEAD to target state."
  },
  {
    id: "lab-15",
    labNumber: 15,
    title: "Create a GitHub Actions Automated CI Workflow",
    category: "CI/CD Automation",
    difficulty: "Advanced",
    estimatedMinutes: 20,
    scenario: "Automate Continuous Integration: create `.github/workflows/ci.yml` that checks out code, sets up Node.js, installs dependencies, and runs tests on every Pull Request.",
    prerequisites: ["GitHub repository with package.json or tests"],
    startingState: "Repository with source code, needing automated quality checks.",
    commands: [
      {
        command: "mkdir -p .github/workflows",
        explanation: "Creates standard GitHub Actions workflow directory.",
        expectedOutput: ""
      },
      {
        command: "cat << 'EOF' > .github/workflows/ci.yml\nname: Techmiya Continuous Integration\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node.js 20\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - name: Install Dependencies\n        run: npm ci\n      - name: Run Linting and Tests\n        run: npm test --if-present\nEOF",
        explanation: "Writes complete CI workflow configuration in YAML format.",
        expectedOutput: ""
      },
      {
        command: "git add .github/workflows/ci.yml",
        explanation: "Stages the workflow definition file.",
        expectedOutput: ""
      },
      {
        command: "git commit -m \"ci: add automated build and test workflow for PRs\"",
        explanation: "Commits the CI configuration to repository history.",
        expectedOutput: "[main 21890ea] ci: add automated build and test workflow for PRs\n 1 file changed, 19 insertions(+)\n create mode 100644 .github/workflows/ci.yml"
      }
    ],
    expectedResult: "Automated GitHub Actions CI pipeline ready to trigger on pushes and PRs.",
    verificationSteps: [
      "Push workflow to GitHub: `git push origin main`.",
      "Check Actions tab on GitHub -> 'Techmiya Continuous Integration' workflow executes.",
      "Green checkmark appears on successful execution."
    ],
    troubleshooting: [
      {
        problem: "YAML parsing error: 'mapping values are not allowed here'.",
        solution: "YAML requires strict 2-space indentation; never use tabs in GitHub Actions workflows."
      }
    ],
    completionCriteria: "Workflow directory created, valid YAML authored with trigger events and runner steps, committed to repository."
  }
];
