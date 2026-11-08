import { profile } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";
import { scrollToId } from "./scroll";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">{t.headline}</h1>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary" onClick={scrollToId("contact")}>
            {t.primary}
          </a>
          <a href={getImagePath(profile.cv)} className="text-link" download>
            {t.cv} <i className="fas fa-chevron-right chev" aria-hidden="true" />
          </a>
        </div>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {t.availability}
        </p>
      </div>
      <figure className="hero-stage" aria-label={t.heroAlt}>
        <div className="device device-desktop">
          <img src={getImagePath("/images/projects/netsentinel.webp")} alt="" width="960" height="600" fetchPriority="high" />
        </div>
        <div className="device device-phone">
          <img src={getImagePath("/images/projects/linuxmaster.webp")} alt="" width="447" height="760" />
        </div>
      </figure>
    </section>
  );
}
