import Link from "next/link";
import { ChevronRight, DropdownIcon } from "../icons/Icons";
import { DropdownContainer } from "./DropdownContainer";
import { RevealDown } from "../utils/Reveal";
import { cn } from "@/lib/twMerge";
import { useRef, useState } from "react";
import { useFeatures } from "./Features";
import { useLocale, useTranslations } from "next-intl";
import { isRTL } from "@/lib/utils";


export const FeaturesDropdown = () => {
    const locale = useLocale();
    const rtl = isRTL(locale);
    const t = useTranslations();
    const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { features } = useFeatures()


    const handleScroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const isRTL = getComputedStyle(container).direction === "rtl";
        const { scrollWidth, clientWidth, scrollLeft } = container;

        let scrollTo: number;

        if (isRTL) {
            // RTL mode
            const negativeScroll = scrollLeft <= 0;
            if (direction === "right") {
                scrollTo = negativeScroll ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            } else {
                scrollTo = negativeScroll ? scrollLeft + clientWidth : scrollLeft - clientWidth;
            }
        } else {
            // LTR mode (normal)
            scrollTo = direction === "right" ? scrollLeft + clientWidth : scrollLeft - clientWidth;
        }

        container.scrollTo({
            left: scrollTo,
            behavior: "smooth",
        });
    };


    return (
        <>
            <div
                role="button"
                onMouseEnter={() => setIsFeaturesHovered(true)}
                onMouseLeave={() => setIsFeaturesHovered(false)}
                className="flex gap-x-2 items-center cursor-pointer"
            >
                {t('header_features')}{" "}
                <span>
                    <DropdownIcon />
                </span>
                <DropdownContainer
                    show={isFeaturesHovered}
                    setShow={setIsFeaturesHovered}
                >
                    <RevealDown duration={0.7} className={cn("site-width")}>
                        <div className="py-12">
                            <div className="flex justify-between items-center">
                                <h1 className="text-3xl font-bold font-outfit">
                                    {t('featurestitle')}
                                </h1>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleScroll("left")}
                                        className="rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8]"
                                    >
                                        <ChevronRight className={!rtl ? 'rotate-180' : ''} />
                                    </button>
                                    <button
                                        onClick={() => handleScroll("right")}
                                        className="rounded-full border border-gray-800 grid place-items-center w-10 aspect-square hover:bg-[#f8f8f8]"
                                    >
                                        <ChevronRight className={rtl ? 'rotate-180' : ''} />
                                    </button>
                                </div>
                            </div>
                            <div
                                ref={scrollContainerRef}
                                className="flex gap-4 mt-6 overflow-x-auto flex-nowrap hide-scrollbar"
                            >
                                {features.map((feature, index) => (
                                    <Link
                                        onClick={() => {
                                            setIsFeaturesHovered(false);
                                        }}
                                        href={feature.link}
                                        key={index}
                                        className="w-[320px] bg-[#F9F9FB95] hover:bg-[#F9F9FB] px-6 py-4 rounded-xl flex-shrink-0 transition-all hover:shadow-md"
                                    >
                                        <div className="w-fit">
                                            <span className="bg-white w-12 aspect-square rounded-full grid place-items-center">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <h1 className="font-semibold mt-4 text-lg 2xl:text-xl font-outfit">
                                            {feature.title}
                                        </h1>
                                        <p className="max-w-[200px] 2xl:max-w-[300px] text-sm 2xl:text-base mt-2 font-outfit">
                                            {feature.desc}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </RevealDown>
                </DropdownContainer>
            </div>
        </>
    );
};