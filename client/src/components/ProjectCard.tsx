import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectType } from "@/types";
import Link from "next/link";

import "./css/card.css";

interface PropType {
  project: ProjectType;
}

const ProjectCard = (props: PropType) => {
  const { project } = props;

  return (
    <Card className="hover:translate-y-1">
      <Link href={`/project/${project?.id}`}>
        <Image
          className="w-[100%] h-auto rounded-t-md"
          src={project?.images ? project?.images[0] : ""}
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </Link>
      <CardContent className="mt-5 flex flex-col gap-3">
        <h1 className="dark:text-primary-blue text-xl font-bold text-center truncate">
          {project?.name}
        </h1>
        <p className="text-sm text-gray-500 text-center truncate">
          {project?.released}
        </p>
        <span className={`card-description text-sm`}>
          {project?.description}
        </span>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
