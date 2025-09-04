import { useTranslations } from "next-intl"
import { logos } from "../logos"
import Image from "../utils/Image"

const Insights = () => {
    const t = useTranslations();
    return (
        <>
            <section className="Additional Insights pt-36 ">
                <div className="site-width-sm">
                    <div className="h2-tag" >{t('ucpibenefits_insights')}</div>
                    <p className="text-[20px] mt-3 max-w-[920px] mb-12" >
                        {t('ucpibenefits_insightsline')}
                    </p>
                    <div className="grid md:grid-cols-3" style={{ alignItems: 'initial' }}>
                        <div className="col-md-4 hover:bg-[#EAE9FF] px-6 py-10">
                            <Image loading="lazy" alt={t('ucpibenefits_insightsheader1')} src={logos.crossborder_payments} wrapperClassName="max-w-[75px]" />
                            <h5 className="h4-tag my-6">{t('ucpibenefits_insightsheader1')}</h5>
                            <p >
                                {t('ucpibenefits_insightsline1')}
                            </p>
                        </div>
                        <div className="col-md-4 hover:bg-[#EAE9FF] px-6 py-10">
                            <Image loading="lazy" alt={t('ucpibenefits_insightsheader2')} src={logos.fiat_support} wrapperClassName="max-w-[75px]" />
                            <h5 className="h4-tag my-6">{t('ucpibenefits_insightsheader2')}</h5>
                            <p >
                               {t('ucpibenefits_insightsline2')}
                            </p>
                        </div>
                        <div className="col-md-4 hover:bg-[#EAE9FF] px-6 py-10">
                            <Image loading="lazy" alt={t('ucpibenefits_insightsheader3')} src={logos.traditional_payment_systems} wrapperClassName="max-w-[75px]" />
                            <h5 className="h4-tag my-6">{t('ucpibenefits_insightsheader3')}</h5>
                            <p >
                                {t('ucpibenefits_insightsline3')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Insights