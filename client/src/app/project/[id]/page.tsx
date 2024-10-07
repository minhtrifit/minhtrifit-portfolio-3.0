/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";

import { CommentType, ProjectType } from "@/types";

import {
  deleteProjectById,
  getAllCommentsByProjectId,
  getProjectById,
} from "@/lib/action.api";
import { checkRoleClient } from "@/lib/api";

import ImageView from "@/components/ImageView";
import ProjectView from "@/components/ProjectView";
import Empty from "@/components/Empty";
import CommentBox from "@/components/CommentBox";
import CommentItem from "@/components/CommentItem";
import { Button } from "@/components/ui/button";

const page = () => {
  const params = useParams();
  const router = useRouter();

  const [project, setProject] = useState<ProjectType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleGetProjectById = async (id: string | number) => {
    const data = await getProjectById(id);
    setProject(data);
  };

  const handleGetAllCommentsByProjectId = async (id: string | number) => {
    const data = await getAllCommentsByProjectId(id);
    setComments(data);
  };

  const handleCheckRole = async () => {
    const isAdmin = await checkRoleClient("admin");
    setIsAdmin(isAdmin);
  };

  const handleDeleteProject = async () => {
    if (confirm("Confirm to delete this project?") == true && project?.id) {
      const res = await deleteProjectById(project?.id);
      const { message } = res;

      if (message === "Delete project successfully") toast.success(message);
      else toast.error("Delete project failed");

      router.push("/project");
    }
  };

  useEffect(() => {
    if (params?.id && typeof params?.id === "string") {
      handleGetProjectById(params?.id);
      handleGetAllCommentsByProjectId(params?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleCheckRole();
  }, []);

  return (
    <div>
      {isAdmin && (
        <div className="mt-10 flex items-center justify-end">
          <Button
            variant="destructive"
            onClick={() => {
              handleDeleteProject();
            }}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete project
          </Button>
        </div>
      )}
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
