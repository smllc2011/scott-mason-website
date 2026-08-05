const path = require("path");
const sharp = require("sharp");

const source = path.join(__dirname, "..", "assets", "asset-sheet.png");
const outDir = path.join(__dirname, "..", "assets", "debug-crops");

async function main() {
  for (let top = 250; top <= 320; top += 10) {
    for (const height of [70, 85, 100, 115]) {
      await sharp(source)
        .extract({ left: 22, top, width: 420, height })
        .jpeg({ quality: 92 })
        .toFile(path.join(outDir, `portrait-t${top}-h${height}.jpg`));
    }
  }
  console.log("Wrote portrait scan crops");
}

main().catch(console.error);
