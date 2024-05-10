import "server-only";
import { headers } from "next/headers";
import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";

const callerFactory = createCallerFactory(appRouter);
export const trpcApi = callerFactory({});
