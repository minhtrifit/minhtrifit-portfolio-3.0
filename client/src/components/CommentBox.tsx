"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { getCurrentTime } from "@/helpers";

import { CommentType, UserType } from "@/types";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Proptype {
  comments: CommentType[];
  setComments: Dispatch<SetStateAction<CommentType[]>>;
}

const CommentBox = (props: Proptype) => {
  const { comments, setComments } = props;

  const { user } = useUser();

  const [value, setValue] = useState<string>("");

  const handleSendComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to comment!");
      return;
    }

    if (value && user && user?.fullName) {
      const userData: UserType = {
        id: user?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName,
        avatar: user?.imageUrl
          ? user?.imageUrl
          : "https://github.com/shadcn.png",
      };

      const newComment: CommentType = {
        user: userData,
        title: value,
        timestamp: getCurrentTime(),
      };

      setComments([...comments, newComment]);
    }
    setValue("");
  };

  return (
    <form
      className="my-10 flex flex-wrap gap-5"
      onSubmit={(e) => {
        handleSendComment(e);
      }}
    >
      <h1 className="dark:text-primary-blue font-bold">PROJECT COMMENT</h1>
      <Textarea
        placeholder="Type your comment here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="w-full flex justify-end">
        <Button>Send</Button>
      </div>
    </form>
  );
};

export default CommentBox;
