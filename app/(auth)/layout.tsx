import type { Metadata } from "next";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "加入UMi社区",
  description: "创建或登录账户，加入UMi社区！",
};

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ThemeToggle className="absolute right-8 top-8" />
      <article className="relative mx-auto max-w-96 p-8">
        <Logo className="mx-auto mb-4 max-w-24" />
        {children}
      </article>
    </div>
  );
}
