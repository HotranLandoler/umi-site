import type { Metadata } from "next";
import Logo from "@/components/logo";

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
    <article className="mx-auto max-w-96 p-8">
      <Logo className="mx-auto mb-4 max-w-32" />
      {children}
    </article>
  );
}
