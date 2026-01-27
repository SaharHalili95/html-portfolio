import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "profile";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || "profile";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main-container">
        <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
        <main className="content">
          <Profile />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
