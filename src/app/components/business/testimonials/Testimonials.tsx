"use client";
import { useState } from "react";
import { Cards } from "./Cards";
import { Arrows } from "./Arrows";
import { useTranslations } from "next-intl";
import { useTestimonials } from "./testimonialsData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonial = useTestimonials()
  const t = useTranslations();
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonial.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + testimonial.length) % testimonial.length);
  return (
    <>
      <section className="md:py-24 py-12 md:py-24 lg:py-36">
        <div className="site-width-sm">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-18 md:gap-12">
            <div>
              <h4 className="h4-tag text-[#727272]">{t('businesssection_testimonials')}</h4>
              <h2 className="h2-tag md:mt-5 mt-2">{t('businesssection_testimonials_text')}</h2>
              <div className="flex gap-1 gap-2 md:mt-12 mt-5">
                {testimonial.map((items, index) => (
                  <span
                    key={index}
                    className={`${
                      current == index ? "bg-thm" : "bg-[#dadfe3]"
                    } cursor-pointer h-2 w-2 block rounded-[24px]`}
                    onClick={() => {
                      setCurrent(index);
                    }}
                  >
                    <span className="hidden">{items.id}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="md:hidden block">
                <Arrows
                  testimonial={testimonial}
                  current={current}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </div>
              <div className="flex gap-8 md:flex-row flex-col">
                <Cards
                  testimonial={testimonial}
                  current={current}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
                <div className="md:block hidden">
                  <Arrows
                    testimonial={testimonial}
                    current={current}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
