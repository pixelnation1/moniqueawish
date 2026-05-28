/**
 * Generates WebP variants + blur placeholders for public/images.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const META_OUT = path.join(process.cwd(), "lib", "image-meta.json");

/** @type {Record<string, { original: string; webp: string; width: number; height: number; blurDataURL: string; hasAlpha: boolean }>} */
const meta = {};

const files = fs.readdirSync(IMAGES_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const inputPath = path.join(IMAGES_DIR, file);
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  const ext = path.extname(file).toLowerCase();
  const original = `/images/${file}`;
  const webpPath = path.join(IMAGES_DIR, `${base}.webp`);
  const webp = `/images/${base}.webp`;

  const imageMeta = await sharp(inputPath).metadata();
  const width = imageMeta.width ?? 1200;
  const height = imageMeta.height ?? 800;
  const hasAlpha = imageMeta.hasAlpha ?? ext === ".png";

  await sharp(inputPath)
    .webp({
      quality: hasAlpha ? 88 : 82,
      effort: 4,
      alphaQuality: hasAlpha ? 90 : undefined,
    })
    .toFile(webpPath);

  const blurBuffer = await sharp(inputPath)
    .resize(12, 12, { fit: "inside" })
    .webp({ quality: 40 })
    .toBuffer();

  meta[base] = {
    original,
    webp,
    width,
    height,
    hasAlpha,
    blurDataURL: `data:image/webp;base64,${blurBuffer.toString("base64")}`,
  };

  const originalSize = fs.statSync(inputPath).size;
  const webpSize = fs.statSync(webpPath).size;
  const saved = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);
  console.log(
    `${file} → ${base}.webp (${(originalSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB, -${saved}%)`,
  );
}

fs.writeFileSync(META_OUT, `${JSON.stringify(meta, null, 2)}\n`);
console.log(`\nWrote ${Object.keys(meta).length} entries to lib/image-meta.json`);
