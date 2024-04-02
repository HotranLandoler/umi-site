import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";

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
      <body className="grid min-h-screen grid-cols-[1fr_4fr] grid-rows-[auto_1fr] gap-4 px-8">
        <SideBar />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
