import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en,gj } from "./translations";


const resources = {
    en : {
        translation : en,
    },
    gj: {
        translation : gj,
    },
}

i18next.use(initReactI18next).init({
    debug: true,
    lng:'en',
    compatibilityJSON: 'v3',
    fallbackLng:'en',
  
    resources,
})

export default i18next;