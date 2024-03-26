import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Calendar, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ProjectType } from "@/types";

interface PropType {
  project: ProjectType;
}

const ProjectView = (props: PropType) => {
  const { project } = props;

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">{project?.name}</h1>
        <p className="text-sm text-gray-500">{project?.description}</p>
        <div className="flex gap-2 items-center">
          <Calendar />
          <p>{project?.released}</p>
        </div>
        <p className="text-md text-red-500 font-bold">Open source project</p>
      </div>
      <div className="my-5 w-[100%] h-[1px] bg-zinc-300 dark:bg-primary-blue"></div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Technical Stack</h1>
          <div className="flex flex-wrap gap-5 items-center">
            {project?.technicals?.map((tech) => {
              return (
                <Link key={uuidv4()} href={tech?.url} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          className="w-[60px] h-auto hover:translate-y-1"
                          src={tech?.logo}
                          priority
                          sizes="100vw"
                          width="0"
                          height="0"
                          alt="nav-logo"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech?.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Features 📦</h1>
          <ul style={{ listStyleType: "disc" }} className="flex flex-col gap-2">
            {project?.features?.map((feature: string) => {
              return (
                <li key={uuidv4()} className="ml-4">
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5">
          <Link href={project?.github ? project?.github : ""} target="_blank">
            <Button>
              <Github className="mr-2 h-4 w-4" /> Source code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
