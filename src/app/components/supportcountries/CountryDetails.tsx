// components/CountryDetails.tsx
import { useTranslations } from "next-intl";
import { logos } from "../logos";
import { SupportedCountry } from "./types";
import { constants } from "./utils";
import Image from "next/image";


interface CountryDetailsProps {
  selectedCountry: SupportedCountry;
  showTooltip: boolean;
  setShowTooltip: (value: boolean) => void;
}

export const CountryDetails = ({
  selectedCountry,
  showTooltip,
  setShowTooltip
}: CountryDetailsProps) => {
  const t = useTranslations();

  return (
    <div className="box-shadow-support">
      <h4 className="available-header mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 text-lg xs:text-lg xmd:text-lg md:text-lg xl:text-xl 2xl:text-2xl font-bold">
        {selectedCountry.support
          ? `${t('supportedcountries_leftbox1')} "${selectedCountry.name}"`
          : `${t('supportedcountries_leftbox')} "${selectedCountry.name}" ${t(
              "soon"
            )}.`}
      </h4>
      <div className="supportedlist">
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl ">
          <li>{t('supportedcountries_leftboxheader1')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <div className="support-coins flex-wrap">
              <span className="flex items-center coin-bg no-bg" style={{ gap: "6px" }}>
                <div className="w-[16px]"><Image fill loading="lazy" src={logos.kyclevel1} alt="kyc-level-1" className="m-0 !relative" /></div>
                {t('supportedcountries_leveltext')} 1
              </span>
              <span className="flex items-center coin-bg no-bg" style={{ gap: "6px" }}>
                <div className="w-[16px]"><Image fill loading="lazy" src={logos.kyclevel2} alt="kyc-level-2" className="m-0 !relative" /></div>
                {t('supportedcountries_leveltext')} 2
              </span>
              <span className="flex items-center coin-bg no-bg" style={{ gap: "6px" }}>
                <div className="w-[16px]"><Image fill loading="lazy" src={logos.kyclevel3} alt="kyc-level-3" className="m-0 !relative" /></div>
                {t('supportedcountries_leveltext')} 3
              </span>
            </div>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader2')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span className="available">
              {selectedCountry.support
                ? `${t('supportedcountries_statusavail')}`
                : `${t('supportedcountries_statusunavail')}`}
            </span>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader3')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span className="available">
              {selectedCountry.support
                ? `${t('supportedcountries_statusavail')}`
                : `${t('supportedcountries_statusunavail')}`}
            </span>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader4')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <div className="tooltip-container">
             {t('faqpagetext_line101')}
              <i
                className="fa fa-question"
                style={{ width: "36px", height: "24px" }}
                onMouseOver={() => setShowTooltip(true)}
                onMouseOut={() => setShowTooltip(false)}
              ></i>
              {showTooltip && <span className="tooltiptext">{constants.text}</span>}
            </div>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader5')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span className="flex items-center" style={{ gap: "6px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ width: "12px" }}>
                <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"/>
              </svg>
              {t('supportedcountries_instant')}
            </span>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader6')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span className="flex items-center" style={{ gap: "6px" }}>
              <div className="w-[20px]"><Image fill loading="lazy" src={logos.timer} alt="timer" className="!relative m-0" /></div>
              5-30 Sec
            </span>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader7')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <div className="support-coins flex items-center gap-4">
              {selectedCountry.currency && (
                <span className="flex items-center coin-bg" style={{ gap: "6px" }}>
                  <span className="w-[20px]"><Image
                   fill
                    src={selectedCountry.imgpath || ""}
                    className="!relative m-0"
                    alt={selectedCountry.name}
                  /></span>
                  <span>{selectedCountry.currency}</span>
                </span>
              )}
              <span className="flex items-center coin-bg" style={{ gap: "6px" }}>
                <div className="w-[20px]"><Image fill loading="lazy" src={constants.USDCoin} alt="USD Coin" className="!relative m-0" /></div>
                <span>{selectedCountry.usd}</span>
              </span>
            </div>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader8')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span className="flex items-center" style={{ gap: "6px" }}>
              <div className="w-[20px]"><Image fill loading="lazy" src={logos.dollar} alt="dollar" className="!relative m-0" /></div>
              <span>50 USD</span>
            </span>
          </li>
        </ul>
        <ul className="supportstatus text-md xs:text-base xmd:text-lg md:text-md xl:text-xl 2xl:text-xl !font-noto">
          <li>{t('supportedcountries_leftboxheader9')}</li>:
          <li className={`${!selectedCountry.support && "hidden-skeleton"}`}>
            <span style={{ gap: "6px" }} className="flex items-center">
              <div className="w-[20px]"><Image fill loading="lazy" src={logos.dollar} className="!relative m-0" alt="dollar" /> </div>
              <span>10000 USD (L1)</span>
            </span>
            <span style={{ gap: "6px" }} className="flex items-center">
              <div className="w-[20px]"><Image fill loading="lazy" src={logos.dollar} className="!relative m-0" alt="dollar" /> </div>
              <span> 200k USD (L2)</span>
            </span>
            <span style={{ gap: "6px" }} className="flex items-center">
              <div className="w-[20px]"><Image fill loading="lazy" src={logos.dollar} className="!relative m-0" alt="dollar" /> </div>
              <span> 1 {t('supportedcountries_milabove')} USD (L3)</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};