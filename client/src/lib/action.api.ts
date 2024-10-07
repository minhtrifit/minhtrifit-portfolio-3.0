"use server";

import { revalidatePath } from "next/cache";
import axios from "axios";
import { CommentType, ProjectType } from "@/types";

export const getAllProjects = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/project/all`
    );
    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const getAllProjectsByReleased = async (by: "asc" | "desc") => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/project/all/${by}`
    );
    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const getProjectById = async (id: number | string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/project/single/${id}`
    );
    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const getAllCategories = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/project/categories`
    );
    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const getAllCommentsByProjectId = async (id: number | string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/project/comments/${id}`
    );
    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const createNewComment = async (comment: CommentType) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/project/comment/create`,
      comment
    );

    return res.data;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const createNewProject = async (project: ProjectType) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/project/create`,
      project
    );

    revalidatePath("/project");

    return { message: "Create project successfully", data: res.data };
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};

export const deleteProjectById = async (id: string | number) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/project/delete/${id}`
    );

    revalidatePath("/project");

    return { message: "Delete project successfully", data: res.data };
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};
