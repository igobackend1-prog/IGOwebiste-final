// One-off: pull blog images from external origin and convert PNG/JPG → WebP.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const BASE = "https://www.igoagritechfarms.com/images/";
const OUT = path.resolve("public/assets/blog");

// Each entry: [remotePath, localFilename]
const FILES = [
  // post 1 — IGO Agrimart
  ["blog1.png", "blog1.webp"],
  ["blog11.webp", "blog11.webp"],
  ["blog111.webp", "blog111.webp"],
  ["blog1111.webp", "blog1111.webp"],
  ["blog11111.webp", "blog11111.webp"],
  ["blog111111.webp", "blog111111.webp"],
  // post 2 — Icon of India
  ["blog2.webp", "blog2.webp"],
  // post 3 — Independence Day
  ["blog3.webp", "blog3.webp"],
  ["blog33.webp", "blog33.webp"],
  // post 4 — JNN IV
  ["blog4.webp", "blog4.webp"],
  ["blog44.webp", "blog44.webp"],
  ["blog444.webp", "blog444.webp"],
  // post 5 — Award 2022
  ["blog5.webp", "blog5.webp"],
  ["b51.jpg", "b51.webp"],
  ["b52.jpg", "b52.webp"],
  ["b53.webp", "b53.webp"],
  ["b54.webp", "b54.webp"],
  ["b55.webp", "b55.webp"],
  ["b56.webp", "b56.webp"],
  ["b57.webp", "b57.webp"],
  ["b58.webp", "b58.webp"],
  // post 7 — Campus drive
  ["blogs/b7-2.webp", "b7-2.webp"],
  ["blogs/b7-3.webp", "b7-3.webp"],
  ["blogs/b7-4.webp", "b7-4.webp"],
  // post 8
  ["blog8.jpg", "blog8.webp"],
  // post 9 — Press union
  ["blogs/b9-1.webp", "b9-1.webp"],
  ["blogs/b9-2.webp", "b9-2.webp"],
  ["blogs/b9-3.webp", "b9-3.webp"],
];

await mkdir(OUT, { recursive: true });

const results = await Promise.all(
  FILES.map(async ([remote, local]) => {
    const url = BASE + remote;
    const target = path.join(OUT, local);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const srcKB = (buf.length / 1024).toFixed(1);

      let out = await sharp(buf).webp({ quality: 85, effort: 6 }).toBuffer();
      // If source was already WebP and our re-encode is larger, keep the original.
      if (remote.endsWith(".webp") && out.length > buf.length) {
        out = buf;
      }
      await writeFile(target, out);
      const outKB = (out.length / 1024).toFixed(1);
      return `OK  ${remote.padEnd(22)} → ${local.padEnd(16)} ${srcKB}KB → ${outKB}KB`;
    } catch (err) {
      return `ERR ${remote}: ${err.message}`;
    }
  })
);

console.log(results.join("\n"));
const errors = results.filter((r) => r.startsWith("ERR"));
if (errors.length) process.exit(1);
