import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { v4 as uuidv4 } from "uuid";
import { ArrowRight } from "lucide-react";
import { getAllProjectsByReleased } from "@/lib/action.api";

import ProjectCard from "./ProjectCard";
import Empty from "./Empty";

// import { PROJECT_LIST } from "@/utils/projects";
import { ProjectType } from "@/types";

const ProjectShowcase = async () => {
  const NUMBER_PER_PAGE = 5;
  const data = await getAllProjectsByReleased("desc");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Recent <p className="text-primary-blue">Projects</p>
        </h1>
        <Link href="/project">
          <p className="flex items-center gap-2 text-sm font-bold hover:underline">
            View all Projects <ArrowRight size={18} />
          </p>
        </Link>
      </div>
      {!data ? (
        <div className="my-10">
          <Empty />
        </div>
      ) : (
        <Carousel className="mx-auto mt-6 w-[80%] lg:w-[100%]">
          <CarouselContent>
            {data?.slice(0, NUMBER_PER_PAGE)?.map((project: ProjectType) => {
              return (
                <CarouselItem
                  key={uuidv4()}
                  className="pb-3 md:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
};

export default ProjectShowcase;
