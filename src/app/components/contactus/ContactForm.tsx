"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ReportContactForm from "../ReportContactFrom";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <div className="relative ">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <Image
            src={"/images/contactus.png"}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <section className="site-width-sm mb-36" style={{ zIndex: 9 }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative -mt-32 md:-mt-40 lg:-mt-48">
              <div className="flex items-center justify-center ">
                <div
                  className="max-w-[690px] w-full space-y-8 bg-white md:p-14 p-8 rounded-xl "
                  style={{ boxShadow: "0 0 20px 6px #dadfe338" }}
                >
                  <div className="max-w-[572px]">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-18 font-outfit">
                      {t('contactus_header')}
                    </h1>
                  </div>
                  <ReportContactForm formtype="contact" />
                </div>
              </div>
            </div>

            <div className="relative md:mt-36 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-[532px] mx-auto ml-12">
                <div>
                  <div
                    className="text-md font-semibold"
                    style={{ color: "#211f3273" }}
                  >
                    {t('contactus_emailaddress')}
                  </div>
                  <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mt-4 mb-4">
                    <Link prefetch={true}href={"mailto:support@paycio.us"}>
                      support@paycio.us
                    </Link>
                  </div>
                  {/* <div className="text-md md:text-lg lg:text-xl xl:text-2xl">
                  Assistance hours: <br /> Monday - Friday 6 am to 8 pm EST
                </div> */}
                </div>
                {/* <div>
                <div
                  className="text-md font-semibold"
                  style={{ color: "#211f3273" }}
                >
                  Number
                </div>
                <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mt-4 mb-4">
                  (+1) 987-65432
                </div>
                <div className="text-md md:text-lg lg:text-xl xl:text-2xl">
                  Assistance hours: <br />
                  Monday - Friday 6 am to 8 pm EST
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
