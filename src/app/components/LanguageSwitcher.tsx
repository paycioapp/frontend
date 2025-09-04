"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import LanguageDropdown, { selectCountryProps } from "./Headersections/LanguageDropdown";
import { flagBaseUrl, languages } from "./Headersections/LanguagesList";
import { DropdownIcon } from "./icons/Icons";
import Image from "./utils/Image";

const LanguageSwitcher = () => {
    const [isOpenLanguage, setOpenLanguage] = useState(false);
    const [selectedLanguage, setLanguage] = useState<selectCountryProps | undefined>(languages.find(lang => lang.localeCode === 'en'));

    const router = useRouter();
    const pathname = usePathname(); // e.g. /en/about

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLang = localStorage.getItem("pyc-language");
            if (storedLang) {
                const match = languages.find(lang => lang.localeCode === storedLang);
                if (match) {
                    setLanguage(match);

                    const currentLang = pathname.split("/")[1];
                    if (currentLang !== storedLang) {
                        const newPath = `/${storedLang}${pathname.substring(currentLang.length + 1)}`;
                        router.replace(newPath);
                    }
                }
            } else {
                const match = languages.find(lang => lang.localeCode === 'en');
                if(match) {
                    setLanguage(match)
                }
            }
        }
    }, []);
    return (
        <>
            <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setOpenLanguage(true)}
            >
                <button className="relative  overflow-hidden">
                    <Image
                        src={selectedLanguage?.flag ? `${flagBaseUrl}${selectedLanguage.flag}` : "/images/globe.png"}
                        alt="country-flag"
                        wrapperClassName="!relative  object-cover w-[46px] h-[38px]"
                    />
                </button>
                <span>{selectedLanguage?.localeCode.toUpperCase()}</span>
                <DropdownIcon />
            </div>

            <LanguageDropdown
                isOpenLanguage={isOpenLanguage}
                setOpenLanguage={setOpenLanguage}
            />
        </>
    );
};

export default LanguageSwitcher;
