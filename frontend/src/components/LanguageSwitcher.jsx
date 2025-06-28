import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HiGlobe } from "react-icons/hi";

const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === "fa" ? "en" : "fa";
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
      title={t("language")}
    >
      <HiGlobe className="text-lg" />
      <span className="font-medium">{language === "fa" ? "EN" : "فا"}</span>
    </button>
  );
};

export default LanguageSwitcher;
