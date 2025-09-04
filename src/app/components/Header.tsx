"use client";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ConsumerBusinessSwitch from "./Headersections/ConsumerBusinessSwitch";
import { GetApp } from "./Headersections/GetApp";
import { useFeatures } from "./Headersections/Features";
import Image from "./utils/Image";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mobileLinks } = useFeatures();

  return (
    <>
      <header className="shadow-df  relative w-full  bg-white lg:text-[16px] 2xl:text-[18px]">
        <div className="site-width px-4 py-5 flex justify-between items-center ">
          {/* Logo */}
          <div className="flex flex-shrink-0 gap-x-10 items-center">
            <Link
              href="/"
              className="no-underline text-thm relative w-[120px] md:w-[180px] 2xl:w-[240px]"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Image
                src="/images/pyc-logo-blue.png"
                alt="Paycio logo"
                className=" relative"
              />
            </Link>

            <div className="hidden md:flex  w-full font-outfit 2xl:text-lg items-center">
              <Suspense fallback={<div>...</div>}>
                <div className="hidden md:block">
                  <ConsumerBusinessSwitch />
                </div>
              </Suspense>
            </div>
          </div>

          {/* Desktop menu */}

          <Suspense fallback={<div>...</div>}>
            <div className="hidden md:block">
              <GetApp />
            </div>
          </Suspense>
          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden flex justify-end w-full">
            <button
              className="flex flex-col gap-1"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="block w-6 h-1 bg-black"></span>
              <span className="block w-6 h-1 bg-black"></span>
              <span className="block w-6 h-1 bg-black"></span>
            </button>
          </div>

          {/* Links */}
          <div
            className={cn(
              "bg-white md:hidden absolute py-4 shadow-sm top-full left-0 w-full site-width font-outfit text-lg z-9",
              {
                hidden: !menuOpen,
              }
            )}
          >
            <div className="flex flex-col gap-y-2">
              {
                mobileLinks.map((link, index) => (
                  <Link key={index}
                    href={link.path}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))
              }
              <LanguageSwitcher/>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;

