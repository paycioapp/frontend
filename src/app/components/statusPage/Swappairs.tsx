"use client";
import { formatAmount } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "../utils/Image";

export interface CoinData {
  currency_id: string;
  currency_chain_id: string;
  currency_coin_type: string;
  currency_deposit_fee: string;
  currency_logo_path: string;
  currency_min_deposit: string;
  currency_name: string;
  currency_network: string;
  currency_required_memo: boolean;
  currency_short_code: string;
  currency_status: string;
  currency_transfer_fee: string;
  currency_type: string;
  currency_usd_rate?: number;
  currency_uuid: string;
  currency_withdrawal_ticker: string;
  swappair_vendor_ticker: string;
  swappair_currency_id: string;
  swappair_market_ticker: string;
  swappair_market_id: string;
  swappair_status: string;
  market_logo_path?: string;
  market_name?: string;
  market_network?: string;
  market_short_code?: string;
  market_usd_rate?: number;
}

interface MinimumPaymentProps {
  swapPairs?: CoinData[];
}

interface TokenDropdownProps {
  label: string;
  selected: CoinData | null;
  options: CoinData[];
  onSelect: (token: CoinData) => void;
  search: string;
  setSearch: (value: string) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  isFrom?: boolean;
}

const TokenDropdown: React.FC<TokenDropdownProps> = ({
  label,
  selected,
  options,
  onSelect,
  search,
  setSearch,
  open,
  setOpen,
  isFrom,
}) => {
  return (
    <div className="mb-8 mt-5">
      <label className="block text-[#828282] text-md mb-2 font-medium">{label}</label>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center justify-between w-full px-4 py-3.5 rounded-lg bg-[#F8F9FF]"
        >
          {selected ? (
            <span className="flex items-center gap-2">
              <Image
                src={isFrom ? selected.currency_logo_path : selected.market_logo_path || undefined}
                alt={isFrom ? selected.currency_name : selected.market_name || 'coins'}
                wrapperClassName="w-[40px] h-[40px] rounded-full"
              />
              <div className="text-start leading-[20px]">
                <div className="text-[18px] font-semibold">
                  {isFrom ? selected.currency_name : selected.market_name}
                </div>
                <div className="text-[15px] text-[#1F1F1F]">
                  {isFrom ? selected.currency_short_code : selected.market_short_code}
                </div>
              </div>
            </span>
          ) : (
            "Select Token"
          )}
          <ChevronDown className="h-6 w-6 text-[#6A719A]" />
        </button>
        <p>
          <span className="font-semibold">Network:</span>
          <span className="ml-2 text-sm text-[#1f1f1f] font-semibold">
            {isFrom ? selected?.currency_network : selected?.market_network}
          </span>
        </p>

        {open && (
          <>
            <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg z-20">
              <div className="m-2">
                <input
                  className="w-full focus:outline-0 bg-[#f8f9ff] border-b border-[#e0e0e0] px-3 py-2"
                  placeholder="Search token..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {options
                  .filter((t) =>
                    (isFrom ? t.currency_name : t.market_name || "")
                      ?.toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((token) => (
                    <button
                      key={isFrom ? token.swappair_currency_id : token.swappair_market_id}
                      onClick={() => {
                        onSelect(token);
                        setSearch("");
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left text-black hover:bg-[#f8f9ff] justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={isFrom ? token.currency_logo_path : token.market_logo_path || ""}
                          alt={isFrom ? token.currency_name : token.market_name || ""}
                          className="w-[24px] h-[24px] rounded-full"
                        />
                        <div className="text-start leading-[20px]">
                          <div className="text-[15px] font-semibold">
                            {isFrom ? token.currency_name : token.market_name}
                          </div>
                          <div className="text-[12px] text-[#1F1F1F]">
                            {isFrom ? token.currency_short_code : token.market_short_code}
                          </div>
                        </div>
                      </div>
                      <div className="leading-4 text-end">
                        <p className="text-[15px] font-semibold m-0">Network</p>
                        <span className="text-[12px] text-[#1F1F1F]">
                          {isFrom ? token.currency_network : token.market_network}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-10 bg-transparent"
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

const MinimumPayment: React.FC<MinimumPaymentProps> = ({ swapPairs }) => {
  const [fromTokens, setFromTokens] = useState<CoinData[]>([]);
  const [toTokens, setToTokens] = useState<CoinData[]>([]);
  const [fromToken, setFromToken] = useState<CoinData | null>(null);
  const [toToken, setToToken] = useState<CoinData | null>(null);

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  useEffect(() => {
    if (!swapPairs || swapPairs.length === 0) return;

    // Get unique fromTokens in one pass
    const uniqueFrom = swapPairs.reduce<CoinData[]>((acc, curr) => {
      if (!acc.some((t) => t.swappair_currency_id === curr.swappair_currency_id)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    setFromTokens(uniqueFrom);

    // Default fromToken
    if (!fromToken) setFromToken(uniqueFrom[0]);
  }, [swapPairs]);

  useEffect(() => {
    if (swapPairs?.length && fromToken) {
      const filteredToTokens = swapPairs.filter(
        (item) => item.swappair_currency_id === fromToken.swappair_currency_id
      );
      setToTokens(filteredToTokens);

      if (filteredToTokens.length) {
        setToToken(filteredToTokens[0]);
      }
    }
  }, [swapPairs, fromToken]);

  if (!swapPairs || swapPairs.length === 0) {
    return (
      <section className="bg-gradient-to-b from-[#fff] via-[#f8f9ff] to-[#f8f9ff] pt-8 pb-24">
        <div className="site-width text-center py-20">
          <p className="text-lg text-gray-500">Issue with API...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#fff] via-[#f8f9ff] to-[#f8f9ff] pt-8 pb-24">
      <div className="site-width">
        <h2 className="h2-tag text-center">
          Minimum payment amount for crypto pairs
        </h2>
        <p className="text-xl text-center">
          Check minimum payment amounts for all cryptocurrencies supported on our platform
        </p>
        <div className="mt-18">
          <div className="bg-white rounded-2xl shadow-[0px_8px_18px_13px_#aeb6ea0d] p-6 w-full max-w-[580px] mx-auto">
            <TokenDropdown
              label="From"
              selected={fromToken}
              options={fromTokens}
              onSelect={setFromToken}
              search={searchFrom}
              setSearch={setSearchFrom}
              open={openFrom}
              setOpen={setOpenFrom}
              isFrom
            />
            <TokenDropdown
              label="To"
              selected={toToken}
              options={toTokens}
              onSelect={setToToken}
              search={searchTo}
              setSearch={setSearchTo}
              open={openTo}
              setOpen={setOpenTo}
            />
            {/* Minimum Payment */}
            <div className="mb-8">
              <label className="text-[#828282] text-[18px] font-medium">
                Minimum payment amount
              </label>
              <div className="bg-[#F8F9FF] py-8 px-10 rounded-xl">
                <h4 className="text-2xl font-semibold m-0">
                  {formatAmount(50 / (fromToken?.currency_usd_rate ?? 1))}{" "}
                  {fromToken?.currency_short_code}
                </h4>
                <p className="text-[#1F1F1F]/70 text-lg font-medium">
                  ~ 50 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimumPayment;
