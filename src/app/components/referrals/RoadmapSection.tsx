
import Image from "next/image";
import { logos } from "../logos";
import { useTranslations } from "next-intl";

const RoadmapSection = () => {
  const t = useTranslations();
  const roadmap = [
    {
        image: "",
        title: "",
        desc: ""
    },
  {
    image: logos.refprogram,
    title: t('referralpage_header1'),
    desc: `${t('referfaq_header1line1')} ${t('referfaq_header1line2')}`,
  },
  {
    image: logos.inviteearn,
    title: t('referralpage_header3'),
    desc: t('referralpage_header3line1'),
  },
  {
   
    title: t('referralpage_header2'),
    desc: t('referralpage_header2line1'),
  },
  {
    image: logos.earnrewards,
    title: t('referralpage_header4'),
    desc: `${t('referralpage_header4line1')} ${t('referralpage_header4line2')} ${t('referralpage_header4line3')} ${t('referralpage_header4line4')}`,
  },
  {
    image: logos.depositref,
    title: t('referralpage_header5'),
    desc: `${t('referralpage_header5line1')} ${t('referralpage_header5line2')}`,
  },
];

  return (
    <section className="pt-2 md:py-16">
      <div className="site-width-sm mx-auto grid md:grid-cols-3 gap-8">
        {roadmap.map((card,index) => (
          <div
            key={card.title}
            className={`cursor-pointer p-6 hover:bg-[#291bdb] hover:text-white first:!bg-[#fff] ${index === 2 ? "!text-white !bg-[#291bdb]" : ""}`}
            style={{height: index == 0 ? 0 : '100%',padding: index == 0 ? "0" : ''}}
          >
            {card.image && (
              <Image fill
                src={card.image}
                alt={card.title}
                className="!w-[100px] !h-[100px] mb-4 !relative object-contain"
              />
            )}
            <h4 className="text-lg lg:text-2xl font-bold">{card.title}</h4>
            <p className="mt-2 xl:text-xl xl:mt-3 overflow-hidden">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
