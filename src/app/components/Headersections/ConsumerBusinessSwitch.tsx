"use client";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ConsumerBusinessSwitch = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  // Determine the active tab:
  let activeTab: "consumer" | "business" | null = null;

  if (pathname === `/${locale}` || pathname === `/${locale}`) {
    activeTab = "consumer";
  }
  if (pathname === `/${locale}/business`) {
    activeTab = "business";
  }

  return (
    <div className="relative font-outfit grid grid-cols-2 justify-items-center items-center bg-[#F4F4F8] rounded-full px-1.5 py-1 2xl:px-2.5 2xl:py-2">
      <Link
        href={"/"}
        className={cn(
          "w-full rounded-full block text-center px-3 2xl:px-4.5 py-1 transition-all duration-300",
          { "bg-white": activeTab === "consumer" }
        )}
      >
        {t('header_personal')}
      </Link>
      <Link
        href={"/business"}
        className={cn(
          "w-full rounded-full block text-center px-3 2xl:px-4.5 py-1 transition-all duration-300",
          { "bg-white": activeTab === "business" }
        )}
      >
        {t('header_business')}
      </Link>
    </div>
  );
};

export default ConsumerBusinessSwitch;
