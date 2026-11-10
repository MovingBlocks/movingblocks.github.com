import { statSync } from "node:fs";
import { join } from "node:path";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

export const PER_PAGE = 9;

export interface GalleryImage {
  name: string;
  date: string;
  thumb: string;
  full: string;
}

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/gallery/*.jpg", {
  eager: true,
});

/** All gallery images, newest file first (like the Gatsby site's modifiedTime sort). */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const entries = Object.entries(files).map(([path, mod]) => {
    const name = path
      .split("/")
      .pop()!
      .replace(/\.jpg$/, "");
    // import.meta.url points into the build output, so resolve from the project root
    const mtime = statSync(join(process.cwd(), "src/assets/gallery", `${name}.jpg`)).mtime;
    return { name, mtime, image: mod.default };
  });
  entries.sort((a, b) => b.mtime.getTime() - a.mtime.getTime() || a.name.localeCompare(b.name));
  return Promise.all(
    entries.map(async ({ name, mtime, image }) => ({
      name,
      date: mtime.toISOString(),
      thumb: (await getImage({ src: image, width: 600, format: "webp" })).src,
      full: (await getImage({ src: image, width: 1200, format: "webp" })).src,
    })),
  );
}
