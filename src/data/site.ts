export type Lang = "en" | "he";

type Text = Record<Lang, string>;

export const profile = {
  name: { en: "Sahar Halili", he: "סהר חלילי" } as Text,
  title: { en: "Software Engineer · Full-Stack & AI", he: "מהנדס תוכנה · Full-Stack ו-AI" } as Text,
  photo: "/images/sh-portfolio.png",
  cv: "/cv/Sahar_Halili_CV.pdf",
  linkedin: "https://www.linkedin.com/in/sahar-halili",
  github: "https://github.com/SaharHalili95",
  email: "sahar_halili@icloud.com",
  phone: "050-574-1079",
  phoneHref: "tel:+972505741079",
  whatsapp: "https://wa.me/972505741079",
  location: { en: "Modi'in-Maccabim-Re'ut, Israel", he: "מודיעין-מכבים-רעות" } as Text,
};

export const ui = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    menu: "Menu",
    closeMenu: "Close menu",
    switchLang: "עברית",
    switchLangLabel: "Switch to Hebrew",
    talk: "Let's talk",
    headline: "I build software that works. And I ship it.",
    intro:
      "Full-stack developer, B.Sc. in Computer Science from HIT. I build business systems, web and mobile apps and AI products, from the first idea to a live, tested release.",
    primary: "Let's work together",
    cv: "Download CV",
    availability: "Open to full-time roles and freelance projects",
    heroAlt: "SalaryNet dashboard on a desktop and Linux Master on a phone",
    workTitle: "Selected work.",
    workIntro: "Every project here is live. Open it, try it, read the code.",
    demo: "Open the live demo",
    code: "Read the code",
    visit: "Visit the site",
    builtWith: "Built with",
    moreTitle: "More projects.",
    servicesTitle: "What I can build for you.",
    servicesIntro:
      "Hiring for your team, or need something built? You get the same standard either way: clean code, automated tests, and a product that is live, not just a demo.",
    example: "See it in",
    aboutTitle: "About.",
    aboutText:
      "I studied Computer Science at HIT and teach programming and mathematics. I like to build things end to end: the data model, the API, the screen, the tests and the deploy. I work with AI coding tools every day, and teaching taught me to explain technical ideas clearly to anyone.",
    experience: "Experience",
    education: "Education",
    military: "Military service",
    reserve: "Reserve service",
    skills: "Skills",
    contactTitle: "Let's build something.",
    contactText: "A role on your team or a project you need built: tell me what you need and I'll get back to you.",
    email: "Email me",
    whatsapp: "WhatsApp",
    rights: "Sahar Halili",
    skip: "Skip to content",
  },
  he: {
    nav: { work: "עבודות", services: "שירותים", about: "אודות", contact: "יצירת קשר" },
    menu: "תפריט",
    closeMenu: "סגירת התפריט",
    switchLang: "English",
    switchLangLabel: "Switch to English",
    talk: "בואו נדבר",
    headline: "אני בונה תוכנה שעובדת. ומעלה אותה לאוויר.",
    intro:
      "מפתח Full-Stack, בוגר מדעי המחשב ב-HIT. אני בונה מערכות לעסקים, אפליקציות ואתרים ומוצרי AI, מהרעיון הראשון ועד גרסה חיה ובדוקה.",
    primary: "בואו נעבוד יחד",
    cv: "להורדת קורות החיים",
    availability: "פתוח למשרה מלאה ולפרויקטים כפרילנסר",
    heroAlt: "לוח הבקרה של SalaryNet במחשב, ו-Linux Master בטלפון",
    workTitle: "עבודות נבחרות.",
    workIntro: "כל פרויקט כאן חי באוויר. אפשר לפתוח, לנסות ולקרוא את הקוד.",
    demo: "לפתיחת הדמו החי",
    code: "לקוד",
    visit: "לאתר",
    builtWith: "נבנה עם",
    moreTitle: "פרויקטים נוספים.",
    servicesTitle: "מה אני יכול לבנות בשבילכם.",
    servicesIntro:
      "מגייסים לצוות, או צריכים שמישהו יבנה לכם משהו? בשני המקרים מקבלים את אותה רמה: קוד נקי, בדיקות אוטומטיות, ומוצר שעובד באוויר ולא רק הדגמה.",
    example: "דוגמה:",
    aboutTitle: "אודות.",
    aboutText:
      "למדתי מדעי המחשב ב-HIT, ואני מלמד תכנות ומתמטיקה. אני אוהב לבנות דברים מקצה לקצה: מודל הנתונים, ה-API, המסך, הבדיקות וההעלאה לאוויר. אני עובד עם כלי AI לפיתוח כל יום, וההוראה לימדה אותי להסביר רעיונות טכניים בצורה ברורה לכל אחד.",
    experience: "ניסיון",
    education: "השכלה",
    military: "שירות צבאי",
    reserve: "שירות מילואים",
    skills: "כישורים",
    contactTitle: "בואו נבנה משהו.",
    contactText: "משרה בצוות שלכם או פרויקט שצריך לבנות: ספרו לי מה אתם צריכים, ואחזור אליכם.",
    email: "לשליחת מייל",
    whatsapp: "וואטסאפ",
    rights: "סהר חלילי",
    skip: "דילוג לתוכן",
  },
};

export type UI = (typeof ui)["en"];

export const services: { title: Text; text: Text; proof: string }[] = [
  {
    title: { en: "Business systems", he: "מערכות לעסקים" },
    text: {
      en: "Internal tools, admin panels and HR or payroll systems, with roles, permissions and reports.",
      he: "כלים פנימיים, ממשקי ניהול ומערכות שכר ומשאבי אנוש, עם תפקידים, הרשאות ודוחות.",
    },
    proof: "salarynet",
  },
  {
    title: { en: "Web and mobile apps", he: "אתרים ואפליקציות" },
    text: {
      en: "Fast, responsive apps that work on any phone, in Hebrew and English with full right-to-left support.",
      he: "אפליקציות מהירות שעובדות בכל טלפון, בעברית ובאנגלית עם תמיכה מלאה מימין לשמאל.",
    },
    proof: "linuxmaster",
  },
  {
    title: { en: "AI features", he: "יכולות AI" },
    text: {
      en: "Chatbots, assistants and AI search over your own content, built on the Claude and OpenAI APIs.",
      he: "צ'אטבוטים, עוזרים וחיפוש חכם על התוכן שלכם, על בסיס ה-API של Claude ו-OpenAI.",
    },
    proof: "easymat",
  },
  {
    title: { en: "Maintenance and support", he: "תחזוקה ותמיכה" },
    text: {
      en: "Updates, fixes, automated tests and monitoring that keep your product running after launch.",
      he: "עדכונים, תיקונים, בדיקות אוטומטיות וניטור, כדי שהמוצר ימשיך לעבוד גם אחרי ההשקה.",
    },
    proof: "salsmart",
  },
];

export const experience: { role: Text; place: Text; period: Text; points: Text[] }[] = [
  {
    role: { en: "Mathematics and Computer Science Teacher", he: "מורה למתמטיקה ומדעי המחשב" },
    place: { en: "Yeshivat Bnei Akiva Lapid, Modi'in", he: "ישיבת בני עקיבא לפיד, מודיעין" },
    period: { en: "2025–Present", he: "2025–היום" },
    points: [
      { en: "Teach Python programming and advanced mathematics to high school students.", he: "מלמד תכנות ב-Python ומתמטיקה מוגברת לתלמידי תיכון." },
      { en: "Diagnose where each student is stuck and explain complex ideas clearly at every level.", he: "מאבחן איפה כל תלמיד נתקע ומסביר רעיונות מורכבים בצורה ברורה בכל רמה." },
    ],
  },
];

export const military = {
  org: { en: "IDF C4I Corps", he: 'חיל התקשוב, צה"ל' } as Text,
  period: "2014–2017",
  points: [
    {
      en: "Installed, configured and troubleshot command-and-control systems, workstations and network connectivity in operational sites.",
      he: "התקנה, הגדרה ופתרון תקלות במערכות שליטה ובקרה, בעמדות עבודה ובקישוריות רשת באתרים מבצעיים.",
    },
    {
      en: "Managed user accounts and permissions, and handled secure data transfer between classified and unclassified networks.",
      he: "ניהול משתמשים והרשאות, והעברת מידע מאובטחת בין רשתות מסווגות ולא מסווגות.",
    },
  ] as Text[],
  reservePeriod: { en: "2017–Present", he: "2017–היום" } as Text,
  reserve: {
    en: "Set up operations rooms from scratch (computing, communications and connectivity) and maintain IT infrastructure.",
    he: "הקמת חדרי מבצעים מאפס (מחשוב, תקשורת וקישוריות) ותחזוקת תשתיות IT.",
  } as Text,
};

export const education = {
  degree: { en: "B.Sc. in Computer Science", he: "תואר ראשון במדעי המחשב" } as Text,
  school: { en: "Holon Institute of Technology (HIT)", he: "מכון טכנולוגי חולון (HIT)" } as Text,
  period: "2021–2025",
};

export const skills: { label: Text; items: string[] }[] = [
  { label: { en: "Languages", he: "שפות" }, items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "Bash"] },
  { label: { en: "Front end", he: "צד לקוח" }, items: ["React", "Next.js", "Vue 3", "Angular", "Tailwind CSS"] },
  { label: { en: "Back end and data", he: "צד שרת ונתונים" }, items: [".NET 8", "ASP.NET Core", "EF Core", "FastAPI", "Node.js", "REST APIs", "SQL Server", "PostgreSQL", "Redis", "MongoDB", "RabbitMQ"] },
  { label: { en: "AI", he: "AI" }, items: ["Claude API", "OpenAI API", "RAG", "Embeddings", "Pinecone", "ChromaDB", "Ollama", "Claude Code"] },
  { label: { en: "Delivery and quality", he: "העלאה ואיכות" }, items: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Playwright", "Vitest", "xUnit", "pytest", "Testcontainers"] },
  { label: { en: "Practices", he: "שיטות עבודה" }, items: ["Clean Architecture", "Automated testing", "CI/CD", "Code review", "Secure coding", "WCAG 2.1 AA", "RTL"] },
];

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  link?: string;
  demoLink?: string;
  internalLink?: string;
  extraLinks?: { label: Text; url: string }[];
  image?: string;
  imageKind?: "desktop" | "phone";
  featured?: boolean;
  tagline: Text;
  summary: Text;
  highlights?: Text[];
}

export const projects: Project[] = [
  {
    id: "salarynet",
    title: "SalaryNet",
    featured: true,
    image: "/images/projects/salarynet.webp",
    tagline: { en: "Payroll and HR, end to end.", he: "שכר ומשאבי אנוש, מקצה לקצה." },
    summary: {
      en: "Employees, departments, monthly payroll, payslips and attendance on a .NET 8 API, with Vue 3 and Angular front ends in English and Hebrew. Admin, HR and Employee each see only what their role allows.",
      he: "עובדים, מחלקות, שכר חודשי, תלושים ונוכחות על API ב-.NET 8, עם ממשקי Vue 3 ו-Angular בעברית ובאנגלית. מנהל, משאבי אנוש ועובד רואים רק את מה שהתפקיד שלהם מתיר.",
    },
    highlights: [
      {
        en: "Clean Architecture with a rich domain model, and a unique index that blocks duplicate payslips even under concurrent requests.",
        he: "Clean Architecture עם מודל דומיין עשיר, ואינדקס ייחודי שחוסם תלוש כפול גם כשמגיעות בקשות במקביל.",
      },
      {
        en: "Secure by default: JWT roles, resource-level authorization against IDOR, account lockout and a password policy.",
        he: "מאובטח כברירת מחדל: תפקידים עם JWT, הרשאות ברמת המשאב נגד IDOR, נעילת חשבון ומדיניות סיסמאות.",
      },
      {
        en: "162 xUnit tests against SQL Server in Testcontainers, plus Playwright tests on iPhone and Android, all in CI.",
        he: "162 בדיקות xUnit מול SQL Server ב-Testcontainers, ובדיקות Playwright על אייפון ואנדרואיד, הכול ב-CI.",
      },
    ],
    technologies: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "xUnit", "Testcontainers", "Vue 3", "Angular", "TypeScript", "Playwright", "Docker"],
    link: "https://github.com/SaharHalili95/SalaryNet",
    demoLink: "https://saharhalili95.github.io/SalaryNet/",
    extraLinks: [
      { label: { en: "Angular version", he: "גרסת Angular" }, url: "https://saharhalili95.github.io/SalaryNet/angular/" },
    ],
  },
  {
    id: "easymat",
    title: "EasyMat",
    featured: true,
    image: "/images/projects/easymat.webp",
    tagline: { en: "An AI math tutor for the Bagrut.", he: "מורה AI למתמטיקה לבגרות." },
    summary: {
      en: "Students preparing for the Bagrut (3, 4 and 5 units) ask in Hebrew or English and get step-by-step answers grounded in Bagrut material. A practice mode serves real exam questions, and a photo of a handwritten equation is enough to get it solved.",
      he: "תלמידים שמתכוננים לבגרות (3, 4 ו-5 יחידות) שואלים בעברית או באנגלית ומקבלים פתרון צעד-אחר-צעד שמבוסס על חומר הבגרות. במצב תרגול יש שאלות אמיתיות ממבחנים, ומספיק לצלם משוואה בכתב יד כדי לקבל פתרון.",
    },
    highlights: [
      {
        en: "RAG over an Obsidian knowledge base in Pinecone; incremental sync uploads only the notes that changed.",
        he: "RAG על בסיס ידע ב-Obsidian בתוך Pinecone; סנכרון חכם מעלה רק את ההערות שהשתנו.",
      },
      {
        en: "Streamed Claude API answers with prompt caching, cutting model costs by about 90%.",
        he: "תשובות מה-API של Claude בזרימה, עם prompt caching שחוסך כ-90% מעלות המודל.",
      },
      {
        en: "100+ Vitest tests, including the chat route: streaming, refusals, errors and rate limiting.",
        he: "יותר מ-100 בדיקות Vitest, כולל נתיב הצ'אט: זרימה, סירובים, שגיאות והגבלת קצב.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Claude API", "Pinecone", "RAG", "KaTeX", "Tailwind CSS", "Vitest"],
    link: "https://github.com/SaharHalili95/easymat",
    demoLink: "https://saharhalili95.github.io/easymat-landing/",
  },
  {
    id: "linuxmaster",
    title: "Linux Master",
    featured: true,
    image: "/images/projects/linuxmaster.webp",
    imageKind: "phone",
    tagline: { en: "Learn Linux anywhere. Pass the certification.", he: "ללמוד לינוקס מכל מקום. לעבור את ההסמכה." },
    summary: {
      en: "A phone-first, game-style course in English and Hebrew: 80 units in 10 parts that cover every LPIC-1 objective plus RHCSA and LFCS topics, in short lessons that fit a bus ride. Three mock exams close the path, and the original trivia mode stays for bonus practice.",
      he: "קורס בסגנון משחק לטלפון, בעברית ובאנגלית: 80 יחידות ב-10 חלקים שמכסים את כל יעדי LPIC-1 ונושאים מ-RHCSA ו-LFCS, בשיעורים קצרים שמתאימים לנסיעה באוטובוס. שלושה מבחני דמה סוגרים את המסלול, ומצב הטריוויה המקורי נשאר לתרגול בונוס.",
    },
    highlights: [
      {
        en: "No invented output: answers run in a simulated shell or come from output recorded on real Ubuntu and AlmaLinux.",
        he: "בלי פלט מומצא: התשובות רצות במעטפת מדומה או מגיעות מפלט שהוקלט על Ubuntu ו-AlmaLinux אמיתיים.",
      },
      {
        en: "An LPIC-1 mock exam with 60 questions weighted by objective, a 90-minute timer and a 500/800 pass mark.",
        he: "מבחן דמה ל-LPIC-1 עם 60 שאלות לפי משקל היעדים, טיימר של 90 דקות וציון עובר 500 מתוך 800.",
      },
      {
        en: "Playwright plays every unit on iPhone, iPhone SE and Pixel 7, with axe WCAG 2.1 AA in CI.",
        he: "Playwright משחק כל יחידה על אייפון, iPhone SE ו-Pixel 7, עם בדיקות נגישות WCAG 2.1 AA ב-CI.",
      },
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "PWA", "Linux", "Bash", "Playwright", "Docker", "GitHub Actions", "Lighthouse CI"],
    link: "https://github.com/SaharHalili95/linux-master",
    demoLink: "https://saharhalili95.github.io/linux-master/",
  },
  {
    id: "salsmart",
    title: "SalSmart",
    featured: true,
    image: "/images/projects/salsmart.webp",
    tagline: { en: "Compare a grocery basket across every store.", he: "להשוות סל קניות בין כל החנויות." },
    summary: {
      en: "Ingests the daily price files that Israeli supermarket chains must publish, 1.6M prices per run, normalizes their XML formats into PostgreSQL, and lets shoppers compare a full basket across the stores in their city.",
      he: "קולט את קובצי המחירים היומיים שרשתות השיווק בישראל חייבות לפרסם, 1.6 מיליון מחירים בכל הרצה, מאחד את פורמטי ה-XML שלהן ל-PostgreSQL, ומאפשר להשוות סל קניות שלם בין החנויות בעיר.",
    },
    highlights: [
      {
        en: "Streaming XML parsing: a 34 MB file in about 1 MB of memory.",
        he: "פענוח XML בזרימה: קובץ של 34MB בכ-1MB זיכרון.",
      },
      {
        en: "Kubernetes as code with Kustomize; CI deploys the stack to a kind cluster and runs a smoke test.",
        he: "Kubernetes כקוד עם Kustomize; ה-CI מעלה את המערכת לאשכול kind ומריץ בדיקת עשן.",
      },
      {
        en: "Price-drop alerts through RabbitMQ, monitored with Prometheus and Grafana.",
        he: "התראות על ירידת מחיר דרך RabbitMQ, עם ניטור ב-Prometheus ו-Grafana.",
      },
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Kubernetes", "Kustomize", "RabbitMQ", "Prometheus", "Grafana"],
    link: "https://github.com/SaharHalili95/price-comparison-platform",
    demoLink: "https://saharhalili95.github.io/price-comparison-platform/",
  },
  {
    id: "hardengarden",
    title: "HardenGarden",
    featured: true,
    image: "/images/projects/hardengarden.webp",
    tagline: { en: "A Linux security audit that never touches your system.", he: "בדיקת אבטחה ללינוקס שלא נוגעת במערכת." },
    summary: {
      en: "A desktop app and CLI that checks SSH, firewall, services, permissions, sudo, accounts, updates and ASLR, then scores the machine. A local LLM explains each finding from cited sources, and every fix is a script you run yourself.",
      he: "אפליקציה ו-CLI שבודקים SSH, חומת אש, שירותים, הרשאות, sudo, חשבונות, עדכונים ו-ASLR, ונותנים למחשב ציון. מודל שפה מקומי מסביר כל ממצא ממקורות מצוטטים, וכל תיקון הוא סקריפט שמריצים בעצמכם.",
    },
    highlights: [
      {
        en: "Allowlisted commands, no shell, no privilege escalation, and a loopback-only API with a per-launch token.",
        he: "רק פקודות מאושרות, בלי shell, בלי העלאת הרשאות, ו-API מקומי בלבד עם טוקן חדש בכל הפעלה.",
      },
      {
        en: "Every fix script is verified in disposable Docker containers on Ubuntu 22.04, 24.04 and Debian 12.",
        he: "כל סקריפט תיקון נבדק בקונטיינרים חד-פעמיים על Ubuntu 22.04, 24.04 ו-Debian 12.",
      },
      {
        en: "Sigstore-signed releases, an SBOM, CodeQL, Trivy and a STRIDE threat model.",
        he: "גרסאות חתומות ב-Sigstore, SBOM, CodeQL, Trivy ומודל איומים STRIDE.",
      },
    ],
    technologies: ["Python", "FastAPI", "Ollama", "ChromaDB", "RAG", "Tauri", "Rust", "React", "TypeScript", "Docker"],
    link: "https://github.com/SaharHalili95/hardengarden",
    demoLink: "https://saharhalili95.github.io/hardengarden/",
  },
  {
    id: "netsentinel",
    title: "NetSentinel",
    featured: true,
    image: "/images/projects/netsentinel.webp",
    tagline: { en: "See everything on your home network.", he: "לראות כל מה שמחובר לרשת הביתית." },
    summary: {
      en: "Discovers devices, scans ports and samples traffic, then raises alerts for suspicious ports, new devices, watchlist countries and traffic spikes, pushed live to a dashboard. The demo is the real app in English and Hebrew.",
      he: "מגלה מכשירים, סורק פורטים ודוגם תעבורה, ומתריע על פורטים חשודים, מכשירים חדשים, מדינות ברשימת מעקב וקפיצות בתעבורה, ישר ללוח בקרה חי. הדמו הוא האפליקציה האמיתית, בעברית ובאנגלית.",
    },
    highlights: [
      {
        en: "Alerts with an open, acknowledged and resolved lifecycle, over WebSocket.",
        he: "התראות עם מחזור חיים של פתוח, אושר ונפתר, דרך WebSocket.",
      },
      {
        en: "API-key auth on every state-changing endpoint, and daily SOC 2 style checks.",
        he: "אימות במפתח API על כל פעולה שמשנה מצב, ובדיקות יומיות בסגנון SOC 2.",
      },
      {
        en: "pytest, Vitest and Playwright on iPhone, Android and desktop; axe finds no WCAG 2.1 AA issues.",
        he: "pytest, Vitest ו-Playwright על אייפון, אנדרואיד ומחשב; axe לא מוצא בעיות WCAG 2.1 AA.",
      },
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "nmap", "Scapy", "Docker"],
    link: "https://github.com/SaharHalili95/netsentinel",
    demoLink: "https://saharhalili95.github.io/netsentinel/",
  },
  {
    id: "codemate",
    title: "CodeMate AI",
    tagline: { en: "Chat with any codebase.", he: "לשוחח עם כל בסיס קוד." },
    summary: {
      en: "Upload a codebase and ask about it in a chat that retrieves the relevant code as context. Swappable OpenAI and Claude providers; the live demo runs in your browser with your own OpenAI key.",
      he: "מעלים בסיס קוד ושואלים עליו בצ'אט ששולף את הקוד הרלוונטי כהקשר. ספקים מתחלפים של OpenAI ו-Claude; הדמו החי רץ בדפדפן עם מפתח OpenAI משלכם.",
    },
    technologies: ["Python", "FastAPI", "ChromaDB", "RAG", "React", "TypeScript"],
    link: "https://github.com/SaharHalili95/codemate-ai",
    demoLink: "https://saharhalili95.github.io/codemate-ai/",
  },
  {
    id: "meshmind",
    title: "MeshMind AI",
    tagline: { en: "Network routing that learns.", he: "ניתוב רשת שלומד." },
    summary: {
      en: "A Q-learning agent routes traffic across a simulated 12-node backbone, benchmarked against shortest-path and congestion-aware routing over 10 seeds, with a live in-browser simulator.",
      he: "סוכן Q-learning מנתב תעבורה ברשת שדרה מדומה של 12 צמתים, מושווה לניתוב לפי מסלול קצר ולפי עומס על פני 10 הרצות, עם סימולטור חי בדפדפן.",
    },
    technologies: ["Python", "Reinforcement Learning", "Vue 3", "TypeScript", "Vitest"],
    link: "https://github.com/SaharHalili95/meshmind-ai",
    demoLink: "https://saharhalili95.github.io/meshmind-ai/",
  },
  {
    id: "nitaibot",
    title: "NitaiBot",
    tagline: { en: "Product pages written by Claude.", he: "דפי מוצר ש-Claude כותב." },
    summary: {
      en: "A Telegram bot and web interface: send a product name or SKU and get a full Hebrew product page, grounded in Claude's web search and ready for WordPress.",
      he: "בוט טלגרם וממשק ווב: שולחים שם מוצר או מק\"ט ומקבלים דף מוצר מלא בעברית, מבוסס על חיפוש הרשת של Claude ומוכן ל-WordPress.",
    },
    technologies: ["Python", "Claude API", "Telegram Bot API", "Flask"],
    link: "https://github.com/SaharHalili95/nitai-bot",
  },
  {
    id: "crypto",
    title: "CryptoPortfolio",
    tagline: { en: "Practice trading without real money.", he: "לתרגל מסחר בלי כסף אמיתי." },
    summary: {
      en: "Live market data, a $10K virtual trading simulator with P&L, price alerts and a market heatmap.",
      he: "נתוני שוק חיים, סימולטור מסחר וירטואלי של 10,000 דולר עם רווח והפסד, התראות מחיר ומפת חום של השוק.",
    },
    technologies: ["React", "TypeScript", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
  },
  {
    id: "interview",
    title: "Interview Prep Tracker",
    tagline: { en: "Track coding interview practice.", he: "מעקב אחרי תרגול לראיונות." },
    summary: {
      en: "A React app for interview questions by category and difficulty, plus a FastAPI and MongoDB API with pytest tests.",
      he: "אפליקציית React לשאלות ראיון לפי נושא ורמת קושי, ו-API ב-FastAPI ו-MongoDB עם בדיקות pytest.",
    },
    technologies: ["React", "TypeScript", "FastAPI", "MongoDB", "pytest"],
    link: "https://github.com/SaharHalili95/interview-prep-tracker",
    demoLink: "https://saharhalili95.github.io/interview-prep-tracker/",
  },
  {
    id: "budget",
    title: "Budget Balance Game",
    tagline: { en: "Learn budgeting by playing.", he: "ללמוד ניהול תקציב דרך משחק." },
    summary: {
      en: "Monthly budget challenges with 5 levels, 8 achievements and a report that works like a personal accountant, in English and Hebrew.",
      he: "אתגרי תקציב חודשיים עם 5 שלבים, 8 הישגים ודוח שעובד כמו רואה חשבון אישי, בעברית ובאנגלית.",
    },
    technologies: ["React", "TypeScript", "Vite"],
    link: "https://github.com/SaharHalili95/budget-balance-game",
    demoLink: "https://saharhalili95.github.io/budget-balance-game/",
  },
  {
    id: "tictactoe",
    title: "Multiplayer Tic Tac Toe",
    tagline: { en: "Play from two computers, no server.", he: "לשחק משני מחשבים, בלי שרת." },
    summary: {
      en: "Peer-to-peer WebRTC games with chat, or a Minimax opponent from Easy to Unbeatable, in Hebrew, English and Arabic.",
      he: "משחק בין שני שחקנים ב-WebRTC עם צ'אט, או נגד יריב Minimax מקל ועד בלתי מנוצח, בעברית, אנגלית וערבית.",
    },
    technologies: ["JavaScript", "WebRTC", "PeerJS"],
    link: "https://github.com/SaharHalili95/multiplayer-tictactoe",
    demoLink: "https://saharhalili95.github.io/multiplayer-tictactoe/",
  },
  {
    id: "reaction",
    title: "Reaction Speed Test",
    tagline: { en: "How fast are your reflexes?", he: "כמה מהירים הרפלקסים שלכם?" },
    summary: {
      en: "Three reflex games with personal bests and charts of past results.",
      he: "שלושה משחקי תגובה עם שיאים אישיים וגרפים של תוצאות קודמות.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/SaharHalili95/reaction-speed-test",
    demoLink: "https://saharhalili95.github.io/reaction-speed-test/",
  },
  {
    id: "rambo",
    title: "Rambo's Pit Bull Project",
    tagline: { en: "Breed myths, answered with data.", he: "מיתוסים על הגזע, מול נתונים." },
    summary: {
      en: "A personal awareness project led by my dog, Rambo: temperament data, articles on history and breed laws, a training guide and rescue organizations, in Hebrew and English.",
      he: "פרויקט מודעות אישי בהובלת הכלב שלי, רמבו: נתוני טמפרמנט, כתבות על ההיסטוריה ועל חוקי הגזע, מדריך אילוף ועמותות, בעברית ובאנגלית.",
    },
    technologies: ["React", "TypeScript", "Vite"],
    internalLink: "/rambo",
  },
];
