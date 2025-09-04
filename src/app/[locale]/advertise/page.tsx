
import PageHeader from "@/app/components/PageHeader";
import AdvertiseForm from "@/app//components/Advertise";
import { getMetadata } from "@/app/components/MetaTags";


export const metadata =  getMetadata('/advertise')

const Advertise = () => {
  return (
    <>
      <PageHeader title="Advertise your brand" text="" />
      <div className="site-width py-12 mb-24">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
          <div className="xl:text-3xl text-xl font-[500] py-6 max-w-[460px] w-full">
            We&lsquo;re just one click away to help you take your project from great
            to incredible. Fill in the form to share more details. Either way,
            we&lsquo;d love to talk.
          </div>
          <a href={"mailto:support@paycio.com"} className="text-xl">Email directly to help</a>
          </div>
          <AdvertiseForm />
        </div>
      </div>
    </>
  );
};

export default Advertise;



