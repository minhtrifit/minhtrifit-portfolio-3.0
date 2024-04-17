import { Suspense } from "react";
import { getAllCategories, getAllProjects } from "@/lib/action.api";

import AllProjects from "@/components/AllProjects";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { CateComboBox } from "@/components/CateComboBox";

const page = async () => {
  const data = await getAllProjects();
  const categories = await getAllCategories();

  return (
    <div>
      <div className="mt-5">
        <CateComboBox categories={categories} />
      </div>
      <h1 className="mt-10 text-3xl font-bold text-center">All Projects</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-200 text-center">
        minhtrifit open source project list.
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
