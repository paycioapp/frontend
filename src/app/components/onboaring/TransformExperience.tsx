"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "../utils/Image";
import { isRTL } from "@/lib/utils";

const TransformExperience = () => {
  const locale = useLocale();
  const rtl = isRTL(locale);
  const t = useTranslations();
  return (
    <section className="pt-36">
      <div className="site-width-sm relative" >
        <div style={{ background: 'linear-gradient(rgb(249 249 249 / 91%) 0%, rgb(249, 249, 249) 100%)' }} className="w-full h-full right-[-99%] absolute z-0"></div>
        <div className="bg-[#f9f9f9] rounded-2xl py-16 px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              {t('merchant_transform_text1')}
            </h2>
            <p className="text-xl text-[#1F1F1F] mt-4 font-medium">
              {t('merchant_transform_text2')}
            </p>
            <button className="mt-6 bg-[#0b00b6] text-white py-3 px-6 rounded-full font-medium hover:bg-[#07008e] transition">
              {t('merchant_transform_text3')}
            </button>
          </div>

          {/* Right Image */}
          <div className="">
            <Image
              src="/images/expereince-section.png"
              alt="Support woman"

              className="object-contain"
              wrapperClassName={`md:absolute bottom-0  w-[320px] ${!rtl ? 'right-[5%]':'left-[2%]'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TransformExperience