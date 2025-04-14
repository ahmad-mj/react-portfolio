import en from '../de.json';
import de from '../en.json';

const locales = {
  en,
  de
};

export const useTranslation = (lang = 'en') => {
  return locales[lang] || locales.en;
};
