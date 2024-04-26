import SocialLinks from "../social-links";
import Nav from "../nav";
import Logo from "../logo";

import { umiDbSections } from "@/lib/data";

export default function SideBar() {
  return (
    <div className="sticky top-4 row-span-2 max-h-screen self-start md:hidden">
      <div className="mx-auto max-w-32">
        <Header />
        <Nav umiDbSections={umiDbSections} />
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
