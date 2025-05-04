import en from '../en.json';
import de from '../de.json';

import { useLanguage } from '../context/LanguageContext';

const locales = { en, de };

export const useTranslation = () => {
  const { language } = useLanguage();
  return locales[language] || locales.en;
};
