// components/QuoteSection.jsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const QuoteSection = () => {
  const t = useTranslations();
  return (
    <section className="py-12 md:py-24 font-outfit">
      <div className="site-width-sm mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center bg-[#f4f3ff] py-18 rounded-lg relative overflow-hidden">
          <div className="flex-1 max-w-[85%] mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-start relative z-1">
            &quot;{t('kycline_quoteline')}&quot;.
            </h3>
          </div>
          <div className="h-[300px] w-[355px] absolute right-[-8px] top-0">
            <Image
              src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/webp/paycio-rounded-logo.webp"
              alt="paycio logo"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;