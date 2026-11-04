import { useEffect, useRef, useState } from "react";
import { profile } from "../data/site";
import { getImagePath } from "../utils/paths";
import { useLang } from "./lang";
import { scrollToId } from "./scroll";

const SECTIONS = ["work", "services", "about"] as const;

export default function Nav() {
  const { t, pick, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    sheet.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => (e: { preventDefault: () => void }) => {
    setOpen(false);
    scrollToId(id)(e);
  };

  return (
    <header className={`nav${scrolled || open ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav-bar">
        <a href="#top" className="nav-brand" onClick={go("top")}>
          <img src={getImagePath(profile.photo)} alt="" width="28" height="28" />
          <span>{pick(profile.name)}</span>
        </a>
        <nav className="nav-links" aria-label={t.menu}>
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="nav-lang" onClick={toggle} aria-label={t.switchLangLabel}>
            {t.switchLang}
          </button>
          <a href="#contact" className="btn btn-primary btn-small nav-cta" onClick={go("contact")}>
            {t.talk}
          </a>
          <button
            ref={menuButton}
            type="button"
            className="nav-menu-button"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? t.closeMenu : t.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="nav-sheet" ref={sheet} className="nav-sheet" hidden={!open}>
        {[...SECTIONS, "contact" as const].map((id) => (
          <a key={id} href={`#${id}`} onClick={go(id)}>
            {t.nav[id]}
          </a>
        ))}
      </div>
    </header>
  );
}
