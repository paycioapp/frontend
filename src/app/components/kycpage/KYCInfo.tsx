import { useTranslations } from "next-intl";

// components/KYCSection.jsx
const KYCInfo = () => {
  const t = useTranslations();
    return (
      <section className="mt-12 md:8 mb-24">
        <div className="site-width-sm mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {t('kycline_header1')}
          </h2>
          <h5 className="text-lg md:text-xl max-w-3xl mx-auto">
           {t('kycline_headline1')}
          </h5>
        </div>
      </section>
    );
  };
  
  export default KYCInfo;