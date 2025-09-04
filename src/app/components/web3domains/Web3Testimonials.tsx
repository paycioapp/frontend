"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsScroll from "./TestimonialsScroll";
import { testimonials, type ActiveTestimonial } from "./Testimonials";
const imageWidth_lg = 100;
const imageWidth_md = 70;
const imageWidth_sm = 50;
const Web3Testimonials = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [imageWidth, setImageWidth] = useState(imageWidth_lg);
    const [coinItems, setCoinItems] = useState<ActiveTestimonial[]>(
        testimonials.map((item, i) => ({
            ...item,
            isActive: i === activeItem,
            isPreviouslyActive: false,
            fromLeft:
                i === activeItem
                    ? imageWidth_lg
                    : -imageWidth_lg * i + imageWidth_lg,
        }))
    );
    const nextIndex = (activeItem + 1) % coinItems.length;
    return (
        <section className="bg-white xl:py-32 pt-12 pb-12 px-4 md:px-8">
            <div className="site-width-sm mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                {/* Left Side - Avatars with progress bars */}
                <div className="relative">
                    <h2 className="h2-tag mb-8">Client’s Testimonials</h2>
                    <TestimonialsScroll
                        className=""
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        imageWidth={imageWidth} setImageWidth={setImageWidth}
                        coinItems={coinItems} setCoinItems={setCoinItems} nextIndex={nextIndex}
                    />
                </div>

                {/* Right Side - Testimonial with animation */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={nextIndex} // triggers animation on change
                            initial={{ opacity: 0, y: 120 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -120 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 flex gap-2 items-center">
                                    <img
                                        src={`/images/testimonials/${testimonials[nextIndex].image}.png`}
                                        alt={`${testimonials[nextIndex].name}`}
                                        className="w-8 h-8"
                                    />{" "}
                                    {testimonials[activeItem].name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    {testimonials[nextIndex].position}
                                    {testimonials[nextIndex].company &&
                                        `, ${testimonials[nextIndex].company}`}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {testimonials[nextIndex].quote}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-fit">
                                    <Star
                                        className="text-[#F48617] fill-[#F48617]"
                                        size={20}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900">
                                            {testimonials[nextIndex].rating}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {testimonials[nextIndex].label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Web3Testimonials;

