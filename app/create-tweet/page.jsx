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

const FormSchema = z.object({
  tweet: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const page = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tweet: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values.tweet);
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default page;
