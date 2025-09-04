"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const COOKIE_KEY = "paycio-us";
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 1 day

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    const stored = getCookie(COOKIE_KEY);

    if (stored) {
      try {
        const decoded = decodeURIComponent(stored); // Decode URI-encoded cookie
        const parsed = JSON.parse(decoded); // Parse safely
        const now = Date.now();

        if (parsed.status === "accepted") {
          setShowBanner(false);
        } else if (parsed.status === "rejected") {
          if (now - parsed.timestamp > ONE_DAY_IN_MS) {
            setShowBanner(true);
          }
        }
      } catch (error) {
        console.error("Error parsing cookie consent from cookies", error);
        // If parsing fails, show banner again and reset bad data
        setShowBanner(true);
        removeCookie(COOKIE_KEY); // Remove invalid cookie
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData = JSON.stringify({ status: "accepted", timestamp: Date.now() });
    setCookie(COOKIE_KEY, consentData, 365); // Set cookie for 1 year
    setShowBanner(false);
  };

  const handleReject = () => {
    const consentData = JSON.stringify({ status: "rejected", timestamp: Date.now() });
    setCookie(COOKIE_KEY, consentData, 1); // Set cookie for 1 day
    setShowBanner(false);
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * ONE_DAY_IN_MS);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
  };

  const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
  };

  const removeCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed text-xl w-[100%] bottom-0 left-1/2 -translate-x-1/2 bg-white px-6 py-6 shadow-2xl border border-white/30 z-[1000]"
    >
      <div className="site-width flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        <p className="text-center md:text-left">
          {t('cookie_text')}{" "}
          <Link href="/cookie-policy" className="underline hover:text-blue-300">
            {t('learnmore_text')}
          </Link>
        </p>
        <div className="flex space-x-3">
          <button
            onClick={handleReject}
            className="px-5 py-2 rounded-full border border-black/50 hover:bg-white/20 transition"
          >
            {t('learnmore_reject')}
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-full bg-[#180cb2] hover:bg-[#180cb2] text-white transition"
          >
            {t('learnmore_accept')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
