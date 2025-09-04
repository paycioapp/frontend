import { useTranslations } from "next-intl";
import Image from "../utils/Image";

const IntegrationTimeline = () => {
  const t = useTranslations();
  const benefits = Array.from({ length: 6 }, (_, i) =>
    t(`integrationtimeline_benefits_${i}`)
  );

  // timeline items from 0 to 3
  const timeline = Array.from({ length: 4 }, (_, i) =>
    t(`integrationtimeline_timeline_${i}`)
  );

  const performanceNote = {
    icon: "/images/rocket.png",
    title: t('integrationtimeline_performance_title'),
    details:
      t('integrationtimeline_performance_details')
  };

  return (
    <section className="relative text-white py-16 px-6 md:px-20 timeline-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left: Integration Benefits */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">{t('integrationtimeline_benefits_title')}</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right: Implementation Timeline */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">{t('integrationtimeline_timeline_title')}</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white">
            {timeline.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer performance note */}
      <div className="md:absolute top-full md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2  bg-white text-black  md:mt-0 mt-16 px-1 pr-4 py-1 md:rounded-full rounded-2xl shadow-lg md:whitespace-nowrap">
        <div className="flex md:flex-row flex-col md:text-start text-center items-center gap-2 md:text-lg text-sm">
          <Image src={performanceNote.icon} alt="rocket" wrapperClassName="w-[45px]" />
          <strong>{performanceNote.title}</strong> {performanceNote.details}
        </div>
      </div>
    </section>
  );
};

export default IntegrationTimeline;
