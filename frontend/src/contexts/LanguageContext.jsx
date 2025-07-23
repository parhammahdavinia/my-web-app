import React, { createContext, useContext, useState, useEffect } from "react";
import { fa } from "../locales/fa";
import { en } from "../locales/en";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fa");
  const [translations, setTranslations] = useState(fa);

  useEffect(() => {
    // بارگذاری زبان از localStorage
    const savedLanguage = localStorage.getItem("language") || "fa";
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === "fa" ? fa : en);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setTranslations(newLanguage === "fa" ? fa : en);
    localStorage.setItem("language", newLanguage);

    // تغییر direction صفحه
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // اگر ترجمه پیدا نشد، کلید را برگردان
      }
    }

    // فقط رشته یا آرایه را برگردان، اگر آبجکت بود مقدار کلید را برگردان
    if (typeof value === "string" || Array.isArray(value)) {
      return value;
    } else {
      return key;
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    isRTL: language === "fa",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
