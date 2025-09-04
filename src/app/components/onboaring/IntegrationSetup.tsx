import { useTranslations } from "next-intl"
import Image from "../utils/Image"

const Integration = () => {
    const t = useTranslations();
    const data = [
        { image: "/images/static-qr.png", header: t('merchantonboarding_techinal_header1'), width: '36px', data: t('merchantonboarding_techinalsetup1') },
        { image: "/images/dynamic-qr.png", header: t('merchantonboarding_techinal_header2'), width: '36px', data: t('merchantonboarding_techinalsetup2') },
        { image: "/images/inapp-pay.png", header: t('merchantonboarding_techinal_header3'), width: '36px', data: t('merchantonboarding_techinalsetup3') }
    ]
    return (
        <>
            <section className="bg-[#F5F5FF] text-[#1F1F1F] py-24" id="merchantintegration">
                <div className="site-width relative">
                    <div className="flex items-center gap-2 mb-12">
                        <span className="bg-[#190DB2] w-12 h-12 font-semibold flex items-center justify-center text-white rounded-full text-xl shrink-0">2</span>
                        <div>
                            <h3 className="text-[#190DB2] 2xl:text-[38px] xl:text-[32px] text-[26px] font-semibold">{t('merchantonboarding_techinalsetup')}</h3>
                            <p className="text-xl text-[#1F1F1F]/80" style={{ fontWeight: '500' }}>{t('merchantonboarding_techinalsetup_text')}</p>
                        </div>

                    </div>
                    <div className="relative">
                        <div className="w-full">
                            <ul className="grid md:grid-cols-3 grid-cols-1 items-center gap-12">
                                {data.map((item, index) => {
                                    return (
                                        <li className="shadow-[0_25px_65px_0_#261ab912] bg-[#fff] px-8 py-8 rounded-[12px]" key={index}>
                                            <div className="flex 2xl:flex-row flex-col  items-center gap-6">
                                                <div style={{ width: item.width }} className="shrink-0" ><Image src={item.image} alt={item.header} wrapperClassName="object-fit w-full h-full" style={{ width: item.width }} /></div>
                                                <div>
                                                    <h3 className="font-semibold h4-tag mb-2">{item.header}</h3>
                                                    <p className="text-xl text-[#1F1F1F]/80" style={{ fontWeight: '500' }}>{item.data}</p>
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
export default Integration

