export const profileData = {
  name: "Sahar Halili",
  title: "Software Engineer",
  image: "/images/sh-portfolio.png",
  summary:
    "AI-Native Developer focused on modern development workflows using Cursor and GitHub Copilot to deliver high-quality code. Fast learner with a strong background in technical education and complex problem-solving.",
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
  techStack: ["React", "FastAPI", "Node.js", "SQL", "MongoDB"],
  devTools: ["Cursor IDE", "Claude Code", "GitHub Copilot", "Git", "VS Code"],
  practices: ["OOP", "TDD", "Agile", "Prompt Engineering for Code"],
};

export const projectsData = [
  {
    title: "Budget Balance Game",
    subtitle: "Interactive Financial Education Game",
    description:
      "Developed an interactive financial management game using React and TypeScript. Features 5 progression levels, 8 achievements with tracking, monthly challenges, and a comprehensive financial reporting system that acts like a personal accountant. Includes bilingual support (English/Hebrew with RTL), decision tracking, and real-time analytics with personalized recommendations. Built with modern animations and responsive design.",
    technologies: ["React", "TypeScript", "Vite", "Local Storage"],
    link: "https://github.com/SaharHalili95/budget-balance-game",
    demoLink: "https://saharhalili95.github.io/budget-balance-game/",
  },
  {
    title: "Smart Price Comparison Platform",
    subtitle: "Full-Stack Project",
    description:
      "Developed a full-stack price comparison web app using FastAPI (Python) and React TypeScript. Leveraged Cursor AI to accelerate development, specifically for complex data validation and Pydantic model structuring. Built automated product search and price tracking features across multiple stores with a focus on type safety and responsive design.",
    technologies: ["FastAPI", "React", "TypeScript", "Python", "Pydantic"],
    link: "https://github.com/SaharHalili95/price-comparison-platform",
    demoLink: "https://saharhalili95.github.io/price-comparison-platform/",
  },
  {
    title: "Interview Prep Tracker",
    subtitle: "Full-Stack Project",
    description:
      "Built a full-stack application for tracking interview preparation progress. Features include question management, progress tracking, and categorization. Built with FastAPI backend and MongoDB for data persistence.",
    technologies: ["FastAPI", "MongoDB", "React", "TypeScript"],
    link: "https://github.com/SaharHalili95/interview-prep-tracker",
    demoLink: "https://saharhalili95.github.io/interview-prep-tracker/",
  },
  {
    title: "CryptoPortfolio",
    subtitle: "Crypto Investment Tracker & Dashboard",
    description:
      "Built a real-time cryptocurrency tracking dashboard with virtual portfolio management. Features include live prices from CoinGecko API, interactive charts, market heatmap, watchlist, and a $10K virtual trading simulator with P&L tracking. Includes dark/light mode and full responsive design.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
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
