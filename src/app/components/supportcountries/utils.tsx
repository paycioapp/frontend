// utils/supportedCountriesData.ts
import currency_list from "@/app/components/supportcountries/countrieslist";
import countriesobj from "@/app/components/supportcountries/countriesobj";
import offlineCountries from "@/app/components/supportcountries/offlinecountries";
import weSupportedCountries from "@/app/components/supportcountries/wesupportcountries";
import { SupportedCountry } from "./types";

interface Currency {
  country: string;
  code: string;
}

export const constants = {
  text: "Paycio do not set transaction (gas) fees or have control over them. Gas fees are set by the network itself and fluctuate depending on the network usage.",
  cdnpath: "https://paycio.nyc3.cdn.digitaloceanspaces.com/supportcountries/",
  defaultbg: "https://paycio.nyc3.cdn.digitaloceanspaces.com/paycio-contest/upload.svg",
  url: "https://paycio.nyc3.cdn.digitaloceanspaces.com/logo/",
  USDCoin: "https://paycio.nyc3.cdn.digitaloceanspaces.com/logo/usd.png"
};

export const getSupportedCountries = (): SupportedCountry[] => {
  return [
    ...countriesobj.map((countryName: string, index: number): SupportedCountry => {
      const formattedCountryName = countryName.trim().toLowerCase().replace(/ /g, "");
      const isSupported = weSupportedCountries.some(
        (ignore) => ignore.name.trim().toLowerCase() === countryName.trim().toLowerCase()
      );
      // Check if the current country is in the offlineCountries array
      const offlineSupport = offlineCountries
        .map((offline: string) => offline.trim().toLowerCase())
        .includes(countryName.trim().toLowerCase());
      
      const countryCurrency = currency_list.find(
        (currency: Currency) =>
          currency.country.trim().toLowerCase() === countryName.trim().toLowerCase()
      );
      const currency = countryCurrency ? countryCurrency.code : null;
      const usdCurrency = currency_list.filter(
        (usd: Currency) => usd.code === "USD"
      )[0]?.code || "USD";
      const imgpath = currency ? `${constants.url}${currency.toLowerCase()}.png` : null;

      return {
        id: index + 1,
        name: countryName,
        logo: `${constants.cdnpath}${formattedCountryName}.svg`,
        support: isSupported,
        offlinesupport: offlineSupport,
        currency: currency,
        usd: usdCurrency,
        imgpath: imgpath,
      };
    }).sort((a: SupportedCountry, b: SupportedCountry) => {
      return a.name.localeCompare(b.name);
    }),
  ];
};