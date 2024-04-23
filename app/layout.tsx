import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";
import "./globals.css";

const notoSans = Noto_Sans_SC({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: {
    template: "%s | UMi游研社",
    default: "UMi游研社",
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
    <html lang="zh" className={notoSans.className}>
      <body className="mx-auto grid max-w-[96rem] grid-cols-[1fr_4fr] grid-rows-[auto_1fr] px-8 pb-4 text-black">
        <SideBar />
        <MainHeader />
        <main>
          <div className="mb-12 rounded-[2rem] bg-slate-100 p-12">
            {children}
          </div>
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
