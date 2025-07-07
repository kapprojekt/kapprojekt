import { ProjectData } from "@/lib/types";
import React from "react";
import ProjectTile from "./project-tile";

interface ProjectCarouselItemProps {
  project: ProjectData;
}

const ProjectCarouselItem = ({ project }: ProjectCarouselItemProps) => {
  return (
    <div className="py-16 w-full">
      <ProjectTile project={project} />
    </div>
  );
};

export default ProjectCarouselItem;
