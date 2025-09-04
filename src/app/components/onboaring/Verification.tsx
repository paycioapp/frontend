import { useTranslations } from "next-intl"
import Image from "../utils/Image"

const Verification = () => {
    const t = useTranslations();
    const data = [
        { image: "/images/business-application.png", header: t('merchant_verificationheader1'), width: '36px', data: t('merchant_verificationdata1') },
        { image: "/images/doc-collection.png", header: t('merchant_verificationheader2'), width: '26px', data: t('merchant_verificationdata2') },
        { image: "/images/tier-selection.png", header: t('merchant_verificationheader3'), width: '36px', data: t('merchant_verificationdata3') }
    ]
    return (
        <>
            <section className="bg-[#F5F5FF] text-[#1F1F1F] md:mb-48 md:py-0 py-24">
                <div className="site-width relative">
                    <div className="flex items-center gap-2 md:pt-36 2xl:pb-42 md:pb-56 pb-12">
                        <span className="bg-[#190DB2] w-12 h-12 font-semibold flex items-center justify-center text-white rounded-full text-xl shrink-0">1</span>
                        <div>
                            <h3 className="text-[#190DB2] xl:text-[38px] text-[32px] font-semibold">{t('merchant_verification_header')}</h3>
                            <p className="text-xl text-[#1F1F1F]/80" style={{ fontWeight: '500' }}>{t('merchant_verification_text')}</p>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 w-full">
                            <ul className="grid md:grid-cols-3 grid-cols-1 items-center gap-12">
                                {data.map((item, index) => {
                                    return (
                                        <li className="shadow-[0_25px_65px_0_#261ab90a] bg-[#fff] px-8 py-8 rounded-[12px] h-full" key={index}>
                                            <div className="flex 2xl:flex-row flex-col  items-center gap-6">
                                                <div style={{ width: item.width }} className="shrink-0" ><Image src={item.image} alt={item.header} wrapperClassName="object-fit w-full h-full" style={{ width: item.width }} /></div>
                                                <div>
                                                    <h3 className="font-semibold h4-tag mb-2">{item.header}</h3>
                                                    <p className="lg:text-xl text-md text-[#1F1F1F]/80" style={{ fontWeight: '500' }}>{item.data}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Verification


