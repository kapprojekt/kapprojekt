import React from "react";

const ProjectInfoTile = ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="rounded-md text-stone-600 flex gap-2
	 py-2 sm:py-3 justify-center items-center"
    >
      {children}
    </div>
  );
};

export default ProjectInfoTile;
