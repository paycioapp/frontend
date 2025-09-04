"use client";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";

const ProgressBar = () => {
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start the progress bar
    NProgress.start();

    // Add a *minimum delay* to prevent flicker on fast pages
    timeoutRef.current = setTimeout(() => {
      NProgress.done();
    }, 500); // You can adjust the delay based on your needs

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      NProgress.done(); // Ensure the progress bar completes when the component unmounts
    };
  }, [pathname]);

  return null;
};

export default ProgressBar;
