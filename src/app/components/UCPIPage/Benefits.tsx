import Image from "next/image"
import { logos } from "../logos"
import { useTranslations } from "next-intl"

const Benefits = () => {
    const t = useTranslations();
    return (
        <>
            <section className="relative bg-[#f8f9fa] mask-section-bg">
                <div className="site-width-sm mx-auto px-4 relative z-10">
                    <div className="row lg:flex block flex-wrap absolute items-center w-full top-0">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/3 mb-6 md:mb-0">
                            <h2 className="h3-tag font-semibold mb-4">{t('ucpipagetext_line3')}</h2>
                            <p className="text-base">{t('ucpibenefits_line')}</p>
                        </div>

                        <div className="hidden md:block md:w-1/12"></div> {/* Spacer column on md+ */}

                        {/* Right Column */}
                        <div className="w-full lg:w-7/12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Card 1 */}
                                <div data-aos="zoom-in">
                                    <Image loading="lazy" alt={t('ucpibenefits_header1')} src={logos.taxrevenue} width={42} height={42} className="mb-4 w-[42px] h-[42px] md:mt-[60px] sm:mt-[28px] mt-5" />
                                    <h5 className="h4-tag mb-2">{t('ucpibenefits_header1')}</h5>
                                    <p>{t('ucpibenefits_line1')}</p>
                                </div>
                                {/* Card 2 */}
                                <div data-aos="zoom-in">
                                    <Image loading="lazy" alt={t('ucpibenefits_header2')} src={logos.financialinclusion} width={42} height={42} className="mb-4 w-[42px] h-[42px] md:mt-[60px] sm:mt-[28px] mt-5" />
                                    <h5 className="h4-tag mb-2">{t('ucpibenefits_header2')}</h5>
                                    <p>{t('ucpibenefits_line2')}</p>
                                </div>
                                {/* Card 3 */}
                                <div data-aos="zoom-in">
                                    <Image loading="lazy" alt={t('ucpibenefits_header3')} src={logos.innovation_growth} width={42} height={42} className="mb-4 w-[42px] h-[42px] md:mt-[60px] sm:mt-[28px] mt-5" />
                                    <h5 className="h4-tag mb-2">{t('ucpibenefits_header3')}</h5>
                                    <p>{t('ucpibenefits_line3')}</p>
                                </div>
                                {/* Card 4 */}
                                <div data-aos="zoom-in">
                                    <Image loading="lazy" alt={t('ucpibenefits_header4')} src={logos.regulatory_oversight} width={42} height={42} className="mb-4 w-[42px] h-[42px] md:mt-[60px] sm:mt-[28px] mt-5" />
                                    <h5 className="h4-tag mb-2">{t('ucpibenefits_header3')}</h5>
                                    <p>{t('ucpibenefits_line4')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Mask Section */}
                <div className="mask-section">
                    <Image
                        loading="lazy"
                        alt="mask government"
                        src={logos.governments_banks} width={1000} height={1000}
                        className="w-full h-full object-cover maskimg"
                    />
                </div>

                {/* Optional video block (commented) */}
                {/*
  <div className="video-container absolute inset-0 z-0">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/mask.mp4" type="video/mp4" />
    </video>
  </div>
  */}
            </section>

        </>
    )
}

export default Benefits