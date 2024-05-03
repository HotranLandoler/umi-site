import SocialLinks from "../social-links";

export default function MainFooter() {
  return (
    <footer className="mt-8 flex items-center justify-between border-t-2 pt-4">
      <small>© 2024 UMi游研社</small>
      <SocialLinks />
    </footer>
  );
}
