
import Image from "next/image";
import { useTranslations } from "next-intl";
import { logos } from "../logos";

const KYCRewardsSection = () => {
  const t = useTranslations();
  const kyclevels = [
  {
    bgcolor: "#6356fe",
    image: logos.basiclevelkyc,
    title: t('referralpage_basickyc'),
    desc: t('referralpage_basickycline'),
  },
  {
    bgcolor: "#372bcc",
    image: logos.standardlevelkyc,
    title: t('referralpage_standkyc'),
    desc: t('referralpage_standkycline'),
  },
  {
    bgcolor: "#201792",
    image: logos.enhancedlevelkyc,
    title: t('referralpage_enhancedkyc'),
    desc: t('referralpage_enhancedkycline'),
  },
];
  return (
    <section className="py-12 md:py-36"> 
      <div className="site-width-sm mx-auto">
        <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-outfit font-extrabold max-w-[660px] textcenter mb-8">{t('referralpage_kycreward')}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {kyclevels.map((box) => (
            <div
              key={box.title}
              className="px-8 py-12 rounded-[24px] text-white relative"
              style={{ backgroundColor: box.bgcolor }}
            >
              <Image fill 
                src={box.image}
                alt={box.title}
                className="!w-24 !h-auto mb-8 !relative object-contain"
              />
              <h4 className="xl:text-2xl font-bold">{box.title}</h4>
              <p className="xl:text-xl xl:mt-3 ">{box.desc}</p>
              <div
                style={{
                  backgroundImage: `url(${box.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain", // Set this correctly
                  backgroundPosition: "center",
                }}
                className="opacity-10 w-[160px] h-[160px] absolute right-[20px] bottom-[36px]"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KYCRewardsSection;
