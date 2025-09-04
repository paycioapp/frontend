
import { useTranslations } from "next-intl";
import Image from "../utils/Image";

const UcpiSection = () => {
    const t = useTranslations();
    const viewPDF = "https://heyzine.com/flip-book/a51957b87b.html";
    const openPDF = () => {
        window.open(viewPDF, "_blank");
    };
    return (
        <>
            <section className="ucpi-section bg-[#1900ac] py-24
            ">
                <div className="site-width">
                    <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 items-center">
                        <div className="">
                            <h1 className="h2-tag mb-4" style={{ color: "#d7ff1d" }}>
                               {t('ucpipagetext_line1')}
                            </h1>
                            <p style={{ margin: "24px 0px 16px" }} className="text-white 2xl:text-lg max-w-[720px] mx-auto md:mt-6 2xl:mt-8 mt-4">
                                {t('ucpipagetext_line2')}
                            </p>
                             <IconCards />
                            <div className="d-flex flex-wrap gap12 align-item-center mt-4 ml-0 md:mb-0 mb-12">
                                <button
                                    className="bg-[#d7ff1d] font-semibold text-[#180cb2] mt-4 px-4 2xl:px-8 py-2 2xl:py-3 rounded-full whitespace-nowrap"
                                    onClick={openPDF}
                                    style={{ borderRadius: '24px' }}
                                >
                                    {t('ucpiebook_viewebookbtn')}
                                </button>
                            </div>
                           
                        </div>

                        <div>
                            {/* <div className="video-container ucpi-png">
                                <video
                                    className="custom-video kyc-img w-fit h-full max-w-[85%] mx-auto "
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                >
                                    <source
                                        src="/images/ucpi-integration.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div> */}
                            <Image src={'/images/ucpi-protocal-integration1.png'} alt="ucpi-protocal-integration1" wrapperClassName="xl:max-w-[100%] " />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default UcpiSection


const IconCards = () => {
    const t = useTranslations();
    const images = [
        { id: 1, img: '/images/ucpi-users.png', header: t('ucpiuser_number'), amount: '300,165' },
        { id: 2, img: '/images/ucpi-volume.png', header: t('ucpi_avg7days'), amount: '3.84 M' }
    ]
    return (
        <div className="flex gap-4 py-2 mt-6 md:mb-0 mb-0 md:flex-row flex-col">
            {/* Card 1 */}
            {images.map((item) => {
                return (
                    <div className="rounded-[14px] flex items-center justify-center text-white border-2 border-[#fff]/15 gradient-border p-[1.5px]" key={item.header} >
                        <div className=" flex items-center justify-start gap-4 min-w-[260px] w-full  px-4 py-3 bg-[#2f24ba] rounded-[10px]" >
                            <div className="w-16 h-16 shrink-0">
                                <Image src={item.img} alt={item.img}  />
                            </div>
                            <div>
                                <h4 className="xl:text-[32px] text-[24px]" style={{fontWeight: '500'}}>{item.amount}</h4>
                                <p className="xl:text-xl text-md">{item.header}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};