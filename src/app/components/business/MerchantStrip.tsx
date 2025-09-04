"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MerchantStrip = () => {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stripWidth, setStripWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setStripWidth(containerRef.current.scrollWidth / 2); // Half because we duplicate
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
  <>
    <h4 className="h2-tag ml-4 shrink-0 gap-10 xl:hidden block items-center mt-12 text-center">{t('businesssection_whychoose_header')}</h4>
    <section className="bg-thm overflow-hidden mt-4 text-white">
      <div className="flex items-center justify-between 2xl:mr-48 md:mr-20 mr-0 relative">
        <div className="overflow-hidden py-5 w-full merchants-list" ref={containerRef}>
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: [`0`, `-${stripWidth}px`] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            style={{ width: stripWidth * 2 }}
          >
            <StripContent />
            <StripContent />
          </motion.div>
        </div>
        <h4 className="h2-tag ml-4 shrink-0 gap-10 xl:flex hidden items-center">
          <div className="relative w-[21px] h-[15px] mr-2">
            <Image
              src={"/images/arrow-left.png"}
              alt="arrow left"
              fill
              className="object-contain"
            />
          </div>
          {t('businesssection_whychoose_header')}
        </h4>
      </div>
    </section>
  </>
  );
};

export default MerchantStrip;


const StripContent = () => {
  const merchants = [
    "/images/merchants/coupon365.png",
    "/images/merchants/hosting.png",
    "/images/merchants/its7.png",
    "/images/merchants/securdata.png",
    "/images/merchants/swimmingzone.png",
    "/images/merchants/tripeazy.png",
  ];
  return (
    <div className="flex items-center md:gap-14 gap-8 shrink-0 px-4">
      {merchants.map((merchant, index) => (
        <div key={index} className="relative w-[145px] h-[45px]">
          <Image
            src={merchant}
            alt={`merchant-${index}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

