
"use client"
import { routing } from "@/i18n/routing"
import { clsx, type ClassValue } from "clsx"
import { useLocale } from "next-intl"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}
export const bloglink = "https://blog.paycio.com"
export const playstore = "https://play.google.com/store/apps/details?id=com.paycio&pli=1"
export const appstore = "https://apps.apple.com/in/app/paycio-app/id6550918823"

export const openPlaystore = () => {
   window.open(playstore, '_blank')
}
export const openAppStore = () => {
   window.open(appstore, '_blank')
}

export const dateFormat = (value: string) => {
   const date = new Date(value)
   const dateFormatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
   });

   return dateFormatter.format(date);
}


const notSupported = [
   'fi', 'fr', 'de', 'ha', 'ig', 'id', 'it', 'ko', 'ne', 'el',
   'hu', 'om', 'pl', 'pt', 'ru', 'sk', 'sn', 'sw', 'so', 'es',
   'si', 'th', 'tr', 'uk', 'vi', 'yo', 'zu'
];

export function useIsAvailLanguage() {
   const locale = useLocale();
   const [isLanguageDisabled, setIsLanguageDisabled] = useState(false);
   const [supportedLanguages, setSupportedLanguages] = useState<string[]>([]);
   const [availableLangs, setAvailLanguages] = useState<string[]>([]);

   useEffect(() => {
      const checkLanguage = async () => {
         const availableLangs = routing.locales;
         const supported = availableLangs.filter((lang) => !notSupported.includes(lang));
         const isDisabled = notSupported.includes(locale) || !availableLangs.includes(locale);
         setAvailLanguages(availableLangs);
         setSupportedLanguages(supported);
         setIsLanguageDisabled(isDisabled);
      };

      checkLanguage();
   }, [locale]);

   return {
      isLanguageDisabled,
      supportedLanguages,
      notSupported,
      availableLangs
   };
}


export const isRTL = (locale: string): boolean => {
   const rtlLocales = ['ar', 'fa', 'he', 'ur', 'ps', 'ckb', 'sd', 'dv', 'ug', 'yi'];
   return rtlLocales.includes(locale);
};

export function formatAmount(value: number): string {
    if (Number.isInteger(value)) {
        return value.toString(); // Whole number → no decimals
    }

    let formatted: string;
    if (value >= 1) {
        formatted = value.toFixed(2);
    } else if (value >= 0.01) {
        formatted = value.toFixed(4);
    } else {
        formatted = value.toFixed(8);
    }

    // Remove trailing zeros and possibly the decimal point
    return formatted.replace(/\.?0+$/, "");
}


