"use client";

import { FaqItemData } from "@/lib/types";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Markdown from "react-markdown";
import MarkdownAsync from "react-markdown";

interface FaqItemProps {
  data: FaqItemData;
}

const FaqItem = ({ data }: FaqItemProps) => {
  const { question, sections } = data;

  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className="transition-all duration-200 bg-white border border-gray-200 hover:bg-gray-50">
      <button
        type="button"
        className="flex cursor-pointer items-center justify-between text-left gap-2 w-full px-4 py-5 sm:p-6"
        onClick={() => setItemOpen(!itemOpen)}
      >
        <span className="text-lg font-semibold text-black">{question}</span>

        <FaChevronDown
          className={`shrink-0 duration-300 ${
            itemOpen ? "rotate-180" : "rotate-0 "
          }`}
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
              <div className="prose">
                <Markdown>{sectionData.text}</Markdown>
              </div>
              {sectionData.buttons && (
                <div className="flex flex-col sm:flex-row gap-3 my-4">
                  {sectionData.buttons.map((buttonData) => {
                    return (
                      <Link
                        key={`${buttonData.label}--${buttonData.url}`}
                        className="px-4 py-3 text-base text-center font-semibold transition-all duration-200 border-2
                  border-stone-600 rounded-md hover:bg-stone-600 hover:text-white"
                        href={`${buttonData.url}`}
                      >
                        {buttonData.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FaqItem;
