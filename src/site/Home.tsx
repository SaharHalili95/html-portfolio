import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import { useLang } from "./lang";
import Nav from "./Nav";
import Services from "./Services";
import { useReveal } from "./useReveal";
import Work from "./Work";
import "./site.css";

export default function Home() {
  const { t } = useLang();
  useReveal();
  return (
    <div className="site">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        {t.skip}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
