import English from '@/data/translation/eng.json';
import Vietnam from '@/data/translation/vie.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalStorageItem } from './localStorage';

const resources = {
  eng: {
    translation: English
  },
  vie: {
    translation: Vietnam
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocalStorageItem('codebook-lang') || 'eng',
  fallbackLng: 'eng',
  keySeparator: '.',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
