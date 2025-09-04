import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <section id="payvia">
        <div className="site-width-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 gap-x-5 mx-auto py-[80px]">
          <div className="relative w-full h-full md:hidden block ">
              <Image
                src="/images/whoweare.png"
                alt="Feature Image"
                fill
                className="!relative object-contain"
              />
            </div>
            <div className="features relative pl-0 ">
              <h2 className="h2-tag max-w-[530px]">
              {t('about_whoweare')}
              </h2>
              <p
                className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 max-w-[560px] p-tag  "
              >
                {t('about_whoweare_text')}
              </p>
            </div>
            <div className="relative w-full h-full md:block hidden ">
              <Image
                src="/images/whoweare.png"
                alt="Feature Image"
                fill
                className="!relative object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default WhoWeAre;
