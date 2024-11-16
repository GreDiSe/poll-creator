import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en as enVocabulary } from './en';

const resources = {
    en: {
        translation: enVocabulary,
    },
};

i18next.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
