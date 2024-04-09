import { Suspense } from "react";
import { getAllProjects } from "@/lib/action.api";

import AllProjects from "@/components/AllProjects";
import Loading from "@/components/Loading";

// import { PROJECT_LIST } from "@/utils/projects";

const page = async () => {
  const data = await getAllProjects();

  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center">All Projects</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-200 text-center">
        minhtrifit open source project list.
      </p>
      <Suspense fallback={<Loading />}>
        <AllProjects projects={data} />
      </Suspense>
    </div>
  );
};

export default page;
