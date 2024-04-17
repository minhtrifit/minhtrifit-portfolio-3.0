/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { CommentType, ProjectType } from "@/types";

import { getProjectById } from "@/lib/action.api";

import ImageView from "@/components/ImageView";
import ProjectView from "@/components/ProjectView";
import Empty from "@/components/Empty";
import CommentBox from "@/components/CommentBox";
import CommentItem from "@/components/CommentItem";

const page = () => {
  const params = useParams();

  const [project, setProject] = useState<ProjectType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);

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
      <CommentBox comments={comments} setComments={setComments} />
      {comments?.length === 0 && <Empty />}
      <div className="flex flex-col gap-10">
        {comments?.length !== 0 &&
          comments?.map((comment) => {
            return <CommentItem key={uuidv4()} comment={comment} />;
          })}
      </div>
    </div>
  );
};

export default page;
