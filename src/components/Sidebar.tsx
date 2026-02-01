import { motion } from "framer-motion";
import { profileData, navItems } from "../data/portfolioData";
import { getImagePath } from "../utils/paths";

interface SidebarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Sidebar = ({ activeSection, onNavClick }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="profile-container">
        <motion.img
          src={getImagePath(profileData.image)}
          alt={`${profileData.name}'s Logo`}
          className="logo"
          whileHover={{ scale: 1.05 }}
        />
        <h1>{profileData.name}</h1>
        <p className="title">{profileData.title}</p>
      </div>

      <nav>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
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
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        <motion.a
          href={profileData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href={profileData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
      </div>
    </aside>
  );
};

export default Sidebar;
