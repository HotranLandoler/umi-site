"use client";

import { User } from "next-auth";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { logout } from "@/server/actions/auth-actions";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import UserAvatar from "./user-avatar";

type Props = {
  user: User;
};

export default function UserDropdown({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <UserAvatar userImage={user.image} username={user.name} />
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        {/* <DropdownMenuItem>
          <Link className="w-full" href="#">
            个人主页
          </Link>
        </DropdownMenuItem> */}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  async function handleLogout() {
    await logout();
    toast.success("已退出登录");
  }
}
