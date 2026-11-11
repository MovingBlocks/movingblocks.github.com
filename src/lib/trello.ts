import { getCollection } from "astro:content";
import type { CardData } from "./blog";

/** Cards of one Trello list in board order. */
export async function cardsOfList(listId: string) {
  const cards = await getCollection("trello", (c) => c.data.listId === listId);
  return cards.sort((a, b) => a.data.index - b.data.index);
}

/** Project cards for PostListing (default cover, no author/date). */
export async function projectCards(listId: string): Promise<CardData[]> {
  return (await cardsOfList(listId)).map((c) => ({
    title: c.data.name,
    path: `/projects/${c.id}`,
    tags: c.data.tags,
    excerpt: c.data.excerpt,
    type: "project",
  }));
}
