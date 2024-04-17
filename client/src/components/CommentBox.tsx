"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
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

  const [value, setValue] = useState<string>("");

  const handleSendComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      const MockUserData: UserType = {
        name: "minhtrifit",
        username: "minhtrifit-admin",
      };

      const newComment: CommentType = {
        user: MockUserData,
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
