import Image from "next/image"
import { logos } from "../logos";
import { useTranslations } from "next-intl";

const UCPISecurity = () => {
  const t = useTranslations();
    const ucpi = [
    {
      header: t('ucpipagetext_line16'),
      content: t('ucpipagetext_line17'),
    },
    {
      header: t('ucpipagetext_line18'),
      content: t('ucpipagetext_line19'),
    },
    {
      header: t('ucpipagetext_line20'),
      content: t('ucpipagetext_line21'),
    },
    {
      header: t('ucpipagetext_line22'),
      content: t('ucpipagetext_line23'),
    },
    {
      header: t('ucpipagetext_line24'),
      content: t('ucpipagetext_line25'),
    }
  ];
    return (
        <>
            <section className="py-24" style={{ background: '#180cb2', color: '#fff' }}>
                <div className="site-width-sm">
                    <div className="flex items-center justify-between gap-12">
                        <div className="max-w-[1000px]">
                            <h2 className="h3-tag">{t('ucpipagetext_line12')}</h2>
                        </div>
                        <div className="sm:flex-[0_0_132px] flex-[0_0_80px]"> 
                            <Image
                                src={logos.secure}
                                alt="pos machine"
                                width={132}
                                height={132}
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div
                        className="ucpi-content-box-row md:block"
                        style={{ alignItems: "initial", marginTop: "24px" }}
                    >
                        {ucpi.map((item, index) => (
                            <div key={index} className="ucpi-content-box">
                                <h4 className="text-[24px] text-[#d7ff1d]">{item.header}</h4>
                                <p className="text-[16px]">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default UCPISecurity

