import BilibiliLogo from "./icons/bilibili";
import QQLogo from "./icons/qq";

export default function SocialLinks() {
  const logoClassName = "w-6 h-auto";

  return (
    <ul className="flex justify-center gap-2">
      <SocialLink
        href="https://space.bilibili.com/3493083104676301"
        label="B站账号">
        <BilibiliLogo className={logoClassName} />
      </SocialLink>
      <SocialLink href="#" label="QQ群">
        <QQLogo className={logoClassName} />
      </SocialLink>
    </ul>
  );
}

function SocialLink({
  href,
  label,
  children,
}: Readonly<{
  href: string;
  label: string;
  children: React.ReactNode;
}>) {
  return (
    <li>
      <a
        className="text-muted-foreground hover:text-foreground"
        target="_blank"
        rel="noopener noreferer"
        href={href}
        title={label}
        aria-label={label}>
        {children}
      </a>
    </li>
  );
}
