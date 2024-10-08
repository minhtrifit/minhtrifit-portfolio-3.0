"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { v4 as uuidv4 } from "uuid";

import { TECHNICALS } from "@/constants/technical";

const PoweredSlider = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h1 className="text-center text-xl font-black dark:text-sky-500">
        POWERED BY
      </h1>
      <Marquee
        className="mt-10"
        speed={30}
        autoFill={true}
        gradient={true}
        gradientColor={theme === "light" ? "white" : "#0f172a"}
        gradientWidth={150}
      >
        {TECHNICALS?.map(
          (item: { name: string; logo: string; url: string }) => {
            return (
              <Link key={uuidv4()} href={item.url} target="_blank">
                <div className="w-[60px] mx-8">
                  <Image
                    alt="logo"
                    src={item.logo}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            );
          }
        )}
      </Marquee>
    </div>
  );
};

export default PoweredSlider;
