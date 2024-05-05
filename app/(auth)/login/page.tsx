"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ZodError } from "zod";
import { toast } from "sonner";

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
import { trpc } from "@/lib/trpc-client";
import { LoginFormValidator, loginFormSchema } from "@/lib/auth-schema";

export default function Login() {
  const form = useForm<LoginFormValidator>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { mutate: login, isPending } = trpc.auth.login.useMutation({
    onError: function onLoginFailed(error) {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.error("邮箱或密码错误");
        return;
      }

      if (error instanceof ZodError) {
        toast.error(error.issues[0].message);
        return;
      }

      toast.error("出现了未知问题，请再试一次。");
    },
    onSuccess: function onLoginSucess() {
      toast.success("登录成功");
      router.push("/");
      router.refresh();
    },
  });

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
    login(values);
  }
}
