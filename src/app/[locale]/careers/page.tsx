
import CareerSection from "@/app/components/carrerspage/CarrersSection"
import LatestNews from "@/app/components/LatestNews"
import { getMetadata } from "@/app/components/MetaTags"
import React from "react"
export const metadata = getMetadata('/careers')
const Careers =()=> {
    return(
        <React.Fragment>
            <CareerSection/>
            <LatestNews color="#fff" backgroundColor="#180cb2" boxshadow="0 0 71px -5px #8e8eaa40, 0 0 20px 9px #fff" black="#000"/>
        </React.Fragment>
    )
}
export default Careers