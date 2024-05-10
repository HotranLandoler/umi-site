// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// // import { verifySession } from "./lib/dal";
// // import { lucia } from "./lib/lucia";
// import { cookies } from "next/headers";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   // const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
//   // const { isAuth } = await verifySession();
//   if (!true) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// }

// // See "Matching Paths" below to learn more

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
