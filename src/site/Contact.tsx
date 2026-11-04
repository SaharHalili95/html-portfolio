import { profile } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";

export default function Contact() {
  const { t, pick } = useLang();
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner reveal">
        <h2 id="contact-title" className="contact-title">{t.contactTitle}</h2>
        <p className="contact-text">{t.contactText}</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {t.email}
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <i className="fab fa-whatsapp" aria-hidden="true" /> {t.whatsapp}
          </a>
        </div>
        <ul className="contact-list">
          <li><a href={`mailto:${profile.email}`} dir="ltr">{profile.email}</a></li>
          <li><a href={profile.phoneHref} dir="ltr">{profile.phone}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li>
            <a href={getImagePath(profile.cv)} download>
              {t.cv}
            </a>
          </li>
        </ul>
        <p className="contact-location">{pick(profile.location)}</p>
      </div>
    </section>
  );
}
