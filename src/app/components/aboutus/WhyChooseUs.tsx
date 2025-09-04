"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "../icons/Icons";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const cardRef = useRef<HTMLDivElement>(null); // Ref for measuring card width
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(420); // Default fallback width

  const features = [
    {
    title: t('about_feature101_title'),
    desc: t('about_feature101_desc'),
    icon: "/images/instant.png",
  },
  {
    title: t('about_feature102_title'),
    desc: t('about_feature102_desc'),
    icon: "/images/secure.png",
  },
  {
    title: t('about_feature103_title'),
    desc: t('about_feature103_desc'),
    icon: "/images/nohiddenfee.png",
  },
  {
    title: t('about_feature104_title'),
    desc: t('about_feature104_desc'),
    icon: "/images/friendly.png",
  },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current && cardWidth) {
      const container = scrollContainerRef.current;
      container.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width + 24); // Add gap/margin if any (adjust as needed)
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Set initial state
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <>
      <div className="site-width-sm pt-16">
        <div className="flex flex-row justify-between items-center">
          <h2 className="h2-tag !text-left font-outfit font-bold max-w-[530px]">
           {t('about_whychoose')}
          </h2>
          <div className="flex gap-2 mt-5 sm:mt-0">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${canScrollLeft ? "hover:bg-[#f8f8f8]" : "opacity-50 cursor-not-allowed"}`}
            >
              <ChevronRight className="rotate-180" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${canScrollRight ? "hover:bg-[#f8f8f8]" : "opacity-50 cursor-not-allowed"}`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="ml-0 sm:ml-0 md:ml-0 lg:ml-24 xl:ml-24 2xl:ml-72 md:mb-36 mb-12 mr-auto lg:mr-0 lg:p-0 whychoose-margin-left">
        <div>
          <div
            ref={scrollContainerRef}
            className="flex gap-0 md:mt-6 overflow-x-auto flex-nowrap hide-scrollbar whychoose-section"
          >
            {features.map((feature, index) => (
              <div
                ref={index === 0 ? cardRef : null} // Attach ref to the first card
                style={{
                  boxShadow: "rgb(24 12 178 / 5%) 0px 0px 38px 0px",
                  margin: "36px 12px",
                }}
                key={index}
                className="w-[340px] md:w-[410px] bg-[#fff] hover:bg-[#fff] p-8 rounded-2xl flex-shrink-0 w-60 transition-all shadow-md"
              >
                <div className="w-fit">
                  <div className="bg-[#d9d9d938] w-18 aspect-square rounded-full grid place-items-center feature-svg-image 2xl:mb-8 md:mb-4 mb-0">
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
                <h2 className="font-semibold mt-0 2xl:mt-4 text-lg 2xl:text-3xl font-outfit">
                  {feature.title}
                </h2>
                <p className="max-w-[200px] 2xl:max-w-[300px] text-lg xl:text-xl 2xl:text-2xl mt-2 font-outfit">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
