"use client"
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FAQItem, seapenMerchantFaq } from "./Faqdata";
import { useTranslations } from "next-intl";
import { FAQAccordion } from "../UcpiFAQData/FAQAccordian";

const SeapenFaq = () => {
    const t = useTranslations();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const seapenFAQs = seapenMerchantFaq();
    return (
        <section>
            <div className="site-width"><h2 className="h2-tag mt-9 mb-5">{t('seapenfaq_header')}</h2></div>
            <FAQAccordion faqs={seapenFAQs} openIndex={openIndex} setOpenIndex={setOpenIndex} type={'seapen'} />
        </section>
    )
}

export default SeapenFaq