import en from '../de.json';
import de from '../en.json';

import { useLanguage } from '../context/LanguageContext';

const locales = { en, de };

export const useTranslation = () => {
  const { language } = useLanguage();
  return locales[language] || locales.en;
};
