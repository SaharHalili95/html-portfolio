import { motion } from "framer-motion";
import { profileData, navItems } from "../data/portfolioData";

interface SidebarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Sidebar = ({ activeSection, onNavClick }: SidebarProps) => {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-container">
        <motion.img
          src={profileData.image}
          alt={`${profileData.name}'s Logo`}
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h1>{profileData.name}</h1>
        <p className="title">{profileData.title}</p>
      </div>

      <nav>
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
              >
                <i className={`fas ${item.icon}`}></i> {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        <motion.a
          href={profileData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href={profileData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
