import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FeaturesSection = () => {
  const t = useTranslations()
  const features = [
    {
      title: t('kycline_typeheader1'),
      description: t('kycline_typeline1'),
      image: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/real-time-monitoring.webp",
      alt: t('kycline_typeheader1')
    },
    {
      title: t('kycline_typeheader2'),
      description: t('kycline_typeline2'),
      image: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/privacy-protection.webp",
      alt: t('kycline_typeheader2')
    },
    {
      title: t('kycline_typeheader3'),
      description: t('kycline_typeline3'),
      image: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/advanced-data-protection.webp",
      alt: t('kycline_typeheader3')
    },
    {
      title: t('kycline_typeheader4'),
      description: t('kycline_typeline4'),
      image: "https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/security-design.webp",
      alt: t('kycline_typeheader4')
    }
  ];

  return (
    <section className="py-12 bg-white mt-24">
      <div className="site-width-sm mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex md:flex-row flex-col items-start space-x-6 md:mb-24 mb-5">
              <div className="flex-shrink-0 w-15 h-15 relative rounded overflow-hidden mb-4">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <div className='max-w-[565px]'>
                <h3 className="text-xl md:text-2xl 3xl:text-3xl font-[600]">
                  {feature.title}
                </h3>
                <p className="text-lg mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;