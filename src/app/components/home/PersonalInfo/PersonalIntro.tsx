"use client"; // Required for Framer Motion
import Image from "next/image";
import { motion } from "framer-motion"; // Assuming AnimateText is in a separate file
import React, { useState } from "react";
import { AnimateText } from "./AnimatedText";
import { LocatePins } from "./LocatePins";
import { useTranslations } from "next-intl";

const PersonalIntro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations();
  // Variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const data = [
    { text: t('homesection_text1'), img: '/images/home-mobile.png' },
    { text: t('homesection_text2'), img: '/images/crypto-address.png' },
    { text: t('homesection_text3'), img: '/images/home-mobile.png' }
  ];

  return (
    <motion.section
      className="md:pt-20 md:pb-20 pt-14 bg-[#F9F9FE] pb-14 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Trigger when 20% is visible, repeats every time
    >
      <div className="site-width text-center">
        <AnimateText activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <p className="p-tag max-w-[600px] mx-auto md:mt-6 2xl:mt-8 mt-4">
          {t('homesection_introtext')}
        </p>
          
          <div className="world-map lg:mt-40 2xl:mt-45 md:mt-36 mt-36  relative">


            <div className="max-w-full sm:max-w-[320px] md:max-w-[400px] lg:max-w-[420px] 2xl:max-w-[500px] mx-auto relative -top-[50px] ">
              <div className="relative w-full ">
                <Image
                  src="/images/circle-coins.png"
                  alt="Circle background"
                  fill
                  className={`object-cover z-0 transition-all ease duration-800  !relative
        `}
                />
                <div className="bg-thm w-[80%] h-[80%] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 grid items-center text-[#D8FF18]  text-[4vw] font-bold">
                  <Image src={'/images/pyc-logo-wrap.svg'} alt="" fill className="!relative opacity-90" />
                </div>
                <div className="absolute w-[65%] left-1/2 -translate-x-1/2 -top-[20%] z-20">
                  {data.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.85 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 40,
                        scale: activeIndex === index ? 1 : 0.85,
                        zIndex: activeIndex === index ? 2 : 1,
                        pointerEvents: activeIndex === index ? "auto" : "none",
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.img}
                        alt="Mobile pay illustration"
                        width={500}
                        height={500}
                        className="w-full h-auto transition-all duration-500 ease-in-out"
                      />
                    </motion.div>
                  ))

                  }

                </div>

              </div>
            </div>


            <LocatePins />


          </div>
      </div>
    </motion.section>
  );
};

export default PersonalIntro;





