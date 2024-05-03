import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server/index";

function routeHandler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
    onError: function handleError({ error }) {
      alert(error.message);
    },
  });
}

export { routeHandler as GET, routeHandler as POST };
