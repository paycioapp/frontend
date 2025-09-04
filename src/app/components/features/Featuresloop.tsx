"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";

interface FeatureItem {
  title: string;
  content: string;
}

const FeaturesLoop = () => {
  const t = useTranslations();
  const featuresRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0%", "20% start"] });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const rotationControls = useAnimation();

  const loopData: FeatureItem[] = [
    {
      title: t('features_loop_header1'),
      content: t('features_loop_content1'),
    },
    {
      title: t('features_loop_header2'),
      content: t('features_loop_content2'),
    },
  ];

  const itemHeight = 240;
  const heightValue = useMotionValue(240);
  const smoothHeight = useSpring(heightValue, { damping: 30, stiffness: 150 });

  useEffect(() => {
    rotationControls.start({
      rotate: 0,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [rotationControls]);

  // Feature cycling based on scroll
  const featureIndex = useTransform(scrollYProgress, [0, 1], [0, loopData.length - 1]);

  useEffect(() => {
    return featureIndex.onChange((latest) => {
      const newIndex = Math.round(latest);
      setActiveIndex(newIndex);
      heightValue.set(Math.max(60, (newIndex + 1) * (itemHeight / 1.5)));
    });
  }, [featureIndex, heightValue]);

  return (
    <section ref={containerRef} className="relative md:min-h-[150vh] lg:min-h-[200vh] min-h-[300vh] bg-white pt-0 md:pt-18" id="crossborder">
      <div className="site-width-sm sticky relative top-0 md:h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-2 mx-auto py-[80px]">

          {/* Rotating Coin Image */}
          <div className="md:block hidden">
            <div className="relative w-full max-w-[420px] md:max-w-[560px] mx-auto rounded-full overflow-hidden">
              <motion.img
                src="/images/features/coin-circle.png"
                alt="Feature Image"
                className="relative object-contain coin-image"
                style={{ width: "100%", height: "100%" }}
                animate={rotationControls}
              />
              <div className="absolute w-[80%] max-w-[396px] left-1/2 top-[8%] transform -translate-x-1/2">
                <Image
                  src="/images/features/mobile.png"
                  alt="Feature Image"
                  fill
                  className="object-contain !relative"
                />
              </div>
            </div>

          </div>
          {/* Features Content */}
          <div className="relative mt-5">
            {/* Animated Progress Bar */}
            <motion.div
              className="absolute w-[4px] left-[-4px] top-2"
              style={{
                height: smoothHeight,
                background: `linear-gradient(to bottom, #180cb2 0%, #180cb2 ${((activeIndex + 1) / loopData.length) * 100}%, #dadfe3 100%)`,
                borderRadius: "8px",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Feature Text */}
            <div className="features relative overflow-hidden pl-5">
              <div ref={featuresRef} className="feature-container relative">
                {loopData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (

                    <motion.div
                      key={`feature-${index}`}
                      className="feature-item relative w-full font-outfit md:mb-18 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.2 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >

                      <motion.h2
                        className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-extrabold max-w-[600px]"
                        animate={{ opacity: isActive ? 1 : 0.2 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {item.title}
                      </motion.h2>
                      <AnimatePresence mode="wait">

                        <motion.p
                          key={`content-${index}`}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                          className="mt-2 text-lg "
                        >
                          {item.content}
                        </motion.p>

                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden block">
            <div className="relative w-full max-w-[420px] md:max-w-[560px] mx-auto rounded-full overflow-hidden">
              <motion.img
                src="/images/features/coin-circle.png"
                alt="Feature Image"
                className="relative object-contain coin-image"
                style={{ width: "100%", height: "100%" }}
                animate={rotationControls}
              />
              <div className="absolute w-[80%] max-w-[396px] left-1/2 top-[8%] transform -translate-x-1/2">
                <Image
                  src="/images/features/mobile.png"
                  alt="Feature Image"
                  fill
                  className="object-contain !relative"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLoop;
