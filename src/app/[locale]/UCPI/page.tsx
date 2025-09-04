'use client';
import UcpiSection from "@/app/components/UCPIPage/UcpiSection";
import PaymentsForAll from "@/app/components/UCPIPage/PaymentsForAll";
import UcpiSystem from "@/app/components/UCPIPage/UCPISystem";
import UCPISecurity from "@/app/components/UCPIPage/UCPISecurity";
import Integration from "@/app/components/UCPIPage/Integration";
import Benefits from "@/app/components/UCPIPage/Benefits";
import Insights from "@/app/components/UCPIPage/Insights";
import DownloadPaycio from "@/app/components/home/DownloadApp";

const UCPI = () => {

  return (
    <div className="main ucpi-content">

      <UcpiSection />
      <PaymentsForAll />
      <UcpiSystem />
      <UCPISecurity />
      <Integration />
      <Benefits />
      <Insights/>
      <DownloadPaycio />
    </div>
  );
};

export default UCPI;
