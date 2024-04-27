import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

import "@/app/globals.css";

import { siteTitle } from "@/lib/data";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans_SC({
  subsets: ["vietnamese"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: "UMi游研社的官方主页和数据库",
  metadataBase: new URL("https://umi-games.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={cn("font-sans", notoSans.variable)}>{children}</body>
    </html>
  );
}
