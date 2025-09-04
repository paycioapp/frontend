import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutIntro = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <div className="mb-0 md:mb-24 h-full md:h-[calc(100vh-85px)]">
        <Image src={'/images/aboutus.png'} alt="" fill className="!relative  object-cover" />
        <div className="site-width relative">
        <div
          className="bg-white max-w-[620px] text-center p-5 md:pt-[100px] pt-[72px] rounded-2xl relative md:absolute right-0 bottom-0"
          style={{borderBottomLeftRadius: '0',borderBottomRightRadius: 0 }}
        >
          <div className="absolute -top-[20%] md:top-[-12%] left-1/2 transform -translate-x-1/2 w-[102px] h-[102px]">
            <Image
              src={`/images/pyc-logo-wrap-shadow.svg`}
              alt="Gas Fee Logo"
              fill
              className="!relative"
            />
          </div>
          <h2 className="h2-tag">{t('about_header')}</h2>
          <div className="pt-8 lg:pt-16 lg:pb-12">
          <Image
              src={`/images/colon.png`}
              alt="Gas Fee Logo"
              fill
              className="!relative max-w-[430px] mx-auto"
            />
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutIntro;
