export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "userId",
      title: "User Id",
      type: "string",
    },

    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "imageUrl",
      title: "Image Url",
      type: "string",
    },
    // {
    //   name: "tweets",
    //   title: "Tweets",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "tweet" } }],
    // },
  ],
};
