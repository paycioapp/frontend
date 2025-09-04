import Image from "next/image";
import { RevealScaleUp } from "../utils/Reveal";
import { flagBaseUrl, languages } from "./LanguagesList";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface LanguageDropdownProps {
    setOpenLanguage: (value: boolean) => void;
    isOpenLanguage: boolean;
}
export interface selectCountryProps {
    country: string; countryShortcode: string; flag: string; alt: string, localeCode: string
}
const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
    setOpenLanguage,
    isOpenLanguage
}) => {
    const t = useTranslations();
    const [localStoragelanguage, setLocalStorageLanguage] = useState("en");
    const [searchedLanguages, setLanguages] = useState(languages);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLang = localStorage.getItem("pyc-language");
            setLocalStorageLanguage(storedLang || "en");
        }
    }, []);
    const router = useRouter();
    const pathname = usePathname();
    const changeLanguages = (value: string) => {
        const filtered = languages.filter((item) =>
            item.country.toLowerCase().includes(value.toLowerCase()) ||
            item.localeCode.toLowerCase().includes(value.toLowerCase())
        );
        setLanguages(value ? filtered : languages);
    };

    const handleSelectLanguage = (language: selectCountryProps) => {
        const currentPath = pathname; // e.g. /en/features
        const segments = currentPath.split('/').filter(Boolean); // ['en', 'features']
        // Replace only the first segment (the locale)
        const newSegments = [language.localeCode.toLowerCase(), ...segments.slice(1)];
        const newPath = '/' + newSegments.join('/');
        router.replace(newPath); // navigate to /ae/features
        localStorage.setItem('pyc-language', language.localeCode.toLowerCase());
        setOpenLanguage(false);
        setLanguages(languages);
    };
    return (
        <>
            {isOpenLanguage &&
                <RevealScaleUp className="z-[10000] fixed left-1/2 top-1/2 w-[92%] max-w-[720px] rounded-[12px] bg-white p-0 text-[18px] text-black shadow-[0_0_30px_#6d6d6d2b] transform -translate-x-1/2 -translate-y-1/2">
                    <section className="p-4">
                        <div>
                            <div className="flex sm:flex-row flex-col sm:items-center justify-between mb-4 gap-3">
                                <h2 className="text-2xl font-bold text-start">{t('select_language')}</h2>
                                <input onChange={(e) => { changeLanguages(e.target.value) }}
                                    type="text"
                                    placeholder={t('placeholder_search')}
                                    className="max-w-[320px] w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white transition duration-200"
                                />

                            </div>
                            {searchedLanguages?.length != 0 ?
                                <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto min-h-[40px]">
                                    {searchedLanguages?.map((language, index) => (
                                        <li key={index} className={`flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md 
                                        ${localStoragelanguage.toLowerCase() == language.localeCode.toLowerCase() ? 'bg-[#f9f9fe]' : ''}`} onClick={() => handleSelectLanguage(language)}>
                                            <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                                                <Image fill src={`${flagBaseUrl}${language.flag}`} alt={language.country} className="!relative object-cover rounded-full" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base">{language.country}</span>
                                                <span className="text-sm">{language.localeCode.toUpperCase()}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul> :
                                <ul className="grid ju   stify-center items-center gap-2 max-h-[400px] overflow-y-auto min-h-[200px]">
                                    No data
                                </ul>
                            }
                        </div>
                    </section>
                </RevealScaleUp>
            }
            {isOpenLanguage && <div className="overlay !z-1 !bg-black/50 !cursor-pointer" onClick={() => { setOpenLanguage(false); setLanguages(languages) }}></div>}
        </>
    )
}
export default LanguageDropdown;
