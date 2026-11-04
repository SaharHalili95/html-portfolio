import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "./Section";
import { projectsData } from "../data/portfolioData";
import { getImagePath } from "../utils/paths";
import { projectAnchor } from "../utils/anchors";

type Project = (typeof projectsData)[number];

const ProjectTitle = ({ project }: { project: Project }) =>
  project.isInternal ? (
    <Link to={project.internalLink || "/"}>{project.title}</Link>
  ) : (
    <>{project.title}</>
  );

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="project-links">
    {project.demoLink && (
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
        <i className="fas fa-arrow-up-right-from-square"></i> Live Demo
      </a>
    )}
    {project.extraLinks?.map((extra) => (
      <a key={extra.url} href={extra.url} target="_blank" rel="noopener noreferrer" className="code-link">
        {extra.label}
      </a>
    ))}
    {project.link && (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="code-link">
        <i className="fab fa-github"></i> Code
      </a>
    )}
    {project.isInternal && (
      <Link to={project.internalLink || "/"} className="demo-link">
        <i className="fas fa-arrow-right"></i> Visit Site
      </Link>
    )}
  </div>
);

const Projects = () => {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Featured Projects">
      <div className="featured-list">
        {featured.map((project) => (
          <motion.article
            key={project.title}
            id={projectAnchor(project.title)}
            className="project featured"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            {project.image && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-shot${project.imageKind === "phone" ? " phone" : ""}`}
                aria-label={`Open the ${project.title} live demo`}
              >
                <img
                  src={getImagePath(project.image)}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            )}
            <div className="project-body">
              <h3>
                <ProjectTitle project={project} />
              </h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <i className="fas fa-check"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <ProjectLinks project={project} />
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="more-heading">More Projects</h3>
      <div className="more-grid">
        {others.map((project) => (
          <motion.article
            key={project.title}
            id={projectAnchor(project.title)}
            className="project compact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
          >
            <h4>
              <ProjectTitle project={project} />
            </h4>
            <p className="project-subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.slice(0, 5).map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <ProjectLinks project={project} />
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
