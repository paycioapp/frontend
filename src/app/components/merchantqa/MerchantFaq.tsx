'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { complianceMerchantFaq, FAQItem, generalFaq, onboardingFaq, pricingFaq, settlementMerchantFaq, supportedMerchantFaq, technicalMercahntFaq } from './Faqdata';
import TabsWithScroll from '../UcpiFAQData/TableScroller';
import { useTranslations } from 'next-intl';
import { FAQAccordion } from '../UcpiFAQData/FAQAccordian';




export default function MerchantFAQPage() {
    const t = useTranslations();
    const generalInformationFaqs = generalFaq();
    const onboardingProcessFaqs = onboardingFaq();
    const pricingAndFeesFaqs = pricingFaq();
    const technicalIntegrationFaqs = technicalMercahntFaq();
    const complianceSecurityFaqs = complianceMerchantFaq();
    const settlementFaqs = settlementMerchantFaq();
    const supportMaintenanceFaqs = supportedMerchantFaq();
    const tabs = [
        { name: t('merchantqa_tab1'), data: generalInformationFaqs },
        { name: t('merchantqa_tab2'), data: onboardingProcessFaqs },
        { name: t('merchantqa_tab3'), data: pricingAndFeesFaqs },
        { name: t('merchantqa_tab4'), data: technicalIntegrationFaqs },
        { name: t('merchantqa_tab5'), data: complianceSecurityFaqs },
        { name: t('merchantqa_tab6'), data: settlementFaqs },
        { name: t('merchantqa_tab7'), data: supportMaintenanceFaqs },
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
        <div className="site-width relative -top-12">
            <div className="bg-white px-4 py-8 sm:px-10 shadow-[0px_12px_36px_0px_#dadfe3] rounded-lg">
                <TabsWithScroll tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} className={' border-b border-gray-200 text-black'} tabActiveColor={''} type={'merchantqa'} />
                <FAQAccordion faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} type='merchant' />
            </div>
        </div>
    );
}
