import { projects, services } from "../data/site";
import { useLang } from "./lang";
import { scrollToId } from "./scroll";

export default function Services() {
  const { t, pick } = useLang();
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <header className="section-head reveal">
        <h2 id="services-title" className="section-title">{t.servicesTitle}</h2>
        <p className="section-intro">{t.servicesIntro}</p>
      </header>
      <dl className="service-list">
        {services.map((s) => {
          const proof = projects.find((p) => p.id === s.proof)!;
          return (
            <div key={s.proof} className="service reveal">
              <dt>{pick(s.title)}</dt>
              <dd>
                <p>{pick(s.text)}</p>
                <a href={`#project-${proof.id}`} className="text-link" onClick={scrollToId(`project-${proof.id}`)}>
                  {t.example} {proof.title} <i className="fas fa-chevron-right chev" aria-hidden="true" />
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
      <div className="services-cta reveal">
        <a href="#contact" className="btn btn-primary" onClick={scrollToId("contact")}>
          {t.primary}
        </a>
      </div>
    </section>
  );
}
