import { statSync } from "node:fs";
import { join } from "node:path";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import sharp from "sharp";

export const PER_PAGE = 9;

export interface GalleryImage {
  name: string;
  date?: string;
  thumb: string;
  full: string;
}

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/gallery/*.jpg", {
  eager: true,
});

function readExifDate(exif: Buffer): string | undefined {
  const tiffStart = exif.toString("ascii", 0, 6) === "Exif\0\0" ? 6 : 0;
  const byteOrder = exif.toString("ascii", tiffStart, tiffStart + 2);
  if (byteOrder !== "II" && byteOrder !== "MM") return undefined;

  const littleEndian = byteOrder === "II";
  const read16 = (offset: number) =>
    littleEndian ? exif.readUInt16LE(offset) : exif.readUInt16BE(offset);
  const read32 = (offset: number) =>
    littleEndian ? exif.readUInt32LE(offset) : exif.readUInt32BE(offset);
  if (read16(tiffStart + 2) !== 42) return undefined;

  const readDirectory = (offset: number) => {
    const start = tiffStart + offset;
    if (start + 2 > exif.length) return [];
    const count = read16(start);
    return Array.from({ length: count }, (_, index) => start + 2 + index * 12).filter(
      (entry) => entry + 12 <= exif.length,
    );
  };
  const firstDirectory = readDirectory(read32(tiffStart + 4));
  let exifDirectoryOffset: number | undefined;
  let dateTime: string | undefined;

  for (const entry of firstDirectory) {
    const tag = read16(entry);
    if (tag === 0x8769) exifDirectoryOffset = read32(entry + 8);
    if (tag === 0x0132) dateTime = readAscii(entry);
  }

  if (exifDirectoryOffset !== undefined) {
    for (const entry of readDirectory(exifDirectoryOffset)) {
      const tag = read16(entry);
      if (tag === 0x9003) return toIsoDate(readAscii(entry));
      if (tag === 0x9004) dateTime = readAscii(entry);
    }
  }

  return toIsoDate(dateTime);

  function readAscii(entry: number): string | undefined {
    if (read16(entry + 2) !== 2) return undefined;
    const count = read32(entry + 4);
    const valueOffset = count <= 4 ? entry + 8 : tiffStart + read32(entry + 8);
    if (valueOffset + count > exif.length) return undefined;
    return exif.toString("ascii", valueOffset, valueOffset + count).replace(/\0+$/, "");
  }

  function toIsoDate(value: string | undefined): string | undefined {
    const match = value?.match(/^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/);
    if (!match) return undefined;
    return `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}Z`;
  }
}

async function getExifDate(path: string): Promise<string | undefined> {
  const metadata = await sharp(path).metadata();
  let exif = metadata.exif;

  if (!exif) {
    const rawProfile = metadata.comments?.find(
      (comment) => comment.keyword === "Raw profile type exif",
    )?.text;
    const hex = rawProfile?.match(/^\s*exif\s+\d+\s+([\s\S]+)$/i)?.[1]?.replace(/\s/g, "");
    if (hex) exif = Buffer.from(hex, "hex");
  }

  return exif ? readExifDate(exif) : undefined;
}

/** All gallery images, newest file first (like the Gatsby site's modifiedTime sort). */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const entries = Object.entries(files).map(([path, mod]) => {
    const name = path
      .split("/")
      .pop()!
      .replace(/\.jpg$/, "");
    // import.meta.url points into the build output, so resolve from the project root
    const sourcePath = join(process.cwd(), "src/assets/gallery", `${name}.jpg`);
    const mtime = statSync(sourcePath).mtime;
    return { name, mtime, sourcePath, image: mod.default };
  });
  entries.sort((a, b) => b.mtime.getTime() - a.mtime.getTime() || a.name.localeCompare(b.name));
  return Promise.all(
    entries.map(async ({ name, sourcePath, image }) => ({
      name,
      date: await getExifDate(sourcePath),
      thumb: (await getImage({ src: image, width: 600, format: "webp" })).src,
      full: (await getImage({ src: image, width: 1200, format: "webp" })).src,
    })),
  );
}
