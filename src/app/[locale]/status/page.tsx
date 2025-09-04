"use client"
import PageHeader from "@/app/components/PageHeader"
import AvailableTokens from "@/app/components/statusPage/AvailableTokens"
import StatusIntro from "@/app/components/statusPage/availabletokens/StatusIntro"
import MinimumPayment, { CoinData } from "@/app/components/statusPage/Swappairs"
import { GET_ASSETS, GET_SWAPPAIRS } from "@/lib/API"
import usePost from "@/lib/useFetch"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Status = () => {
    const [swapPairs, setSwapPairs] = useState<CoinData[]>([]);
    const [coins, setCoins] = useState<CoinData[]>([]);
    const { postData } = usePost();

    const getSwapPairs = async () => {
        try {
            const response = await postData(GET_SWAPPAIRS, {});
            // Assuming the API returns { swappairs: [], cryptocurrencies: [] }
            const swappairs: CoinData[] = response.swappairs || [];
            setSwapPairs(swappairs);
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    };

    const getAssets = async () => {
        try {
            const response = await postData(GET_ASSETS, {}); // <- should be the correct endpoint for coins
            const allCoins: CoinData[] = response?.cryptocurrencies || [];
            const filteredCoins = allCoins.filter(
                (item: CoinData) => item.currency_short_code?.toLowerCase() !== "pyc"
            );
            setCoins(filteredCoins);
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        getSwapPairs();
        getAssets();
    }, []);

    // Merge swapPairs with vendor and market info
    const merged = swapPairs.map(pair => {
        const vendorCoin = coins.find(c => c.currency_id === pair.swappair_currency_id);
        const marketCoin = coins.find(c => c.currency_id === pair.swappair_market_id);
        if (!vendorCoin) return pair;
        if (!marketCoin) return pair;
        return {
            ...pair,
            currency_logo_path: vendorCoin.currency_logo_path,
            currency_name: vendorCoin.currency_name,
            currency_network: vendorCoin.currency_network,
            currency_short_code: vendorCoin.currency_short_code,
            currency_usd_rate: vendorCoin.currency_usd_rate,
            market_logo_path: marketCoin.currency_logo_path,
            market_name: marketCoin.currency_name,
            market_network: marketCoin.currency_network,
            market_short_code: marketCoin.currency_short_code,
            market_usd_rate: marketCoin.currency_usd_rate,
        };

    });


    return (
        <>
            <PageHeader title={'Status page'} text="" />
            <StatusIntro />
            <MinimumPayment swapPairs={merged} />
            <AvailableTokens />
        </>
    )
}
export default Status