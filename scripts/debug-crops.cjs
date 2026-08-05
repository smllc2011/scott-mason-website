const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const source = path.join(__dirname, "..", "assets", "asset-sheet.png");
const debugDir = path.join(__dirname, "..", "assets", "debug-crops");

async function main() {
  const block = sharp(source).extract({ left: 528, top: 255, width: 478, height: 200 });
  fs.mkdirSync(debugDir, { recursive: true });

  for (const top of [0, 4, 8, 12, 16, 20, 24]) {
    await block
      .clone()
      .extract({ left: 0, top, width: 478, height: 90 })
      .jpeg({ quality: 92 })
      .toFile(path.join(debugDir, `hall-top-${top}.jpg`));
  }
}

main().catch(console.error);
