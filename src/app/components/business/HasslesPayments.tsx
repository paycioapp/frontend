"use client"
import Image from "next/image"
import { AppleIcon, PlayStoreIcon } from "../icons/Icons"
import DownloadPopup from "../DownloadPopup"
import { useState } from "react"
import { useTranslations } from "next-intl"

const HasslesPayments = () => {
  const t = useTranslations();
  const [openPopup, setIsOpen] = useState(false);
  return (
    <>
      <section>
        <div className="2xl:pt-36 lg:pt-18 pl-0 md:mt-0 mt-18 lg:pb-36 xl:pb-32">
          <div className="grid md:grid-cols-2 gap-12 grid-cols-1 items-center">
            <div>
              <Image className="!relative" src={'/images/hassles-payment.png'} fill alt="" />
            </div>
            <div className="max-w-[80%] md:pl-0 pl-6">
              <h2 className="h2-tag">{t('businesssection_hassless')}</h2>
              <p className="p-tag mt-2">
                {t('businesssection_hassless_text')}
              </p>
              <button className="bg-thm text-white px-5 py-3 rounded-full mt-12 flex gap-5 self-center items-center whitespace-nowrap btn" onClick={() => { setIsOpen(true) }}>
                {t('homesection_getpaycioapp')} <PlayStoreIcon className="fill-white w-5" />{" "}
                <AppleIcon className="fill-white w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {<DownloadPopup isOpen={openPopup} setIsOpen={setIsOpen} />}
    </>
  )
}
export default HasslesPayments