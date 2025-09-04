"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealScaleUp, RevealUp } from "@/app/components/utils/Reveal";
import Image from "next/image";

const SecurityReliability = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "30% start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={containerRef} className="h-[200vh] relative t-space">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale }}
        >
          <motion.img
            src="/images/security-reliability.png"
            className="md:block hidden w-full h-full object-cover"
          />
          <motion.img
            src="/images/security-short.jpg"
            className="md:hidden w-full h-full object-cover"
          />
        </motion.div>
        <SecurityContentCard />
      </div>
    </div>
  );
};

export default SecurityReliability;

const SecurityContentCard = () => {
  return (
    <RevealUp className="absolute flex flex-col pb-6 md:pb-0 px-6 justify-end md:grid h-full w-full grid-cols-2 items-center">
      <div className="relative z-1 p-4 lg:p-8 xl:p-10 pt-14 xs:pt-20 lg:pt-20 xl:pt-20 2xl:pt-24 rounded-3xl w-fit mx-auto text-white bg-[#110E0D]/25 backdrop-blur-lg transition-all">
        <RevealScaleUp
          duration={1.5}
          className="mx-auto w-16 xs:w-20 2xl:w-24 absolute -top-10 2xl:-top-16 left-1/2 -translate-x-1/2 aspect-[99/121]"
        >
          <Image fill
            src="/images/trusted.png"
            alt=""
            className="w-full h-full object-contain !relative"
          />
        </RevealScaleUp>
        <h2 className="text-center font-outfit text-xl xs:text-3xl xmd:text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold">
          Security & Reliability
        </h2>
        <p
          className={`text-sm xs:text-base xmd:text-xl md:text-base 2xl:text-2xl mt-4 xl:mt-6 xmd:max-w-[500px] md:max-w-[350px] 2xl:max-w-[600px] mx-auto text-center font-medium`}
        >
          Transparency, robust security protocols, and relentless testing -
          these are the three key pillars of our security strategy to protect
          your funds, transactions, and personal data.
        </p>
      </div>
    </RevealUp>
  );
};