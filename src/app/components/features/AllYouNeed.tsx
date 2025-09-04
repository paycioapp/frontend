"use client"
import Image from "next/image";
import React, { useState } from "react";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";

const AllYouNeed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <React.Fragment>
      <section id="payvia" >
        <div className="site-width-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 gap-x-5 mx-auto pt-[80px] pb-[80px] md:pb-[40px] xl:pb-[80px] md:pt-[80px] xl:pt-[160px]">
            <div className="features relative pl-0 ">
              <h2 className="h2-tag">
                {t('featurespage_allyouneed')}
              </h2>
              <p
                className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 max-w-[560px]
                  p-tag 
                  "
              >
                {t('featurespage_allyouneedtext')}
              </p>
              <button className="bg-thm rounded-full text-white sm:text-base text-base md:text-lg px-8 py-3 mt-8 flex gap-5 self-center items-center"
              onClick={()=> {setIsOpen(true)}}>
                {t('featurespage_starttrading')} <Image src={'/images/arrow-right.svg'} alt="" className="!relative" width={10} height={9} />
              </button>
            </div>
            <div className="relative w-full h-full md:block hidden">
              <Image
                src="/images/features/num-pay.png"
                alt="Feature Image"
                fill
                className="!relative object-contain max-w-[100%]"
              />
              {/* <div className="absolute top-[50%] lg:right-[-45px] md:right-[-10%] right-[-10px]">
              <Image
                src="/images/features/sent-to.png"
                alt="Feature Image"
                fill
                className="!relative object-contain max-w-[380px] animate-top-bottom"
              />
              </div> */}
            </div>
            <div className="relative w-full h-full md:hidden block ">
              <Image
                src="/images/features/mobile-pay.png"
                alt="Feature Image"
                fill
                className="!relative object-contain max-w-[100%]"
              />
              {/* <div className="absolute top-[50%] lg:right-[-45px] md:right-[-10%] right-[-10px]">
              <Image
                src="/images/features/sent-to.png"
                alt="Feature Image"
                fill
                className="!relative object-contain max-w-[380px] animate-top-bottom"
              />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};
export default AllYouNeed;
