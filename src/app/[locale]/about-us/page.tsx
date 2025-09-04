import AboutIntro from "@/app/components/aboutus/AboutIntro"
import MissionVission from "@/app/components/aboutus/MissionVission"
import WhoWeAre from "@/app/components/aboutus/WhoWeSection"
import WhyChooseUs from "@/app/components/aboutus/WhyChooseUs"
import LatestNews from "@/app/components/LatestNews"
import { getMetadata } from "@/app/components/MetaTags"


export const metadata =  getMetadata('/about-us')
const Aboutus = () => {
    return (
      <>
      <AboutIntro/>
      <WhoWeAre/>
      <MissionVission/>
      <WhyChooseUs/>
      <LatestNews color="#180cb2" backgroundColor="#fff" boxshadow={''} black="#fff"/>
      </>
 )
}
export default Aboutus