import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const LANGUAGES = {
  en: {},
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
});
