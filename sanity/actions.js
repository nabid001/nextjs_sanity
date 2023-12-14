"use server";

import { revalidatePath } from "next/cache";

const { groq } = require("next-sanity");
const { client } = require("./lib/client");
import { v4 as uuidv4 } from "uuid";

export const fetchTweet = async () => {
  try {
    const response = await client.fetch(
      groq`*[_type == "tweet"]{
        _id,
        tweet,
        imageUrl,
        createdBy,
          author-> {
            userName,
            firstName,
            _id,
            
            imageUrl,
            email,
            _createdAt
          },
      }
`
    );

    return response;
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

export const createTweet = async ({ tweet, imageUrl, path, userId }) => {
  try {
    const newTweet = await client.create({
      _type: "tweet",
      tweet,
      imageUrl,
      createdBy: userId,
      author: { _type: "user", _ref: `${userId}` },
    });

    // const tweetId = newTweet._id;

    // await client
    //   .patch(userId)
    //   .setIfMissing({ tweets: [] })
    //   .append("tweets", [
    //     {
    //       _ref: tweetId,
    //       _key: `unique_key_${Date.now()}`,
    //     },
    //   ])
    //   .commit();

    revalidatePath(path);
  } catch (error) {
    if (error.message === "Error creating tweet:") {
      console.error("Error creating tweet:", error);
    } else {
      console.error("Error updating user with tweet reference:", error);
    }
  }
};

export const createComment = async ({ comment, userId, tweetId }) => {
  try {
    const newComment = await client.create({
      _type: "comments",
      text: comment,
      parentId: tweetId,
      user: {
        _type: "user",
        _ref: userId,
      },
    });

    const commentId = newComment._id;

    await client
      .patch(tweetId)
      .setIfMissing({ comments: [] })
      .append("comments", [
        {
          _ref: commentId,
          _key: uuidv4(),
        },
      ])
      .commit();

    console.log("comment create successful");
  } catch (error) {
    console.error("Error adding comment to tweet:", error);
  }
};

export const fetchComments = async () => {
  const comment = client.fetch(
    groq`*[_type == "tweet"]{
      comments[]->{
        text,
        parentId,
        _id,
        _rev,
        user->{
          userName,
          imageUrl,
        }
      }
    }`
  );

  return comment;
};
