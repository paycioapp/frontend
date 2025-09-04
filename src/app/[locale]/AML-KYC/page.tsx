import ComplianceSection from '@/app/components/kycpage/ComplienceSection';
import FeaturesSection from '@/app/components/kycpage/FeaturesSection';
import KYCInfo from '@/app/components/kycpage/KYCInfo';
import KYCIntro from '@/app/components/kycpage/KYCIntro';
import KYCLevelsSection from '@/app/components/kycpage/KYCLevels';
import QuoteSection from '@/app/components/kycpage/QuoteSection';
import { getMetadata } from '@/app/components/MetaTags';
import React from 'react';
export const metadata = getMetadata('/AML-KYC')
const KYCSection = () => {
  return (
    <>
    <KYCIntro/>
    <FeaturesSection/>
    <KYCInfo/>
    <ComplianceSection/>
    <KYCLevelsSection/>
    <QuoteSection/>
    </>
  );
};

export default KYCSection;