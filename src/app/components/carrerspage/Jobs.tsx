"use client"; // Required for client-side interactivity in Next.js App Router

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon } from "../icons/Icons";

type Roles = {
  role: string;
  number: number;
};
type AccordionItem = {
  job: string;
  positions: Roles[];
};

const accordionData: AccordionItem[] = [
  {
    job: "Technology & Engineering (18)",
    positions: [
      { role: "Blockchain Developer", number: 8 },
      { role: "Full-Stack Developer", number: 5 },
      { role: "Smart Contract Engineer", number: 5 },
      { role: "DevOps Engineer", number: 3 },
    ],
  },
  {
    job: "Product & Design (2)",
    positions: [
      { role: "UI/UX Developer", number: 5 },
      { role: "UI/UX Designer", number: 5 },
    ],
  },
  {
    job: "Marketing & Growth (2)",
    positions: [
      { role: "Business Development Manager", number: 2 },
      { role: "Digital Marketing Expert", number: 3 },
    ],
  },
  {
    job: "Operations & Support (1)",
    positions: [
      { role: "Product Manager", number: 2 },
      { role: "Project Manager", number: 3 },
    ],
  },
  {
    job: "Finance & Legal (1)",
    positions: [
      { role: "CFO", number: 1 },
      { role: "CLO", number: 1 },
    ],
  }
 
];

const JobAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<AccordionItem[]>(accordionData);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchTerm(""); // Clear search when closing
      setFilteredData(accordionData); // Reset to full data
      setOpenIndex(null); // Close all accordions
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = accordionData.filter((item) => {
      const jobMatch = item.job.toLowerCase().includes(value);
      const positionMatch = item.positions.some((pos) =>
        pos.role.toLowerCase().includes(value)
      );
      return jobMatch || positionMatch;
    });

    setFilteredData(filtered);

    // Automatically open the first matching accordion
    const matchedIndex = accordionData.findIndex((item) => {
      const jobMatch = item.job.toLowerCase().includes(value);
      const positionMatch = item.positions.some((pos) =>
        pos.role.toLowerCase().includes(value)
      );
      return jobMatch || positionMatch;
    });
    setOpenIndex(value && matchedIndex !== -1 ? matchedIndex : null);
  };

  return (
    <div className="relative mt-12 md:mt-68"> 
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-md md:text-lg xl:text-2xl 2xl:text-3xl font-semibold">
          Current openings (24)
        </h2>
        <div className="flex items-center gap-4 justify-between">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search jobs..."
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#180cb2] font-outfit"
              />
            )}
          </AnimatePresence>
          <SearchIcon onClick={handleSearchToggle} className="cursor-pointer" />
        </div>
        </div>
    
      {filteredData.length ?
       <div className="w-full p-0">
        {filteredData.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Accordion Header */}
            <div
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer w-full flex justify-between items-center p-4 bg-[#f0f0f9ba] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#f0f0f9ba] transition-all font-outfit"
              style={{
                borderBottomLeftRadius: openIndex === index ? 0 : "",
                borderBottomRightRadius: openIndex === index ? 0 : "",
              }}
            >
              <span
                className="text-left font-outfit text-lg"
                style={{ fontWeight: "500" }}
              >
                {item.job}
              </span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>

            {/* Accordion Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden rounded-[b-lg] bg-[#f0f0f9ba]"
                >
                  <div className="p-4">
                    {Array.isArray(item.positions) ? (
                      item.positions.map((job, idx) => (
                        <button
                          key={idx}
                          className="mb-3 block text-left text-gray-700 font-outfit text-md md:text-lg py-3 px-3 bg-white rounded-[12px]"
                        >
                          {job.role} ({job.number})
                        </button>
                      ))
                    ) : (
                      <p className="text-gray-700 font-outfit text-sm md:text-base">
                        {item.positions}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div> :
      <div className="text-center text-gray-500 h-[300px] w-full flex items-center justify-center text-lg text-bold">
        No data</div>
      }
    </div>
  );
};

export default JobAccordion;
