"use client";

import React, { useRef } from "react";
import { RevealScaleUp, RevealUp } from "@/app/components/utils/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SendCrypto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "30% start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <>
      <div ref={containerRef} className="h-[200vh] relative t-space" id="offline">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ scale }}
          >
            <motion.div className="md:block hidden">
              <Image fill alt="female"
                src="/images/features/female.png"
                className=" w-full h-full object-cover"
              />
            </motion.div>
            <motion.div className="md:hidden block">
              <Image fill alt="female"
                src="/images/features/femalem.png"
                className=" w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <div className="w-full h-screen md:overflow-hidden site-width-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="md:block hidden"></div>
              <div className="relative flex items-center justify-center">
                <SecurityContentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendCrypto;




const SecurityContentCard = () => {
  const t = useTranslations();
  return (
    <RevealUp className="absolute flex flex-col md:flex-row pb-6 md:pb-0 px-6 justify-end h-full w-full items-center">
      <div className="max-w-[560px] relative z-1 p-4 lg:p-8 xl:p-10 pt-14 xs:pt-20 lg:pt-20 xl:pt-20 2xl:pt-24 rounded-3xl w-fit mx-auto text-white bg-[#110E0D]/40 backdrop-blur-lg transition-all">
        <RevealScaleUp
          duration={1.5}
          className="mx-auto w-16 xs:w-20 2xl:w-24 absolute -top-10 2xl:-top-16 left-1/2 -translate-x-1/2 aspect-[99/121]"
        >
          <Image fill
            src="/images/check.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </RevealScaleUp>
        <h2 className="text-center font-outfit text-xl xs:text-3xl xmd:text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">
          {t('features_sendcrypto_text1')}
        </h2>
        <p
          className={`text-sm xs:text-base xmd:text-xl md:text-base 2xl:text-2xl mt-4 xl:mt-6 xmd:max-w-[500px] md:max-w-[350px] 2xl:max-w-[600px] mx-auto text-center font-medium`}
        >
          {t('features_sendcrypto_text2')}
        </p>
      </div>
    </RevealUp>
  );
};