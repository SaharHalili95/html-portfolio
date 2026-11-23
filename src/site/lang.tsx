import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ui, type Lang, type UI } from "../data/site";

interface LangValue {
  lang: Lang;
  t: UI;
  pick: (text: Record<Lang, string>) => string;
  toggle: () => void;
}

const LangContext = createContext<LangValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "he" : "en");
  }, [lang]);
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
