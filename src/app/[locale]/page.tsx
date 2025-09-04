import DownloadPaycio from "@/app/components/home/DownloadApp";
import Help from "@/app/components/home/Help";
import HowtoPay from "@/app/components/home/HowtoPay";
import HowWorks from "@/app/components/home/HowWorks";
import KYC from "@/app/components/home/KYC";
import OfficialPartners from "@/app/components/home/OurPartners";
import P2PTrans2 from "@/app/components/home/P2PTrans2";
import PersonalIntro from "@/app/components/home/PersonalInfo/PersonalIntro";
import TopBrands from "@/app/components/home/TopBrands";
import WhereDoesPaycio from "@/app/components/home/WhereDoesPaycio";
import { getMetadata } from "@/app/components/MetaTags";
export const metadata = getMetadata('/')


export default function Home() {
  return (
    <>
      <PersonalIntro />
      <HowtoPay />
      <WhereDoesPaycio />
      <P2PTrans2 />
      <HowWorks />
      <TopBrands />
      <KYC />
      <OfficialPartners />
      <Help />
      <DownloadPaycio />
    </>
  );
}
