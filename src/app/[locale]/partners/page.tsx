
import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import PartnersPage from "@/app/components/partnerspage/PartnersPage";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/partners')
const Partners = () => {
  const t = useTranslations();
  return (
    <div className="main">
        <PageHeader title={t('ourpartners_heading')} text="" />
        <PartnersPage/>
    </div>
  );
};

export default Partners;

