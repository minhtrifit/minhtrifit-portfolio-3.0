import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";

const Header = () => {
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
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
