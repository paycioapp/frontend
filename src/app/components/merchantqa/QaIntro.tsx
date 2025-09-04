import { useTranslations } from "next-intl";
import Image from "../utils/Image";


const QaIntro = () => {
    const t = useTranslations();
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/qa-intro.png"
                alt="Merchant Q&A"
                className="object-cover"
            />

            {/* Overlay Box */}
            <div className="md:absolute relative md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2  md:w-[90%] max-w-3xl md:rounded-t-2xl bg-[#0b00b6] text-white text-center pt-12 pb-18 p-8 shadow-xl">
                {/* Floating Logo */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/images/qa-logo.png"
                        alt="Logo"
                        wrapperClassName="w-[65px]"
                        className="rounded-full border-4 border-white bg-white shadow-md"
                    />
                </div>

                <h2 className="text-3xl font-bold mb-2">{t('merchantqa_header')}</h2>
                <p className="text-sm md:text-base text-white/80">
                    {t('merchantqa_text')}
                </p>
            </div>
        </section>
    );
}
export default QaIntro