import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  label?: string;
};

export default function AddPostLink({ label = "发表内容" }: Props) {
  return (
    <Link className={buttonVariants()} href="/post/create">
      <Plus />
      {label}
    </Link>
  );
}
