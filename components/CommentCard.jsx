"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment, fetchComments } from "@/sanity/actions";

const FormSchema = z.object({
  comment: z.string().min(2, {
    comment: "Username must be at least 2 characters.",
  }),
});

const CommentCard = ({ userId, tweetId }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (values) => {
    const comment = values.comment;
    await createComment({ userId, comment, tweetId });

    form.reset();
  };

  return (
    <div className="mt-6">
      <h6 className="mb-2 text-lg font-semibold">Comments</h6>
      <div className="flex items-start border-t border-gray-200 pt-4">
        <img
          className="h-10 w-10 rounded-full"
          src="https://via.placeholder.com/40"
          alt="User Avatar"
        />
        <div className="ml-4 flex-1">
          <p className="text-gray-600">User 1: Wow, great card!</p>
        </div>
      </div>

      <div className="mt-4 flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Input placeholder="add comment" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Comment</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CommentCard;
