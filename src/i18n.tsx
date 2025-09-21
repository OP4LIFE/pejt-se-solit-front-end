import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./locales/en.json";
import slovenianTranslations from "./locales/si.json";

const resources = {
    en: { 
        translation: englishTranslations,
    },
    si: {
        translation: slovenianTranslations,
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng: "en", // Default language
});

export default i18next;