import FraudAvarenessContent from "@/app/components/FraudAwarenessContent";
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/awareness')
const FraudAwareness = () => {
  const t = useTranslations();
  return (
    <>
      <PageHeader title={t('fraudawarenes_header')} text="" />
      <section className="py-16 px-4 md:mb-36 mb-20">
        <div className="site-width mx-auto">
          <div className="flex md:flex-row flex-col  xl:gap-24 lg:gap-16 md:gap-12 gap-8">
            <h2 className="xl:text-3xl text-xl py-6 max-w-[460px] w-full">
              {t('faqpage_line')}
            </h2>
           <FraudAvarenessContent/>
          </div>
        </div>
      </section>
    </>
  );
};
export default FraudAwareness;
