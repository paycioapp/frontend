"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GetPaid = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const arrowContainerRef = useRef<HTMLDivElement | null>(null);
  const arrowImageRef = useRef<HTMLImageElement | null>(null);
  const paidImageRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const container = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
    if (container) {
      observer.observe(container);
    }
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (
      sectionRef.current &&
      arrowRef.current &&
      arrowContainerRef.current &&
      arrowImageRef.current &&
      paidImageRef.current
    ) {
      const arrow = arrowRef.current;
      const arrowContainer = arrowContainerRef.current;
      const arrowImage = arrowImageRef.current;
      const paidImage = paidImageRef.current;

      if (isVisible) {
        // Animate when visible
        const maxTranslate = arrowContainer.offsetWidth - 70;
        arrow.style.transition = "transform 1s linear";
        arrow.style.transform = `translateX(${maxTranslate}px)`;
        // Gradient transition is handled by CSS (see below)
        arrowContainer.classList.add("gradient-active");
        setTimeout(() => {
          arrowImage.style.display = "none";
          paidImage.style.display = "block";
        }, 1000); // Match animation duration
      } else {
        // Reset instantly when not visible
        arrow.style.transition = "transform 1s linear"; // Instant reset
        arrow.style.transform = `translateX(0px)`;
        arrowContainer.classList.remove("gradient-active");
        arrowImage.style.display = "block";
        paidImage.style.display = "none";
      }
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center"
    >
      <div className="xl:pb-30 md:pb-30 sm:pb-20 pb-10 sm:max-w-[85%] lg:max-w-[70%] sm:mx-0 mx-8">
        <div className="relative">
          <div className="relative">
            <Image src={"/images/man.png"} alt="" fill className="!relative rounded-[28px] overflow-hidden" />
          </div>
          <div
            className={`absolute top-0 left-0 h-full rounded-[28px] transition-all duration-1000 ease-in-out ${isVisible ? "bg-[#10B864]/25 w-full" : "bg-thm/40 w-0"
              }`}
          ></div>
          <div className="max-w-[80%] mx-auto relative">
            <div className="absolute bottom-[0%] left-[0%] flex flex-col md:gap-10">
              <div className="text-white">
                <h2 className="h1-tag">
                  {t('businesssection_getpaid')} <br />
                  {t('businesssection_fromanywhere')}
                </h2>
              </div>
              <div
                ref={arrowContainerRef}
                className="arrow-container max-w-[440px] w-full flex gap-12 font-semibold items-center justify-start sm:justify-center  md:p-4 px-2 py-2 text-white md:text-2xl rounded-full relative md:bottom-[-36px] bottom-[-24px] overflow-hidden"
                style={{ background: "#180cb2" }} // Initial background
              >
                <div
                  ref={arrowRef}
                  className="md:w-[58px] md:h-[58px] h-[42px] w-[42px] absolute left-1 top-1/2 p-1 transform -translate-y-1/2 z-10"
                >
                  <Image
                    ref={arrowImageRef}
                    src={"/images/get-paid-arrow.png"}
                    alt="arrow"
                    fill
                    className="!relative object-cover"
                  />
                  <Image
                    ref={paidImageRef}
                    src={"/images/get-paid.png"}
                    alt="arrow"
                    fill
                    className="!relative object-cover"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex gap-2 font-semibold items-center z-10">
                  <Image
                    src={"/images/currencies/btc.png"}
                    alt="btc"
                    fill
                    className="!relative object-cover !w-[36px] !h-[36px]"
                  />
                  0.05 BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPaid;