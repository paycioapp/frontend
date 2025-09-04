
import DownloadPaycio from "@/app/components/home/DownloadApp"
import MerchantFAQPage from "@/app/components/merchantqa/MerchantFaq"
import QaIntro from "@/app/components/merchantqa/QaIntro"
import SeapenFaq from "@/app/components/merchantqa/Seapen"
import { getMetadata } from "@/app/components/MetaTags"
export const metadata =  getMetadata('/merchant-questions-and-answers')
const MerchantQuestions = () => {
    return (
        <>
            <QaIntro />
            <MerchantFAQPage />
            <SeapenFaq />
            <DownloadPaycio />
        </>
    )
}
export default MerchantQuestions