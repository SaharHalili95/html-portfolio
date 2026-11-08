import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { education, experience, military, profile, projects, skills, type Lang, type Project } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";
import NetworkField from "./NetworkField";
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
  },
};

const SECURITY = ["hardengarden", "netsentinel"];
const LEARNING = ["linuxmaster", "easymat"];
const byId = (ids: string[]) => ids.map((id) => projects.find((p) => p.id === id)!);

// Follows the pointer on two independent critically damped springs, from wherever it currently is.
function useFloatingPreview() {
  const el = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const motion = useRef({ x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, raf: 0, last: 0, shown: false });

  useEffect(() => {
    const m = motion.current;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const W = 320;
    const H = 204;
    const place = (e: PointerEvent) => {
      const rtl = document.documentElement.dir === "rtl";
      const main = document.querySelector(".page main")!.getBoundingClientRect();
      const gutter = rtl ? main.left : innerWidth - main.right;
      // Beside the column when there is room, so it never covers the text being read.
      if (gutter >= W + 24) {
        const drift = (e.clientX - innerWidth / 2) * 0.02;
        m.tx = (rtl ? main.left - W - 8 : main.right + 8) + drift;
      } else {
        m.tx = Math.min(Math.max(e.clientX - W / 2, 12), innerWidth - W - 12);
      }
      const below = gutter >= W + 24 ? e.clientY - H / 2 : e.clientY + 28;
      m.ty = Math.min(Math.max(below, 60), innerHeight - H - 12);
    };
    const tick = (now: number) => {
      const dt = Math.min((now - m.last) / 1000, 0.05);
      m.last = now;
      const omega = 20;
      m.vx += (omega * omega * (m.tx - m.x) - 2 * omega * m.vx) * dt;
      m.vy += (omega * omega * (m.ty - m.y) - 2 * omega * m.vy) * dt;
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      if (el.current) el.current.style.translate = `${m.x}px ${m.y}px`;
      m.raf = requestAnimationFrame(tick);
    };
    const over = (e: PointerEvent) => {
      const row = (e.target as Element).closest?.("[data-preview]") as HTMLElement | null;
      place(e);
      if (row) {
        if (!m.shown) {
          m.x = m.tx;
          m.y = m.ty;
          m.vx = m.vy = 0;
          m.shown = true;
          m.last = performance.now();
          m.raf = requestAnimationFrame(tick);
        }
        setSrc(row.dataset.preview!);
      } else if (m.shown) {
        m.shown = false;
        cancelAnimationFrame(m.raf);
        setSrc(null);
      }
    };
    window.addEventListener("pointermove", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", over);
      cancelAnimationFrame(m.raf);
    };
  }, []);

  return { el, src };
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
  const other = projects.filter((p) => !SECURITY.includes(p.id) && !LEARNING.includes(p.id));
  const { el, src } = useFloatingPreview();
  const [scrolled, setScrolled] = useState(false);
  const head = useRef<HTMLElement>(null);
  const [lastSrc, setLastSrc] = useState<string | null>(null);
  if (src && src !== lastSrc) setLastSrc(src);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    if (head.current) io.observe(head.current);
    return () => io.disconnect();
  }, []);

  const switchLang = () => {
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(() => flushSync(toggle));
    } else {
      toggle();
    }
  };

  const Row = ({ p, index }: { p: Project; index: number }) => {
    const href = p.demoLink ?? (p.internalLink ? `#${p.internalLink}` : p.link);
    const image = p.image ? getImagePath(p.image) : undefined;
    return (
      <li className="row" style={{ "--i": index } as React.CSSProperties} data-preview={image}>
        <p>
          <a href={href} className="name">{p.title}</a>
          <span className="sep"> · </span>
          {pick(p.tagline)}
          {p.link && (
            <>
              <span className="sep"> · </span>
              <a href={p.link} className="quiet">{c.code}</a>
            </>
          )}
        </p>
        {p.highlights && (
          <details>
            <summary>
              <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
              {c.details}
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
  };

  const job = experience[0];
  return (
    <div className="page">
      <NetworkField />
      <div className="bar" data-on={scrolled}>
        <div>
          <img src={getImagePath(profile.photo)} alt="" width="26" height="26" />
          <strong>{pick(profile.name)}</strong>
          <a href={`mailto:${profile.email}`} className="quiet">{c.contact}</a>
        </div>
      </div>
      <button className="lang quiet" onClick={switchLang}>{c.lang}</button>
      <main>
        <header ref={head} className="in" style={{ "--d": 0 } as React.CSSProperties}>
          <img src={getImagePath(profile.photo)} alt="" width="72" height="72" />
          <h1>{pick(profile.name)}</h1>
        </header>
        <p className="in" style={{ "--d": 1 } as React.CSSProperties}>{c.intro}</p>
        <p className="in" style={{ "--d": 2 } as React.CSSProperties}>{c.looking}</p>

        <section className="in" style={{ "--d": 3 } as React.CSSProperties}>
          <h2>{c.security}</h2>
          <ul className="rows">{byId(SECURITY).map((p, i) => <Row key={p.id} p={p} index={i} />)}</ul>
        </section>
        <section className="in" style={{ "--d": 4 } as React.CSSProperties}>
          <h2>{c.learning}</h2>
          <ul className="rows">{byId(LEARNING).map((p, i) => <Row key={p.id} p={p} index={i} />)}</ul>
        </section>
        <section className="reveal">
          <h2>{c.other}</h2>
          <ul className="rows">{other.map((p, i) => <Row key={p.id} p={p} index={i} />)}</ul>
        </section>

        <section className="reveal">
          <h2>{c.background}</h2>
          <dl className="times">
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
          <p dir="ltr" className="tech">{skills.flatMap((g) => g.items).join(", ")}</p>
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
      </main>
      <div ref={el} className="float" data-on={!!src} aria-hidden="true">
        {lastSrc && <img src={lastSrc} alt="" />}
      </div>
    </div>
  );
}
