import NextAuth from "next-auth";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);
const protectedRoutes = ["/posts/create"];

export default auth(function authorizeRequest(req) {
  const { pathname } = req.nextUrl;
  if (!req.auth && protectedRoutes.includes(pathname)) {
    const url = req.url.replace(req.nextUrl.pathname, "/login");
    return Response.redirect(url);
  }
});

export const config = {
  matcher: "/posts/create",
};
