export type Testimonial = {
    image?: number;
    name?: string;
    position?: string;
    company?: string;
    quote?: string;
    rating?: string;
    label?: string;
};


export type ActiveTestimonial = Testimonial & {
    isActive: boolean;
    isPreviouslyActive: boolean;
    fromLeft: number;
};

export const testimonials: ActiveTestimonial[] = [
    {
        isActive: true,
        image: 1,
        name: "Elena Morozova",
        position: "CTO",
        company: "Nova Technologies",
        quote:
            "Before UCPI, our team spent 6 months integrating with just 5 wallets. With UCPI's WalletConnect integration, we connected to 100+ wallets in 2 weeks and our payment completion rates increased by 340%.",
        rating: "5.0",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 2,
        name: "Daniel Carter",
        position: "Founder & CEO",
        company: "BlockSphere Labs",
        quote:
            "UCPI solved our multi-chain complexity nightmare — users now pay seamlessly across Ethereum, Polygon, and BSC without manual network switching. The pre-deployed smart contracts saved us 4 months of development and $200K in audit costs.",
        rating: "4.9",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 3,
        name: "Amira Khalid",
        position: "Co-Founder",
        company: "Techboost Store",
        quote:
            "We were losing 60% of crypto customers during checkout because of wallet connection complexity. UCPI's one-click connect changed everything — our crypto payment success rate went from 40% to 95%.",
        rating: "4.5",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 4,
        name: "Rohit Menon",
        position: "Head of Product",
        company: "IndoEx Exchange",
        quote:
            "UCPI's simple username@ucpi system means our users love managing payments instead of complex addresses. Customer support tickets dropped by 80% because users stopped making address mistakes — it's our biggest competitive advantage.",
        rating: "4.8",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 5,
        name: "Christopher Lang",
        position: "Chief Digital Officer",
        company: "Bitspay",
        quote:
            "As a traditional bank entering crypto, UCPI's enterprise-grade infrastructure gave us confidence to launch crypto services with complete regulatory compliance. We're now processing $10M+ monthly through their unified API connecting us to the entire crypto ecosystem.",
        rating: "4.9",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 6,
        name: "Isabella Rossi",
        position: "Lead Developer",
        company: "Paycrypto Mobile",
        quote:
            "UCPI's native mobile Web3 integration means users connect any wallet seamlessly without QR scanning or manual address copying. Our app store ratings went from 3.2 to 4.8 stars after implementing UCPI payments.",
        rating: "5.0",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
    {
        isActive: false,
        image: 7,
        name: "Jonathan Blake",
        position: "Angel Investor & Blockchain Portfolio Manager",
        company: "",
        quote:
            "For years, I feared sending crypto to wrong addresses — one typo could mean losing everything. UCPI's verified user system eliminated this anxiety completely — I've transferred $500K+ without a single security concern.",
        rating: "4.2",
        label: "Top rated",
        fromLeft: 0,
        isPreviouslyActive: false,
    },
];