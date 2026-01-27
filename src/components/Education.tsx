import { motion } from "framer-motion";
import Section from "./Section";
import { educationData } from "../data/portfolioData";

const Education = () => {
  return (
    <Section id="education" title="Education">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <strong>{educationData.institution}</strong> | {educationData.period}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {educationData.degree}
      </motion.p>
    </Section>
  );
};

export default Education;
