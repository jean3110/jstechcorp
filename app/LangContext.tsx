"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "pt";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // On first load, pick the language from a previous choice or the browser.
  useEffect(() => {
    const saved = localStorage.getItem("jstc-lang");
    if (saved === "en" || saved === "pt") {
      setLangState(saved);
      return;
    }
    const nav = navigator.language?.toLowerCase() ?? "en";
    setLangState(nav.startsWith("pt") ? "pt" : "en");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("jstc-lang", l);
    } catch {
      // ignore (private mode etc.)
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
