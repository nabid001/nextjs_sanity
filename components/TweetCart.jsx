"use client";

import { deleteTweet } from "@/sanity/actions";
import Image from "next/image";

import { usePathname } from "next/navigation";

const TweetCart = ({ tweet, tweetId, imageUrl }) => {
  const path = usePathname();

  const handleDelete = (tweetId) => {
    deleteTweet({ tweetId, path });
  };

  return (
    <div key={tweetId} className="mt-4">
      <div className="flex items-center py-2 border-b border-gray-300">
        <span className="flex-1">{tweet}</span>
        {imageUrl && (
          <Image
            src={imageUrl && imageUrl}
            width={300}
            height={300}
            className="origin-center"
          />
        )}
        <button
          onClick={() => handleDelete(tweetId)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TweetCart;
