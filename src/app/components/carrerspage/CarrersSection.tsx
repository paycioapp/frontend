"use client";
import Image from "next/image";
import React from "react";
import JobAccordion from "./Jobs";
import CareerForm from "./CareerForm";

const CareerSection = () => {
  return (
    <React.Fragment>
      <div className="relative mb-24">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <Image
            src={"/images/careers.png"}
            alt="Careers background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <section className="site-width relative -mt-32 md:-mt-40 lg:-mt-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center">
                <div
                  className="max-w-[690px] w-full space-y-8 bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-[24px]"
                  style={{ boxShadow: "0 0 20px 6px #dadfe338" }}
                >
                  <div className="max-w-[572px]">
                    <h1 className="h2-tag">
                      Join our talent pool to explore future openings
                    </h1>
                  </div>
                  <CareerForm />
                </div>
              </div>
            </div>

            <div className="relative ">
              <JobAccordion />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CareerSection;