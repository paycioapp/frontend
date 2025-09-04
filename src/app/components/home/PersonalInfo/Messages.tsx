import Image from "next/image";
import { motion } from "framer-motion";


const Messages = ({
  activeIndex,
}: {
  activeIndex: number;
}) => {
  return (
    <>
      {/* Desktop view */}
      <div className="w-full h-full md:block hidden">
        {messages.map((pin, index) => {
          const isOdd = pin.id % 2 !== 0;
          const leftPos = isOdd ? "auto" : "-45%";
          const rightPos = isOdd ? "-45%" : "auto";
          const topPos = `${(pin.id / messages.length) * 60}%`;
          const isActive = pin.id === activeIndex + 1;

          return (
            <motion.div
              key={index}
              className={`absolute flex items-center gap-5 ${
                !isOdd
                  ? "flex-row-reverse translate-x-1/4 translate-y-1/4"
                  : "flex-row -translate-x-1/4 translate-y-1/4"
              }`}
              style={{
                top: topPos,
                left: leftPos,
                right: rightPos,
                zIndex: 100 + pin.id,
              }}
              initial={{ y: 0 }}
              animate={{
                y: pin.id <= activeIndex + 1 ? -10 : 0,
                scale: 1,
                opacity: pin.id <= activeIndex + 1 ? 1 : 0,
              }}
              transition={{ duration: 1 }}
            >
              <div
                className={`shadow-lg rounded-[18px] lg:py-4 lg:px-6 p-4 gap-5 max-w-[236px] w-full ${
                  isActive
                    ? "bg-[#180cb2] text-white"
                    : "bg-white text-[#000]"
                } transition-all duration-300`}
              >
                <p className="text-base">{pin.content}</p>
              </div>
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src={pin.image}
                  fill
                  alt={`Location pin ${index + 1}`}
                  className="!relative aspect-square object-cover rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className="w-full h-full md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 mt-6 justify-center items-center">
        {messages.map((pin, index) => {
          const isOdd = pin.id % 2 !== 0;
          const isActive = pin.id === activeIndex + 1;

          return (
            <motion.div
              key={index}
              className={`flex items-center gap-5 justify-center ${
                !isOdd ? "flex-row-reverse" : "flex-row"
              }`}
              style={{ zIndex: 100 + pin.id }}
              initial={{ y: 0 }}
              animate={{
                y: pin.id <= activeIndex + 1 ? -10 : 0,
                scale: 1,
                opacity: pin.id <= activeIndex + 1 ? 1 : 0,
              }}
              transition={{ duration: 1 }}
            >
              <div
                className={`shadow-lg rounded-[18px] lg:py-4 lg:px-6 p-4 gap-5 max-w-[236px] w-full ${
                  isActive
                    ? "bg-[#180cb2] text-white"
                    : "bg-white text-[#000]"
                } transition-all duration-300`}
              >
                <p className="text-base">{pin.content}</p>
              </div>
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src={pin.image}
                  fill
                  alt={`Location pin ${index + 1}`}
                  className="!relative aspect-square object-cover rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Messages;





const messages = [
    {
        id: 1,
        image: "/images/testimonials/1.png",
        content: "How much time do I have for my order return?",
        name: "1 Mike Taylor",
        location: "Lahore, Pakistan",
    },
    {
        id: 2,
        image: "/images/testimonials/2.png",
        content: "Hi Debra! You can return your purchase within 7 days.",
        name: "2 Chris Thomas",
        location: "CEO of Red Button",
    },
    {
        id: 3,
        image: "/images/testimonials/3.png",
        content: "Send and receive crypto instantly using just a mobile number. No wallet addresses, no hassle.",
        name: "3 Mitchell",
    },

]