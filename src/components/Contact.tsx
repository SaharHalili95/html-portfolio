import { motion } from "framer-motion";
import Section from "./Section";
import { contactData, profileData } from "../data/portfolioData";
import { getImagePath } from "../utils/paths";

const items = [
  { icon: "fas fa-envelope", label: contactData.email, href: `mailto:${contactData.email}` },
  { icon: "fas fa-phone", label: contactData.phone, href: `tel:+972${contactData.phone.replace(/-/g, "").slice(1)}` },
  { icon: "fab fa-whatsapp", label: "WhatsApp", href: contactData.whatsapp },
  { icon: "fab fa-linkedin", label: "LinkedIn", href: profileData.social.linkedin },
  { icon: "fab fa-github", label: "GitHub", href: profileData.social.github },
  { icon: "fas fa-location-dot", label: contactData.location },
];

const Contact = () => {
  return (
    <Section id="contact" title="Let's Work Together">
      <p className="contact-intro">
        A role on your team or a project you need built: tell me what you need and I'll get back to you.
      </p>
      <ul className="contact-info">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <i className={item.icon} aria-hidden="true"></i>
            {item.href ? (
              <a
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </motion.li>
        ))}
      </ul>

      <div className="contact-actions">
        <a href={`mailto:${contactData.email}`} className="btn btn-primary">
          <i className="fas fa-envelope"></i> Send an Email
        </a>
        <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <i className="fab fa-whatsapp"></i> Message on WhatsApp
        </a>
        <a href={getImagePath(profileData.cv)} className="btn btn-ghost" download>
          <i className="fas fa-file-arrow-down"></i> Download CV
        </a>
      </div>
    </Section>
  );
};

export default Contact;
