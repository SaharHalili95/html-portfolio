import { motion } from "framer-motion";
import Section from "./Section";
import { skillsData } from "../data/portfolioData";

const SkillCategory = ({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: string[];
  delay: number;
}) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <strong>{title}:</strong>{" "}
    {skills.map((skill, index) => (
      <motion.span
        key={skill}
        className="skill-tag"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + index * 0.05 }}
        whileHover={{ scale: 1.1, backgroundColor: "#007acc", color: "#fff" }}
      >
        {skill}
      </motion.span>
    ))}
  </motion.li>
);

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <ul className="skills-list">
        <SkillCategory title="Languages" skills={skillsData.languages} delay={0.2} />
        <SkillCategory title="Tech Stack" skills={skillsData.techStack} delay={0.3} />
        <SkillCategory title="AI Tools" skills={skillsData.aiTools} delay={0.4} />
        <SkillCategory title="Dev Tools" skills={skillsData.devTools} delay={0.5} />
        <SkillCategory title="Practices" skills={skillsData.practices} delay={0.6} />
      </ul>
    </Section>
  );
};

export default Skills;
