import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";

interface PropType {
  children: React.ReactElement;
}

const RoleProvider = (props: PropType) => {
  const { children } = props;

  const isAdmin = checkRole("admin");

  if (!isAdmin) redirect("/");

  return <>{children}</>;
};

export default RoleProvider;
