import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationsES from './translations/es.json';
import translationsEN from './translations/en.json';
import translationCAT from './translations/cat.json'

let language = "";
const localLanguage = localStorage.getItem('lang');
const setLanguage = () => {
    if (localLanguage !== null) {
        language = localLanguage;
    } else if (document.cookie.includes('es') || navigator.language.includes('es')) {
        language = 'es';
    } else if (document.cookie.includes('en') || navigator.language.includes('en')) {
        language = 'en';
    } else if (document.cookie.includes('cat') || navigator.language.includes('cat')) {
        language = 'cat';
    } else {
        language = 'en';
    }
    document.cookie = navigator.language;
    localStorage.setItem('lang', language);
    return language;
};




i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: setLanguage(),
        resources: {
            en: {
                translation: translationsEN
            },
            es: {
                translation: translationsES
            },
            cat: {
                translation: translationCAT
            }
        },
        fallbackLng: 'en',
        //disabled in production
        debug: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            useSuspense: false
        }
    })
    .then(() => null);

export default i18n;
