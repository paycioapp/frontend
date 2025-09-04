'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '@/app/components/merchantqa/Faqdata';
import { businessFaq, commercialFaq, complianceFaq, technicalFaq, ucpiFAQData } from './QAData';
import TabsWithScroll from './TableScroller';
import { useTranslations } from 'next-intl';
import { FAQAccordion } from './FAQAccordian';

interface Tab {
    name: string;
    data: FAQItem[];
}



const UCPIQAData = () => {
    const t = useTranslations();
    const businessFaqData = businessFaq()
    const technicalFaqData = technicalFaq()
    const commercialFaqData = commercialFaq()
    const complianceFAQ = complianceFaq()
    const ucpiFaqData = ucpiFAQData();
    const tabs: Tab[] = [
        { name: t('ucpiqa_tab1'), data: businessFaqData },
        { name: t('ucpiqa_tab2'), data: technicalFaqData },
        { name: t('ucpiqa_tab3'), data: commercialFaqData },
        { name: t('ucpiqa_tab4'), data: complianceFAQ },
        { name: t('ucpiqa_tab5'), data: ucpiFaqData }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].name);
    const [faqs, setFaqs] = useState(tabs[0].data);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const selectedTab = tabs.find((tab) => tab.name === activeTab);
        setFaqs(selectedTab?.data || []);
        setOpenIndex(null);
    }, [activeTab]);


    return (
        <>
            <div className='bg-[#0b00b6]'>
                <div className='site-width'>
                    <TabsWithScroll tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} className={'bg-[#180CB2] text-white'} tabActiveColor={'#4638F4'} type={'ucpiqa'} />
                </div>
            </div>
            <div className="site-width"><FAQAccordion faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} type={'ucpi'} /> </div>

        </>
    );
}

export default UCPIQAData




