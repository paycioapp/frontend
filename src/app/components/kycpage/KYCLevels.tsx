import { useTranslations } from "next-intl";
import { ShieldIcon } from "../icons/Icons";


const KYCLevelsSection = () => {
  const t = useTranslations();
  const kycLevels = [
    {
      shieldBg: "#0f028e",
      level: t('kycline_basickyc'),
      className: `${t('supportedcountries_leveltext')}1`,
      limits: `${t('kycline_limitupto')} 50k USD`,
      bonus: `10 PYC ${t('kycline_tokenbonus')}`,
      bgColor: "#180cb2",
    },
    {
      shieldBg: "#27bd70",
      level: t('kycline_standkyc'),
      className: `${t('supportedcountries_leveltext')}2`,
      limits: `${t('kycline_limitupto')} 200k USD`,
      bonus: `20 PYC ${t('kycline_tokenbonus')}`,
      bgColor: "#3dd085",
    },
    {
      shieldBg: "#7d52d3",
      level: t('kycline_enhancekyc'),
      className: `${t('supportedcountries_leveltext')}3`,
      limits: `${t('kycline_limitupto')} 1M USD`,
      bonus: `30 PYC ${t('kycline_tokenbonus')}`,
      bgColor: "#8c55f9",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="site-width-sm mx-auto px-4">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 text-start leading-tight">
          {t('kycline_preventline')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-12">
          {kycLevels.map((kyc, index) => (
            <div
              key={index}
              className={`kyc-box ${kyc.className} p-6 rounded-lg text-white relative mt-12`}
              style={{ backgroundColor: kyc.bgColor,paddingLeft: "20%",paddingRight: "20%" }}
            >
              <div
                style={{ backgroundColor: kyc.shieldBg }}
                className="flex items-center justify-center absolute top-0 left-1/2 w-[90px] h-[90px] text-[36px] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              >
                <ShieldIcon className="w-[48px] h-[48px]" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4 mt-[45px]">{kyc.level}</h3>
              <ul className="list-disc pl-5 mb-5 font-outfit">
                <li>{kyc.limits}</li>
                <li>{kyc.bonus}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KYCLevelsSection;
