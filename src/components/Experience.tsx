import { motion } from "framer-motion";
import Section from "./Section";
import { experienceData, militaryData } from "../data/portfolioData";

const Experience = () => {
  return (
    <>
      <Section id="experience" title="Work Experience">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="job"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <h3>
              {job.title} – {job.company} | {job.period}
            </h3>
            <ul>
              {job.responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </Section>

      <Section id="military" title="Military Service">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <strong>{militaryData.service.organization}</strong> |{" "}
          {militaryData.service.period}
        </motion.p>
        <ul>
          {militaryData.service.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <strong>Reserve Service</strong> | {militaryData.reserve.period}
        </motion.p>
      </Section>
    </>
  );
};

export default Experience;
