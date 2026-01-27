import { motion } from "framer-motion";
import Section from "./Section";
import { contactData } from "../data/portfolioData";

const Contact = () => {
  return (
    <Section id="contact" title="Contact Information">
      <ul className="contact-info">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <i className="fas fa-phone"></i> {contactData.phone}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <i className="fas fa-envelope"></i>{" "}
          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <i className="fas fa-map-marker-alt"></i> {contactData.location}
        </motion.li>
      </ul>

      <motion.div
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href={`mailto:${contactData.email}`}
          className="send-btn email-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(0,122,204,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.a>
      </motion.div>
    </Section>
  );
};

export default Contact;
