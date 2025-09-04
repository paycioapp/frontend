"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";


const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState("one");
  const t = useTranslations();

  const faqs = [
    {
      id: "one",
      header: t('referfaq_header1'),
      content:
        t('referfaq_content1'),
    },
    {
      id: "two",
      header: t('referfaq_header2'),
      content:
        t('referfaq_content2'),
    },
    {
      id: "three",
      header:
        t('referfaq_header3'),
      content:
        t('referfaq_content3'),
    },
    {
      id: "four",
      header: t('referfaq_header4'),
      content:
        t('referfaq_content4')
    },
    {
      id: "five",
      header: t('referfaq_header5'),
      content:
        t('referfaq_content5')
    },
    {
      id: "six",
      header: t('referfaq_header6'),
      content:
        t('referfaq_content6')
    },
  ];
  return (
    <section className="py-16 md:mb-36 mb-20">
      <div className="site-width-sm mx-auto">
        <h1 className="pyc-title text-center text-5xl mb-8">FAQs</h1>
        <div>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-6 border-b border-[#dadfe3] last:border-none"
            >
              {/* Accordion Header */}
              <div
                onClick={() => setOpenFaq(faq.id)}
                className="cursor-pointer w-full flex justify-between items-center   transition-all font-outfit font-[400]"
                style={{
                  borderBottomLeftRadius: openFaq === faq.id ? 0 : "",
                  borderBottomRightRadius: openFaq === faq.id ? 0 : "",
                }}
              >
                <span className="text-xl lg:text-2xl font-[500]">{faq.header}</span>

                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
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
                    <div className="xl:text-xl mt-3 ">{faq.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
