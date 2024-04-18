"use client";

import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

interface PropType {
  userId: any;
}

const AuthControl = (props: PropType) => {
  const { userId } = props;

  return (
    <div className="flex items-center gap-3">
      {!userId ? (
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default AuthControl;
