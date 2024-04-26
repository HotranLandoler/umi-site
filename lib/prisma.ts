import { PrismaClient } from "@prisma/client";

// Fix prisma client in Next.js

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prismaClient;
}

export const prisma = prismaClient;

function prismaClientSingleton() {
  return new PrismaClient();
}
