// One-off asset pipeline (sharp). Re-run safe: node scripts/make-assets.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const P = (...a) => path.join("public", ...a);

// 2. Square icons from the real logo
const icon = (s, f) => sharp(P("favicon.jpg")).resize(s, s).png({ compressionLevel: 9 }).toFile(P(f));
await icon(192, "icon-192.png"); await icon(512, "icon-512.png"); await icon(180, "apple-touch-icon.png"); await icon(48, "favicon-48.png");

// 4. Catalogue: 480px thumb + 1100px full WebP next to the original JPG (kept for WhatsApp references)
fs.mkdirSync(P("catalogue", "t"), { recursive: true });
fs.mkdirSync(P("catalogue", "l"), { recursive: true });
for (const f of fs.readdirSync(P("catalogue")).filter((f) => f.endsWith(".jpg"))) {
  const n = f.replace(".jpg", "");
  await sharp(P("catalogue", f)).resize(480).webp({ quality: 72 }).toFile(P("catalogue", "t", `${n}.webp`));
  await sharp(P("catalogue", f)).resize(1100, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(P("catalogue", "l", `${n}.webp`));
}

// 5. Blog covers PNG -> WebP
for (const f of fs.readdirSync("public").filter((f) => /^blog_.*\.png$/.test(f))) {
  await sharp(P(f)).resize(1400, null, { withoutEnlargement: true }).webp({ quality: 78 }).toFile(P(f.replace(".png", ".webp")));
}

// 6. Share image from the real logo is kept as-is (og-image.jpg already exists)
console.log("done");
