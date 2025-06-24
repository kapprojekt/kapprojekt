"use client";

import { FaqItemData } from "@/lib/types";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FaqItemProps {
  data: FaqItemData;
}

const FaqItem = ({ data }: FaqItemProps) => {
  const { title, sections } = data;

  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={() => setItemOpen(!itemOpen)}
      >
        <span className="flex text-lg font-semibold text-black">{title}</span>

        <FaChevronDown
          className={`duration-300 ${itemOpen ? "rotate-180" : "rotate-0 "}`}
        />
      </button>

      <div
        className={`px-4 pb-5 sm:px-6 sm:pb-6 duration-300 ${
          itemOpen ? "block" : "hidden"
        }`}
      >
        {sections.map((sectionData) => {
          return (
            <article key={sectionData.text}>
              <p>{sectionData.text}</p>
              {sectionData.buttons?.map((buttonData, index) => {
                return (
                  <a key={`${buttonData.label}-${index}`} href={buttonData.url}>
                    {buttonData.label}
                  </a>
                );
              })}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FaqItem;
