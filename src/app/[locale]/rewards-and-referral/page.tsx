
import HeroSection from "@/app/components/referrals/HeroSection";
import RecommendedSection from "@/app/components/referrals/RecommendedSection";
import RoadmapSection from "@/app/components/referrals/RoadmapSection";
import KYCRewardsSection from "@/app/components/referrals/KYCRewardsSection";
import ReferBannerSection from "@/app/components/referrals/ReferBannerSection";
import FAQSection from "@/app/components/referrals/FAQSection";
import { getMetadata } from "@/app/components/MetaTags";
export const metadata = getMetadata('/rewards-and-referral')

const Referralpage = () => {

  return (
    <>
      <HeroSection />
      <RecommendedSection />
      <RoadmapSection />
      <KYCRewardsSection />
      <ReferBannerSection />
      <FAQSection />
    </>
  );
};

export default Referralpage;
