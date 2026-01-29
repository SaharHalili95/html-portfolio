import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "./Section";
import { projectsData } from "../data/portfolioData";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="project"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.15 }}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
        >
          <h3>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : project.isInternal ? (
              <Link to={project.internalLink || "/"}>{project.title}</Link>
            ) : (
              project.title
            )}
            {project.subtitle && ` | ${project.subtitle}`}
          </h3>
          <p>{project.description}</p>
          {project.technologies && (
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </Section>
  );
};

export default Projects;
