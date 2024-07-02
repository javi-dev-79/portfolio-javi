import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'
import translationFR from '../locales/fr/translation.json'
import translationDE from '../locales/de/translation.json'

i18n.use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            es: {
                translation: translationES
            },
            fr: {
                translation: translationFR
            },
            de: {
                translation: translationDE
            }
        },
        lng: 'es', // Default language
        fallbackLng: 'es', // Fallback language if translation not found
        debug: true,
        interpolation: {
            escapeValue: false // You don't need to escape variables inside translations
        }
    })

export default i18n
