
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import ReportContactForm from "@/app/components/ReportContactForm";
import { useTranslations } from "next-intl";
import Link from "next/link";
export const metadata = getMetadata('/report-fraud')
const ReportFraud = () => {
  const t = useTranslations();
  return (
    <>
      <PageHeader title={t('footerpage_line2')} text="" />
      <div className="site-width py-12 mb-24">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="xl:text-3xl text-xl py-6 max-w-[460px] w-full">
              {t('reportfraud')}
            </div>
            <Link
              href={"mailto:support@paycio.com"}
              className="text-xl"
            >
              {t('contactpage_line1')}
            </Link>
          </div>
          <ReportContactForm formtype="reportfraud"/>
        </div>
      </div>
    </>
  );
};

export default ReportFraud;
