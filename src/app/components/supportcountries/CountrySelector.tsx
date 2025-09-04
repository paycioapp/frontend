import Image from "next/image";
import { SupportedCountry } from "./types";
import { constants } from "./utils";


interface CountrySelectorProps {
  isOpen: boolean;
  selectedCountry: SupportedCountry;
  supportedCountries: SupportedCountry[];
  searchQuery: string;
  setIsOpen: (value: boolean) => void;
  handleSelect: (value: SupportedCountry) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CountrySelector = ({
  isOpen,
  selectedCountry,
  supportedCountries,
  searchQuery,
  setIsOpen,
  handleSelect,
  handleSearchChange,
  className = ""
}: CountrySelectorProps) => {
  return (
    <div className={`form-group selectCountry ${className}`} style={{ position: "relative" }}>
      <div className="" style={{ maxWidth: "450px" }}>
        <div className={`input-with-arrow ${isOpen && "droparrow"}`}>
          <input
            readOnly
            style={{
              backgroundImage:
                selectedCountry.name === "Select Country"
                  ? `url(${constants.defaultbg})`
                  : `url(${selectedCountry.logo})`,
            }}
            className={`form-control cursor-pointer countryflag-bg ${
              selectedCountry.name === "Select Country" && "dafaultflag"
            }`}
            value={selectedCountry.name}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div id="listbox" style={{ zIndex: "9" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ height: "50px",width:'100%',padding: "8px 32px",border: "1px solid #d7d7d7" }}
          />
          <ul role="listbox" className="listul">
            {supportedCountries
              .filter((country) =>
                country.name
                  ?.toLowerCase()
                  .includes(searchQuery?.toLowerCase())
              )
              .map((value,index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(value)}
                  className={`cursor-pointer country-lists ${
                    value.name === selectedCountry.name && "active"
                  }`}
                  hidden={
                    value.name === selectedCountry.name ||
                    value.name === "Select Country"
                  }
                  style={{
                    pointerEvents:
                      value.name === "Select Country" ? "none" : "auto",
                  }}
                >
                  <Image width={32} height={32}
                    loading="lazy"
                    src={value.logo}
                    style={{ width: "32px", marginTop: "0" }}
                    alt={value.name}
                  />{" "}
                  {value.name === "Burund" ? "Burundi" : value.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};