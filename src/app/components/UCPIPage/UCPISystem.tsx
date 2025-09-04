'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "../utils/Image"; // Adjust path as per your project



interface pspType {
  image: string;
  title: string;
  subtitle?: string;
}

const UcpiSystemPage = () => {
  const t = useTranslations();
  const pspData = [
    {
      image: "/images/psp-app.png",
      title: t('ucpisystem_title1'),
      subtitle: t('ucpisystem_subtitle1'),
    },
    {
      image: "/images/crypto-blockchain.png",
      title: t('ucpisystem_title2'),
    },
    {
      image: "/images/ucpi-datacenter.png",
      title: t('ucpisystem_title3'),
      subtitle: t('ucpisystem_subtitle2'),
    },
  ];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  return (
    <section ref={sectionRef} className="py-24 bg-[#f5f5f5]">
      <div className="site-width-sm">
        <div className="text-center">
          <div className="h2-tag mb-3">{t('ucpipagetext_line10')}</div>
          <p className="p-tag !text-[20px] max-w-[1200px] mx-auto">
            {t("ucpipagetext_line11")}
          </p>
        </div>

        {/* Mobile Static Image */}
        <Image
          src={"/images/ucpi-system-mobile.png"}
          alt="ucpi system"
          loading="lazy"
          wrapperClassName="w-[360px] mx-auto block md:hidden"
        />

        {/* Desktop View */}
        <div className="2xl:max-w-[550px] lg:max-w-[450px] md:max-w-[350px] mx-auto relative mt-35 md:block hidden">
          {/* Background Circle */}
          <Image
            src={"/images/psp-server-circle.png"}
            alt="ucpi system"
            loading="lazy"
          />

          {/* Center PSP Server */}
          <motion.div className="bg-[#180CB2] rounded-full 2xl:w-[340px] 2xl:h-[340px] lg:w-[240px] lg:h-[240px] md:w-[180px] md:h-[180px] mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col justify-center text-white z-10">
            <Image
              src={"/images/psp-server.png"}
              alt="psp server"
              loading="lazy"
              wrapperClassName="w-[40px]"
            />
            <h4 className="lg:text-2xl text-lg font-semibold mt-6">{t('pspserver_header')}</h4>
            <p className="lg:text-lg text-sm">{t('pspserver_processing')}</p>
          </motion.div>

          {/* Cards around circle */}
          {pspData.map((item: pspType, index) => {
            const positionStyles =
              index === 0
                ? "top-1/2 lg:left-[-280px] left-[-200px] -translate-y-1/2"
                : index === 1
                  ? "top-[-80px] left-1/2 -translate-x-1/2"
                  : "top-1/2 lg:right-[-280px] right-[-200px] -translate-y-1/2";

            const arrowPositions =
              index === 0
                ? "top-1/2 right-[-80px] -translate-y-1/2"
                : index === 1
                  ? "bottom-[-50px] left-1/2 -translate-x-1/2 rotate-[90deg]"
                  : "top-1/2 left-[-80px] -translate-y-1/2 rotate-[180deg]";

            const initial =
              index === 0
                ? { opacity: 0, x: -100 }
                : index === 1
                  ? { opacity: 0, y: -100 }
                  : { opacity: 0, x: 100 };

            const animate = { opacity: 1, x: 0, y: 0 };

            return (
              <motion.div
                key={`${index}-${isInView}`}
                initial={initial}
                animate={isInView ? animate : initial}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`bg-white px-4 py-4 shadow-xl rounded-2xl flex lg:flex-row flex-col lg:text-start text-center justify-center items-center lg:gap-4 gap-2 absolute ${positionStyles} lg:w-[280px] w-[200px]`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  wrapperClassName="lg:w-8 w-6 shrink-0"
                />
                <div style={{ width: index === 1 ? "120px" : "auto" }}>
                  <h4 className="lg:text-[20px] text-[16px] font-semibold">{item.title}</h4>
                  <p className="lg:text-lg text-sm">{item.subtitle}</p>
                </div>
                <div className={`absolute ${arrowPositions}`}>
                  <Image
                    src={"/images/ucpi-arrow.png"}
                    alt="ucpi arrow"
                    wrapperClassName="w-20"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UcpiSystemPage;
