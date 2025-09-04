"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// Phase data for UCPI Integration


// MerchantOnboarding Component
const MerchantOnboarding = () => {
  const [activePhase, setActivePhase] = useState(1);
  const t = useTranslations();
  const ucpiPhases = pspIntegrationData()
  const current = ucpiPhases[activePhase - 1]
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_16px_-2px_#dadfe3] p-6 md:p-10 max-w-6xl mx-auto mt-10">
      {/* Header */}
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center mb-10 border-b-1 border-[#dadfe3] pb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {current.mainheader}
        </h2>
        <div className="flex items-center space-x-2 border-[#D5D5D5] border-1 px-2 py-1 rounded-full">
          {[1, 2, 3, 4].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePhase(idx + 1);
              }}
              className={`rounded-full flex items-center justify-center text-md font-medium transition-all duration-600 h-8 ${idx + 1 === activePhase
                ? "bg-[#160EA5] text-white w-18"
                : "text-[#232323]/50 bg-gray-200 hover:bg-[#160EA5] hover:text-white w-8 h-8 shrink-0"
                }`}
            >
              {idx + 1 === activePhase && <span>{t('ucpi_plan')}</span>} {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Steps */}
        <AutoPlaySteps data={current.data} interval={3000} activePhase={activePhase} />

        {/* Technical Details */}
        <div className="md:border-l-1 border-[#232323]/8 md:pl-8">
          <h4 className="font-semibold text-gray-900 mb-4">
            {current.technicalHeader}
          </h4>
          <ul className="list-disc pl-6 text-md text-gray-700 space-y-2">
            {current.technical.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface Data {
  id: number
  title: string,
  desc: string
}

const AutoPlaySteps = ({ data, interval = 3000, activePhase }: { data: Data[]; interval?: number, activePhase?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(0)
  }, [activePhase])
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, interval);

    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div className="space-y-6 relative">
      {data.map((step, idx) => (
        <div
          key={idx}
          className={`flex items-start space-x-4 relative z-10 transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100' : 'opacity-40'
            }`}
        >
          <div
            className={`rounded-full relative flex items-center justify-center text-xs font-bold transition-all duration-300 border-2 ${idx === currentIndex ? 'scale-110' : 'scale-100'
              }`}
            style={{
              width: "36px",
              height: "36px",
              flex: "0 0 36px",
              cursor: "pointer",
              backgroundColor: idx === currentIndex ? "#160EA5" : "#E5E7EB",
              color: idx === currentIndex ? "white" : "#6B7280",
              borderColor: idx === currentIndex ? "#160EA5" : "#D1D5DB",
            }} onClick={() => { setCurrentIndex(idx) }}
          >
            {step.id}
            {idx !== data.length - 1 && (
              <div
                className="absolute left-4 top-10 w-px transition-colors duration-300"
                style={{
                  height: "45px",
                  backgroundColor: idx === currentIndex ? "#160EA5" : "#E5E7EB",
                }}
              />
            )}
          </div>
          <div>
            <h4 className={`font-semibold transition-colors duration-300 ${idx === currentIndex ? 'text-gray-900' : 'text-gray-500'
              }`}>
              {step.title}
            </h4>
            <p className={`text-md mt-1 transition-colors duration-300 ${idx === currentIndex ? 'text-gray-700' : 'text-gray-400'
              }`}>
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Usage:
// <AutoPlaySteps data={current.data} interval={3000} />

// Top-level UCPI PSP section
const UcpiPsp = () => {
  const t = useTranslations();
  return (
    <section className="py-36">
      <div className="site-width">
        <h2 className="h2-tag text-center">{t('ucpipsp_integration_process')}</h2>
        <p className="text-center mx-auto max-w-3xl text-lg sm:text-xl font-light">
          {t('ucpipsp_integration_processtext')}
        </p>
        <MerchantOnboarding />
      </div>
    </section>
  );
};

export default UcpiPsp;


const pspIntegrationData = () => {
  const t = useTranslations();
  const ucpiPhases = [
    {
      phase: t("ucpi_phases_phase1_phase"),
      mainheader: t("ucpi_phases_phase1_mainheader"),
      technicalHeader: t("ucpi_phases_phase1_technicalHeader"),
      data: [
        {
          id: 1,
          title: t("ucpi_phases_phase1_data_0_title"),
          desc: t("ucpi_phases_phase1_data_0_desc"),
        },
        {
          id: 2,
          title: t("ucpi_phases_phase1_data_1_title"),
          desc: t("ucpi_phases_phase1_data_1_desc"),
        },
        {
          id: 3,
          title: t("ucpi_phases_phase1_data_2_title"),
          desc: t("ucpi_phases_phase1_data_2_desc"),
        },
      ],
      technical: [
        t("ucpi_phases_phase1_technical_0"),
        t("ucpi_phases_phase1_technical_1"),
        t("ucpi_phases_phase1_technical_2"),
        t("ucpi_phases_phase1_technical_3"),
        t("ucpi_phases_phase1_technical_4"),
        t("ucpi_phases_phase1_technical_5"),
      ],
    },

    {
      phase: t("ucpi_phases_phase2_phase"),
      mainheader: t("ucpi_phases_phase2_mainheader"),
      technicalHeader: t("ucpi_phases_phase2_technicalHeader"),
      data: [
        {
          id: 4,
          title: t("ucpi_phases_phase2_data_0_title"),
          desc: t("ucpi_phases_phase2_data_0_desc"),
        },
        {
          id: 5,
          title: t("ucpi_phases_phase2_data_1_title"),
          desc: t("ucpi_phases_phase2_data_1_desc"),
        },
        {
          id: 6,
          title: t("ucpi_phases_phase2_data_2_title"),
          desc: t("ucpi_phases_phase2_data_2_desc"),
        },
      ],
      technical: [
        t("ucpi_phases_phase2_technical_0"),
        t("ucpi_phases_phase2_technical_1"),
        t("ucpi_phases_phase2_technical_2"),
        t("ucpi_phases_phase2_technical_3"),
        t("ucpi_phases_phase2_technical_4"),
      ],
    },

    {
      phase: t("ucpi_phases_phase3_phase"),
      mainheader: t("ucpi_phases_phase3_mainheader"),
      technicalHeader: t("ucpi_phases_phase3_technicalHeader"),
      data: [
        {
          id: 7,
          title: t("ucpi_phases_phase3_data_0_title"),
          desc: t("ucpi_phases_phase3_data_0_desc"),
        },
        {
          id: 8,
          title: t("ucpi_phases_phase3_data_1_title"),
          desc: t("ucpi_phases_phase3_data_1_desc"),
        },
        {
          id: 9,
          title: t("ucpi_phases_phase3_data_2_title"),
          desc: t("ucpi_phases_phase3_data_2_desc"),
        },
      ],
      technical: [
        t("ucpi_phases_phase3_technical_0"),
        t("ucpi_phases_phase3_technical_1"),
        t("ucpi_phases_phase3_technical_2"),
        t("ucpi_phases_phase3_technical_3"),
        t("ucpi_phases_phase3_technical_4"),
      ],
    },

    {
      phase: t("ucpi_phases_phase4_phase"),
      mainheader: t("ucpi_phases_phase4_mainheader"),
      technicalHeader: t("ucpi_phases_phase4_technicalHeader"),
      data: [
        {
          id: 10,
          title: t("ucpi_phases_phase4_data_0_title"),
          desc: t("ucpi_phases_phase4_data_0_desc"),
        },
        {
          id: 11,
          title: t("ucpi_phases_phase4_data_1_title"),
          desc: t("ucpi_phases_phase4_data_1_desc"),
        },
      ],
      technical: [
        t("ucpi_phases_phase4_technical_0"),
        t("ucpi_phases_phase4_technical_1"),
        t("ucpi_phases_phase4_technical_2"),
        t("ucpi_phases_phase4_technical_3"),
        t("ucpi_phases_phase4_technical_4"),
        t("ucpi_phases_phase4_technical_5"),
      ],
    },
  ];

  return ucpiPhases
}