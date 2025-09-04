import ContactForm from "@/app/components/contactus/ContactForm"
import SubscribeForm from "@/app/components/contactus/Subscribe"
import LatestNews from "@/app/components/LatestNews"
import { getMetadata } from "@/app/components/MetaTags"
export const metadata = getMetadata('/contact-us')
const ContactUs =()=> {
    return (
        <>
        <ContactForm/>
        <SubscribeForm/>
        <LatestNews color="#fff" backgroundColor="#180cb2" boxshadow="0 0 71px -5px #8e8eaa40, 0 0 20px 9px #fff" black="#000"/>
        </>
    )
}
export default ContactUs