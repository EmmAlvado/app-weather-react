import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Resource } from 'i18next';

import translationFR from './translation/fr.json'
import translationEN from './translation/en.json'

const resources: Resource = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
