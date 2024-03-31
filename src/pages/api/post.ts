import type { APIContext, APIRoute } from "astro"

import { posts } from "~/data/post"

export const GET: APIRoute = async function getPosts(context: APIContext) {
  return new Response(JSON.stringify(posts))
}
