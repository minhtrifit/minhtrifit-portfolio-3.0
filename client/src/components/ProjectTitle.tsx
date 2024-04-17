"use client";

import { useCategoryStore } from "@/lib/store";
import { useEffect, useState } from "react";

const ProjectTitle = () => {
  const category: string = useCategoryStore((state) => state.category);

  const [title, setTitle] = useState<string>("All Projects");

  useEffect(() => {
    if (category === "") setTitle("All Projects");
    else
      setTitle(
        `${category.charAt(0).toUpperCase() + category.slice(1)} Projects`
      );
  }, [category]);

  return <h1 className="mt-10 text-3xl font-bold text-center">{title}</h1>;
};

export default ProjectTitle;
