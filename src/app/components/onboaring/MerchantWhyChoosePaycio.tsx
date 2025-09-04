
import { useTranslations } from "next-intl";
import Image from "../utils/Image";



const MerchantWhyChoosePaycio = () => {
  const t = useTranslations();
  const features = [
    {
      icon: '/images/instant-settlement.png',
      title: t('merchantchoose_title1'),
      description: t('merchantchoose_description1'),
    },
    {
      icon: '/images/lower-fee.png',
      title: t('merchantchoose_title2'),
      description: t('merchantchoose_description2'),
    },
    {
      icon: '/images/global-reach.png',
      title: t('merchantchoose_title3'),
      description: t('merchantchoose_description3'),
    },
    {
      icon: '/images/enterprise-security.png',
      title: t('merchantchoose_title4'),
      description: t('merchantchoose_description4'),
    },
  ];
  return (
    <section className="md:py-24 pt-20 bg-[#fff]">
      <div className="site-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold md:mb-16 mb-8">{t('about_whychoose')}</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-12 max-w-5xl mx-auto">

          {/* Top Left */}
          <div className="flex gap-4 text-left justify-center md:justify-end items-center  max-w-[390px] md:mr-auto mx-auto">
            <Image src={features[0].icon} alt="features1" wrapperClassName="w-8 md:w-fit shrink-0 md:shrink-1" />
            <div>
              <h3 className="font-semibold h4-tag mb-1">{features[0].title}</h3>
              <p className="text-xl text-[#1F1F1F]" style={{ fontWeight: '500' }}>{features[0].description}</p>
            </div>
          </div>

          {/* Top Right */}
          <div className="flex gap-4 text-left justify-center md:justify-end items-center  max-w-[372px] md:ml-auto mx-auto">
            <Image src={features[1].icon} alt="features1" wrapperClassName="w-8 md:w-fit shrink-0 md:shrink-1" />
            <div>
              <h3 className="font-semibold h4-tag mb-1">{features[1].title}</h3>
              <p className="text-xl text-[#1F1F1F]" style={{ fontWeight: '500' }}>{features[1].description}</p>
            </div>
          </div>

          {/* Center Circle Logo */}
          <div className="md:block hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  -mt-4
          ">
            <Image src={'/images/bg-choose.png'} alt="bg" wrapperClassName="w-full max-w-[80%] mx-auto" />
          </div>
          <div className="md:block hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 -mt-4
          ">
            <Image src={'/images/choose-paycio.png'} alt="qwerty" wrapperClassName="w-24 h-24" />
          </div>

          {/* Bottom Left */}
          <div className="flex gap-4 text-left justify-center md:justify-end items-center  max-w-[372px] md:mr-auto mx-auto">
            <Image src={features[2].icon} alt="features1" wrapperClassName="w-8 md:w-fit shrink-0 md:shrink-1" />
            <div>
              <h3 className="font-semibold h4-tag mb-1">{features[2].title}</h3>
              <p className="text-xl text-[#1F1F1F]" style={{ fontWeight: '500' }}>{features[2].description}</p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex items-start gap-4 text-left justify-center md:justify-start  max-w-[372px] md:ml-auto mx-auto">
            <Image src={features[3].icon} alt="features1" wrapperClassName="w-8 md:w-fit shrink-0 md:shrink-1" />
            <div>
              <h3 className="font-semibold h4-tag mb-1">{features[3].title}</h3>
              <p className="text-xl text-[#1F1F1F]" style={{ fontWeight: '500' }}>{features[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantWhyChoosePaycio;
