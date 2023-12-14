import CreateTweet from "@/components/forms/CreateTweet";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const page = async () => {
  const user = await currentUser();
  const userId = user?.id;

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <CreateTweet userId={userId} />
    </div>
  );
};

export default page;
