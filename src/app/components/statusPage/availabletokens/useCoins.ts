"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface CoinData {
    vendors_id: string;
    vendors_vendorname: string;
    vendors_vendorshortcode: string;
    vendors_transferfee: string;
    vendors_withdrawlvendorticker: string;
    vendors_cointype: string;
    vendors_logopath: string;
    vendors_paymentavailable: boolean;
    vendors_settlementavailable: boolean;
    vendors_usdrate: number;
    vendors_status: string;
    vendors_currencytype: string;
    vendors_mindeposit: string
}

export const useCoins = () => {
    const [apiData, setApiData] = useState<CoinData[]>([]);
    const [filteredCoins, setFilteredCoins] = useState<CoinData[]>([]);
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [paymentsAvailable, setPaymentsAvailable] = useState(false);
    const [settlementsAvailable, setSettlementsAvailable] = useState(false);

    const getCoins = async () => {
        try {
            const response = await fetch("https://core.paycio.ae/assets/getassets");
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            const allCoins: CoinData[] = [...data.cryptocurrencies, ...data.fiatcurrencies];
            setApiData(allCoins);
            setFilteredCoins(allCoins);
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    const filterData = (
        searchValue: string,
        filterValue: string,
        payAvail: boolean,
        settleAvail: boolean
    ) => {
        let filtered = apiData;

        // 1. Coin type filter
        if (filterValue !== "All") {
            filtered = filtered.filter(
                (item) =>
                    item.vendors_cointype?.toLowerCase() === filterValue.toLowerCase()
            );
        }

        // 2. Search filter
        if (searchValue.trim()) {
            const searchLower = searchValue.toLowerCase();
            filtered = filtered.filter(
                (item) =>
                    item.vendors_vendorshortcode?.toLowerCase().includes(searchLower) ||
                    item.vendors_vendorname?.toLowerCase().includes(searchLower)
            );
        }

        // 3. Pay/Settle filter
        if (payAvail && !settleAvail) {
            filtered = filtered.filter(
                (item) =>
                    item.vendors_status?.toLowerCase() === "active" &&
                    item.vendors_currencytype?.toLowerCase() === "crypto"
            );
        }

        if (settleAvail && !payAvail) {
            filtered = filtered.filter(
                (item) =>
                    item.vendors_status?.toLowerCase() === "active" &&
                    item.vendors_currencytype?.toLowerCase() === "fiat"
            );
        }

        if (payAvail && settleAvail) {
            filtered = filtered.filter(
                (item) =>
                    item.vendors_status?.toLowerCase() === "active" &&
                    (
                        item.vendors_currencytype?.toLowerCase() === "crypto" ||
                        item.vendors_currencytype?.toLowerCase() === "fiat"
                    )
            );
        }

        setFilteredCoins(filtered);
    };




    useEffect(() => {
        getCoins();
    }, []);

    return {
        apiData,
        filteredCoins,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        paymentsAvailable,
        setPaymentsAvailable,
        settlementsAvailable,
        setSettlementsAvailable,
        filterData
    };
};
