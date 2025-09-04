"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealScaleUp, RevealUp } from "@/app/components/utils/Reveal";
import Image from "next/image";
import ScrollStrip from "./ScrollStrip";
import { useTranslations } from "next-intl";

const HowWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "30% start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleImageClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (isPlaying) {
  //       setIsPlaying(false); // hide video on scroll
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [isPlaying]);
  return (
    <>
      <div ref={containerRef} className="h-[200vh] relative t-space">
        <div className="sticky top-0 w-full h-screen overflow-hidden" >
          {!isPlaying ? (
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ scale }}
            >

              <>
                <motion.img
                  src="/images/how-works.png"
                  className="w-full h-full object-cover md:block hidden"
                />
                <motion.img
                  src="/images/how-works-m.png"
                  className="w-full h-full object-cover md:hidden block"
                />
              </>

            </motion.div>) : (
            <>
              <div className="max-w-[80%] max-h-[80%] w-full h-full mx-auto rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4Lda2E6TEr4?autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute right-[15px] top-[15px] z-10 bg-black text-white rounded-full px-3 py-1 text-base cursor-pointer" onClick={handleCloseVideo}>{t('homesection_downloadpop_close')}</div>
              <div className="overlay" onClick={handleCloseVideo}></div>
            </>

          )}


          <HowWorksCard isPlaying={isPlaying}
            handleImageClick={handleImageClick} />
          {isPlaying && (
            <div onClick={handleCloseVideo} className="absolute md:w-[75px] !w-[60px] top-12 right-12 flex items-center justify-center z-5">
              <i className="fa fa-close"></i>
            </div>
          )}
          {!isPlaying && (<ScrollStrip />)}
        </div>
      </div>

    </>
  );
};

export default HowWorks;
interface HowWorksCardProps {
  handleImageClick: () => void;
  isPlaying: boolean;
}
const HowWorksCard = ({ handleImageClick, isPlaying }: HowWorksCardProps) => {
  const t = useTranslations();
  if (isPlaying) return null; // Don't render the card when the video is playing
  return (
    <RevealUp className="absolute flex md:flex-col pb-6 md:pb-0 px-6 justify-end md:grid h-full w-full grid-cols-2 items-center site-width">
      <div className="max-w-[400px] min-h-[145px] flex items-center relative z-1 p-4 lg:p-8 xl:p-10 md:pb-14 pb-8  lg:pb-20 xl:pb-10 2xl:pb-14 rounded-3xl w-fit mx-auto text-white bg-[#110E0D]/25 backdrop-blur-lg transition-all">

        <h2 className="text-center h2-tag">{t('homesection_downloadpop_howworks')}</h2>
        <RevealScaleUp
          duration={1.5}
          className="mx-auto absolute -bottom-10 left-1/2 -translate-x-1/2 aspect-[99/121]"
        >
          <div onClick={handleImageClick}>
            <Image fill
              src="/images/play-btn.png"
              alt=""
              className="w-full h-full object-contain !md:w-[75px] !w-[60px] !relative"
            />
          </div>
        </RevealScaleUp>
      </div>
    </RevealUp>
  );
};
