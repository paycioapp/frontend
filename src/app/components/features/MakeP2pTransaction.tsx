"use client"
import { AppleIcon, PlayStoreIcon } from "@/app/components/icons/Icons";
import Image from "next/image";
import React, { useState } from "react";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";

const MakeP2pTransactions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <React.Fragment>
      <section className="md:mt-24 mt-12 mb-[120px]" id="p2p">
        <div className="site-width-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 gap-x-5 mx-auto pb-[20px]">
            <div className="features relative pl-0 ">
              <h2 className="h2-tag ">
                {t('features_p2p_header')}
              </h2>
              <p
                className="mt-2 xmd:mt-4 md:mt-2 2xl:mt-4 p-tag
                      "
              >
                {t('features_p2p_text')}
              </p>
              <button onClick={() => { setIsOpen(true) }} className="bg-thm rounded-full text-white sm:text-base text-lg md:text-xl px-8 py-3 mt-12 flex gap-5 self-center items-center whitespace-nowrap">
                {t('features_p2p_getapp')} <PlayStoreIcon className="fill-white w-5" />{" "}
                <AppleIcon className="fill-white w-4.5" />
              </button>
            </div>
            <div className="relative w-full md:mt-24 mt-12">
              <div className="animate-top-bottom ">
                <Image
                  src="/images/features/features-1.png"
                  alt="Feature Image"
                  fill
                  style={{ zIndex: 1 }}
                  className=" max-w-[200px] md:max-w-[250px] lg:max-w-[250px] 2xl:max-w-[310px] mx-auto !h-auto !top-[-54px] md:!top-[-70px] 2xl:!top-[-84px] !left-[24%] md:!left-[24%]"
                />
              </div>

              <Image
                src="/images/features/p2p-transaction.png"
                alt="Feature Image"
                fill
                className="!relative max-w-[400px] md:max-w-[320px] lg:max-w-[450px] 2xl:max-w-[490px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <DownloadPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};
export default MakeP2pTransactions;
