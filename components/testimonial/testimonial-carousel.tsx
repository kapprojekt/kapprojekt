"use client";

import React from "react";
import { ProjectData } from "@/lib/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialCarouselProps {
  testimonialData: ProjectData[];
}

const TestimonialCarousel = ({ testimonialData }: TestimonialCarouselProps) => {
  return (
    <section className="w-full max-w-6xl mx-auto py-10 sm:py-16 lg:py-24 h-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Co mówią o nas klienci?
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mb-6"
      >
        {testimonialData.map((project) => (
          <SwiperSlide key={project.slug} className="w-full max-w-xs">
            {/* <TestimonialCarouselItem project={project} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCarousel;
