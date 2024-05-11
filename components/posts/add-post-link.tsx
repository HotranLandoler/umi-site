import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  className?: string;
  label?: string;
  size?: "default" | "lg";
};

export default function AddPostLink({
  className,
  label = "发表内容",
  size = "default",
}: Props) {
  return (
    <Link className={buttonVariants({ className, size })} href="/posts/create">
      <Plus />
      {label}
    </Link>
  );
}
