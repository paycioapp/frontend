"use client";
import { SearchIcon } from "lucide-react";

interface TokenFiltersProps {
    filteretypeArray: string[];
    filter: string;
    onFilterClick: (type: string) => void;
    searchQuery: string;
    onSearchChange: (value: string) => void;
    paymentsAvailable: boolean;
    onPaymentsChange: (checked: boolean) => void;
    settlementsAvailable: boolean;
    onSettlementsChange: (checked: boolean) => void;
}

export const TokenFilters = ({
    filteretypeArray,
    filter,
    onFilterClick,
    searchQuery,
    onSearchChange,
    paymentsAvailable,
    onPaymentsChange,
    settlementsAvailable,
    onSettlementsChange
}: TokenFiltersProps) => {
    return (
        <div className="flex flex-wrap justify-between items-center mb-9 gap-10">
            <ul className="flex space-x-4">
                {filteretypeArray.map((type) => (
                    <li
                        key={type}
                        onClick={() => onFilterClick(type)}
                        className={`cursor-pointer px-0 transition-all ${
                            filter === type
                                ? "border-b-4 border-[#120471] text-[#120471] font-semibold"
                                : "border-b-4 border-transparent hover:border-[#ccc]"
                        }`}
                    >
                        {type}
                    </li>
                ))}
            </ul>

            <div className="flex items-center flex-wrap md:gap-10 gap-4">
                <div className="flex items-center gap-1 text-lg font-semibold">
                    <input type="checkbox" className="accent-[#1001d1] w-5 h-5"
                        id="pay" checked={paymentsAvailable}
                        onChange={(e) => onPaymentsChange(e.target.checked)} />
                    <label htmlFor="pay" className="select-none text-[#1f1f1f]">Payments Available</label>
                </div>

                <div className="flex items-center gap-1 text-lg font-semibold">
                    <input type="checkbox" className="accent-[#1001d1] w-5 h-5"
                        id="settlement" checked={settlementsAvailable}
                        onChange={(e) => onSettlementsChange(e.target.checked)} />
                    <label htmlFor="settlement" className="select-none text-[#1f1f1f]">Settlements Available</label>
                </div>

                <div className="relative">
                    <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray" />
                    <input
                        className="rounded-lg px-4 py-3 bg-[#F4F4FF] border-0 w-[270px] pl-10 focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};
