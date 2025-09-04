

import { useEffect, useState } from "react";
import type { ActiveTestimonial, Testimonial } from "./Testimonials";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const imageWidth_lg = 100;
const imageWidth_md = 70;
const imageWidth_sm = 50;

type Props = {
  className?: string;
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>; // allow functional updater
  setImageWidth: (imageWidth: number) => void;
  imageWidth: number;
  coinItems: Testimonial[];
  setCoinItems: React.Dispatch<React.SetStateAction<ActiveTestimonial[]>>; // also allow functional updater
  nextIndex :number
};


const TestimonialsScroll: React.FC<Props> = ({
  className,
  activeItem,
  setActiveItem,
  imageWidth,
  setImageWidth,
  coinItems,
  setCoinItems,
  nextIndex
}) => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 1281) setImageWidth(imageWidth_lg);
    else if (width >= 991) setImageWidth(imageWidth_md);
    else setImageWidth(imageWidth_sm);
  }, [width, setImageWidth]);

  const activeLeft = imageWidth;
  const maxLeft = -imageWidth * (coinItems.length - 2);

  // Update active flags when activeItem changes
  useEffect(() => {
    setCoinItems((prev: ActiveTestimonial[]) =>
      prev.map((item, i) => ({
        ...item,
        isActive: i === activeItem,
      }))
    );
  }, [activeItem, setCoinItems]);

  const goToNext = () => {
    setActiveItem((prev:number) => (prev + 1) % coinItems.length);

    setCoinItems((prevItems:Testimonial[]) =>
      prevItems.map((item:any) => {
        const newFromLeft = item?.isActive ? maxLeft : item?.fromLeft + imageWidth;
        return {
          ...item,
          fromLeft: newFromLeft,
          isPreviouslyActive: item.isActive,
          isActive: newFromLeft === activeLeft,
        };
      })
    );
  };

  return (
    <div className={`${className} w-full mb-20 relative`}>
      {coinItems.map((item:any, i:number) => {
        const moveLength = (imageWidth / coinItems.length) * 3;
        const offset = item.isActive
          ? `${moveLength + imageWidth}%`
          : item?.fromLeft + imageWidth * 4;

        return (
          <div
            key={i}
            style={{
              width: imageWidth,
              left: offset,
              opacity: item.isActive || item.isPreviouslyActive ? 0 : 1,
            }}
            className="grid z-10 transition-all duration-[1s] place-items-center aspect-square absolute rounded-full"
          >
            {i === nextIndex ? (
              <CountdownCircleTimer
                key={`timer-${activeItem}`}
                isPlaying
                duration={5}
                size={imageWidth}
                strokeWidth={2}
                colors={["#180cb2", "#fff", "#fff"]}
                colorsTime={[2, 2, 2]}
                trailColor="#ddd"
                onComplete={() => {
                  goToNext();
                  return { shouldRepeat: false };
                }}
              >
                {() => (
                  <img
                    key={item.image}
                    src={`/images/testimonials/${item.image}.png`}
                    alt={item.name}
                    className="relative w-[92%] mx-auto rounded-full p-1"
                  />
                )}
              </CountdownCircleTimer>
            ) : (
              <img
                key={item.image}
                src={`/images/testimonials/${item.image}.png`}
                alt={item.name}
                className="relative w-[100%] mx-auto border-white border-6 rounded-full"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialsScroll