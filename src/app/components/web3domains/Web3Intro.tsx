"use client"
import Image from "../utils/Image";
import { useState } from "react"

const Web3Intro = () => {
    const [name, setname] = useState<string | null>(null)
    const ucpiat = ["matic", "arb", "avax", "sol", "ton", "trx", "bnb", "eth"];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className=" text-white relative web3-intro z-2">
                <div className="site-width relative z-2">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-3">
                        <div className="py-20">
                            <h1 className="h1-tag">Register your web3 name with UCPI</h1>
                            <p className="p-tag">One user name for every web3 Wallet.</p>
                            <div className="relative max-w-[560px] mt-12">
                                <input type="text" placeholder="Register your name" onChange={(e) => setname(e.target.value)} className="w-full py-4 pl-5 px-2 bg-white text-black rounded-full focus:border-0 focus:outline-0" />
                                <button className="rounded-full bg-[#180cb2] text-white absolute top-1/2 right-2 -translate-y-1/2 py-2.5 px-10" onClick={() => setIsOpen(true)}>Connect</button>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-12">
                                {ucpiat.map((ucpi) => (
                                    <div className="bg-[#3024C5] rounded-2xl px-4 py-4 flex items-center gap-1 justify-center min-w-[160px]" key={ucpi}>
                                        <Image src={`/images/ucpi/${ucpi}.png`} alt={ucpi} wrapperClassName="w-[35px] h-[35px] shrink-0" />
                                        <span className="text-lg font-semibold whitespace-pre-wrap"> {name}@{ucpi}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <div className="relative w-full h-full mx-auto">
                                <video
                                    className="w-full h-full object-cover block border-none outline-none"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source
                                        src="/images/c.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                {/* <Image src="/images/web3-intro-unscreen.gif" alt="web3-intro-unscreen" wrapperClassName="h-full w-full" /> */}
                            </div>

                        </div>
                    </div>
                    <UCPIConnectWallet isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

            </section>
        </>
    )
}

export default Web3Intro

interface UcpiPProp {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

function UCPIConnectWallet({ isOpen, setIsOpen }: UcpiPProp) {


    return (
        <div className="flex items-center justify-center">


            {/* Upcoming Popup */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative w-[100%] max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        {/* Popup Content */}
                        <h2 className="xl:text-5xl text-2xl font-bold text-gray-800 mb-2 flex items-center gap-4"><Image src={'/images/ucpi-icon.png'} alt="ucpi icon" wrapperClassName="w-[48px]" /> UCPI DApp</h2>
                        <p className="text-gray-600 mb-4 xl:text-2xl text-lg mt-5">
                            Connect wallet feature is <span className="font-semibold text-[#180cb2]">coming soon</span>.
                            Stay tuned for updates!
                        </p>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full px-5 py-3 text-lg rounded-xl bg-[#180cb2] text-white font-medium hover:bg-[#180cb2]/80 transition"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}