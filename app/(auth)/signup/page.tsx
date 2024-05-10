"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  signUpFormSchema,
  type SignUpFormValidator,
} from "@/lib/schemas/auth-schema";
import { cn } from "@/lib/utils";
import Link from "next/link";
import RightArrow from "@/components/icons/right-arrow";
import { ZodError } from "zod";
import { toast } from "sonner";
import { signUp } from "@/server/actions/auth-actions";

export default function SignUp() {
  const form = useForm<SignUpFormValidator>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className="mb-4 text-center text-3xl">加入UMi社区</h1>
      <Form {...form}>
        <form className="mb-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500":
                        form.formState.errors.username,
                    })}
                    {...field}
                  />
                </FormControl>
                <FormDescription>您发表内容时将使用的名字</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>邮箱</FormLabel>
                <FormControl>
                  <Input
                    className={cn({
                      "ring-red-500": form.formState.errors.email,
                    })}
                    type="email"
                    placeholder="xxx@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>用于登录，不会对外显示</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input
                    className={cn({
                      "ring-red-500": form.formState.errors.password,
                    })}
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>至少8位</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending && <LoaderCircle className="animate-spin" />}
            注册
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <Link
          className={cn(
            "group/button mx-auto",
            buttonVariants({ variant: "link" }),
          )}
          href="/login">
          已有账号？去登录
          <RightArrow />
        </Link>
      </div>
    </>
  );

  async function onSubmit(values: SignUpFormValidator) {
    startTransition(() => {
      signUp(values).then(function onSignUp(result) {
        if (!result.success) {
          toast.error(result.error);
          return;
        }
        toast.success("注册成功");
      });
    });
  }
}
