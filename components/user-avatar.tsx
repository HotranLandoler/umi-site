import Image from "next/image";
import { User as UserIcon } from "lucide-react";
import { User } from "next-auth";

import { Avatar, AvatarFallback } from "./ui/avatar";

type Props = {
  userImage: string | null | undefined;
  username: string | null | undefined;
};

export default function UserAvatar({ userImage, username }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        {userImage ? (
          <div className="aspect-square h-full w-full">
            <Image fill src={userImage} alt="头像" />
          </div>
        ) : (
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        )}
      </Avatar>
      {username}
    </div>
  );
}
