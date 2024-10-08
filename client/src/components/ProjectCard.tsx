import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectType } from "@/types";
import Link from "next/link";
import { Calendar as CalendarIcon, Github, WalletCards } from "lucide-react";

import "./css/card.css";

interface PropType {
  project: ProjectType;
}

const ProjectCard = (props: PropType) => {
  const { project } = props;

  return (
    <Card className="group hover:translate-y-1">
      <Link href={`/project/${project?.id}`}>
        <Image
          className="w-[100%] h-auto object-cover rounded-t-md"
          src={
            project?.images && project?.images[0]
              ? project?.images[0]
              : "/assets/no-image.png"
          }
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="project-logo"
        />
      </Link>
      <CardContent className="pt-5 flex flex-col gap-3 hover:cursor-default">
        <Link href={`/project/${project?.id}`}>
          <h1
            className="dark:text-primary-blue text-xl font-bold text-center truncate
                      group-hover:text-sky-500 dark:group-hover:text-sky-300"
          >
            {project?.name}
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {project?.released}
          </p>
          {project?.github !== "" && (
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex">
              <Github className="mr-2 h-4 w-4" />
              Source
            </p>
          )}
        </div>
        <p className={`card-description mt-1 text-sm`}>
          {project?.description}
        </p>
        <div className="flex items-center justify-end">
          <div
            className="text-[0.7rem] text-white font-bold bg-black dark:bg-sky-600 p-2 rounded-md
                        flex items-center"
          >
            <WalletCards className="mr-2 w-4 h-4" />
            Open source
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
