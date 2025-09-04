"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RightArrow } from "../icons/Icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Help = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = useTranslations();
  return (
    <>
      <section className="sm:mt-36 mt-24 sm:mb-36 mb-24">
        <div className="site-width-sm">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="max-w-[536px]">
              <h2 className="h2-tag">{t('homesection_helpyou')}</h2>
              <p className="p-tag">
                {t('homesection_helpyou_text')}
              </p>
              <div className="flex items-center gap-2 mt-10 max-w-[475px]">
                <input
                  type="text"
                  placeholder={t('placeholder_email')}
                  className="focus:outline-none focus:ring-0 text-sm flex-1 bg-[#FAFAFA] rounded-[24px] px-3 py-3 w-full max-w-md h-[52px]"
                />
                <button className="bg-thm text-white text-sm px-4 py-2 hover:bg-opacity-90 transition h-[52px] rounded-[24px]">
                  {t('homesection_helpyou_btn')}
                </button>
              </div>
            </div>
            <div>
              <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;

interface Faq {
  openFaq: number | string | null;
  setOpenFaq: (value: number) => void;
}
const FAQ: React.FC<Faq> = ({ openFaq, setOpenFaq }) => {
  const t = useTranslations()
  const FAQs = [
    {
      id: 1,
      header: t('homesection_helpyou_header1'),
      content: t('homesection_helpyou_content1'),
    },
    {
      id: 2,
      header: t('homesection_helpyou_header2'),
      content: t('homesection_helpyou_content2'),
    },
    {
      id: 3,
      header: t('homesection_helpyou_header3'),
      content: t('homesection_helpyou_content3'),
    },
  ];
  return (
    <div>
      {FAQs.map((faq) => (
        <div
          key={faq.id}
          className="py-6 border-b border-[#dadfe3] last:border-none font-outfit"
        >
          {/* Accordion Header */}
          <div
            onClick={() => setOpenFaq(faq.id)}
            className="cursor-pointer w-full flex justify-between items-center   transition-all font-outfit"
            style={{
              borderBottomLeftRadius: openFaq === faq.id ? 0 : "",
              borderBottomRightRadius: openFaq === faq.id ? 0 : "",
            }}
          >
            <div className="text-[22px] text-[#1f1f1f] font-[500]">
              {faq.header}
            </div>

            <div className="p-2 h-4 w-4 rounded-[50%] text-[16px] font-semibold bg-thm text-[#fff] flex items-center justify-center self-center">
              {openFaq !== faq.id ? "+" : "−"}
            </div>
          </div>

          {/* Accordion Content */}
          <AnimatePresence>
            {openFaq === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden "
              >
                <div className="text-[18px] mt-3 ">{faq.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div className="mt-5 font-[600] text-thm flex items-center gap-3 cursor-pointer">
        <Link href={'FAQ'} className="mt-[3px] flex items-center gap-2">{t('more_FAQ')} {RightArrow.RC.path({
          className: "text-[#000] ",
          color: "#180cb2",
        })}</Link>

      </div>
    </div>
  );
};


