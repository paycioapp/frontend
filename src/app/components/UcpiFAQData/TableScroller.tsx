import { useRef, useState, useEffect } from "react";

const TabsWithScroll = ({
    tabs,
    activeTab,
    setActiveTab,
    className,
    tabActiveColor,
    type
}: {
    tabs: { name: string }[];
    activeTab: string;
    setActiveTab: (name: string) => void;
    className: string;
    tabActiveColor: string;
    type: string;
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -150 : 150,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        checkScroll();
        const scrollEl = scrollRef.current;
        if (scrollEl) {
            scrollEl.addEventListener("scroll", checkScroll);
            window.addEventListener("resize", checkScroll);
        }
        return () => {
            if (scrollEl) scrollEl.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const isMerchantQA = type !== 'merchantqa';

    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                {canScrollLeft && (
                    <ArrowBtn
                        direction="left"
                        onClick={scroll}
                        className={isMerchantQA ? "text-[#180CB2]" : "text-white"}
                        bgClass={isMerchantQA ? "bg-white" : "bg-[#180CB2]"}
                    />
                )}
                {canScrollRight && (
                    <ArrowBtn
                        direction="right"
                        onClick={scroll}
                        className={isMerchantQA ? "text-[#180CB2]" : "text-white"}
                        bgClass={isMerchantQA ? "bg-white" : "bg-[#180CB2]"}
                    />
                )}

                <div
                    ref={scrollRef}
                    className={`flex overflow-x-auto no-scrollbar scroll-smooth justify-between ${!isMerchantQA ? "border-b border-gray-200" : ""
                        }`}
                >
                    {tabs.map((tab) => (
                        <div className="relative" key={tab.name}>
                            <button
                                className={`relative px-4 py-4 text-[20px] sm:text-base whitespace-nowrap transition font-medium`}
                                style={{
                                    background: activeTab === tab.name ? tabActiveColor : ""
                                }}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.name}
                            </button>
                            {!isMerchantQA && (
                                <div
                                    className="absolute bottom-0 h-1 left-1/2 -translate-x-1/2 w-20"
                                    style={{
                                        background: activeTab === tab.name ? "#0B00B6" : ""
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsWithScroll;


import React from "react";

type ArrowBtnProps = {
    direction?: "left" | "right";
    onClick: (direction: "left" | "right") => void;
    className?: string;
    bgClass?: string;
};

const ArrowBtn: React.FC<ArrowBtnProps> = ({
    direction = "right",
    onClick,
    className = "",
    bgClass = ""
}) => {
    return (
        <button
            onClick={() => onClick(direction)}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${direction === "left" ? "left-0" : "right-0"
                } px-1.5 py-1.5 rounded-full ${bgClass}`}
            aria-label={`Scroll ${direction}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition duration-200 ${className} ${direction === "left" ? "rotate-180" : ""
                    }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
};







