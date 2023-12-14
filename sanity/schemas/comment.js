export default {
  name: "comments",
  title: "Comments",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "parentId",
      title: "Parent Id",
      type: "string",
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    },
  ],
};
