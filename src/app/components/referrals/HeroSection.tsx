"use client"
import Image from "next/image";
import DownloadPopup from "../DownloadPopup";
import { useState } from "react";
import { logos } from "../logos";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <section className="py-16">
      <div className="site-width mx-auto relative">
        <div className="md:pl-24 px-4 grid md:grid-cols-2 items-center gap-8 bg-[#d7ff1d] bg-[url('https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/percentage.webp')] bg-left bg-no-repeat bg-contain rounded-[45px]">
          <div className="pt-20 md:pt-0">
            <h1 className="h2-tag max-w-[660px]">
              {t('referralpage_line1')}
            </h1>
            <p className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 max-w-[600px] 2xl:max-w-[700px] p-tag">
              {t('referralpage_line2')}
            </p>
            <button onClick={()=> {setIsOpen(true)}}
            className="btn mt-8">
              {t('referralpage_joinnowbtn')}{" "}
              <div className="w-[10px] relative">
                <Image src={"/images/arrow-right.svg"} alt="" fill className="!relative" />
              </div>
            </button>
          </div>
          <div>
            <Image fill loading="lazy" alt="Handshake representing referral" src={logos.handshake} className="w-full !relative object-contain" />
          </div>
        </div>
      </div>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default HeroSection;
