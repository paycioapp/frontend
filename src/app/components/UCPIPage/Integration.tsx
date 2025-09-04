
import Link from "next/link"
import { useTranslations } from "next-intl"
import Image from "../utils/Image";

const Integration = () => {
    const t = useTranslations();
    return (
        <>
            <section className="py-32">
                <div className="site-width-sm">
                    <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 items-center gap-12">
                        <div className="">
                            <div className="h3-tag mb-4" style={{ maxWidth: '720px' }}>
                                {t('ucpipagetext_line13')}
                            </div>
                            <h5 className="h4-tag" style={{ marginBottom: '24px' }}>
                                {t('ucpipagetext_line14')}
                            </h5>
                            <p className="text-[18px]">
                                {t('ucpipagetext_line15')}
                            </p>
                            <div className="d-flex flex-wrap gap12 align-item-center mt-2">
                                <Link href={'/api-docs'}
                                    className="btn w-fit"
                                    style={{ background: 'rgb(24, 12, 178)', color: '#fff', borderRadius: '24px', marginBottom: '45px' }}

                                >
                                    {t('learnmore_text')}
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <Image
                                src={'/images/api-integration.png'}
                                alt="integration"
                               
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Integration