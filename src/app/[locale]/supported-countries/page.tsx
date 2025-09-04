
import { getMetadata } from "@/app/components/MetaTags"
import SupportedCountries from "@/app/components/supportcountries/SupportCountries"
export const metadata = getMetadata('/supported-countries')
const Supported =()=> {
    return(
        <>
        <SupportedCountries/>
        </>
    )
}
export default Supported