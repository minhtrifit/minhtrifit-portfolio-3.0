import { getAllCategories } from "@/lib/action.api";
import CreateProjectForm from "@/components/CreateProjectForm";

const page = async () => {
  const categories: string[] = await getAllCategories();

  return (
    <div className="my-10">
      <h1 className="mb-5 font-black text-3xl text-center dark:text-sky-500">
        New Project
      </h1>
      <CreateProjectForm categoriesData={categories} />
    </div>
  );
};

export default page;
