"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useTransition } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

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
import TiptapEditor from "@/components/posts/tiptap-editor";

export default function CreatePost() {
  const form = useForm<PostFormValidator>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      category: umiDbSections[0].key,
    },
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "prose max-w-none w-full rounded-md border border-input bg-background p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  const [isPending, startTransition] = useTransition();

  return (
    <div className="main-container">
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

          <FormItem className="mb-8">
            <FormLabel>正文</FormLabel>
            <FormControl>
              <EditorContent editor={editor} />
            </FormControl>
          </FormItem>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending && <LoaderCircle className="animate-spin" />}
            发布
          </Button>
        </form>
      </Form>
    </div>
  );

  function onSubmit(values: PostFormValidator) {
    startTransition(() => handleCreatePost(values));
  }

  function handleCreatePost(values: PostFormValidator) {
    if (!editor) {
      toast.error("未知错误");
      return;
    }
    values.content = editor.getJSON();
    createPost(values).then(function onPostCreated(result) {
      if (result && !result.success) {
        toast.error(result.error);
      }
    });
  }
}
