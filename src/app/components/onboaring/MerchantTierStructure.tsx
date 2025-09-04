import { useTranslations } from "next-intl";



const MerchantTierStructure = () => {
  const t = useTranslations();
  const tiers = [
    {
      title: t('merchanttiers_title1'),
      features: [
        t('merchanttiers_tier1_feature1'),
        t('merchanttiers_tier1_feature2'),
        t('merchanttiers_tier1_feature3'),
        t('merchanttiers_tier1_feature4'),
        t('merchanttiers_tier1_feature5'),
        t('merchanttiers_tier1_feature6'),
      ],
      highlighted: false,
    },
    {
      title: t('merchanttiers_title2'),
      features: [
        t('merchanttiers_tier2_feature1'),
        t('merchanttiers_tier2_feature2'),
        t('merchanttiers_tier2_feature3'),
        t('merchanttiers_tier2_feature4'),
        t('merchanttiers_tier2_feature5'),
        t('merchanttiers_tier2_feature6'),
      ],
      highlighted: false,
    },
    {
      title: t('merchanttiers_title3'),
      features: [
        t('merchanttiers_tier3_feature1'),
        t('merchanttiers_tier3_feature2'),
        t('merchanttiers_tier3_feature3'),
        t('merchanttiers_tier3_feature4'),
        t('merchanttiers_tier3_feature5'),
        t('merchanttiers_tier3_feature6'),
      ],
      highlighted: true,
    },
  ];
  return (
    <section className="py-24 px-4  text-black bg-[#fff]" >
      <div className="site-width-sm mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16">{t('merchanttiers_header')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-8 rounded-2xl relative " style={{
          background: "linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 100%)",
        }}>
          <div style={{ background: 'linear-gradient(rgb(249 249 249 / 91%) 0%, rgb(249, 249, 249) 100%)' }} className="md:w-full w-0 h-full left-[-99%] absolute z-0"></div>
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl relative z-1 lg:p-8 p-4 flex flex-col items-start shadow-md ${tier.highlighted
                ? "bg-[#1400A0] text-white"
                : "bg-white text-[#1f1f1f] "
                }`}
            >
              <h3 className="text-xl font-semibold mb-4">{tier.title}</h3>
              <hr
                className={`w-full mb-6 ${tier.highlighted ? "border-white/30" : "border-gray-300"
                  }`}
              />
              <ul className="space-y-2 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-left list-disc list-inside " style={{ fontWeight: '500' }}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-8 py-3 rounded-full font-medium w-full lg:text-xl text-md ${tier.highlighted
                  ? "bg-white text-[#1400A0]"
                  : "bg-[#F5F5FF] text-[#1400A0]"
                  }`}
              >
                {t('merchanttiers_Choose')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchantTierStructure;
