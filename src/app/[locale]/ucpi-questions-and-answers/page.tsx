
import UCPIQAData from '@/app/components/UcpiFAQData/UCPIFAQ';
import UCPIQAIntro from '@/app/components/UcpiFAQData/UcpiFAQIntro';
import ReadyToPay from '@/app/components/UcpiFAQData/ReadyToTransaction';
import { getMetadata } from '@/app/components/MetaTags';
export const metadata = getMetadata('/ucpi-questions-and-answers')


const MerchantFAQs = () => {
    return (
        <>
            <UCPIQAIntro />
            <UCPIQAData />
            <ReadyToPay />
        </>
    );
}

export default MerchantFAQs