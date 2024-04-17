"use client";

import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { v4 as uuidv4 } from "uuid";
import { arrayRange } from "@/helpers";

import useSize from "@/hooks/useSize";
import { useCategoryStore } from "@/lib/store";

import ProjectCard from "./ProjectCard";

import { ProjectType } from "@/types";

interface PropType {
  projects: ProjectType[];
}

const AllProjects = (props: PropType) => {
  const { projects } = props;

  const ITEMS_PER_PAGE = 9;
  const MOBILE_ITEMS_PER_PAGE = 3;

  const windowsize = useSize();
  const category: string = useCategoryStore((state) => state.category);

  const [projectSrc, setProjectSrc] = useState<ProjectType[]>(
    projects ? projects : []
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [pagination, setPagination] = useState<number[]>([]);
  const [avtivePag, setActivePag] = useState<number>(1);
  const [projectsPerPage, setProjectsPerPage] = useState<ProjectType[]>([]);

  const handleCountPages = () => {
    const pageCount = Math.ceil(projectSrc?.length / itemsPerPage);
    // console.log("PAGE COUNT:", pageCount);
    setPagination(arrayRange(1, pageCount, 1));
  };

  const handleGetProjectsPerPage = (n: number) => {
    const begin = (n - 1) * itemsPerPage;
    const end = (n - 1) * itemsPerPage + itemsPerPage;

    const items = projectSrc?.slice(begin, end);
    setProjectsPerPage(items);
  };

  useEffect(() => {
    handleCountPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectSrc, itemsPerPage]);

  useEffect(() => {
    handleGetProjectsPerPage(avtivePag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectSrc, avtivePag, itemsPerPage]);

  useEffect(() => {
    if (windowsize[0] <= 640) setItemsPerPage(MOBILE_ITEMS_PER_PAGE);
    else setItemsPerPage(ITEMS_PER_PAGE);
  }, [windowsize]);

  useEffect(() => {
    if (category === "") {
      setProjectSrc(projects);
    } else {
      const filterProject = projects?.filter((project) => {
        const cateLow = project?.categories?.map((item) => item.toLowerCase());
        return cateLow?.includes(category);
      });

      setProjectSrc(filterProject);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3">
        {projectsPerPage?.map((project: ProjectType) => {
          return (
            <div key={uuidv4()} className="pb-3 w-[100%] sm:w-[300px]">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
      <Pagination>
        <PaginationContent>
          {pagination?.map((item: number) => {
            return (
              <PaginationItem
                className="mt-10 hover:cursor-pointer"
                key={uuidv4()}
                onClick={() => {
                  setActivePag(item);
                }}
              >
                <PaginationLink isActive={avtivePag === item ? true : false}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AllProjects;
