import "@fontsource-variable/frank-ruhl-libre/index.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { education, experience, military, profile, projects, type Lang, type Project } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";
import ProjectGraph, { type GraphNode, type Group } from "./ProjectGraph";
import "./personal.css";

const copy: Record<Lang, Record<string, string>> = {
  en: {
    intro: "I'm a software developer. I build tools for security and for learning, teach math and Python at a high school in Modi'in, and take on freelance projects.",
    looking: "I studied computer science at HIT, and I'm looking for my first full-time job as a developer.",
    security: "Security",
    learning: "Learning",
    other: "Other projects",
    background: "Background",
    tech: "Technologies",
    contact: "Contact",
    code: "code",
    details: "details",
    cv: "CV",
    lang: "עברית",
    copy: "copy",
    copied: "copied",
    open: "Open it",
    more: "more",
    smaller: "Smaller projects",
    mail: "Email",
    now: "Present",
    freelance: "Freelance software developer",
    graph: "Map of my main projects",
  },
  he: {
    intro: "אני מפתח תוכנה. אני בונה כלים לאבטחה וללמידה, מלמד מתמטיקה ו-Python בתיכון במודיעין, ועובד גם כפרילנסר.",
    looking: "למדתי מדעי המחשב ב-HIT, ואני מחפש את המשרה המלאה הראשונה שלי כמפתח.",
    security: "אבטחה",
    learning: "למידה",
    other: "עוד פרויקטים",
    background: "רקע",
    tech: "טכנולוגיות",
    contact: "יצירת קשר",
    code: "קוד",
    details: "פרטים",
    cv: "קורות חיים",
    lang: "English",
    copy: "העתקה",
    copied: "הועתק",
    open: "לפתיחה",
    more: "עוד",
    smaller: "פרויקטים קטנים",
    mail: "מייל",
    now: "היום",
    freelance: "מפתח תוכנה כפרילנסר",
    graph: "מפה של הפרויקטים המרכזיים שלי",
  },
};

const SECURITY = ["hardengarden", "netsentinel"];
const LEARNING = ["linuxmaster", "easymat"];
const byId = (ids: string[]) => ids.map((id) => projects.find((p) => p.id === id)!);

const MAIN_OTHER = ["salarynet", "salsmart", "codemate", "meshmind", "nitaibot"];
const CORE_TECH = ["C#", ".NET", "TypeScript", "React", "Python", "FastAPI", "SQL Server", "PostgreSQL", "Linux", "Docker", "Kubernetes", "Claude API", "RAG", "Playwright", "GitHub Actions"];

const PROOF: Record<string, Record<Lang, string>> = {
  hardengarden: { en: "12 checks, signed releases, fixes tested on 3 Linux versions", he: "12 בדיקות, גרסאות חתומות, תיקונים שנבדקו על 3 גרסאות לינוקס" },
  netsentinel: { en: "Live alerts over WebSocket, no WCAG 2.1 AA issues in axe", he: "התראות חיות ב-WebSocket, axe לא מוצא בעיות WCAG 2.1 AA" },
  linuxmaster: { en: "80 units, 3 certification tracks, 3 mock exams", he: "80 יחידות, 3 מסלולי הסמכה, 3 מבחני דמה" },
  easymat: { en: "Over 100 tests, about 90% lower model cost with prompt caching", he: "יותר מ-100 בדיקות, חיסכון של כ-90% בעלות המודל עם prompt caching" },
  salarynet: { en: "162 xUnit tests, Vue 3 and Angular front ends", he: "162 בדיקות xUnit, ממשקי Vue 3 ו-Angular" },
  salsmart: { en: "1.6 million prices per run, deployed to Kubernetes in CI", he: "1.6 מיליון מחירים בכל הרצה, פריסה ל-Kubernetes ב-CI" },
};

const LAYOUT: [string, Group, number, number][] = [
  ["hardengarden", "security", 0.74, 0.16],
  ["netsentinel", "security", 0.88, 0.46],
  ["linuxmaster", "learning", 0.25, 0.17],
  ["easymat", "learning", 0.12, 0.5],
  ["salarynet", "other", 0.28, 0.84],
  ["salsmart", "other", 0.74, 0.84],
];

function Row({ p, c, pick, onActive }: { p: Project; c: Record<string, string>; pick: (t: Record<Lang, string>) => string; onActive: (id: string | null) => void }) {
  const href = p.demoLink ?? (p.internalLink ? `#${p.internalLink}` : p.link);
  const image = p.image ? getImagePath(p.image) : undefined;
  return (
    <li
      className={PROOF[p.id] ? "row is-main" : "row"}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") onActive(p.id); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") onActive(null); }}
    >
      <p className="title">
        <a href={href} className="name">{p.title}</a>
        {p.link && <a href={p.link} className="quiet code">{c.code}</a>}
      </p>
      <p className="tag">{pick(p.tagline)}</p>
      {PROOF[p.id] && <p className="proof">{pick(PROOF[p.id])}</p>}
      {p.highlights && (
        <details>
          <summary>
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
            {c.more}
          </summary>
          <div className="more">
            {image && <img src={image} alt="" loading="lazy" className={p.imageKind === "phone" ? "is-phone" : undefined} />}
            <p>{pick(p.summary)}</p>
            <ul>
              {p.highlights.map((h) => (
                <li key={h.en}>{pick(h)}</li>
              ))}
            </ul>
          </div>
        </details>
      )}
    </li>
  );
}

function CopyEmail({ idle, done }: { idle: string; done: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <button
      className="copy"
      data-copied={copied}
      onClick={() => {
        void navigator.clipboard?.writeText(profile.email).then(() => {
          setCopied(true);
          clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setCopied(false), 1600);
        });
      }}
    >
      <span>{idle}</span>
      <span aria-live="polite">{copied ? done : ""}</span>
    </button>
  );
}

export default function Personal() {
  const { lang, pick, toggle } = useLang();
  const c = copy[lang];
  const small = projects.filter((p) => !SECURITY.includes(p.id) && !LEARNING.includes(p.id) && !MAIN_OTHER.includes(p.id));
  const [active, setActive] = useState<string | null>(null);
  const [focus, setFocus] = useState<Group | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const head = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const nodes = useMemo<GraphNode[]>(
    () => LAYOUT.map(([id, group, x, y]) => ({ project: projects.find((p) => p.id === id)!, group, x, y })),
    [],
  );

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    if (head.current) io.observe(head.current);
    return () => io.disconnect();
  }, []);

  // The section in the middle of the screen lights up its part of the map.
  useEffect(() => {
    const sections = content.current!.querySelectorAll<HTMLElement>("[data-group]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setFocus(e.target.getAttribute("data-group") as Group);
          else if (e.target.getAttribute("data-group") !== null) setFocus((f) => (f === e.target.getAttribute("data-group") ? null : f));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const switchLang = () => {
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(() => flushSync(toggle));
    } else {
      toggle();
    }
  };

  const job = experience[0];
  return (
    <div className="page">
      <div className="bar" data-on={scrolled}>
        <div>
          <img src={getImagePath(profile.photo)} alt="" width="26" height="26" />
          <strong>{pick(profile.name)}</strong>
          <a href={`mailto:${profile.email}`} className="quiet">{c.contact}</a>
        </div>
      </div>
      <button className="lang quiet" onClick={switchLang}>{c.lang}</button>
      <main className="layout">
        <div ref={head} className="intro">
          <h1 className="in" style={{ "--d": 0 } as React.CSSProperties}>{pick(profile.name)}</h1>
          <p className="lead in" style={{ "--d": 1 } as React.CSSProperties}>{c.intro}</p>
          <p className="in" style={{ "--d": 2 } as React.CSSProperties}>{c.looking}</p>
          <p className="links top in" style={{ "--d": 3 } as React.CSSProperties}>
            <a href={`mailto:${profile.email}`}>{c.mail}</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
            <a href={getImagePath(profile.cv)} download>{c.cv}</a>
          </p>
        </div>

        <aside className="map">
          <ProjectGraph nodes={nodes} active={active} focus={scrolled ? focus : null} onActive={setActive} label={c.graph} open={c.open} code={c.code} tagline={(p) => pick(p.tagline)} />
        </aside>

        <div ref={content} className="content">
          <section className="in" style={{ "--d": 4 } as React.CSSProperties} data-group="security">
            <h2 className="is-security">{c.security}</h2>
            <ul className="rows">{byId(SECURITY).map((p) => <Row key={p.id} p={p} c={c} pick={pick} onActive={setActive} />)}</ul>
          </section>
          <section className="in" style={{ "--d": 5 } as React.CSSProperties} data-group="learning">
            <h2 className="is-learning">{c.learning}</h2>
            <ul className="rows">{byId(LEARNING).map((p) => <Row key={p.id} p={p} c={c} pick={pick} onActive={setActive} />)}</ul>
          </section>
          <section className="reveal" data-group="other">
            <h2 className="is-other">{c.other}</h2>
            <ul className="rows">{byId(MAIN_OTHER).map((p) => <Row key={p.id} p={p} c={c} pick={pick} onActive={setActive} />)}</ul>
            <details className="smaller">
              <summary>
                <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
                {c.smaller}
              </summary>
              <ul className="rows">{small.map((p) => <Row key={p.id} p={p} c={c} pick={pick} onActive={setActive} />)}</ul>
            </details>
          </section>

          <section className="reveal">
            <h2>{c.background}</h2>
            <dl className="times">
              <dt>{c.now}</dt>
              <dd>{c.freelance}</dd>
              <dt>{pick(job.period)}</dt>
              <dd>{pick(job.role)}, {pick(job.place)}</dd>
              <dt dir="ltr">{education.period}</dt>
              <dd>{pick(education.degree)}, {pick(education.school)}</dd>
              <dt>{pick(military.reservePeriod)}</dt>
              <dd>{pick(military.org)}: {pick(military.reserve)}</dd>
              <dt dir="ltr">{military.period}</dt>
              <dd>{pick(military.org)}: {pick(military.points[0])}</dd>
            </dl>
          </section>

          <section className="reveal">
            <h2>{c.tech}</h2>
            <p dir="ltr" className="tech">{CORE_TECH.join(", ")}</p>
          </section>

          <section className="reveal">
            <h2>{c.contact}</h2>
            <p className="links">
              <span className="mail">
                <a href={`mailto:${profile.email}`} dir="ltr">{profile.email}</a>
                <CopyEmail idle={c.copy} done={c.copied} />
              </span>
              <a href={profile.whatsapp}>WhatsApp</a>
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.github}>GitHub</a>
              <a href={getImagePath(profile.cv)} download>{c.cv}</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
