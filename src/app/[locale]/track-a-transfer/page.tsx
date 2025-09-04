import { logos } from "@/app/components/logos";
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";
export const metadata = getMetadata('/track-a-transfer')


const TrackATransfer = () => {
  const t = useTranslations();
  const trackingSteps = [
  {
    title: t('trackpage_header2'),
    description: t('trackpage_line1'),
    image: logos.paycio_login,
    alt: "track mobile 1",
  },
  {
    title: t('trackpage_header3'),
    description: t('trackpage_line2'),
    image: logos.pyctransactions,
    alt: "track mobile 2",
  },
  {
    title: t('trackpage_header4'),
    description: t('trackpage_line3'),
    image: logos.transaction_fillters,
    alt: "track mobile 3",
  },
  {
    title:  t('trackpage_header5'),
    description: t('trackpage_line4'),
    image: logos.transaction_info,
    alt: "track mobile 4",
  },
];
  return (
    <>
      <PageHeader title={t('trackpage_header')} text="" />
      <div className="site-width font-outfit mt-12 mb-24">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Sticky Left Section */}
          <div className="md:h-screen flex flex-col justify-start md:sticky top-24">
            <h2 className="text-lg xl:text-2xl font-semibold">{t('trackpage_header1')}</h2>
            <p className="mt-2 xl:text-xl xl:mt-3 md:max-w-[85%] max-w-[100%]">
              {t('trackpage_line')}
            </p>
          </div>

          {/* Right Section with Steps */}
          <div className="space-y-12">
            {trackingSteps.map((step, index) => (
              <div key={index} className="mb-12">
                <h2 className="xl:text-2xl font-bold">{step.title}</h2>
                <p className="mt-1 xl:text-xl mb-2">{step.description}</p>
                <Image fill
                  loading="lazy"
                  src={step.image}
                  alt={step.alt}
                  className="!relative max-w-[220px] w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackATransfer;
