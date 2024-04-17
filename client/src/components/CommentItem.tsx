import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CommentType } from "@/types";

interface PropType {
  comment: CommentType;
}

const CommentItem = (props: PropType) => {
  const { comment } = props;

  console.log(comment);

  return (
    <div className="w-full flex gap-5 py-5 border-[1px] border-x-0 border-b-0 border-t-gray-200 dark:border-t-gray-600">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{comment?.user?.username?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{comment?.user?.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {comment?.timestamp}
          </p>
        </div>
        <p className="text-sm">{comment?.title}</p>
      </div>
    </div>
  );
};

export default CommentItem;
