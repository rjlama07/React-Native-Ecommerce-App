import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import ne from "./ne.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGES = {
  en: {
    translation: en,
  },

  hi: {
    translation: hi,
  },
  ne: {
    translation: ne,
  },
};

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("ln");
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }
    } catch (e) {}
    callback("en");
  },
  cacheUserLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem("ln", lang);
    } catch (e) {
      console.error(e);
    }
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    fallbackLng: "en",
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
