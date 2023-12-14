import { client } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs";

export const createUser = async () => {
  const user = await currentUser();

  const email = user.emailAddresses[0].emailAddress;
  const { id, firstName, lastName, username: userName, imageUrl } = user;

  await client.createIfNotExists({
    _type: "user",
    userId: id,
    _id: id,
    userName,
    firstName,
    lastName,
    email,
    imageUrl,
  });
};
