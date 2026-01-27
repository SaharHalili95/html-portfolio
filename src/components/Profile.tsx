import { motion } from "framer-motion";
import Section from "./Section";
import { profileData } from "../data/portfolioData";

const Profile = () => {
  return (
    <Section id="profile" title="Profile">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {profileData.summary}
      </motion.p>
    </Section>
  );
};

export default Profile;
