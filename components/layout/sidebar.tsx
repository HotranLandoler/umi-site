import SocialLinks from "../social-links";
import { Nav } from "../nav";
import Logo from "../logo";

export default function SideBar() {
  return (
    <div className="sticky top-0 row-span-2 mr-8 max-h-screen self-start text-nowrap pt-8 md:hidden">
      <div className="mx-auto max-w-32">
        <Header />
        <Nav />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="mb-8 text-center">
      <Logo className="mb-2 flex-col" />
      <p className="mb-4 text-2xl font-bold">UMi游研社</p>
      <SocialLinks />
    </header>
  );
}
