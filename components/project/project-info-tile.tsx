import React from "react";

const ProjectInfoTile = ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="rounded-md shadow-lg bg-stone-600 text-white flex gap-2
	px-3 sm:px-4 py-2 sm:py-3 justify-center items-center"
    >
      {children}
    </div>
  );
};

export default ProjectInfoTile;
