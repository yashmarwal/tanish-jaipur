// Cuts the real TC monogram (public/favicon.jpg) out onto transparency. node scripts/make-logo.mjs
import sharp from "sharp";
const P = (f) => `public/${f}`;
const src = await sharp(P("favicon.jpg")).removeAlpha().greyscale().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = src.info;
const alpha = Buffer.alloc(w * h);
let minX = w, minY = h, maxX = 0, maxY = 0;
for (let i = 0; i < w * h; i++) {
  const x = i % w, y = (i / w) | 0;
  const watermark = x > 900 && y > 900; // sparkle in the bottom-right corner
  const a = watermark ? 0 : Math.max(0, Math.min(255, Math.round(((228 - src.data[i]) / (228 - 50)) * 255)));
  alpha[i] = a;
  if (a > 200) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
}
// Thicken the hairline strokes a touch so the mark holds up at 28-44px in the header and footer.
const thick = await sharp(alpha, { raw: { width: w, height: h, channels: 1 } }).blur(3.4).linear(3.4, -95).extractChannel(0).raw().toBuffer();
thick.copy(alpha);
const pad = 20;
const box = { left: minX - pad, top: minY - pad, width: maxX - minX + 2 * pad, height: maxY - minY + 2 * pad };
console.log(box);
for (const [rgb, file] of [[{ r: 61, g: 43, b: 31 }, "logo-ink.png"], [{ r: 250, g: 246, b: 241 }, "logo-cream.png"]]) {
  const rgba = await sharp({ create: { width: w, height: h, channels: 3, background: rgb } })
    .joinChannel(alpha, { raw: { width: w, height: h, channels: 1 } })
    .png()
    .toBuffer();
  await sharp(rgba).extract(box).resize(192, 192).png({ compressionLevel: 9 }).toFile(P(file));
}
