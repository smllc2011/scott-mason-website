const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const source = path.join(__dirname, "..", "assets", "asset-sheet.png");
const heroSource = path.join(__dirname, "..", "assets", "source", "hero-bg.jpg");
const iconSourceDir = path.join(__dirname, "..", "assets", "source", "icons");
const publicDir = path.join(__dirname, "..", "public");

// Protected assets — never overwritten by this script.
const PROTECTED_PUBLIC_FILES = new Set([
  "images/scott-mason-logo.png",
]);

// Icons live in the left three columns; hero art sits in the right column.
const iconCrops = {
  "icons/handcuffs.png": { left: 28, top: 52, width: 110, height: 72 },
  "icons/gavel.png": { left: 170, top: 52, width: 110, height: 72 },
  "icons/jail-cell.png": { left: 312, top: 52, width: 72, height: 72 },
  "icons/microphone.png": { left: 28, top: 178, width: 110, height: 72 },
  "icons/community.png": { left: 170, top: 178, width: 68, height: 72 },
  "icons/second-chances.png": { left: 255, top: 178, width: 72, height: 72 },
};

const imageCrops = {
  "images/hero-video.jpg": { left: 454, top: 52, width: 220, height: 90 },
  // Full hallway image (top-right of sheet), not the small label strip below it
  "images/hero-bg.jpg": { left: 676, top: 52, width: 340, height: 140 },
  "images/scott-portrait.jpg": { left: 22, top: 308, width: 420, height: 130 },
  "images/section-texture.jpg": { left: 528, top: 510, width: 468, height: 90 },
};

async function removeWhiteBackground(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const threshold = 240;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 10 })
    .extend({
      top: 4,
      bottom: 4,
      left: 4,
      right: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
}

async function extractIcon(out, region) {
  const outPath = path.join(publicDir, out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const cropped = await sharp(source).extract(region).png().toBuffer();
  const processed = await removeWhiteBackground(cropped);
  await processed.png().toFile(outPath);
}

async function processSourceIcon(name) {
  const sourcePath = path.join(iconSourceDir, name);
  const outPath = path.join(publicDir, "icons", name);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const input = await sharp(sourcePath)
    .resize(256, 256, {
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    })
    .png()
    .toBuffer();

  const processed = await removeWhiteBackground(input);
  await processed.png().toFile(outPath);
}

async function writeIcon(out, region) {
  const name = path.basename(out);
  const sourcePath = path.join(iconSourceDir, name);

  if (fs.existsSync(sourcePath)) {
    await processSourceIcon(name);
    console.log("Wrote", out, "(from assets/source/icons/" + name + ")");
    return;
  }

  await extractIcon(out, region);
  console.log("Wrote", out, "(from palette crop)");
}

async function extractPhoto(out, region) {
  const outPath = path.join(publicDir, out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(source).extract(region).jpeg({ quality: 95 }).toFile(outPath);
}

async function writeHeroBackground(inputPath, fromSourceFile = false) {
  const outPath = path.join(publicDir, "images", "hero-bg.jpg");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const meta = await sharp(inputPath).metadata();
  const minWidth = fromSourceFile ? 2400 : 3840;
  let pipeline = sharp(inputPath);

  if (!fromSourceFile || (meta.width && meta.width < minWidth)) {
    pipeline = pipeline.resize(minWidth, null, {
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: fromSourceFile,
    });
  }

  await pipeline
    .linear(fromSourceFile ? 1.02 : 1.08, fromSourceFile ? -4 : -10)
    .sharpen(fromSourceFile ? { sigma: 0.8 } : { sigma: 1.4, m1: 1.2, m2: 0.5 })
    .jpeg({ quality: 98, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(outPath);

  const outMeta = await sharp(outPath).metadata();
  console.log(
    "Wrote images/hero-bg.jpg",
    fromSourceFile ? "(from assets/source/hero-bg.jpg)" : "(from palette crop)",
    `${outMeta.width}x${outMeta.height}`
  );
}

async function upscale(inFile, width, height) {
  const filePath = path.join(publicDir, inFile);
  const tempPath = `${filePath}.tmp`;
  let pipeline = sharp(filePath);

  if (height) {
    pipeline = pipeline.resize(width, height, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3,
    });
  } else {
    pipeline = pipeline.resize(width, null, {
      kernel: sharp.kernel.lanczos3,
    });
  }

  await pipeline
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(tempPath);
  fs.renameSync(tempPath, filePath);
}

async function main() {
  for (const [out, region] of Object.entries(iconCrops)) {
    await writeIcon(out, region);
  }

  for (const [out, region] of Object.entries(imageCrops)) {
    if (out === "images/hero-bg.jpg") {
      continue;
    }
    await extractPhoto(out, region);
    console.log("Wrote", out);
  }

  if (fs.existsSync(heroSource)) {
    await writeHeroBackground(heroSource, true);
  } else {
    const cropPath = path.join(publicDir, "images", "hero-bg.crop.jpg");
    await sharp(source)
      .extract(imageCrops["images/hero-bg.jpg"])
      .jpeg({ quality: 100 })
      .toFile(cropPath);
    await writeHeroBackground(cropPath, false);
    fs.unlinkSync(cropPath);
    console.warn(
      "NOTE: Palette preview is only 340x140. For mockup clarity, add the full JPG to assets/source/hero-bg.jpg"
    );
  }

  await upscale("images/hero-video.jpg", 1600, 900);
  console.log("Upscaled hero-video.jpg");

  await upscale("images/scott-portrait.jpg", 1200);
  console.log("Upscaled scott-portrait.jpg");
}

main().catch(console.error);
