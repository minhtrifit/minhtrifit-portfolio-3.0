"use server";

import axios from "axios";

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
