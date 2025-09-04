import { useState } from "react";
import { DropdownIcon, LinkIcon } from "../icons/Icons";
import { DropdownContainer } from "./DropdownContainer";
import { RevealDown } from "../utils/Reveal";
import Link from "next/link";
import { useFeatures } from "./Features";
import { useTranslations } from "next-intl";

export const CompanyDropdown = () => {
    const [isCompanyHovered, setIsCompanyHovered] = useState(false);
    const t = useTranslations()
    const { links } = useFeatures()
    return (
        <>
            <div
                onMouseEnter={() => setIsCompanyHovered(true)}
                onMouseLeave={() => setIsCompanyHovered(false)}
                className="flex gap-x-2 items-center cursor-pointer"
            >
                {t('header_company')}{" "}
                <span>
                    <DropdownIcon />
                </span>
                <DropdownContainer
                    show={isCompanyHovered}
                    setShow={setIsCompanyHovered}
                >
                    <RevealDown
                        duration={0.7}
                        className="site-width pt-9 grid grid-cols-2 justify-items-center items-center pb-9"
                    >
                        <h1 className="text-2xl xl:text-4xl font-bold font-outfit">
                            {t("header_companylist")}
                        </h1>
                        <div className="flex flex-col ">
                            {links.map((link, index) => (
                                <Link
                                    onClick={() => {
                                        setIsCompanyHovered(false);
                                    }}
                                    href={link.url}
                                    target={link.showIcon ? "_blank" : ""}
                                    key={index}
                                    className="flex gap-x-2 items-center py-2 font-noto"
                                >
                                    <span>{link.text}</span>
                                    {link.showIcon && <LinkIcon />}
                                </Link>
                            ))}
                        </div>
                    </RevealDown>
                </DropdownContainer>
            </div>
        </>
    );
};

