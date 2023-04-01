import { createContext } from 'react';

// ********************************************************************************
// == Type ========================================================================
export type TranslationReplacement = { [key: string]: string | number; };
export type TranslationFn = (path: string, replacement?: TranslationReplacement) => string;

type State = Readonly<{
  changeLanguage: ((language: string) => Promise<void>) | null;
  currentLocale: string | null;
  translation: TranslationFn | null;
}>;

// == Context =====================================================================
export const LanguageContext = createContext<State>({ currentLocale: null/*default*/, translation: null/*default*/, changeLanguage: null/*default*/ });
             LanguageContext.displayName = 'LanguageContext';
