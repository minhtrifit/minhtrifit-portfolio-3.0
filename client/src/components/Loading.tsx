import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-[100%] mt-10 flex flex-col space-y-3">
      <Skeleton className="w-[100%] h-[125px] rounded-xl" />
      <div className="w-[100%] space-y-2">
        <Skeleton className="h-4 w-[100%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  );
};

export default Loading;
