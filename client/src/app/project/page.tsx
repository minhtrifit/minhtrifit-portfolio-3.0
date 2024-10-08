import { Suspense } from "react";
import { getAllCategories, getAllProjectsByReleased } from "@/lib/action.api";

import AllProjects from "@/components/AllProjects";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { CateComboBox } from "@/components/CateComboBox";
import ProjectTitle from "@/components/ProjectTitle";
import SearchBox from "@/components/SearchBox";

const page = async () => {
  const data = await getAllProjectsByReleased("desc");
  const categories = await getAllCategories();

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-5 items-center justify-between">
        <CateComboBox categories={categories} />
        <SearchBox searchType="project" />
      </div>
      <ProjectTitle />
      <p className="mt-3 text-gray-500 dark:text-gray-400 text-center">
        Workspace for showcasing my projects.
      </p>
      <Suspense fallback={<Loading />}>
        {!data ? (
          <div className="my-10">
            <Empty />
          </div>
        ) : (
          <AllProjects projects={data} />
        )}
      </Suspense>
    </div>
  );
};

export default page;
