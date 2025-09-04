"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Web3Benefits = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollDiv = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Wallet Connect Integration",
      desc: "Native support for Wallet Connect protocol enabling seamless connection with 100+ wallets",
      icon: "/images/web3/multi-chain.png",
    },
    {
      title: "Web3 Name Support",
      desc: "Direct customizable user registration with desired reliable username",
      icon: "/images/web3/smart-contract.png",
    },
    {
      title: "Multi-Chain Compatibility",
      desc: "Supporting multiple networks with UCPI and ENS (Ethereum, BSC, Polygon, TRX, Solana etc.)",
      icon: "/images/web3/wallet-connect.png",
    },
    {
      title: "Smart Contract Interaction",
      desc: "Pre-deployed smart contracts for payment processing across all major networks.",
      icon: "/images/web3/web3name.png",
    },
  ];

  useEffect(() => {
    if (scrollDiv.current) {
      setWidth(scrollDiv.current.offsetWidth);
    }
  }, []);

  // ✅ Scroll behavior
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = width;

    const delta = direction === "right" ? scrollAmount : -scrollAmount;

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  // ✅ Update button states based on scroll position
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 1); // -1 to avoid floating-point issues
  };

  // Attach scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check
      return () =>
        container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [width]);

  return (
    <div className="mt-24 md:mb-24">
      <div className="flex lg:flex-row flex-col justify-between items-center site-width gap-8">
        <div>
          <h2 className="h2-tag">Benefits</h2>
          <p className="p-tag max-w-full">
            Create your personalized UCPI ID to replace complex crypto wallet
            addresses with a simple, memorable name
          </p>
        </div>
        <div className="flex gap-2 mt-5 sm:mt-0 w-full justify-end">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${
              canScrollLeft
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="rotate-180" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`rounded-full border border-gray-800 grid place-items-center w-10 aspect-square transition-all ${
              canScrollRight
                ? "hover:bg-[#f8f8f8]"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="rotate-0" />
          </button>
        </div>
      </div>
      <div className="site-width ml-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-0 md:mt-6 overflow-x-auto flex-nowrap hide-scrollbar whychoose-section"
        >
          {features.map((feature, index) => (
            <div
              ref={scrollDiv}
              style={{ margin: "36px 12px" }}
              key={index}
              className="w-[340px] md:w-[410px] bg-[#FAFBFF] px-8 2xl:py-16 py-12 rounded-2xl flex-shrink-0 transition-all group"
            >
              <div className="w-fit">
                <div className="bg-white w-16 aspect-square rounded-full grid place-items-center feature-svg-image 2xl:mb-8 md:mb-4 mb-4 transition-all duration-300 group-hover:bg-[#fff]/20">
                  <div className="relative w-[36px] h-[36px]">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="object-contain w-[34px] h-[38px]"
                    />
                  </div>
                </div>
              </div>
              <h4 className="h4-tag">{feature.title}</h4>
              <p className="text-lg mt-2 font-outfit">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web3Benefits;
