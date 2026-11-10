// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import blogAssets from "./src/integrations/blog-assets.ts";

export default defineConfig({
  site: "https://terasology.org",
  integrations: [react(), sitemap(), blogAssets()],
  image: {
    // mentor avatars: trello.com attachment URLs redirect to signed files.trello.com URLs
    remotePatterns: [
      { protocol: "https", hostname: "trello.com" },
      { protocol: "https", hostname: "files.trello.com" },
    ],
  },
});
