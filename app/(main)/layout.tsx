import SideBar from "@/components/layout/sidebar";
import MainHeader from "@/components/layout/main-header";
import MainFooter from "@/components/layout/main-footer";
import RoundedCornerImage from "@/components/rounded-corner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto grid max-w-[96rem] grid-cols-[1fr_4fr] grid-rows-[auto_1fr] px-8 md:block">
      <SideBar />
      <MainHeader />
      <main className="rounded-[2rem] bg-muted/50">
        <div className="p-12 md:p-8">
          {children}
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
