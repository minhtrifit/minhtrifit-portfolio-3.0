/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import ImageView from "@/components/ImageView";

import { PROJECT_LIST } from "@/utils/projects";
import ProjectView from "@/components/ProjectView";
import { getProjectById } from "@/lib/action.api";
import { useEffect, useState } from "react";
import { ProjectType } from "@/types";

const page = () => {
  const params = useParams();

  const [project, setProject] = useState<ProjectType | null>(null);

  const handleGetProjectById = async (id: string | number) => {
    const data = await getProjectById(id);
    setProject(data);
  };

  useEffect(() => {
    if (params?.id && typeof params?.id === "string") {
      handleGetProjectById(params?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="w-[100%] mt-10 flex gap-5 flex-wrap justify-between">
        <div className="w-[100%] sm:w-[400px]">
          <ImageView images={project?.images ? project?.images : []} />
        </div>
        <div className="w-[100%] sm:w-[55%]">
          {project && <ProjectView project={project} />}
        </div>
      </div>
    </div>
  );
};

export default page;
