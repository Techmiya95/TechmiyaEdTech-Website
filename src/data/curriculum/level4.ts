import { CurriculumUnit } from "./types";

export const level4Units: CurriculumUnit[] = [
  {
    id: "unit-44",
    unitNumber: 44,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "What GitHub Provides Beyond Git (Ecosystem Overview)",
    slug: "what-github-provides-beyond-git",
    estimatedMinutes: 15,
    topics: ["GitHub Ecosystem", "Code Review", "Issue Tracking", "CI/CD Actions", "Security Scanning"],
    learningObjectives: [
      "Understand the comprehensive feature suite GitHub layers on top of standard Git",
      "Identify core components: Pull Requests, Issues, Actions, Discussions, Security Alerts",
      "Explain GitHub's role as the global social network for software developers"
    ],
    simpleExplanation: "Git is your local engine. GitHub is the global airport: with air traffic control (Pull Requests), passenger manifests (Issue trackers), automated maintenance hangars (GitHub Actions), and passport security (Dependabot & Secret Scanning).",
    analogy: "Like the difference between writing an article on your laptop vs publishing it on the front page of Medium with comments and analytics.",
    technicalExplanation: "GitHub provides managed Git hosting with enterprise identity (SAML/SSO), granular access control (RBAC), webhook event streaming, GraphQL/REST APIs, serverless automation (Actions), and automated dependency vulnerability scanning.",
    syntaxAndCommands: ["curl -I https://api.github.com"],
    walkthrough: [
      {
        command: "curl -s https://api.github.com/zen",
        explanation: "Call GitHub's public REST API endpoint to verify connectivity.",
        expectedOutput: "Practicality beats purity."
      }
    ],
    practicalExercise: "Explore github.com/trending and inspect the repository page of a popular open-source project like React or Tailwind.",
    commonErrorsAndFixes: [
      {
        error: "Assuming GitHub is the only remote Git host.",
        fix: "Git is open-standard. You can also host on GitLab, Bitbucket, self-hosted Gitea, or your own Linux server."
      }
    ],
    industryUseCase: "Over 90% of Fortune 100 technology companies rely on GitHub Enterprise to host their proprietary software assets.",
    interviewQuestions: [
      {
        question: "Name 4 major collaboration features provided by GitHub that are NOT part of Git itself.",
        answer: "Pull Requests, Issue tracking boards, GitHub Actions (CI/CD), and Dependabot vulnerability security alerts."
      }
    ],
    quiz: {
      question: "Which of the following is a GitHub-specific platform feature rather than a core Git CLI command?",
      options: [
        "git status",
        "git commit",
        "Pull Requests (PRs)",
        "git log"
      ],
      correctIndex: 2,
      explanation: "Pull Requests are a collaborative workflow feature created and hosted by platforms like GitHub."
    },
    officialReference: {
      title: "GitHub Docs: About GitHub and Git",
      url: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    checklist: [
      "I understand the difference between Git and GitHub",
      "I know the core features of the GitHub platform",
      "I appreciate the role of GitHub in open-source"
    ]
  },
  {
    id: "unit-45",
    unitNumber: 45,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Creating a GitHub Account, Organizations, and Profiles",
    slug: "creating-github-account-orgs-profiles",
    estimatedMinutes: 12,
    topics: ["GitHub Profiles", "Organizations vs Accounts", "Profile README", "2-Factor Authentication (2FA)"],
    learningObjectives: [
      "Set up a secure GitHub account with Two-Factor Authentication (2FA)",
      "Create a custom Profile README markdown showcase (`username/username`)",
      "Differentiate personal accounts from team Organizations"
    ],
    simpleExplanation: "Your GitHub profile is your modern software engineering resume. Recruiters, tech leads, and open-source contributors look at your GitHub profile to see your code, contributions, and project documentation.",
    analogy: "Like setting up your professional LinkedIn profile, but showing actual verified code commits instead of self-written claims.",
    technicalExplanation: "GitHub accounts belong to individual users with private repositories. Organizations are shared accounts where businesses manage teams, assign fine-grained repository permissions, and consolidate billing.",
    syntaxAndCommands: ["git config --global user.email"],
    walkthrough: [
      {
        command: "git config --global user.email",
        explanation: "Verify your local Git email matches the primary or verified email on your GitHub account so commits show on your green activity grid.",
        expectedOutput: "student@techmiyaedtech.com"
      }
    ],
    practicalExercise: "Create a special repository matching your exact GitHub username (e.g. `yourname/yourname`) and add a `README.md` to display on your public profile.",
    commonErrorsAndFixes: [
      {
        error: "Commits made locally don't show up on your GitHub profile green contribution graph.",
        fix: "Your local Git email (`git config user.email`) must match one of the verified emails on your GitHub account settings."
      }
    ],
    industryUseCase: "Google and Meta interviewers routinely review candidate GitHub profiles to evaluate code structure and commit communication skills.",
    interviewQuestions: [
      {
        question: "Why does GitHub mandate Two-Factor Authentication (2FA) for developers?",
        answer: "To prevent supply-chain attacks where compromised developer credentials are used to inject malware into popular open-source repositories."
      }
    ],
    quiz: {
      question: "What must match for your local commits to be credited to your GitHub profile contribution graph?",
      options: [
        "Your computer's Wi-Fi MAC address",
        "Your configured Git `user.email` and a verified email on your GitHub account",
        "Your operating system username",
        "Your computer's IP address"
      ],
      correctIndex: 1,
      explanation: "GitHub matches commits to profiles using the author email address."
    },
    officialReference: {
      title: "GitHub Docs: Managing your profile README",
      url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"
    },
    checklist: [
      "I have a GitHub account with 2FA enabled",
      "My local Git email matches my GitHub account",
      "I know the difference between user accounts and organizations"
    ]
  },
  {
    id: "unit-46",
    unitNumber: 46,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Public vs. Private Repositories & Open Source Licenses (MIT, Apache, GPL)",
    slug: "public-vs-private-repos-licenses",
    estimatedMinutes: 15,
    topics: ["Public Repos", "Private Repos", "MIT License", "Apache 2.0", "GPLv3", "LICENSE file"],
    learningObjectives: [
      "Choose between Public (open to world) and Private (restricted access) repositories",
      "Select appropriate software licenses using choosealicense.com",
      "Understand the difference between permissive (MIT, Apache) and copyleft (GPL) licenses"
    ],
    simpleExplanation: "Public means anyone on earth can read your code. Private means only people you invite can see it. A license tells people legally what they are allowed to do with your code (commercial use, modifications, redistribution).",
    analogy: "Public code without a license is like leaving your bicycle on the sidewalk without a sign; legally, nobody knows if they're allowed to ride it.",
    technicalExplanation: "Without an open-source license, default copyright laws apply, meaning you retain all rights and nobody may reproduce or distribute your work. Adding an MIT license grants broad permissive reuse with minimal restrictions.",
    syntaxAndCommands: ["curl -s https://api.github.com/licenses/mit | grep name"],
    walkthrough: [
      {
        command: "head -n 5 LICENSE",
        explanation: "Inspect header of standard MIT license file.",
        expectedOutput: "MIT License\n\nCopyright (c) 2026 Techmiya EdTech\n\nPermission is hereby granted, free of charge..."
      }
    ],
    practicalExercise: "Add an `MIT License` to one of your repositories on GitHub using GitHub's license picker template.",
    commonErrorsAndFixes: [
      {
        error: "Accidentally creating a Public repository containing proprietary company secrets or proprietary client code.",
        fix: "Immediately switch visibility to Private in repository Settings -> Danger Zone -> Change repository visibility, and rotate all exposed secrets."
      }
    ],
    industryUseCase: "Enterprise legal teams mandate strict license scanning to ensure no GPL-licensed code inadvertently contaminates proprietary commercial codebases.",
    interviewQuestions: [
      {
        question: "What is the key difference between an MIT license and a GNU GPLv3 license?",
        answer: "MIT is permissive—anyone can use the code commercially without sharing their derivative source code. GPLv3 is copyleft—any derivative work must also be open-sourced under GPLv3."
      }
    ],
    quiz: {
      question: "Which popular open-source license is short, highly permissive, and allows anyone to use, modify, and sell the code commercially?",
      options: [
        "GNU GPLv3",
        "MIT License",
        "Creative Commons CC-BY-NC",
        "No License"
      ],
      correctIndex: 1,
      explanation: "The MIT license is one of the most widely used permissive licenses in the software industry."
    },
    officialReference: {
      title: "Choose an open source license (GitHub)",
      url: "https://choosealicense.com/"
    },
    checklist: [
      "I know when to use public vs private repositories",
      "I understand permissive vs copyleft licenses",
      "I always include a LICENSE file in open-source projects"
    ]
  },
  {
    id: "unit-47",
    unitNumber: 47,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Modern GitHub Authentication: SSH Keys vs. Personal Access Tokens (PATs)",
    slug: "modern-github-authentication",
    estimatedMinutes: 20,
    topics: ["SSH Keys", "ed25519", "Personal Access Tokens (PAT)", "Credential Helper", "No Passwords"],
    learningObjectives: [
      "Understand why GitHub deprecated basic account passwords for Git CLI in August 2021",
      "Generate modern asymmetric SSH keys (`ssh-keygen -t ed25519`) and register them with GitHub",
      "Generate fine-grained Personal Access Tokens (PATs) with minimal required scopes",
      "Verify connection with `ssh -T git@github.com`"
    ],
    simpleExplanation: "You cannot type your regular website password into Git anymore. Instead, you create a digital key (SSH key) on your laptop and give GitHub the matching lock, or use a secure token.",
    analogy: "Like a hotel keycard (token/SSH key) that only opens your room, instead of carrying the hotel owner's master keys.",
    technicalExplanation: "GitHub uses asymmetric cryptography. Your private key stays encrypted on your machine (`~/.ssh/id_ed25519`), while the public key is uploaded to GitHub (`Settings -> SSH and GPG keys`). During authentication, challenge-response validates identity without sending secrets across the wire.",
    syntaxAndCommands: [
      "ssh-keygen -t ed25519 -C \"you@example.com\"",
      "cat ~/.ssh/id_ed25519.pub",
      "ssh -T git@github.com"
    ],
    walkthrough: [
      {
        command: "ssh -T git@github.com",
        explanation: "Test your SSH authentication with GitHub.",
        expectedOutput: "Hi yourusername! You've successfully authenticated, but GitHub does not provide shell access."
      }
    ],
    practicalExercise: "Generate an ed25519 SSH key pair and add the public key to your GitHub account settings.",
    commonErrorsAndFixes: [
      {
        error: "fatal: Support for password authentication was removed on August 13, 2021.",
        fix: "Do not enter your GitHub account password! Use a Personal Access Token (PAT) with `repo` scope or switch remote to SSH (`git@github.com:...`)."
      }
    ],
    industryUseCase: "Security compliance frameworks (SOC 2, ISO 27001) require hardware keys or short-lived personal tokens with least-privilege scoping.",
    interviewQuestions: [
      {
        question: "Why is SSH key authentication more secure than password authentication for Git?",
        answer: "Private keys are never transmitted over the network; authentication uses mathematical cryptographic proof. Private keys can also be passphrase-protected locally."
      }
    ],
    quiz: {
      question: "Which command tests whether your computer's SSH key is successfully authenticated with GitHub?",
      options: [
        "ssh connect github",
        "ssh -T git@github.com",
        "git test --ssh",
        "ping github.com"
      ],
      correctIndex: 1,
      explanation: "`ssh -T git@github.com` tests GitHub SSH connectivity and prints a personalized welcome message."
    },
    officialReference: {
      title: "GitHub Docs: Connecting to GitHub with SSH",
      url: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
    },
    checklist: [
      "I understand why password auth was deprecated",
      "I generated an ed25519 SSH key pair",
      "I verified connectivity with ssh -T git@github.com"
    ]
  },
  {
    id: "unit-48",
    unitNumber: 48,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Connecting a Local Repository to GitHub with `git remote add`",
    slug: "connecting-local-repo-git-remote",
    estimatedMinutes: 15,
    topics: ["git remote add", "origin", "Remote URLs", "git remote -v", "HTTPS vs SSH URLs"],
    learningObjectives: [
      "Link a locally initialized repository to a new empty GitHub repository",
      "Understand what `origin` means and inspect configured endpoints with `git remote -v`",
      "Switch between HTTPS and SSH remote URLs using `git remote set-url`"
    ],
    simpleExplanation: "You built a project on your laptop. Now you tell Git: 'Whenever I say upload, send my code to this specific web address on GitHub.' We name this address 'origin'.",
    analogy: "Saving your best friend's address into your phone's address book under the nickname 'Bestie'.",
    technicalExplanation: "`git remote add <name> <url>` adds a remote named `<name>` to `.git/config`, creating tracking namespaces under `refs/remotes/<name>/`.",
    syntaxAndCommands: [
      "git remote add origin https://github.com/user/repo.git",
      "git remote add origin git@github.com:user/repo.git",
      "git remote -v",
      "git remote set-url origin <new-url>"
    ],
    walkthrough: [
      {
        command: "git remote -v",
        explanation: "Display configured fetch and push remote endpoints.",
        expectedOutput: "origin\thttps://github.com/Techmiya95/TechmiyaEdTech-Website.git (fetch)\norigin\thttps://github.com/Techmiya95/TechmiyaEdTech-Website.git (push)"
      }
    ],
    practicalExercise: "Create a new empty repository on GitHub without README/license. Add it as remote `origin` to a local test project.",
    commonErrorsAndFixes: [
      {
        error: "fatal: remote origin already exists.",
        fix: "A remote named 'origin' is already configured. Check it with `git remote -v`. Update it with `git remote set-url origin <new-url>`."
      }
    ],
    industryUseCase: "Development teams frequently configure multiple remotes: `origin` pointing to their personal fork, and `upstream` pointing to the main company repository.",
    interviewQuestions: [
      {
        question: "Can a Git repository have multiple remotes configured simultaneously?",
        answer: "Yes. Git supports multiple remotes with distinct names (e.g. `origin`, `upstream`, `staging`, `production`), allowing pushes and fetches to different destinations."
      }
    ],
    quiz: {
      question: "Which command shows the exact fetch and push URLs configured for all remotes?",
      options: [
        "git remote --list",
        "git remote -v",
        "git urls",
        "git show-endpoints"
      ],
      correctIndex: 1,
      explanation: "`git remote -v` (verbose) lists each remote's name and associated URLs."
    },
    officialReference: {
      title: "Git SCM: Working with Remotes",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
    },
    checklist: [
      "I know how to add a remote with git remote add origin <url>",
      "I can inspect remotes with git remote -v",
      "I know how to update URLs with git remote set-url"
    ]
  },
  {
    id: "unit-49",
    unitNumber: 49,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Uploading Changes with `git push` & Setting Upstream Tracking (`-u`)",
    slug: "uploading-changes-git-push-upstream",
    estimatedMinutes: 15,
    topics: ["git push", "-u / --set-upstream", "Upstream Tracking", "Refspecs", "Branch Synchronization"],
    learningObjectives: [
      "Publish local commits to GitHub using `git push`",
      "Set up tracking branches using `git push -u origin <branch>`",
      "Understand what `Branch 'main' set up to track remote branch 'main'` means"
    ],
    simpleExplanation: "Committing only saves code on your laptop. `git push` uploads those saved commits over the internet to GitHub so the world (or your team) can see them.",
    analogy: "Hitting 'Send' on an email draft you finished writing.",
    technicalExplanation: "`git push` updates remote refs using local refs. Passing `-u` (or `--set-upstream`) writes `branch.<name>.remote` and `branch.<name>.merge` into `.git/config`, enabling subsequent simple `git push` and `git pull` commands without arguments.",
    syntaxAndCommands: [
      "git push -u origin main",
      "git push",
      "git push origin feature/auth",
      "git branch -vv"
    ],
    walkthrough: [
      {
        command: "git push -u origin main",
        explanation: "Push main branch to GitHub and set upstream tracking.",
        expectedOutput: "Enumerating objects: 5, done.\nWriting objects: 100% (5/5), done.\nTo https://github.com/user/repo.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'."
      },
      {
        command: "git branch -vv",
        explanation: "Verify branch tracking indicator.",
        expectedOutput: "* main 8fa12cd [origin/main] feat: initial project release"
      }
    ],
    practicalExercise: "Push a newly created branch to GitHub with `git push -u origin <branchname>` and verify it appears on your GitHub repository page.",
    commonErrorsAndFixes: [
      {
        error: "fatal: The current branch <name> has no upstream branch.",
        fix: "Run `git push -u origin <name>` once to tell Git which remote branch should track your local branch."
      }
    ],
    industryUseCase: "Automated deployment platforms (Vercel, Render) listen to GitHub pushes and trigger live website updates automatically within seconds.",
    interviewQuestions: [
      {
        question: "What does the `-u` (or `--set-upstream`) flag do in `git push`?",
        answer: "It links your local branch to the specified remote tracking branch in `.git/config`, allowing future `git push` and `git pull` commands to run without specifying remote and branch names."
      }
    ],
    quiz: {
      question: "After running `git push -u origin main` once, what shortcut command can you run for future pushes on that branch?",
      options: [
        "git push",
        "git upload",
        "git sync",
        "git commit -p"
      ],
      correctIndex: 0,
      explanation: "Once upstream tracking is configured with `-u`, typing just `git push` automatically pushes to `origin/main`."
    },
    officialReference: {
      title: "Git SCM: git-push Documentation",
      url: "https://git-scm.com/docs/git-push"
    },
    checklist: [
      "I know how to push commits with git push",
      "I understand the -u flag sets upstream tracking",
      "I verify tracking with git branch -vv"
    ]
  },
  {
    id: "unit-50",
    unitNumber: 50,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Downloading Remote Changes: `git fetch` vs. `git pull` in Depth",
    slug: "fetch-vs-pull-in-depth",
    estimatedMinutes: 18,
    topics: ["git fetch", "git pull", "FETCH_HEAD", "Remote-Tracking Branches", "git pull --rebase"],
    learningObjectives: [
      "Distinguish between fetching metadata (`git fetch`) and merging files (`git pull`)",
      "Inspect incoming remote changes before merging using `git log ..origin/main`",
      "Configure `pull.rebase true` to avoid unnecessary merge commits during daily pulls"
    ],
    simpleExplanation: "`git fetch` looks at GitHub and asks: 'Did anyone do new work?' and downloads the changes into a preview room without touching your files. `git pull` downloads AND immediately merges them into your active files.",
    analogy: "Fetch is like downloading tracking info for an incoming delivery; pull is having the package delivered right onto your desk.",
    technicalExplanation: "`git pull` is shorthand for `git fetch` followed immediately by `git merge FETCH_HEAD`. Running `git fetch` updates `refs/remotes/origin/*` without altering your working directory or index.",
    syntaxAndCommands: [
      "git fetch origin",
      "git log HEAD..origin/main",
      "git diff HEAD origin/main",
      "git pull origin main",
      "git pull --rebase origin main"
    ],
    walkthrough: [
      {
        command: "git fetch origin",
        explanation: "Fetch new commits from GitHub into remote-tracking branches.",
        expectedOutput: "From https://github.com/user/repo\n   8fa12cd..3b18e51  main       -> origin/main"
      },
      {
        command: "git log --oneline HEAD..origin/main",
        explanation: "Preview incoming commits that exist on remote but not locally.",
        expectedOutput: "3b18e51 feat(api): add stripe billing webhook"
      },
      {
        command: "git merge origin/main",
        explanation: "Now merge fetched changes into local active branch.",
        expectedOutput: "Updating 8fa12cd..3b18e51\nFast-forward"
      }
    ],
    practicalExercise: "Run `git fetch` on your repository and check if any upstream commits exist using `git status`.",
    commonErrorsAndFixes: [
      {
        error: "fatal: Need to specify how to reconcile divergent branches.",
        fix: "Configure your default pull behavior globally: `git config --global pull.rebase true` to keep a clean linear history."
      }
    ],
    industryUseCase: "Senior engineers run `git fetch` instead of `git pull` when working on mission-critical features, reviewing diffs before merging.",
    interviewQuestions: [
      {
        question: "Why is `git fetch` considered safer than `git pull`?",
        answer: "Because `git fetch` never modifies your working directory or current branch files. It allows you to inspect remote commits and diffs safely before deciding how to integrate them."
      }
    ],
    quiz: {
      question: "Which formula represents what `git pull` actually executes under the hood?",
      options: [
        "git pull = git clone + git add",
        "git pull = git fetch + git merge",
        "git pull = git push + git status",
        "git pull = git commit + git checkout"
      ],
      correctIndex: 1,
      explanation: "`git pull` is the combination of fetching remote commits and then merging them into your current branch."
    },
    officialReference: {
      title: "Git SCM: Fetching and Pulling from Your Remotes",
      url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling"
    },
    checklist: [
      "I know the difference between git fetch and git pull",
      "I know how to preview incoming changes with git log HEAD..origin/main",
      "I understand why git pull --rebase keeps history clean"
    ]
  },
  {
    id: "unit-51",
    unitNumber: 51,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Cloning Remote Repositories with `git clone` & Shallow Clones (`--depth 1`)",
    slug: "cloning-repositories-and-shallow-clones",
    estimatedMinutes: 15,
    topics: ["git clone", "Shallow Clones --depth 1", "Blobless Clones", "Cloning to Custom Directories"],
    learningObjectives: [
      "Clone full repositories from GitHub using HTTPS or SSH URLs",
      "Clone into custom folder names (`git clone <url> <custom-name>`)",
      "Execute ultra-fast shallow clones using `--depth 1` for CI/CD runners and large repos"
    ],
    simpleExplanation: "`git clone` downloads an entire project from GitHub onto your computer, including every single past commit, branch, and file since day one.",
    analogy: "Downloading an entire Wikipedia encyclopedia offline onto an external drive.",
    technicalExplanation: "`git clone` initializes a new repository, sets up `origin` pointing to the URL, fetches all branches and tags, and checks out the default branch. `--depth 1` creates a shallow clone truncated to the latest commit only, drastically reducing transfer time.",
    syntaxAndCommands: [
      "git clone https://github.com/user/repo.git",
      "git clone git@github.com:user/repo.git my-app",
      "git clone --depth 1 https://github.com/user/large-repo.git"
    ],
    walkthrough: [
      {
        command: "git clone --depth 1 https://github.com/torvalds/linux.git linux-shallow",
        explanation: "Clone only the single latest snapshot of the massive 4GB Linux repository in seconds.",
        expectedOutput: "Cloning into 'linux-shallow'...\nReceiving objects: 100% (80201/80201), 240.5 MiB | 15.2 MiB/s, done."
      }
    ],
    practicalExercise: "Clone a popular open source utility like `expressjs/express` or `facebook/react` into a temporary practice folder.",
    commonErrorsAndFixes: [
      {
        error: "Cloning a repository inside an existing Git repository.",
        fix: "Check `git status` first! If you are already inside a Git repo, `cd` out to your general `projects/` directory before cloning."
      }
    ],
    industryUseCase: "Docker build stages and GitHub Actions CI pipelines use `git clone --depth 1` to speed up deployment builds by 80% by skipping historical commits.",
    interviewQuestions: [
      {
        question: "When should you use a shallow clone (`--depth 1`)?",
        answer: "In automated CI/CD builds or deployment scripts where you only need to build the latest code and don't need historical commits, saving bandwidth and build time."
      }
    ],
    quiz: {
      question: "Which flag instructs `git clone` to download ONLY the latest commit without downloading years of historical commit objects?",
      options: [
        "--fast",
        "--depth 1",
        "--shallow-only",
        "--no-history"
      ],
      correctIndex: 1,
      explanation: "`--depth 1` creates a shallow clone containing only the most recent commit snapshot."
    },
    officialReference: {
      title: "Git SCM: git-clone Documentation",
      url: "https://git-scm.com/docs/git-clone"
    },
    checklist: [
      "I know how to clone via HTTPS and SSH",
      "I know how to clone into custom directory names",
      "I understand shallow clones for CI performance"
    ]
  },
  {
    id: "unit-52",
    unitNumber: 52,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Forking Repositories on GitHub & The Open-Source Contribution Model",
    slug: "forking-repositories-open-source",
    estimatedMinutes: 18,
    topics: ["GitHub Fork", "Upstream vs Origin", "Open Source Contributing", "Fork-and-PR Model"],
    learningObjectives: [
      "Fork a public GitHub repository to your own personal account with one click",
      "Configure `upstream` remote to track the original parent repository",
      "Follow the standard Fork-and-Pull-Request workflow used in open source"
    ],
    simpleExplanation: "You cannot directly change code in Google's or Microsoft's repositories. Forking makes an exact copy of their project inside YOUR GitHub account. You make your improvements in your copy, and then send a Pull Request asking them to adopt your changes.",
    analogy: "Like photocopying a master blueprint, drawing your improvements in pencil, and handing it back to the architect for review.",
    technicalExplanation: "A Fork is a server-side clone on GitHub that maintains a parent-child relationship. Changes are pushed to your fork (`origin`), and Pull Requests are opened from your fork branch targeting the upstream parent repository.",
    syntaxAndCommands: [
      "git remote add upstream https://github.com/original-author/repo.git",
      "git fetch upstream",
      "git merge upstream/main"
    ],
    walkthrough: [
      {
        command: "git remote add upstream https://github.com/facebook/react.git",
        explanation: "Add original parent repo as 'upstream' remote on your local clone of your fork.",
        expectedOutput: ""
      },
      {
        command: "git remote -v",
        explanation: "Notice origin points to your personal fork, and upstream points to original project.",
        expectedOutput: "origin\tgit@github.com:yourname/react.git (fetch)\nupstream\thttps://github.com/facebook/react.git (fetch)"
      }
    ],
    practicalExercise: "Fork an open-source demo repository on GitHub, clone your fork locally, and configure the upstream remote.",
    commonErrorsAndFixes: [
      {
        error: "Trying to push directly to the upstream repository and getting '403 Forbidden'.",
        fix: "You don't have write permissions to upstream! Push to your fork (`git push origin <branch>`) and submit a Pull Request via GitHub web UI."
      }
    ],
    industryUseCase: "Kubernetes, Linux, and React receive contributions from thousands of unaffiliated global engineers via the Fork-and-PR model.",
    interviewQuestions: [
      {
        question: "Explain the standard convention for `origin` vs `upstream` in a forked repository.",
        answer: "`origin` points to your personal fork with write permissions. `upstream` points to the canonical central repository from which you fetch new changes."
      }
    ],
    quiz: {
      question: "Where does a 'Fork' operation take place?",
      options: [
        "In your local computer's terminal using the `git fork` command.",
        "On GitHub's servers, creating a copy of the repository in your personal account.",
        "Inside the Windows registry.",
        "On your local Wi-Fi router."
      ],
      correctIndex: 1,
      explanation: "A Fork is a server-side repository duplicate hosted on GitHub."
    },
    officialReference: {
      title: "GitHub Docs: Fork a repo",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"
    },
    checklist: [
      "I know how to fork a repository on GitHub",
      "I understand the difference between origin and upstream",
      "I follow the open source fork-and-PR workflow"
    ]
  },
  {
    id: "unit-53",
    unitNumber: 53,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Writing Professional README Files with GitHub-Flavored Markdown (GFM)",
    slug: "writing-professional-readme-markdown",
    estimatedMinutes: 15,
    topics: ["README.md", "GFM Syntax", "Badges (Shields.io)", "Code Blocks", "Tables & Task Lists"],
    learningObjectives: [
      "Structure a standard professional README (Title, Overview, Installation, Usage, License)",
      "Master GitHub-Flavored Markdown: headings, code fences with syntax highlighting, tables, checkboxes",
      "Embed status badges (build passing, npm version, license) from shields.io"
    ],
    simpleExplanation: "A project without a README is like a product in a blank cardboard box with no manual. A great README tells visitors what your project does, how to install it, and why it's awesome within 30 seconds.",
    analogy: "The cover and jacket summary of a book that makes people want to read it.",
    technicalExplanation: "GitHub automatically renders `README.md` at the root of a repository using GitHub-Flavored Markdown (GFM), supporting CommonMark with extensions like autolinks, strikethrough, task lists, and mermaid diagrams.",
    syntaxAndCommands: [
      "# Heading 1",
      "```typescript ... ```",
      "- [x] Completed task",
      "| Column 1 | Column 2 |"
    ],
    walkthrough: [
      {
        command: "head -n 10 README.md",
        explanation: "Inspect top lines of project README markdown file.",
        expectedOutput: "# Techmiya EdTech Website\n\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()\n\nWelcome to Techmiya..."
      }
    ],
    practicalExercise: "Draft a 5-section README for a personal project including a code snippet and an installation command.",
    commonErrorsAndFixes: [
      {
        error: "Writing code snippets with single backticks instead of triple backtick fences with language identifiers.",
        fix: "Use triple backticks followed by the language: ```bash or ```javascript for syntax highlighting."
      }
    ],
    industryUseCase: "Open-source libraries with beautiful, clear README documentation receive 10x more GitHub stars, contributors, and enterprise adoptions.",
    interviewQuestions: [
      {
        question: "What are the 5 essential sections of an industry-standard project README?",
        answer: "1. Project Title & Description, 2. Prerequisites & Installation, 3. Usage & Examples, 4. Running Tests, 5. License & Contributing Guidelines."
      }
    ],
    quiz: {
      question: "Which markdown syntax creates an interactive checkbox in GitHub-Flavored Markdown?",
      options: [
        "[check] Task",
        "- [x] Completed task",
        "(x) Task",
        "<input checkbox>"
      ],
      correctIndex: 1,
      explanation: "`- [x]` renders a checked task item, and `- [ ]` renders an unchecked checkbox."
    },
    officialReference: {
      title: "GitHub Docs: Basic writing and formatting syntax",
      url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
    },
    checklist: [
      "I know how to format GFM markdown",
      "I include installation and usage in my READMEs",
      "I use code fences with language syntax highlighting"
    ]
  },
  {
    id: "unit-54",
    unitNumber: 54,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "GitHub Issues, Labels, Milestones & Project Boards (Kanban)",
    slug: "github-issues-labels-milestones-projects",
    estimatedMinutes: 18,
    topics: ["GitHub Issues", "Issue Templates", "Labels (bug, enhancement)", "Milestones (Sprints)", "GitHub Projects Kanban"],
    learningObjectives: [
      "Report bugs and feature requests effectively using GitHub Issues",
      "Organize tasks using colored Labels and Sprint Milestones with due dates",
      "Manage workflow state across Backlog -> In Progress -> Done on GitHub Project boards"
    ],
    simpleExplanation: "Issues are your project's to-do list and bug report tracking center. Project boards let you drag and drop issue cards across columns like sticky notes on a whiteboard.",
    analogy: "Like Trello or Jira built directly into your code repository.",
    technicalExplanation: "GitHub Issues integrate directly with the Git commit graph. Writing `Fixes #42` or `Closes #42` in a commit message or PR description automatically closes Issue #42 when merged into the default branch.",
    syntaxAndCommands: [
      "git commit -m \"fix(auth): resolve session timeout (fixes #42)\"",
      "gh issue list",
      "gh issue create"
    ],
    walkthrough: [
      {
        command: "gh issue list --limit 3",
        explanation: "View active open issues using the official GitHub CLI tool.",
        expectedOutput: "#42  fix: navbar overlap on mobile    bug, ui\n#43  feat: dark mode theme toggle     enhancement"
      }
    ],
    practicalExercise: "Create an Issue on one of your repositories titled 'Add contact page form validation' and attach the label `enhancement`.",
    commonErrorsAndFixes: [
      {
        error: "Vague issue descriptions like 'Site broken please fix'.",
        fix: "Provide Steps to Reproduce, Expected Behavior, Actual Behavior, and Screenshots/OS version."
      }
    ],
    industryUseCase: "Engineering managers monitor Sprint burndown charts and release health using GitHub Milestones and automated project workflows.",
    interviewQuestions: [
      {
        question: "How can you automatically close a GitHub Issue when your code is merged?",
        answer: "Include closing keywords like `Fixes #<number>`, `Closes #<number>`, or `Resolves #<number>` in your commit message or Pull Request description."
      }
    ],
    quiz: {
      question: "Which magic keyword in a commit message automatically closes Issue #15 when merged into `main`?",
      options: [
        "Delete #15",
        "Closes #15",
        "Kill #15",
        "End #15"
      ],
      correctIndex: 1,
      explanation: "`Closes #15` (or `Fixes #15`, `Resolves #15`) automatically transitions the issue to closed upon merge."
    },
    officialReference: {
      title: "GitHub Docs: Linking a pull request to an issue",
      url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"
    },
    checklist: [
      "I know how to file actionable issue reports",
      "I use labels and milestones to organize work",
      "I know how to auto-close issues via commit messages"
    ]
  },
  {
    id: "unit-55",
    unitNumber: 55,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "The Pull Request Lifecycle: From Creation to Review and Merge",
    slug: "pull-request-lifecycle",
    estimatedMinutes: 20,
    topics: ["Pull Request Lifecycle", "Base vs Head Branch", "PR Descriptions", "Merge Strategies (Squash, Rebase, Merge)"],
    learningObjectives: [
      "Navigate the complete Pull Request lifecycle from proposal to production deployment",
      "Correctly designate Base branch (target) and Compare branch (source)",
      "Compare the three GitHub PR merge buttons: Create a merge commit, Squash and merge, Rebase and merge"
    ],
    simpleExplanation: "A Pull Request says: 'Hey team, I finished this feature in my branch. Please review my code, test it, and pull it into main if you approve.'",
    analogy: "Submitting a term paper to your professor for grading and feedback before publishing it.",
    technicalExplanation: "A Pull Request compares a source ref against a target ref. GitHub calculates diffs, runs status checks (CI), enforces review approvals, and performs merges via configured merge strategies.",
    syntaxAndCommands: [
      "Base branch: main",
      "Compare branch: feature/payment-gateway",
      "gh pr create --title \"feat: add payments\" --body \"Details...\""
    ],
    walkthrough: [
      {
        command: "gh pr status",
        explanation: "Check status of active Pull Requests for current branch.",
        expectedOutput: "Current branch\n  #52  feat: add payment gateway [OPEN]\n  All checks passing (2/2)\n  Approved by 1 reviewer"
      }
    ],
    practicalExercise: "Push a branch and open a real Pull Request on GitHub. Practice filling out a detailed description with before/after screenshots.",
    commonErrorsAndFixes: [
      {
        error: "Opening a PR comparing against the wrong base branch.",
        fix: "Check the top banner on GitHub: `base: main <- compare: feature/x`. You can click 'Edit' to change the base branch at any time."
      }
    ],
    industryUseCase: "At Stripe and Netflix, no single engineer can push directly to production; every change MUST pass through a Pull Request with at least two peer approvals.",
    interviewQuestions: [
      {
        question: "Explain the difference between 'Squash and Merge' vs 'Create a Merge Commit' in a GitHub PR.",
        answer: "'Create a Merge Commit' preserves every individual commit from the feature branch. 'Squash and Merge' condenses all branch commits into a single clean commit on the target branch."
      }
    ],
    quiz: {
      question: "Which PR merge button combines all 15 commits from your feature branch into ONE single commit on `main`?",
      options: [
        "Create a merge commit",
        "Squash and merge",
        "Rebase and merge",
        "Force merge"
      ],
      correctIndex: 1,
      explanation: "'Squash and merge' squashes the feature branch commits into one single commit on the target branch."
    },
    officialReference: {
      title: "GitHub Docs: About pull requests",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
    },
    checklist: [
      "I know the complete PR lifecycle",
      "I understand base branch vs compare branch",
      "I know when to use Squash and Merge"
    ]
  },
  {
    id: "unit-56",
    unitNumber: 56,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Conducting Code Reviews & Leaving Actionable Line-by-Line Suggestions",
    slug: "conducting-code-reviews-suggestions",
    estimatedMinutes: 18,
    topics: ["Code Review Etiquette", "Inline Comments", "```suggestion Blocks", "Request Changes", "LGTM"],
    learningObjectives: [
      "Review teammate pull request diffs professionally and constructively",
      "Leave direct line-by-line code suggestions using GitHub suggestion blocks",
      "Differentiate between 'Comment', 'Approve', and 'Request Changes'"
    ],
    simpleExplanation: "Code review isn't about criticizing your teammates; it's about making the code stronger together. You can even suggest the exact fix right inside the comment so they can accept it with one click.",
    analogy: "Peer editing an essay to catch spelling mistakes and suggest a clearer sentence before final submission.",
    technicalExplanation: "GitHub allows reviewers to insert ```suggestion markdown blocks. When the author views the review, GitHub renders an interactive 'Commit suggestion' button that automatically applies and commits the patch.",
    syntaxAndCommands: [
      "```suggestion",
      "const maxRetries = 3;",
      "```"
    ],
    walkthrough: [
      {
        command: "echo '```suggestion\nconst maxRetries = 3;\n```'",
        explanation: "Format of an inline GitHub suggested change block.",
        expectedOutput: "```suggestion\nconst maxRetries = 3;\n```"
      }
    ],
    practicalExercise: "Review a teammate's PR, locate a line that could be improved, and leave a comment with a ```suggestion block.",
    commonErrorsAndFixes: [
      {
        error: "Writing abrasive feedback like 'This code is terrible'.",
        fix: "Frame feedback constructively: 'Could we handle the null case here to prevent an uncaught exception? Here is a suggestion: ...'."
      }
    ],
    industryUseCase: "Google's internal engineering guidelines state that code review comments should be treated as shared learning opportunities, maintaining high empathy and technical rigor.",
    interviewQuestions: [
      {
        question: "How do you leave an executable code suggestion in a GitHub PR comment?",
        answer: "Wrap the replacement code inside a ```suggestion markdown fence. The author can click 'Commit suggestion' to apply it directly."
      }
    ],
    quiz: {
      question: "Which markdown fence allows PR authors to accept your recommended code change with a single click button on GitHub?",
      options: [
        "```code-fix",
        "```suggestion",
        "```patch",
        "```recommended"
      ],
      correctIndex: 1,
      explanation: "```suggestion creates an interactive one-click commit button in GitHub reviews."
    },
    officialReference: {
      title: "GitHub Docs: Incorporating feedback in your pull request",
      url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request"
    },
    checklist: [
      "I know how to leave constructive line comments",
      "I know how to use ```suggestion blocks",
      "I know when to Approve vs Request Changes"
    ]
  },
  {
    id: "unit-57",
    unitNumber: 57,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Mastering GitHub Flow: The Industry-Standard Branching Strategy",
    slug: "mastering-github-flow",
    estimatedMinutes: 15,
    topics: ["GitHub Flow", "Trunk-Based Development", "Feature Branches", "Continuous Delivery", "GitFlow Comparison"],
    learningObjectives: [
      "Master the 6 steps of GitHub Flow: Branch -> Commit -> Open PR -> Discuss & Review -> Merge -> Deploy",
      "Contrast lightweight GitHub Flow with complex legacy GitFlow (`develop`, `release`, `hotfix` branches)",
      "Understand why GitHub Flow is ideal for web applications and microservices"
    ],
    simpleExplanation: "GitHub Flow is simple: 1. `main` is always working and deployable. 2. When you want to build something, branch off `main`. 3. Make commits. 4. Open a PR. 5. Once approved and tested, merge into `main` and deploy.",
    analogy: "A high-speed train line (main) where workers take a private side track to build a new train car, test it, and join it to the train.",
    technicalExplanation: "GitHub Flow is a lightweight, branch-based workflow centered on continuous delivery where everything on `main` is deployable. It eliminates multi-month release staging branches in favor of short-lived feature branches.",
    syntaxAndCommands: [
      "1. git switch -c feature/new-page",
      "2. git commit -m \"feat: implement page\"",
      "3. git push -u origin feature/new-page",
      "4. Open PR -> Review -> Merge -> Auto-deploy"
    ],
    walkthrough: [
      {
        command: "git switch main && git pull --rebase",
        explanation: "Step 1 of GitHub Flow: Always start fresh from the latest verified main.",
        expectedOutput: "Current branch main is up to date."
      }
    ],
    practicalExercise: "Diagram GitHub Flow on paper showing how feature branches branch off `main` and merge back into `main`.",
    commonErrorsAndFixes: [
      {
        error: "Letting feature branches linger for months without merging.",
        fix: "Keep branches short-lived (1-3 days). Merge small batches frequently to avoid massive painful merge conflicts."
      }
    ],
    industryUseCase: "GitHub ships updates to github.com dozens of times per day using GitHub Flow without scheduled maintenance downtime.",
    interviewQuestions: [
      {
        question: "Explain the core philosophy of GitHub Flow.",
        answer: "Anything in the `main` branch is always deployable. All new features and fixes are developed in short-lived branches off `main`, reviewed via Pull Request, merged, and immediately deployed."
      }
    ],
    quiz: {
      question: "In GitHub Flow, what is the golden requirement for the `main` branch?",
      options: [
        "`main` should only be updated once per year.",
        "`main` must always be tested, stable, and ready to deploy to production at any moment.",
        "`main` must be deleted after every release.",
        "`main` should contain untested experimental code."
      ],
      correctIndex: 1,
      explanation: "In GitHub Flow, `main` is always kept in a deployable, green state."
    },
    officialReference: {
      title: "GitHub Docs: GitHub flow",
      url: "https://docs.github.com/en/get-started/using-github/github-flow"
    },
    checklist: [
      "I know the 6 steps of GitHub Flow",
      "I understand why main must always be deployable",
      "I know why short-lived branches minimize conflicts"
    ]
  },
  {
    id: "unit-58",
    unitNumber: 58,
    level: 4,
    levelTitle: "Level 4 — GitHub Fundamentals",
    title: "Publishing Static Websites for Free with GitHub Pages",
    slug: "publishing-with-github-pages",
    estimatedMinutes: 15,
    topics: ["GitHub Pages", "Static Hosting", "gh-pages Branch", "Custom Domains & CNAME", ".nojekyll"],
    learningObjectives: [
      "Deploy HTML/CSS/JS websites directly from a GitHub repository for free",
      "Configure GitHub Pages source branch (`gh-pages` or `/docs` or GitHub Actions)",
      "Understand why client-side routers (Next.js export / Vite) require a `.nojekyll` file",
      "Configure custom domains with CNAME records"
    ],
    simpleExplanation: "GitHub gives every developer free web hosting. You put your HTML, CSS, and images in a repository, flip a switch in Settings, and GitHub gives you a live public URL (e.g., `username.github.io/my-site`).",
    analogy: "Like hosting a garage sale on the web where GitHub provides the storefront completely free.",
    technicalExplanation: "GitHub Pages serves static web files directly from a designated branch or folder. Because GitHub Pages runs Jekyll by default, files starting with an underscore (`_next/`) are ignored unless a `.nojekyll` file exists in the root.",
    syntaxAndCommands: [
      "touch public/.nojekyll",
      "npm run build",
      "npx gh-pages -d out"
    ],
    walkthrough: [
      {
        command: "ls -la public/.nojekyll",
        explanation: "Verify existence of .nojekyll file to prevent Jekyll from swallowing Next.js _next assets.",
        expectedOutput: "-rw-r--r-- 1 user group 2 Oct 11 public/.nojekyll"
      }
    ],
    practicalExercise: "Inspect the `package.json` deploy script of a static React/Next app and identify the `gh-pages` command.",
    commonErrorsAndFixes: [
      {
        error: "404 Page Not Found on CSS/JS files with Next.js export on GitHub Pages.",
        fix: "Add an empty `.nojekyll` file to the root of your export directory (`out/.nojekyll` or `public/.nojekyll`) so GitHub Pages serves `_next` folders."
      }
    ],
    industryUseCase: "Documentation sites for React, Tailwind, and Kubernetes are hosted directly on GitHub Pages with zero server hosting bills.",
    interviewQuestions: [
      {
        question: "Why is a `.nojekyll` file required when deploying modern frontend apps (React, Next.js static export) to GitHub Pages?",
        answer: "By default, GitHub Pages processes sites with Jekyll, which silently ignores folders starting with an underscore (like `_next/` or `_assets/`). An empty `.nojekyll` file disables Jekyll processing."
      }
    ],
    quiz: {
      question: "What does placing a `.nojekyll` file in the root of your GitHub Pages site accomplish?",
      options: [
        "It installs WordPress automatically.",
        "It disables Jekyll preprocessing so folders starting with an underscore (like `_next/`) are served properly.",
        "It encrypts your HTML files.",
        "It doubles your internet upload speed."
      ],
      correctIndex: 1,
      explanation: "`.nojekyll` bypasses Jekyll processing, preserving directories prefixed with underscores."
    },
    officialReference: {
      title: "GitHub Docs: What is GitHub Pages?",
      url: "https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages"
    },
    checklist: [
      "I know how GitHub Pages serves static sites",
      "I know why .nojekyll is vital for Next.js and Vite static builds",
      "I know how custom domains use CNAME records"
    ]
  }
];
