import { useTranslations } from "next-intl";
import { RightArrow } from "../icons/Icons";


const RecommendedSection = () => {
  const t = useTranslations();
  return (
    <section className="py-12 md:py-36">
      <div className="mx-auto md:flex-row flex-col items-center md:items-center max-w-[1200px] site-width-sm">
        <div className="flex md:flex-row flex-col md:gap-24 gap-5">
          <div className="flex md:flex-row flex-col items-center justify-center md:w-[100px] md:h-[100px] w-[60px] h-[60px] text-[#291bdb] bg-[#f2f2f5] rounded-full relative md:flex-grow-0 md:flex-shrink-0 md:flex-[100px] flex-[60px]" >
            {RightArrow.RC.path({
              className: "text-[#000] w-[20] h-[20] md:w-[36] md:h-[36]",
              color: "#180cb2",
            })}
          </div>
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-outfit font-extrabold max-w-[660px]">{t('referralpage_header6')}</h2>
            <p className="mt-2 font-outfit text-sm xs:text-base xmd:text-xl md:text-base 2xl:text-2xl">
              {t('referralpage_header6line1')} <b>{t('referralpage_header6line2')}</b> {t('referralpage_header6line3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
