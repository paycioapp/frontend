import { motion } from "framer-motion";
import Image from "next/image";

export const LocatePins = () => {
 
  // Array of pin data (positions, unique classes, alt text if needed)
  const pins = [
    {
      className: "2xl:left-[22%] lg:left-[20%] md:left-[18%] md:block hidden top-[25%] lg:w-[30px] 2xl:w-auto",
    },
    {
      className: "2xl:right-[27%] lg:right-[24%] md:right-[21%]  md:block hidden top-[12%] lg:w-[30px] 2xl:w-auto",
    },
    {
      className: "2xl:right-[24%] lg:right-[21%] md:right-[18%]  md:block hidden bottom-[60%] lg:w-[30px] 2xl:w-auto",
    },
  ];

  return (
    <div>
      {pins.map((pin, index) => (
        <motion.div
          key={index}
          className={`absolute sm:${pin.className} ${pin.className} location-pin pin-${index + 1}`}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
            },
            pulse: {
              scale: [1, 1.2, 1],
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          whileHover="pulse"
          viewport={{ amount: 0.2 }}
        >
          <Image
            src="/images/location.png"
            fill
            alt={`Location pin ${index + 1}`}
            className="!relative"
          />
        </motion.div>
      ))}
    </div>
  );
};
