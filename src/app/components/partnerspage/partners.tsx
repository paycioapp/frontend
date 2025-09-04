import { logos } from "../logos";

interface Partner {
  company: string;
  partnered_with: string;
  year?: number; // Optional since it has a default value
  description: string;
  details: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    company: "Unicoin",
    partnered_with: "Partnered with Paycio in",
    description: "Unicoin",
    details:
      "Unicoin is a cryptocurrency poised to revolutionize wealth creation.",
    logo: logos.unicoin,
    year: 2025,
  },
  {
    company: "BlockOn",
    partnered_with: "Partnered with Paycio in",
    description: "BlockOn",
    details: "BlockOn is a worldwide blockchain venture builder / Vc firm",
    logo: logos.blockon,
    year: 2025,
  },
  {
    company: "Tencent",
    partnered_with: "Partnered with Paycio in",
    description: "Tencent",
    details:
      "Tencent is a world-leading internet and technology company that develops innovative products and services",
    logo: logos.tencent,
  },
  {
    company: "Nvidia",
    partnered_with: "Partnered with Paycio in",
    description: "World Leader in AI Computing",
    details:
      "NVIDIA invents the GPU and drives advances in AI, HPC, gaming, creative design, autonomous vehicles, and robotics.",
    logo: logos.nvidia,
  },
  {
    company: "ASTRA",
    partnered_with: "Partnered with Paycio in",
    description: "Astra Security - Comprehensive Suite Making Security Simple",
    details:
      "Paycio is proud to announce a partnership with GetAstra to provide comprehensive ethical hacking and testing services! This collaboration strengthens our commitment to cybersecurity by offering businesses a combined expertise in vulnerability identification, penetration testing, and security posture improvement.",
    logo: logos.astra,
  },
  {
    company: "KYC-CHAIN",
    partnered_with: "Partnered with Paycio in",
    description:
      "KYC-Chain - Blockchain & Banking KYC / AML Compliance Solution",
    details:
      "Paycio has announced a strategic partnership with KYC Chain to simplify and expedite customer onboarding. This integration grants Paycio access to KYC Chain's robust KYC infrastructure, which is known for its efficiency and security. By leveraging KYC Chain's services, Paycio can offer its users a streamlined KYC process, resulting in a faster and more frictionless onboarding experience.",
    logo: logos.Kycchain,
  },
  {
    company: "Google developers",
    partnered_with: "Partnered with Paycio in",
    description: "Google developers",
    details:
      "Experience a streamlined development environment for full-stack, multi-platform, and AI-powered apps. Now open to everyone, no waitlist",
    logo: logos.googleDev,
  },
  {
    company: "Quill Audits",
    partnered_with: "Partnered with Paycio in",
    description: "Smart contract auditing service",
    details:
      "Mitigate weaknesses in your smart contract and improve its functionality with a double line-to-line code analysis and a separate review by a lead auditor.",
    logo: logos.quillAudit,
  },
  {
    company: "MCB Dao",
    partnered_with: "Partnered with Paycio in",
    description: "Ventures Dao for RWA and DePIN Project",
    details:
      "MCB Ventures DAO is at the forefront of transforming G2G projects using RWA and DePIN models. By harnessing the power of blockchain and crypto-economic mechanisms, we have developed the RWA / DePINs framework, integrating cutting-edge AI, IoTs, Next-Gen RFIDs, Global Satellite Position monitoring, and Green Energy sources.",
    logo: logos.mcbdao,
  },
  {
    company: "PayOnRamp",
    partnered_with: "Partnered with Paycio in",
    description:
      "PayOnRamp: Efficient Fiat and Crypto Payment Gateway Services",
    details:
      "PayOnRamp provides seamless solutions for cryptocurrency transactions, enabling users to buy and sell crypto effortlessly.",
    logo: logos.payonramp,
  },

  {
    company: "Skor",
    partnered_with: "Partnered with Paycio in",
    description: "Skor metaverse",
    details: "Skor metaverse",
    logo: logos.skor,
  },
  {
    company: "SecureDApp",
    partnered_with: "Partnered with Paycio in",
    description: "SecureDApp",
    details: "SecureDApp ensures application security through advanced tools.",
    logo: logos.securedApp,
  },
  {
    company: "SeaPen",
    partnered_with: "Partnered with Paycio in",
    description: "SeaPen – Advanced Dry Docking Technology",
    details:
      "SeaPen is dedicated to marine innovation and sustainability, offering solutions for marine infrastructure and environmental challenges.",
    logo: logos.seapen,
  },
  {
    company: "COINEARTH TECHNOLOGIES",
    partnered_with: "Partnered with Paycio in",
    description:
      "Coin Earth Technologies - Software development and Mobile app development company",
    details:
      "Paycio's latest collaboration with CoinEarth Technologies brings cutting-edge IT services to India. Our partnership promises innovative solutions tailored to the Indian market, combining Paycio's expertise in technology with CoinEarth's local insights. From software development to IT consulting, we deliver top-notch services that drive efficiency and growth for businesses nationwide.",
    logo: logos.coinearth,
  },
  // {
  //   company: t("partners_company4"),
  //   partnered_with: "Partnered with Paycio in",
  //   description: t("partners_description4"),
  //   details: t("partners_details4"),
  //   logo: logos.tirupathicapital
  // },
  {
    company: "Ennoble IP",
    partnered_with: "Partnered with Paycio in",
    description: "Ennoble IP - WE SET KNOWLEDGE THROUGH OUR ACTIONS",
    details:
      "Ennoble IP is a global professional services provider offering IP Research, Analytics, Legal and Prosecution services. We are Market leaders in Research & Analytics, and Legal services including Patent, Design, Trademark, Copyright, Business & Technical Intelligence.",
    logo: logos.ennobleIp,
  },

  {
    company: "CYL",
    partnered_with: "Partnered with Paycio in",
    description: "Confederation of young leaders",
    details:
      "Confederation of Young Leaders of India continues to be one of the foremost institutions  for youth organizations and young leaders in India working at the grassroots level & with strong national and international linkages. Collectively programs at the Confederation engaged more than 50,000 youth who spearheaded shaping it as a fountainhead of knowledge for youth citizenry.",
    logo: logos.cyl,
  },
  {
    company: "Asset Homez",
    partnered_with: "Partnered with Paycio in",
    description: "Asset Homez",
    details:
      "Discovering the right property for your investment requires a knowledgeable guide with sharp market insights and a deep understanding of investment trends.",
    logo: logos.assetHomez,
  },
  {
    company: "Codeate",
    partnered_with: "Partnered with Paycio in",
    description: "Codeate",
    details:
      "Codeate focuses on simplifying technology through innovative solutions.",
    logo: logos.codeate,
  },
  {
    company: "Codeit",
    partnered_with: "Partnered with Paycio in",
    description: "Codeit",
    details: "Codeit provides tools for seamless software development.",
    logo: logos.codeit,
  },
  {
    company: "DevBoard",
    partnered_with: "Partnered with Paycio in",
    description: "DevBoard",
    details: "DevBoard connects developers with resources and tools.",
    logo: logos.devboard,
  },
  {
    company: "ECell",
    partnered_with: "Partnered with Paycio in",
    description: "ECell",
    details: "ECell fosters entrepreneurial talent through innovation.",
    logo: logos.ecell,
  },
  {
    company: "GeekNation",
    partnered_with: "Partnered with Paycio in",
    description: "GeekNation",
    details: "GeekNation is a community for tech enthusiasts and geeks.",
    logo: logos.geekNation,
  },
  {
    company: "HackWithIndia",
    partnered_with: "Partnered with Paycio in",
    description: "HackWithIndia",
    details:
      "HackWithIndia encourages innovation through hackathons and events.",
    logo: logos.hackWithIndia,
  },
  {
    company: "Indian Hacking League",
    partnered_with: "Partnered with Paycio in",
    description: "Indian Hacking League",
    details: "Indian Hacking League is India's premier hacking competition.",
    logo: logos.indianHackingLeague,
  },
  {
    company: "Inovact",
    partnered_with: "Partnered with Paycio in",
    description: "Inovact",
    details: "Inovact inspires innovation and creativity in tech development.",
    logo: logos.inovact,
  },

  {
    company: "Sotech Inc.",
    partnered_with: "Partnered with Paycio in",
    description: "Sotech Inc.",
    details: "Sotech Inc. develops cutting-edge technology solutions.",
    logo: logos.sotechInc,
  },
  {
    company: "Web3 Aligargh",
    partnered_with: "Partnered with Paycio in",
    description: "Web3 Aligargh",
    details: "Web3 Aligargh promotes blockchain and Web3 technologies.",
    logo: logos.web3Aligarh,
  },
  {
    company: "IDC",
    partnered_with: "Partnered with Paycio in",
    description: "IDC (International Data Corporation)",
    details:
      " IDC (International Data Corporation) is a global provider of market intelligence, advisory services, and events for the information technology, telecommunications, and consumer technology markets.",
    logo: logos.idc,
  },
  {
    company: "ITC",
    partnered_with: "Partnered with Paycio in",
    description: "International Tronz Coin",
    details:
      "International Tronz Coin(ITC) - a Cryptocurrency for gaming & Entertainment",
    logo: logos.itc,
  },
  {
    company: "Monitok",
    partnered_with: "Partnered with Paycio in",
    description: "Monitok - Self-Custodial Crypto Exchange",
    details:
      "Monitok focuses on innovative blockchain and Web3 solutions, aiming to simplify decentralized finance and increase blockchain adoption.",
    logo: logos.monitok,
  },

  {
    company: "Three-Way Studio",
    partnered_with: "Partnered with Paycio in",
    description: "Threeway Studio™ - Leading Blockchain Solutions firm",
    details:
      "A creative agency specializing in innovative design, branding, and digital storytelling to elevate business identities.",
    logo: logos.threeWayStudio,
  },
  {
    company: "VIT Blockchain Community",
    partnered_with: "Partnered with Paycio in",
    description: "VIT Blockchain Community",
    details:
      " A student-led initiative that promotes education and innovation in blockchain technology within VIT University and beyond.",
    logo: logos.vitBlockchainCommunity,
  },
  {
    company: "WalletHunter",
    partnered_with: "Partnered with Paycio in",
    description: "Wallet Hunter's Web3 SEO services ",
    details:
      " WalletHunter offers analytics and tools for monitoring and securing cryptocurrency wallets.",
    logo: logos.walletHunter,
  },
  {
    company: "Web3 Innovators Nexus",
    partnered_with: "Partnered with Paycio in",
    description: "Unleash your  Web3 potential with Wallet Hunter",
    details:
      "A hub for Web3 developers and enthusiasts to collaborate, innovate, and scale blockchain-based solutions.",
    logo: logos.web3InnovatorsNexus,
  },
  {
    company: "Aetherium",
    partnered_with: "Partnered with Paycio in",
    description: "Aetherium | Elder Scrolls",
    details:
      "Aetherium is committed to building eco-friendly Web3 solutions and creating sustainable blockchain ecosystems.",
    logo: logos.aetherium,
  },
  {
    company: "AlertCode",
    partnered_with: "Partnered with Paycio in",
    description: "AlertCode",
    details:
      "AlertCode enhances application security by providing tools and frameworks for secure coding practices.",
    logo: logos.alertCode,
  },
  {
    company: "Avinya Labs",
    partnered_with: "Partnered with Paycio in",
    description: "Avinya Labs - Product Consulting & Development | IT Services",
    details:
      "Avinya Labs specializes in developing AI-powered blockchain solutions, emphasizing innovation and usability.",
    logo: logos.avinyaLabs,
  },
  {
    company: "Befikra Community",
    partnered_with: "Partnered with Paycio in",
    description: "Befikra Community",
    details:
      "A vibrant community aimed at empowering individuals with Web3 knowledge and fostering innovation.",
    logo: logos.befikraCommunity,
  },
  {
    company: "Buidlx Hackathon",
    partnered_with: "Partnered with Paycio in",
    description: "BuidlX is an all-encompassing platform",
    details:
      "Buidlx Hackathon is a series of competitions encouraging developers to create innovative blockchain projects.",
    logo: logos.buidlxHackathon,
  },
  {
    company: "CodeLn Blogs",
    partnered_with: "Partnered with Paycio in",
    description: "CodeLn Blogs - Power your Tech Hiring with AI",
    details:
      "A platform providing in-depth blogs, tutorials, and resources for software development and coding enthusiasts.",
    logo: logos.codeLnBlogs,
  },
  {
    company: "Decentra Classes",
    partnered_with: "Partnered with Paycio in",
    description: "LEARN TO EARN TRANSFORM KNOWLEDGE",
    details:
      "Decentra Classes focuses on Web3 education, helping individuals understand and leverage blockchain technology.",
    logo: logos.decentraClasses,
  },
  {
    company: "DevGrowth",
    partnered_with: "Partnered with Paycio in",
    description: "DevGrowth",
    details:
      " DevGrowth assists startups and enterprises in integrating blockchain technology into their business models.",
    logo: logos.devGrowth,
  },
];