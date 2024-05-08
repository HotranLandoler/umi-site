import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  className?: string;
  label?: string;
};

export default function AddPostLink({ className, label = "发表内容" }: Props) {
  return (
    <Link className={buttonVariants({ className })} href="/posts/create">
      <Plus />
      {label}
    </Link>
  );
}
