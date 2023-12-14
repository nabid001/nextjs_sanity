export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "tweet",
      title: "Tweet",
      type: "string",
    },
    {
      name: "imageUrl",
      title: "ImageUrl",
      type: "string",
    },
    {
      name: "createdBy",
      title: "Created By",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }],
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "reference", to: { type: "comments" } }],
    },
  ],
};

// Nested comments
// {
//   name: "nestedComments",
//   title: "Nested Comments",
//   type: "array",
//   of: [
//     {
//       type: "object",
//       fields: [
//         { name: "text", title: "Text", type: "text" },
//         {
//           name: "user",
//           title: "User",
//           type: "reference",
//           to: [{ type: "user" }],
//         },
//       ],
//     },
//   ],
// },
