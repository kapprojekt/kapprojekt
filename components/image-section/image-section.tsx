import React from "react";
import CustomImage from "../custom-image";
import { ImageSectionData } from "@/lib/types";
import { FaGlobe, FaLocationDot, FaRoute } from "react-icons/fa6";

const ImageSection = ({ data }: { data: ImageSectionData }) => {
  return (
    <section className="z-10 w-full min-h-[60vh] relative text-white">
      <CustomImage
        className="-z-10 absolute w-full h-full object-cover"
        src={data.backgroundImage.toString()}
        alt="image section backgorund image"
        width={1400}
        height={1200}
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 py-10 px-10 bg-black/30">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-10">
          {data.title}
        </h2>
        <div>
          {data.workLocations.map((workLocationData) => (
            <div
              key={workLocationData.workLocation}
              className="flex items-center gap-2 text-xl my-3"
            >
              {workLocationData.workType === "Stacjonarnie" && (
                <FaLocationDot className="w-8 h-8" />
              )}
              {workLocationData.workType === "Hybrydowo" && (
                <FaRoute className="w-8 h-8" />
              )}
              {workLocationData.workType === "Zdalnie" && (
                <FaGlobe className="w-8 h-8" />
              )}
              <span className="font-bold">{workLocationData.workType}</span> -{" "}
              {workLocationData.workLocation}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
