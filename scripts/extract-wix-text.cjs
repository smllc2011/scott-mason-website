const fs = require("fs");
const path = require("path");

const file = process.argv[2];
const html = fs.readFileSync(path.resolve(file), "utf8");

const texts = [
  ...html.matchAll(/<p[^>]*class="font_7[^"]*"[^>]*>([\s\S]*?)<\/p>/g),
].map((m) =>
  m[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\u200b/g, "")
    .trim(),
);

texts.filter((t) => t.length > 5).forEach((t) => console.log("---\n" + t));
