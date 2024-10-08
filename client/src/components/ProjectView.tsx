import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Github, Youtube, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Empty from "./Empty";

import { ProjectType } from "@/types";

interface PropType {
  project: ProjectType;
}

const ProjectView = (props: PropType) => {
  const { project } = props;

  return (
    <>
      {!project ? (
        <Empty />
      ) : (
        <div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold dark:text-sky-500">
              {project?.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project?.description}
            </p>
            <div className="flex gap-2 items-center">
              <p>Release date:</p>
              <p>{project?.released}</p>
            </div>
            <p className="mt-3 text-xl font-bold flex items-center">
              <WalletCards className="mr-2 w-6 h-6" />
              Open source
            </p>
          </div>
          <div className="my-5 w-[100%] h-[1px] bg-zinc-300 dark:bg-primary-blue"></div>
          <div className="flex flex-col gap-10">
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
              <ul
                style={{ listStyleType: "disc" }}
                className="flex flex-col gap-2"
              >
                {project?.features?.map((feature: string) => {
                  return (
                    <li key={uuidv4()} className="ml-4">
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={project?.github ? project?.github : ""}
                target="_blank"
              >
                <Button>
                  <Github className="mr-2 h-4 w-4" /> Source code
                </Button>
              </Link>
              <Link href={project?.demo ? project?.demo : ""} target="_blank">
                <Button variant="destructive">
                  <Youtube className="mr-2 h-4 w-4" /> Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectView;
