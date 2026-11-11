import type { APIRoute } from "astro";
import { getPosts, toCard } from "../../lib/blog";
import { excerpt } from "../../lib/format";

// Full-text index for the blog search island, fetched only when searching.
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const index = await Promise.all(
    posts.map(async (post) => ({
      ...(await toCard(post)),
      content: excerpt(post.body, Number.MAX_SAFE_INTEGER),
    })),
  );
  return new Response(JSON.stringify(index), {
    headers: { "content-type": "application/json" },
  });
};
