"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "../utils/Image";
import { isRTL } from "@/lib/utils";

export const IntroSection = () => {
    const locale = useLocale();
    const rtl = isRTL(locale);
    const t = useTranslations();
    return (
        <section className="w-full text-white  relative ">

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.75fr_1fr] h-full ">
                {/* Left Column */}
                <div className="relative h-full flex flex-col justify-center px-24 2xl:px-48 seamlesbg 2xl:py-45 lg:py-28 py-18 lg:bg-auto !  bg-[#fff]">
                    <div className="relative z-2">
                        <h2 className="h1-tag max-w-[600px] leading-0">{t('merchantonboarding_introheader')}</h2>
                        <p className="h3-tag !font-light mt-6">{t('merchantonboarding_introtext')}</p>
                    </div>
                    {/* <Image src={'/images/abstract.jpg'} alt="digi" wrapperClassName="w-full h-full absolute top-0 left-0 z-1 opacity-20" /> */}
                </div>

                {/* Right Column */}
                <div className="bg-[#D7FF1D] relative pt-16">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/businessman-using-mobile.png"
                            alt="business man"
                            wrapperClassName={`lg:w-[400px] w-[272px] mx-auto lg:w-full lg:h-full bottom-0 lg:absolute ${rtl ? '': 'lg:-left-1/1'}  lg:translate-x-1/2 z-2`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
