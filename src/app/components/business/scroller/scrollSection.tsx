"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LeftContent from "./LeftContent";
import ScrollImages from "./ScrollerStrip";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  // Dynamically set height of leftRef using ResizeObserver
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (leftRef.current) {
        setHeight(leftRef.current.clientHeight);
      }
    });

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const sticky = stickyRef.current;

    if (left && right && sticky) {
      gsap.set([left, right], { willChange: "transform" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#sticky-container",
          start: "top top",
          end: `+=${height}`,
          scrub: true,
        },
      });

      tl.fromTo(
        left,
        { yPercent: 0 },
        { yPercent: -66, ease: "none", autoRound: false },
        0
      ).fromTo(
        right,
        { yPercent: -53 },
        { yPercent: 0, ease: "none", autoRound: false },
        0
      );
    }

    // Add small delay to ensure layout is settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // 100ms delay; adjust if needed

    return () => {
      clearTimeout(timeout);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

}, [height]);


  return (
    <div className="relative w-full my-24 md:my-0">
      <div style={{ height: `${height * 1.5}px` }}>
        <div
          id="sticky-container"
          ref={stickyRef}
          className="sticky top-0 w-full md:h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col-reverse md:flex-row w-full site-width-sm mx-auto px-6 gap-10">
            <LeftContent />
            <div className="relative md:w-1/2 w-full flex items-center justify-center aspect-[1/1]">
              <div className="absolute inset-0 flex md:gap-4 gap-2">
                <ScrollImages divRef={leftRef} type="left" />
                <ScrollImages divRef={rightRef} type="right" />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative md:w-20 w-12 aspect-square md:border-[10px] border-[6px] border-white rounded-full overflow-hidden">
                  <Image
                    src="/images/pyc-logo-wrap.svg"
                    alt="Center Logo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
