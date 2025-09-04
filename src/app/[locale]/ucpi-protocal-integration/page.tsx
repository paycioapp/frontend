import DownloadPaycio from "@/app/components/home/DownloadApp";
import { getMetadata } from "@/app/components/MetaTags";
import IntegrationTimeline from "@/app/components/ucpiprotocal/IntegrationTimeline";
import ProtocalIntro from "@/app/components/ucpiprotocal/ProtocalIntro";
import UcpiPsp from "@/app/components/ucpiprotocal/UcpiPsp";
export const metadata = getMetadata('/ucpi-protocal-integration')
const UCPIProtocal = () => {
    return (
        <>
            <ProtocalIntro />
            <UcpiPsp />
            <IntegrationTimeline />
            <DownloadPaycio />
        </>
    )
}
export default UCPIProtocal

