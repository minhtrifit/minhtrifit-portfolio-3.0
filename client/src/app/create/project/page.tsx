import { getAllCategories } from "@/lib/action.api";
import CreateProjectForm from "@/components/CreateProjectForm";
import { PackagePlus } from "lucide-react";

const page = async () => {
  const categories: string[] = await getAllCategories();

  return (
    <div className="my-10">
      <h1 className="mb-5 font-black text-2xl dark:text-sky-500 flex items-center justify-center">
        <PackagePlus className="mr-3 h-8 w-8" />
        New Project
      </h1>
      <CreateProjectForm categoriesData={categories} />
    </div>
  );
};

export default page;
