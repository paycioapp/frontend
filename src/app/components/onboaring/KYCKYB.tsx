"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "../utils/Image";
import { isRTL } from "@/lib/utils";



const KycKyb = () => {
  const locale = useLocale();
  const rtl = isRTL(locale);
  const t = useTranslations();
  const features = [
    {
      title: t('merchantkyckyb_datatitle1'),
      description: t('merchantkyckyb_datadescription1'),
    },
    {
      title: t('merchantkyckyb_datatitle2'),
      description: t('merchantkyckyb_datadescription2'),
    },
    {
      title: t('merchantkyckyb_datatitle3'),
      description: t('merchantkyckyb_datadescription3'),
    },
    {
      title: t('merchantkyckyb_datatitle4'),
      description: t('merchantkyckyb_datadescription4'),
    },
  ];
  return (
    <section className="py-24">
      <div className="site-width">
        <div className="max-w-[980px] w-full mx-auto">
          <h2 className="xl:text-[38px] text-[32px] font-semibold text-center">
            {t('merchantkyckyb_introheader')}
          </h2>
          <p className="text-xl text-[#1F1F1F]/80 text-center">
            {t('merchantkyckyb_introtext')}
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-12 md:mt-16">
            <div className="mt-12">
              <Image src="/images/kyb.png" alt="kyb" wrapperClassName="w-full md:max-w-full max-w-[80%] mx-auto" />
            </div>
            <div className={`flex gap-12  justify-center ${rtl ? 'md:justify-end' : 'md:justify-start'}`}>

              <ul>
                {features.map((item, index) => (
                  <li key={index} className="mb-10">
                    <div className="kyb-list md:left-24">
                      {index !== features.length - 1 && <div className={`w-2 bg-[#EDEBFF] absolute left-[-56px] top-5`} style={{ height: `${(600 / features.length)}px` }}></div>}
                      <h3 className="font-semibold h4-tag mb-0">{item.title}</h3>
                      <p
                        className="text-xl text-[#1F1F1F]/80 max-w-[242px]"
                        style={{ fontWeight: "500" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KycKyb;
