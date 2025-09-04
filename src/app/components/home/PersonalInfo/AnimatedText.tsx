"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useIsAvailLanguage } from "@/lib/utils";
interface AnimateTextProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}


export const AnimateText: React.FC<AnimateTextProps> = ({ activeIndex, setActiveIndex }) => {
  const t = useTranslations();
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [revealWidth, setRevealWidth] = useState<number>(0);
  const [arrowX, setArrowX] = useState<number>(0);
  const [fullWidth, setFullWidth] = useState<number>(1);
  const [showStaticArrow, setShowStaticArrow] = useState<boolean>(false);
  const { isLanguageDisabled } = useIsAvailLanguage();
  const data = [
    { text: t('homesection_text1'), img: '/images/home-mobile.png' },
    { text: t('homesection_text2'), img: '/images/crypto-address.png' },
    { text: t('homesection_text3'), img: '/images/home-mobile.png' }
  ];
  useEffect(() => {
    let resetTimeout: ReturnType<typeof setTimeout>;
    let animateTimeout: ReturnType<typeof setTimeout>;
    let staticArrowTimeout: ReturnType<typeof setTimeout>;

    if (textRef.current) {
      const measuredWidth = textRef.current.scrollWidth;
      setFullWidth(measuredWidth);

      // Step 1: Reset
      setRevealWidth(0);
      setArrowX(0);
      setShowStaticArrow(false);

      // Step 2: Animate reveal and arrow
      animateTimeout = setTimeout(() => {
        setRevealWidth(measuredWidth);
        setArrowX(measuredWidth + 200);

        staticArrowTimeout = setTimeout(() => {
          setShowStaticArrow(true);
        }, 300);
      }, 300);

      // Step 3: Rotate text
      resetTimeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % data.length);
      }, 3000);
    }

    return () => {
      clearTimeout(animateTimeout);
      clearTimeout(staticArrowTimeout);
      clearTimeout(resetTimeout);
    };
  }, [activeIndex, setActiveIndex, data.length]);

  const revealProgress = Math.min(revealWidth / fullWidth, 1);
  const textOpacity = revealProgress;
  const arrowOpacity = Math.max(1 - arrowX / (fullWidth + 200), 0);


  return (
    <h1 className={`flex ${isLanguageDisabled ? '2xl:flex-row flex-col text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[45px]' : 'h1-tag  md:flex-row flex-col'} items-center md:gap-1 font-bold justify-center relative whitespace-nowrap`}>
      {t('homesection_title')}
      <div className="flex md:flex-row items-center gap-1 justify-center">
        <div className="relative">
          {/* Static Arrow - Controlled by showStaticArrow with 0.3s delay */}
          <div
            className={`absolute top-0 left-0 md:w-[64px] md:h-[64px] w-[48px] h-[48px] transition-all duration-200 
              ${showStaticArrow ? 'slide-in-left' : 'hidden'}`}

          >
            <Image
              src="/images/left-move.png"
              alt="static arrow"
              fill
              className="absolute"
            />
          </div>

          {/* Moving Arrow */}
          <div
            className="relative md:w-[64px] md:h-[64px] w-[48px] h-[48px]"
            style={{
              transform: `translateX(${arrowX}px)`,
              transition: arrowX === 0 ? "none" : "transform 1.1s linear, opacity 1s linear",
              opacity: arrowOpacity,
            }}
          >
            <Image
              src="/images/left-move.png"
              alt="moving arrow"
              fill
              className="!absolute"
            />
          </div>
        </div>

        {/* Text Reveal */}
        <div className="w-[320px] md:w-[400px] lg:w-[606px] relative">
          {/* Animated reveal text (foreground) */}
          <motion.div
            className="relative overflow-hidden z-1"
            animate={{ width: revealWidth }}
            transition={{
              duration: revealWidth === 0 ? 0 : 1,
              ease: "linear",
            }}
          >
            <span
              ref={textRef}
              className="block whitespace-nowrap"
              style={{
                color: `rgba(24, 12, 178, ${textOpacity})`,
                transition: "color 0.1s linear",
              }}
            >
              {data[activeIndex].text}
            </span>
          </motion.div>

          {/* Static background text */}
          <div className="absolute top-0 z-0 overflow-hidden">
            <span
              ref={textRef}
              className="block whitespace-nowrap opacity-100"
              style={{
                transition: "color 0.1s linear",
              }}
            >
              {data[activeIndex].text}
            </span>
          </div>
        </div>
      </div>
    </h1>
  );
};