import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ScrollImagesProps {
  divRef: React.RefObject<HTMLDivElement | null>;
  type: "left" | "right"
}

const images = [
  "/images/scroll/1.png",
  "/images/scroll/2.png",
  "/images/scroll/3.png",
  "/images/scroll/4.png",
  "/images/scroll/5.png",
  "/images/scroll/6.png",
];



const ScrollImages: React.FC<ScrollImagesProps> = ({ divRef, type }) => {
  const [scrollImages, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (type === 'left') {
      setImages([...images.slice(0, 3), ...images.slice(3, 6)]);
    } else {
      setImages([...images.slice(3,6),...images.slice(0,3)]);
    }
  }, [type]);
  
  return (
    <div className="w-1/2 h-full overflow-hidden">
      <div className={`flex ${type == 'left' ? 'flex-col': 'flex-col-reverse'} gap-2 md:gap-4`} ref={divRef}>
        {scrollImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-full aspect-[1/1.2] rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Scroll image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollImages;
