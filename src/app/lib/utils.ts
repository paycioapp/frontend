import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const bloglink = "https://blog.paycio.com"
export const playstore = "https://play.google.com/store/apps/details?id=com.paycio&pli=1"
export const appstore = "https://apps.apple.com/in/app/paycio-app/id6550918823"

export const openPlaystore =() => {
   window.open(playstore, '_blank')
}
export const openAppStore =() => {
   window.open(appstore, '_blank')
}

export const dateFormat =(value:string)=> {
   const date = new Date(value)
   const dateFormatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    
    return dateFormatter.format(date);
}