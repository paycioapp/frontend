"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";

type Coin = string;

interface MobileViewProps {
  coinItems: Coin[];
  leftCoinVariants: Variants;
  rightCoinVariants: Variants;
  inView: boolean
}

const FlexiblePayments: React.FC = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const coinItems: Coin[] = [
    "btc",
    "eth",
    "usdt",
    "usdc",
    "sol",
    "xrp",
    "ai",
    "doge",
    "bnb",
    "beam",
    "cake",
    "matic",
  ];

  // Hook to detect when section is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Variants for left-to-right animation (left coins)
  const leftCoinVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for right-to-left animation (right coins)
  const rightCoinVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for bottom-to-top animation (middle card)
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <React.Fragment>
      <section ref={ref} className="bg-[#180CB2] relative md:mb-[260px] mb-[180px]" id="gasfee">
        <div className="site-width">
          <div className="pt-[80px] pb-[200px]">
            <div className="features relative max-w-[1000px] mx-auto text-center">
              <h2 className="h2-tag text-white">
                {t('features_flexible_header')}
              </h2>
              <p
                className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4
                               text-sm xs:text-base xmd:text-lg md:text-sm xl:text-md 2xl:text-2xl text-white"
              >
                {t('features_flexible_text')}
              </p>
            </div>
            <div className="md:hidden">
              <MobileView
                coinItems={coinItems}
                leftCoinVariants={leftCoinVariants}
                rightCoinVariants={rightCoinVariants}
                inView={inView}
              />
            </div>
          </div>

          <div className="md:flex items-start self-center justify-center gap-[72px] absolute bottom-[-36%] md:bottom-[-46%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-[45px] mt-[15px] md:flex hidden">
              {coinItems.slice(0, 6).map((coin, index) => (
                <motion.li
                  key={index}
                  variants={leftCoinVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                >
                  <div className="w-[50px]">
                    <Image
                      src={`/images/currencies/${coin}.png`}
                      alt={coin}
                      fill
                      className="!relative"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white w-[250px] text-center p-5 pt-[50px] rounded-2xl relative"
              style={{ boxShadow: "0px 14px 20px 0px #dadfe361" }}
            >
              <div className="absolute -top-[15%] left-1/2 transform -translate-x-1/2 w-[65px] h-[65px]">
                <Image
                  src={`/images/pyc-logo-wrap-shadow.svg`}
                  alt="Gas Fee Logo"
                  fill
                  className="!relative"
                />
              </div>
              <p className="font-outfit text-lg">{t('features_flexible_gasfee')}</p>
              <p className="text-2xl font-bold font-outfit">1.5 USD</p>
              <button className="mt-5 bg-thm font-outfit w-full justify-center rounded-full
               text-white sm:text-base text-lg md:text-xl px-8 py-3 flex gap-5 self-center items-center" onClick={() => { setIsOpen(true) }}>
                {t('features_flexible_pay')}
              </button>
            </motion.div>
            <ul className="flex gap-[45px] mt-[15px] md:flex hidden">
              {coinItems.slice(6, 12).map((coin, index) => (
                <motion.li
                  key={index}
                  variants={rightCoinVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={5 - index}
                >
                  <div className="w-[50px]">
                    <Image
                      src={`/images/currencies/${coin}.png`}
                      alt={coin}
                      fill
                      className="!relative"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};

const MobileView: React.FC<MobileViewProps> = ({ coinItems, leftCoinVariants, rightCoinVariants, inView }) => {

  return (
    <div className="flex flex-col items-center gap-8">
      <ul className="flex justify-center gap-[24px] mt-[30px]">
        {coinItems.slice(0, 6).map((coin, index) => (
          <motion.li
            key={index}
            variants={leftCoinVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index}
          >
            <div className="w-[50px]">
              <Image
                src={`/images/currencies/${coin}.png`}
                alt={coin}
                fill
                className="!relative"
              />
            </div>
          </motion.li>
        ))}
      </ul>
      <ul className="flex justify-center gap-[24px] mt-[0px]">
        {coinItems.slice(6, 12).map((coin, index) => (
          <motion.li
            key={index}
            variants={rightCoinVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5 - index}
          >
            <div className="w-[50px]">
              <Image
                src={`/images/currencies/${coin}.png`}
                alt={coin}
                fill
                className="!relative"
              />
            </div>
          </motion.li>
        ))}
      </ul>

    </div>
  );
};

export default FlexiblePayments;