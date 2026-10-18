import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { SupportedLanguage, TranslationDictionary } from './types';
import { en } from './translations/en';
import { zh } from './translations/zh';

const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en,
  zh,
};

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  isZh: boolean;
  strings: TranslationDictionary;
  t: (path: string, params?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  }, []);

  const strings = useMemo(() => TRANSLATIONS[language] ?? en, [language]);

  const t = useCallback(
    (path: string, params?: Record<string, string | number>): string => {
      const keys = path.split('.');
      let current: any = strings;

      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // Fallback to English dictionary
          let fallback: any = en;
          for (const fbKey of keys) {
            if (fallback && typeof fallback === 'object' && fbKey in fallback) {
              fallback = fallback[fbKey];
            } else {
              fallback = null;
              break;
            }
          }
          current = fallback ?? path;
          break;
        }
      }

      let result = typeof current === 'string' ? current : path;
      if (params) {
        Object.entries(params).forEach(([paramKey, paramVal]) => {
          result = result.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
        });
      }
      return result;
    },
    [strings]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isZh: language === 'zh',
      strings,
      t,
    }),
    [language, toggleLanguage, strings, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Graceful fallback if called outside provider (e.g. testing)
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      isZh: false,
      strings: en,
      t: (path: string) => path,
    };
  }
  return ctx;
}

export const useTranslation = useLanguage;
