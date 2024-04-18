"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

const Direction = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [directItems, setDirectItems] = useState<any>([]);

  const handleGetItemUrl = (paths: string[], index: number) => {
    let url = "";

    for (let i = 0; i < paths?.length; ++i)
      if (i > 0 && i <= index) url += `/${paths[i]}`;

    return url;
  };

  useEffect(() => {
    const paths = pathname.split("/");
    const items = [];

    for (let i = 0; i < paths?.length; ++i) {
      const item = {
        name:
          paths[i] === ""
            ? "Home"
            : paths[i].charAt(0).toUpperCase() + paths[i].slice(1),
        url: i === 0 ? "/" : handleGetItemUrl(paths, i),
      };

      items.push(item);
    }

    setDirectItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          {directItems?.map(
            (item: { name: string; url: string }, index: number) => {
              if (index === directItems?.length - 1) {
                return (
                  <BreadcrumbItem key={uuidv4()}>
                    <BreadcrumbLink href={item?.url}>
                      {item?.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              } else {
                return (
                  <div key={uuidv4()} className="flex items-center gap-2">
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item?.url}>
                        {item?.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </div>
                );
              }
            }
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          <Undo2 className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>
    </div>
  );
};

export default Direction;
