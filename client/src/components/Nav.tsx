"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Menu, Home, Github, Album } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    name: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    name: "Project",
    url: "/project",
    icon: <Github />,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: <Album />,
  },
];

const Nav = () => {
  const pathname = usePathname();

  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    if (pathname === "/") setActive("Home");
    else {
      const paths = pathname.split("/");
      for (let i = 0; i < paths?.length; ++i) {
        for (let j = 0; j < NAV_ITEMS?.length; ++j) {
          if (
            paths[i].toLocaleLowerCase() ===
            NAV_ITEMS[j].name.toLocaleLowerCase()
          )
            setActive(NAV_ITEMS[j].name);
        }
      }
    }
  }, [pathname]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center">
          <Image
            className="w-[150px] h-auto"
            src="/assets/logo.png"
            priority
            sizes="100vw"
            width="0"
            height="0"
            alt="nav-logo"
          />
        </SheetHeader>
        <div className="mt-5">
          <div>
            {NAV_ITEMS?.map((item: any) => {
              return (
                <Link
                  key={uuidv4()}
                  href={item?.url}
                  onClick={() => {
                    setActive(item?.name);
                  }}
                >
                  <div
                    className={`flex items-center gap-3 px-2 py-4 rounded-md
                    hover:bg-primary-blue hover:text-white ${
                      active === item?.name && "text-primary-blue font-bold"
                    }`}
                  >
                    {item?.icon}
                    <p className="ml-5">{item?.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Nav;
