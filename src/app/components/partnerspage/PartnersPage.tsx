"use client"
import { useEffect, useState } from "react";
import { partners } from "./partners";
import Image from "next/image";

const PartnersPage = () => {
    const itemsPerPage: number = 5;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = Math.ceil(partners.length / itemsPerPage);
  
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const currentItems = partners.slice(startIndex, endIndex);
  
    const generatePagination = (): (number | string)[] => {
      const pagination: (number | string)[] = [];
      const range: number = 1;
  
      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 ||
          i === totalPages ||
          (i >= currentPage - range && i <= currentPage + range)
        ) {
          pagination.push(i);
        } else if (pagination[pagination.length - 1] !== "...") {
          pagination.push("...");
        }
      }
  
      return pagination;
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentItems]);
  
    return (
      <div className="main">
        <section className="mt-10 md:mt-24 md:mb-48 mb-28 font-outfit">
          <div className="site-width-sm">
            <ul className="partnerslist">
              {currentItems?.map((item, index: number) => (
                <li
                  className="border-b border-dashed border-[#dadfe3] py-14"
                  key={item.company}
                  style={{
                    border: `${index + 1 === currentItems.length ? "none" : ""}`,
                  }}
                >
                  <div className="flex md:flex-row flex-col md:items-center md:gap-24 gap-5">
                    <div className="md:flex-[200px] md:text-center">
                      <h4 className="font-semibold text-xl xl:text-2xl">{item.company}</h4>
                      <p>
                        {item.partnered_with} {item.year ?? 2024}
                      </p>
                    </div>
                    <div className="md:flex-[800px] md:pl-[40px] md:border-l md:border-solid md:border-[#dadfe3]">
                      <h6 className="font-bold">{item.description}</h6>
                      <p>{item.details}</p>
                    </div>
                    <div className="md:flex-[200px]">
                      <Image fill 
                        loading="lazy"
                        src={item.logo}
                        alt={`${item.company} Company`}
                        className="aspect-[2/1] rounded-lg shadow-[0_0_8px_3px_#f1f1f1ed] m-0 object-contain p-[5px_6px] max-w-[220px] w-full !relative"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button
                onClick={() =>
                  setCurrentPage((prev: number) => Math.max(prev - 1, 1))
                }
                style={{cursor : currentPage === 1 ? 'not-allowed': '',opacity : currentPage === 1 ? '0.2':''}}
              >
                Previous
              </button>
              {generatePagination().map(
                (page: number | string, index: number) => (
                  <span
                    key={index}
                    onClick={() => {
                      if (page !== "...") {
                        setCurrentPage(page as number);
                      }
                    }}
                    className={page === currentPage ? "active" : "normal"}
                    style={{
                      cursor: page !== "..." ? "pointer" : "default",
                    }}
                  >
                    {page}
                  </span>
                )
              )}
              <button
                onClick={() =>
                  setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
                }
                style={{cursor : currentPage === totalPages ? 'not-allowed': '',opacity : currentPage === totalPages ? '0.2':''}}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default PartnersPage;