import { useTranslations } from "next-intl";

// components/ComplianceSection.jsx
const ComplianceSection = () => {
  const t = useTranslations();
    return (
      <section className="py-12 bg-white">
        <div className="site-width-sm mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="">
              <h2 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-outfit font-extrabold mb-5">
                {t('kycline_compliance')}
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {t('kycline_complianceline')}
              </p>
            </div>
           
            <div className="">
              <div className="relative w-full h-0 pb-[56.25%] md:max-w-[100%] max-w-[450px] mx-auto"> {/* 16:9 aspect ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src="https://paycio.nyc3.cdn.digitaloceanspaces.com/website/images/kycb.mp4" 
                    type="video/mp4" 
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ComplianceSection;