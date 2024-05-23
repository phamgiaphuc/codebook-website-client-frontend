import i18n from '@/utils/i18next';
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage';
import { createContext, useState } from 'react';

type Language = 'eng' | 'vie';

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLang?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const initialState: LanguageProviderState = {
  language: 'eng',
  setLanguage: () => null
};

export const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLang = 'eng',
  storageKey = 'codebook-lang',
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (getLocalStorageItem(storageKey) as Language) || defaultLang
  );

  const value = {
    language,
    setLanguage: (lang: Language) => {
      i18n.changeLanguage(lang);
      setLocalStorageItem(storageKey, lang);
      setLanguage(lang);
    }
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}
