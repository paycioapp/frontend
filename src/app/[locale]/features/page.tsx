import AllYouNeed from "@/app/components/features/AllYouNeed";
import { FeatureSection } from "@/app/components/features/featuresection/FeatureSection";
import FeaturesLoop from "@/app/components/features/Featuresloop";
import FlexiblePayments from "@/app/components/features/FlexiblePayments";
import GrowBusiness from "@/app/components/features/GrowBusiness";
import MakeP2pTransactions from "@/app/components/features/MakeP2pTransaction";
import SendCrypto from "@/app/components/features/SendCrypto";
import SwaptoPay from "@/app/components/features/SwapToPay";
import { getMetadata } from "@/app/components/MetaTags";
export const metadata = getMetadata('/features')
const Features = () => {
  return (
    <>
    <FeatureSection/>
    <AllYouNeed/>
    <SendCrypto/>
    <MakeP2pTransactions/>
    <div className="bg-[#FBFBFC]">
    <FlexiblePayments/>
    <SwaptoPay/>
    <FeaturesLoop/>
    <GrowBusiness/>
    </div>
    </>
  );
};
export default Features