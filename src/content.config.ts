import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import kebabCase from "lodash.kebabcase";
import { terasologyEngine, terasologyModules } from "./loaders/github";
import { trelloCards } from "./loaders/trello";

const issue = z.object({
  title: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  date: z.string(),
  url: z.string(),
});

// Slugs handed out so far, by post directory. Two posts with one slug would
// silently overwrite each other, so a repeat fails the build instead.
const blogSlugs = new Map<string, string>();

const blog = defineCollection({
  // Slug = kebab-cased title, as on the Gatsby site (/blog/<slug>).
  loader: glob({
    base: "./blog",
    pattern: "*/index.md",
    generateId: ({ entry, data }) => {
      const slug = kebabCase(String(data.title));
      for (const [other, taken] of blogSlugs) {
        if (taken === slug && other !== entry) {
          throw new Error(
            `Blog posts ${other} and ${entry} both map to /blog/${slug}; retitle one.`,
          );
        }
      }
      blogSlugs.set(entry, slug);
      return slug;
    },
  }),
  schema: ({ image }) =>
    z.object({
      posttype: z.literal("blog"),
      title: z.string(),
      cover: image(),
      description: z.string().optional(),
      author: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
    }),
});

const modules = defineCollection({
  loader: terasologyModules(),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    description: z.string(),
    moduleDescription: z.string(),
    tags: z.array(z.string()),
    issues: z.array(issue),
  }),
});

const engineIssues = defineCollection({ loader: terasologyEngine(), schema: issue });

const trello = defineCollection({
  loader: trelloCards(),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    listId: z.string(),
    index: z.number(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    avatarUrl: z.string().optional(),
    githubProfile: z.string().optional(),
    timeZone: z.string().optional(),
    countryCode: z.string().optional(),
  }),
});

export const collections = { blog, modules, engineIssues, trello };
