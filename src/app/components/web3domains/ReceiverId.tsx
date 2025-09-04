"use client";

import { use, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FieldConfig {
    isOpenSend: boolean;
    setIsOpenSend: (isOpenSend: boolean) => void;
}

// Define the UCPIChain type
type UCPIChain = {
    name: string;
    type: string;
    displayName: string;
    chainId?: number;
    explorer: string;
    nativeToken: string;
};

const ReceiverId = ({ isOpenSend, setIsOpenSend }: FieldConfig) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [form, setForm] = useState<{
        receiverid: string;
        currency: UCPIChain | null;
        amount: string;
    }>({
        receiverid: "",
        currency: null,
        amount: "",
    });

    const [errors, setErrors] = useState({
        receiverid: "",
        currency: "",
        amount: "",
    });

    // 🔹 real-time validation
    const validate = (field: string, value: string) => {
        let error = "";
        if (field === "receiverid" && value.trim().length < 3) {
            error = "receiverid must be at least 3 characters";
        }
        if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Invalid email format";
        }
        if (field === "currency" && !value) {
            error = "Please select a currency";
        }
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const handleChange = (field: string, value: any) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        validate(field, typeof value === "object" && value !== null && value.name ? value.name : value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Object.entries(form).forEach(([field, value]) => validate(field, value === null ? "" : typeof value === "object" ? value.name : value));
        if (Object.values(errors).every((err) => !err)) {
            alert("Form Submitted!");
        }
    };

    useEffect(() => {
        if (!isOpenSend) {
            setForm({
                receiverid: "",
                currency: null,
                amount: "",
            });
            setErrors({
                receiverid: "",
                currency: "",
                amount: "",
            });
        }
    }, [isOpenSend]);


    return (
        <>
            {isOpenSend && (
                <div className="fixed w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="bg-white rounded-2xl shadow-2xl w-[500px] p-8 relative">


                        <h2 className="text-4xl font-semibold text-center mb-6">
                            Send Funds
                        </h2>
                        <div className="h-[1px] bg-[#211F32]/10 w-full block mb-12" />


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 max-w-[92%] mx-auto"
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 mb-1">Receiver ID</label>
                                <input
                                    type="text"
                                    value={form.receiverid}
                                    onChange={(e) => handleChange("receiverid", e.target.value)} placeholder="Enter Receiver ID"
                                    className={`w-full px-4 py-5 rounded-[12px] border-0 focus:outline-none focus:ring-0 bg-[#F8F9FF] text-[18px]`}
                                />
                                {errors.receiverid && <p className="text-red-500 text-sm">{errors.receiverid}</p>}
                            </div>

                            {/* Custom Dropdown */}
                            <div className="relative">
                                <label className="block text-gray-700 mb-1">Currency</label>
                                <div className="relative">
                                    <button onClick={() => setOpenDropdown((prev) => !prev)}
                                        type="button"
                                        className={`w-full px-4 py-4 rounded-[12px] border-0 focus:outline-none focus:ring-0 bg-[#F8F9FF] text-[18px] flex items-center gap-1 justify-between`}
                                    >

                                        <div className="flex items-center gap-2">
                                            {form.currency && <img src={`/images/ucpi/${form.currency ? form.currency.name : "default"}.png`} alt={form.currency ? form.currency.name : "default"} className="w-[35px] h-[35px] shrink-0" />}
                                            {form.currency ? form.currency.displayName : "Select a Currency"}
                                        </div>
                                        <ChevronDown className="w-[20px] h-[20px] shrink-0" />
                                    </button>
                                    <div className={`absolute mt-1 w-full bg-[#F8F9FF] border-0 shadow-lg rounded-[12px] z-10 ${openDropdown ? "block" : "hidden"}`}>
                                        {ucpiChains.map((net) => (
                                            <div
                                                key={net.name}
                                                onClick={() => { handleChange("currency", net); setOpenDropdown(false); }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-[18px]"
                                            >

                                                <img src={`/images/ucpi/${net.name}.png`} alt={net.name} className="w-[35px] h-[35px] shrink-0" />
                                                <span>{net.displayName}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {errors.currency && (
                                    <p className="text-red-500 text-sm">{errors.currency}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 mb-1">Amount</label>
                                <input
                                    type="text"
                                    placeholder="Enter Amount"
                                    value={form.amount}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numbers and decimals
                                        if (/^\d*\.?\d*$/.test(value)) {
                                            handleChange("amount", value);
                                        }
                                    }}
                                    className={`w-full px-4 py-5 rounded-[12px] border-0 focus:outline-none focus:ring-0 bg-[#F8F9FF] text-[18px]`}
                                />
                                {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                            </div>



                            {/* Submit */}
                            <div className="text-center">
                                <button
                                    type="submit" 
                                    className={`max-w-[200px] w-full mt-6 py-4 rounded-full font-medium transition text-white text-[18px] mb-6 ${errors
                                        ? "bg-[#180cb2]/80 cursor-not-allowed pointer-events-none"
                                        : "bg-[#180cb2] hover:bg-#180cb2 "
                                        }`}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isOpenSend && <div className="fixed inset-0 bg-black/30 z-1" onClick={() => setIsOpenSend(false)}></div>}
        </>
    );
};

export default ReceiverId;


const ucpiChains: UCPIChain[] = [
    {
        name: "matic",
        type: "evm",
        displayName: "Polygon",
        chainId: 137,
        explorer: "https://polygonscan.com",
        nativeToken: "MATIC",
    },
    {
        name: "arb",
        type: "evm",
        displayName: "Arbitrum",
        chainId: 42161,
        explorer: "https://arbiscan.io",
        nativeToken: "ETH",
    },
    {
        name: "avax",
        type: "evm",
        displayName: "Avalanche C-Chain",
        chainId: 43114,
        explorer: "https://snowtrace.io",
        nativeToken: "AVAX",
    },
    {
        name: "sol",
        type: "solana",
        displayName: "Solana",
        nativeToken: "SOL",
        explorer: "https://explorer.solana.com",
    },
    {
        name: "ton",
        type: "ton",
        displayName: "TON",
        nativeToken: "TON",
        explorer: "https://tonscan.org",
    },
    {
        name: "trx",
        type: "tron",
        displayName: "TRON",
        nativeToken: "TRX",
        explorer: "https://tronscan.org",
    },
    {
        name: "bnb",
        type: "evm",
        displayName: "BNB Chain",
        chainId: 56,
        explorer: "https://bscscan.com",
        nativeToken: "BNB",
    },
    {
        name: "eth",
        type: "evm",
        displayName: "Ethereum",
        chainId: 1,
        explorer: "https://etherscan.io",
        nativeToken: "ETH",
    },
];