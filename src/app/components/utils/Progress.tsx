"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400 });

const ProgressBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    NProgress.start();

    // Simulate async loading (or replace with actual logic)
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done(); // Ensure it stops even if unmounted early
    };
  }, [pathname]);

  return null;
};

export default ProgressBar;

