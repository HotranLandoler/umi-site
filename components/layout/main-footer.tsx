import SocialLinks from "../social-links";

export default function MainFooter() {
  return (
    <footer className="main-container flex items-center justify-between pb-12">
      <small className="border-t-2">© 2024 UMi游研社</small>
      <SocialLinks />
    </footer>
  );
}
