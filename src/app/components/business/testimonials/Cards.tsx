import Image from "next/image";
import { CardProps } from "./testimonialsData";

export const Cards: React.FC<CardProps> = ({ testimonial, current }) => {
  return (
    <div className="relative w-full md:mt-0 mt-20 max-w-[85%] ml-auto">
      {/* Card Stack */}
      {testimonial.map((item, index) => {
        const isActive = index === current;
        const isNext = index === (current + 1) % testimonial.length;

        // Only render active and next
        if (!isActive && !isNext) return null;

        let zIndex = 10;
        if (isActive) zIndex = 30;
        else if (isNext) zIndex = 20;

        return (
          <div
            key={item.id}
            className={` top-0 left-0 w-full  
              ${isActive
                ? "absolute px-5 sm:px-10 md:py-15 py-8 border-3 border-[#180cb2] bg-thm text-white -translate-y-20 -translate-x-5 sm:-translate-x-10 md:-translate-x-15"
                : "relative px-5 sm:px-10 md:pt-25 pt-10 pb-5 border-3 border-[#dadfe3] bg-white text-black translate-y-0 translate-x-0 opacity-90"
              }
              transition-all duration-500 ease-in-out rounded-[20px]`}
            style={{
              zIndex,
            }}
          >
            <div className="w-[90px] h-[90px] absolute top-[-50px] -left-[50px] bg-white rounded-full overflow-hidden" style={{display: isActive ? "block" : "none"}}>
              <Image
                src={item.image}
                alt={item.name}
                className="object-contain p-2"
                fill
              />
            </div>

            <p className="mb-4">{item.content}</p>
            <div className={`${isActive ? "" : "t-16"}`}>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm opacity-70">{item.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
