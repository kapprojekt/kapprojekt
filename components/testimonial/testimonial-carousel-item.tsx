"use client";

import { TestimonialData } from "@/lib/types";
import React, { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa6";
import Markdown from "react-markdown";

interface TestimonialCarouselItemProps {
  testimonial: TestimonialData;
}

const TestimonialCarouselItem = ({
  testimonial,
}: TestimonialCarouselItemProps) => {
  const [isWraped, setIsWraped] = useState(true);

  return (
    <div className="flex flex-col items-center shadow-xl rounded-md bg-white p-6 space-y-4">
      <div className="flex justify-center items-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h2 className="text-center font-bold text-xl text-gray-800">
        {testimonial.fullName}
      </h2>
      <div
        className={`prose text-gray-600 text-center text-sm overflow-hidden relative duration-300 ${
          isWraped ? "max-h-32" : "max-h-max"
        }`}
      >
        {isWraped && (
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-white to-transparent to-30%" />
        )}
        <Markdown>{testimonial.testimonialText}</Markdown>
      </div>
      <button
        onClick={() => setIsWraped(!isWraped)}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <span>{isWraped ? "Rozwiń" : "Zwiń"}</span>
        <FaChevronDown
          className={`group-hover:animate-bounce duration-200 ${
            isWraped ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
};

export default TestimonialCarouselItem;
