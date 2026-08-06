const fs = require("fs");
const path = require("path");

const file = process.argv[2];
if (!file) {
  console.error("Usage: node extract-wix-images.cjs <html-file>");
  process.exit(1);
}

const html = fs.readFileSync(path.resolve(file), "utf8");

const imgs = [
  ...new Set(
    [...html.matchAll(/static\.wixstatic\.com\/media\/[^"'\s<>]+/g)].map(
      (m) => "https://" + m[0].split("?")[0],
    ),
  ),
];

console.log(imgs.filter((u) => !u.includes("11062b_")).join("\n"));
