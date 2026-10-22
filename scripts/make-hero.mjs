// Hero background GIF -> animated WebP variants. node scripts/make-hero.mjs
import sharp from "sharp";
const P = (f) => `public/${f}`;
const meta = await sharp(P("header-bg.gif"), { animated: true, pages: -1 }).metadata();
const full = await sharp(P("header-bg.gif"), { animated: true, pages: -1 }).raw().toBuffer({ resolveWithObject: true });
const ph = meta.pageHeight, ch = full.info.channels, fsz = meta.width * ph * ch;
async function variant(step, width, q, out) {
  const frames = [];
  for (let f = 0; f < meta.pages; f += step) {
    let fr = sharp(full.data.subarray(f * fsz, (f + 1) * fsz), { raw: { width: meta.width, height: ph, channels: ch } });
    if (width !== meta.width) fr = fr.resize(width);
    frames.push(await fr.raw().toBuffer({ resolveWithObject: true }));
  }
  const h = frames[0].info.height;
  await sharp(Buffer.concat(frames.map((f) => f.data)), { raw: { width, height: h * frames.length, channels: ch, pageHeight: h } })
    .webp({ quality: q, effort: 6, loop: 0, delay: frames.map(() => 70 * step) })
    .toFile(P(out));
}
await variant(3, 400, 40, "header-bg.webp");
await variant(5, 300, 38, "header-bg-sm.webp");
