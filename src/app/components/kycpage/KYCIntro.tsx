"use client"
import { useState } from "react";
import DownloadPopup from "../DownloadPopup";
import Image from "next/image";
import { useTranslations } from "next-intl";

const KYCIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <section className="kyc-section">
      <div className="site-width mx-auto ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center self-center">
          <div className="px-4 mt-12 md:mt-0">
            <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-outfit font-extrabold max-w-[660px]">
              {t('kycline_kycheader')}
            </h1>
            <p className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 max-w-[560px] text-sm xs:text-base xmd:text-lg md:text-sm xl:text-md 2xl:text-2xl  ">
              {t('kycline_linecontent')}
            </p>
            <button className="btn flex gap-5 self-center items-center flex-nowrap"
            onClick={()=> {setIsOpen(true)}}>
              <span className="whitespace-nowrap">{t('kycline_kycbtn')}</span>
              <Image fill className="!relative object-contain" src="/images/arrow-right.svg" alt="" />
            </button>
          </div>
          <div className="px-4 md:mt-0 mt-5">
            <div className="video-container md:max-w-[100%] max-w-[450px] mx-auto mt-5 md:mt-0">
              <video
                className="custom-video kyc-img w-full h-full"
                webkit-playsinline="true"
                playsInline
                autoPlay
                loop
              >
                <source
                  src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/kyc.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};
export default KYCIntro
