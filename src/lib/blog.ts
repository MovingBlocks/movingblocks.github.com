import { getImage } from "astro:assets";
import { getCollection, type CollectionEntry } from "astro:content";
import { excerpt } from "./format";

export type Post = CollectionEntry<"blog">;

/** Card data shared by Astro listings and the React search island. */
export interface CardData {
  title: string;
  path: string;
  cover?: string;
  tags: string[];
  excerpt: string;
  author?: string;
  date?: string;
  type: "blog" | "project";
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function toCard(post: Post): Promise<CardData> {
  const cover = await getImage({ src: post.data.cover, width: 600, format: "webp" });
  return {
    title: post.data.title,
    path: `/blog/${post.id}`,
    cover: cover.src,
    tags: post.data.tags,
    excerpt: excerpt(post.body),
    author: post.data.author,
    date: post.data.date.toISOString(),
    type: "blog",
  };
}
