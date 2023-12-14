import TweetCart from "@/components/TweetCart";
import { createUser } from "@/lib/actions";
import { fetchComments, fetchTweet } from "@/sanity/actions";
import { currentUser } from "@clerk/nextjs";

export const revalidate = 0;

const page = async () => {
  await createUser();
  const tweets = await fetchTweet();
  const user = await currentUser();
  const comment = await fetchComments();

  // const text = comment;
  // console.log(comment);

  {
    comment.map((com) => console.log(com.comments));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        {tweets?.length == 0 ? (
          <>
            <h2>no tweets yet</h2>
          </>
        ) : (
          tweets?.map((tweet) => (
            <TweetCart
              key={tweet._id}
              tweet={tweet.tweet}
              tweetId={tweet._id}
              imageUrl={tweet?.imageUrl}
              currentUser={user?.id}
              createdBy={tweet?.createdBy}
              userName={tweet?.author?.userName}
              userImageUrl={tweet?.author?.imageUrl}
              createdAt={tweet?.author?.createdAt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default page;
