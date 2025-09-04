"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { logos } from "@/app/components/logos";
import { appstore, playstore } from "@/lib/utils";

const DownloadSection = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      setIsAndroid(/Android/i.test(userAgent));
      setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
        setTimeout(() => {
          if (/Android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.paycio";
          } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            window.location.href = "https://apps.apple.com/in/app/paycio-app/id6550918823";
          }
          else {
            router.push("/downloads");
          }
        }, 500);
    }
  }, [router]);

  return (
    <>
      <section className="font-outfit mt-12 mb-45" id="qrsection">
        <div className="site-width text-center">
          <h2 className="text-3xl xl:text-3xl font-bold text-center font-bold font-noto">
            Download Paycio
          </h2>
          <h5>Get the app for seamless transactions</h5>

          <div className="app-flex mt-[42px] flex flex-col items-center sm:flex-row gap-6 justify-center">
            {!isAndroid && (
              <div
                className="playstore cursor-pointer"
                onClick={() =>
                  window.open(
                    playstore,
                    "_blank"
                  )
                }
              >
                <h3 className="mt-2">For Android</h3>
                <div className="qr-bg text-center mx-auto w-[140px] h-[140px]">
                  <Image
                    src={logos.playstore}
                    alt="Play Store QR"
                    fill
                    className="!relative"
                  />
                </div>
                <button className="mt-3 flex gap-x-2 2xl:gap-x-3 items-center bg-thm text-white  px-4 2xl:px-8 py-2 2xl:py-3 rounded-full">
                  Download Now
                </button>
              </div>
            )}

            {isIOS && (
              <div
                className="appstore cursor-pointer"
                onClick={() =>
                  window.open(
                    appstore,
                    "_blank"
                  )
                }
              >
                <h3 className="mt-2">For iOS</h3>
                <div className="qr-bg text-center mx-auto w-[140px] h-[140px]">
                  <Image
                    src={logos.appstore}
                    alt="App Store QR"
                    fill
                    className="!relative"
                  />
                </div>
                <button className="mt-3 flex gap-x-2 2xl:gap-x-3 items-center bg-thm text-white  px-4 2xl:px-8 py-2 2xl:py-3 rounded-full">
                  Download Now
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadSection;
