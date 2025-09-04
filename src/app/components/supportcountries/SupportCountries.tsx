// components/SupportedCountries.tsx
"use client";
import { useState } from "react";
import { SupportedCountry } from "./types";
import { getSupportedCountries } from "./utils";
import { CountrySelector } from "./CountrySelector";
import { CountryDetails } from "./CountryDetails";
import Image from "next/image";
import { logos } from "../logos";
import { useTranslations } from "next-intl";

const SupportedCountries = () => {
  const t = useTranslations();
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  
  const supportedCountries: SupportedCountry[] = getSupportedCountries();
  const initialCountry = supportedCountries.find(
    (country) => country.name === "United States"
  );
  const [selectedCountry, setSelectedCountry] = useState<SupportedCountry>(initialCountry as SupportedCountry);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  

  const handleSelectChange = (value: SupportedCountry) => {
    setSelectedCountry(value);
    setSearchQuery("");
  };
  
  const handleSelect = (value: SupportedCountry) => {
    handleSelectChange(value);
    setIsOpen(false);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  return (
    <>
     <div className="mt-12 md:mt-24 mb-36">
         
      <div className="font-outfit"
        style={{
          background: "linear-gradient(#fff, #F3F4F8)",
        }}
      >
        <div className="site-width-sm mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-8 text-left">
            <div className="mx-auto">
              <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-outfit font-extrabold max-w-[530px] mb-4">
                {t('supportedcountries_headername')}
              </h1>
              <h5 className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto  mb-8">
                {t('supportedcountries_taglinepart1')}
              </h5>
              <p className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
               {t('supportedcountries_taglinepart2')}
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
                <div className="w-full">
                  <div className="flex justify-center mb-6 selectedflag">
                    {!selectedCountry.support ? (
                      <div className="">
                        <Image fill
                          loading="lazy"
                          src={logos.supportedcountries}
                          alt="worldmap"
                          className="!relative h-auto rounded-lg"
                        />
                      </div>
                    ) : (
                      <Image fill
                        loading="lazy"
                        src={logos.supportedcountries}
                        alt="worldmap"
                        className="!relative h-auto rounded-lg"
                      />
                    )}
                  </div>
                  <CountrySelector
                    isOpen={isOpen}
                    selectedCountry={selectedCountry}
                    supportedCountries={supportedCountries}
                    searchQuery={searchQuery}
                    setIsOpen={setIsOpen}
                    handleSelect={handleSelect}
                    handleSearchChange={handleSearchChange}
                    className="md:hidden"
                  />
                </div>
                <div className="w-full">
                  <CountryDetails
                    selectedCountry={selectedCountry}
                    showTooltip={showTooltip}
                    setShowTooltip={setShowTooltip}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="font-outfit">
            <div className="site-width-sm mx-auto">
              <div className="max-w-md">
                <CountrySelector
                  isOpen={isOpen}
                  selectedCountry={selectedCountry}
                  supportedCountries={supportedCountries}
                  searchQuery={searchQuery}
                  setIsOpen={setIsOpen}
                  handleSelect={handleSelect}
                  handleSearchChange={handleSearchChange}
                  className="hidden md:block"
                />
                <div className="text-lg  md:mt-0 mt-12">
                  <b className="text-lg font-semibold text-gray-900">{t('referralpage_kycnote')} :</b>
                  <ul className="mt-2 space-y-2 text-gray-700 !font-noto">
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2">
                        <Image
                        fill
                        src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/extra/checkmark.svg"
                        alt="checkmark"
                        className="!relative"
                      />
                      </div>
                      {t('supportedcountries_note1')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2">
                        <Image
                        fill
                        src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/extra/checkmark.svg"
                        alt="checkmark"
                        className="!relative"
                      />
                      </div>
                      {t('supportedcountries_note2')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2">
                        <Image
                        fill
                        src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/extra/checkmark.svg"
                        alt="checkmark"
                        className="!relative"
                      />
                      </div>
                      {t('supportedcountries_note3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {isOpen && (
            <div
              className="fixed inset-0"
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: "none", backdropFilter: "none" }}
            ></div>
          )}
     </div>
    </>
  );
};

export default SupportedCountries;
