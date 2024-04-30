import { authRouter } from "./routers/auth-router";
import { postRouter } from "./routers/post-router";
import { router } from "./trpc";

export const appRouter = router({
  auth: authRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
