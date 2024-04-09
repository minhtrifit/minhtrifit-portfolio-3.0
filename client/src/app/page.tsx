/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import ProjectShowcase from "@/components/ProjectShowcase";

const Home = async () => {
  return (
    <div className="mx-auto max-w-screen-lg p-6">
      <section className="flex gap-5 flex-wrap items-center justify-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            Hi there, I'm
            <span className="text-primary-blue">minhtrifit</span> 👋
          </h1>
          <p className="mt-6 text-xl leading-9 text-justify">
            I'm a software engineer.
          </p>
          <div className="mt-6 flex gap-2 items-center">
            <Link href="https://facebook.com/minhtrifit" target="_blank">
              <Image
                className="w-12 h-auto hover:translate-y-1"
                src="/social-media/facebook.png"
                priority
                sizes="100vw"
                width="0"
                height="0"
                alt="nav-logo"
              />
            </Link>
            <Link href="https://youtube.com/@minhtrifit" target="_blank">
              <Image
                className="w-12 h-auto hover:translate-y-1"
                src="/social-media/youtube.png"
                priority
                sizes="100vw"
                width="0"
                height="0"
                alt="nav-logo"
              />
            </Link>
            <Link
              href="https://linkedin.com/in/lê-minh-trí-89ab94215/"
              target="_blank"
            >
              <Image
                className="w-12 h-auto hover:translate-y-1"
                src="/social-media/linkedin.png"
                priority
                sizes="100vw"
                width="0"
                height="0"
                alt="nav-logo"
              />
            </Link>
          </div>
        </div>
        <Image
          className="w-[300px] h-auto"
          src="/assets/logo.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </section>
      <section className="mt-10">
        <ProjectShowcase />
      </section>
    </div>
  );
};

export default Home;
