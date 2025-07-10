import ProjectTile from "@/components/project/project-tile";
import { ProjectData } from "@/lib/types";
import { getFolderMarkups } from "@/lib/utils";
import React from "react";

const PortfolioPage = () => {
  const projects = getFolderMarkups("content/projects");

  if (!projects) {
    return (
      <p className="py-32 text-4xl text-center">
        Wystąpił błąd w czasie pobierania danych!
      </p>
    );
  }

  const projectsData = projects.map((project) => project.data) as ProjectData[];

  projectsData.sort((a, b) => b.order - a.order);

  return (
    <section className="py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center">
            <h2 className="font-bold mb-10 leading-tight text-black text-4xl lg:text-5xl">
              Projekty
            </h2>
          </div>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-7xl">
          {projectsData.map((project) => (
            <ProjectTile key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
