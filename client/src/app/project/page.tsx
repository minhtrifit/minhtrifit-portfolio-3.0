import AllProjects from "@/components/AllProjects";

import { PROJECT_LIST } from "@/utils/projects";

const page = () => {
  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center">All Projects</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-200 text-center">
        minhtrifit open source project list.
      </p>
      <AllProjects projects={PROJECT_LIST} />
    </div>
  );
};

export default page;
