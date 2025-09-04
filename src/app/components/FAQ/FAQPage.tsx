"use client";
import { useEffect, useMemo, useState } from "react";
import PageHeader from "../PageHeader";
import FAQAccordian from "./FAQComponent";
import { useFaqContent } from "./FAQData";
import { useTranslations } from "next-intl";

interface FaqItem {
  questionKey: string;
  answerKey?: string[];
  answertitle?: string[];
  answerKeyli?: { key: string; value: string }[];
  table?: { left: string; right: string; extra: string }[];
  linetext?: string;
  mail?: string;
}

const FAQPage = () => {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [type, setType] = useState<number>(1);
  const [openData, setData] = useState<FaqItem[]>([]);
  const { Generals, identityVerification, security, payments, fees, ucpi } = useFaqContent();
  const sidenav = useMemo(() => [
    {id:1, type: t('faqpagetext_header1'), data: Generals },
    {id:2, type: t('faqpagetext_header2'), data: identityVerification },
    {id:3, type: t('faqpagetext_header3'), data: security },
    {id:4, type: t('faqpagetext_header4'), data: payments },
    {id:5, type: t('faqpagetext_header5'), data: fees },
    {id:6, type: t('faqpagetext_header6'), data: ucpi },
  ], [Generals, identityVerification, security, payments, fees, ucpi,t]);

  useEffect(() => {
    const selected = sidenav.find((item) => item.id === type);
    if (selected) {
      setData(selected.data);
    }
  }, [type, sidenav]);

  return (
    <section>
      <PageHeader title="Frequently asked questions" text="" />
      <div className="site-width-sm mt-24 md:mb-45 mb-24">
        <div className="flex md:flex-row flex-col gap-12">
          {/* Side nav */}
          <ul className="max-w-[full] md:max-w-[240px] lg:max-w-[360px] w-full">
            {sidenav.map((item, id) => (
              <li
                key={id}
                className={`text-lg list-none cursor-pointer font-semibold px-5 py-2 ${item.id === type ? " bg-[#180cb2] text-white" : "bg-[#f7f7f7]"
                  }`}
                onClick={() => {
                  setType(item.id);
                  setOpenFaq(null);
                }}
              >
                {item.type}
              </li>
            ))}
          </ul>

          {/* FAQ content */}
          <div className="flex-1 text-lg">
            <FAQAccordian openFaq={openFaq} setOpenFaq={setOpenFaq} FAQ={openData} type={type} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
