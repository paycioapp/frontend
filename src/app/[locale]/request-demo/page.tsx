
import DemoForm from "@/app/components/DemoForm";
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/request-demo')
const RequestDemo = () => {
  const t = useTranslations();
  return (
    <>
      <PageHeader title={t('requestdemo_header')} text="" />
      <div className="site-width py-12 mb-24 font-outfit">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-12">
          <div>
            <div className="xl:text-3xl text-xl py-6 max-w-[460px] w-full">
              {t('requestdemo_line1')}
            </div>
            <h4 className="text-xl font-bold">{t('requestdemo_line2')}</h4>
            <ul className="list-disc ml-4 text-lg">
              <li >{t('requestdemo_line3')}</li>
              <li>
                {t('requestdemo_line4')}
              </li>
              <li>
                {t('requestdemo_line5')}
              </li>
            </ul>
          </div>
          <DemoForm />
        </div>
      </div>
    </>
  );
};

export default RequestDemo;
