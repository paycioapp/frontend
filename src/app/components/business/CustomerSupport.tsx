import Image from "next/image";
import { RevealScaleUp } from "../utils/Reveal";
import { useTranslations } from "next-intl";

const CustomerSupport = () => {
  const t = useTranslations();
  return (
    <>
      <section className="py-24">
        <div className="site-width-sm">
          <div className="grid md:grid-cols-2 gap-12 grid-cols-1 items-start">
            <div className="relative">
              <Image
                className="!relative object-contain max-w-[80%]"
                src={"/images/customer-support.png"}
                fill
                alt=""
              />
              <RevealScaleUp
                duration={1}
                className="w-[60%] h-[32%] -bottom-20 -right-6 absolute"
              >
                <Image style={{filter: "drop-shadow(2px 4px 6px #dadfe3)"}}
                  className=" object-contain"
                  src={"/images/customer-review.png"}
                  fill
                  alt=""
                />
              </RevealScaleUp>
            </div>

            <div className="max-w-[600px]">
              <h2 className="h2-tag md:mt-0 mt-24">{t('businesssection_customersupport')}</h2>
              <p className="p-tag mt-2">
                {t('businesssection_customersupport_text')}
              </p>
              <a
                href={"mailto:support@paycio.com"}
                className="w-fit bg-thm text-white px-5 py-3 rounded-full mt-12 flex gap-5 self-center items-center whitespace-nowrap btn "
              >
                {t('businesssection_emailus')}{" "}
                <Image
                  className="!relative !w-[22px] !h-[18px]"
                  src={"/images/email.png"}
                  fill
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CustomerSupport;
