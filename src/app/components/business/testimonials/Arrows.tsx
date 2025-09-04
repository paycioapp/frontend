import Image from "next/image";
import { CardProps } from "./testimonialsData";

export const Arrows: React.FC<CardProps> = ({
  testimonial,
  current,
  handleNext,
  handlePrev,
}) => {
  return (
    <>
      <div className="md:flex-col md:justify-start flex flex-row justify-end relative top-[-24px] md:gap-6  gap-16">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className={`w-[21px] h-[12px] transition ${
            current === 0 ? "!cursor-not-allowed opacity-40" : ""
          }`}
        >
          <Image
            className="!relative object-contain transform rotate-[90deg] md:rotate-[180deg]"
            alt=""
            src={"/images/arrow-down.png"}
            fill
          />
        </button>
        <button
          onClick={handleNext}
          disabled={current === testimonial.length - 1}
          className={`w-[21px] h-[12px] transition ${
            current === testimonial.length - 1
              ? "!cursor-not-allowed opacity-40"
              : ""
          }`}
        >
          <Image
            className="!relative object-contain transform rotate-[275deg] md:rotate-[0deg]"
            alt=""
            src={"/images/arrow-down.png"}
            fill
          />
        </button>
      </div>
    </>
  );
};
