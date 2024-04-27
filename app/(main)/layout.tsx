import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto grid max-w-[96rem] grid-cols-[1fr_4fr] grid-rows-[auto_1fr] px-8 pb-4 md:block">
      <SideBar />
      <MainHeader />
      <main>
        <div className="mb-12 rounded-[2rem] bg-muted/50 p-12 md:p-8">
          {children}
        </div>
        <MainFooter />
      </main>
    </div>
  );
}
