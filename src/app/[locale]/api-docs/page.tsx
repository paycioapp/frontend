
import PageHeader from "@/app/components/PageHeader";
import React from "react";
import { getMetadata } from "@/app/components/MetaTags";
import APIDocData from "@/app/components/apidocs/APIDocData";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/api-docs')
const ApiDocs = () => {

  const t = useTranslations();
  return (
    <React.Fragment>
      <PageHeader title={t('apidocs_header')} text="" />
      <section>
        <div className="site-width-sm font-outfit mb-24">
          {/* Authentication Section */}
          <section className="pb-3 pt-4">
            <h2 className="font-semibold text-lg 2xl:text-3xl mt-12">
              {t("authentication_heading")}
            </h2>
            <p className="p-tag">
              {t("authentication_description")}
            </p>
            <ul className="mt-2 mb-5 text-lg">
              <li>
                <code className="text-[#1001d1]">{t('authentication_list_publickey_header')}</code>: {t("authentication_list_publickey")}
              </li>
              <li>
                <code className="text-[#1001d1]">{t('authentication_list_signheader')}</code>: {t("authentication_list_sign")}
              </li>
            </ul>

            <pre className="text-lg overflow-auto">
              <code>
                {`Headers Example: PUBLICKEY: <your-public-key> SIGN: <your-signature> Content-Type: application/json`}
              </code>
            </pre>
          </section>
          <APIDocData />

        </div>
      </section>
    </React.Fragment>
  );
};

export default ApiDocs;
