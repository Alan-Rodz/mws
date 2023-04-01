import { useEffect, useState, FC } from 'react';

import { WEBSITE_NAME } from '@/ui/constant';
import { ChildrenProps } from '@/ui/type';

import { LanguageContext, TranslationReplacement } from './LanguageContext';
import fallbackLanguageData from './locales/en.json';

// ********************************************************************************
// == Type ========================================================================
type LanguageData = { [key: string]: string | LanguageData; };

// == Constant ====================================================================
const LOCALE_STORAGE_ITEM = `${WEBSITE_NAME}-locale`;
const FALLBACK_LOCALE = 'en';

const getTranslationFromData = (data: LanguageData, tokens: string[]): string | undefined => {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (data[token] === undefined) return undefined/*non existent*/;

    data = data[token] as LanguageData;
  }

  if (typeof data !== 'string') return undefined/*an object*/;
  return data;
};

// == Provider ====================================================================
export const LanguageProvider: FC<ChildrenProps> = ({ children }) => {
  // -- State ---------------------------------------------------------------------
  const [currentLocale, setCurrentLocale] = useState<string>(FALLBACK_LOCALE);
  const [languageData, setLanguageData] = useState<LanguageData>(fallbackLanguageData);

  // -- Effect --------------------------------------------------------------------
  useEffect(() => {
    const locale = localStorage.getItem(LOCALE_STORAGE_ITEM);
    if (!locale) return/*nothing to do*/;
    changeLanguage(locale);
  }, [/*on mount*/]);

  // -- Handler -------------------------------------------------------------------
  const translation = (path: string, replacement?: TranslationReplacement) => {
    const tokens = path.split('.');

    let translation = getTranslationFromData(languageData, tokens) ?? getTranslationFromData(fallbackLanguageData, tokens);
    if (!translation) throw new Error(`Can't find translation for ${path}`);
    if (!replacement) return translation;

    const keys = Object.keys(replacement);
    for (let i = 0; i < keys.length; i++) translation = translation.replace(`{{${keys[i]}}}`, String(replacement[keys[i]]));
    return translation;
  };

  const changeLanguage = async (locale: string) => {
    const languageData = await import(`./locales/${(locale)}.json`);
    if (!languageData) throw new Error(`Can't find language data for ${locale}`);

    setCurrentLocale(locale);
    setLanguageData(languageData);

    localStorage.setItem(LOCALE_STORAGE_ITEM, locale);
  };


  // -- UI ------------------------------------------------------------------------
  return (
    <LanguageContext.Provider value={{ currentLocale, translation, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
