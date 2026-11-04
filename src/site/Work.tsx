import { Link } from "react-router-dom";
import { projects, type Project } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";

function Links({ project, primary }: { project: Project; primary?: boolean }) {
  const { t, pick } = useLang();
  return (
    <div className="links">
      {project.demoLink && (
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={primary ? "btn btn-primary" : "text-link"}>
          {t.demo}
          {!primary && <i className="fas fa-chevron-right chev" aria-hidden="true" />}
        </a>
      )}
      {project.internalLink && (
        <Link to={project.internalLink} className="text-link">
          {t.visit} <i className="fas fa-chevron-right chev" aria-hidden="true" />
        </Link>
      )}
      {project.extraLinks?.map((extra) => (
        <a key={extra.url} href={extra.url} target="_blank" rel="noopener noreferrer" className="text-link">
          {pick(extra.label)} <i className="fas fa-chevron-right chev" aria-hidden="true" />
        </a>
      ))}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
          {t.code} <i className="fas fa-chevron-right chev" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Chapter({ project, index }: { project: Project; index: number }) {
  const { t, pick } = useLang();
  const phone = project.imageKind === "phone";
  return (
    <article id={`project-${project.id}`} className={`chapter${index % 2 ? " is-alt" : ""}`} aria-labelledby={`${project.id}-title`}>
      <div className="chapter-head reveal">
        <h3 id={`${project.id}-title`} className="chapter-name">{project.title}</h3>
        <p className="chapter-tagline">{pick(project.tagline)}</p>
        <p className="chapter-summary">{pick(project.summary)}</p>
        <Links project={project} primary />
      </div>
      {project.image && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`shot reveal${phone ? " shot-phone" : ""}`}
          aria-label={`${t.demo}: ${project.title}`}
        >
          <img
            src={getImagePath(project.image)}
            alt=""
            loading="lazy"
            decoding="async"
            width={phone ? 447 : 960}
            height={phone ? 760 : 600}
          />
        </a>
      )}
      {project.highlights && (
        <ul className="facts reveal">
          {project.highlights.map((h) => (
            <li key={h.en}>{pick(h)}</li>
          ))}
        </ul>
      )}
      <p className="built-with reveal">
        <span>{t.builtWith}</span> {project.technologies.join(" · ")}
      </p>
    </article>
  );
}

export default function Work() {
  const { t, pick } = useLang();
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <header className="section-head reveal">
        <h2 id="work-title" className="section-title">{t.workTitle}</h2>
        <p className="section-intro">{t.workIntro}</p>
      </header>

      {featured.map((p, i) => (
        <Chapter key={p.id} project={p} index={i} />
      ))}

      <div className="more">
        <h2 className="section-title section-title-small reveal">{t.moreTitle}</h2>
        <ul className="more-list">
          {more.map((p) => (
            <li key={p.id} id={`project-${p.id}`} className="more-item reveal">
              <h3>{p.title}</h3>
              <p className="more-tagline">{pick(p.tagline)}</p>
              <p className="more-summary">{pick(p.summary)}</p>
              <p className="built-with">{p.technologies.join(" · ")}</p>
              <Links project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
