/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import ImageView from "@/components/ImageView";

import { PROJECT_LIST } from "@/utils/projects";
import ProjectView from "@/components/ProjectView";

const page = () => {
  const params = useParams();

  const project = PROJECT_LIST.filter((project) => {
    return project.id === Number(params?.id);
  })[0];

  return (
    <div>
      <div className="w-[100%] mt-10 flex gap-5 flex-wrap justify-between">
        <div className="w-[100%] sm:w-[400px]">
          <ImageView images={project?.images ? project?.images : []} />
        </div>
        <div className="w-[100%] sm:w-[55%]">
          <ProjectView project={project} />
        </div>
      </div>
    </div>
  );
};

export default page;
