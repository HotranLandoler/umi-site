"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useTransition } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import RightArrow from "@/components/icons/right-arrow";
import { LoginFormValidator, loginFormSchema } from "@/lib/schemas/auth-schema";
import { login } from "@/server/actions/auth-actions";

export default function Login() {
  const form = useForm<LoginFormValidator>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className="mb-4 text-center text-3xl">登录UMi社区</h1>
      <Form {...form}>
        <form className="mb-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending && <LoaderCircle className="animate-spin" />}
            登录
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <Link
          className={cn(
            "group/button mx-auto",
            buttonVariants({ variant: "link" }),
          )}
          href="/signup">
          还没有UMi账户？去注册
          <RightArrow />
        </Link>
      </div>
    </>
  );

  async function onSubmit(values: LoginFormValidator) {
    startTransition(() => {
      login(values).then(function onLogin(result) {
        if (result && !result.success) {
          toast.error(result.error);
          return;
        }
        toast.success("登录成功");
      });
    });
  }
}
