import React from "react";
import { faqDefaultData } from "./faq-default-data";
import FaqItem from "./faq-item";

const Faq = () => {
  const data = faqDefaultData;

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            FAQ
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Najczęściej zadawane pytania
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {data.map((faqDataItem, index) => (
            <FaqItem key={`${faqDataItem.title}-${index}`} data={faqDataItem} />
          ))}
        </div>

        {/* <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p> */}
      </div>
    </section>
  );
};

export default Faq;
