
import BusniessIntro from "@/app/components/business/BusinessIntro"
import CustomerSupport from "@/app/components/business/CustomerSupport"
import DownloadBusinessPaycio from "@/app/components/business/DownloadBusiness"
import GetPaid from "@/app/components/business/GetPaid"
import HasslesPayments from "@/app/components/business/HasslesPayments"
import MerchantDashboard from "@/app/components/business/MerchantDashboard"
import MerchantStrip from "@/app/components/business/MerchantStrip"
import ScrollSection from "@/app/components/business/scroller/scrollSection"
import Security from "@/app/components/business/Security"
import Testimonials from "@/app/components/business/testimonials/Testimonials"
import WhyChooseUs from "@/app/components/business/WhyPaycioBusiness"
import { getMetadata } from "@/app/components/MetaTags"
export const metadata = getMetadata('/business')
const Business =()=> {
    return(
        <>
        <BusniessIntro/>
        <MerchantStrip/>
        <WhyChooseUs/>
        <GetPaid/>
        <HasslesPayments/>
        <ScrollSection/>
        <Security/>
        <MerchantDashboard/>
        <Testimonials/>
        <CustomerSupport/>
        <DownloadBusinessPaycio/>
        </>
    )
}
export default Business