
import Image from "next/image";
import { logos } from "../logos";

const ReferBannerSection = () => {
  return (
    <section className="md:py-16 py-10">
      <div className="site-width-sm mx-auto grid md:grid-cols-2 gap-8">
        <Image fill src={logos.referbanner1} className="w-full !relative object-contain" alt="Refer and earn banner 1" />
        <Image fill src={logos.referbanner2} className="w-full !relative object-contain" alt="Refer and earn banner 2" />
      </div>
    </section>
  );
};

export default ReferBannerSection;
