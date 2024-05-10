"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { umiDbSections } from "@/data/site-data";
import { PostFormValidator, postSchema } from "@/lib/schemas/post-schema";
import { createPost } from "@/server/actions/post-actions";

export default function CreatePost() {
  const form = useForm<PostFormValidator>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      category: umiDbSections[0].key,
      content: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className="mb-4 text-center text-3xl">发表分享</h1>
      <Form {...form}>
        <form className="mb-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>标题</FormLabel>
                <FormControl>
                  <Input
                    className={cn({
                      "ring-red-500": form.formState.errors.title,
                    })}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormLabel>类别</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="类别" />
                    </SelectTrigger>
                    <SelectContent>
                      {umiDbSections.map((section) => (
                        <SelectItem key={section.key} value={section.key}>
                          {section.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormLabel>正文</FormLabel>
                <FormControl>
                  <Input
                    className={cn({
                      "ring-red-500": form.formState.errors.content,
                    })}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending && <LoaderCircle className="animate-spin" />}
            发布
          </Button>
        </form>
      </Form>
    </>
  );

  async function onSubmit(values: PostFormValidator) {
    startTransition(() => {
      createPost(values).then(function onPostCreated(result) {
        if (result && !result.success) {
          toast.error(result.error);
        }
      });
    });
  }
}
