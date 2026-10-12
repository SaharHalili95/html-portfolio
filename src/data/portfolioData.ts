export const profileData = {
  name: "Sahar Halili",
  title: "AI Engineer & Full-Stack Developer",
  image: "/images/sh-portfolio.png",
  summary:
    "Building secure, production-ready systems from the ground up - network monitoring, SOC 2 compliance, and AI-powered applications. Security-first mindset with full-stack delivery speed.",
  social: {
    linkedin: "https://www.linkedin.com/in/sahar-halili-36ba38300",
    github: "https://github.com/SaharHalili95",
  },
};

export const experienceData = [
  {
    title: "Mathematics and Computer Science Teacher",
    company: "Yeshivat Bnei Akiva Lapid, Modi'in",
    period: "2025–Present",
    responsibilities: [
      "Taught programming (Python) and advanced mathematics to high school students.",
      "Built student confidence in mathematical and algorithmic problem-solving through structured methodologies.",
      "Enhanced communication skills by explaining complex technical concepts clearly.",
      "Connected mathematical theory to practical programming applications.",
    ],
  },
];

export const militaryData = {
  service: {
    organization: "Israel Defense Forces (IDF)",
    period: "2014–2017",
    highlights: [
      "Developed strong communication and teamwork skills through problem-solving.",
      "Operated under pressure in complex environments.",
    ],
  },
  reserve: {
    period: "2017–Present",
  },
};

export const educationData = {
  institution: "Holon Institute of Technology (HIT)",
  period: "2021–2025",
  degree: "Bachelor of Science in Computer Science",
};

export const skillsData = {
  languages: ["Python", "C#", "JavaScript", "TypeScript"],
  techStack: [".NET 8", "ASP.NET Core", "EF Core", "React", "Vue.js", "Next.js", "FastAPI", "Node.js", "SQL", "SQL Server", "PostgreSQL", "Redis", "MongoDB", "Docker", "OpenAI API", "ChromaDB"],
  aiTools: ["Claude Code", "Cursor IDE", "GitHub Copilot", "Prompt Engineering"],
  devTools: ["Git", "VS Code", "Railway", "Vercel"],
  practices: ["OOP", "TDD", "Agile", "RAG Architecture", "Network Security", "Vector Embeddings"],
};

export const projectsData = [
  {
    title: "SalaryNet",
    subtitle: "Payroll & HR Management System in .NET 8 and Vue 3",
    description:
      "A full-stack payroll and HR system covering employees, departments, monthly payroll and attendance. Payslips break down a documented progressive income-tax and social-security calculation, employees clock in and out with hours calculated by the server, and a dashboard summarizes headcount and payroll cost. Admin, HR and Employee accounts each see only what their role allows.",
    highlights: [
      "Clean Architecture with a rich domain model: invariants enforced in entities, EF Core Fluent API mappings and migrations on SQL Server",
      "Database-enforced rules: a unique (EmployeeId, Year, Month) index blocks duplicate payslips even under concurrent requests",
      "Resource-level authorization against IDOR, FluentValidation, and RFC 7807 ProblemDetails for every error",
      "123 xUnit tests: unit tests with Moq and integration tests with WebApplicationFactory against SQL Server in Testcontainers",
    ],
    technologies: ["C#", ".NET 8", "ASP.NET Core Web API", "EF Core", "SQL Server", "JWT", "FluentValidation", "xUnit", "Testcontainers", "Vue 3", "TypeScript", "PrimeVue", "Docker", "GitHub Actions"],
    link: "https://github.com/SaharHalili95/SalaryNet",
    demoLink: "https://saharhalili95.github.io/SalaryNet/",
  },
  {
    title: "HardenGarden",
    subtitle: "Read-Only Linux Hardening Auditor with Local AI",
    description:
      "A desktop app and CLI that audits a Linux machine across SSH, firewall, listening services, file permissions, sudo, accounts, automatic updates and ASLR, then computes a deterministic \"Garden Health\" score. A local LLM explains each finding, and every finding comes with a remediation script the user runs themselves - the app never changes the system. Released as .deb and AppImage packages tested on Ubuntu 22.04, Ubuntu 24.04 and Debian 12.",
    highlights: [
      "Security by design: allowlisted commands, no shell, no privilege escalation, loopback-only API with a per-launch token",
      "Grounded RAG with Ollama + ChromaDB + BM25: cited answers, prompt-injection defenses, deterministic refusals",
      "Remediation scripts verified in disposable Docker containers: re-scan passes and SSH still starts",
      "Supply chain: Sigstore-signed releases, SBOM, CodeQL, Trivy and a STRIDE threat model",
    ],
    technologies: ["Python", "FastAPI", "Ollama", "ChromaDB", "RAG", "Tauri", "Rust", "React", "TypeScript", "Docker", "GitHub Actions", "pytest", "Playwright"],
    link: "https://github.com/SaharHalili95/hardengarden",
    demoLink: "https://saharhalili95.github.io/hardengarden/",
  },
  {
    title: "EasyMat",
    subtitle: "AI Math Tutor for the Israeli Bagrut",
    description:
      "A full-stack AI math tutor for Israeli high school students preparing for the Bagrut exam (3, 4 and 5 units). Students pick their unit level, ask questions in Hebrew or English, and get curriculum-aligned answers grounded in Bagrut material.",
    highlights: [
      "RAG pipeline: Bagrut exam notes → Voyage AI embeddings → Pinecone vector search",
      "Streamed Claude API responses with prompt caching to reduce costs ~90%",
      "LaTeX math rendering via KaTeX for clean formula display",
      "Image upload for handwritten equations - Claude transcribes to LaTeX",
    ],
    technologies: ["Next.js", "TypeScript", "Claude API", "Pinecone", "Voyage AI", "RAG", "KaTeX", "Tailwind CSS"],
    link: "https://github.com/SaharHalili95/easymat",
    demoLink: "https://saharhalili95.github.io/easymat-landing/",
  },
  {
    title: "NetSentinel",
    subtitle: "Network Security Monitoring Platform",
    description:
      "A platform that gives security teams real-time visibility across their network: automated device discovery, vulnerability detection and live WebSocket alerts, built to catch threats before they become incidents.",
    highlights: [
      "Detects intrusions and anomalies in real-time across the entire network",
      "SOC-ready: severity-based alerts, audit trail & network topology view",
      "Production-grade: FastAPI + Next.js + PostgreSQL + Redis + Docker",
      "Full unit test coverage for anomaly detection and alert management",
    ],
    technologies: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "WebSocket", "Tailwind CSS", "SQLAlchemy", "Recharts", "pytest"],
    link: "https://github.com/SaharHalili95/netsentinel",
    demoLink: "https://saharhalili95.github.io/netsentinel/",
  },
  {
    title: "CodeMate AI",
    subtitle: "RAG-Powered Code Assistant",
    description:
      "An AI code assistant: upload a codebase, then ask questions about it in a real-time chat that retrieves the relevant code as context. The React TypeScript front end adds syntax highlighting, file upload and an analytics dashboard.",
    highlights: [
      "End-to-end RAG pipeline: parsing, embeddings, vector search & GPT-4",
      "Production deployed on Railway + Vercel",
      "Semantic search across entire codebases in seconds",
    ],
    technologies: ["FastAPI", "OpenAI API", "ChromaDB", "RAG", "React", "TypeScript", "Tailwind CSS", "Vector Embeddings", "Railway", "Vercel"],
    link: "https://github.com/SaharHalili95/codemate-ai",
    demoLink: "https://saharhalili95.github.io/codemate-ai/",
  },
  {
    title: "NitaiBot",
    subtitle: "AI-Powered Telegram Content Bot",
    description:
      "A Telegram bot for eCommerce teams: send a product name or SKU and get back a complete product page with specs and marketing highlights, styled to the standards of leading Israeli retail chains.",
    highlights: [
      "Generates full product pages in Hebrew using Claude (Anthropic API)",
      "Outputs SEO-ready HTML formatted for WordPress embedding",
      "Deployed on a live server with Gunicorn + Flask",
    ],
    technologies: ["Python", "Claude API", "Anthropic SDK", "Telegram Bot API", "Flask", "Gunicorn"],
    link: "https://github.com/SaharHalili95/nitai-bot",
  },
  {
    title: "Vet-Book",
    subtitle: "Veterinary Management Prototype",
    description:
      "A full-stack prototype for running a veterinary clinic, with appointment booking for pets and a Streamlit dashboard for clinic staff.",
    highlights: [
      "Automated email and SMS reminders via background scheduler",
      "Medical records and weight history tracking per pet",
      "Duplicate-booking detection on appointment creation",
    ],
    technologies: ["FastAPI", "Python", "Streamlit", "Pydantic", "Docker"],
  },
  {
    title: "CryptoPortfolio",
    subtitle: "Crypto Investment Tracker & Dashboard",
    description:
      "A cryptocurrency dashboard for following the market and practising portfolio management without real money, with dark/light mode and a fully responsive design.",
    highlights: [
      "Live market data from CoinGecko API",
      "$10K virtual trading simulator with P&L tracking",
      "Price alerts with browser notifications",
      "Interactive charts, market heatmap & watchlist",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
  },
  {
    title: "Budget Balance Game",
    subtitle: "Interactive Financial Education Game",
    description:
      "A financial management game that teaches budgeting through monthly challenges and decision tracking, with a reporting system that acts like a personal accountant. Built with animations and a responsive design.",
    highlights: [
      "5 progression levels with 8 unlockable achievements",
      "Bilingual (English/Hebrew) with full RTL support",
      "Real-time financial analytics & personalized recommendations",
    ],
    technologies: ["React", "TypeScript", "Vite", "Local Storage"],
    link: "https://github.com/SaharHalili95/budget-balance-game",
    demoLink: "https://saharhalili95.github.io/budget-balance-game/",
  },
  {
    title: "Smart Price Comparison Platform",
    subtitle: "Multi-Store Price Comparison App",
    description:
      "A full-stack web app that searches products and compares their prices across multiple stores, with a FastAPI (Python) backend and a responsive React TypeScript front end.",
    highlights: [
      "Automated multi-store price tracking & comparison",
      "AI-accelerated development workflow with Cursor",
      "End-to-end type safety with Pydantic + TypeScript",
    ],
    technologies: ["FastAPI", "React", "TypeScript", "Python", "Pydantic"],
    link: "https://github.com/SaharHalili95/price-comparison-platform",
    demoLink: "https://saharhalili95.github.io/price-comparison-platform/",
  },
  {
    title: "Interview Prep Tracker",
    subtitle: "Coding Interview Practice Tracker",
    description:
      "A tracker for coding interview preparation: manage questions with full CRUD, organize them by category and follow your progress. Data stays in the browser with localStorage, and sample questions load on first launch.",
    highlights: [
      "Static GitHub Pages deployment - zero backend required",
      "LeetCode integration with direct problem links",
      "Smart filtering by difficulty, category & status",
    ],
    technologies: ["FastAPI", "React", "TypeScript", "MongoDB", "localStorage", "Docker"],
    link: "https://github.com/SaharHalili95/interview-prep-tracker",
    demoLink: "https://saharhalili95.github.io/interview-prep-tracker/",
  },
  {
    title: "Reaction Speed Test",
    subtitle: "Reflex Testing Game",
    description:
      "A reflex game with Reaction Time (click when the screen turns green), Target Click (hit random targets) and Number Sequence (click 1-25 in order) modes, with history saved in localStorage and a responsive dark theme.",
    highlights: [
      "3 game modes for comprehensive reflex testing",
      "Performance benchmarks with historical stats tracking",
      "Visual analytics with bar charts & score history",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://github.com/SaharHalili95/reaction-speed-test",
    demoLink: "https://saharhalili95.github.io/reaction-speed-test/",
  },
  {
    title: "Multiplayer Tic Tac Toe",
    subtitle: "Real-Time Multiplayer Game",
    description:
      "A Tic Tac Toe game two people can play from different computers, with in-game chat between players and persistent score tracking across rounds. Deployed as a static site on GitHub Pages.",
    highlights: [
      "Peer-to-peer WebRTC multiplayer - zero backend required",
      "Minimax AI with 3 difficulty levels (Easy to Unbeatable)",
      "Trilingual support (Hebrew, English, Arabic) with auto RTL/LTR",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PeerJS", "WebRTC"],
    link: "https://github.com/SaharHalili95/multiplayer-tictactoe",
    demoLink: "https://saharhalili95.github.io/multiplayer-tictactoe/",
  },
  {
    title: "Rambo",
    subtitle: "Pit Bull Breed Advocacy Site",
    description:
      "An educational site built to change the public perception of Pit Bulls, with a personal photo gallery of Rambo in an auto-advancing slideshow.",
    highlights: [
      "Bilingual Hebrew/English with automatic RTL/LTR switching",
      "Myth-busting section backed by temperament research data",
      "Covers therapy dogs, rescue work, and family-friendly traits",
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
