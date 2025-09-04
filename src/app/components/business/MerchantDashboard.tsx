import { useTranslations } from "next-intl"
import Image from "next/image"

const MerchantDashboard = () => {
    const t = useTranslations();
    return (
        <>
            <section className="h-full w-full pb-8 2xl:pt-16" style={{
                background: "linear-gradient(to bottom, #F9F9FE 0%, #F9F9FE 50%, #fff 50%, #fff 100%)",
            }}>
                <div className="site-width-sm">
                    <h2 className="h2-tag  text-center ">{t('businesssection_merchantdashboard')}</h2>
                    <div>
                        <Image src="/images/merchantdashboard.png" alt="" fill className="!relative object-contain" />
                    </div>

                </div>
            </section>
        </>
    )
}
export default MerchantDashboard