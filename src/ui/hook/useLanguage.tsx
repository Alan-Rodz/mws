import { useContext } from 'react';

import { LanguageContext } from '../context/language/LanguageContext';

// ****************************************************************************
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  const { changeLanguage, currentLocale, translation } = context;
  if (!changeLanguage || !currentLocale || !translation) throw new Error('useLanguage must be used within a LanguageProvider');

  return { changeLanguage, currentLocale, translation };
};
