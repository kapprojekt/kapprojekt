import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section className="py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Kontakt
          </h2>
          {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="flex flex-col md:flex-row gap-6 px-8 text-center md:px-0">
            <div className="overflow-hidden bg-white rounded-xl flex-1">
              <div className="p-6">
                <FaPhone className="flex-shrink-0 w-8 h-8 mx-auto text-stone-500" />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +48 695 040 898 (Wrocław)
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +48 534 788 448 (Warszawa)
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl flex-1">
              <div className="p-6 h-full">
                <FaEnvelope className="flex-shrink-0 w-8 h-8 mx-auto text-stone-500" />
                <p className="mt-6 md:mt-10 text-lg font-medium text-gray-900">
                  kontakt@kapprojekt.pl
                </p>
              </div>
            </div>

            <div className="overflow-hidden flex justify-center md:flex-col gap-4 text-stone-500 font-thin">
              <Link
                href="https://www.instagram.com/kap.projekt/"
                target="_blank"
                className="p-6 aspect-square bg-white rounded-xl duration-300 hover:bg-stone-500 hover:text-white hover:scale-95"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.facebook.com/KAPProjekt/"
                target="_blank"
                className="p-6 aspect-square bg-white rounded-xl duration-300 hover:bg-stone-500 hover:text-white hover:scale-95"
              >
                <FaFacebookF className="w-8 h-8" />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
