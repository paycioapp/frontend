"use client"
import Image from "next/image";
import { AppleIcon, PlayStoreIcon } from "../icons/Icons";
import DownloadPopup from "../DownloadPopup";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const TopBrands = () => {
  const [openPopup, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <>
      <section>
        <div className="site-width-sm md:pt-58 py-24">
          <div className="grid md:grid-cols-2 gap-12 grid-cols-1 items-start">
            <BrandSection/>
           
            <div className="mt-6 md:mt-24">
              <h2 className="h2-tag">{t('homesection_topbrands')}</h2>
              <p className="p-tag mt-2">
                {t('homesection_topbrands_text')}
              </p>
              <button className="bg-thm text-white px-5 py-3 rounded-full mt-12 flex gap-5 self-center items-center whitespace-nowrap btn" onClick={()=> {setIsOpen(true)}}>
                {t('homesection_getpaycioapp')} <PlayStoreIcon className="fill-white w-5" />{" "}
                <AppleIcon className="fill-white w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {<DownloadPopup isOpen={openPopup} setIsOpen={setIsOpen} />}
    </>
  );
};
export default TopBrands


const BrandSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const container = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);
  return (
    <div className="relative top-8" ref={sectionRef}>
      <div className="max-w-full sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[600px] mx-auto relative">
        <div className="relative w-full">
          <Image
            src="/images/brands-circle.png"
            alt="Circle background"
            fill
            className={`!relative object-cover z-0 transition-transform duration-1000 ease-out !left-[5px] ${
              inView ? "rotate-0" : "rotate-[45deg]"
            }`}
          />
          <div className="bg-thm w-[80%] h-[80%] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[5vw] grid items-center justify-center">
           <Image src={'/images/pyc-logo-wrap.svg'} alt="" fill className="!relative opacity-90" />
          </div>
          <div>
            <div
              key="buyer"
              className="absolute max-w-[420px] left-[30%] bottom-15 z-20"
            >
              <Image
                src="/images/woman.png"
                alt="Mobile pay illustration"
                width={700}
                height={700}
                className="w-full h-auto !relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}