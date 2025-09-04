"use client";

import { useState } from "react";
import Image from "../utils/Image";
import Link from "next/link";
import UCPIRequestForm from "./UcpiRequesstForm";
import { useLocale, useTranslations } from "next-intl";
import { isRTL } from "@/lib/utils";

const ReadyToPay = () => {
  const locale = useLocale();
  const rtl = isRTL(locale);
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations();
  const handleCalendlyClick = async () => {
    if (!window.Calendly) {
      await loadCalendlyAssets();
    }

    if (window.Calendly) {
      window?.Calendly?.initPopupWidget({
        url: "https://calendly.com/suresh-paycio",
      });
    }
  };

  const loadCalendlyAssets = (): Promise<void> => {
    return new Promise((resolve) => {
      const scriptExists = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (!scriptExists) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      } else {
        resolve();
      }

      const cssExists = document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]'
      );
      if (!cssExists) {
        const link = document.createElement("link");
        link.href =
          "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
    });
  };
  const actions = [
    {
      label: t('readytopay_button1'),
      type: "button",
      onClick: () => handleCalendlyClick(),
      style: "bg-[#0b00b6] text-white",
    },
    {
      label: t('readytopay_button2'),
      type: "button",
      onClick: () => setOpen(true),
      style: "bg-transparent border border-[#0b00b6] text-[#0b00b6]",
    },
    {
      label: t('readytopay_button3'),
      type: "link",
      href: "/ucpi-protocal-integration",
      style: "bg-transparent border border-[#0b00b6] text-[#0b00b6]",
    },
  ];

  return (
    <section className="pt-36 pb-24">
      <div
        className="site-width relative"

      >
        <div className="bg-[#f9f9f9] rounded-2xl py-16 px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug max-w-[500px]">
              {t('readttopay_withucpi')}
            </h2>
            <p className="text-xl text-[#1F1F1F] mt-4 font-medium max-w-[70%]">
              {t('readytopay_description')}
            </p>

            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-5 gap-2 mt-8 max-w-[540px] 2xl:max-w-[880px]">
              {actions.map((action, idx) =>
                action.type === "link" ? (
                  <Link
                    key={idx}
                    href={action.href ?? ''}
                    className={`mt-6 py-3 px-6 rounded-full font-medium transition text-center ${action.style}`}
                  >
                    {action.label}
                  </Link>
                ) : (
                  <button
                    key={idx}
                    onClick={action.onClick}
                    className={`mt-6 py-3 px-6 rounded-full font-medium transition ${action.style}`}
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/images/expereince-section.png"
              alt="Support woman"
              className="object-contain"
              wrapperClassName={`md:absolute bottom-0  w-[360px] ${!rtl ? 'right-[10%]': 'left-[10%]'}`}
            />
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <UCPIRequestForm open={open} setOpen={setOpen} />
    </section>
  );
};

export default ReadyToPay;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget?: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}