"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "../icons/Icons";
import { useLocale, useTranslations } from "next-intl";
import { isRTL } from "@/lib/utils";

const Security = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const divref = useRef<HTMLDivElement>(null);

  const [itemWidth, setItemWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const locale = useLocale(); // detect current locale
  const rtl = isRTL(locale); // true if current locale is RTL

  const items = useSecurity();

  // Measure item width
  useEffect(() => {
    const calculateItemWidth = () => {
      if (divref.current) {
        const styles = window.getComputedStyle(divref.current);
        const width = parseFloat(styles.width);
        const margin = rtl
          ? parseFloat(styles.marginLeft) // for RTL, margin-left is between items
          : parseFloat(styles.marginRight); // for LTR, margin-right
        const totalWidth = width + margin;
        setItemWidth(totalWidth);
      }
    };

    calculateItemWidth();
    window.addEventListener("resize", calculateItemWidth);
    return () => window.removeEventListener("resize", calculateItemWidth);
  }, [rtl]);

  // ✅ RTL-aware scroll behavior
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let delta = direction === "right" ? itemWidth : -itemWidth;

    if (rtl) {
      delta = -delta; // flip for RTL
    }

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  // ✅ RTL-aware scroll button logic
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (rtl) {
      setCanScrollLeft(scrollLeft < 0);
      setCanScrollRight(Math.abs(scrollLeft) < maxScroll);
    } else {
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScroll);
    }
  };
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
      <section className="bg-[#F9F9FE] lg:py-32 lg:py-24 pt-18 pb-20 lg:px-0 px-5 xl:mt-24 2xl:mt-0 mt-0">
        <div
          className="ml-0 site-width-sm lg:p-0 whychoose-margin-left flex md:flex-row flex-col md:items-center gap-5 md:gap-12 lg:gap-24">
          <div className="flex gap-2 mt-5 sm:mt-0 justify-end">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all w-[48px] h-[48px] ${canScrollLeft
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronRight className={!rtl ? 'rotate-180' : ''} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all w-[48px] h-[48px] ${canScrollRight
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronRight className={rtl ? 'rotate-180' : ''} />
            </button>
          </div>
          <div>
            <div
              ref={scrollContainerRef}
              className="flex overflow-auto hide-scrollbar gap-8 security-list"
            >
              {items.map((feature, index) => (
                <div ref={divref}
                  style={{
                    boxShadow: "rgb(24 12 178 / 5%) 0px 0px 38px 0px",

                  }}
                  key={index}
                  className="bg-[#fff] hover:bg-[#fff] md:p-12 p-8 rounded-2xl flex-shrink-0 w-fit transition-all shadow-md"
                >
                  <div className="w-fit">
                    <div className="aspect-square rounded-full grid place-items-center feature-svg-image 2xl:mb-8 md:mb-4 mb-2">
                      <div className="relative w-[64px] h-[64px]">
                        <Image
                          src={`/images/security/${feature.icon}.svg`}
                          alt=""
                          className="object-contain"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className="h2-tag">{feature.title}</h2>
                  <p className="p-tag max-w-[650px] mt-3">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;

export function useSecurity() {
  const t = useTranslations();
  const items = [
    {
      title: t('businesssection_securitytitle1'),
      desc: t('businesssection_securitydesc1'),
      image: "instant",
      icon: "1",
    },
    {
      title: t('businesssection_securitytitle2'),
      desc: t('businesssection_securitydesc2'),
      image: "secure-wallet",
      icon: "2",
    },
    {
      title: t('businesssection_securitytitle3'),
      desc: t('businesssection_securitydesc3'),
      image: "lowfee",
      icon: "3",
    },
    {
      title: t('businesssection_securitytitle4'),
      desc: t('businesssection_securitydesc4'),
      image: "multi-currency",
      icon: "4",
    },
    {
      title: t('businesssection_securitytitle5'),
      desc: t('businesssection_securitydesc5'),
      image: "lightning",
      icon: "5",
    },
  ];
  return items
}
