// import {defineRouting} from 'next-intl/routing';

import { languages } from "../components/Headersections/LanguagesList";



export const defaultLocale = "en";
 
export const routing = {
  locales: languages.map((l) => l.countryShortcode.toLowerCase()),
  defaultLocale,
};
 