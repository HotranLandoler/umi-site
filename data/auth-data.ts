import { prisma } from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      password: true,
      image: true,
      role: true,
    },
  });
}
