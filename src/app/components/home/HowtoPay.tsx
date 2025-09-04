"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealScaleUp } from "../utils/Reveal";
import { useTranslations } from "next-intl";

const HowtoPay = () => {
  const t = useTranslations();
  const payData = [
    {
      title: t('homesection_howtopay_title1'),
      content: t('homesection_howtopay_content1'),
      img: "open-paycio.png",
    },
    {
      title: t('homesection_howtopay_title2'),
      content: t('homesection_howtopay_content2'),
      img: "enter-number.png",
    },
    {
      title: t('homesection_howtopay_title3'),
      content: t('homesection_howtopay_content3'),
      img: "send-crypto.png",
    },
  ];

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Animation variants for individual pay steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="md:py-36 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when section enters viewport
      viewport={{ amount: 0.2 }} // Trigger when 20% of the section is visible, no 'once'
    >
      <div className="site-width-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left image */}
          <div
            className="relative w-full max-w-[573px] mx-auto rounded-[24px] overflow-hidden"
          >
            <Image
              src="/images/how-to-pay.png"
              alt="How to pay with Paycio"
              fill
              className="object-contain !relative"
            />
            <RevealScaleUp duration={1} className="w-[60%] h-[54%] -bottom-7 -right-6 absolute">
              <Image
                src="/images/payment.png"
                alt="How to pay with Paycio"
                fill
                className="object-contain relative"
              />
            </RevealScaleUp>

          </div>

          {/* Right content */}
          <div>
            <h2 className="h2-tag mb-4">{t('homesection_howtopay')}</h2>
            <p className="p-tag mb-6">
              {t('homesection_howtopay_text')}
            </p>

            <div className="space-y-8 md:mt-16 mt-5">
              {payData.map((data, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-5"
                  variants={stepVariants}
                >
                  <div className="relative w-[64px] h-[64px]">
                    <Image
                      src={`/images/${data.img}`}
                      alt={data.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="h4-tag">{data.title}</h4>
                    <p className="text-base md:text-[20px] text-gray-600">
                      {data.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowtoPay;


