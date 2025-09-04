// types/supportedCountries.ts
export interface Currency {
    country: string;
    code: string;
  }
  
  export interface Country {
    name: string;
    trim: () => string;
  }
  
  export interface SupportedCountry {
    id: number;
    name: string;
    logo: string;
    support: boolean;
    offlinesupport: boolean;
    currency: string | null;
    usd: string;
    imgpath: string | null;
    shortcode?: string;
  }