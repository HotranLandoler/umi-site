import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";
import RoundedCornerImage from "@/components/rounded-corner";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] grid-rows-[auto_1fr] px-4 md:block">
      <SideBar />
      <MainHeader />
      <main className="rounded-[2rem] bg-muted/50">
        <div className="flex h-full flex-col">
          <div className="flex-grow">{children}</div>
          <MainFooter />
        </div>
        <BottomRoundedEdge />
      </main>
    </div>
  );
}

function BottomRoundedEdge() {
  return (
    <div className="sticky bottom-0 h-4 bg-background">
      <RoundedCornerImage className="bottom-4 left-0" />
      <RoundedCornerImage className="bottom-4 right-0 -rotate-90" />
    </div>
  );
}
