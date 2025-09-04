import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/terms-and-conditions')
const PrivacyPolicy = () => {
  const t = useTranslations()
  return (
    <>
      <PageHeader title={t('footerpage_header5')} text="" />
      <section className="site-width-sm md:py-18 lg:py-32 py-12">
        <div className="img-section terms-section font-outfit">
          <div className="container">
            <b className="text-lg md:text-xl lg:text-2xl">{t('termsconditions_line1')} April 10, 2024</b>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line2')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line3')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line4')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line5')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line6')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line7')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line8')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line9')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line10')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line11')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line12')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line13')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line14')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line15')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line16')}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line17')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line18')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line19')}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t('termsconditions_line20')}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t('termsconditions_line21')}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line22")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line23")}
            </p>
            <ol>
              <li>{t("termsconditions_line24")}</li>
              <li>{t("termsconditions_line25")}</li>
              <li>{t("termsconditions_line26")}</li>
              <li>{t("termsconditions_line27")}</li>
              <li>{t("termsconditions_line28")}</li>
            </ol>

            {/* Prohibited Use */}
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line29")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line30")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line31")}&nbsp;
              <a href="mailto:support@paycio.com" className="underline">
                support@paycio.com
              </a>
            </p>
            <ol>
              <li>
                <b>{t("termsconditions_line32")}</b> {t("termsconditions_line33")}
              </li>
              <li>
                <b>{t("termsconditions_line34")}</b> {t("termsconditions_line35")}
              </li>
              <li>
                <b>{t("termsconditions_line36")}</b> {t("termsconditions_line37")}
              </li>
              <li>
                <b>{t("termsconditions_line38")}</b> {t("termsconditions_line39")}
              </li>
              <li>
                <b>{t("termsconditions_line40")}</b> {t("termsconditions_line41")}
              </li>
            </ol>

            {/* Restricted Business */}
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line42")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line43")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line44")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line45")}&nbsp;
              <a href="mailto:support@paycio.com" className="underline">
                support@paycio.com
              </a>
            </p>

            {/* Request for Documentation */}
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line46")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line47")}
            </p>

            {/* Right to Decline/Suspend */}
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line48")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line49")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line50")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line51")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line52")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line53")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line54")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line55")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line56")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line57")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line58")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line59")}
            </h4>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line60")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line61")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line62")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line63")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line64")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line65")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>
                <b>{t("termsconditions_line66")}</b> {t("termsconditions_line67")}
              </li>
              <li>
                <b>{t("termsconditions_line68")}</b> {t("termsconditions_line69")}
              </li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line70")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line71")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line72")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line73")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line74")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line75")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line76")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line77")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line78")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>{t("termsconditions_line79")}</li>
              <li>{t("termsconditions_line80")}</li>
              <li>{t("termsconditions_line81")}</li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line82")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line83")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line84")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line85")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line86")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line87")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">
              {t("termsconditions_line88")}
            </h4>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line89")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line90")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line91")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line92")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line93")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>{t("termsconditions_line94")}</li>
              <li>{t("termsconditions_line95")}</li>
              <li>{t("termsconditions_line96")}</li>
              <li>{t("termsconditions_line97")}</li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line98")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light">
              {t("termsconditions_line99")}
            </p>

            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line100")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line101")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line102")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line103")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line104")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line105")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>
                {t("termsconditions_line106")}
              </li>
              <li>
                {t("termsconditions_line107")}
              </li>
              <li>
                {t("termsconditions_line108")}
              </li>
              <li>
                {t("termsconditions_line109")}
              </li>
            </ul>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line110")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line111")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line112")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line113")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line114")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line115")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line116")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
               <li>
                {t("termsconditions_line117")}
              </li>
              <li>
                {t("termsconditions_line118")}
              </li>
              <li>
               {t("termsconditions_line119")}
              </li>
              <li>
                {t("termsconditions_line120")}
              </li>
               <li>
                {t("termsconditions_line121")}
              </li>
             <li>
                {t("termsconditions_line122")}
              </li>
              <li>
                {t("termsconditions_line123")}
              </li>
              <li>
                {t("termsconditions_line124")}
              </li>
              <li>
                {t("termsconditions_line125")}
              </li>
              <li>
                {t("termsconditions_line126")}
              </li>
            </ul>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line127")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line128")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line129")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line130")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line131")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line132")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line133")}
            </p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line134")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line135")}</h4>
            <p className="text-base md:text-lg lg:text-lg font-light ">{t("termsconditions_line136")}</p>
            <p className="text-base md:text-lg lg:text-lg font-light ">
             {t("termsconditions_line137")}
            </p>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>
                {t("termsconditions_line138")}
              </li>
              <li>
                {t("termsconditions_line139")}
              </li>
              <li>
                {t("termsconditions_line140")}
              </li>
            </ul>
            <p className="text-base md:text-lg lg:text-lg font-light ">
              {t("termsconditions_line141")}
            </p>
            <h4 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("termsconditions_line142")}</h4>
            <ul className="text-base md:text-lg lg:text-lg font-light">
              <li>
                {t("termsconditions_line143")}
              </li>
              <li>
               {t("termsconditions_line144")}
              </li>
              <li>
               {t("termsconditions_line145")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
