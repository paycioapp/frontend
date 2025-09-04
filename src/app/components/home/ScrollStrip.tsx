'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { StartIcon } from "../icons/Icons";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const ScrollStrip = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    const handleResize = () => {
      if (section) {
        const contentWidth = section.scrollWidth;
        setWidth(contentWidth);
      }
    };

    handleResize(); // call initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden  absolute bottom-0 bg-white pt-3" ref={sectionRef}>
      <div className=" bg-thm text-white py-5">
      <motion.div
        className="flex items-center gap-15 whitespace-nowrap"
        animate={{ x: [`0`, `-${width / 2}px`] }}
        transition={{
          repeat: Infinity,
          duration: 32,
          ease: "linear"
        }}
        style={{ width: `${width}px` }}
      >
        <StripContent />
        <StripContent />
      </motion.div>
    </div>
    </div>
  );
};
export default ScrollStrip;

const StripContent = () => {
  return (
    <div className="flex items-center gap-15 shrink-0">
      <Coins />
      <div className="w-24 flex justify-center items-center star-animation delay-[0s]">
        <StartIcon className="w-8 h-8" />
      </div>
      <Countries />
      <div className="w-24 flex justify-center items-center">
        <StartIcon className="w-8 h-8 star-animation delay-[0s]" />
      </div>
    </div>
  );
};

const Coins = () => {
  const t = useTranslations();
  const coins = ["btc", "pol", "eth", "avax"];
  const coinText = `50+ ${t('homesection_strip_currencies')}`;
  return (
    <div className="flex flex-row gap-8 items-center">
      <div className="flex gap-8">
        {coins.map((coin, index) => (
          <div key={index} className="w-[50px] h-[50px] relative">
            <Image
              src={`/images/scroller/${coin}.png`}
              alt={coin}
              fill
              className="!relative"
            />
          </div>
        ))}
      </div>
      <p className="h2-tag ml-4 shrink-0">{coinText}</p>
    </div>
  );
};

const Countries = () => {
  const t = useTranslations();
  const countries = ["brazil", "nigeria", "panama", "canada"];
  const countryText = `40+ ${t('homesection_strip_countries')}`;
  return (
    <div className="flex flex-row gap-8 items-center">
      <div className="flex gap-8">
        {countries.map((country, index) => (
          <div key={index} className="w-[50px] h-[50px] relative">
            <Image
              src={`/images/scroller/${country}.png`}
              alt={country}
              fill
              className="!relative"
            />
          </div>
        ))}
      </div>
      <p className="h2-tag ml-4 shrink-0">{countryText}</p>
    </div>
  );
};
