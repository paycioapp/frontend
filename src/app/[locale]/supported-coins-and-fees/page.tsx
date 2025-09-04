
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import SupportCoins from "@/app/components/SupportCoins";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/supported-coins-and-fees')

const SupportedCoinsFee = () => {
 const t = useTranslations();

  return (
    <>
      <PageHeader title={t('footerpage_headerlast')} text="" />
      <div className="font-outfit">
      <section className="pt-12 ">
        <div className="site-width mx-auto">
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="font-semibold mt-0 2xl:mt-4 text-lg 2xl:text-3xl font-outfit">{t('supportpage_swapfee')}</h3>
              <p className="text-md 2xl:text-xl 2xl:text-3xl  mt-2 font-outfit">
                {t('supportpage_swapfeeline')}
              </p>
            </div>

            <div className="">
              <h3 className="font-semibold mt-0 2xl:mt-4 text-lg 2xl:text-3xl font-outfit">{t('supportpage_p2pfee')}</h3>
              <p className="text-md 2xl:text-xl 2xl:text-3xl  mt-2 font-outfit">{t('supportpage_p2pfeeline')}</p>
              <p className="text-md 2xl:text-xl 2xl:text-3xl  mt-2 font-outfit">
                <b>{t('referralpage_kycnote')}:</b> {t('supportpage_p2pfeelinenote')}.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SupportCoins/>
  
      </div>
    </>
  );
};

export default SupportedCoinsFee;
