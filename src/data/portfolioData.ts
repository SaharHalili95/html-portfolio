export const profileData = {
  name: "Sahar Halili",
  title: "AI Engineer & Full-Stack Developer",
  image: "/images/sh-portfolio.png",
  summary:
    "AI Engineer specializing in RAG systems and LLM integration. Built production-ready AI applications using OpenAI, vector databases, and modern full-stack technologies. Fast learner with strong background in technical education and complex problem-solving.",
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
  languages: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  techStack: ["React", "Next.js", "FastAPI", "Node.js", "SQL", "PostgreSQL", "Redis", "MongoDB", "Docker", "OpenAI API", "ChromaDB"],
  devTools: ["Cursor IDE", "Claude Code", "GitHub Copilot", "Git", "VS Code", "Railway", "Vercel"],
  practices: ["OOP", "TDD", "Agile", "RAG Architecture", "Network Security", "Prompt Engineering", "Vector Embeddings"],
};

export const projectsData = [
  {
    title: "NetSentinel",
    subtitle: "Network Security Monitoring Platform",
    description:
      "Built a full-stack network monitoring and intrusion detection platform for real-time security oversight. Features automated device discovery via ARP/nmap scanning, port scanning with vulnerability detection, traffic analysis with GeoIP mapping, anomaly detection engine, and real-time WebSocket alerts. Dark-themed dashboard with interactive charts, network topology visualization, and comprehensive alert management. Dockerized with PostgreSQL and Redis for production deployment.",
    highlights: [
      "Real-time device discovery, port scanning & anomaly detection",
      "WebSocket live alerts with severity-based classification",
      "Full-stack: FastAPI + Next.js + PostgreSQL + Redis + Docker",
    ],
    technologies: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "WebSocket", "Tailwind CSS", "SQLAlchemy", "Recharts"],
    link: "https://github.com/SaharHalili95/netsentinel",
  },
  {
    title: "CodeMate AI",
    subtitle: "RAG-Powered Code Assistant",
    description:
      "Built a professional AI code assistant using RAG (Retrieval Augmented Generation) architecture. Features semantic code search, AI-powered Q&A about codebases, and real-time chat with intelligent context retrieval. Implemented complete RAG pipeline: code parsing & chunking, OpenAI embeddings generation, ChromaDB vector storage, and GPT-4 integration. Modern React TypeScript frontend with syntax highlighting, file upload, and analytics dashboard. Deployed on Railway (backend) and Vercel (frontend).",
    highlights: [
      "End-to-end RAG pipeline: parsing, embeddings, vector search & GPT-4",
      "Production deployed on Railway + Vercel",
      "Semantic search across entire codebases in seconds",
    ],
    technologies: ["FastAPI", "OpenAI API", "ChromaDB", "RAG", "React", "TypeScript", "Tailwind CSS", "Vector Embeddings", "Railway", "Vercel"],
    link: "https://github.com/SaharHalili95/codemate-ai",
    demoLink: "https://codemate-ai.vercel.app",
  },
  {
    title: "Budget Balance Game",
    subtitle: "Interactive Financial Education Game",
    description:
      "Developed an interactive financial management game using React and TypeScript. Features 5 progression levels, 8 achievements with tracking, monthly challenges, and a comprehensive financial reporting system that acts like a personal accountant. Includes bilingual support (English/Hebrew with RTL), decision tracking, and real-time analytics with personalized recommendations. Built with modern animations and responsive design.",
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
    subtitle: "Full-Stack Project",
    description:
      "Developed a full-stack price comparison web app using FastAPI (Python) and React TypeScript. Leveraged Cursor AI to accelerate development, specifically for complex data validation and Pydantic model structuring. Built automated product search and price tracking features across multiple stores with a focus on type safety and responsive design.",
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
    subtitle: "Full-Stack Project",
    description:
      "Built a coding interview preparation tracker with question management, progress tracking, and LeetCode integration. Deployed as a static app on GitHub Pages using localStorage for offline-first usage — no backend required. Features CRUD operations, difficulty filtering, category organization, and sample questions on first load.",
    highlights: [
      "Static GitHub Pages deployment — zero backend required",
      "LeetCode integration with direct problem links",
      "Smart filtering by difficulty, category & status",
    ],
    technologies: ["FastAPI", "React", "TypeScript", "MongoDB", "localStorage", "Docker"],
    link: "https://github.com/SaharHalili95/interview-prep-tracker",
    demoLink: "https://saharhalili95.github.io/interview-prep-tracker/",
  },
  {
    title: "CryptoPortfolio",
    subtitle: "Crypto Investment Tracker & Dashboard",
    description:
      "Built a real-time cryptocurrency tracking dashboard with virtual portfolio management. Features include live prices from CoinGecko API, interactive charts, market heatmap, watchlist, and a $10K virtual trading simulator with P&L tracking. Includes dark/light mode and full responsive design.",
    highlights: [
      "Live market data from CoinGecko API",
      "$10K virtual trading simulator with P&L tracking",
      "Interactive charts, market heatmap & watchlist",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
  },
  {
    title: "Reaction Speed Test",
    subtitle: "Reflex Testing Game",
    description:
      "Built a reaction speed testing game with 3 game modes: Reaction Time (click when screen turns green), Target Click (hit random targets), and Number Sequence (click 1-25 in order). Features performance benchmarks, stats tracking with bar charts, localStorage history, and a responsive dark theme UI.",
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
      "Built a real-time multiplayer Tic Tac Toe game playable from two different computers via peer-to-peer WebRTC (no backend server required). Features vs-Computer mode with Minimax AI across three difficulty levels (Easy, Medium, Unbeatable), trilingual support (Hebrew, English, Arabic) with automatic RTL/LTR switching, in-game chat between players, and persistent score tracking across rounds. Deployed as a static site on GitHub Pages.",
    highlights: [
      "Peer-to-peer WebRTC multiplayer — zero backend required",
      "Minimax AI with 3 difficulty levels (Easy to Unbeatable)",
      "Trilingual support (Hebrew, English, Arabic) with auto RTL/LTR",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PeerJS", "WebRTC"],
    link: "https://github.com/SaharHalili95/multiplayer-tictactoe",
    demoLink: "https://saharhalili95.github.io/multiplayer-tictactoe/",
  },
  {
    title: "Rambo",
    subtitle: "Personal Project",
    description: "A mini-project showcasing my pet. Click to view details.",
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
