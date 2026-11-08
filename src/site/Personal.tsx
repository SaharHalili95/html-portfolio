import { education, experience, military, profile, projects, skills, type Lang, type Project } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";
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
  },
};

const SECURITY = ["hardengarden", "netsentinel"];
const LEARNING = ["linuxmaster", "easymat"];
const byId = (ids: string[]) => ids.map((id) => projects.find((p) => p.id === id)!);

export default function Personal() {
  const { lang, pick, toggle } = useLang();
  const c = copy[lang];
  const other = projects.filter((p) => !SECURITY.includes(p.id) && !LEARNING.includes(p.id));

  const Row = ({ p }: { p: Project }) => {
    const href = p.demoLink ?? (p.internalLink ? `#${p.internalLink}` : p.link);
    return (
      <li className="row">
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
            <summary>{c.details}</summary>
            <p>{pick(p.summary)}</p>
            <ul>
              {p.highlights.map((h) => (
                <li key={h.en}>{pick(h)}</li>
              ))}
            </ul>
          </details>
        )}
      </li>
    );
  };

  const job = experience[0];
  return (
    <div className="page">
      <button className="lang quiet" onClick={toggle}>{c.lang}</button>
      <main>
        <header>
          <img src={getImagePath(profile.photo)} alt="" width="72" height="72" />
          <h1>{pick(profile.name)}</h1>
        </header>
        <p>{c.intro}</p>
        <p>{c.looking}</p>

        <section>
          <h2>{c.security}</h2>
          <ul className="rows">{byId(SECURITY).map((p) => <Row key={p.id} p={p} />)}</ul>
        </section>
        <section>
          <h2>{c.learning}</h2>
          <ul className="rows">{byId(LEARNING).map((p) => <Row key={p.id} p={p} />)}</ul>
        </section>
        <section>
          <h2>{c.other}</h2>
          <ul className="rows">{other.map((p) => <Row key={p.id} p={p} />)}</ul>
        </section>

        <section>
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

        <section>
          <h2>{c.tech}</h2>
          <p dir="ltr" className="tech">{skills.flatMap((g) => g.items).join(", ")}</p>
        </section>

        <section>
          <h2>{c.contact}</h2>
          <p className="links">
            <a href={`mailto:${profile.email}`} dir="ltr">{profile.email}</a>
            <a href={profile.whatsapp}>WhatsApp</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
            <a href={getImagePath(profile.cv)} download>{c.cv}</a>
          </p>
        </section>
      </main>
    </div>
  );
}
