"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";
const coinImages = [
  "btc", "doge", "usdt", "usdc", "ai",
  "avax", "eth", "sol", "trx", "xrp"
];

const P2PTrans2 = () => {
  const centerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [centerWidth, setCenterWidth] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const [centerHeight, setCenterHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    const updateSize = () => {
      if (centerRef.current) {
        setCenterWidth(centerRef.current.offsetWidth);
        setCenterHeight(centerRef.current.offsetHeight);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="site-width-sm pt-20 md:pb-40 pb-36 pb-24 grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5"
    >
      {/* Left Image */}
      <div className="relative max-w-[320px] md:max-w-[520px] mx-auto w-full">
        <div className="relative">
          <div className="w-full rounded-[28px] overflow-hidden">
            <Image
              src="/images/p2p-buyer.png"
              alt="P2P Buyer"
              fill
              className="!relative object-contain"
            />
          </div>
          <div className="md:flex hidden">
            {coinImages.slice(0, 5).map((img, index) => (
              <MotionCoin
                key={index}
                img={img}
                index={index}
                direction="right"
                distance={centerWidth + 200}
                isVisible={isVisible}
                positionClass="top-5 right-5"
              />
            ))}
          </div>
          <div className="flex md:hidden">
            {coinImages.slice(0, 5).map((img, index) => (
              <MotionCoin
                key={index}
                img={img}
                index={index}
                direction="top"
                distance={centerHeight + 140}
                isVisible={isVisible}
                positionClass="bottom-5 right-5"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center Text */}
      <div className="text-center" ref={centerRef}>
        <h2 className="h2-tag">{t('homesection_features_p2ptransfer')}</h2>
        <p className="text-lg mt-2">
          {t('homesection_features_p2ptransfertext')}
        </p>
        <button className="btn !mt-8 mx-auto" onClick={()=> {setOpen(true)}}>{t('homesection_features_downloadapp')}</button>
       
      </div>

      {/* Right Image */}
      <div className="relative max-w-[320px] md:max-w-[520px] mx-auto w-full">
        <div className="relative w-full rounded-[28px]">
          <div className="w-full rounded-[28px] overflow-hidden">
            <Image
              src="/images/p2p-sender.png"
              alt="P2P Sender"
              fill
              className="!relative object-contain"
            />
          </div>
          <div className="md:flex hidden">
            {coinImages.slice(5, 10).map((img, index) => (
              <MotionCoin
                key={index}
                img={img}
                index={index}
                direction="left"
                distance={-centerWidth - 200}
                isVisible={isVisible}
                positionClass="bottom-5 left-20"
              />
            ))}
          </div>
          <div className="flex flex-col md:hidden">
            {coinImages.slice(5, 10).map((img, index) => (
              <MotionCoin
                key={index}
                img={img}
                index={index}
                direction="bottom"
                distance={-centerHeight - 140}
                isVisible={isVisible}
                positionClass="top-5 left-20"
              />
            ))}
          </div>
        </div>
      </div>
      <DownloadPopup isOpen={open} setIsOpen={setOpen} />
    </div>
  );
};

export default P2PTrans2;


interface MotionCoinProps {
  img: string;
  index: number;
  direction: "left" | "right" | "top" | "bottom";
  distance: number;
  isVisible: boolean;
  positionClass: string;
}

const MotionCoin = ({
  img,
  index,
  direction,
  distance,
  isVisible,
  positionClass,
}: MotionCoinProps) => {
  const translateProps = direction === "left" || direction === "right"
    ? { x: isVisible ? distance : 0 }
    : { y: isVisible ? distance : 0 };
    const positionStyle = direction === "left" || direction === "right"
    ? { left: `-${(index + 1) * 10}px` } // Use left for horizontal movement
    : { left:  `-${(index + 1) * 10}px` }; // Use top for vertical movement
  return (
    <motion.div
      className={`absolute ${positionClass} z-9`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, ...translateProps }}
      transition={{
        delay: index * 0.15,
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-[36px] h-[36px] lg:w-[52px] lg:h-[52px] relative bg-white p-1 shadow-md rounded-full flex items-center justify-center"
        style={positionStyle}
      >
        <Image
          src={`/images/currencies/${img}.png`}
          alt={img}
          fill
          className="!relative object-cover"
        />
      </div>
    </motion.div>
  );
};
