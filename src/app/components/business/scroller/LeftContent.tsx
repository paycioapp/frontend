import { useTranslations } from "next-intl";

const LeftContent = () => {
  const t = useTranslations();
  const data = [
    {
      key: t('businesssection_supportskey1'),
      value:
        t('businesssection_supportsvalue1'),
    },
    {
      key: t('businesssection_supportskey2'),
      value:
        t('businesssection_supportsvalue2'),
    },
    {
      key: t('businesssection_supportskey3'),
      value:
        t('businesssection_supportsvalue3'),
    },
  ]
  return (
    <div className="md:w-1/2 2xl:mt-8 mt-0">
      <h2 className="h2-tag mb-5 2xl:mb-10">
        {t('businesssection_supports')}
      </h2>
      {data.map((item, index) => (
        <div key={index} className="2xl:mt-10 mb-4">
          <h4 className="h4-tag">{item.key}</h4>
          <p className="text-lg max-w-[452px] mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
export default LeftContent

