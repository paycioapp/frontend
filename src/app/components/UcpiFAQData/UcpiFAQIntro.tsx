import { useTranslations } from "next-intl"
import Image from "../utils/Image"

const UCPIQAIntro = () => {
    const t = useTranslations();
    return (
        <>
            <section className="merchant-faq-intro 2xl:py-36 py-12">
                <div className="site-width">
                    <div className="grid 2xl:grid-cols-2 grid-cols-[1.5fr_1fr] items-center">
                        <div>
                            <h1 className="h1-tag">{t('faqpage_header')}</h1>
                            <p>{t('faq_page_content')}</p>
                        </div>
                        <div>
                            <Image src={'/images/faq-page.png'} alt="faq" wrapperClassName="max-w-[490px] mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UCPIQAIntro