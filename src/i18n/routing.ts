import { languages } from "@/app/components/Headersections/LanguagesList";

 
export const defaultLocale = "en";
 
export const routing = {
  locales: languages.map((l) => l.localeCode),
  defaultLocale,
  getDirection(locale: string) {
    return ["ar", "he", "fa", "ur"].includes(locale) ? "rtl" : "ltr";
  },
};
 