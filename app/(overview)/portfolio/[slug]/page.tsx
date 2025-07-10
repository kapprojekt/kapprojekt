import React from "react";
import { getFolderMarkups, getMarkup } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ProjectData } from "@/lib/types";
import Gallery from "@/components/gallery/gallery";
import ProjectInfoTile from "@/components/project/project-info-tile";

interface PortfolioItemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const files = getFolderMarkups("content/projects");

  return (
    files?.map((file) => ({
      slug: file.data.slug,
    })) || []
  );
}

const PortfolioItemPage = async ({ params }: PortfolioItemPageProps) => {
  const { slug } = await params;

  const project = getMarkup("content/projects", `${slug}.md`);

  if (!project) {
    notFound();
  }

  const data = project.data as ProjectData;
  return (
    <section className="py-24 mx-auto bg-[rgb(243,239,233)] px-4 sm:px-6 lg:px-8">
      <header className="max-w-4xl mb-16">
        <h1 className="text-xl my-6 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
          {data.title}
        </h1>
        <p className="my-12 leading-relaxed text-justify text-gray-600 sm:text-lg lg:text-xl">
          {data.description}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {data.location && (
            <ProjectInfoTile>
              <span>{data.location}</span>
            </ProjectInfoTile>
          )}
          {data.location && data.date && "|"}
          {data.date && (
            <ProjectInfoTile>
              <span>{data.date}</span>
            </ProjectInfoTile>
          )}
          {data.date && data.projectType && "|"}
          {data.projectType && (
            <ProjectInfoTile>
              <span>{data.projectType}</span>
            </ProjectInfoTile>
          )}
        </div>
      </header>
      <main>
        <Gallery images={data.images} />
      </main>
    </section>
  );
};

export default PortfolioItemPage;
