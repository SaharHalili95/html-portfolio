import { motion } from "framer-motion";
import Section from "./Section";
import { servicesData } from "../data/portfolioData";
import { projectAnchor, scrollToId } from "../utils/anchors";

const Services = () => {
  return (
    <Section id="services" title="Work With Me">
      <p className="services-intro">{servicesData.intro}</p>
      <div className="services-grid">
        {servicesData.items.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <i className={`fas ${service.icon} service-icon`} aria-hidden="true"></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={`#${projectAnchor(service.proof)}`} onClick={scrollToId(projectAnchor(service.proof))} className="service-proof">
              Example: {service.proof} <i className="fas fa-arrow-right"></i>
            </a>
          </motion.div>
        ))}
      </div>
      <div className="services-cta">
        <a href="#contact" onClick={scrollToId("contact")} className="btn btn-primary">
          <i className="fas fa-paper-plane"></i> Tell Me What You Need
        </a>
      </div>
    </Section>
  );
};

export default Services;
