import { motion } from "framer-motion";
import { profileData, projectsData } from "../data/portfolioData";
import { getImagePath } from "../utils/paths";
import { scrollToId } from "../utils/anchors";

const liveCount = projectsData.filter((p) => p.demoLink).length;

const stats = [
  { value: String(liveCount), label: "live projects you can open and try" },
  { value: "B.Sc.", label: "Computer Science, HIT" },
  { value: "EN · HE", label: "bilingual products with full RTL" },
];

const Hero = () => {
  return (
    <section id="profile" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero-badge">
          <span className="hero-dot" aria-hidden="true"></span>
          {profileData.availability}
        </span>
        <h2 className="hero-headline">{profileData.headline}</h2>
        <p className="hero-intro">{profileData.intro}</p>

        <div className="hero-actions">
          <a href="#contact" onClick={scrollToId("contact")} className="btn btn-primary">
            <i className="fas fa-handshake"></i> Let's Work Together
          </a>
          <a href={getImagePath(profileData.cv)} className="btn btn-secondary" download>
            <i className="fas fa-file-arrow-down"></i> Download CV
          </a>
          <a href="#projects" onClick={scrollToId("projects")} className="btn btn-ghost">
            See My Work <i className="fas fa-arrow-down"></i>
          </a>
        </div>

        <ul className="hero-stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Hero;
