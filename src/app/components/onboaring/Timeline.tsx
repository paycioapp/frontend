import { useTranslations } from "next-intl";
import Image from "../utils/Image";

const ImplementationTimeline = () => {
  const t = useTranslations();
  const timeline = [
    {
        dayRange: `${t('merchant_timeline_days')}, 1–3`,
        title: t('merchant_timeline_title1'),
        description: t('merchant_timeline_description1'),
        icon: "/images/step-1.png",
    },
    {
        dayRange: `${t('merchant_timeline_days')}, 4–7`,
        title: t('merchant_timeline_title2'),
        description: t('merchant_timeline_description2'),
        icon: "/images/step-2.png",
    },
    {
        dayRange: `${t('merchant_timeline_days')}, 8–10`,
        title: t('merchant_timeline_title3'),
        description: t('merchant_timeline_description3'),
        icon: "/images/step-3.png",
    },
];
  return (
    <>
    <section className="bg-[#180CB2] py-20 text-white relative overflow-hidden md:max-w-[95%] ml-auto">
      <div className="site-width mx-auto px-6 text-center"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('merchant_timeline_header')}</h2>
        <p className="text-xl text-white/80">
          {t('merchant_timeline_text')}
        </p>

        <div className="mt-16 relative">
          {/* Horizontal bar only behind icons */}
          <div className="hidden md:block absolute top-14 left-[14%] right-[14%] h-14 bg-[#2619CC] z-0 rounded-full transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {timeline.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <p className="text-sm text-white/70 mb-2">{step.dayRange}</p>
                <div className="w-14 h-14 rounded-full bg-white text-[#2619CC] flex items-center justify-center text-xl font-bold mb-4 shadow-lg z-10 relative">
                  <Image src={step.icon} alt="icon" wrapperClassName="w-8" />
                </div>
                <h3 className="h4-tag font-semibold">{step.title}</h3>
                <p className="text-xl text-[#fff]/80 mt-2 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#D7FF1D] h-6 w-full"></section>
    </>
  );
};

export default ImplementationTimeline;
