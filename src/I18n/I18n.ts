import I18n from "i18next"
import { initReactI18next } from "react-i18next"
import { ar, en, ar_static, en_static } from "./localization"
import { languageDetectorPlugin } from "@bagi/utils"

const resources = {
  en: {
    translation: { ...en, ...en_static },
  },
  ar: {
    translation: { ...ar, ...ar_static },
  },
}

I18n.use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    //language to use if translations in user language are not available
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export interface ILanguage {
  value: "en" | "ar"
  label_en: string
  label_ar: string
  isRtl: boolean
  index: number
  country_code: string
}

export const languages: ILanguage[] = [
  {
    value: "ar",
    label_ar: "العربية",
    label_en: "Arabic",
    isRtl: true,
    index: 0,
    country_code: "JO",
  },
  {
    value: "en",
    label_ar: "الانجليزية",
    label_en: "English",
    isRtl: false,
    index: 1,
    country_code: "UK",
  },
]

export default I18n
