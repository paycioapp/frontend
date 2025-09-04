import { useRef } from "react";
import Image from "../utils/Image";
import { useTranslations } from "next-intl";

// Move data to the top so it's available inside the component


const PaymentsForAll = () => {
  const t = useTranslations();
  const data = [
    {
      id: 1,
      image: "/images/platform-1.png",
      title: t('ucpipay_title1'),
      content: [
        t('ucpipay_type1_content1'),
        t('ucpipay_type1_content2'),
        t('ucpipay_type1_content3'),
      ],
    },
    {
      id: 2,
      image: "/images/platform-2.png",
      title: t('ucpipay_title2'),
      content: [
        t('ucpipay_type2_content1'),
        t('ucpipay_type2_content2'),
      ],
    },
    {
      id: 3,
      image: "/images/platform-3.png",
      title: t('ucpipay_title3'),
      content: [
        t('ucpipay_type3_content1'),
        t('ucpipay_type3_content2'),
        t('ucpipay_type3_content3'),
      ],
    },
    {
      id: 4,
      image: "/images/platform-4.png",
      title: t('ucpipay_title4'),
      content: [
        t('ucpipay_type4_content1'),
        t('ucpipay_type4_content2'),
      ],
    },
  ];

  const myRef = useRef<null | HTMLDivElement>(null);

  return (
    <section className="py-30" ref={myRef}>
      <div className="2xl:max-w-[1500px] w-full mx-auto px-8">
        <h1
          className="text-center mb-5 h2-tag"
          style={{ maxWidth: "1050px", margin: "auto" }}
        >
          {t("ucpipagetext_line5")}
        </h1>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-[72px]">
          {data.map((item, index) => (
            <div key={item.id}>
              <div className="bg-[#F9F9F9] rounded-[16px]">
                <div className="2xl:w-[200px] w-[160px] mx-auto text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="py-12 w-full h-full max-w-[200px] max-h-[300px] object-contain"
                  />
                </div>
                <div
                  className={`${index % 2 === 0
                    ? "bg-[#ccf21a] text-black"
                    : "bg-[#180cb2] text-white"
                    } 2xl:px-4 px-4 2xl:py-8 py-6 rounded-b-[16px] xl:min-h-[250px] lg:min-h-[180px] md:min-h-[220px] h-full`}
                >
                  <h4 className="2xl:text-[1.4rem] text-xl font-semibold">
                    {item.title}
                  </h4>
                  {item.content.map((text, i) => (
                    <p key={i} className="text-[16px] my-2">
                      {text}
                    </p>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentsForAll;
