"use client";

import { deleteTweet } from "@/sanity/actions";
import Image from "next/image";

import { usePathname } from "next/navigation";
import CommentCard from "./CommentCard";

const TweetCart = ({
  tweet,
  tweetId,
  imageUrl,
  currentUser,
  createdBy,
  userName,
  userImageUrl,
  createdAt,
}) => {
  const path = usePathname();

  const handleDelete = (tweetId) => {
    deleteTweet({ tweetId, path });
  };

  return (
    <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center">
          <Image
            width={25}
            height={25}
            className="h-10 w-10 rounded-full"
            src={userImageUrl}
            alt="User Avatar"
          />
          <div className="ml-3">
            <h2 className="font-semibold">{userName}</h2>
            <p className="text-xs text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
      {imageUrl && (
        <Image
          width={400}
          height={200}
          className="h-64 w-full object-cover object-center"
          src={imageUrl}
          alt="Card Image"
        />
      )}
      <div className="p-4">
        <p className="text-gray-800">{tweet}</p>
        <CommentCard userId={currentUser} tweetId={tweetId} />
      </div>
    </div>
  );
};

export default TweetCart;
