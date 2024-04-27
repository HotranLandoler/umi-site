import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";
import "./globals.css";
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
      <body
        className={cn(
          "mx-auto grid max-w-[96rem] grid-cols-[1fr_4fr] grid-rows-[auto_1fr] px-8 pb-4 text-black md:block",
          notoSans.variable,
        )}>
        <SideBar />
        <MainHeader />
        <main>
          <div className="mb-12 rounded-[2rem] bg-muted/50 p-12 md:p-8">
            {children}
          </div>
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
