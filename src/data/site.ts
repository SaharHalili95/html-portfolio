export type Lang = "en" | "he";

type Text = Record<Lang, string>;

export const profile = {
  name: { en: "Sahar Halili", he: "סהר חלילי" } as Text,
  title: { en: "Software developer · Security and learning tools", he: "מפתח תוכנה · כלים לאבטחה וללמידה" } as Text,
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
    nav: { work: "Projects", services: "Freelance", about: "About", contact: "Contact" },
    menu: "Menu",
    closeMenu: "Close menu",
    switchLang: "עברית",
    switchLangLabel: "Switch to Hebrew",
    talk: "Contact me",
    headline: "Hi, I'm Sahar",
    intro:
      "I build security and learning tools. I have a CS degree from HIT, I teach math and Python, and I take on freelance projects. I'm looking for my first full-time developer role. You can open my projects below.",
    primary: "Get in touch",
    cv: "Download CV",
    availability: "Available for freelance projects",
    heroAlt: "NetSentinel dashboard on a desktop and Linux Master on a phone",
    workTitle: "Projects",
    workIntro: "You can try each of these and read its code.",
    demo: "Open the live demo",
    code: "Read the code",
    visit: "Visit the site",
    builtWith: "Built with",
    moreTitle: "More projects",
    servicesTitle: "Freelance work",
    servicesIntro:
      "If you need something built, this is what I can help with.",
    example: "Example:",
    aboutTitle: "About",
    aboutText:
      "I studied computer science at HIT, and today I teach math and Python at a high school in Modi'in. Most of what I build is about security or learning, which comes from my time in the C4I Corps and from teaching. I like working on every part of a product, from the database to the screen, and I use AI coding tools every day.",
    experience: "Experience",
    education: "Education",
    military: "Military service",
    reserve: "Reserve service",
    skills: "Skills",
    contactTitle: "Get in touch",
    contactText: "Looking for a developer, or have a project in mind? Send me an email or a WhatsApp message.",
    email: "Email me",
    whatsapp: "WhatsApp",
    rights: "Sahar Halili",
    skip: "Skip to content",
  },
  he: {
    nav: { work: "פרויקטים", services: "פרילנס", about: "קצת עליי", contact: "יצירת קשר" },
    menu: "תפריט",
    closeMenu: "סגירת התפריט",
    switchLang: "English",
    switchLangLabel: "Switch to English",
    talk: "צרו קשר",
    headline: "היי, אני סהר",
    intro:
      "אני בונה כלים לאבטחה וללמידה. אני בוגר מדעי המחשב ב-HIT, מלמד מתמטיקה ו-Python ועובד גם כפרילנסר. אני מחפש את המשרה המלאה הראשונה שלי בפיתוח. את הפרויקטים שלי אפשר לפתוח כאן למטה.",
    primary: "צרו קשר",
    cv: "להורדת קורות החיים",
    availability: "פנוי לפרויקטים כפרילנסר",
    heroAlt: "לוח הבקרה של NetSentinel במחשב, ו-Linux Master בטלפון",
    workTitle: "פרויקטים",
    workIntro: "אפשר לנסות כל אחד מהם ולקרוא את הקוד שלו.",
    demo: "לפתיחת הדמו החי",
    code: "לקוד",
    visit: "לאתר",
    builtWith: "נבנה עם",
    moreTitle: "עוד פרויקטים",
    servicesTitle: "עבודה כפרילנסר",
    servicesIntro:
      "צריכים שיבנו לכם משהו? בזה אני יכול לעזור.",
    example: "דוגמה:",
    aboutTitle: "קצת עליי",
    aboutText:
      "למדתי מדעי המחשב ב-HIT, והיום אני מלמד מתמטיקה ו-Python בתיכון במודיעין. רוב מה שאני בונה קשור לאבטחה או ללמידה, וזה מגיע מהשירות בחיל התקשוב ומההוראה. אני אוהב לעבוד על כל חלקי המוצר, ממסד הנתונים ועד המסך, ואני משתמש בכלי AI לפיתוח כל יום.",
    experience: "ניסיון",
    education: "השכלה",
    military: "שירות צבאי",
    reserve: "שירות מילואים",
    skills: "כישורים",
    contactTitle: "יצירת קשר",
    contactText: "מחפשים מפתח, או שיש לכם פרויקט בראש? אפשר לשלוח לי מייל או הודעה בוואטסאפ.",
    email: "לשליחת מייל",
    whatsapp: "וואטסאפ",
    rights: "סהר חלילי",
    skip: "דילוג לתוכן",
  },
};

export type UI = (typeof ui)["en"];

export const services: { title: Text; text: Text; proof: string }[] = [
  {
    title: { en: "Security and cyber", he: "אבטחה וסייבר" },
    text: {
      en: "Security checks for Linux machines and networks, and permissions and secure code in the products I build.",
      he: "בדיקות אבטחה למחשבי לינוקס ולרשתות, והרשאות וקוד מאובטח במוצרים שאני בונה.",
    },
    proof: "hardengarden",
  },
  {
    title: { en: "Learning tools", he: "כלים ללמידה" },
    text: {
      en: "Courses, practice apps and AI tutors for phones, in Hebrew and English.",
      he: "קורסים, אפליקציות תרגול ומורי AI לטלפון, בעברית ובאנגלית.",
    },
    proof: "easymat",
  },
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
      en: "Apps and sites that work well on phones, in Hebrew and English, including right-to-left.",
      he: "אפליקציות ואתרים שעובדים טוב בטלפון, בעברית ובאנגלית.",
    },
    proof: "linuxmaster",
  },
  {
    title: { en: "AI features", he: "יכולות AI" },
    text: {
      en: "Chatbots, assistants and AI search over your own content, using the Claude and OpenAI APIs.",
      he: "צ'אטבוטים, עוזרים וחיפוש בתוך התוכן שלכם, עם ה-API של Claude ו-OpenAI.",
    },
    proof: "codemate",
  },
  {
    title: { en: "Maintenance", he: "תחזוקה" },
    text: {
      en: "Updates, bug fixes, tests and monitoring for a product that's already live.",
      he: "עדכונים, תיקוני באגים, בדיקות וניטור למוצר שכבר באוויר.",
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
      { en: "Work out where each student is stuck and explain things at their level.", he: "מזהה איפה כל תלמיד נתקע ומסביר ברמה שלו." },
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
  { label: { en: "Security", he: "אבטחה וסייבר" }, items: ["Linux hardening", "JWT and role-based access", "nmap", "Scapy", "CodeQL", "Trivy", "SBOM", "Sigstore", "STRIDE"] },
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
    id: "hardengarden",
    title: "HardenGarden",
    featured: true,
    image: "/images/projects/hardengarden.webp",
    tagline: { en: "Checks a Linux machine and tells you what to fix", he: "בודק מחשב לינוקס ואומר מה כדאי לתקן" },
    summary: {
      en: "A desktop app and CLI that checks SSH, the firewall, services, permissions, sudo, accounts, updates and ASLR, then gives the machine a score. It doesn't change anything on its own. A local LLM explains each finding and cites its sources, and each fix is a script you run yourself.",
      he: "אפליקציה ו-CLI שבודקים SSH, חומת אש, שירותים, הרשאות, sudo, חשבונות, עדכונים ו-ASLR, ונותנים למחשב ציון. הכלי לא משנה כלום בעצמו. מודל שפה מקומי מסביר כל ממצא ומפנה למקורות, וכל תיקון הוא סקריפט שמריצים לבד.",
    },
    highlights: [
      {
        en: "Commands come from an allowlist and run without a shell or extra privileges. The API listens on loopback only, with a new token each launch.",
        he: "הפקודות מגיעות מרשימה מאושרת ורצות בלי shell ובלי הרשאות נוספות. ה-API מאזין רק מקומית, עם טוקן חדש בכל הפעלה.",
      },
      {
        en: "Fix scripts are tested in throwaway Docker containers on Ubuntu 22.04, 24.04 and Debian 12.",
        he: "סקריפטי התיקון נבדקים בקונטיינרים חד-פעמיים על Ubuntu 22.04, 24.04 ו-Debian 12.",
      },
      {
        en: "Releases are signed with Sigstore and come with an SBOM. The repo also runs CodeQL and Trivy and has a STRIDE threat model.",
        he: "הגרסאות חתומות ב-Sigstore ומגיעות עם SBOM. בריפו רצים גם CodeQL ו-Trivy, ויש מודל איומים STRIDE.",
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
    tagline: { en: "Shows who's on your home network and warns you when something looks wrong", he: "מראה מי מחובר לרשת הביתית ומתריע כשמשהו נראה חשוד" },
    summary: {
      en: "Finds the devices on your network, scans their ports and samples traffic. It raises an alert for suspicious ports, new devices, watchlist countries and traffic spikes, and the dashboard updates live. The demo is the real app, in English and Hebrew.",
      he: "מוצא את המכשירים ברשת, סורק את הפורטים שלהם ודוגם תעבורה. הוא מתריע על פורטים חשודים, מכשירים חדשים, מדינות ברשימת מעקב וקפיצות בתעבורה, ולוח הבקרה מתעדכן בזמן אמת. הדמו הוא האפליקציה האמיתית, בעברית ובאנגלית.",
    },
    highlights: [
      {
        en: "Alerts can be open, acknowledged or resolved, and reach the browser over WebSocket.",
        he: "התראה יכולה להיות פתוחה, מאושרת או פתורה, והיא מגיעה לדפדפן דרך WebSocket.",
      },
      {
        en: "Every endpoint that changes state needs an API key, and SOC 2 style checks run daily.",
        he: "כל endpoint שמשנה מצב דורש מפתח API, ובדיקות בסגנון SOC 2 רצות כל יום.",
      },
      {
        en: "Tested with pytest, Vitest and Playwright on iPhone, Android and desktop. axe reports no WCAG 2.1 AA issues.",
        he: "נבדק עם pytest, Vitest ו-Playwright על אייפון, אנדרואיד ומחשב. axe לא מוצא בעיות WCAG 2.1 AA.",
      },
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "nmap", "Scapy", "Docker"],
    link: "https://github.com/SaharHalili95/netsentinel",
    demoLink: "https://saharhalili95.github.io/netsentinel/",
  },
  {
    id: "linuxmaster",
    title: "Linux Master",
    featured: true,
    image: "/images/projects/linuxmaster.webp",
    imageKind: "phone",
    tagline: { en: "Study for a Linux certification on your phone", he: "להתכונן להסמכת לינוקס מהטלפון" },
    summary: {
      en: "The idea is to study for a Linux certification from your phone, whenever you have a few minutes. 80 short units in 10 parts cover every LPIC-1 objective plus RHCSA and LFCS topics, in English and Hebrew. It ends with three mock exams, and the original trivia game is still there for extra practice.",
      he: "הרעיון הוא להתכונן להסמכת לינוקס מהטלפון, בכל פעם שיש כמה דקות פנויות. 80 יחידות קצרות ב-10 חלקים מכסות את כל יעדי LPIC-1 ונושאים מ-RHCSA ו-LFCS, בעברית ובאנגלית. בסוף יש שלושה מבחני דמה, ומשחק הטריוויה המקורי נשאר לתרגול נוסף.",
    },
    highlights: [
      {
        en: "Choose LPIC-1 (71 units), RHCSA (56) or LFCS (49) and you see only that track's units. Progress is saved for each track.",
        he: "בוחרים LPIC-1 (71 יחידות), RHCSA (56) או LFCS (49) ורואים רק את היחידות של אותו מסלול. ההתקדמות נשמרת לכל מסלול.",
      },
      {
        en: "Answers run in a simulated shell or come from output recorded on real Ubuntu and AlmaLinux machines.",
        he: "התשובות רצות במעטפת מדומה או מגיעות מפלט שהוקלט על מכונות Ubuntu ו-AlmaLinux אמיתיות.",
      },
      {
        en: "The LPIC-1 mock exam has 60 questions, a 90-minute timer and a 500/800 pass mark. In CI, Playwright plays every unit on three phones.",
        he: "במבחן הדמה של LPIC-1 יש 60 שאלות, טיימר של 90 דקות וציון עובר 500 מתוך 800. ב-CI, Playwright משחק כל יחידה על שלושה טלפונים.",
      },
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "PWA", "Linux", "Bash", "Playwright", "Docker", "GitHub Actions", "Lighthouse CI"],
    link: "https://github.com/SaharHalili95/linux-master",
    demoLink: "https://saharhalili95.github.io/linux-master/",
  },
  {
    id: "easymat",
    title: "EasyMat",
    featured: true,
    image: "/images/projects/easymat.webp",
    tagline: { en: "Ask a Bagrut math question and get the solution step by step", he: "שואלים שאלה במתמטיקה לבגרות ומקבלים פתרון שלב אחר שלב" },
    summary: {
      en: "Students preparing for the Bagrut (3, 4 or 5 units) ask a question in Hebrew or English and get a step-by-step answer based on Bagrut material. There's a practice mode with real exam questions, and you can photograph a handwritten equation to get it solved.",
      he: "תלמידים שמתכוננים לבגרות (3, 4 או 5 יחידות) שואלים בעברית או באנגלית ומקבלים פתרון שלב אחר שלב, לפי חומר הבגרות. יש מצב תרגול עם שאלות אמיתיות ממבחנים, ואפשר לצלם משוואה בכתב יד ולקבל את הפתרון.",
    },
    highlights: [
      {
        en: "RAG over an Obsidian knowledge base stored in Pinecone. The sync uploads only the notes that changed.",
        he: "RAG על בסיס ידע מ-Obsidian ששמור ב-Pinecone. הסנכרון מעלה רק הערות שהשתנו.",
      },
      {
        en: "Answers stream from the Claude API, and prompt caching cuts model costs by about 90%.",
        he: "התשובות מגיעות בסטרימינג מה-API של Claude, ו-prompt caching חוסך כ-90% מעלות המודל.",
      },
      {
        en: "Over 100 Vitest tests, including streaming, refusals, errors and rate limiting in the chat route.",
        he: "יותר מ-100 בדיקות Vitest, כולל סטרימינג, סירובים, שגיאות והגבלת קצב בנתיב הצ'אט.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Claude API", "Pinecone", "RAG", "KaTeX", "Tailwind CSS", "Vitest"],
    link: "https://github.com/SaharHalili95/easymat",
    demoLink: "https://saharhalili95.github.io/easymat-landing/",
  },
  {
    id: "salarynet",
    title: "SalaryNet",
    featured: true,
    image: "/images/projects/salarynet.webp",
    tagline: { en: "Payroll, attendance and payslips, where each role sees only its own part", he: "שכר, נוכחות ותלושים, וכל תפקיד רואה רק את מה שמותר לו" },
    summary: {
      en: "Handles employees, departments, attendance, monthly payroll and payslips. The API is in .NET 8 and there are two front ends, Vue 3 and Angular, both in English and Hebrew. Admins, HR and employees each see only what their role allows.",
      he: "מנהלת עובדים, מחלקות, נוכחות, שכר חודשי ותלושים. ה-API כתוב ב-.NET 8 ויש שני ממשקים, Vue 3 ו-Angular, שניהם בעברית ובאנגלית. מנהל, משאבי אנוש ועובד רואים רק מה שמותר להם.",
    },
    highlights: [
      {
        en: "Uses Clean Architecture. A unique index stops duplicate payslips, even when two requests arrive at once.",
        he: "בנויה ב-Clean Architecture. אינדקס ייחודי מונע תלוש כפול גם כששתי בקשות מגיעות באותו רגע.",
      },
      {
        en: "JWT roles, per-resource authorization to prevent IDOR, account lockout and a password policy.",
        he: "תפקידים עם JWT, הרשאות לכל משאב כדי למנוע IDOR, נעילת חשבון ומדיניות סיסמאות.",
      },
      {
        en: "162 xUnit tests run against SQL Server in Testcontainers, and Playwright tests run on iPhone and Android, all in CI.",
        he: "162 בדיקות xUnit רצות מול SQL Server ב-Testcontainers, ובדיקות Playwright רצות על אייפון ואנדרואיד. הכול ב-CI.",
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
    id: "salsmart",
    title: "SalSmart",
    featured: true,
    image: "/images/projects/salsmart.webp",
    tagline: { en: "Compares a full grocery basket across Israeli supermarkets", he: "משווה סל קניות שלם בין רשתות השיווק" },
    summary: {
      en: "Israeli supermarket chains have to publish their prices every day. SalSmart takes those files, about 1.6 million prices per run, converts their different XML formats into PostgreSQL, and lets you compare a full basket across the stores in your city.",
      he: "רשתות השיווק בישראל חייבות לפרסם את המחירים שלהן כל יום. SalSmart לוקח את הקבצים האלה, כ-1.6 מיליון מחירים בכל הרצה, ממיר את פורמטי ה-XML השונים ל-PostgreSQL, ומאפשר להשוות סל קניות שלם בין החנויות בעיר שלכם.",
    },
    highlights: [
      {
        en: "XML is parsed as a stream, so a 34 MB file takes about 1 MB of memory.",
        he: "ה-XML מפוענח בסטרימינג, כך שקובץ של 34MB תופס כ-1MB בזיכרון.",
      },
      {
        en: "The Kubernetes setup lives in the repo with Kustomize. CI deploys it to a kind cluster and runs a smoke test.",
        he: "הגדרות ה-Kubernetes נמצאות בריפו עם Kustomize. ה-CI מעלה אותן לאשכול kind ומריץ בדיקת עשן.",
      },
      {
        en: "Price-drop alerts go through RabbitMQ, with Prometheus and Grafana for monitoring.",
        he: "התראות על ירידת מחיר עוברות דרך RabbitMQ, והניטור ב-Prometheus ו-Grafana.",
      },
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Kubernetes", "Kustomize", "RabbitMQ", "Prometheus", "Grafana"],
    link: "https://github.com/SaharHalili95/price-comparison-platform",
    demoLink: "https://saharhalili95.github.io/price-comparison-platform/",
  },
  {
    id: "codemate",
    title: "CodeMate AI",
    tagline: { en: "Upload a codebase and ask it questions", he: "מעלים קוד ושואלים עליו שאלות" },
    summary: {
      en: "Upload a codebase and ask about it in a chat that retrieves the relevant code as context. It works with OpenAI or Claude, and the demo runs in your browser with your own OpenAI key.",
      he: "מעלים בסיס קוד ושואלים עליו בצ'אט ששולף את הקוד הרלוונטי כהקשר. זה עובד עם OpenAI או Claude, והדמו רץ בדפדפן עם מפתח OpenAI שלכם.",
    },
    technologies: ["Python", "FastAPI", "ChromaDB", "RAG", "React", "TypeScript"],
    link: "https://github.com/SaharHalili95/codemate-ai",
    demoLink: "https://saharhalili95.github.io/codemate-ai/",
  },
  {
    id: "meshmind",
    title: "MeshMind AI",
    tagline: { en: "An agent that learns to route network traffic", he: "סוכן שלומד לנתב תעבורת רשת" },
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
    tagline: { en: "Send a product name and get a full product page in Hebrew", he: "שולחים שם מוצר ומקבלים דף מוצר מלא בעברית" },
    summary: {
      en: "A Telegram bot with a web interface. Send a product name or SKU and it writes a full Hebrew product page for WordPress, using Claude's web search.",
      he: "בוט טלגרם עם ממשק ווב. שולחים שם מוצר או מק\"ט, והוא כותב דף מוצר מלא בעברית ל-WordPress, בעזרת חיפוש הרשת של Claude.",
    },
    technologies: ["Python", "Claude API", "Telegram Bot API", "Flask"],
    link: "https://github.com/SaharHalili95/nitai-bot",
  },
  {
    id: "crypto",
    title: "CryptoPortfolio",
    tagline: { en: "Practice crypto trading with fake money", he: "תרגול מסחר בקריפטו בלי כסף אמיתי" },
    summary: {
      en: "Live market data, a simulator that starts you with a virtual $10K and tracks profit and loss, price alerts and a market heatmap.",
      he: "נתוני שוק חיים, סימולטור שמתחיל עם 10,000 דולר וירטואליים ועוקב אחרי רווח והפסד, התראות מחיר ומפת חום של השוק.",
    },
    technologies: ["React", "TypeScript", "Recharts", "CoinGecko API"],
    link: "https://github.com/SaharHalili95/crypto-portfolio",
    demoLink: "https://saharhalili95.github.io/crypto-portfolio/",
  },
  {
    id: "interview",
    title: "Interview Prep Tracker",
    tagline: { en: "Track your interview practice", he: "מעקב אחרי תרגול לראיונות" },
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
    tagline: { en: "A game about managing a budget", he: "משחק על ניהול תקציב" },
    summary: {
      en: "Monthly budget challenges with 5 levels, 8 achievements and a report on how you did, in English and Hebrew.",
      he: "אתגרי תקציב חודשיים עם 5 שלבים, 8 הישגים ודוח על איך הלך לכם, בעברית ובאנגלית.",
    },
    technologies: ["React", "TypeScript", "Vite"],
    link: "https://github.com/SaharHalili95/budget-balance-game",
    demoLink: "https://saharhalili95.github.io/budget-balance-game/",
  },
  {
    id: "tictactoe",
    title: "Multiplayer Tic Tac Toe",
    tagline: { en: "Play a friend or the computer", he: "לשחק נגד חבר או נגד המחשב" },
    summary: {
      en: "Play a friend over a direct WebRTC connection with chat, or play a Minimax opponent from easy to unbeatable. In Hebrew, English and Arabic.",
      he: "משחק נגד חבר בחיבור WebRTC ישיר עם צ'אט, או נגד יריב Minimax מקל ועד בלתי מנוצח. בעברית, באנגלית ובערבית.",
    },
    technologies: ["JavaScript", "WebRTC", "PeerJS"],
    link: "https://github.com/SaharHalili95/multiplayer-tictactoe",
    demoLink: "https://saharhalili95.github.io/multiplayer-tictactoe/",
  },
  {
    id: "reaction",
    title: "Reaction Speed Test",
    tagline: { en: "Games that measure your reaction time", he: "משחקים שמודדים זמן תגובה" },
    summary: {
      en: "Three reflex games, a multiplayer mode, a leaderboard and a training mode, with personal bests and charts of past results.",
      he: "שלושה משחקי תגובה, מצב רב-משתתפים, לוח תוצאות ומצב אימון, עם שיאים אישיים וגרפים של תוצאות קודמות.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/SaharHalili95/reaction-speed-test",
    demoLink: "https://saharhalili95.github.io/reaction-speed-test/",
  },
  {
    id: "rambo",
    title: "Rambo's Pit Bull Project",
    tagline: { en: "A personal project about pit bulls", he: "פרויקט אישי על פיטבולים" },
    summary: {
      en: "An awareness project about pit bulls, starring my dog Rambo. It has temperament data, articles on the breed's history and laws, a training guide and rescue organizations, in Hebrew and English.",
      he: "פרויקט להעלאת המודעות לפיטבולים, בכיכובו של הכלב שלי רמבו. יש בו נתוני טמפרמנט, כתבות על ההיסטוריה ועל החוקים, מדריך אילוף ועמותות, בעברית ובאנגלית.",
    },
    technologies: ["React", "TypeScript", "Vite"],
    internalLink: "/rambo",
  },
];
