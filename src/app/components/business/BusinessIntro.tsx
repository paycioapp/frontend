
import { useTranslations } from "next-intl";
import Image from "../utils/Image";
import { RevealRight, RevealScaleUp } from "../utils/Reveal";

const BusniessIntro = () => {
  const t = useTranslations();
  return (
    <>
      <section className="bg-[#F9F9FE] pt-15">
        <div className="site-width">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <h1 className="h1-tag">{t('businesssection_header')}</h1>
              <p className="p-tag max-w-[560px] xl:mt-5">
                {t('businesssection_text')}
              </p>
              <div className="flex items-center gap-2 mt-10 max-w-[475px]">
                <input
                  type="text"
                  placeholder={t('placeholder_email')}
                  className="focus:outline-none focus:ring-0 text-sm flex-1 bg-[#ECECF5] rounded-[24px] px-3 py-3 w-full max-w-md h-[52px]"
                />
                <button className="bg-thm text-white text-sm px-4 py-3 hover:bg-opacity-90 transition h-[52px] rounded-[24px] btn !mt-0">
                  {t('businesssection_getapplink')}
                </button>
              </div>
            </div>
            <div className="mt-18 md:mt-0 relative 2xl:max-w-[725px] lg:max-w-[530px] mx-auto w-full sm:block hidden">
              <RevealRight className="absolute top-[10%] -left-[10%] z-10 max-w-[40%]">
                <Image
                  src={"/images/business-left.png"}
                  alt="business"
                  wrapperClassName="h-auto"

                />
              </RevealRight>

              <Image
                src={"/images/business-pay.png"}
                alt="business"
                wrapperClassName="aspect-square"

              />

              <RevealScaleUp className="absolute top-1/4 -right-[15%] z-10 max-w-[40%]">
                <Image
                  src={"/images/business-right.png"}
                  alt="business"
                  wrapperClassName="h-auto"

                />
              </RevealScaleUp>
            </div>
            <div className="mt-18 md:mt-0 relative  mx-auto w-full sm:hidden block">
              <Image
                src="/images/business-machine.png"
                alt="business"
                wrapperClassName="h-[724px] w-[527px] aspect-[724/527] !object-contain"
                className="w-full h-auto !object-contain"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusniessIntro;
