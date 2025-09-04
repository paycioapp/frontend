
import { useTranslations } from "next-intl";
import React from "react";

interface ApiDocSectionProps {
  title: string;
  description: string;
  endpoint: string;
  requestExample: string;
  responseExample: string;
}

const ApiDocSection: React.FC<ApiDocSectionProps> = ({
  title,
  description,
  endpoint,
  requestExample,
  responseExample,
}) => {
  const t = useTranslations();
  return (
    <section>
      <h2 className="font-semibold text-lg 2xl:text-3xl">{title}</h2>
      <p>{description}</p>
      <p className="text-lg font-semibold mt-5">{t('apidoc_endpoint')}</p>
      <p>
        <code className="text-[#1001d1]">{endpoint}</code>
      </p>
      <p className="text-lg font-semibold mt-5">{t('apidoc_reqexample')}</p>
      <pre className="overflow-auto whitespace-pre-wrap break-words bg-gray-100 p-4 rounded">
        <code>{requestExample}</code>
      </pre>
      <p className="text-lg font-semibold mt-5">{t('apidoc_repoexample')}</p>
      <pre className="overflow-auto whitespace-pre-wrap break-words bg-gray-100 p-4 rounded">
        <code>{responseExample}</code>
      </pre>
    </section>
  );
};

export default ApiDocSection;