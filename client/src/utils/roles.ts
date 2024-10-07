import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs/server";

// https://clerk.com/docs/guides/basic-rbac

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth();
  return sessionClaims?.metadata.role === role;
};
