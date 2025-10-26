import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import ne from "./ne.json";

const LANGUAGES = {
  en: {
    translation: en,
  },
  ar: {},
  hi: {
    translation: hi,
  },
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "hi",
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
