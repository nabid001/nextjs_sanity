import TweetCart from "@/components/TweetCart";
import { fetchTweet } from "@/sanity/actions";

export const revalidate = 0;

const page = async () => {
  const tweets = await fetchTweet();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">ToDo List</h1>

        {tweets?.length == 0 ? (
          <>
            <h2>no tweets yet</h2>
          </>
        ) : (
          tweets.map((tweet) => (
            <TweetCart
              tweet={tweet.tweet}
              tweetId={tweet._id}
              imageUrl={tweet?.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default page;
