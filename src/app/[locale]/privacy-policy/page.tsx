import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
export const metadata = getMetadata('/privacy-policy')
const PrivacyPolicy = () => {
  const t = useTranslations()
  return (
    <>
      <PageHeader title={t('footerpage_header6')} text="" />
      <section className="site-width-sm md:py-18 lg:py-32 py-12">
        <div className="img-section terms-section font-outfit">
          <div className="site-widthtext-start">
            <div>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t('privacypolicy_line0')}</p>
              <p className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2"><b style={{ fontWeight: '600' }}>{t("privacypolicy_line1")} April 10, 2024</b></p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line2")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line3")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line4")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line5")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line6")} {t("privacypolicy_line7")}
                </li>
                <li>
                  {t("privacypolicy_line8")} {t("privacypolicy_line9")}
                </li>
                <li>
                  {t("privacypolicy_line10")} {t("privacypolicy_line11")}
                </li>
                <li>
                  {t("privacypolicy_line12")} {t("privacypolicy_line13")}
                </li>
              </ul>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line14")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line15")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line16")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line17")} {t("privacypolicy_line18")}
                </li>
                <li>
                  {t("privacypolicy_line19")} {t("privacypolicy_line20")}
                </li>
                <li>
                  {t("privacypolicy_line21")} {t("privacypolicy_line22")}
                </li>
                <li>
                  {t("privacypolicy_line23")} {t("privacypolicy_line24")}
                </li>
                <li>
                  {t("privacypolicy_line25")} {t("privacypolicy_line26")}
                </li>
                <li>
                  {t("privacypolicy_line27")} {t("privacypolicy_line28")}
                </li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line29")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line30")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line31")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line32")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line33")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line34")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line35")} {t("privacypolicy_line36")}
                </li>
                <li>
                  {t("privacypolicy_line37")} {t("privacypolicy_line38")}
                </li>
                <li>
                  {t("privacypolicy_line39")} {t("privacypolicy_line40")}
                </li>
                <li>
                  {t("privacypolicy_line41")} {t("privacypolicy_line42")}
                </li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line43")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line44")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line45")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line46")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line47")}</p>
                  <ul className="text-base md:text-lg lg:text-lg font-light">
                    <li>{t("privacypolicy_line48")}</li>
                    <li>{t("privacypolicy_line49")}</li>
                    <li>{t("privacypolicy_line50")}</li>
                    <li>{t("privacypolicy_line51")}</li>
                  </ul>
                </li>
                <li>
                  {t("privacypolicy_line52")} {t("privacypolicy_line53")}
                </li>
                <li>
                  {t("privacypolicy_line54")} {t("privacypolicy_line55")}
                </li>
                <li>
                  <p className="text-base md:text-lg lg:text-lg font-light ">
                    {t("privacypolicy_line56")} {t("privacypolicy_line57")}
                  </p>
                </li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line58")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line59")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line60")} {t("privacypolicy_line61")}
                </li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line62")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line63")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line64")}</h5>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line65")} {t("privacypolicy_line66")}
                </li>
                <li>
                  {t("privacypolicy_line67")} {t("privacypolicy_line68")}
                </li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line69")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line70")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line71")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line72")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line73")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line74")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line75")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line76")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line77")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line78")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line79")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line80")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line81")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line82")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line83")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line84")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line85")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line86")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line87")}</h5>
                  <ul className="text-base md:text-lg lg:text-lg font-light">
                    <li>{t("privacypolicy_line88")}</li>
                    <li>{t("privacypolicy_line89")}</li>
                    <li>{t("privacypolicy_line90")}</li>
                    <li>{t("privacypolicy_line91")}</li>
                    <li>{t("privacypolicy_line92")}</li>
                    <li>{t("privacypolicy_line93")}</li>
                    <li>{t("privacypolicy_line94")}</li>
                    <li> {t("privacypolicy_line95")}</li>
                  </ul>
                </li>
                <li>
                  <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2"> {t("privacypolicy_line96")}</h5>
                  <ul className="text-base md:text-lg lg:text-lg font-light">
                    <li> {t("privacypolicy_line97")}</li>
                  </ul>
                </li>
                <li>
                  <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line98")}</h5>
                  <ul className="text-base md:text-lg lg:text-lg font-light">
                    <li>{t("privacypolicy_line99")}</li>
                  </ul>
                </li>
                <li>
                  <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line100")}</h5>
                  <ul className="text-base md:text-lg lg:text-lg font-light">
                    <li> {t("privacypolicy_line101")}</li>
                  </ul>
                </li>
              </ul>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line102")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line103")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line104")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line105")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line106")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line107")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line108")} {t("privacypolicy_line109")}
                </li>
                <li>
                  {t("privacypolicy_line110")} {t("privacypolicy_line111")}
                </li>
              </ul>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line112")}</p>

              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line113")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line114")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line115")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line116")} {t("privacypolicy_line1161")}
                </li>
                <li>
                  {t("privacypolicy_line117")} {t("privacypolicy_line1171")}
                </li>
                <li>
                  {t("privacypolicy_line118")} {t("privacypolicy_line1181")}
                </li>
                <li>
                  {t("privacypolicy_line119")} {t("privacypolicy_line1191")}
                </li>
                <li>
                  {t("privacypolicy_line120")} {t("privacypolicy_line1201")}
                </li>
              </ul>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line121")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line122")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line123")}</p>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  {t("privacypolicy_line124")} {t("privacypolicy_line125")}.
                </li>
                <li>
                  {t("privacypolicy_line126")} {t("privacypolicy_line127")}
                </li>
                <li>
                  {t("privacypolicy_line128")} {t("privacypolicy_line129")}
                </li>
              </ul>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line130")}</p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line131")}</h5>
              <ul className="text-base md:text-lg lg:text-lg font-light">
                <li>
                  <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line132")}</p>
                </li>
                <li>{t("privacypolicy_line133")}</li>
                <li>{t("privacypolicy_line134")}</li>
              </ul>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line135")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">
                {t("privacypolicy_line136")}
                &nbsp;<a href="mailto:support@paycio.com">support@paycio.com</a>.
                {t("privacypolicy_line137")}
              </p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line138")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">{t("privacypolicy_line139")}</p>
              <p className="text-base md:text-lg lg:text-lg font-light ">
                {t("privacypolicy_line140")}
                &nbsp;<a href="mailto:support@paycio.com">support@paycio.com</a>
              </p>
              <h5 className="text-left font-outfit text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-2">{t("privacypolicy_line141")}</h5>
              <p className="text-base md:text-lg lg:text-lg font-light ">
                {t("privacypolicy_line142")}&nbsp;
                <a href="mailto:support@paycio.com">support@paycio.com</a> &nbsp;
                {t("privacypolicy_line143")}
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PrivacyPolicy;


