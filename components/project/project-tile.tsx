import React from "react";
import Link from "next/link";
import { ProjectData } from "@/lib/types";
import CustomImage from "../custom-image";
import { FaChevronRight } from "react-icons/fa6";

const ProjectTile = ({ project }: { project: ProjectData }) => {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div className="group overflow-hidden bg-white rounded shadow-lg relative cursor-pointer">
        <CustomImage
          className="object-cover aspect-[4/3] w-full lg:group-hover:scale-110 duration-300"
          src={project.images[0].image.toString()}
          alt={project.images[0].alt}
          width={400}
          height={400}
        />
        <div
          className="absolute top-0 left-0 w-full h-full lg:translate-y-96 lg:group-hover:translate-y-0 duration-300 bg-[rgba(0,0,0,0.4)]
        p-8 flex flex-col justify-center items-center lg:backdrop-blur-xs"
        >
          <h1 className="text-center text-[rgb(243,239,233)] text-2xl font-bold drop-shadow-[0_0_10px_black]">
            {project.title}
          </h1>
          <div className="absolute -right-1 -bottom-1 text-[rgb(243,239,233)] text-xl pl-3 pt-3 pb-4 pr-4 rounded-md">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTile;
