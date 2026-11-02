export const profileData = {
  name: "Sahar Halili",
  title: "Software Engineer | Full-Stack & AI",
  image: "/images/sh-portfolio.png",
  summary:
    "B.Sc. Computer Science graduate (HIT) who builds complete products end to end and ships them: a payroll and HR system on .NET 8 with Vue and Angular front ends, AI apps on the Claude API with RAG, and a Linux certification course that people study on their phones. Every project below is live, tested in CI on real browsers and devices, and built with care for security, accessibility and the details users notice. I work with AI coding tools every day, and as a teacher I'm used to explaining technical ideas clearly to anyone.",
  social: {
    linkedin: "https://www.linkedin.com/in/sahar-halili",
    github: "https://github.com/SaharHalili95",
  },
};

export const experienceData = [
  {
    title: "Mathematics and Computer Science Teacher",
    company: "Yeshivat Bnei Akiva Lapid, Modi'in",
    period: "2025–Present",
    responsibilities: [
      "Teach Python programming and advanced mathematics to high school students.",
      "Diagnose where each student is stuck and explain complex technical concepts clearly at every level.",
      "Prepare structured learning materials that connect mathematical theory to practical programming.",
    ],
  },
];

export const militaryData = {
  service: {
    organization: "IDF C4I Corps",
    period: "2014–2017",
    highlights: [
      "Installed, configured and troubleshot command-and-control systems, workstations and network connectivity in operational sites.",
      "Managed user accounts and permissions, and handled secure data transfer between classified and unclassified networks under strict security procedures.",
    ],
  },
  reserve: {
    period: "2017–Present",
    highlights: [
      "Set up operations rooms from scratch (computing, communications and connectivity) and maintain IT infrastructure.",
    ],
  },
};

export const educationData = {
  institution: "Holon Institute of Technology (HIT)",
  period: "2021–2025",
  degree: "Bachelor of Science in Computer Science",
};

export const skillsData = {
  languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "Bash"],
  techStack: ["React", "Next.js", "Vue 3", "Angular", ".NET 8", "ASP.NET Core", "EF Core", "FastAPI", "Node.js", "REST APIs", "SQL Server", "PostgreSQL", "Redis", "MongoDB", "RabbitMQ", "Docker", "Kubernetes", "Prometheus", "Grafana"],
  aiTools: ["Claude API", "OpenAI API", "RAG", "Embeddings", "Pinecone", "ChromaDB", "Ollama", "Prompt Caching & Streaming", "Claude Code", "Cursor", "GitHub Copilot"],
  devTools: ["Git", "GitHub Actions", "Playwright", "Vitest", "xUnit", "Testcontainers", "pytest", "Lighthouse CI"],
  practices: ["Clean Architecture", "OOP", "Automated Testing", "CI/CD", "Code Review", "Agile", "Secure Coding", "Accessibility (WCAG 2.1 AA)", "Responsive & RTL UI"],
};

export const projectsData = [
  {
    title: "SalaryNet",
    subtitle: "Payroll & HR System on .NET 8 with Vue 3 and Angular",
    description:
      "A complete payroll and HR system: employees, departments, monthly payroll, payslips and attendance. Payslips break down a documented progressive income-tax and social-security calculation, clock-in hours are calculated on the server, and a dashboard shows headcount and payroll cost. Admin, HR and Employee accounts each see only what their role allows, in English or Hebrew with a full right-to-left layout.",
    highlights: [
      "Clean Architecture with a rich domain model: rules enforced in the entities, EF Core Fluent API mappings and migrations on SQL Server",
      "Correct under load: a unique (EmployeeId, Year, Month) index blocks duplicate payslips even under concurrent requests",
      "Secure by default: resource-level authorization against IDOR, JWT roles, account lockout with admin unlock and a password policy",
      "Two front ends on one API: Vue 3 is the full app, Angular (Signals, interceptors, Reactive Forms, RxJS) covers the core flows, sharing the contract and translations",
      "162 xUnit tests with Moq and WebApplicationFactory against SQL Server in Testcontainers, plus Playwright tests on iPhone and Android, all in CI",
    ],
    technologies: ["C#", ".NET 8", "ASP.NET Core Web API", "EF Core", "SQL Server", "JWT", "FluentValidation", "xUnit", "Testcontainers", "Vue 3", "Angular", "TypeScript", "Playwright", "Docker", "GitHub Actions"],
    link: "https://github.com/SaharHalili95/SalaryNet",
    demoLink: "https://saharhalili95.github.io/SalaryNet/",
    extraLinks: [
      { label: "Angular version", url: "https://saharhalili95.github.io/SalaryNet/angular/" },
      { label: "Angular code", url: "https://github.com/SaharHalili95/SalaryNet/tree/main/web-angular" },
    ],
  },
  {
    title: "EasyMat",
    subtitle: "AI Math Tutor for the Israeli Bagrut, on the Claude API",
    description:
      "An AI tutor for high school students preparing for the Bagrut math exam (3, 4 and 5 units). Students ask in Hebrew or English and get step-by-step answers grounded in Bagrut material, adapted to their level. A practice mode serves real Bagrut questions with the official answers, and a photo of a handwritten equation is enough to get it solved.",
    highlights: [
      "RAG over an Obsidian knowledge base in Pinecone with integrated embeddings; incremental sync uploads only changed notes and removes deleted ones",
      "Streamed Claude API answers with prompt caching, cutting model costs by about 90%",
      "Handwritten equations from a photo are transcribed to LaTeX and rendered with KaTeX",
      "100+ Vitest tests, including the chat route: model selection, streaming, refusals, error handling and rate limiting",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Claude API", "Pinecone", "RAG", "KaTeX", "Tailwind CSS", "Vitest"],
    link: "https://github.com/SaharHalili95/easymat",
    demoLink: "https://saharhalili95.github.io/easymat-landing/",
  },
  {
    title: "Linux Master",
    subtitle: "80-Unit Linux Course for LPIC-1, RHCSA and LFCS, in English and Hebrew",
    description:
      "A phone-first, game-style web app for learning Linux anywhere, anytime, in short lessons that fit a bus ride or a coffee break, from the first command all the way to certification. An 80-unit path in 10 parts covers every LPIC-1 v5.0 objective plus RHCSA and LFCS topics: text processing, permissions, disks and LVM, users and systemd, packages, networking and SSH, scripting, security, and three mock exams. Each unit has 4 short lessons, a chest and a terminal boss. The original trivia mode stays in the app for bonus practice. No server or account.",
    highlights: [
      "80 units with exercises like build the command from tiles, fill the flag, \"what does it print?\", match pairs and live terminal tasks, plus XP, streak, gems and daily quests",
      "No invented output: answers run in a simulated shell (pipes, redirection, globs, find, awk, sed) or come from output recorded on real Ubuntu 24.04 and AlmaLinux 10 in Docker",
      "Mock exams: LPIC-1 with 60 questions weighted by objective, a 90-minute timer and a 500/800 pass mark, plus RHCSA and LFCS with 20 questions each",
      "Built for the phone: installs to the home screen, every screen fits a small display with no sideways scrolling, and Playwright on iPhone 13, iPhone SE, Pixel 7 and desktop plays every unit, checks every exercise is answerable and translated and every LPIC-1 objective is covered, with axe WCAG 2.1 AA and every answer executed on Ubuntu in CI",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Service Worker", "Linux", "Bash", "Playwright", "Docker", "GitHub Actions", "Lighthouse CI"],
    link: "https://github.com/SaharHalili95/linux-master",
    demoLink: "https://saharhalili95.github.io/linux-master/",
  },
  {
    title: "CodeMate AI",
    subtitle: "RAG Code Assistant: Chat with Any Codebase",
    description:
      "Upload a codebase and ask questions about it in a real-time chat that retrieves the relevant code as context. The React and TypeScript front end adds syntax highlighting, file upload and an analytics dashboard.",
    highlights: [
      "End-to-end RAG pipeline: parsing, chunking, embeddings, vector search and generation",
      "Swappable providers behind Embedder and ChatModel interfaces: OpenAI, Claude, or a demo mode that needs no API key, with no provider branches in the routes",
      "Thin FastAPI routes over a single RAG service, covered by pytest in CI",
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "Claude API", "ChromaDB", "RAG", "React", "TypeScript", "Tailwind CSS", "pytest"],
    link: "https://github.com/SaharHalili95/codemate-ai",
    demoLink: "https://saharhalili95.github.io/codemate-ai/",
  },
  {
    title: "SalSmart",
    subtitle: "Grocery Price Comparison on Official Data, Deployed on Kubernetes",
    description:
      "Ingests the daily price files that Israeli supermarket chains are required to publish (1.6M prices per run), normalizes their different XML formats into PostgreSQL with change-only history, and lets shoppers compare a full basket across the stores in their city.",
    highlights: [
      "Streaming XML parsing: a 34 MB file in about 1 MB of memory",
      "Kubernetes as code with Kustomize and a CronJob per chain; CI deploys the stack to a kind cluster and runs a smoke-test ingestion",
      "Price-drop alerts through RabbitMQ, monitored with Prometheus alert rules and Grafana dashboards",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Kubernetes", "Kustomize", "RabbitMQ", "Prometheus", "Grafana", "Docker"],
    link: "https://github.com/SaharHalili95/price-comparison-platform",
    demoLink: "https://saharhalili95.github.io/price-comparison-platform/",
  },
  {
    title: "HardenGarden",
    subtitle: "Linux Hardening Auditor with a Local LLM",
    description:
      "A desktop app and CLI that audits a Linux machine across SSH, firewall, listening services, file permissions, sudo, accounts, automatic updates and ASLR, then computes a deterministic health score. A local LLM explains each finding from cited sources, and every finding comes with a remediation script the user runs themselves: the app never changes the system. Released as .deb and AppImage packages, tested on Ubuntu 22.04, Ubuntu 24.04 and Debian 12.",
    highlights: [
      "Security by design: allowlisted commands, no shell, no privilege escalation, and a loopback-only API with a per-launch token",
      "Grounded RAG with Ollama, ChromaDB and BM25: cited answers, prompt-injection defenses, and \"not enough information\" below a confidence threshold",
      "Every remediation script is verified in disposable Docker containers: the re-scan passes and SSH still starts",
      "Supply chain: Sigstore-signed releases, SBOM, CodeQL, Trivy and a STRIDE threat model",
    ],
    technologies: ["Python", "FastAPI", "Ollama", "ChromaDB", "RAG", "Tauri", "Rust", "React", "TypeScript", "Docker", "GitHub Actions", "pytest", "Playwright"],
    link: "https://github.com/SaharHalili95/hardengarden",
    demoLink: "https://saharhalili95.github.io/hardengarden/",
  },
  {
    title: "NetSentinel",
    subtitle: "Home Network Security Monitor with Live Alerts",
    description:
      "Shows what is connected to a home network and whether anything looks wrong: device discovery and port scanning with nmap, traffic sampling with GeoIP, and rules for suspicious ports, new devices, watchlist countries and traffic spikes, pushed live to a dashboard over WebSocket, plus daily SOC 2 style checks. The live demo is the real app in English and Hebrew.",
    highlights: [
      "Detection rules turn scans and traffic into alerts with an open, acknowledged, resolved lifecycle",
      "REST API with API-key auth on state-changing endpoints; pytest, Vitest and Playwright on iPhone, Android and desktop, all in CI",
      "English and Hebrew with full RTL; axe finds no WCAG 2.1 AA violations on any page",
      "The demo is the real Next.js app exported as static files with an in-browser sample network",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "nmap", "Scapy", "Docker", "Tailwind CSS", "Recharts", "pytest", "Vitest", "Playwright"],
    link: "https://github.com/SaharHalili95/netsentinel",
    demoLink: "https://saharhalili95.github.io/netsentinel/",
  },
  {
    title: "MeshMind AI",
    subtitle: "Adaptive Network Routing with Reinforcement Learning",
    description:
      "A tabular Q-learning agent that routes traffic hop by hop across a simulated backbone network (Abilene, 12 PoPs), seeing only local congestion. It is benchmarked against shortest-path, congestion-aware and random routing across 10 seeds on held-out traffic.",
    highlights: [
      "Q-learning from scratch: exact Bellman update, epsilon-greedy with decay, read-only evaluation mode",
      "Congestion-aware simulator: capacity, latency, quadratic penalty above 80% utilization, packet loss",
      "Reproducible protocol: paired comparisons, permutation tests and bootstrap confidence intervals",
      "Live in-browser simulator (Vue 3 + TypeScript) that reproduces the Python results, in English and Hebrew",
    ],
    technologies: ["Python", "Reinforcement Learning", "pytest", "Vue 3", "TypeScript", "PrimeVue", "Vitest", "GitHub Actions"],
    link: "https://github.com/SaharHalili95/meshmind-ai",
    demoLink: "https://saharhalili95.github.io/meshmind-ai/",
  },
  {
    title: "NitaiBot",
    subtitle: "Telegram Bot That Writes Product Pages on the Claude API",
    description:
      "A Telegram bot for eCommerce teams: send a product name or SKU and get back a complete Hebrew product page with specs and marketing highlights, in the style of leading Israeli retail chains, ready to paste into WordPress.",
    highlights: [
      "Generates full product pages in Hebrew with the Claude API",
      "Outputs SEO-ready HTML formatted for WordPress",
      "Deployed on a live server with Flask and Gunicorn",
    ],
    technologies: ["Python", "Claude API", "Anthropic SDK", "Telegram Bot API", "Flask", "Gunicorn"],
    link: "https://github.com/SaharHalili95/nitai-bot",
  },
  {
    title: "CryptoPortfolio",
    subtitle: "Crypto Market Dashboard and Trading Simulator",
    description:
      "A cryptocurrency dashboard for following the market and practising portfolio management without real money, with dark and light themes and a fully responsive design.",
    highlights: [
      "Live market data from the CoinGecko API",
      "$10K virtual trading simulator with P&L tracking",
      "Price alerts with browser notifications",
      "Interactive charts, market heatmap and watchlist",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
  },
  {
    title: "Interview Prep Tracker",
    subtitle: "Coding Interview Practice Tracker",
    description:
      "A tracker for coding interview preparation: manage questions with full CRUD, organize them by category and follow your progress. The web app keeps data in the browser, and a separate FastAPI + MongoDB REST API, tested with pytest, serves the same data model.",
    highlights: [
      "React + TypeScript web app on GitHub Pages, with data saved in localStorage",
      "FastAPI + MongoDB REST API with pytest tests and Docker",
      "LeetCode links and filtering by difficulty, category and status",
    ],
    technologies: ["React", "TypeScript", "FastAPI", "MongoDB", "pytest", "Docker"],
    link: "https://github.com/SaharHalili95/interview-prep-tracker",
    demoLink: "https://saharhalili95.github.io/interview-prep-tracker/",
  },
  {
    title: "Budget Balance Game",
    subtitle: "Financial Education Game",
    description:
      "A game that teaches budgeting through monthly challenges and decision tracking, with a report that works like a personal accountant. Animated and fully responsive.",
    highlights: [
      "5 progression levels with 8 unlockable achievements",
      "English and Hebrew with full RTL support",
      "Real-time financial analytics and personalized recommendations",
    ],
    technologies: ["React", "TypeScript", "Vite", "localStorage"],
    link: "https://github.com/SaharHalili95/budget-balance-game",
    demoLink: "https://saharhalili95.github.io/budget-balance-game/",
  },
  {
    title: "Vet-Book",
    subtitle: "Veterinary Clinic Management Prototype",
    description:
      "A full-stack prototype for running a veterinary clinic, with appointment booking for pets and a Streamlit dashboard for clinic staff.",
    highlights: [
      "Automated email and SMS reminders from a background scheduler",
      "Medical records and weight history for every pet",
      "Duplicate-booking detection when an appointment is created",
    ],
    technologies: ["Python", "FastAPI", "Pydantic", "Streamlit", "Docker"],
    link: "https://github.com/SaharHalili95/Vet-Book",
  },
  {
    title: "Multiplayer Tic Tac Toe",
    subtitle: "Real-Time Peer-to-Peer Game",
    description:
      "Tic Tac Toe that two people can play from different computers, with in-game chat and score tracking across rounds, or against the computer. Runs as a static site with no backend.",
    highlights: [
      "Peer-to-peer WebRTC multiplayer with no server",
      "Minimax AI with 3 difficulty levels, from Easy to Unbeatable",
      "Hebrew, English and Arabic with automatic RTL/LTR",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "WebRTC", "PeerJS"],
    link: "https://github.com/SaharHalili95/multiplayer-tictactoe",
    demoLink: "https://saharhalili95.github.io/multiplayer-tictactoe/",
  },
  {
    title: "Reaction Speed Test",
    subtitle: "Reflex Testing Game",
    description:
      "A reflex game with three modes: Reaction Time (click when the screen turns green), Target Click (hit random targets) and Number Sequence (click 1-25 in order), with history saved in the browser.",
    highlights: [
      "3 game modes with personal bests and score history",
      "Bar charts of past results",
      "Responsive dark theme",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://github.com/SaharHalili95/reaction-speed-test",
    demoLink: "https://saharhalili95.github.io/reaction-speed-test/",
  },
  {
    title: "Rambo's Pit Bull Project",
    subtitle: "Awareness Site Against Breed Myths, with Rambo as Ambassador",
    description:
      "A personal awareness project that sets out to change how people see Pit Bulls, led by my own dog, Rambo. It answers common myths with data and sources, and gives owners practical guidance on training and care.",
    highlights: [
      "Temperament-test data by breed, plus articles on the breed's history, genetics, therapy dogs and why breed-specific laws fail",
      "Training guide by life stage, the 8 core commands and positive-reinforcement tips",
      "Directory of rescue organizations and trainers, recommended products and a photo gallery of Rambo",
      "Hebrew and English with automatic RTL/LTR switching",
    ],
    technologies: ["React", "TypeScript", "Vite"],
    isInternal: true,
    internalLink: "/rambo",
  },
];

export const contactData = {
  phone: "050-574-1079",
  email: "sahar_halili@icloud.com",
  location: "Modiin-Maccabim-Reut",
};

export const navItems = [
  { id: "profile", label: "Profile", icon: "fa-user" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "education", label: "Education", icon: "fa-graduation-cap" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "projects", label: "Projects", icon: "fa-folder-open" },
  { id: "contact", label: "Contact", icon: "fa-envelope" },
];
