import { createReadStream, existsSync } from "node:fs";
import { cp, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import kebabCase from "lodash.kebabcase";
import { isPublished } from "../lib/published";

/**
 * Map of post slug -> post directory; slug = kebab-cased frontmatter title.
 * With `publishedOnly`, posts dated in the future are left out.
 */
async function postDirs(blogDir: string, publishedOnly = false): Promise<Map<string, string>> {
  const dirs = new Map<string, string>();
  for (const dir of await readdir(blogDir)) {
    const md = path.join(blogDir, dir, "index.md");
    if (!existsSync(md)) continue;
    const text = await readFile(md, "utf8");
    const title = /^title:\s*["']?(.*?)["']?\s*$/m.exec(text)?.[1];
    const date = /^date:\s*["']?(.*?)["']?\s*$/m.exec(text)?.[1];
    if (publishedOnly && date && !isPublished(new Date(date))) continue;
    if (title) dirs.set(kebabCase(title), path.join(blogDir, dir));
  }
  return dirs;
}

/**
 * Serves files co-located with a post (raw-HTML <img>/<video> sources that Astro's
 * markdown pipeline leaves untouched) at /blog/<slug>/<file>, like Gatsby's
 * copy-linked-files did.
 */
export default function blogAssets(): AstroIntegration {
  let root: string;
  return {
    name: "blog-assets",
    hooks: {
      "astro:config:done": ({ config }) => {
        root = fileURLToPath(config.root);
      },
      "astro:server:setup": async ({ server }) => {
        const dirs = await postDirs(path.join(root, "blog"));
        server.middlewares.use((req, res, next) => {
          const m = /^\/blog\/([^/]+)\/([^/?]+\.[a-z0-9]+)(?:\?.*)?$/i.exec(req.url ?? "");
          const file = m && dirs.get(m[1]) && path.join(dirs.get(m[1])!, decodeURIComponent(m[2]));
          if (file && !file.endsWith(".md") && existsSync(file)) {
            createReadStream(file).pipe(res);
            return;
          }
          next();
        });
      },
      "astro:build:done": async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const dirs = await postDirs(path.join(root, "blog"), true);
        for (const [slug, src] of dirs) {
          await cp(src, path.join(out, "blog", slug), {
            recursive: true,
            filter: (f) => !f.endsWith(".md"),
          });
        }
        logger.info(`copied co-located assets of ${dirs.size} posts`);
      },
    },
  };
}
