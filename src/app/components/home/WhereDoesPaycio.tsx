import Image from "next/image";
import { KeypadIcon, PeopleIcon, WifiOffIcon } from "../icons/Icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

const WhereDoesPaycio = () => {
  const t = useTranslations();
  const features = [
    {
      link: "/features",
      title: t('feature1_title'),
      desc: t('feature1_desc'),
      icon: <KeypadIcon />,
    },
    {
      link: "/features#offline",
      title: t('feature2_title'),
      desc: t('feature2_desc'),
      icon: <WifiOffIcon />,
    },
    {
      link: "/features#p2p",
      title: t('feature3_title'),
      desc: t('feature3_desc'),
      icon: <PeopleIcon />,
    },
  ];
  return (
    <>
      <section className="lg:pb-36 pb-12">
        <div className="site-width-sm">
          <div className="flex md:flex-row flex-col justify-between gap-5">
            <h2 className="h2-tag">{t('homesection_features_header')}</h2>
            <div>
              <Link href={'/features'} className="bg-thm text-white px-5 py-3 rounded-full block w-fit">
                <div className="flex items-center gap-2 ">
                  <span className="whitespace-nowrap">{t('homesection_features_seemore')}</span>
                  <div className="w-[24px] h-[24px]">
                    <Image
                      src={"/images/left-up-arrow.png"}
                      alt=""
                      fill
                      className="!relative !w-fit"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="features-card mt-16 grid grid-cols-1 gap-4 xl:gap-6 2xl:gap-8 md:grid-cols-3">
            {features.map((item, index) => (
              <div key={index} className="p-4 xl:p-8 fast-flex-card rounded-2xl bg-[#F8F9FF]  card-hover !cursor-default">
                <div className="bg-[#E8EAF5] rounded-full grid place-items-center w-[60px] aspect-square mb-5 md:mb-5">
                  {item.icon}
                </div>
                <h4 className="h4-tag">
                  {item.title}
                </h4>
                <p className="text-lg mt-2 font-outfit">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhereDoesPaycio;
