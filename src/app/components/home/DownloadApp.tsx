"use client";
import {
  AppleIcon,
  PlayStoreIcon,
} from "@/app/components/icons/Icons";
import Image from "@/app/components/utils/Image";
import { appstore, playstore } from "@/lib/utils";
import Link from "next/link";

import React, { useState } from "react";
import DownloadPopup from "../DownloadPopup";
import { useTranslations } from "next-intl";

const DownloadPaycio = () => {
  const t = useTranslations();
  return (
    <>
      <div className="site-width-sm my-36">
        <div
          id="qrsection"
          className="relative md:grid flex flex-col-reverse grid-cols-2  bg-thm rounded-2xl text-white px-12 py-14 "
          style={{ boxShadow: "1px 12px 20px 6px #180cb245" }}
        >
          <div className="md:pl-[30px] pl-0 text-center md:text-left">
            <h2 className="h2-tag md:mt-0 mt-5">
            {t('homesection_downloadpop_text1')}
            </h2>
            <p
              className="mt-2 p-tag"
              style={{ maxWidth: "505px" }}
            >
              {t('homesection_downloadpop_text3')}
            </p>
            <DownloadPaycioButton t={t} />
          </div>
          <div className="flex justify-center">
            <div className="relative">
             
              <Image
                src="/images/qr-white.png"
                alt="Download Paycio"
                wrapperClassName="w-42 aspect-square"
              />
              <div className="flex gap-x-2 items-center justify-center mt-4">
                <span >
                  <Link href={appstore} target="_blank" className="w-12 grid place-items-center aspect-square bg-[#392CDC]/100 rounded-full cursor-pointer">
                    <AppleIcon className="fill-white" />
                  </Link>
                </span>
                <span >
                  <Link href={playstore} target="_blank" className="w-12 grid place-items-center aspect-square bg-[#392CDC]/100 rounded-full cursor-pointer">
                    <PlayStoreIcon className="fill-white" />
                  </Link>
                </span>
              </div>
            </div>
          </div>

 
        </div>
      </div>
    </>
  );
};

export default DownloadPaycio;

interface DownloadPaycioButtonProps {
  t: ReturnType<typeof useTranslations>;
}

const DownloadPaycioButton: React.FC<DownloadPaycioButtonProps> = ({ t }) => {
  const [open, setOpen] = useState(false);
  const getApp = () => {
    if (window.innerWidth < 991) {
      window.open('https://paycio.us/downloads');
    } else {
      setOpen(true);
    }
  }
  return (
    <>
      <button
        className="w-fit bg-[#fff] mt-10 px-8 py-2.5 rounded-full flex gap-x-2 items-center text-[#000] mx-auto md:mx-0"
        onClick={() => {getApp()}}
      >
        <span className="font-semibold">{t('mediakit_line15')}</span>
      </button>
      <DownloadPopup isOpen={open} setIsOpen={setOpen} />
    </>
  );
};
