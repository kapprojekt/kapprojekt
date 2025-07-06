import React from "react";
import { getMarkup } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ProjectData } from "@/lib/types";
import Gallery from "@/components/gallery/gallery";

interface PortfolioItemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PortfolioItemPage = async ({ params }: PortfolioItemPageProps) => {
  const { slug } = await params;

  const project = getMarkup("content/projects", `${slug}.md`);

  if (!project) {
    notFound();
  }

  const data = project.data as ProjectData;
  return (
    <section className="py-24 bg-[rgb(243,239,233)]">
      <header>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div></div>
      </header>
      <main>
        <Gallery images={data.images} />
      </main>
    </section>
  );
};

export default PortfolioItemPage;
