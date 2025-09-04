"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
// Define the shape of the API response data
interface CoinData {
    vendors_id: string;
    vendors_vendorname: string;
    vendors_vendorshortcode: string;
    vendors_transferfee: string;
    vendors_withdrawlvendorticker: string;
    vendors_cointype: string;
    vendors_logopath: string;
  }
  
const SupportCoins =()=> {
  const t = useTranslations();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [apiData, setApiData] = useState<CoinData[]>([]);
    const [filter, setFilter] = useState<string>('All');
    const [filteredCoins, setFilteredCoins] = useState<CoinData[]>([]);
    const itemsPerPage = 20;
    const [visibleItems, setVisibleItems] = useState<number>(itemsPerPage);
  
    const getCoins = async () => {
      const apiUrl = "https://core.paycio.ae/assets/getassets";
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const bothData: CoinData[] = [...data.cryptocurrencies, ...data.fiatcurrencies];
  
        setApiData(bothData);
        setFilteredCoins(bothData);
      } catch (error: unknown) {
        let message = "Something went wrong. Please try again.";
        if (error instanceof Error) {
          message = error.message;
        }
        toast.error(message);
      }
    };
  
    const duplicateRemove = apiData.map((item) => item.vendors_cointype);
    const filteretypeArray: string[] = ['All', ...new Set(duplicateRemove)];
  
    useEffect(() => {
      getCoins();
    }, []);
  
    const memoizedData = useMemo(() => {
      return apiData; // Preprocess data if needed
    }, [apiData]);
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchQuery(value);
      filterData(value, filter);
    };
  
    const handleFilterClick = (value: string) => {
      setFilter(value);
      filterData(searchQuery, value);
    };
  
    const filterData = (searchValue: string, filterValue: string) => {
      let filtered = memoizedData.filter((item) => 
        filterValue === 'All' || item.vendors_cointype === filterValue
      );
  
      filtered = filtered.filter((item) => 
        item.vendors_vendorshortcode?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.vendors_vendorname?.toLowerCase().includes(searchValue.toLowerCase())
      );
  
      setFilteredCoins(filtered);
    };
  
    const loadMoreItems = () => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
    };
  
    const viewLessItems = () => {
      setVisibleItems(itemsPerPage);
    };
    return (
        <section className="py-28">
        <div className="site-width mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-9 gap-10">
            <h2 className="text-2xl font-bold">{t('supportpage_fees')}</h2>
            <div className="flex items-center flex-wrap md:gap-10 gap-4">
              <ul className="flex space-x-4">
                {filteretypeArray.map((type) => (
                  <li
                    key={type}
                    onClick={() => handleFilterClick(type)}
                    className={`cursor-pointer px-0 ${
                      filter === type
                        ? 'border-b-4 border-solid border-[#120471]'
                        : 'border-b-4 border-solid border-transparent'
                    }`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
              <input
                className="form-input border border-gray-300 rounded-lg px-4 py-2 w-[270px]"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
            {filteredCoins.slice(0, visibleItems).map((logo) => (
              <li key={logo.vendors_id} className="flex items-center rounded-lg shadow-[0_0_24px_12px_#c4c4c426] gap-3.5 p-3.5">
                <div className="w-[60px] h-[60px] flex-shrink-0">
                  <Image fill
                    loading="lazy"
                    className="w-full h-full object-contain rounded-md !relative"
                    src={logo.vendors_logopath}
                    alt={logo.vendors_vendorshortcode}
                  />
                </div>
                <div>
                  <h5 className="text-lg font-semibold flex flex-col">
                    {logo.vendors_vendorname}{' '}
                    <span className="text-sm">
                      {logo.vendors_vendorshortcode}
                    </span>
                  </h5>
                  <small className="text-gray-600">
                    Fee {parseFloat(logo.vendors_transferfee).toFixed(5)}{' '}
                    {logo.vendors_withdrawlvendorticker}
                  </small>
                </div>
              </li>
            ))}
          </ul>

          {filteredCoins.length !== 0 ? (
            <div className="flex justify-center mt-8 text-[#180cb2] text-lg">
              {visibleItems < filteredCoins.length ? (
                <button onClick={loadMoreItems}>
                  {t('supportpage_loadmore')}
                </button>
              ) : (
                <button onClick={viewLessItems}>
                  {t('supportpage_viewless')}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 h-[300px] w-full flex items-center justify-center text-lg text-bold">{t('supportpage_nodata')}</div>
          )}
        </div>
      </section>
    )
}
export default SupportCoins