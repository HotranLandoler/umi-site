"use client";

import { User } from "lucia";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/server/actions";
import { Button } from "./ui/button";
import Link from "next/link";

export default function UserDropdown({ user }: { user: User }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2" variant="ghost">
          {user.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href="#">个人主页</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  async function handleLogout() {
    const result = await logout();
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success("已退出登录");
    router.refresh();
  }
}
