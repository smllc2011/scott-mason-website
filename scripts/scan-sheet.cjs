const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const source = path.join(__dirname, "..", "assets", "asset-sheet.png");
const debugDir = path.join(__dirname, "..", "assets", "debug-crops");

async function main() {
  fs.mkdirSync(debugDir, { recursive: true });

  for (const height of [30, 34, 36, 38, 40]) {
    await sharp(source)
      .extract({ left: 758, top: 236, width: 228, height })
      .jpeg({ quality: 92 })
      .toFile(path.join(debugDir, `hall-h-${height}.jpg`));
  }

  for (const width of [350, 380, 400, 420]) {
    await sharp(source)
      .extract({ left: 22, top: 378, width, height: 130 })
      .jpeg({ quality: 92 })
      .toFile(path.join(debugDir, `portrait-w-${width}.jpg`));
  }
}

main().catch(console.error);
