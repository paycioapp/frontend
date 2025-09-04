"use client";
import { ChevronRight } from "@/app/components/icons/Icons";
import React, { useRef, useState, useEffect } from "react";
import Image from "@/app/components/utils/Image";
import { useTranslations } from "next-intl";
import { usePaymentfeatures } from "./fetureslist";

export const FeatureSection = () => {
  const t = useTranslations();
  const paymentFeatures = usePaymentfeatures()
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Scroll detection
  useEffect(() => {
    const scrollElement = scrollRef.current;

    const updateScrollInfo = () => {
      if (scrollElement) {
        const {
          scrollLeft,
          scrollTop,
          scrollWidth,
          clientWidth,
          scrollHeight,
          clientHeight,
        } = scrollElement;

        if (isMobile) {
          setIsAtStart(scrollLeft === 0);
          setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        } else {
          setIsAtStart(scrollTop === 0);
          setIsAtEnd(scrollTop + clientHeight >= scrollHeight - 1);
        }
      }
    };

    if (scrollElement) {
      scrollElement.addEventListener("scroll", updateScrollInfo);
      updateScrollInfo(); // Initial check
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", updateScrollInfo);
      }
    };
  }, [isMobile]);

  const scrollLeftOrUp = () => {
    if (scrollRef.current && !isAtStart) {
      if (isMobile) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft - 200,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollTop - 200,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRightOrDown = () => {
    if (scrollRef.current && !isAtEnd) {
      if (isMobile) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft + 400,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollTop + 400,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-[#FFFFFF]" >
      <div className="site-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-5 mx-auto md:pt-[60px] lg:pt-[90px] pt-[40px]">
          {/* Left Image */}
          <div className="relative w-full h-full max-w-[420px] md:max-w-[530px] lg:max-w-[100%] mx-auto">
            <div className="relative lg:absolute bottom-0">
              <Image
                src="/images/features/man.png"
                alt="Feature Image"
                className="!relative object-contain"
              />
            </div>
          </div>

          {/* Feature Section */}
          <div className="features relative">
            <div className="sm:flex md:block block justify-between gap-5 items-center">
              <h1 className="h2-tag max-w-[660px]">
                {t('featurestitle')}
              </h1>

              {/* Scroll Arrows for Mobile (Horizontal Scroll) */}
              <div className="lg:hidden flex justify-end gap-2 mt-4">
                <button
                  onClick={scrollLeftOrUp}
                  disabled={isAtStart}
                  className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8] ${
                    isAtStart ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight className="rotate-180" />
                </button>
                <button
                  onClick={scrollRightOrDown}
                  disabled={isAtEnd}
                  className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8] ${
                    isAtEnd ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight className="rotate-0" />
                </button>
              </div>
            </div>

            {/* Feature List */}
            <div className="flex items-center self-center mt-5 lg:mt-12 gap-5 lg:min-w-[450px]">
              <div
                ref={scrollRef}
                className="overflow-x-auto lg:overflow-y-auto lg:max-h-[320px] xl:max-h-[360px] 2xl:max-h-[530px] px-5 scrollbar-hide no-scrollbar
                 flex flex-row lg:flex-col gap-6 whitespace-nowrap transition-all duration-500 ease-in-out lg:max-w-[540px]"
              >
                <ul className="flex lg:flex-col flex-row space-x-6 lg:space-x-0 lg:space-y-6 max-w-full ">
                  {paymentFeatures.map((feature, index) => (
                    <a href={feature.link}
                      key={index}
                      className="feature-card flex flex-row lg:flex-row items-center w-full gap-5 min-w-[400px] lg:min-w-[0px]"
                    >
                      <div
                        className="feature-image w-[85px] h-[85px] rounded-lg flex justify-center items-center"
                        style={{
                          background: feature.bgcolor,
                          flex: "0 0 85px",
                        }}
                      >
                        <Image
                          src={feature.image}
                          alt="Feature Image"
                          className="!relative object-scale-down !w-7 !h-7"
                        />
                      </div>
                      <div style={{ whiteSpace: "break-spaces" }}>
                        <h3 className="text-lg md:text-xl xl:text-2xl font-bold font-outfit">
                          {feature.header}
                        </h3>
                        <p className="text-md md:text-lg mt-1">
                          {feature.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </ul>
              </div>

              {/* Scroll Arrows for Desktop (Vertical Scroll) */}
              <div className="hidden lg:flex flex-col gap-2">
                <button
                  onClick={scrollLeftOrUp}
                  disabled={isAtStart}
                  className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8] ${
                    isAtStart ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight className="rotate-270" />
                </button>
                <button
                  onClick={scrollRightOrDown}
                  disabled={isAtEnd}
                  className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8] ${
                    isAtEnd ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
