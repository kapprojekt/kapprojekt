import React from "react";
import Link from "next/link";
import { ProjectData } from "@/lib/types";
import Image from "next/image";

const ProjectTile = ({ project }: { project: ProjectData }) => {
  return (
    <div className="group overflow-hidden bg-white rounded shadow-lg relative cursor-pointer">
      <Image
        className="object-cover aspect-[4/3] w-full group-hover:scale-110 duration-300"
        src={project.images[0].image}
        alt={project.images[0].alt}
        width={400}
        height={400}
      />
      <Link
        className="absolute top-0 left-0 w-full h-full translate-y-full group-hover:translate-0 duration-300 bg-[rgba(0,0,0,0.4)]
        p-8 flex flex-col justify-center gap-8 items-center backdrop-blur-xs"
        href={`/portfolio/${project.slug}`}
      >
        <h1 className="text-center text-[rgb(243,239,233)] text-2xl font-bold drop-shadow-[0_0_10px_black]">
          {project.title}
        </h1>
        {/* <Link
          className="px-3 py-2 font-semibold transition-all duration-200
                  bg-[rgb(243,239,233)] rounded-md flex items-center gap-2"
          href={`/portfolio/${project.slug}`}
        >
          <span>Zobacz</span>
          <FaArrowUpRightFromSquare />
        </Link> */}
      </Link>
      {/* <Link href={`/portfolio/${project.slug}`} className="absolute bottom-1">
        <Button>Zobacz</Button>
      </Link> */}
    </div>
  );
};

export default ProjectTile;
