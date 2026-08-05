const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const source = path.join(__dirname, "..", "assets", "asset-sheet.png");

async function main() {
  const input = source;
  if (!fs.existsSync(input)) {
    throw new Error(`Asset sheet not found at ${source}`);
  }

  const meta = await sharp(input).metadata();
  console.log("Source:", input);
  console.log("Dimensions:", meta.width, "x", meta.height);

  const w = meta.width;
  const h = meta.height;

  // Crop regions as percentages of sheet (calibrated for the provided layout)
  const crops = {
    "public/icons/handcuffs.png": { left: 0.04, top: 0.055, width: 0.14, height: 0.11 },
    "public/icons/gavel.png": { left: 0.22, top: 0.055, width: 0.14, height: 0.11 },
    "public/icons/jail-cell.png": { left: 0.40, top: 0.055, width: 0.14, height: 0.11 },
    "public/icons/microphone.png": { left: 0.04, top: 0.175, width: 0.14, height: 0.11 },
    "public/icons/community.png": { left: 0.22, top: 0.175, width: 0.14, height: 0.11 },
    "public/icons/second-chances.png": { left: 0.40, top: 0.175, width: 0.14, height: 0.11 },
    "public/images/hero-video.jpg": { left: 0.04, top: 0.34, width: 0.44, height: 0.28 },
    "public/images/hero-bg.jpg": { left: 0.52, top: 0.34, width: 0.44, height: 0.28 },
    "public/images/scott-portrait.jpg": { left: 0.04, top: 0.66, width: 0.44, height: 0.26 },
    "public/images/section-texture.jpg": { left: 0.52, top: 0.66, width: 0.44, height: 0.26 },
  };

  for (const [out, region] of Object.entries(crops)) {
    const outPath = path.join(__dirname, "..", out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    const left = Math.round(region.left * w);
    const top = Math.round(region.top * h);
    const width = Math.round(region.width * w);
    const height = Math.round(region.height * h);

    const pipeline = sharp(input).extract({ left, top, width, height });

    if (out.endsWith(".jpg")) {
      await pipeline.jpeg({ quality: 92 }).toFile(outPath);
    } else {
      await pipeline.png().toFile(outPath);
    }

    console.log("Wrote", out, `${width}x${height}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
