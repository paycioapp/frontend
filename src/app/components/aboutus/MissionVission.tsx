import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const MissionVission = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <section id="payvia">
        <div className="site-width-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 gap-x-5 mx-auto md:py-[80px] pt-0 pb-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/mission-vission.png"
                alt="Feature Image"
                fill
                className="!relative object-contain"
              />
            </div>
            <div className="features relative pl-0 md:pl-[40px] xl:pl-[80px] 2xl:pl-[116px]">
              <h2 className="h2-tag max-w-[530px]">
                {t('about_vision_mission')}
              </h2>
              <div className="mt-2 xmd:mt-4 md:mt-4 2xl:mt-6 ">
                <div className="flex gap-3 self-center items-start">
                  <div className="relative" style={{ flex: "0 0 24px" }}>
                    <Image
                      src="/images/checkmark.png"
                      alt=""
                      className="relative mt-2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h4 className=" max-w-[560px] p-tag ">
                    {t('about_text1')}
                  </h4>
                </div>
              </div>
              <div className="mt-2 xmd:mt-4 md:mt-4 2xl:mt-6 ">
                <div className="flex gap-3 self-center items-start">
                  <div className="relative" style={{ flex: "0 0 24px" }}>
                    <Image
                      src="/images/checkmark.png"
                      alt=""
                      className="relative mt-2"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h4 className="max-w-[560px] p-tag ">
                    {t('about_text2')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default MissionVission;
