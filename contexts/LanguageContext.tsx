"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "en-US" | "pt-BR";

interface LanguageContextData {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en-US");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    const initialLanguage = savedLanguage || "en-US";

    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;

    if (!savedLanguage) {
      localStorage.setItem("language", initialLanguage);
    }
  }, []);

  function setLanguage(language: Language) {
    localStorage.setItem("language", language);
    setLanguageState(language);
    document.documentElement.lang = language;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
