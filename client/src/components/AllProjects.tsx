"use client";

import { useEffect, useState } from "react";
import { CirclePlus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import { arrayRange } from "@/helpers";
import useSize from "@/hooks/useSize";
import { useCategoryStore, useSearchStore } from "@/lib/store";
import { checkRoleClient } from "@/lib/api";
import { ProjectType } from "@/types";

import ProjectCard from "./ProjectCard";

interface PropType {
  projects: ProjectType[];
}

const AllProjects = (props: PropType) => {
  const { projects } = props;

  const ITEMS_PER_PAGE = 9;
  const MOBILE_ITEMS_PER_PAGE = 3;

  const windowsize = useSize();
  const category: string = useCategoryStore((state) => state.category);
  const searchValue: string = useSearchStore((state) => state.searchValue);
  const searchType: string = useSearchStore((state) => state.type);

  const [projectSrc, setProjectSrc] = useState<ProjectType[]>(
    projects ? projects : []
  );
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [pagination, setPagination] = useState<number[]>([]);
  const [avtivePag, setActivePag] = useState<number>(1);
  const [projectsPerPage, setProjectsPerPage] = useState<ProjectType[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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

  const handleCheckRole = async () => {
    const isAdmin = await checkRoleClient("admin");
    setIsAdmin(isAdmin);
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

  useEffect(() => {
    if (searchValue === "all" && searchType === "project") {
      setProjectSrc(projects);
    } else if (searchValue !== "" && searchType === "project") {
      const filterProject = projects?.filter((project) => {
        return project?.name
          ?.toLocaleLowerCase()
          ?.includes(searchValue?.toLocaleLowerCase());
      });

      setProjectSrc(filterProject);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    handleCheckRole();
  }, []);

  return (
    <div className="mt-10">
      {isAdmin && (
        <div className="my-10 flex items-center justify-between">
          <div></div>
          <div>
            <Link href="/create/project">
              <Button>
                <CirclePlus className="mr-2 h-4 w-4" /> Create new project
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className="grid grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projectsPerPage?.map((project: ProjectType) => {
          return <ProjectCard key={uuidv4()} project={project} />;
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
