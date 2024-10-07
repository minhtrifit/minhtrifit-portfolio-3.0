import { Roles } from "@/types/globals";

export const checkRoleClient = async (role: Roles) => {
  try {
    const response = await fetch("/api/auth");
    const auth = await response.json();

    return auth?.sessionClaims.metadata.role === role;
  } catch (error: any) {
    console.log("API CALL ERROR:", error?.response?.data);
    return error?.response?.data;
  }
};
