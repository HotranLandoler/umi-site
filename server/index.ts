import { postRouter } from "./routers/post-router";
import { router } from "./trpc";

export const appRouter = router({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
