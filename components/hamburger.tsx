import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Hamburger({ isOpen, setIsOpen }: Props) {
  return (
    <Button
      variant="ghost"
      className={cn("hamburger hamburger--squeeze hidden px-0 md:block", {
        "is-active": isOpen,
      })}
      onClick={handleClick}
      title="Menu"
      aria-controls="mobile-nav"
      aria-expanded={isOpen}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Button>
  );

  function handleClick() {
    setIsOpen(!isOpen);
  }
}
