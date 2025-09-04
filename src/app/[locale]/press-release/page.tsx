import { getMetadata } from "@/app/components/MetaTags";
import PageHeader from "@/app/components/PageHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
export const metadata = getMetadata('/press-release')
const Pressrelease = () => {
  const t = useTranslations();
  const pressRelease = [
    {
      id: 1,
      link: "https://www.theceo.in/press-release/beyond-hype-how-paycio-is-driving-real-world-utility-in-crypto-payments",
      img: "https://media.assettype.com/theceo%2F2025-02-28%2F3q44519w%2Fpr-23.jpg?w=1024&auto=format%2Ccompress&fit=max",
      postheader:
        "Beyond Hype: How Paycio is Driving Real-World Utility in Crypto Payments",
      postcontent: `As global crypto transactions are set to exceed $10 trillion by 2030, businesses are shifting their focus from speculation to practical adoption. However, key barriers—technical complexities, lack of seamless transactions, and the need for constant internet connectivity—have prevented widespread use.`,
      date: " Mar 07, 2025",
    },
    {
      id: 1,
      link: "https://cointelegraph.com/press-releases/davosweb3-roundtable-2025-concludes-by-accelerating-the-global-web3-movement",
      img: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/0e596c5fb4d69073bbc6539382818beb.jpg",
      postheader:
        "DavosWeb3 Roundtable 2025 concludes by accelerating the global Web3 movement",
      postcontent: `Davos, Switzerland – The highly anticipated DavosWeb3 Roundtable successfully concluded its inaugural gathering in the heart of Davos, where 100 of the brightest minds in Web3 converged to shape the future of decentralized technologies. This premier event transcended traditional conferences, acting as a launchpad for visionary collaborations, groundbreaking insights, and tangible commitments toward building a more inclusive and innovative global ecosystem.`,
      date: " Mar 03, 2025",
    },
    {
      id: 1,
      link: "https://www.etnownews.com/cryptocurrency/paycio-launches-new-crypto-payments-app-for-seamless-transactions-article-109524733",
      img: "https://etstatic.tnn.in/photo/msid-109524673,updatedat-1713857345073,width-200,height-200,resizemode-75/109524673.jpg",
      postheader:
        "Paycio launches new crypto payments app for seamless transactions",
      postcontent: `Paycio said in a release that the new app will allow users to transact via mobile numbers. The app will offer services like crypto transactions, swapping and wallet.
                         Crypto payment services provider Paycio has announced the launch of a new crypto payments app. The company said that the new app will simplify transactions for investors and enthusiasts alike.`,
      date: " Apr 23, 2024 | 12:59 PM IST",
    },

    {
      id: 3,
      link: "https://www.businesstoday.in/impact-feature/story/paycio-first-of-its-kind-crypto-payments-app-launched-allowing-users-to-transact-via-mobile-numbers-426708-2024-04-24",
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202404/6628b2b83bbac-paycio-crypto-payments-app-launched-242022702-16x9.jpeg?size=948:533",
      postheader: "Paycio first-of-its-kind crypto payments app launched",
      postcontent: `Paycio, a crypto payment services provider, has launched a new crypto payments app allowing users to transact via mobile numbers. This app offers services like crypto transactions, swapping, and wallet.`,
      date: "April 10, 2024, 6:26:58 PM IST",
    },
    {
      id: 5,
      link: "https://www.financialexpress.com/business/digital-transformation-paycio-launches-crypto-payments-app-it-will-allow-transactions-via-mobile-numbers-heres-how-3454252/",
      img: "https://www.financialexpress.com/wp-content/uploads/2024/03/Untitled-design-2024-03-13T110606.192.jpg?w=1024",
      postheader:
        "Paycio launches crypto payments app – it will allow transactions via mobile numbers; here’s how",
      postcontent: `At a time when innovation and technology are converging, a groundbreaking development has emerged, promising to revolutionize the way people engage with cryptocurrencies. Paycio, the brainchild of Dr. S. Sunil Kumar Singh, has unveiled its cutting-edge crypto payment application, poised to simplify transactions for investors and enthusiasts alike.`,
      date: "April 11, 2024 22:05 IST",
    },
    {
      id: 6,
      link: "https://www.msn.com/en-in/money/news/paycio-launches-new-crypto-payments-app-for-seamless-transactions/ar-AA1nuHQ0",
      img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1nuMW5.img?w=768&h=432&m=6",
      postheader:
        "Paycio launches new crypto payments app for seamless transactions",
      postcontent: `Crypto payment services provider Paycio has announced the launch of a new crypto payments app. The company said that the new app will simplify transactions for investors and enthusiasts alike.`,
      date: " Apr 23, 2024 | 12:59 PM IST",
    },
    {
      id: 8,
      link: "https://www.cryptopolitan.com/paycio-first-of-its-kind-crypto-payments-app-launched-allowing-users-to-transact-via-mobile-numbers/",
      img: "https://www.cryptopolitan.com/wp-content/uploads/2024/04/pasted-image-0-3-7.jpg",
      postheader:
        "Paycio First-of-its-kind Crypto Payments App – Launched, Allowing Users to Transact via Mobile Numbers",
      postcontent:
        "Paycio, a UAE-based crypto payment mobile application, aims to make everyday life easier using cryptocurrency and a unique crypto transaction application for users, merchants, and crypto enthusiasts to complete transactions through Mobile numbers.",
      date: "April 10, 2024",
    },

    {
      id: 9,
      link: "https://www.cnbctv18.com/cryptocurrency/paycio-launches-crypto-payments-app-allowing-users-to-transact-via-mobile-numbers-19395169.htm",
      img: "https://images.cnbctv18.com/uploads/2023/09/cryptocurency-scam-crypto.jpg?impolicy=website&width=590&height=264",
      postheader:
        "Paycio launches crypto payments app to allow transactions via mobile numbers",
      postcontent:
        "Paycio uses Unified Crypto Payment Interface (UCPI), which allows users to send and receive crypto globally irrespective of any cross-chain or any current wallets we used.",
      date: "April 10, 2024, 6:26:58 PM IST",
    },
    {
      id: 10,
      link: "https://cryptoslate.com/press-releases/paycio-first-of-its-kind-crypto-payments-app-launched-allowing-users-to-transact-via-mobile-numbers/",
      img: "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2024/04/paycio-pr.jpg&w=700&h=367&q=75",
      postheader:
        "Paycio First-of-its-kind Crypto Payments App – Launched, Allowing Users to Transact via Mobile Numbers",
      postcontent:
        "Paycio, a UAE-based crypto payment mobile application, aims to make everyday life easier using cryptocurrency and a unique crypto transaction application for users, merchants, and crypto enthusiasts to complete transactions through Mobile numbers. Paycio offers many services like Crypto transactions, swapping, and wallet on the site. Crypto is slowly but surely becoming a part of people’s daily lives. Users can utilize crypto for daily transactions with Paycio’s features.",
      date: "April 10, 2024",
    },
  ];
  return (
    <>
      <div className="main font-outfit">
        <PageHeader title={t('pressrelease_header')} text="" />
        <section className="img-section mt-24 mb-48">
          <div className="site-width">
            <div className="grid gap-4 md:gap-4 lg:gap-4 xl:gap-5 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-[repeat(auto-fit,minmax(26 0px,1fr))] ">
              {pressRelease.map((news, index) => (
                <div className="news" style={{ cursor: "pointer" }} key={index}>
                  <Image
                    loading="lazy"
                    src={news.img}
                    alt={news.postheader}
                    fill
                    className="!relative aspect-[6/4] !h-auto rounded-t-lg m-0 object-cover"
                  />
                  <div className="w-full rounded-[24px] shadow-md p-4">
                    <h4 className="text-lg font-[600] line-clamp-2">{news.postheader}</h4>
                    <ul className="flex gap-6 text-sm justify-between mb-4 mt-2 text-[#211f32]">
                      <li>By Author</li>
                      <li>{news.date}</li>
                    </ul>
                    <p className="line-clamp-4 overflow-hidden text-ellipsis">{news.postcontent}</p>
                    <Link href={news.link} target="_blank"
                      className="flex justify-end mb-0 mt-4 cursor-pointer"
                      style={{ color: "#291bdb", fontWeight: "500" }}
                    >
                      More...
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Pressrelease;
