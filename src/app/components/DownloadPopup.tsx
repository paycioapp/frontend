"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseIcon } from "./icons/Icons";
import { RevealScaleUp } from "./utils/Reveal";
import { useTranslations } from "next-intl";

interface PopupProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void; // Function to toggle isOpen
}

const DownloadPopup: React.FC<PopupProps> = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileDetected = /android|iPhone|iPad|iPod/i.test(userAgent);
      setIsMobile(mobileDetected);

      // Redirect if it's a mobile device
      if (mobileDetected && isOpen) {
        window.location.href = "/downloads";
      }
    }
  }, [isOpen]);

  // Do not render the popup if redirection occurs or popup is closed
  if (isMobile || !isOpen) return null;

  return (
    <>
      <RevealScaleUp className="z-[10000] fixed left-1/2 top-1/2 w-[92%] max-w-[456px] rounded-[12px] bg-white p-0 text-[18px] text-black shadow-[0_0_30px_#6d6d6d2b] transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="absolute top-3 right-3 sm:p-2 p-1 z-1 bg-[#392CDC]/100 rounded-full"
          onClick={() => setIsOpen(false)}
        >
          {CloseIcon.RC.path({
            className: "text-[#180cb2] w-3 h-3 sm:w-4 sm:h-4",
            color: "#fff",
          })}
        </button>
        <div className="relative">
          <div>
            <div className="absolute left-1/2 top-[16px] z-[9] transform -translate-x-1/2 -translate-y-1/2 sm:w-[350px] w-[200px]">
              <Image
                src="/images/pointing-lady.png"
                alt="Pointing Lady"
                fill
                className="!relative mx-auto md:mx-[0]  z-1"
              />
            </div>
            <div
              className="bg-[#180cb2] sm:h-[89px] h-[57px] absolute top-0 w-full z-0"
              style={{ borderRadius: "12px 12px 0 0" }}
            ></div>
          </div>

          <div className="p-8 sm:pt-[115px] pt-[75px] text-center">
            <div className="relative sm:w-[160px] w-[100px] mx-auto my-4">
              <Image
                src="/images/qr-black.png"
                alt="QR Code"
               fill
                className="!relative"
              />
            </div>
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-center">
             {t('homesection_downloadpop_text1')}
            </h2>
            <p
              className="font-outfit mt-2 text-sm xs:text-base xmd:text-xl md:text-base 2xl:text-xl mx-auto md:mx-[0]"
              style={{ maxWidth: "450px", lineHeight: "20px" }}
            >
              {t('homesection_downloadpop_text2')}
            </p>
            <QrSection />
          </div>
        </div>
      </RevealScaleUp>

      {isOpen && (
        <div
          className="overlay bg-[black]/30 !z-[1500]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default DownloadPopup;

// QR Section Component
const QrSection = () => {
  return (
    <div
      className="flex flex-col gap-5 mt-5 items-center justify-center"
      style={{ borderTop: "2px solid rgb(247 247 247)" }}
    >
      <div className="flex sm:flex-row flex-row  gap-4 pt-5">
        <div className="sm:w-[145px] w-[85px]">
          <Link
            href="https://play.google.com/store/apps/details?id=com.paycio"
            target="_blank"
          >
            <Image
              src="/images/play-store.png"
              alt="Play Store"
              fill
              className="!relative"
            />
          </Link>
        </div>
        <div className="sm:w-[145px] w-[85px]">
          <Link
            href="https://apps.apple.com/in/app/paycio-app/id6550918823"
            target="_blank"
          >
            <Image
              src="/images/app-store.png"
              alt="App Store"
              fill
              className="!relative"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
