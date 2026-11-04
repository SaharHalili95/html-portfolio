import { education, experience, military, skills } from "../data/site";
import { useLang } from "./lang";

export default function About() {
  const { t, pick } = useLang();
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <header className="section-head reveal">
        <h2 id="about-title" className="section-title">{t.aboutTitle}</h2>
        <p className="section-intro about-text">{t.aboutText}</p>
      </header>

      <div className="about-grid">
        <div className="about-timeline reveal">
          <h3>{t.experience}</h3>
          {experience.map((job) => (
            <div key={job.role.en} className="entry">
              <p className="entry-head">
                <strong>{pick(job.role)}</strong>
                <span className="entry-period">{pick(job.period)}</span>
              </p>
              <p className="entry-place">{pick(job.place)}</p>
              <ul>
                {job.points.map((p) => (
                  <li key={p.en}>{pick(p)}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>{t.military}</h3>
          <div className="entry">
            <p className="entry-head">
              <strong>{pick(military.org)}</strong>
              <span className="entry-period" dir="ltr">{military.period}</span>
            </p>
            <ul>
              {military.points.map((p) => (
                <li key={p.en}>{pick(p)}</li>
              ))}
            </ul>
            <p className="entry-head entry-sub">
              <strong>{t.reserve}</strong>
              <span className="entry-period">{pick(military.reservePeriod)}</span>
            </p>
            <ul>
              <li>{pick(military.reserve)}</li>
            </ul>
          </div>

          <h3>{t.education}</h3>
          <div className="entry">
            <p className="entry-head">
              <strong>{pick(education.degree)}</strong>
              <span className="entry-period" dir="ltr">{education.period}</span>
            </p>
            <p className="entry-place">{pick(education.school)}</p>
          </div>
        </div>

        <div className="skills reveal">
          <h3>{t.skills}</h3>
          <dl>
            {skills.map((group) => (
              <div key={group.label.en} className="skill-group">
                <dt>{pick(group.label)}</dt>
                <dd dir="ltr">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
