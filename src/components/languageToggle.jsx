import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "en" ? "Deutsch" : "English"}
      </button>
    </div>
  );
};

export default LanguageToggle;
