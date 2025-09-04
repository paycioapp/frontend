"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";

const SwaptoPay = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <section ref={ref} className="mb-[0] bg-[#FBFBFC]" id="swaptopay">
      <div className="site-width-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 gap-x-5 mx-auto pt-0 pb-[0px]">
        <div className="relative w-full mt-18 md:mt-0 md:hidden block ">
            <Image
              src="/images/features/swaptopay2.png"
              alt="Feature Image"
              fill
              className="!relative max-w-[400px] md:max-w-[450px] lg:max-w-[450px] 2xl:max-w-[620px] mx-auto mx-auto"
            />

            {/* ANIMATED SWAP-COINS IMAGE */}
            {/* <motion.div
              className="absolute left-[-6%] top-[50%]"
              initial={{ scale: 0.5, opacity: 0 }} // Start small & hidden
              animate={isInView ? { scale: 1, opacity: 1 } : {}} // Animate when visible
              transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth effect
            >
              <Image
                src="/images/features/swap-coins.png"
                alt="Feature Image"
                fill
                className="!relative max-w-[352px] mx-auto object-contain"
              />
            </motion.div> */}
          </div>
          <div className="features relative pl-0  md:mb-0 mb-24 ">
            <h2 className="h2-tag ">
              {t('features_swaptopay_header')}
            </h2>
            <p
              className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 max-w-[560px]
                      text-sm xs:text-base xmd:text-lg md:text-sm xl:text-md 2xl:text-2xl 
                      "
            >
              {t('features_swaptopay_text')}
            </p>
            <button className="bg-thm rounded-full text-white sm:text-base text-lg md:text-xl px-8 py-3 mt-8 flex gap-5 self-center items-center"
            onClick={()=> {setIsOpen(true)}}>
              {t('features_swaptopay_swapping')}
              <Image
                src={"/images/arrow-right.svg"}
                alt=""
                className="!relative"
                width={10}
                height={9}
              />
            </button>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full mt-18 md:mt-0 md:block hidden">
            <Image
              src="/images/features/swaptopay2.png"
              alt="Feature Image"
              fill
              className="!relative max-w-[400px] md:max-w-[450px] lg:max-w-[450px] 2xl:max-w-[620px] mx-auto mx-auto"
            />

            {/* ANIMATED SWAP-COINS IMAGE */}
            {/* <motion.div
              className="absolute left-[-28px] top-50"
              initial={{ scale: 0.5, opacity: 0 }} // Start small & hidden
              animate={isInView ? { scale: 1, opacity: 1 } : {}} // Animate when visible
              transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth effect
            >
              <Image
                src="/images/features/swap-coins.png"
                alt="Feature Image"
                fill
                className="!relative max-w-[352px] mx-auto object-contain"
              />
            </motion.div> */}
          </div>
        </div>
      </div>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default SwaptoPay;
