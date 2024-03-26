/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();

  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center">
        Detail project page {params?.id}
      </h1>
    </div>
  );
};

export default page;
