import { Inbox } from "lucide-react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-semibold">No data</p>
      <Inbox size={70} />
    </div>
  );
};

export default Empty;
