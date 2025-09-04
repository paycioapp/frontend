"use client";
import { CoinCard } from "./CoinCard";
import { CoinData } from "./useCoins";

export const TokenGrid = ({ coins }: { coins: CoinData[] }) => {
    return coins.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {coins.map((coin) => (
                <CoinCard key={coin.vendors_id} coin={coin} />
            ))}
        </ul>
    ) : (
        <p className="h-36 w-full grid place-items-center text-xl font-semibold">No data</p>
    );
};
