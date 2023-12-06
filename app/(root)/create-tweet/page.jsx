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
import { toast } from "@/components/ui/use-toast";
import { usePathname, useRouter } from "next/navigation";
import { createTweet } from "@/sanity/actions";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

const FormSchema = z.object({
  tweet: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const page = () => {
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();
  const path = "/";

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tweet: "",
    },
  });

  const onSubmit = async (values) => {
    const { tweet } = values;
    try {
      await createTweet({ tweet, imageUrl, path });

      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-screen flex justify-center items-center flex-col"
      >
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>tweet</FormLabel>
              <FormControl>
                <Input placeholder="add tweet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CldUploadButton
          uploadPreset="bypgkwoi"
          onUpload={(result, widget) => {
            setImageUrl(result?.info.url);
          }}
        />
        <Button className="mt-3" type="submit">
          tweet
        </Button>
      </form>
    </Form>
  );
};

export default page;
