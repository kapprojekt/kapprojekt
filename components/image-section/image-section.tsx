import React from "react";
import CustomImage from "../custom-image";
import { ImageSectionData } from "@/lib/types";
import { FaGlobe, FaLocationDot, FaRoute } from "react-icons/fa6";

const ImageSection = ({ data }: { data: ImageSectionData }) => {
  return (
    <section className="z-10 w-full relative text-white">
      <CustomImage
        className="-z-10 absolute w-full h-full object-cover"
        src={data.backgroundImage.toString()}
        alt="image section backgorund image"
        width={1400}
        height={1200}
      />
      <div className="pt-10 pb-20 px-10 bg-black/30 min-h-[35rem]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold py-10">
          {data.title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-evenly">
          {data.workLocations.map((workLocationData) => {
            const workLocationsList = workLocationData.workLocation.split(", ");

            return (
              <div
                key={workLocationData.workLocation}
                className="flex flex-col items-center gap-1 my-8"
              >
                <div className="flex items-center gap-2 text-[rgb(243,239,233)]">
                  {workLocationData.workType === "Stacjonarnie" && (
                    <FaLocationDot className="w-8 h-8" />
                  )}
                  {workLocationData.workType === "Hybrydowo" && (
                    <FaRoute className="w-8 h-8" />
                  )}
                  {workLocationData.workType === "Zdalnie" && (
                    <FaGlobe className="w-8 h-8" />
                  )}
                  <span className="font-extrabold text-xl md:text-2xl drop-shadow-[0_0_10px_black]">
                    {workLocationData.workType}
                  </span>
                </div>
                {/* <span className="text-wrap drop-shadow-[0_0_10px_black]">
                  {workLocationData.workLocation}
                </span> */}
                <div className="flex flex-col items-center">
                  {workLocationsList.map((workLocationItem) => (
                    <span
                      key={workLocationItem}
                      className="font-semibold md:text-lg text-gray-200 drop-shadow-[0_0_10px_black]"
                    >
                      {workLocationItem}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
