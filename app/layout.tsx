import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMi游研社",
  description: "UMi游研社的官方主页和数据库",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="mx-auto grid max-w-[96rem] grid-cols-[1fr_4fr] grid-rows-[auto_1fr] px-8 pb-4">
        <SideBar />
        <MainHeader />
        <main>
          {children}
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
