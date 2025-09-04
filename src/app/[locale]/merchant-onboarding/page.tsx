
import DownloadPaycio from "@/app/components/home/DownloadApp"
import { getMetadata } from "@/app/components/MetaTags"
import Integration from "@/app/components/onboaring/IntegrationSetup"
import { IntroSection } from "@/app/components/onboaring/Intro"
import KycKyb from "@/app/components/onboaring/KYCKYB"
import MerchantTierStructure from "@/app/components/onboaring/MerchantTierStructure"
import MerchantWhyChoosePaycio from "@/app/components/onboaring/MerchantWhyChoosePaycio"
import PaymentWorkflow from "@/app/components/onboaring/PaymentWorkflow"
import ImplementationTimeline from "@/app/components/onboaring/Timeline"
import TransformExperience from "@/app/components/onboaring/TransformExperience"
import Verification from "@/app/components/onboaring/Verification";

export const metadata =  getMetadata('/merchant-onboarding')

const MerchantOnboarding = () => {
    return (
        <>
            <IntroSection />
            <Verification />
            <KycKyb />
            <Integration />
            <PaymentWorkflow />
            <ImplementationTimeline />
            <MerchantTierStructure />
            <MerchantWhyChoosePaycio />
            <TransformExperience />
            <DownloadPaycio />
        </>
    )
}
export default MerchantOnboarding