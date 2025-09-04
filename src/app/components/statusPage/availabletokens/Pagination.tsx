"use client";
import { ChevronLeft } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const generatePagination = (): (number | string)[] => {
        const pagination: (number | string)[] = [];
        const range: number = 1;
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) {
                pagination.push(i);
            } else if (pagination[pagination.length - 1] !== "...") {
                pagination.push("...");
            }
        }
        return pagination;
    };

    return (
        <div className="flex justify-center items-center gap-3 mt-20">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
                className="border border-gray-300 w-8 h-8 disabled:opacity-40 flex items-center justify-center">
                <ChevronLeft />
            </button>
            {generatePagination().map((page, idx) => (
                <button key={idx}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === "..."}
                    className={`border border-gray-300 w-8 h-8 ${
                        page === currentPage ? "bg-[#1001d1] text-white" : "hover:bg-gray-100"
                    }`}>
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
                className="border border-gray-300 w-8 h-8 disabled:opacity-40 flex items-center justify-center">
                <ChevronLeft className="rotate-180" />
            </button>
        </div>
    );
};
