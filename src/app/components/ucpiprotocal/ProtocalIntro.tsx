import { useTranslations } from "next-intl"
import Image from "../utils/Image"

const ProtocalIntro = () => {
    const t = useTranslations();
    return (
        <>
            <main className="bg-white ">
                {/* Header Section */}
                <section className="whitelabel-bg  text-white px-4 text-center relative 2xl:py-56 py-24">
                    <div className="max-w-4xl mx-auto relative z-1">
                        <Image
                            src={'/images/ucpi.png'}
                            alt={'ucpi'}
                            wrapperClassName="transition-transform group-hover:scale-105 max-w-[200px] mx-auto mb-12"
                        />
                        <h1 className="h1-tag font-bold mb-4">{t('ucpiintegration_header')} </h1>
                        <p className="text-lg sm:text-xl font-light">
                            {t('ucpiintegration_title')}
                        </p>
                    </div>
                </section>


            </main>
        </>
    )
}
export default ProtocalIntro