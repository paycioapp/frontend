"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronRight,
} from "../icons/Icons";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { isRTL } from "@/lib/utils";


const WhyChooseUs = () => {
  const locale = useLocale();
  const rtl = isRTL(locale);
  const t = useTranslations()
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollDiv = useRef<HTMLDivElement>(null);
  const features = [
    {
      title: t('businesssection_whychoose_title1'),
      desc: t('businesssection_whychoose_desc1'),
      icon: "/images/dollar.svg",
    },
    {
      title: t('businesssection_whychoose_title2'),
      desc: t('businesssection_whychoose_desc2'),
      icon: "/images/globe.svg",
    },
    {
      title: t('businesssection_whychoose_title3'),
      desc: t('businesssection_whychoose_desc3'),
      icon: "/images/security.svg",
    },
    {
      title: t('businesssection_whychoose_title1'),
      desc: t('businesssection_whychoose_desc1'),
      icon: "/images/dollar.svg",
    },
    {
      title: t('businesssection_whychoose_title2'),
      desc: t('businesssection_whychoose_desc2'),
      icon: "/images/globe.svg",
    },
    {
      title: t('businesssection_whychoose_title3'),
      desc: t('businesssection_whychoose_desc3'),
      icon: "/images/security.svg",
    },
  ];

  useEffect(() => {
    if (scrollDiv.current) {
      setWidth(scrollDiv.current.offsetWidth);
    }
  }, []);

  // ✅ RTL-aware Scroll Behavior
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = width;

    // In RTL, left/right directions are flipped
    let delta = direction === "right" ? scrollAmount : -scrollAmount;
    if (rtl) delta = -delta;

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  // ✅ RTL-aware scroll boundary detection
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (rtl) {
      // ScrollLeft is negative in most RTL browsers (Chrome)
      setCanScrollLeft(scrollLeft < 0);
      setCanScrollRight(Math.abs(scrollLeft) < maxScroll);
    } else {
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScroll);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial state
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [rtl]);

  return (
    <>
      <div
        className="site-width-sm mt-24 mb-24
 "
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="h2-tag">{t('businesssection_whychoose_text')}</h2>
          <div className="flex gap-2 mt-5 sm:mt-0">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${canScrollLeft
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronRight className={!rtl ? 'rotate-180' : ''} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${canScrollRight
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronRight className={rtl ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
        <div>
          <div
            ref={scrollContainerRef}
            className="flex gap-0 md:mt-6 overflow-x-auto flex-nowrap hide-scrollbar whychoose-section"
          >
            {features.map((feature, index) => (
              <div ref={scrollDiv}
                style={{
                  margin: "36px 12px",
                }}
                key={index}
                className="w-[340px] md:w-[410px] bg-[#F9F9FE] hover:bg-thm hover:text-white px-8 2xl:py-16 py-12 rounded-2xl flex-shrink-0 transition-all group"
              >
                <div className="w-fit">
                  <div className="bg-thm w-16 aspect-square rounded-full grid place-items-center feature-svg-image 2xl:mb-8 md:mb-4 mb-4 transition-all duration-300 group-hover:bg-[#fff]/20">
                    <div className="relative w-[36px] h-[36px]">
                      <Image
                        src={feature.icon}
                        alt=""
                        className="object-contain !w-[36px] !h-[36px]"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>
                </div>
                <h4 className="h4-tag">{feature.title}</h4>
                <p className="text-lg mt-2 font-outfit">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;




