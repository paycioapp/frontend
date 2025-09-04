
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
const FraudAvarenessContent = () => {
  const [openFaq, setOpenFaq] = useState(1);
  const t = useTranslations();
  const fraudDataList = [
    {
      id: 1,
      header: t('fraudawarenes_question1'),
      content: t('fraudawarenes_answer1')
    },
    {
      id: 2,
      header: t('fraudawarenes_question2'),
      content: t('fraudawarenes_answer2')
    },
    {
      id: 3,
      header: t('fraudawarenes_question3'),
      content: t('fraudawarenes_answer3')
    },
    {
      id: 4,
      header: t('fraudawarenes_question4'),
      content: t('fraudawarenes_answer4')
    },
    {
      id: 5,
      header: t('fraudawarenes_question5'),
      content: t('fraudawarenes_answer5')
    },
  ];
  return (
    <div className="w-full">
      {fraudDataList.map((faq) => (
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
            <span className="text-xl lg:text-2xl font-[400]">{faq.header}</span>

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
  );
};

export default FraudAvarenessContent;


