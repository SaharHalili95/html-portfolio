import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ui, type Lang, type UI } from "../data/site";

const STORAGE_KEY = "portfolio.lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "he") return saved;
  } catch {
    // Storage can be blocked; fall back to the browser language.
  }
  return navigator.language.toLowerCase().startsWith("he") ? "he" : "en";
}

interface LangValue {
  lang: Lang;
  t: UI;
  pick: (text: Record<Lang, string>) => string;
  toggle: () => void;
}

const LangContext = createContext<LangValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not saved; the choice still applies for this visit.
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "he" : "en")), []);
  const value = useMemo<LangValue>(
    () => ({ lang, t: ui[lang], pick: (text) => text[lang], toggle }),
    [lang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangValue {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used inside LangProvider");
  return value;
}
