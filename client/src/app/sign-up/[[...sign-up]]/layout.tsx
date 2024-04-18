import type { Metadata } from "next";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia";

export const metadata: Metadata = {
  title: "minhtrifit | Sign up",
  description: "Generated by minhtrifit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6 flex gap-5 flex-wrap-reverse items-center justify-center sm:justify-between">
      {children}
      <div className="flex flex-col items-center gap-3">
        <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold">
          Join <p className="text-primary-blue">minhtrifit</p> Gangs 🐱‍👤
        </h1>
        <SocialMedia />
        <Image
          className="w-[350px] h-auto"
          src="/assets/logo.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </div>
    </div>
  );
}
