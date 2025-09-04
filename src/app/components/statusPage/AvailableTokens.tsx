"use client";
import { useState } from "react";
import { useCoins } from "./availabletokens/useCoins";
import { TokenFilters } from "./availabletokens/TokenFilters";
import { TokenGrid } from "./availabletokens/TokenGrid";
import { Pagination } from "./availabletokens/Pagination";

const itemsPerPage = 20;

const AvailableTokens = () => {
    const {
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
    } = useCoins();

    const [currentPage, setCurrentPage] = useState(1);

    const filteretypeArray = ["All", ...new Set(apiData.map((item) => item.vendors_cointype))];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredCoins.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredCoins.length / itemsPerPage);

    return (
        <section className="bg-gradient-to-t from-[#fff] via-[#f8f9ff] to-[#f8f9ff] pt-8 pb-24">
            <div className="site-width">
                <div className="border-b border-[#dadfe3] pb-8">
                    <h2 className="h2-tag text-center">Available coins</h2>
                    <p className="text-xl text-center">
                        Check if a certain asset is available for payments or withdrawals at this moment.
                    </p>
                </div>

                <section className="pt-18">
                    <TokenFilters
                        filteretypeArray={filteretypeArray}
                        filter={filter}
                        onFilterClick={(value) => { setFilter(value); filterData(searchQuery, value, paymentsAvailable, settlementsAvailable); setCurrentPage(1); }}
                        searchQuery={searchQuery}
                        onSearchChange={(value) => { setSearchQuery(value); filterData(value, filter, paymentsAvailable, settlementsAvailable); setCurrentPage(1); }}
                        paymentsAvailable={paymentsAvailable}
                        onPaymentsChange={(checked) => { setPaymentsAvailable(checked); filterData(searchQuery, filter, checked, settlementsAvailable); setCurrentPage(1); }}
                        settlementsAvailable={settlementsAvailable}
                        onSettlementsChange={(checked) => { setSettlementsAvailable(checked); filterData(searchQuery, filter, paymentsAvailable, checked); setCurrentPage(1); }}
                    />

                    <TokenGrid coins={currentItems} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </section>
            </div>
        </section>
    );
};

export default AvailableTokens;
