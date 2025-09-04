"use client";
import { formatAmount } from "@/lib/utils";
import Image from "../../utils/Image";
import { CoinData } from "./useCoins";

export const CoinCard = ({ coin }: { coin: CoinData }) => {
    return (
        <li className="rounded-lg shadow-[0_0_20px_5px_#f8f9ff] p-3.5 bg-white">
            <div className="flex items-center gap-2.5 border-b border-[#dadfe3] pb-4">
                <div className="w-[40px] h-[40px]">
                    <Image src={coin.vendors_logopath} alt={coin.vendors_vendorshortcode} width={40} height={40} className="object-contain rounded-md" />
                </div>
                <h5 className="text-lg font-semibold flex flex-col">
                    <span className="truncate w-[240px]">{coin.vendors_vendorname}</span>
                    <span className="text-sm">{coin.vendors_vendorshortcode}</span>
                </h5>
            </div>
            <div className="pt-2">
                <p>Min. Payment</p>

                <ul className="flex items-center justify-between">
                    <li className="text-lg font-semibold">
                        {formatAmount(Number(coin.vendors_mindeposit))}
                    </li>
                    <li className="text-[#1F1F1F]">
                        ~ {formatAmount(Number(coin.vendors_mindeposit) * Number(coin.vendors_usdrate))} USD
                    </li>
                </ul>


            </div>
        </li>
    );
};
