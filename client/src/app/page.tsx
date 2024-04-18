/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import ProjectShowcase from "@/components/ProjectShowcase";
import SocialMedia from "@/components/SocialMedia";

const Home = async () => {
  return (
    <div className="mx-auto max-w-screen-lg p-6">
      <section className="flex gap-5 flex-wrap items-center justify-center md:justify-between">
        <div>
          <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold">
            Hi there, I'm
            <span className="text-primary-blue">minhtrifit</span> 👋
          </h1>
          <p className="mt-6 text-xl leading-9 text-justify">
            I'm a software engineer.
          </p>
          <div className="mt-6">
            <SocialMedia />
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
