"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

type BusinessItem = {
  image: string;
  content: string;
  bg: string;
};

const GrowBusiness: React.FC = () => {
  const t = useTranslations();
  const business: BusinessItem[] = [
    {
      image: "/images/features/bar.png",
      content: t('features_grow_content1'),
      bg: "#FFFADE",
    },
    {
      image: "/images/features/qr.png",
      content: t('features_grow_content2'),
      bg: "#FFF3EF",
    },
    {
      image: "/images/features/currency.png",
      content: t('features_grow_content3'),
      bg: "#D8FAFC",
    },
    {
      image: "/images/features/thunder.png",
      content: t('features_grow_content4'),
      bg: "#FBF1FF",
    },
  ];

  // Hook to detect when section is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Variants for left-to-right animation (left items)
  const leftItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Slightly longer delay between items
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for right-to-left animation (right items)
  const rightItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for bottom-to-top animation (middle image)
  const imageVariants: Variants = {
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
        delay: 0.4, // Starts after items begin
      },
    },
  };

  return (
    <React.Fragment>
      <section ref={ref} className="pt-0 md:pt-12 md:pt-24 pb-12 bg-[#fff]" id="merchant">
        <div className="mx-auto max-w-[1354px] site-width">
          <div className="mx-auto py-[30px] md:py-[40px]">
            <div className="features relative pl-0  mb-12 md:mb-32 text-center">
              <h2 className="h2-tag">
                {t('features_grow_header')}
              </h2>
              <p
                className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 
                          text-sm xs:text-base xmd:text-lg md:text-sm xl:text-md 2xl:text-2xl"
              >
                {t('features_grow_text')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative w-full h-full md:hidden block"
              >
                <Image
                  src="/images/features/merchant-store.png"
                  alt="Feature Image"
                  fill
                  className="!relative !w-[240px] !h-[240px] mx-auto"
                />
              </motion.div>
              <ul className="flex flex-col gap-10 md:gap-24 p-4 items-center">
                {business.slice(0, 2).map((item, index) => (
                  <motion.li
                    key={index}
                    variants={leftItemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={index}
                    className="bg-[#fff] rounded-xl flex md:flex-col lg:flex-row gap-5 p-4 items-center md:text-center text-start lg:text-start"
                    style={{ boxShadow: "2px 14px 20px 9px #180cb208" }}
                  >
                    <div
                      className="w-[85px] h-[85px] rounded-xl flex items-center self-center justify-center"
                      style={{ backgroundColor: item.bg, flex: "0 0 85px" }}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="!relative max-w-[36] object-scale-down"
                      />
                    </div>
                    <div>
                      <div className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-[600]">
                        {item.content}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative w-full h-full md:block hidden !max-w-[320px] !max-h-[320px] mx-auto"
              >
                <Image
                  src="/images/features/merchant-store.png"
                  alt="Feature Image"
                  fill
                  className="!relative object-contain"
                />
              </motion.div>

              <ul className="flex flex-col gap-10 md:gap-24 p-4 items-center">
                {business.slice(2, 4).map((item, index) => (
                  <motion.li
                    key={index}
                    variants={rightItemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={1 - index} // Right to left: higher index appears first
                    className="bg-[#fff] rounded-xl flex md:flex-col lg:flex-row gap-5 p-4 items-center md:text-center text-start lg:text-start"
                    style={{ boxShadow: "2px 14px 20px 9px #180cb208" }}
                  >
                    <div
                      className="w-[85px] h-[85px] rounded-xl flex items-center self-center justify-center"
                      style={{ backgroundColor: item.bg, flex: "0 0 85px" }}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="!relative max-w-[36] object-scale-down"
                      />
                    </div>
                    <div>
                      <div className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-[600]">
                        {item.content}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GrowBusiness;