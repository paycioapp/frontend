import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { QrCodeIcon } from "../icons/Icons";
import DownloadPopup from "../DownloadPopup";
import { FeaturesDropdown } from "./FeaturesDropdown";
import { CompanyDropdown } from "./CompanyDropdown";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";


export const GetApp = () => {
    const pathname = usePathname();
    const t = useTranslations();
    // Get tab value from URL parameters
    const tabParam = pathname.split("/")[1];
    const [openPopup, setpopUp] = useState<boolean>(false);

    return (
        <div className="flex gap-5 items-center">

            <div className="md:flex hidden gap-5">
                <FeaturesDropdown />
                <CompanyDropdown />

            </div>
            <button className="relative">
                <div
                    onClick={() => {
                        setpopUp(!openPopup);
                    }}
                    className={`flex gap-x-2 2xl:gap-x-3 items-center border-1 border-[#211F32] ${tabParam === "business" ? "bg-[#180cb2]" : "bg-[#180cb2] text-[#fff]"
                        }  px-4 2xl:px-6 py-2 2xl:py-2.5 rounded-full whitespace-nowrap`}
                >
                    <span>
                        <QrCodeIcon className={tabParam === "business" ? "#fff" : "#fff"} />
                    </span>
                    <span>{t('header_getapp')}</span>
                </div>
            </button>
            {/* <button className="relative">
                <div
                    onClick={() => {
                        setpopUp(!openPopup);
                    }}
                    className={`flex gap-x-2 2xl:gap-x-3 items-center border-1 border-[#180cb2] ${tabParam === "business" ? "bg-[#180cb2]" : "bg-[#180cb2] text-[#fff]"
                        }  px-4 2xl:px-6 py-2 2xl:py-2.5 rounded-full whitespace-nowrap`}
                >
                    <span>Connnect</span>
                </div>
            </button> */}
            {<DownloadPopup isOpen={openPopup} setIsOpen={setpopUp} />}
            <LanguageSwitcher />
            {tabParam === "business" && (
                <button
                    className="flex gap-x-2 2xl:gap-x-3 items-center bg-thm text-white px-4 2xl:px-8 py-2 2xl:py-3 rounded-full h-fit m-auto"
                    onClick={() => {
                        window.open("https://merchant.paycio.com/login", "_blank");
                    }}
                >
                    Login
                    <Image src={"/images/arrow-right.svg"} alt="" fill className="!w-[8px] !relative" />
                </button>
            )}
        </div>
    );
};
