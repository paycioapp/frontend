"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import animationData from "@/json/kyc-thumb-1.json";
import { LottieRefCurrentProps } from "lottie-react";
import { useTranslations } from "next-intl";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const KYC = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [inView, setInView] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Replay animation every time it comes into view
  useEffect(() => {
    if (inView && animationReady && lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
      lottieRef.current.goToAndPlay(0, true); // Replay from start
    }
  }, [inView, animationReady]);

  return (
    <section
      className="md:mb-36 mb-24 lg:mt-18 min-h-[300px]"
      ref={sectionRef}
    >
      <div className="site-width-sm">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <h2 className="h2-tag">{t('homesection_getkyc')}</h2>
            <p className="p-tag mt-4">
              {t('homesection_getkyc_text')}
            </p>
          </div>
          <div className="text-center mt-12 md:mt-0">
            <div
              className="2xl:h-[400px] md:h-[300px] h-[300px] mx-auto flex items-center"
              aria-hidden="true"
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
                onDOMLoaded={() => setAnimationReady(true)}
                className="w-full h-full !relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYC;
