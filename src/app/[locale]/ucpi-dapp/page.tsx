import GetExtension from "@/app/components/web3domains/getExtension"
import OurWallets from "@/app/components/web3domains/OurWallets"
import UCPIVideo from "@/app/components/web3domains/UCPIVideo"
import Web3Benefits from "@/app/components/web3domains/Web3Benefits"
import Web3Intro from "@/app/components/web3domains/Web3Intro"
import Web3Testimonials from "@/app/components/web3domains/Web3Testimonials"

const Web3Domains = () => {
    return (
        <>
            <Web3Intro />
            <Web3Benefits />
            <OurWallets />
            <UCPIVideo />
            <GetExtension />
            <Web3Testimonials />
        </>
    )
}

export default Web3Domains