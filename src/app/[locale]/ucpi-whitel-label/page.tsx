import DownloadPaycio from "@/app/components/home/DownloadApp";
import Image from "@/app/components/utils/Image";

const UCPIWhiteLabel = () => {
    return (
        <>
            <main className="bg-white ">
                {/* Header Section */}
                <section className="whitelabel-bg  text-white px-4 text-center relative 2xl:py-56 py-24">
                    <div className="max-w-4xl mx-auto relative z-1">
                        <Image
                            src={'/images/ucpi.png'}
                            alt={'ucpi'}
                            wrapperClassName="transition-transform group-hover:scale-105 max-w-[200px] mx-auto mb-12"
                        />
                        <h1 className="h1-tag font-bold mb-4">UCPI White Label Solution</h1>
                        <p className="text-lg sm:text-xl font-light">
                            Everything you need to know about implementing the world’s first Unified Crypto Payments Interface as your white-label solution
                        </p>
                    </div>
                </section>

                {/* Grid Cards */}
                <section className="bg-white pt-36 2xl:pb-24 px-4 site-width-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="2xl:h-76 h-45 relative">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        wrapperClassName="transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 relative z-1 backdrop-blur-sm bg-black/40 text-white h-full">
                                    <div className="flex items-center md:items-start gap-6">
                                        <div>
                                            <Image
                                                src={card.icon}
                                                alt={card.title}
                                                wrapperClassName="transition-transform group-hover:scale-105 2xl:w-[45px]"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-semibold mb-1">{card.title}</div>
                                            <p className="text-lg text-white max-w-[320px]">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <DownloadPaycio/>
        </>
    )
}
export default UCPIWhiteLabel

const cards = [
    {
        title: 'Business Strategy',
        description: 'Market opportunity, revenue models, and competitive advantages.',
        image: '/images/business-strategy.png', // replace with real paths
        icon: '/images/label-1.png',
    },
    {
        title: 'Technical Implementation',
        description: 'Integration process, API specifications, and infrastructure requirements',
        image: '/images/technical-implementation.png',
        icon: '/images/label-2.png',
    },
    {
        title: 'Commercial Terms',
        description: 'Pricing models, revenue sharing, and partnership structures',
        image: '/images/commercial-terms.png',
        icon: '/images/label-3.png',
    },
    {
        title: 'Compliance & Security',
        description: 'Regulatory compliance, security measures, and risk management',
        image: '/images/compliance-security.png',
        icon: '/images/label-4.png',
    },
];