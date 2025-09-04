import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OfficialPartners = () => {
  const t = useTranslations();
  const items = [
    "astra",
    "coinearth",
    "google",
    "nvidia",
    "pay-on-ramp",
    "quill-audit",
    "seapen",
    "tencent",
  ];
  return (
    <section>
      <div className="site-width-sm ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:p-12 p-12 gap-12 bg-[#F8F9FF] rounded-[18px] ">
          <div>
            <Image
              src={`/images/partners.png`}
              alt={"partner"}
              width={62}
              height={62}
              className="object-contain mb-4"
            />
            <h2 className="h2-tag">{t('homesection_ourpartners')}</h2>
            <p className="p-tag">
              {t('homesection_ourpartners_text')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center max-w-[520px] md:ml-auto ml-0 mx-auto justify-center">
            {items.map((partner, index) => (
              <div className="bg-[#fff] px-10 py-6 rounded-[12px] " key={index}>
                <div className="relative lg:w-[120px] md:w-[80px] h-[40px] mx-auto">
                  <Image
                    src={`/images/partners/${partner}.png`}
                    alt={partner}
                    fill
                    className="!relative object-contain lg:aspect-[22/5] !w-fit mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialPartners;
