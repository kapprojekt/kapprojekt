import { FooterData } from "@/lib/types";
import { getMarkup } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const data = getMarkup("content", `footer.md`);

  const footerData = data?.data as FooterData;

  return (
    <section className="w-full max-w-7xl text-center mx-auto py-10 h-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        {footerData.title}
      </h1>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-10 mb-4">
        {footerData.fullnames.map((fullname) => (
          <p key={fullname.fullname}>{fullname.fullname}</p>
        ))}
      </div>
      <div className="flex justify-center gap-2 my-4">
        {footerData.locations.map((location, index) => (
          <Fragment key={location.location}>
            <span>{location.location}</span>
            {index !== footerData.locations.length - 1 && <span>|</span>}
          </Fragment>
        ))}
      </div>
      <div className="my-4">
        {footerData.phoneNumbers.map((phoneNumber) => (
          <p key={phoneNumber.phoneNumber}>{phoneNumber.phoneNumber}</p>
        ))}
      </div>
      <p className="my-4">{footerData.email}</p>
      <div className="w-full flex justify-center gap-3 mb-6 text-white">
        {footerData.socialMedia.map((mediaLink) => (
          <Link
            key={mediaLink.url}
            href={mediaLink.url}
            target="_blank"
            className="aspect-square bg-stone-600 backdrop-blur-sm p-3 rounded-full
              text-3xl hover:bg-stone-400 duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {mediaLink.type === "ig" && <FaInstagram className="h-5 w-5" />}
            {mediaLink.type === "fb" && <FaFacebookF className="h-5 w-5" />}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;
