import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";
import AuthControl from "./AuthControl";

const Header = async () => {
  const { userId } = auth();

  return (
    <div className="mx-auto max-w-screen-lg p-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex gap-3 items-center">
            <Image
              className="w-[60px] h-auto"
              src="/assets/logo.png"
              priority
              sizes="100vw"
              width="0"
              height="0"
              alt="nav-logo"
            />
            <p className="text-lg text-primary-blue font-bold">minhtrifit</p>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <AuthControl userId={userId} />
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
