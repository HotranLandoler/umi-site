import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

import Announcement from "@/components/layout/announcement";
import { ThemeProvider } from "@/components/layout/theme-provider";
import TRPCProviders from "@/components/trpc-providers";

import "@/app/globals.css";
import "@theme-toggles/react/css/Expand.css";

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
      <body className={cn("font-sans", notoSans.variable)}>
        <TRPCProviders>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Announcement />
            {children}
          </ThemeProvider>
        </TRPCProviders>
      </body>
    </html>
  );
}
