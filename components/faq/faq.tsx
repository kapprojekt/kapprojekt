import React from "react";
import { faqDefaultData } from "./faq-default-data";
import FaqItem from "./faq-item";
import { FaqData } from "@/lib/types";

const Faq = ({ data }: { data: FaqData }) => {
  const faqData = data || faqDefaultData;

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {faqData.title}
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            {faqData.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.faqList.map((faqDataItem) => (
            <FaqItem key={`${faqDataItem.question}`} data={faqDataItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
