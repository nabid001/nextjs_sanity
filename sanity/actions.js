"use server";

import { revalidatePath } from "next/cache";

const { groq } = require("next-sanity");
const { client } = require("./lib/client");

export const fetchTweet = async () => {
  try {
    const response = await client.fetch(
      groq`*[_type == "tweet"]{
        _id,
        tweet,
        imageUrl
      }`
    );

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const createTweet = async ({ tweet, imageUrl, path }) => {
  try {
    await client.create({
      _type: "tweet",
      tweet,
      imageUrl,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTweet = async ({ tweetId, path }) => {
  try {
    await client.delete(tweetId);

    revalidatePath(path);
  } catch (error) {
    console.log(error.message);
  }
};
