"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Data {
    name: string;
    img: string;
    type: "wallet" | "exchange" | "hybrid";
}


const OurWallets = () => {
    const [wallets, setWallets] = useState<Data[]>([]);
    const [exchanges, setExchanges] = useState<Data[]>([]);
    const [hybrids, setHybrids] = useState<Data[]>([]);
    useEffect(() => {
        setWallets(data.filter((item) => item.type === "wallet"));
        setExchanges(data.filter((item) => item.type === "exchange"));
        setHybrids(data.filter((item) => item.type === "hybrid"));
    }, []);

    return (
        <section className="xl:py-24 py-18">
            <div className="site-width-sm">
                <div className="grid lg:grid-cols-2 items-center">
                    {/* LEFT */}
                    <div className="lg:mb-0 mb-24">
                        <h2 className="h2-tag">Partnership with 50+ Companies</h2>
                        <p className="max-w-[540px] mt-6 p-tag">
                            Working alongside leading companies to deliver solutions that
                            shape the future.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#dadfe3]/10 px-5 shadow-[0_0_80px_rgba(218,223,227,0.22)]">
                        <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full">
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center lg:w-full w-[160px] py-3 px-2 rounded-2xl mt-4 mb-4 md:hidden block">
                                Wallets
                            </button>
                            <VerticalScroller items={wallets} direction="up" type="Wallets" />
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center md:w-full w-[160px] py-3 px-2 rounded-2xl mt-4 mb-4 md:hidden block">
                                Exchanges
                            </button>
                            <VerticalScroller
                                items={exchanges}
                                direction="down"
                                type="Exchanges"
                            />
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center md:w-full w-[160px] py-3 px-2 rounded-2xl mt-4 mb-4 md:hidden block">
                                Hybrid
                            </button>
                            <VerticalScroller items={hybrids} direction="up" type="Hybrid" />
                        </div>

                        <div className="md:flex items-center justify-center gap-6 w-full mt-6 hidden">
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center w-full py-3 px-2 rounded-2xl mt-4 mb-4">
                                Wallets
                            </button>
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center w-full py-3 px-2 rounded-2xl mt-4 mb-4">
                                Exchanges
                            </button>
                            <button className="cursor-pointer bg-[#F4F6FF] text-[#291BDB] text-center w-full py-3 px-2 rounded-2xl mt-4 mb-4">
                                Hybrid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWallets;

// ---------- VERTICAL SCROLLER ----------
interface VerticalScrollerProps {
    items: Data[];
    direction?: "up" | "down";
    type: "Wallets" | "Exchanges" | "Hybrid";
}

const VerticalScroller = ({ items, direction = "up" }: VerticalScrollerProps) => {
    if (!items.length) return null;

    const scrollDistance = items.length * 140; // height * items

    return (
        <div className="relative 2xl:h-[460px] xl:h-[360px] h-100 md:w-64 overflow-hidden">
            <motion.div
                className="flex flex-col gap-4"
                animate={{
                    y:
                        direction === "up"
                            ? [0, -scrollDistance]
                            : [-scrollDistance, 0],
                }}
                transition={{
                    duration: 60,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className="p-[2px] rounded-[12px] overflow-hidden"
                    // style={{
                    //     boxShadow: "rgb(218 223 227 / 22%) 0px 0px 50px 0px",
                    // }}
                    >
                        <div className="bg-white py-6 rounded-lg px-5 text-xl font-semibold text-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="max-w-[180px] w-full object-contain aspect-[210/46] mx-auto"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};



const data: Data[] = [
    // Wallets
    { name: "Edge wallet", img: "/images/wallets/edge-wallet.png", type: "wallet" },
    { name: "Metamask", img: "/images/wallets/metamask.png", type: "wallet" },
    { name: "Trust wallet", img: "/images/wallets/trust-wallet.png", type: "wallet" },
    { name: "Opera wallet", img: "/images/wallets/opera-wallet.png", type: "wallet" },
    { name: "Coinomi", img: "/images/wallets/coinomi.png", type: "wallet" },
    { name: "Dopamine", img: "/images/wallets/dopamine.png", type: "wallet" },
    { name: "Guarda wallet", img: "/images/wallets/guarda-wallet.png", type: "wallet" },
    { name: "Xcelpay", img: "/images/wallets/xcel-pay.png", type: "wallet" },
    { name: "Mycelium", img: "/images/wallets/mycelium.png", type: "wallet" },
    { name: "Iopay", img: "/images/wallets/iopay.png", type: "wallet" },
    { name: "Walletswap", img: "/images/wallets/wswap.png", type: "hybrid" }, // wallet + DEX
    { name: "Infinity", img: "/images/wallets/infinity.png", type: "wallet" },
    { name: "Anchor wallet", img: "/images/wallets/anchor-wallet.png", type: "wallet" },
    { name: "Zelcore", img: "/images/wallets/zelcore.png", type: "wallet" },
    { name: "Bitkeep secux", img: "/images/wallets/bitkeep-secux.png", type: "wallet" },
    { name: "Ellipal", img: "/images/wallets/ellipal.png", type: "wallet" },
    { name: "Xumm", img: "/images/wallets/xumm.png", type: "wallet" },
    { name: "Cake wallet", img: "/images/wallets/cake-wallet.png", type: "wallet" },
    { name: "Hola wallet", img: "/images/wallets/hola.png", type: "wallet" },
    { name: "Solareum", img: "/images/wallets/solareum1.png", type: "wallet" },
    { name: "Orange wallet", img: "/images/wallets/orange-wallet.png", type: "wallet" },
    { name: "Quidli", img: "/images/wallets/quidli.png", type: "wallet" },
    { name: "Trustee wallet", img: "/images/wallets/trustee.png", type: "wallet" },
    { name: "Bitcoin.com", img: "/images/wallets/btc-wallet.png", type: "wallet" },
    { name: "Alty", img: "/images/wallets/alty1.png", type: "wallet" },
    { name: "Tribe", img: "/images/wallets/tribe.avif", type: "wallet" },
    { name: "Coinhub", img: "/images/wallets/coinhub.png", type: "wallet" },
    { name: "Moonstake", img: "/images/wallets/moonstake.png", type: "wallet" },

    // Hybrids (wallet + exchange/DEX)
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },
    { name: "Onto", img: "/images/wallets/onto.png", type: "hybrid" },
    { name: "Changenow", img: "/images/wallets/change-now.png", type: "hybrid" },
    { name: "Uniswap", img: "/images/wallets/uniswap.png", type: "hybrid" },
    { name: "Pancake", img: "/images/wallets/pancake-swap.png", type: "hybrid" },

    // Exchanges
    { name: "Binance", img: "/images/wallets/binance.png", type: "exchange" },
    { name: "Whitebit", img: "/images/wallets/white-bit.png", type: "exchange" },
    { name: "Changelly", img: "/images/wallets/changelly.png", type: "exchange" },
    { name: "Kraken", img: "/images/wallets/kraken.png", type: "exchange" },
    { name: "Cex.io", img: "/images/wallets/cexio.png", type: "exchange" },
    { name: "Htx", img: "/images/wallets/htx.png", type: "exchange" },
    { name: "Ascendex", img: "/images/wallets/ascendex.png", type: "exchange" },
    { name: "Mexc", img: "/images/wallets/mexc.png", type: "exchange" },
    { name: "Gate.io", img: "/images/wallets/gate.io.png", type: "exchange" },
    { name: "Bitmart", img: "/images/wallets/bitmart.png", type: "exchange" },
    { name: "Coinex", img: "/images/wallets/coinex.png", type: "exchange" },
    { name: "Deepcoin", img: "/images/wallets/deepcoin.png", type: "exchange" },
    { name: "Kriptomat", img: "/images/wallets/kriptomat.png", type: "exchange" },
    { name: "Bithumb", img: "/images/wallets/bithumb.png", type: "exchange" },
    { name: "Bitglobal", img: "/images/wallets/bitglobal.png", type: "exchange" },
    { name: "Bitrue", img: "/images/wallets/bitrue.png", type: "exchange" },
    { name: "Simpleswap", img: "/images/wallets/simple-swap.png", type: "exchange" },
    { name: "Letsexchange", img: "/images/wallets/lets-exchange.png", type: "exchange" },
    { name: "Bitcoiva", img: "/images/wallets/bitcoiva.png", type: "exchange" },
    { name: "Binance", img: "/images/wallets/binance.png", type: "exchange" },
    { name: "Whitebit", img: "/images/wallets/white-bit.png", type: "exchange" },
    { name: "Changelly", img: "/images/wallets/changelly.png", type: "exchange" },
];


