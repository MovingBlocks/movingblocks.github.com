import type { Loader } from "astro/loaders";
import { excerpt } from "../lib/format";

// Public boards: https://trello.com/b/5QQGHuTt (ideas), https://trello.com/b/wdOVNQgo (mentors)
export const LISTS = {
  readyIdeas: "5c3aab0bd640fe19e4069de5",
  ongoingProjects: "60ddd7cf64da4b3ee8c5a2e9",
  mentors: "5eb715b48caa18614425c25e",
} as const;

const FIELDS = {
  github: "5eb71b3551de3a59ce8d9bd8",
  timeZone: "5eb71b53f52d88487f550e83",
  country: "5eb71b7081a67c3b58ea67ed",
};

interface RawCard {
  id: string;
  name: string;
  desc: string;
  url: string;
  labels: { name: string }[];
  attachments?: { url: string; mimeType: string | null; name: string }[];
  customFieldItems?: { idCustomField: string; value?: { text?: string } }[];
}

/** Cards of the listed Trello lists; keeps cached cards if Trello is unreachable. */
export const trelloCards = (): Loader => ({
  name: "trello-cards",
  load: async ({ store, logger, parseData, generateDigest, renderMarkdown }) => {
    const entries: { card: RawCard; listId: string; index: number }[] = [];
    try {
      for (const listId of Object.values(LISTS)) {
        const res = await fetch(
          `https://api.trello.com/1/lists/${listId}/cards?fields=id,name,desc,url,labels` +
            "&attachments=true&attachment_fields=url,name,mimeType&customFieldItems=true",
        );
        if (!res.ok) throw new Error(`Trello ${res.status} for list ${listId}`);
        const cards = (await res.json()) as RawCard[];
        cards.forEach((card, index) => entries.push({ card, listId, index }));
      }
    } catch (err) {
      logger.warn(`Trello fetch failed (${err}); keeping ${store.keys().length} cached cards`);
      return;
    }
    store.clear();
    for (const { card, listId, index } of entries) {
      const field = (id: string) =>
        card.customFieldItems?.find((f) => f.idCustomField === id)?.value?.text;
      const avatar = card.attachments?.find((a) => /\.(png|jpe?g|gif|webp)$/i.test(a.name));
      const data = await parseData({
        id: card.id,
        data: {
          name: card.name,
          url: card.url,
          listId,
          index,
          tags: card.labels.map((l) => l.name),
          excerpt: excerpt(card.desc, 140),
          avatarUrl: avatar?.url,
          githubProfile: field(FIELDS.github),
          timeZone: field(FIELDS.timeZone),
          countryCode: field(FIELDS.country)?.toLowerCase(),
        },
      });
      const rendered = await renderMarkdown(card.desc);
      store.set({ id: card.id, data, rendered, digest: generateDigest({ data, desc: card.desc }) });
    }
    logger.info(`loaded ${entries.length} Trello cards`);
  },
});
