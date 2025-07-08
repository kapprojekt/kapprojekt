"use client";

import React from "react";
import { ProjectData } from "@/lib/types";
import ProjectCarouselItem from "./project-carousel-item";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface ProjectCarouselProps {
  projectsData: ProjectData[];
}

const ProjectCarousel = ({ projectsData }: ProjectCarouselProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 sm:py-16 lg:py-24 h-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Portfolio
      </h1>
      <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600">
        W naszych projektach odpowiadamy na potrzeby Inwestorów jednocześnie
        podpowiadamy i zachęcamy do nowatorskich rozwiązań które ułatwiają
        życie. Ty też zasługujesz na piękne mieszkanie.
      </p>
      <Swiper
        slidesPerView={"auto"}
        navigation
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mb-6 w-full"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.slug} className="w-full sm:max-w-xs">
            <ProjectCarouselItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        className="px-3 sm:px-4 py-2 sm:py-3 font-bold sm:text-base text-stone-600 transition-all duration-200 w-fit
                  bg-[rgb(243,239,233)] border-2 border-stone-600 rounded-md hover:bg-stone-600 hover:text-[rgb(243,239,233)]"
        href="/portfolio"
      >
        Zobacz pełne portfolio
      </Link>
    </section>
  );
};

export default ProjectCarousel;
