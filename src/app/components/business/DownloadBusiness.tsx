"use client";
import {
  AppleIcon,
  DownloadIcon,
  PlayStoreIcon,
} from "@/app/components/icons/Icons";
import { appstore, isRTL, playstore } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import DownloadPopup from "../DownloadPopup";
import { useLocale, useTranslations } from "next-intl";

const DownloadBusinessPaycio = () => {
  const t = useTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale);
  return (
    <>
      <div className="site-width-sm mx-6">
        <div
          id="qrsection"
          className="md:grid relative md:grid-cols-[1.5fr_1fr] grid-cols-[1fr] md:gap-2 gap-5 bg-thm rounded-2xl text-white mx-auto md:py-12 pt-12 px-4 xl:px-12 md:mt-36 lg:mt-42 mb-42 xl:mb-[200] items-center"
          style={{ boxShadow: "1px 12px 20px 6px #180cb245" }}
        >
          <div className="md:pl-[36px] pl-0 md:text-start text-center">
            <h2 className="h2-tag">{t('homesection_downloadpop_text4')}</h2>
            <p className="mt-4 text-lg">
              {t('homesection_downloadpop_text5')}
            </p>
            <QrSection />
          </div>
          <DownloadPaycioButton />

          <div className={`lg:absolute lg:block md:hidden max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[320px] mx-auto ${rtl ? 'xl:left-12 left-5' : 'xl:right-12 right-5'} bottom-0 `}>
            <Image
              src="/images/paycio-app.png"
              alt="Download Paycio" fill
              className="!relative object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadBusinessPaycio;

const DownloadPaycioButton = () => {
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
        className="w-[60px] h-[60px] bg-[#D7FF1D] !my-12  rounded-full flex gap-x-2 items-center justify-center text-thm mx-auto lg:mx-0"
        onClick={() => { getApp() }}
      >
        <span>
          <DownloadIcon />
        </span>
      </button>
      <DownloadPopup isOpen={open} setIsOpen={setOpen} />
    </>
  );
};

const QrSection = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-5 mt-5 lg:mt-8 xl:mt-12 md:justify-start justify-center items-center">
      <div className="relative w-[120px] h-[120px]">
        <Image
          src={"/images/qr-white.png"}
          alt=""
          fill
          className="!relative object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 w-[156px]">
        <Link href={appstore} target="_blank" className="px-5 py-2 bg-[#fff]/12 rounded-[12px] w-full flex items-center gap-2">
          <AppleIcon className="fill-white w-5" />
          <span className="whitespace-nowrap">
            App Store
          </span>
        </Link>
        <Link href={playstore} target="_blank" className="px-5 py-2 bg-[#fff]/12 rounded-[12px] w-full flex items-center gap-2">
          <PlayStoreIcon className="fill-white w-5" />
          <span className="whitespace-nowrap">
            Play store
          </span>
        </Link>

      </div>
    </div>
  );
};
