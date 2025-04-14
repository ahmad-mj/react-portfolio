import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="lang-toggle">
      {language === 'en' ? 'Deutsch' : 'English'}
    </button>
  );
};

export default LanguageToggle;
